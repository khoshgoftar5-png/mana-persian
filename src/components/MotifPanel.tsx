export default function MotifPanel() {
  return (
    <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg" role="presentation">
      <rect x="0.5" y="0.5" width="199" height="259" stroke="#4A4160" />
      {Array.from({ length: 6 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => {
          const x = 20 + col * 45;
          const y = 20 + row * 40;
          const gold = (row + col) % 3 === 0;
          return (
            <path
              key={`${row}-${col}`}
              d={`M${x} ${y - 12} L${x + 12} ${y} L${x} ${y + 12} L${x - 12} ${y} Z`}
              stroke={gold ? "#B9903F" : "#4A4160"}
              strokeWidth="1"
              fill="none"
            />
          );
        })
      )}
      <line x1="10" y1="130" x2="190" y2="130" stroke="#B9903F" strokeWidth="0.5" strokeDasharray="2 4" />
    </svg>
  );
}
