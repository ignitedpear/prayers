import { PRAYERS } from '../data/prayers.js';
import { UI } from '../data/ui.js';
import { pick } from '../context/LanguageContext.jsx';

// Maps a Rosary step to the audio file that narrates it, per language.
// Naming convention (see public/audio/README.md for the full checklist):
//   - Fixed prayers: {base}/audio/{lang}/{kind}.mp3
//       e.g. /audio/en/ourFather.mp3, /audio/kok/hailMary.mp3
//   - Mystery announcements: {base}/audio/{lang}/mystery-{setKey}-{decadeNumber}.mp3
//       e.g. /audio/en/mystery-joyful-1.mp3 (decadeNumber is 1-based)
//
// `import.meta.env.BASE_URL` is Vite's own copy of the `base` option from
// vite.config.js — '/' in dev, '/prayers/' in the GitHub Pages build.
// A hardcoded '/audio' would resolve from the domain root (missing the
// '/prayers/' prefix on the deployed site, since Vite only rewrites paths
// it finds in index.html or in actual import statements — not arbitrary
// strings built at runtime in JS like this one), so it has to be built
// from BASE_URL instead.
export const AUDIO_BASE = `${import.meta.env.BASE_URL}audio`;

export function getAudioSrc(step, language) {
  if (!step || !language) return null;
  if (step.kind === 'mysteryAnnounce') {
    return `${AUDIO_BASE}/${language}/mystery-${step.mysterySetKey}-${step.decadeIndex + 1}.mp3`;
  }
  return `${AUDIO_BASE}/${language}/${step.kind}.mp3`;
}

// All distinct audio files a full Rosary (any mystery set) can reference,
// used to generate the placeholder file checklist and to validate that
// nothing in the sequence is missing an audio mapping.
export function listAudioFilesForLanguage(language) {
  const fixedKinds = ['signOfCross', 'apostlesCreed', 'ourFather', 'hailMary', 'gloryBe', 'fatimaPrayer', 'hailHolyQueen'];
  const mysterySets = ['joyful', 'sorrowful', 'glorious', 'luminous'];

  const files = fixedKinds.map((kind) => `${AUDIO_BASE}/${language}/${kind}.mp3`);
  mysterySets.forEach((setKey) => {
    for (let decade = 1; decade <= 5; decade += 1) {
      files.push(`${AUDIO_BASE}/${language}/mystery-${setKey}-${decade}.mp3`);
    }
  });
  return files;
}

// Short display title for a step, used by the shared Rosary player (and
// anywhere else a quick "what's playing" label is useful). Reuses the same
// data already shown in each prayer block, so it never drifts out of sync
// with the prayer text itself.
export function getStepTitle(step, language) {
  if (!step) return '';
  if (step.kind === 'mysteryAnnounce') {
    const name = pick(step.mystery.name, language);
    const decadeLabel = `${pick(UI.decade, language)} ${step.decadeIndex + 1}`.trim();
    return name ? `${decadeLabel} · ${name}` : decadeLabel;
  }
  const prayer = PRAYERS[step.kind];
  return prayer ? pick(prayer.title, language) : '';
}
