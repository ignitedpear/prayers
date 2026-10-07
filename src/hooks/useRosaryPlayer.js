import { useCallback, useEffect, useRef, useState } from 'react';

// Drives a single shared <audio> element for the whole Rosary page — used by
// both the List and Slideshow views, so there is exactly one play head and
// one position no matter which view is showing. Playback auto-advances
// through `items` in order, looping a step's clip in place `repeat` times
// (e.g. 10 for a decade's Hail Mary, 3 for the opening Hail Marys — see
// `repeatIndex`, 1-based) before moving to the next step; `next`/`prev` let
// the player (or a view's own Next/Back controls) skip a whole step
// manually, independent of how many repeats it has left.
//
// `items`: array of `{ src, repeat }`, one per step, in order.
// `rate`: playback speed multiplier, applied live without reloading the track.
//
// `isOpen` is the player's visibility (the "Pray the Rosary" button opens
// it, the close button hides it); it's independent of `isPlaying` so a
// visitor can pause without closing, or close without necessarily having
// been mid-playback.
//
// `unavailable` (not `error`) means the file genuinely failed to load (e.g.
// still just an empty placeholder) — distinct from the browser silently
// refusing an autoplay attempt, which we don't treat as a problem.
export function useRosaryPlayer({ items, rate }) {
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [repeatIndex, setRepeatIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [finished, setFinished] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1 through the current clip

  // "Latest value" refs so the mount-once `ended`/`error` listeners always
  // see current state/props without having to be torn down and re-attached
  // on every index or repeat change.
  const itemsRef = useRef(items);
  itemsRef.current = items;
  const currentIndexRef = useRef(currentIndex);
  currentIndexRef.current = currentIndex;
  const repeatIndexRef = useRef(repeatIndex);
  repeatIndexRef.current = repeatIndex;

  if (!audioRef.current && typeof Audio !== 'undefined') {
    audioRef.current = new Audio();
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    const handleEnded = () => {
      const item = itemsRef.current[currentIndexRef.current];
      const repeat = item?.repeat || 1;

      if (repeatIndexRef.current < repeat) {
        // Same clip, one more time — replay in place rather than reload.
        setRepeatIndex((r) => r + 1);
        audio.currentTime = 0;
        // A rejected play() here (most commonly the phone's screen locking,
        // or the browser backgrounding the tab and suspending audio) is NOT
        // a missing-file error — the clip is fine, playback just got
        // interrupted and the browser won't resume it without a fresh tap.
        // Flip back to "paused" (isPlaying -> false) rather than marking the
        // step `unavailable`, which would both show the wrong message and
        // permanently disable the Play button.
        audio.play().catch(() => setIsPlaying(false));
        return;
      }

      setRepeatIndex(1);
      setCurrentIndex((i) => {
        const next = i + 1;
        if (next >= itemsRef.current.length) {
          setIsPlaying(false);
          setFinished(true);
          return i;
        }
        return next;
      });
    };
    const handleError = () => setUnavailable(true);
    const handleTimeUpdate = () => {
      if (audio.duration) setProgress(audio.currentTime / audio.duration);
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const item = items[currentIndex];
    const src = item?.src;
    setProgress(0);

    if (!src) {
      setUnavailable(true);
      setIsPlaying(false);
      return;
    }

    setUnavailable(false);
    const absolute = new URL(src, window.location.href).href;
    if (audio.src !== absolute) {
      audio.src = src;
    }
    audio.playbackRate = rate;

    if (isPlaying) {
      // Same reasoning as the repeat-loop branch above: a rejected play()
      // here is usually the OS/browser suspending audio (lock screen,
      // backgrounded tab), not a broken file — fall back to "paused", not
      // "unavailable".
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [currentIndex, isPlaying, items, rate]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = rate;
  }, [rate]);

  // Best-effort auto-resume: if the tab was backgrounded mid-playback and the
  // browser paused the element outright (common right after a phone unlocks
  // again), try to pick it back up as soon as the page is visible once more.
  // This can still be rejected on stricter mobile browsers that require a
  // real tap — in which case it quietly falls back to the same "paused,
  // tap play to resume" state as above, so there's no downside to trying.
  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (document.visibilityState === 'visible' && isPlaying && audio && audio.paused) {
        audio.play().catch(() => setIsPlaying(false));
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isPlaying]);

  const play = useCallback(() => setIsPlaying(true), []);
  const pause = useCallback(() => setIsPlaying(false), []);
  const toggle = useCallback(() => setIsPlaying((p) => !p), []);

  // Jumping to a step (e.g. clicking an accordion section) just moves the
  // play head there; it doesn't force play/pause either way.
  const goTo = useCallback((index) => {
    setUnavailable(false);
    setFinished(false);
    setRepeatIndex(1);
    setCurrentIndex(index);
  }, []);

  const next = useCallback(() => {
    setUnavailable(false);
    setFinished(false);
    setRepeatIndex(1);
    setCurrentIndex((i) => Math.min(i + 1, itemsRef.current.length - 1));
  }, []);

  const prev = useCallback(() => {
    setUnavailable(false);
    setFinished(false);
    setRepeatIndex(1);
    setCurrentIndex((i) => Math.max(i - 1, 0));
  }, []);

  // The "Pray the Rosary" button: always starts a fresh run from the top.
  const openAndPlay = useCallback(() => {
    setUnavailable(false);
    setFinished(false);
    setRepeatIndex(1);
    setCurrentIndex(0);
    setIsOpen(true);
    setIsPlaying(true);
  }, []);

  // The player's close button: pause and hide, keeping position in case
  // it's reopened later (not used today, but harmless to preserve).
  const close = useCallback(() => {
    setIsPlaying(false);
    setIsOpen(false);
  }, []);

  // Used when the underlying Rosary changes out from under the player (e.g.
  // the visitor picked a different date) — any in-flight position no longer
  // points at a meaningful step, so go back to a clean, closed slate.
  const reset = useCallback(() => {
    setIsPlaying(false);
    setIsOpen(false);
    setCurrentIndex(0);
    setRepeatIndex(1);
    setUnavailable(false);
    setFinished(false);
  }, []);

  return {
    currentIndex,
    repeatIndex,
    isPlaying,
    isOpen,
    unavailable,
    finished,
    progress,
    play,
    pause,
    toggle,
    goTo,
    next,
    prev,
    openAndPlay,
    close,
    reset,
  };
}
