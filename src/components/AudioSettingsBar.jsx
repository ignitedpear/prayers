import { useAudioSettings, PLAYBACK_RATES } from '../context/AudioSettingsContext.jsx';
import { UI } from '../data/ui.js';
import { pick } from '../context/LanguageContext.jsx';

// Whether the audio feature is on at all, and whether visitors get to pick a
// speed, are owner-controlled (src/config/audioConfig.js) — never toggles a
// visitor sees. This bar only ever shows the speed selector, and only when
// the owner has allowed it; otherwise there's nothing for a visitor to
// control here, so it renders nothing.
export default function AudioSettingsBar({ language }) {
  const { allowSpeedControl, playbackRate, setPlaybackRate } = useAudioSettings();

  if (!allowSpeedControl) return null;

  return (
    <div className="audio-settings-bar">
      <label className="audio-settings-bar__speed">
        <span>{pick(UI.audioSpeedLabel, language)}</span>
        <select value={playbackRate} onChange={(e) => setPlaybackRate(Number(e.target.value))}>
          {PLAYBACK_RATES.map((rate) => (
            <option key={rate} value={rate}>
              {rate}×
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
