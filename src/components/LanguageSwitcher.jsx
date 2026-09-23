import { LANGUAGES } from '../data/languages.js';
import { UI } from '../data/ui.js';
import { useLanguage, pick } from '../context/LanguageContext.jsx';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <label className="language-switcher">
      <span className="language-switcher__label">{pick(UI.languageLabel, language)}</span>
      <select value={language} onChange={(e) => setLanguage(e.target.value)} aria-label={pick(UI.languageLabel, language)}>
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>
            {l.native}
          </option>
        ))}
      </select>
    </label>
  );
}
