import { useEffect, useState } from 'react';
import PrayerBlock from './PrayerBlock.jsx';
import ProgressBar from './ProgressBar.jsx';
import { UI } from '../data/ui.js';
import { pick } from '../context/LanguageContext.jsx';

export default function RosarySlideshow({ steps, language, resetKey }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [resetKey]);

  const total = steps.length;
  const done = index >= total;
  const step = !done ? steps[index] : null;

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
