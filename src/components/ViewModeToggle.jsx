import { UI } from '../data/ui.js';
import { pick } from '../context/LanguageContext.jsx';

export default function ViewModeToggle({ mode, onChange, language }) {
  return (
    <div className="view-toggle" role="tablist" aria-label="View mode">
      <button
        type="button"
        role="tab"
        aria-selected={mode === 'list'}
        className={`view-toggle__btn${mode === 'list' ? ' view-toggle__btn--active' : ''}`}
        onClick={() => onChange('list')}
      >
        {pick(UI.listView, language)}
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={mode === 'slideshow'}
        className={`view-toggle__btn${mode === 'slideshow' ? ' view-toggle__btn--active' : ''}`}
        onClick={() => onChange('slideshow')}
      >
        {pick(UI.slideshowView, language)}
      </button>
    </div>
  );
}
