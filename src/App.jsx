import { useState } from 'react';
import { LanguageProvider, useLanguage, pick } from './context/LanguageContext.jsx';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';
import RosaryPage from './components/RosaryPage.jsx';
import AngelusPage from './components/AngelusPage.jsx';
import FeedbackWidget from './components/FeedbackWidget.jsx';
import { UI } from './data/ui.js';
import './App.css';

function Shell() {
  const { language } = useLanguage();
  const [tab, setTab] = useState('rosary');

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__top">
          <h1 className="app-header__title">✝ {pick(UI.appTitle, language)}</h1>
          <LanguageSwitcher />
        </div>
        <nav className="app-nav" aria-label="Main">
          <button
            type="button"
            className={`app-nav__btn${tab === 'rosary' ? ' app-nav__btn--active' : ''}`}
            onClick={() => setTab('rosary')}
          >
            {pick(UI.navRosary, language)}
          </button>
          <button
            type="button"
            className={`app-nav__btn${tab === 'other' ? ' app-nav__btn--active' : ''}`}
            onClick={() => setTab('other')}
          >
            {pick(UI.navOther, language)}
          </button>
        </nav>
      </header>

      <main className="app-main">
        {tab === 'rosary' ? <RosaryPage language={language} /> : <AngelusPage language={language} />}
      </main>

      <FeedbackWidget language={language} />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Shell />
    </LanguageProvider>
  );
}
