# Audio narration files

Every file in `en/` and `kok/` right now is a **1-second silent placeholder**
(generated with ffmpeg), so the app builds and runs correctly, but you won't
hear anything yet. Replace each placeholder with a real recording using the
**exact same filename** — the app looks up audio purely by filename, so
nothing else needs to change once you drop the real files in.

## Naming convention

One file per prayer, per language, always `.mp3`, always inside `en/` or
`kok/`:

| File | Prayer |
|---|---|
| `signOfCross.mp3` | Sign of the Cross |
| `apostlesCreed.mp3` | Apostles' Creed |
| `ourFather.mp3` | Our Father |
| `hailMary.mp3` | Hail Mary |
| `gloryBe.mp3` | Glory Be |
| `fatimaPrayer.mp3` | Fatima (O My Jesus) Prayer |
| `hailHolyQueen.mp3` | Hail, Holy Queen |
| `mystery-joyful-1.mp3` … `mystery-joyful-5.mp3` | Joyful mysteries, decades 1–5 (announcement + meditation) |
| `mystery-sorrowful-1.mp3` … `mystery-sorrowful-5.mp3` | Sorrowful mysteries, decades 1–5 |
| `mystery-glorious-1.mp3` … `mystery-glorious-5.mp3` | Glorious mysteries, decades 1–5 |
| `mystery-luminous-1.mp3` … `mystery-luminous-5.mp3` | Luminous mysteries, decades 1–5 |

That's 27 files per language × 2 languages (`en`, `kok`) = 54 files total.
`ourFather`, `hailMary`, and `gloryBe` are recorded once and reused for both
the opening prayers and every decade — you don't need decade-specific
versions of those three.

## Checklist when uploading real recordings

- Keep the filenames exactly as listed above (case-sensitive).
- Keep them as `.mp3` (or re-encode to `.mp3` before uploading).
- Put English recordings in `public/audio/en/`, Konkani in `public/audio/kok/`.
- If a recording is genuinely missing, you can leave the silent placeholder
  in place — the app will just play silence for that one prayer rather than
  breaking.
- Adding a third language later (Latin, Spanish, Portuguese) means creating a
  new `public/audio/<lang-code>/` folder with the same 27 filenames — no code
  changes needed, since the lookup is generated from the current language
  code automatically (see `src/utils/audioSrc.js`).

## Where this is wired in the app

- **List view** (`RosaryAccordion.jsx`): audio plays straight through all 27
  steps in order; whichever prayer is currently playing automatically expands
  its accordion section. Clicking a different section jumps playback there.
- **Slideshow view** (`RosarySlideshow.jsx`): audio is bound to the slide
  you're looking at. It auto-plays when you land on a new slide, but never
  auto-advances to the next one — you always click Next yourself.
- Both views share one on/off toggle and one playback-speed control, shown
  just above the view (0.75×, 1×, 1.25×, 1.5×), and both remember your
  choice across visits.
