// Pulls the exact English text for every narrated Rosary step straight from
// this app's own data (src/data/prayers.js, src/data/mysteries.js) and
// writes it to a flat JSON manifest: [{ filename, text }, ...], one entry
// per file under public/audio/en/ (see public/audio/README.md for the
// naming convention).
//
// Why this exists: whenever the prayer or meditation text changes, the
// English audio should be regenerated from the same source of truth the
// app itself renders — never retyped by hand, so narration can't drift out
// of sync with what's on screen.
//
// Usage: node scripts/extract-english-tts-text.mjs [output-path.json]
// (defaults to tts-manifest.en.json in the project root)
//
// This script only extracts text; it doesn't synthesize audio itself. Ask
// your AI assistant (or any TTS tool/service of your choice) to turn each
// entry's `text` into `public/audio/en/<filename>`.
import { PRAYERS } from '../src/data/prayers.js';
import { MYSTERY_SETS } from '../src/data/mysteries.js';
import fs from 'fs';

const pick = (field) => (field ? (field.en ?? '') : '');

const manifest = [];

const fixedKinds = ['signOfCross', 'apostlesCreed', 'ourFather', 'hailMary', 'gloryBe', 'fatimaPrayer'];
for (const kind of fixedKinds) {
  const p = PRAYERS[kind];
  manifest.push({ filename: `${kind}.mp3`, text: pick(p.text) });
}

// hailHolyQueen has a richer shape (text + versicle/response + closing
// prayer) than the other fixed prayers, so its spoken text is assembled
// from all of those parts, in the order they're shown on screen.
{
  const p = PRAYERS.hailHolyQueen;
  const versicle = p.versicle.en;
  const text = [pick(p.text), versicle.v, versicle.r, pick(p.closingPrayer)].join(' ... ');
  manifest.push({ filename: 'hailHolyQueen.mp3', text });
}

for (const setKey of Object.keys(MYSTERY_SETS)) {
  const set = MYSTERY_SETS[setKey];
  set.mysteries.forEach((mystery, i) => {
    const name = pick(mystery.name);
    const meditation = pick(mystery.meditation);
    const text = name ? `${name}. ${meditation}` : meditation;
    manifest.push({ filename: `mystery-${setKey}-${i + 1}.mp3`, text });
  });
}

const outPath = process.argv[2] || 'tts-manifest.en.json';
fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2));
console.log(`Wrote ${manifest.length} entries to ${outPath}`);
