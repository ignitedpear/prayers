import { useMemo, useState } from 'react';
import DateStrip from './DateStrip.jsx';
import MysteryHeader from './MysteryHeader.jsx';
import ViewModeToggle from './ViewModeToggle.jsx';
import RosaryAccordion from './RosaryAccordion.jsx';
import RosarySlideshow from './RosarySlideshow.jsx';
import { mysteryForDate } from '../data/mysteries.js';
import { buildRosarySequence } from '../utils/rosarySequence.js';
import { startOfDay, isSameDay } from '../utils/dateUtils.js';

const TODAY = startOfDay(new Date());

export default function RosaryPage({ language }) {
  const [selectedDate, setSelectedDate] = useState(TODAY);
  const [mode, setMode] = useState('list');

  const mysterySet = useMemo(() => mysteryForDate(selectedDate), [selectedDate]);
  const steps = useMemo(() => buildRosarySequence(mysterySet), [mysterySet]);
  const resetKey = `${mysterySet.key}-${isSameDay(selectedDate, TODAY) ? 'today' : selectedDate.toDateString()}`;

  return (
    <div className="rosary-page">
      <DateStrip selectedDate={selectedDate} today={TODAY} onSelect={setSelectedDate} language={language} />
      <MysteryHeader mysterySet={mysterySet} language={language} />
      <ViewModeToggle mode={mode} onChange={setMode} language={language} />

      {mode === 'list' ? (
        <RosaryAccordion key={resetKey} steps={steps} language={language} />
      ) : (
        <RosarySlideshow steps={steps} language={language} resetKey={resetKey} />
      )}
    </div>
  );
}
