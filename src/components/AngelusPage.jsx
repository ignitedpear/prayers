import { useState } from 'react';
import PrayerBlock from './PrayerBlock.jsx';
import { ANGELUS, PRAYERS } from '../data/prayers.js';
import { UI } from '../data/ui.js';
import { pick } from '../context/LanguageContext.jsx';

const OTHER_PRAYERS = [
  { id: 'angelus', name: ANGELUS.title },
  { id: 'hanvPatki', name: PRAYERS.hanvPatki.title },
  { id: 'dukhichiUcharnni', name: PRAYERS.dukhichiUcharnni.title },
  { id: 'litanyOfTheBlessedVirginMary', name: PRAYERS.litanyOfTheBlessedVirginMary.title },
];

const hasTitle = (name, language) => pick(name, language).trim().length > 0;

// A flat title + body prayer with no versicles/steps of its own — renders
// through PrayerBlock's existing generic PRAYERS[step.kind] branch, so
// adding text later needs no component changes, just filling in
// src/data/prayers.js.
function SimplePrayerTab({ kind, language }) {
  return (
    <div className="other-prayers-page__simple">
      <PrayerBlock step={{ id: kind, kind }} language={language} size="large" />
      {language === 'kok' && <p className="konkani-note">{pick(UI.konkaniNote, language)}</p>}
    </div>
  );
}

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

  // A prayer with no title in the current language is left out of the tab
  // strip entirely (not shown as an empty button). `activeId` still
  // remembers the visitor's actual selection even while it's hidden, so
  // switching back to a language where it has a title shows it again.
  const visiblePrayers = OTHER_PRAYERS.filter((p) => hasTitle(p.name, language));
  const activeIsVisible = visiblePrayers.some((p) => p.id === activeId);
  const effectiveActiveId = activeIsVisible ? activeId : visiblePrayers[0]?.id;

  return (
    <div className="other-prayers-page">
      <nav className="prayer-tabs" aria-label={pick(UI.navOther, language)}>
        {visiblePrayers.map((p) => (
          <button
            key={p.id}
            type="button"
            className={`prayer-tabs__btn${effectiveActiveId === p.id ? ' prayer-tabs__btn--active' : ''}`}
            onClick={() => setActiveId(p.id)}
          >
            {pick(p.name, language)}
          </button>
        ))}
        <span className="prayer-tabs__soon">{pick(UI.moreComingSoon, language)}</span>
      </nav>

      {effectiveActiveId === 'angelus' && (
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
      {effectiveActiveId === 'hanvPatki' && <SimplePrayerTab kind="hanvPatki" language={language} />}
      {effectiveActiveId === 'dukhichiUcharnni' && <SimplePrayerTab kind="dukhichiUcharnni" language={language} />}
      {effectiveActiveId === 'litanyOfTheBlessedVirginMary' && <SimplePrayerTab kind="litanyOfTheBlessedVirginMary" language={language} />}
    </div>
  );
}
