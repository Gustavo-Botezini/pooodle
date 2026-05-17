import React from 'react';
export default function MetricCard({ count, label, color, dotColor, icon: Icon, description }) {
  return (
    <div
      className="relative group rounded-2xl border transition-all duration-300 cursor-default overflow-hidden"
      style={{
        background: "rgba(15,23,42,0.7)",
        borderColor: `${color}22`,
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px] transition-opacity duration-300 group-hover:opacity-100 opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />

      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: `${color}18`, border: `1px solid ${color}30` }}
          >
            <Icon size={16} style={{ color }} />
          </div>
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: color, boxShadow: `0 0 8px ${color}` }}
          />
        </div>

        <div>
          <div
            className="font-mono font-bold text-3xl leading-none transition-all duration-300"
            style={{ color, textShadow: `0 0 24px ${color}60` }}
          >
            {count}
          </div>
          <div className="text-white font-semibold text-sm mt-1 tracking-wide">{label}</div>
          <div className="text-slate-500 text-xs mt-1 leading-relaxed">{description}</div>
        </div>
      </div>

      {/* Hover background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${color}08, transparent 70%)` }}
      />
    </div>
  );
}


