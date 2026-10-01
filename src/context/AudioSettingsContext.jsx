import { createContext, useContext, useMemo, useState } from 'react';
import { AUDIO_CONFIG } from '../config/audioConfig.js';
import { useLanguage } from './LanguageContext.jsx';

const AudioSettingsContext = createContext(null);

export const PLAYBACK_RATES = [0.75, 1, 1.25, 1.5];

function readStored(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function writeStored(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore storage failures (private browsing, etc.) */
  }
}

// Whether the whole audio narration feature is on, and whether visitors get
// a speed selector, are website-owner decisions made in
// src/config/audioConfig.js (committed to the repo) — never a toggle a
// visitor can flip on the site itself. `enabled` can also be overridden per
// language there (e.g. audio ready in Konkani but not English yet); a
// language left out of `languages` just uses the site-wide `enabled`.
export function AudioSettingsProvider({ children }) {
  const { language } = useLanguage();

  const languageOverride = AUDIO_CONFIG.languages?.[language];
  const audioEnabled = languageOverride !== undefined ? languageOverride : AUDIO_CONFIG.enabled;
  const allowSpeedControl = audioEnabled && AUDIO_CONFIG.allowSpeedControl;

  // Only meaningful (and only stored per-visitor) when the owner has allowed
  // speed control at all; otherwise playback is locked to the owner's
  // configured `fixedRate`.
  const [playbackRateState, setPlaybackRateState] = useState(() =>
    readStored('prayers.audioRate', AUDIO_CONFIG.fixedRate),
  );
  const playbackRate = allowSpeedControl ? playbackRateState : AUDIO_CONFIG.fixedRate;

  const setPlaybackRate = (value) => {
    if (!allowSpeedControl) return;
    setPlaybackRateState(value);
    writeStored('prayers.audioRate', value);
  };

  const value = useMemo(
    () => ({ audioEnabled, allowSpeedControl, playbackRate, setPlaybackRate }),
    [audioEnabled, allowSpeedControl, playbackRate],
  );

  return <AudioSettingsContext.Provider value={value}>{children}</AudioSettingsContext.Provider>;
}

export function useAudioSettings() {
  const ctx = useContext(AudioSettingsContext);
  if (!ctx) throw new Error('useAudioSettings must be used within an AudioSettingsProvider');
  return ctx;
}
