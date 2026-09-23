import { UI } from '../data/ui.js';
import { pick } from '../context/LanguageContext.jsx';

export default function MysteryHeader({ mysterySet, language }) {
  return (
    <div className="mystery-header">
      <p className="mystery-header__eyebrow">{pick(UI.mysteryOfDay, language)}</p>
      <h2 className="mystery-header__name">{pick(mysterySet.name, language)}</h2>
      <p className="mystery-header__days">
        {pick(UI.prayedOn, language)} {pick(mysterySet.days, language)}
      </p>
    </div>
  );
}
