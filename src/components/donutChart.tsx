import { useEffect, useState } from "react";

type Props = {
  value: number;
  color: string;
};

export default function DonutChart({ value, color }: Props) {
  const radius = 45;
  const stroke = 18;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const [progress, setProgress] = useState(0);

  // 🎬 ANIMASI LOAD
  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(value);
    }, 200); // delay biar smooth

    return () => clearTimeout(timeout);
  }, [value]);

  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <div className="w-24 h-24 md:w-28 md:h-28">
      <svg
        height="100%"
        width="100%"
        viewBox="0 0 100 100"
      >
        {/* BACKGROUND */}
        <circle
          stroke="#e5e7eb"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="50"
          cy="50"
        />

        {/* PROGRESS */}
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx="50"
          cy="50"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
            transition: "stroke-dashoffset 1s ease",
          }}
        />

        {/* TEXT */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-xs md:text-sm font-bold fill-gray-700"
        >
          {progress.toFixed(1)}%
        </text>
      </svg>
    </div>
  );
}