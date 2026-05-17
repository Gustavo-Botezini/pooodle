import React, { useState, useEffect } from "react";
import { AlertOctagon, AlertTriangle, CheckCircle2, BookOpen, ArrowRight, ChevronRight, Shield, FileText, Lock, Cpu } from "lucide-react";
import RiskMeter from "./RiskMeter";
import MetricCard from "./MetricCard";
import FindingRow from "./FindingRow";
import MitigationToggle from "./MitigationToggle";

const findings = [
  {
    title: "Ausência de cláusulas LGPD/DPA",
    severity: "Critical",
    requirements: ["LGPD", "ISO 27001", "GDPR Art. 28"],
    description: "O contrato não contém disposições sobre proteção de dados pessoais, DPA ou designação de responsabilidades LGPD.",
  },
  {
    title: "SLA de notificação de incidentes inadequado",
    severity: "High",
    requirements: ["ISO 27001", "LGPD Art. 48"],
    description: "Prazo de comunicação de incidentes de segurança não especificado ou superior ao exigido pela autoridade regulatória.",
  },
  {
    title: "Falta de controles mínimos de segurança (Criptografia)",
    severity: "Critical",
    requirements: ["ISO 27001 A.10", "SOC 2 CC6"],
    description: "Ausência de requisitos de criptografia em repouso e em trânsito para dados sensíveis tratados no âmbito do contrato.",
  },
];

