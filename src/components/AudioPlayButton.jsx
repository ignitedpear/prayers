export default function AudioPlayButton({ isPlaying, onToggle, disabled, label }) {
  return (
    <button
      type="button"
      className="audio-play-btn"
      onClick={onToggle}
      disabled={disabled}
      aria-label={label || (isPlaying ? 'Pause audio' : 'Play audio')}
      aria-pressed={isPlaying}
    >
      {isPlaying ? '⏸' : '▶'}
    </button>
  );
}
