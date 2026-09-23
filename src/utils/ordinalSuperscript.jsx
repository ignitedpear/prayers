// Renders Konkani-style ordinal shorthand (e.g. "1lo", "2ro", "3ro", "4tho",
// "5vo") with the letter suffix as a superscript: 1ˡᵒ, 2ʳᵒ, 3ʳᵒ, 4ᵗʰᵒ, 5ᵛᵒ.
// Any run of digits immediately followed by lowercase letters (no space in
// between) is treated as "number + suffix" and split accordingly. Plain
// text and full words (e.g. "Mister") pass through untouched.
//
// Returns an array of strings/elements, which React accepts as children
// anywhere a plain string would go — e.g. {withOrdinalSuperscripts(text)}.
export function withOrdinalSuperscripts(text) {
  if (!text) return text;

  const regex = /(\d+)([a-z]+)/g;
  const nodes = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(match[1]);
    nodes.push(<sup key={`ord-${key++}`}>{match[2]}</sup>);
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}
