import { dateRange, isSameDay, weekdayLabel, formatLongDate } from '../utils/dateUtils.js';
import { UI } from '../data/ui.js';
import { pick } from '../context/LanguageContext.jsx';

export default function DateStrip({ selectedDate, today, onSelect, language }) {
  const days = dateRange(today, 3, 3);

  return (
    <div className="date-strip">
      <div className="date-strip__row">
        {days.map((d) => {
          const active = isSameDay(d, selectedDate);
          const isToday = isSameDay(d, today);
          return (
            <button
              key={d.toISOString()}
              type="button"
              className={`date-chip${active ? ' date-chip--active' : ''}`}
              onClick={() => onSelect(d)}
            >
              <span className="date-chip__weekday">{weekdayLabel(d, language)}</span>
              <span className="date-chip__day">{d.getDate()}</span>
              {isToday && <span className="date-chip__today">{pick(UI.today, language)}</span>}
            </button>
          );
        })}
      </div>
      <p className="date-strip__full">{formatLongDate(selectedDate, language)}</p>
    </div>
  );
}
