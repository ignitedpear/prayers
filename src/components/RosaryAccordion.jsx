import { useState } from 'react';
import { groupIntoDecades, sectionIdForStepIndex, firstStepIndexForSectionId } from '../utils/rosarySequence.js';
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

// `player` is the single shared Rosary player (see useRosaryPlayer),
// lifted up to RosaryPage so List and Slideshow views stay in sync. While
// it's open, whichever section the player is currently on auto-expands, and
// clicking a different section jumps playback there. When the player isn't
// open (or the audio feature is off site-wide), this falls back to plain
// manual open/close — exactly as before audio narration existed.
export default function RosaryAccordion({ steps, language, player, audioFeatureEnabled }) {
  const { opening, decades, closing } = groupIntoDecades(steps);
  const [manualOpenId, setManualOpenId] = useState('opening');

  const usingPlayer = audioFeatureEnabled && player.isOpen;
  const openId = usingPlayer ? sectionIdForStepIndex(steps, player.currentIndex) : manualOpenId;

  const handleToggle = (id) => {
    if (usingPlayer) {
      const targetIndex = firstStepIndexForSectionId(steps, id);
      if (targetIndex >= 0) player.goTo(targetIndex);
      return;
    }
    setManualOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="accordion">
      <Section id="opening" title={pick(UI.opening, language)} steps={opening} language={language} open={openId === 'opening'} onToggle={handleToggle} />
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
          onToggle={handleToggle}
        />
      ))}
      <Section id="closing" title={pick(UI.closing, language)} steps={closing} language={language} open={openId === 'closing'} onToggle={handleToggle} />
    </div>
  );
}
