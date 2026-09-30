import { useCallback, useEffect, useRef, useState } from 'react';

// Drives one <audio> element through an ordered list of prayer steps for the
// List view, advancing to the next one automatically when each finishes —
// while sections auto-expand to follow along. Pausing stops in place;
// toggling play resumes from there.
//
// `items`: array of `{ src, repeat }`, one per step, in order. `repeat` is
// how many times that step's clip should play in place (e.g. 10 for a
// decade's Hail Mary, 3 for the opening Hail Marys) before the sequence
// advances to the next step; `repeatIndex` (1-based) tracks which repetition
// is currently playing, so callers can show "3 of 10".
// `enabled`: the global audio on/off toggle — while false, nothing plays and
// any in-flight playback is stopped.
// `rate`: playback speed multiplier, applied live without reloading the track.
//
// `unavailable` (not `error`) means the file genuinely failed to load (e.g.
// still just an empty placeholder) — distinct from the browser silently
// refusing an autoplay attempt, which we don't treat as a problem.
export function useSequentialAudioPlayer({ items, enabled, rate }) {
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [repeatIndex, setRepeatIndex] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);

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
        audio.play().catch(() => setUnavailable(true));
        return;
      }

      setRepeatIndex(1);
      setCurrentIndex((i) => {
        const next = i + 1;
        if (next >= itemsRef.current.length) {
          setIsPlaying(false);
          return i;
        }
        return next;
      });
    };
    const handleError = () => setUnavailable(true);

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!enabled) {
      audio.pause();
      return;
    }

    const item = items[currentIndex];
    const src = item?.src;
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
      // A rejected play() here is almost always a real problem (this branch
      // only runs when the user already asked to play), so surface it.
      audio.play().catch(() => setUnavailable(true));
    } else {
      audio.pause();
    }
  }, [currentIndex, isPlaying, enabled, items, rate]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = rate;
  }, [rate]);

  useEffect(() => {
    if (!enabled) {
      setIsPlaying(false);
      if (audioRef.current) audioRef.current.pause();
    }
  }, [enabled]);

  const play = useCallback(() => setIsPlaying(true), []);
  const pause = useCallback(() => setIsPlaying(false), []);
  const toggle = useCallback(() => setIsPlaying((p) => !p), []);

  // Jumping to a step (e.g. clicking an accordion section while audio is on)
  // implies "play this" — harmless no-op while `enabled` is false, since the
  // playback effect above already refuses to play in that case.
  const goTo = useCallback((index) => {
    setUnavailable(false);
    setRepeatIndex(1);
    setCurrentIndex(index);
    setIsPlaying(true);
  }, []);

  return { currentIndex, repeatIndex, isPlaying, unavailable, play, pause, toggle, goTo };
}