export default function ContractDashboard({ embedded = false }) {
  const [mitigated, setMitigated] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  const inner = (
    <div
      className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-10 transition-all duration-700"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
    >
      {/* ── TOP BRAND BAR ── */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}
          >
            <Cpu size={16} className="text-white" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">Poodle</span>
          <span
            className="text-[10px] font-mono px-2 py-0.5 rounded-full tracking-widest ml-1"
            style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.25)" }}
          >
            AI LEGAL
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-xs font-mono tracking-wider hidden sm:block">ANÁLISE #CON-2024-0847</span>
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{ boxShadow: "0 0 8px #22c55e" }} />
        </div>
      </div>

        {/* ── HEADER / SUMMARY BANNER ── */}
        <div
          className="relative rounded-2xl border overflow-hidden mb-6"
          style={{
            background: "rgba(10,15,30,0.85)",
            borderColor: "rgba(239,68,68,0.2)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 0 60px rgba(239,68,68,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Top critical bar */}
          <div className="h-[2px]" style={{ background: "linear-gradient(90deg, transparent 0%, #ef4444 30%, #dc2626 70%, transparent 100%)" }} />

          <div className="p-6 sm:p-8">
            {/* Status badge + title row */}
            <div className="flex flex-wrap items-start gap-3 mb-6">
              <div
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest"
                style={{
                  background: "rgba(239,68,68,0.12)",
                  border: "1px solid rgba(239,68,68,0.35)",
                  color: "#ef4444",
                  boxShadow: "0 0 12px rgba(239,68,68,0.15)",
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                CRÍTICO
              </div>
              <div className="flex-1">
                <h2 className="text-white font-semibold text-lg sm:text-xl leading-snug tracking-tight">
                  Contrato de Serviços — Análise de Conformidade
                </h2>
                <p className="text-slate-500 text-xs font-mono mt-1 tracking-wider">
                  FORNECEDOR TECNOLOGIA LTDA · Gerado em 15/01/2025 às 14:32
                </p>
              </div>
            </div>

            {/* Metrics row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {/* Risk Score */}
              <div
                className="rounded-xl p-4 flex flex-col items-center gap-2 border"
                style={{ background: "rgba(239,68,68,0.04)", borderColor: "rgba(239,68,68,0.12)" }}
              >
                <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Risk Score</span>
                <RiskMeter score={100} mitigated={mitigated} />
                <span
                  className="text-xs font-mono tracking-wide"
                  style={{ color: mitigated ? "#22c55e99" : "#ef444499" }}
                >
                  {mitigated ? "Risco Mitigado" : "Risco Máximo Detectado"}
                </span>
              </div>

              {/* Financial Exposure */}
              <div
                className="rounded-xl p-5 flex flex-col justify-between border"
                style={{ background: "rgba(245,158,11,0.04)", borderColor: "rgba(245,158,11,0.12)" }}
              >
                <div>
                  <div className="flex items-center gap-1.5 mb-3">
                    <AlertTriangle size={12} className="text-amber-400" />
                    <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Prejuízo Est.</span>
                  </div>
                  <div
                    className="font-mono font-bold text-3xl sm:text-4xl transition-all duration-1000 leading-none"
                    style={{
                      color: mitigated ? "#22c55e" : "#f59e0b",
                      textShadow: mitigated ? "0 0 24px rgba(34,197,94,0.5)" : "0 0 24px rgba(245,158,11,0.5)",
                    }}
                  >
                    {mitigated ? "R$ 156K" : "R$ 2,26M"}
                  </div>
                  <div className="text-slate-500 text-xs mt-2 font-mono">
                    {mitigated ? "93% de redução com controles ativos" : "Estimativa máxima de risco"}
                  </div>
                  {!mitigated && (
                    <p className="text-[10px] mt-1.5 leading-snug" style={{ color: "rgba(148,163,184,0.45)" }}>
                      *Cálculo estimado com base em penalidades regulatórias e vulnerabilidades contratuais.
                    </p>
                  )}
                </div>
                <div
                  className="mt-4 h-1.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(30,41,59,0.8)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-1200"
                    style={{
                      width: mitigated ? "7%" : "100%",
                      background: mitigated
                        ? "linear-gradient(90deg, #22c55e, #16a34a)"
                        : "linear-gradient(90deg, #f59e0b, #ef4444)",
                      boxShadow: mitigated ? "0 0 8px rgba(34,197,94,0.4)" : "0 0 8px rgba(239,68,68,0.4)",
                    }}
                  />
                </div>
              </div>

              {/* Executive Summary */}
              <div
                className="rounded-xl p-5 flex flex-col border"
                style={{ background: "rgba(15,23,42,0.6)", borderColor: "rgba(148,163,184,0.08)" }}
              >
                <div className="flex items-center gap-1.5 mb-3">
                  <FileText size={12} className="text-slate-400" />
                  <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Resumo Executivo</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed flex-1">
                  O contrato apresenta risco crítico. Ausência de cláusulas{" "}
                  <span className="text-red-400 font-semibold">LGPD/DPA</span>, SLA de notificação de incidentes e{" "}
                  <span className="text-amber-400 font-semibold">controles mínimos de segurança</span>.
                </p>
                <div
                  className="mt-4 flex items-center gap-1.5 text-xs font-mono"
                  style={{ color: "#64748b" }}
                >
                  <Shield size={11} />
                  <span>3 frameworks avaliados</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── METRICS COUNTER ROW ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <MetricCard
            count="12"
            label="Cláusulas Ausentes"
            color="#ef4444"
            icon={AlertOctagon}
            description="Lacunas críticas identificadas no contrato"
          />
          <MetricCard
            count="12"
            label="Pontos de Compliance"
            color="#f59e0b"
            icon={CheckCircle2}
            description="Verificações regulatórias avaliadas"
          />
          <MetricCard
            count="11"
            label="Recomendações"
            color="#6366f1"
            icon={BookOpen}
            description="Boas práticas e melhorias sugeridas"
          />
        </div>

        {/* ── FINDINGS / AUDIT TRAIL ── */}
        <div
          className="relative rounded-2xl border overflow-hidden mb-6"
          style={{
            background: "rgba(10,15,30,0.85)",
            borderColor: "rgba(148,163,184,0.08)",
            backdropFilter: "blur(16px)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
          }}
        >
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)" }}
                >
                  <AlertOctagon size={15} className="text-red-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base tracking-tight">Trilha de Auditoria</h3>
                  <p className="text-slate-500 text-xs font-mono mt-0.5 tracking-wider">GAPS CRÍTICOS IDENTIFICADOS</p>
                </div>
              </div>
              <span
                className="text-[10px] font-mono px-2.5 py-1 rounded-full tracking-widest"
                style={{
                  color: "#ef4444",
                  background: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.2)",
                }}
              >
                3 / 12 EXIBIDOS
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {findings.map((f, i) => (
                <FindingRow key={i} index={i} {...f} />
              ))}
            </div>

            <button
              className="group mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-mono font-medium tracking-wider transition-all duration-300"
              style={{
                color: "#64748b",
                background: "rgba(30,41,59,0.4)",
                border: "1px solid rgba(148,163,184,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#94a3b8";
                e.currentTarget.style.background = "rgba(30,41,59,0.7)";
                e.currentTarget.style.borderColor = "rgba(148,163,184,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#64748b";
                e.currentTarget.style.background = "rgba(30,41,59,0.4)";
                e.currentTarget.style.borderColor = "rgba(148,163,184,0.08)";
              }}
            >
              VER TODOS OS 12 GAPS
              <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* ── MITIGATION SIMULATOR ── */}
        <div className="mb-8">
          <MitigationToggle enabled={mitigated} onToggle={() => setMitigated(!mitigated)} />
        </div>

        {/* ── CTA BUTTONS ── */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            className="group flex-1 flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #3b82f6, #6366f1)",
              color: "#fff",
              boxShadow: "0 0 24px rgba(99,102,241,0.3)",
              border: "1px solid rgba(99,102,241,0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "0 0 40px rgba(99,102,241,0.5)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "0 0 24px rgba(99,102,241,0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Solicitar Demonstração
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            className="group flex-1 flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300"
            style={{
              background: "transparent",
              color: "#94a3b8",
              border: "1px solid rgba(148,163,184,0.15)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#e2e8f0";
              e.currentTarget.style.borderColor = "rgba(148,163,184,0.3)";
              e.currentTarget.style.background = "rgba(148,163,184,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#94a3b8";
              e.currentTarget.style.borderColor = "rgba(148,163,184,0.15)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Conheça a Plataforma
            <ChevronRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Footer label */}
        <div className="flex items-center justify-center gap-4 mt-8">
          {["ISO 27001", "LGPD", "SOC 2", "GDPR"].map((tag) => (
            <span key={tag} className="text-[10px] font-mono text-slate-600 tracking-widest">
              {tag}
            </span>
          ))}
        </div>
    </div>
  );

  if (embedded) {
    return (
      <div
        className="relative w-full font-inter overflow-hidden"
        style={{ background: "linear-gradient(135deg, #020817 0%, #040d1f 50%, #020817 100%)" }}
      >
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {inner}
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen w-full font-inter overflow-hidden"
      style={{ background: "linear-gradient(135deg, #020817 0%, #040d1f 50%, #020817 100%)" }}
    >
      {/* Ambient background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: 600, height: 600,
            background: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%)",
            top: -150, right: -100,
          }}
        />
        <div
          className="absolute rounded-full opacity-15"
          style={{
            width: 500, height: 500,
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
            bottom: -100, left: -100,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(148,163,184,1) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      {inner}
    </div>
  );
}



