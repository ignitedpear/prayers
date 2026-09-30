import { useEffect, useState } from 'react';
import PrayerBlock from './PrayerBlock.jsx';
import ProgressBar from './ProgressBar.jsx';
import AudioPlayButton from './AudioPlayButton.jsx';
import { getAudioSrc } from '../utils/audioSrc.js';
import { useBoundAudioPlayer } from '../hooks/useBoundAudioPlayer.js';
import { useAudioSettings } from '../context/AudioSettingsContext.jsx';
import { UI } from '../data/ui.js';
import { pick } from '../context/LanguageContext.jsx';

export default function RosarySlideshow({ steps, language, resetKey }) {
  const [index, setIndex] = useState(0);
  const { audioEnabled, playbackRate } = useAudioSettings();

  useEffect(() => {
    setIndex(0);
  }, [resetKey]);

  const total = steps.length;
  const done = index >= total;
  const step = !done ? steps[index] : null;

  const audioSrc = !done ? getAudioSrc(step, language) : null;
  const audioRepeat = !done ? step.repeat || 1 : 1;
  const { isPlaying, unavailable, repeatIndex, toggle } = useBoundAudioPlayer({
    src: audioSrc,
    repeat: audioRepeat,
    enabled: audioEnabled,
    rate: playbackRate,
  });

  const goNext = () => setIndex((i) => Math.min(i + 1, total));
  const goBack = () => setIndex((i) => Math.max(i - 1, 0));
  const restart = () => setIndex(0);

  return (
    <div className="slideshow">
      <ProgressBar current={Math.min(index, total - 1)} total={total} />

      <div className="slideshow__stage">
        {done ? (
          <div className="slideshow__done">
            <h3>{pick(UI.finished, language)}</h3>
            <p>{pick(UI.finishedSub, language)}</p>
          </div>
        ) : (
          <>
            <p className="slideshow__step-count">
              {pick(UI.step, language)} {index + 1} {pick(UI.of, language)} {total}
            </p>
            {audioEnabled && (
              <div className="slideshow__audio-bar">
                <AudioPlayButton
                  isPlaying={isPlaying}
                  onToggle={toggle}
                  disabled={unavailable}
                  label={isPlaying ? pick(UI.audioPauseAria, language) : pick(UI.audioPlayAria, language)}
                />
                {!unavailable && audioRepeat > 1 && (
                  <span className="slideshow__audio-counter">
                    {repeatIndex} {pick(UI.of, language)} {audioRepeat}
                  </span>
                )}
                {unavailable && <span className="slideshow__audio-note">{pick(UI.audioUnavailable, language)}</span>}
              </div>
            )}
            <PrayerBlock step={step} language={language} size="large" />
          </>
        )}
      </div>

      <div className="slideshow__controls">
        <button type="button" className="btn btn--ghost" onClick={goBack} disabled={index === 0}>
          {pick(UI.previous, language)}
        </button>
        {done ? (
          <button type="button" className="btn btn--primary" onClick={restart}>
            {pick(UI.restart, language)}
          </button>
        ) : (
          <button type="button" className="btn btn--primary" onClick={goNext}>
            {pick(UI.next, language)}
          </button>
        )}
      </div>
    </div>
  );
}
