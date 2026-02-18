type ChartCircleProps = {
  value: string;
  subtext: string;
  percentFilled?: number;
  legend?: { label: string; percent: string; color: string }[];
};

export default function ChartCircle({
  value,
  subtext,
  percentFilled = 83,
  legend = [],
}: ChartCircleProps) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const filled = (percentFilled / 100) * circumference;
  const gap = circumference - filled;

  return (
    <div className="flex flex-row-reverse flex-wrap items-center justify-center gap-6 py-2">
      <div className="flex flex-col gap-2">
        {legend.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm text-gray-600">
            <span
              className="size-3 shrink-0 rounded-sm"
              style={{ backgroundColor: item.color }}
            />
            <span>{item.percent}</span>
          </div>
        ))}
      </div>
      <div className="relative flex size-44 shrink-0 items-center justify-center">
        <svg width="140" height="140" className="-rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="var(--accent-green-light)"
            strokeWidth="10"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke="var(--accent-green)"
            strokeWidth="10"
            strokeDasharray={`${filled} ${gap}`}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">{value}</span>
          <span className="text-sm text-gray-500">{subtext}</span>
        </div>
      </div>
    </div>
  );
}
