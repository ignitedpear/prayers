import { useEffect, useMemo, useState } from 'react';
import DateStrip from './DateStrip.jsx';
import MysteryHeader from './MysteryHeader.jsx';
import ViewModeToggle from './ViewModeToggle.jsx';
import RosaryAccordion from './RosaryAccordion.jsx';
import RosarySlideshow from './RosarySlideshow.jsx';
import RosaryPlayer from './RosaryPlayer.jsx';
import { mysteryForDate } from '../data/mysteries.js';
import { buildRosarySequence } from '../utils/rosarySequence.js';
import { getAudioSrc } from '../utils/audioSrc.js';
import { startOfDay, isSameDay } from '../utils/dateUtils.js';
import { useRosaryPlayer } from '../hooks/useRosaryPlayer.js';
import { useAudioSettings } from '../context/AudioSettingsContext.jsx';
import { UI } from '../data/ui.js';
import { pick } from '../context/LanguageContext.jsx';

const TODAY = startOfDay(new Date());

export default function RosaryPage({ language }) {
  const [selectedDate, setSelectedDate] = useState(TODAY);
  const [mode, setMode] = useState('list'); // slideshow
  const { audioEnabled, playbackRate } = useAudioSettings();

  const mysterySet = useMemo(() => mysteryForDate(selectedDate), [selectedDate]);
  const steps = useMemo(() => buildRosarySequence(mysterySet), [mysterySet]);
  const resetKey = `${mysterySet.key}-${isSameDay(selectedDate, TODAY) ? 'today' : selectedDate.toDateString()}`;

  const items = useMemo(
    () => steps.map((step) => ({ src: getAudioSrc(step, language), repeat: step.repeat || 1 })),
    [steps, language],
  );

  // One shared player for the whole page — List and Slideshow both read
  // from and drive this same play head (see useRosaryPlayer).
  const player = useRosaryPlayer({ items, rate: playbackRate });

  useEffect(() => {
    // A different date/mystery set invalidates any in-flight position, so
    // always start the player fresh rather than carry over an index that
    // now points at an unrelated prayer.
    player.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey]);

  useEffect(() => {
    // `audioEnabled` can change mid-session now (switching to a language
    // the owner hasn't turned audio on for — see audioConfig.js), not just
    // once at load. If it turns off while the player is open, close it so
    // playback doesn't keep running behind a hidden UI.
    if (!audioEnabled) player.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [audioEnabled]);

  return (
    <div className="rosary-page">
      <DateStrip selectedDate={selectedDate} today={TODAY} onSelect={setSelectedDate} language={language} />
      <MysteryHeader mysterySet={mysterySet} language={language} />
      <ViewModeToggle mode={mode} onChange={setMode} language={language} />

      {audioEnabled && (
        <>
          {!player.isOpen && (
            <button type="button" className="btn btn--primary pray-rosary-btn" onClick={player.openAndPlay}>
              {pick(UI.prayTheRosary, language)}
            </button>
          )}
          <RosaryPlayer player={player} steps={steps} items={items} language={language} />
        </>
      )}

      {mode === 'list' ? (
        <RosaryAccordion key={resetKey} steps={steps} language={language} player={player} audioFeatureEnabled={audioEnabled} />
      ) : (
        <RosarySlideshow steps={steps} language={language} resetKey={resetKey} player={player} audioFeatureEnabled={audioEnabled} />
      )}
    </div>
  );
}
