import { useState } from 'react';
import { groupIntoDecades } from '../utils/rosarySequence.js';
import PrayerBlock from './PrayerBlock.jsx';
import { UI } from '../data/ui.js';
import { pick } from '../context/LanguageContext.jsx';
import { withOrdinalSuperscripts } from '../utils/ordinalSuperscript.jsx';

function Section({ id, title, steps, language, open, onToggle }) {
  return (
    <div className="accordion-section">
      <button type="button" className="accordion-section__header" onClick={() => onToggle(id)} aria-expanded={open}>
        <span>{title}</span>
        <span className={`accordion-section__chevron${open ? ' accordion-section__chevron--open' : ''}`}>▾</span>
      </button>
      {open && (
        <div className="accordion-section__body">
          {steps.map((step) => (
            <PrayerBlock key={step.id} step={step} language={language} size="compact" />
          ))}
        </div>
      )}
    </div>
  );
}

export default function RosaryAccordion({ steps, language }) {
  const { opening, decades, closing } = groupIntoDecades(steps);
  const [openId, setOpenId] = useState('decade-0');

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="accordion">
      <Section id="opening" title={pick(UI.opening, language)} steps={opening} language={language} open={openId === 'opening'} onToggle={toggle} />
      {decades.map((decadeSteps, i) => (
        <Section
          key={`decade-${i}`}
          id={`decade-${i}`}
          title={
            <>
              {pick(UI.decade, language)} {i + 1} · {withOrdinalSuperscripts(pick(decadeSteps[0].mystery.name, language))}
            </>
          }
          steps={decadeSteps}
          language={language}
          open={openId === `decade-${i}`}
          onToggle={toggle}
        />
      ))}
      <Section id="closing" title={pick(UI.closing, language)} steps={closing} language={language} open={openId === 'closing'} onToggle={toggle} />
    </div>
  );
}
