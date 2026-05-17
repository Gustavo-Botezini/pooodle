import React from 'react';
import { Shield, AlertTriangle, Lock } from "lucide-react";

const severityConfig = {
  Critical: {
    color: "#ef4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.2)",
    label: "CRÍTICO",
  },
  High: {
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.2)",
    label: "ALTO",
  },
};

const iconMap = {
  0: Shield,
  1: AlertTriangle,
  2: Lock,
};

export default function FindingRow({ index, title, severity, requirements, description }) {
  const cfg = severityConfig[severity];
  const Icon = iconMap[index] || Shield;

  return (
    <div
      className="group flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 hover:scale-[1.01] cursor-default"
      style={{
        background: cfg.bg,
        borderColor: cfg.border,
      }}
    >
      {/* Icon */}
      <div
        className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
        style={{ background: `${cfg.color}15`, border: `1px solid ${cfg.color}25` }}
      >
        <Icon size={16} style={{ color: cfg.color }} />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-white font-semibold text-sm leading-snug">{title}</span>
          <span
            className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full tracking-widest"
            style={{
              color: cfg.color,
              background: `${cfg.color}18`,
              border: `1px solid ${cfg.color}30`,
            }}
          >
            {cfg.label}
          </span>
        </div>
        {description && (
          <p className="text-slate-400 text-xs mt-1 leading-relaxed">{description}</p>
        )}
        <div className="flex items-center gap-1.5 mt-2 flex-wrap">
          {requirements.map((req) => (
            <span
              key={req}
              className="text-[10px] font-mono px-2 py-0.5 rounded tracking-wider"
              style={{
                color: "#94a3b8",
                background: "rgba(148,163,184,0.08)",
                border: "1px solid rgba(148,163,184,0.15)",
              }}
            >
              {req}
            </span>
          ))}
        </div>
      </div>

      {/* Right indicator */}
      <div
        className="mt-1 flex-shrink-0 w-1 h-8 rounded-full"
        style={{ background: `linear-gradient(180deg, ${cfg.color}, transparent)` }}
      />
    </div>
  );
}


