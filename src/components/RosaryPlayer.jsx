import { PLAYBACK_RATES, useAudioSettings } from '../context/AudioSettingsContext.jsx';
import { getStepTitle } from '../utils/audioSrc.js';
import AudioPlayButton from './AudioPlayButton.jsx';
import { UI } from '../data/ui.js';
import { pick } from '../context/LanguageContext.jsx';
import { withOrdinalSuperscripts } from '../utils/ordinalSuperscript.jsx';

// The one audio player shared by both the List and Slideshow views — there
// is exactly one of these per Rosary page. It owns Play/Pause, Previous,
// Next, the speed selector (when the owner allows it, see audioConfig.js),
// a "now playing" title, and a progress bar for the current clip. The
// progress bar is a plain read-only indicator — intentionally not a
// scrubber the visitor can drag, so playback position can only change via
// the Previous/Next buttons (or the matching controls in Slideshow view).
export default function RosaryPlayer({ player, steps, items, language }) {
  const { allowSpeedControl, playbackRate, setPlaybackRate } = useAudioSettings();

  if (!player.isOpen) return null;

  const { currentIndex, repeatIndex, isPlaying, unavailable, finished, progress, toggle, next, prev, close } = player;
  const step = steps[currentIndex];
  const title = getStepTitle(step, language);
  const repeatTotal = items[currentIndex]?.repeat || 1;
  const progressPct = unavailable ? 0 : Math.max(0, Math.min(1, progress)) * 100;

  return (
    <div className="rosary-player">
      <button type="button" className="rosary-player__close" onClick={close} aria-label={pick(UI.closePlayer, language)}>
        ✕
      </button>

      <div className="rosary-player__now-playing">
        <p className="rosary-player__title">
          {withOrdinalSuperscripts(title)}
          {!unavailable && repeatTotal > 1 && (
            <span className="rosary-player__counter">
              {repeatIndex} {pick(UI.of, language)} {repeatTotal}
            </span>
          )}
        </p>
        <div className="rosary-player__progress" role="presentation">
          <div className="rosary-player__progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
        {unavailable && <p className="rosary-player__note">{pick(UI.audioUnavailable, language)}</p>}
        {finished && <p className="rosary-player__note">{pick(UI.finished, language)}</p>}
      </div>

      <div className="rosary-player__controls">
        <button
          type="button"
          className="rosary-player__skip"
          onClick={prev}
          disabled={currentIndex === 0}
          aria-label={pick(UI.previousPrayerAria, language)}
        >
          ⏮
        </button>
        <AudioPlayButton
          isPlaying={isPlaying}
          onToggle={toggle}
          disabled={unavailable}
          label={isPlaying ? pick(UI.audioPauseAria, language) : pick(UI.audioPlayAria, language)}
        />
        <button
          type="button"
          className="rosary-player__skip"
          onClick={next}
          disabled={currentIndex >= steps.length - 1}
          aria-label={pick(UI.nextPrayerAria, language)}
        >
          ⏭
        </button>

        {allowSpeedControl && (
          <select
            className="rosary-player__speed"
            value={playbackRate}
            onChange={(e) => setPlaybackRate(Number(e.target.value))}
            aria-label={pick(UI.audioSpeedLabel, language)}
          >
            {PLAYBACK_RATES.map((rate) => (
              <option key={rate} value={rate}>
                {rate}×
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}
