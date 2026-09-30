// Maps a Rosary step to the audio file that narrates it, per language.
// Naming convention (see public/audio/README.md for the full checklist):
//   - Fixed prayers: /audio/{lang}/{kind}.mp3
//       e.g. /audio/en/ourFather.mp3, /audio/kok/hailMary.mp3
//   - Mystery announcements: /audio/{lang}/mystery-{setKey}-{decadeNumber}.mp3
//       e.g. /audio/en/mystery-joyful-1.mp3 (decadeNumber is 1-based)
export const AUDIO_BASE = '/audio';

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
