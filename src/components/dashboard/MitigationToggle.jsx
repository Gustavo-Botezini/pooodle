import React from 'react';
import { Zap, TrendingDown } from "lucide-react";

export default function MitigationToggle({ enabled, onToggle }) {
  return (
    <div
      className="relative rounded-2xl border overflow-hidden transition-all duration-500"
      style={{
        background: enabled
          ? "linear-gradient(135deg, rgba(34,197,94,0.06), rgba(16,185,129,0.04))"
          : "rgba(15,23,42,0.7)",
        borderColor: enabled ? "rgba(34,197,94,0.25)" : "rgba(148,163,184,0.1)",
        backdropFilter: "blur(12px)",
      }}
    >
      {enabled && (
        <div className="absolute top-0 left-0 right-0 h-[1.5px]"
          style={{ background: "linear-gradient(90deg, transparent, #22c55e, transparent)" }}
        />
      )}

      <div className="p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-500"
              style={{
                background: enabled ? "rgba(34,197,94,0.15)" : "rgba(148,163,184,0.08)",
                border: `1px solid ${enabled ? "rgba(34,197,94,0.3)" : "rgba(148,163,184,0.15)"}`,
              }}
            >
              <Zap size={16} style={{ color: enabled ? "#22c55e" : "#64748b" }} />
            </div>
            <div>
              <div className="text-white font-semibold text-sm tracking-wide">Simular Mitigação</div>
              <div className="text-slate-500 text-xs mt-0.5">
                {enabled ? "Aplicando controles recomendados" : "Simule o impacto das correções"}
              </div>
            </div>
          </div>

          {/* Toggle switch */}
          <button
            onClick={onToggle}
            className="relative flex-shrink-0 w-12 h-6 rounded-full transition-all duration-500 focus:outline-none"
            style={{
              background: enabled
                ? "linear-gradient(135deg, #22c55e, #16a34a)"
                : "rgba(30,41,59,1)",
              border: `1px solid ${enabled ? "rgba(34,197,94,0.4)" : "rgba(100,116,139,0.3)"}`,
              boxShadow: enabled ? "0 0 16px rgba(34,197,94,0.35)" : "none",
            }}
          >
            <div
              className="absolute top-0.5 w-5 h-5 rounded-full transition-all duration-500"
              style={{
                left: enabled ? "calc(100% - 22px)" : "2px",
                background: enabled ? "#fff" : "#64748b",
                boxShadow: enabled ? "0 2px 8px rgba(0,0,0,0.3)" : "none",
              }}
            />
          </button>
        </div>

        {/* Result strip */}
        <div
          className="overflow-hidden transition-all duration-700"
          style={{ maxHeight: enabled ? "80px" : "0px", opacity: enabled ? 1 : 0 }}
        >
          <div className="mt-4 pt-4 border-t border-emerald-500/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-emerald-400">
              <TrendingDown size={14} />
              <span className="text-xs font-mono font-semibold tracking-wide">RISCO: 100 → 15</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400">
              <span className="text-xs font-mono font-semibold tracking-wide">EXPOSIÇÃO: R$2,26M → R$156K</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


