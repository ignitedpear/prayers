// Builds the ordered list of steps that make up a full Rosary for a given
// mystery set: opening prayers, five decades, closing prayers. Both the
// accordion view and the slideshow view are generated from this same
// structure so they never drift out of sync.

export function buildRosarySequence(mysterySet) {
  const steps = [];

  steps.push({ id: 'open-sign', section: 'opening', kind: 'signOfCross' });
  steps.push({ id: 'open-creed', section: 'opening', kind: 'apostlesCreed' });
  steps.push({ id: 'open-ourfather', section: 'opening', kind: 'ourFather' });
  steps.push({ id: 'open-hailmary', section: 'opening', kind: 'hailMary', repeat: 3, note: 'forFaithHopeCharity' });
  steps.push({ id: 'open-glorybe', section: 'opening', kind: 'gloryBe' });

  mysterySet.mysteries.forEach((mystery, decadeIndex) => {
    const n = decadeIndex + 1;
    steps.push({ id: `d${n}-announce`, section: 'decade', decadeIndex, kind: 'mysteryAnnounce', mystery });
    steps.push({ id: `d${n}-ourfather`, section: 'decade', decadeIndex, kind: 'ourFather' });
    steps.push({ id: `d${n}-hailmary`, section: 'decade', decadeIndex, kind: 'hailMary', repeat: 10 });
    steps.push({ id: `d${n}-glorybe`, section: 'decade', decadeIndex, kind: 'gloryBe' });
    steps.push({ id: `d${n}-fatima`, section: 'decade', decadeIndex, kind: 'fatimaPrayer' });
  });

  steps.push({ id: 'close-hhq', section: 'closing', kind: 'hailHolyQueen' });
  steps.push({ id: 'close-sign', section: 'closing', kind: 'signOfCross' });

  return steps;
}

export function groupIntoDecades(steps) {
  const opening = steps.filter((s) => s.section === 'opening');
  const closing = steps.filter((s) => s.section === 'closing');
  const decades = [0, 1, 2, 3, 4].map((decadeIndex) => steps.filter((s) => s.section === 'decade' && s.decadeIndex === decadeIndex));
  return { opening, decades, closing };
}
