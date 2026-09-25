import { useState } from 'react';
import { UI } from '../data/ui.js';
import { pick } from '../context/LanguageContext.jsx';

// TODO: replace with your real Formspree endpoint.
// Sign up free at https://formspree.io, create a new form, and it'll give
// you a URL like "https://formspree.io/f/abcdwxyz" — paste it below.
// Until you do, submissions will just fail quietly (status becomes 'error').
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xyezplez';

export default function FeedbackWidget({ language }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || status === 'sending') return;

    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message,
          email: email || '(not provided)',
          language,
          source: 'Daily Prayers app',
        }),
      });
      if (res.ok) {
        setStatus('sent');
        setMessage('');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="feedback-widget">
      {open && (
        <div className="feedback-panel">
          <div className="feedback-panel__header">
            <h4>{pick(UI.feedbackTitle, language)}</h4>
            <button type="button" className="feedback-panel__close" onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
          </div>

          {status === 'sent' ? (
            <p className="feedback-panel__thanks">{pick(UI.feedbackThanks, language)}</p>
          ) : (
            <form onSubmit={handleSubmit} className="feedback-panel__form">
              <p className="feedback-panel__prompt">{pick(UI.feedbackPrompt, language)}</p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={pick(UI.feedbackPlaceholder, language)}
                rows={4}
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={pick(UI.feedbackEmailPlaceholder, language)}
              />
              <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
                {status === 'sending' ? pick(UI.feedbackSending, language) : pick(UI.feedbackSend, language)}
              </button>
              {status === 'error' && <p className="feedback-panel__error">{pick(UI.feedbackError, language)}</p>}
            </form>
          )}
        </div>
      )}

      <button type="button" className="feedback-widget__toggle" onClick={() => setOpen((o) => !o)}>
        💬 {pick(UI.feedbackButton, language)}
      </button>
    </div>
  );
}
