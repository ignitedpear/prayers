// Launch scope: only English and Konkani are exposed in the language
// switcher for now. Latin/Spanish/Portuguese translations are still present
// throughout src/data/*.js (prayers, mysteries, UI strings) — to bring a
// language back, just re-add its entry here.
export const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'kok', name: 'Konkani', native: 'Konkani' },
];

export const DEFAULT_LANGUAGE = 'kok';
