// Turns a plain prayer-text string from src/data/*.js into renderable React
// content, supporting a few conventions you can type directly into the text
// itself:
//
//   "\n"        — a line break. Use "\n\n" for a blank line between
//                 paragraphs (an empty line in between still renders as a
//                 gap).
//   "\t"        — splits that one line into a left-aligned part (before
//                 the tab) and a right-aligned part (after it), e.g.
//                 "V. Pray for us.\tR. That we may be made worthy."
//                 Only the first tab on a line is used as the split point;
//                 a line with no tab renders as plain text, unaffected.
//   **word**    — bold.
//   *word*      — italic.
//                 Both work anywhere in a line, including inside a
//                 left/right split part.
//
// Line breaks and splitting are done here in JS rather than via CSS
// `white-space: pre-line` so the tab convention works reliably — CSS
// line-break collapsing treats a literal tab the same as a space and would
// otherwise just swallow it.
//
// Every line (split or plain) renders as its own block-level element rather
// than being joined with <br/>. A split line has to be block-level for the
// left/right flex layout to span the full width, and mixing that with a
// <br/> immediately after it produced a double line-break (the flex box's
// own implicit line, plus the explicit <br/>) — rendering every line the
// same way avoids that inconsistency.

// Finds **bold** and *italic* runs in a single piece of text (no line
// breaks or tabs inside it) and returns an array of strings/elements.
function parseInlineMarkup(text, keyPrefix) {
  if (!text) return text;

  const pattern = /\*\*(.+?)\*\*|\*(.+?)\*/g;
  const nodes = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1] !== undefined) {
      nodes.push(<strong key={`${keyPrefix}-b-${key++}`}>{match[1]}</strong>);
    } else {
      nodes.push(<em key={`${keyPrefix}-i-${key++}`}>{match[2]}</em>);
    }
    lastIndex = pattern.lastIndex;
  }

  if (lastIndex === 0) return text; // no markup found — return the plain string as-is
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

export function renderPrayerText(text) {
  if (!text) return text;

  return text.split('\n').map((line, i) => {
    const tabIndex = line.indexOf('\t');

    if (tabIndex === -1) {
      const trimmed = line.trim();
      // An empty line (from "\n\n") still needs to occupy a line's worth
      // of height to read as a blank-line gap, which a truly empty <div>
      // wouldn't do on its own.
      return (
        <div className="prayer-line" key={i}>
          {trimmed ? parseInlineMarkup(trimmed, `l${i}`) : ' '}
        </div>
      );
    }

    const left = line.slice(0, tabIndex).trim();
    const right = line.slice(tabIndex + 1).trim();
    return (
      <div className="prayer-split-line" key={i}>
        <span className="prayer-split-line__left">{parseInlineMarkup(left, `l${i}-left`)}</span>
        <span className="prayer-split-line__right">{parseInlineMarkup(right, `l${i}-right`)}</span>
      </div>
    );
  });
}
