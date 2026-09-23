import { PRAYERS, ANGELUS } from '../data/prayers.js';
import { UI } from '../data/ui.js';
import { pick } from '../context/LanguageContext.jsx';

function RepeatNote({ step, language }) {
  if (!step.repeat) return null;
  const noteText = step.note === 'forFaithHopeCharity' ? ` ${pick(UI.forFaithHopeCharity, language)}` : '';
  return (
    <p className="prayer-block__repeat">
      {pick(UI.repeatTimes, language)} {step.repeat} {pick(UI.times, language)}
      {noteText}
    </p>
  );
}

export default function PrayerBlock({ step, language, size = 'large' }) {
  const cls = `prayer-block prayer-block--${size}`;

  if (step.kind === 'mysteryAnnounce') {
    return (
      <div className={cls}>
        <p className="prayer-block__eyebrow">
          {pick(UI.decade, language)} {step.decadeIndex + 1}
        </p>
        <h3 className="prayer-block__title prayer-block__title--mystery">{pick(step.mystery.name, language)}</h3>
        <p className="prayer-block__meditation">{step.mystery.meditation}</p>
      </div>
    );
  }

  if (step.kind === 'hailHolyQueen') {
    const p = PRAYERS.hailHolyQueen;
    const versicle = p.versicle[language] ?? p.versicle.en;
    return (
      <div className={cls}>
        <h3 className="prayer-block__title">{pick(p.title, language)}</h3>
        <p className="prayer-block__text">{pick(p.text, language)}</p>
        <p className="prayer-block__versicle">
          <strong>V.</strong> {versicle.v}
          <br />
          <strong>R.</strong> {versicle.r}
        </p>
        <p className="prayer-block__text">{pick(p.closingPrayer, language)}</p>
      </div>
    );
  }

  if (step.kind === 'angelusVersicle') {
    const item = ANGELUS.versicles[step.versicleIndex];
    return (
      <div className={cls}>
        <p className="prayer-block__versicle prayer-block__versicle--standalone">
          <strong>V.</strong> {pick(item.v, language)}
          <br />
          <strong>R.</strong> {pick(item.r, language)}
        </p>
      </div>
    );
  }

  if (step.kind === 'angelusClosing') {
    return (
      <div className={cls}>
        <p className="prayer-block__versicle prayer-block__versicle--standalone">
          <strong>V.</strong> {pick(ANGELUS.closingVersicle.v, language)}
          <br />
          <strong>R.</strong> {pick(ANGELUS.closingVersicle.r, language)}
        </p>
        <p className="prayer-block__text">{pick(ANGELUS.closingPrayer, language)}</p>
      </div>
    );
  }

  const prayer = PRAYERS[step.kind];
  if (!prayer) return null;

  return (
    <div className={cls}>
      <h3 className="prayer-block__title">{pick(prayer.title, language)}</h3>
      <p className="prayer-block__text">{pick(prayer.text, language)}</p>
      <RepeatNote step={step} language={language} />
    </div>
  );
}
