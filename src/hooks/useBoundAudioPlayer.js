import { useCallback, useEffect, useRef, useState } from 'react';

// Drives one <audio> element bound to a single "current" source that the
// parent swaps out (e.g. the slideshow's current step) — used by the
// Slideshow view. Whenever `src` changes (the user clicked Next/Back), the
// new track auto-plays. If the step has a `repeat` count (e.g. 10 for a
// decade's Hail Mary, 3 for the opening Hail Marys), the same clip loops in
// place that many times — `repeatIndex` (1-based) tracks which repetition is
// currently playing — before stopping; it never advances to the next slide
// on its own, so the only way to move on is to click Next again.
//
// `unavailable` (not `error`) means the file genuinely failed to load —
// distinct from the browser silently refusing an autoplay attempt right
// after mount, which we don't treat as a problem (no prior user gesture yet).
export function useBoundAudioPlayer({ src, repeat = 1, enabled, rate }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const [repeatIndex, setRepeatIndex] = useState(1);
  const prevSrcRef = useRef(null);

  // "Latest value" refs so the mount-once `ended` listener always sees the
  // current repeat target/progress without needing to be re-attached.
  const repeatRef = useRef(repeat);
  repeatRef.current = repeat;
  const repeatIndexRef = useRef(repeatIndex);
  repeatIndexRef.current = repeatIndex;

  if (!audioRef.current && typeof Audio !== 'undefined') {
    audioRef.current = new Audio();
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;
    const handleEnded = () => {
      if (repeatIndexRef.current < repeatRef.current) {
        // Same clip, one more time — replay in place rather than reload.
        setRepeatIndex((r) => r + 1);
        audio.currentTime = 0;
        audio.play().catch(() => setUnavailable(true));
        return;
      }
      setIsPlaying(false);
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

    const srcChanged = prevSrcRef.current !== src;
    prevSrcRef.current = src;

    if (!enabled) {
      audio.pause();
      return;
    }
    if (!src) {
      setUnavailable(true);
      setIsPlaying(false);
      return;
    }

    setUnavailable(false);
    audio.playbackRate = rate;

    if (srcChanged) {
      setRepeatIndex(1);
      audio.src = src;
      // New slide: auto-play it — this is what "bound to the slide" means.
      // On first mount there's been no click yet, so the browser may quietly
      // refuse the autoplay; that's expected, not an error.
      audio.play().then(
        () => setIsPlaying(true),
        () => setIsPlaying(false),
      );
      return;
    }

    // No src change on this run: just honor manual play/pause toggles.
    if (isPlaying) {
      audio.play().catch(() => setUnavailable(true));
    } else {
      audio.pause();
    }
  }, [src, isPlaying, enabled, rate]);

  const play = useCallback(() => setIsPlaying(true), []);
  const pause = useCallback(() => setIsPlaying(false), []);
  const toggle = useCallback(() => setIsPlaying((p) => !p), []);

  return { isPlaying, unavailable, repeatIndex, play, pause, toggle };
}
