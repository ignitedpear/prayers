// Site-owner controls for the audio narration feature (Rosary List +
// Slideshow views). These are NOT exposed as toggles in the website's UI —
// they're plain constants you edit here and push to GitHub, so only you (via
// the repo) control audio behavior for every visitor, not the visitor
// themselves.
//
// The settings below automatically differ between your local machine and
// the deployed site, using Vite's built-in `import.meta.env.DEV` flag:
//   - `npm run dev` (your local machine)      -> import.meta.env.DEV = true
//   - `npm run build` (what the GitHub Actions -> import.meta.env.DEV = false
//      workflow runs before deploying to Pages)
// So you can freely test with audio + speed control on locally, while
// production stays locked down, without having to remember to flip anything
// back before you push. Edit the two objects below to change either
// environment's behavior; commit and push for the production side to take
// effect on the next deploy.

const LOCAL_CONFIG = {
  enabled: true,
  allowSpeedControl: true,
  fixedRate: 1,
};

const PRODUCTION_CONFIG = {
  enabled: false,
  allowSpeedControl: false,
  fixedRate: 1,
};

// Master on/off switch for the whole audio narration feature. When false,
// every play button, progress counter, and speed control is hidden and
// playback is disabled entirely — e.g. while real recordings are still just
// silent placeholders (see public/audio/README.md).
//
// Whether visitors are allowed to change the playback speed themselves:
// - true: a speed selector (0.75x/1x/1.25x/1.5x) is shown; each visitor's
//   choice is remembered in their own browser, starting from `fixedRate`.
// - false: no speed selector is shown to anyone; playback is locked to
//   `fixedRate` for every visitor.
//
// `fixedRate` is the speed used when `allowSpeedControl` is false (the only
// speed available), and the default a visitor starts from when it's true.
// One of: 0.75, 1, 1.25, 1.5.
export const AUDIO_CONFIG = import.meta.env.DEV ? LOCAL_CONFIG : PRODUCTION_CONFIG;
