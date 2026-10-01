import { useEffect, useState } from 'react';
import PrayerBlock from './PrayerBlock.jsx';
import ProgressBar from './ProgressBar.jsx';
import { UI } from '../data/ui.js';
import { pick } from '../context/LanguageContext.jsx';

// `player` is the single shared Rosary player (see useRosaryPlayer),
// lifted up to RosaryPage so this view and the Accordion stay in sync. While
// it's open, this view's Next/Back buttons do exactly what the player's own
// Previous/Next buttons do — they share one play head. When the player
// isn't open (or the audio feature is off site-wide), this falls back to a
// plain local slide index, exactly as before audio narration existed.
export default function RosarySlideshow({ steps, language, resetKey, player, audioFeatureEnabled }) {
  const [localIndex, setLocalIndex] = useState(0);

  useEffect(() => {
    setLocalIndex(0);
  }, [resetKey]);

  const usingPlayer = audioFeatureEnabled && player.isOpen;
  const total = steps.length;
  const index = usingPlayer ? player.currentIndex : localIndex;
  const done = usingPlayer ? player.finished : index >= total;
  const step = done ? null : steps[index];

  const goNext = () => {
    if (usingPlayer) {
      player.next();
      return;
    }
    setLocalIndex((i) => Math.min(i + 1, total));
  };
  const goBack = () => {
    if (usingPlayer) {
      player.prev();
      return;
    }
    setLocalIndex((i) => Math.max(i - 1, 0));
  };
  const restart = () => {
    if (usingPlayer) {
      player.openAndPlay();
      return;
    }
    setLocalIndex(0);
  };

  const atStart = index === 0;
  const atEnd = usingPlayer ? index >= total - 1 : index >= total;

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
            <PrayerBlock step={step} language={language} size="large" />
          </>
        )}
      </div>

      <div className="slideshow__controls">
        <button type="button" className="btn btn--ghost" onClick={goBack} disabled={atStart}>
          {pick(UI.previous, language)}
        </button>
        {done ? (
          <button type="button" className="btn btn--primary" onClick={restart}>
            {pick(UI.restart, language)}
          </button>
        ) : (
          <button type="button" className="btn btn--primary" onClick={goNext} disabled={atEnd}>
            {pick(UI.next, language)}
          </button>
        )}
      </div>
    </div>
  );
}
