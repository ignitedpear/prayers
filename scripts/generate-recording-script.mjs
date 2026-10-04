// Turns this app's own prayer/meditation data into a human-readable
// recording script/teleprompter doc for a given language — one section per
// audio file, in Rosary order, with its exact target filename and the exact
// text to read (straight from src/data/prayers.js and src/data/mysteries.js,
// so it can't drift out of sync with what's on screen).
//
// Usage: node scripts/generate-recording-script.mjs [output-path.md] [language-code]
// (output defaults to public/audio/<language-code>/RECORDING_SCRIPT.md;
// language-code defaults to "en")
import { PRAYERS } from '../src/data/prayers.js';
import { MYSTERY_SETS } from '../src/data/mysteries.js';
import fs from 'fs';

const language = process.argv[3] || 'en';
const outPath = process.argv[2] || `public/audio/${language}/RECORDING_SCRIPT.md`;

// Looks up a field for `language` with no fallback to English — missing
// text should be flagged to the person building the script, not silently
// swapped for a different language they didn't ask to record.
const pickExact = (field) => (field ? field[language] ?? null : null);
const hasText = (s) => typeof s === 'string' && s.trim().length > 0;

const PRAYER_LABELS = {
  signOfCross: 'Sign of the Cross',
  apostlesCreed: "Apostles' Creed",
  ourFather: 'Our Father (used for both the opening prayer and every decade)',
  hailMary: 'Hail Mary (used for the opening 3 Hail Marys and all 10 in every decade)',
  gloryBe: 'Glory Be (used for both the opening prayer and every decade)',
  fatimaPrayer: 'Fatima Prayer (O My Jesus)',
  hailHolyQueen: 'Hail, Holy Queen (includes the closing versicle/response and prayer)',
};

const missing = []; // tracks any file whose text isn't available in `language`
const sections = [];

for (const kind of ['signOfCross', 'apostlesCreed', 'ourFather', 'hailMary', 'gloryBe', 'fatimaPrayer']) {
  const p = PRAYERS[kind];
  const text = pickExact(p.text);
  const filename = `${kind}.mp3`;
  if (!hasText(text)) {
    missing.push(filename);
    continue;
  }
  sections.push({ filename, label: PRAYER_LABELS[kind], text });
}

{
  const p = PRAYERS.hailHolyQueen;
  const text = pickExact(p.text);
  const versicle = pickExact(p.versicle);
  const closingPrayer = pickExact(p.closingPrayer);
  const filename = 'hailHolyQueen.mp3';
  if (!hasText(text) || !versicle || !hasText(versicle.v) || !hasText(versicle.r) || !hasText(closingPrayer)) {
    missing.push(filename);
  } else {
    sections.push({
      filename,
      label: PRAYER_LABELS.hailHolyQueen,
      text: [text, `V. ${versicle.v}`, `R. ${versicle.r}`, closingPrayer].join('\n\n'),
    });
  }
}

const SET_LABELS = { joyful: 'Joyful', sorrowful: 'Sorrowful', glorious: 'Glorious', luminous: 'Luminous' };
for (const setKey of Object.keys(MYSTERY_SETS)) {
  const set = MYSTERY_SETS[setKey];
  set.mysteries.forEach((mystery, i) => {
    const filename = `mystery-${setKey}-${i + 1}.mp3`;
    const meditation = pickExact(mystery.meditation);
    if (!hasText(meditation)) {
      missing.push(filename);
      return;
    }
    const name = pickExact(mystery.name); // may be null/blank — handled below
    const fallbackName = mystery.name?.en;
    const draftName = mystery.kokTemp || mystery.name?.kokTemp;
    const label = `${SET_LABELS[setKey]} Mysteries — Decade ${i + 1}${fallbackName ? ` (${fallbackName})` : ''}`;

    let text;
    let note = null;
    if (hasText(name)) {
      text = `${name}.\n\n${meditation}`;
    } else if (language !== 'en' && hasText(draftName)) {
      text = `${draftName}.\n\n${meditation}`;
      note = `⚠️ The mystery name "${draftName}" is an unverified draft translation (\`kokTemp\` in src/data/mysteries.js), not yet the confirmed \`name.${language}\` value — double-check it before reading, or swap in your own wording.`;
    } else {
      text = meditation;
      note =
        language !== 'en'
          ? `⚠️ No ${language} translation of this mystery's name exists yet in src/data/mysteries.js (only the meditation below is translated), so just read the meditation — don't read the English name "${fallbackName}" aloud here.`
          : null;
    }
    sections.push({ filename, label, text, note });
  });
}

const lines = [];
lines.push(`# Rosary narration — recording script (${language})`);
lines.push('');
lines.push(
  'Read each block below aloud and save it as an audio file with the exact filename shown, ' +
    `then drop it into \`public/audio/${language}/\` (replacing whatever is there now) — no code changes needed.`,
);
lines.push('');
lines.push('## Recording tips');
lines.push('');
lines.push('- Use the same device/microphone and the same quiet room for every clip, so they all match in tone and background noise.');
lines.push('- Sit at a consistent distance from the mic; a calm, unhurried, reverent pace suits a prayer app better than a fast, neutral reading voice.');
lines.push('- Leave a beat of silence before and after each recording, then trim it down to a small, even pad (e.g. ~0.3s) on both ends — most voice recorder/editing apps (Voice Memos + a trim, GarageBand, Audacity) can do this.');
lines.push('- Export as `.mp3`. Keep every clip at a similar loudness (most editors have a "normalize" option) so nothing in the sequence suddenly sounds louder or quieter.');
lines.push("- `ourFather`, `hailMary`, and `gloryBe` are each recorded **once** and reused everywhere they appear (the opening prayers and every decade) — you don't need separate versions for each repetition.");
lines.push("- Order below follows the actual Rosary sequence, so reading straight down the list is the same order you'll pray it in.");

if (missing.length > 0) {
  lines.push('');
  lines.push(`## ⚠️ Not included — no \`${language}\` text yet`);
  lines.push('');
  lines.push(
    `The following ${missing.length} file(s) have no \`${language}\` text in the app's data yet, so they're left out below. ` +
      `Add the translation to the matching entry in \`src/data/prayers.js\` or \`src/data/mysteries.js\` first, then rerun this script.`,
  );
  lines.push('');
  missing.forEach((f) => lines.push(`- \`${f}\``));
}

lines.push('');
lines.push('---');
lines.push('');

sections.forEach((s, i) => {
  lines.push(`## ${i + 1}. \`${s.filename}\``);
  lines.push('');
  lines.push(`**${s.label}**`);
  lines.push('');
  if (s.note) {
    lines.push(s.note);
    lines.push('');
  }
  lines.push('> ' + s.text.split('\n').join('\n> '));
  lines.push('');
  lines.push('---');
  lines.push('');
});

fs.writeFileSync(outPath, lines.join('\n'));
console.log(`Wrote ${sections.length} sections (${missing.length} skipped — no ${language} text) to ${outPath}`);
