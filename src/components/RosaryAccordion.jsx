import { useMemo, useState } from 'react';
import { groupIntoDecades, sectionIdForStepIndex, firstStepIndexForSectionId } from '../utils/rosarySequence.js';
import { getAudioSrc } from '../utils/audioSrc.js';
import { useSequentialAudioPlayer } from '../hooks/useSequentialAudioPlayer.js';
import { useAudioSettings } from '../context/AudioSettingsContext.jsx';
import PrayerBlock from './PrayerBlock.jsx';
import AudioPlayButton from './AudioPlayButton.jsx';
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
  const { audioEnabled, playbackRate } = useAudioSettings();

  // Manual open/closed section when audio is off (or the user overrides it).
  const [manualOpenId, setManualOpenId] = useState('opening');

  const items = useMemo(
    () => steps.map((step) => ({ src: getAudioSrc(step, language), repeat: step.repeat || 1 })),
    [steps, language],
  );
  const { currentIndex, repeatIndex, isPlaying, unavailable, toggle, goTo } = useSequentialAudioPlayer({
    items,
    enabled: audioEnabled,
    rate: playbackRate,
  });
  const currentRepeatTotal = items[currentIndex]?.repeat || 1;

  // While audio narration is on, the open section always follows whichever
  // prayer is currently loaded/playing; otherwise it's whatever the user
  // last clicked open by hand.
  const openId = audioEnabled ? sectionIdForStepIndex(steps, currentIndex) : manualOpenId;

  const handleToggle = (id) => {
    if (audioEnabled) {
      const targetIndex = firstStepIndexForSectionId(steps, id);
      if (targetIndex >= 0) goTo(targetIndex);
      return;
    }
    setManualOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="accordion">
      {audioEnabled && (
        <div className="accordion__audio-bar">
          <AudioPlayButton
            isPlaying={isPlaying}
            onToggle={toggle}
            disabled={unavailable}
            label={isPlaying ? pick(UI.audioPauseAria, language) : pick(UI.audioPlayAria, language)}
          />
          {!unavailable && currentRepeatTotal > 1 && (
            <span className="accordion__audio-counter">
              {repeatIndex} {pick(UI.of, language)} {currentRepeatTotal}
            </span>
          )}
          {unavailable && <span className="accordion__audio-note">{pick(UI.audioUnavailable, language)}</span>}
        </div>
      )}

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
