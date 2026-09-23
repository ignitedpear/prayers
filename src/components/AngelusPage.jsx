import { useState } from 'react';
import PrayerBlock from './PrayerBlock.jsx';
import { ANGELUS } from '../data/prayers.js';
import { UI } from '../data/ui.js';
import { pick } from '../context/LanguageContext.jsx';

const OTHER_PRAYERS = [{ id: 'angelus', name: ANGELUS.title }];

function buildAngelusSteps() {
  const steps = [];
  ANGELUS.versicles.forEach((_, i) => {
    steps.push({ id: `v${i}`, kind: 'angelusVersicle', versicleIndex: i });
    steps.push({ id: `hm${i}`, kind: 'hailMary' });
  });
  steps.push({ id: 'closing', kind: 'angelusClosing' });
  return steps;
}

export default function AngelusPage({ language }) {
  const [activeId, setActiveId] = useState('angelus');
  const steps = buildAngelusSteps();

  return (
    <div className="other-prayers-page">
      <nav className="prayer-tabs" aria-label={pick(UI.navOther, language)}>
        {OTHER_PRAYERS.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`prayer-tabs__btn${activeId === p.id ? ' prayer-tabs__btn--active' : ''}`}
            onClick={() => setActiveId(p.id)}
          >
            {pick(p.name, language)}
          </button>
        ))}
        <span className="prayer-tabs__soon">{pick(UI.moreComingSoon, language)}</span>
      </nav>

      {activeId === 'angelus' && (
        <div className="angelus">
          <h2 className="angelus__title">{pick(ANGELUS.title, language)}</h2>
          <p className="angelus__intro">{pick(UI.angelusIntro, language)}</p>
          <div className="angelus__body">
            {steps.map((step) => (
              <PrayerBlock key={step.id} step={step} language={language} size="compact" />
            ))}
          </div>
          {language === 'kok' && <p className="konkani-note">{pick(UI.konkaniNote, language)}</p>}
        </div>
      )}
    </div>
  );
}
