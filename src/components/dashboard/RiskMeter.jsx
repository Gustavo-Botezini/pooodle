import React from 'react';
export default function RiskMeter({ score, mitigated }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const displayScore = mitigated ? 15 : score;
  const pct = displayScore / 100;
  const strokeDashoffset = circumference * (1 - pct * 0.75);
  const startOffset = circumference * 0.125;

  const color = displayScore > 70
    ? "#ef4444"
    : displayScore > 40
    ? "#f59e0b"
    : "#22c55e";

  const glowColor = displayScore > 70
    ? "rgba(239,68,68,0.35)"
    : displayScore > 40
    ? "rgba(245,158,11,0.35)"
    : "rgba(34,197,94,0.35)";

  return (
    <div className="relative flex items-center justify-center" style={{ width: 180, height: 180 }}>
      {/* Glow */}
      <div
        className="absolute rounded-full transition-all duration-1000"
        style={{
          width: 120,
          height: 120,
          background: glowColor,
          filter: "blur(28px)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <svg width="180" height="180" style={{ transform: "rotate(135deg)" }}>
        <defs>
          <linearGradient id="trackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>
        {/* Track */}
        <circle
          cx="90" cy="90" r={radius}
          fill="none"
          stroke="#1e293b"
          strokeWidth="10"
          strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
          strokeDashoffset={-startOffset}
          strokeLinecap="round"
        />
        {/* Active arc */}
        <circle
          cx="90" cy="90" r={radius}
          fill="none"
          stroke={color}
          strokeWidth="10"
          strokeDasharray={`${circumference * 0.75 * pct} ${circumference * (1 - 0.75 * pct)}`}
          strokeDashoffset={-startOffset}
          strokeLinecap="round"
          style={{ transition: "all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)", filter: `drop-shadow(0 0 8px ${color})` }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="font-mono font-bold leading-none transition-all duration-1000"
          style={{ fontSize: 38, color, textShadow: `0 0 20px ${color}` }}
        >
          {displayScore}
        </span>
        <span className="text-xs font-mono text-slate-400 mt-0.5 tracking-widest uppercase">/ 100</span>
      </div>
    </div>
  );
}


