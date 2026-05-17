import React from 'react';
import ContractDashboard from "../../components/dashboard/ContractDashboard";

export default function DashboardPreviewSection() {
  return (
    <section className="relative py-20 overflow-hidden" id="demo">
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(239,68,68,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Section label */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center mb-10">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-5 text-[10px] font-mono font-bold tracking-widest"
          style={{
            background: "rgba(239,68,68,0.08)",
            border: "1px solid rgba(239,68,68,0.2)",
            color: "#ef4444",
          }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          DEMO INTERATIVO
        </div>
        <h2 className="text-white font-bold text-3xl sm:text-4xl tracking-tight leading-tight mb-3">
          Veja a análise em ação
        </h2>
        <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
          Explore o dashboard completo — interaja com o simulador de mitigação e veja o risco cair em tempo real.
        </p>
      </div>

      {/* Embedded Dashboard */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div
          className="rounded-3xl overflow-hidden border"
          style={{
            borderColor: "rgba(239,68,68,0.12)",
            boxShadow:
              "0 0 80px rgba(239,68,68,0.06), 0 0 0 1px rgba(255,255,255,0.03)",
          }}
        >
          <ContractDashboard embedded />
        </div>
      </div>
    </section>
  );
}



