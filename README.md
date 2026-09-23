# Daily Prayers

A small Catholic prayer web app built with React + Vite.

## Features

- **Daily Rosary** on the home page — pick any day from 3 days ago to 3 days
  ahead; the mystery set (Joyful / Sorrowful / Glorious / Luminous) is worked
  out automatically from the day of the week.
- Two ways to pray each day's Rosary:
  - **List view** — an accordion showing the opening prayers, all five
    decades, and the closing prayers.
  - **Slideshow view** — a step-by-step wizard (one prayer at a time, Next /
    Back) with a progress bar.
- **Other Prayers** tab, starting with the Angelus (more to come).
- **Language switcher** — English, Latin, Spanish, Portuguese, and Konkani.
  Switching language re-renders every prayer on the page immediately.

## Content notes

Prayer texts for English, Latin, Spanish, and Portuguese were checked against
EWTN, Vatican News, USCCB, and the Sanctuary of Fátima. The Konkani (Romi
script) texts come from long-standing Konkani Catholic prayer community
sources rather than an official diocesan publication — a native-speaker or
clergy review is recommended before relying on them liturgically. A note to
this effect appears in the app itself when Konkani is selected.

The Rosary's weekday schedule uses the standard post-2002 pattern (Joyful:
Mon/Sat, Sorrowful: Tue/Fri, Glorious: Wed/Sun, Luminous: Thu). Some
traditions substitute the Sorrowful mysteries on Lenten Sundays; that
seasonal exception isn't implemented yet.

## Development

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
```

`index.html` is the entry point Vite uses to mount the app (`src/main.jsx` →
`src/App.jsx`).

## Project structure

```
src/
  data/            prayer texts, mystery data, UI strings (all 5 languages)
  utils/           date helpers, mystery-of-the-day logic, Rosary sequence builder
  context/         language selection (persisted to localStorage)
  components/      Rosary + Angelus UI
```
