import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(67,126,247,0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 70%, rgba(242,84,91,0.08) 0%, transparent 50%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <Badge className="px-4 py-1.5 text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              Análise com Inteligência Artificial
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              O seu maior <span style={{ color: "#f2545b" }}>risco</span> de ciber segurança pode estar <span style={{ color: "#f2545b" }}>assinado</span> e arquivado!
            </h1>

            <p className="text-lg leading-relaxed max-w-xl" style={{ color: "#a3b3cc" }}>
              Nossa plataforma identifica automaticamente falhas, cláusulas abusivas e pontos positivos. 
              Receba um <strong className="text-white">Risk Score</strong> auditável e saiba exatamente o que precisa de atenção — alinhado à ISO 27001 e LGPD.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contato">
                <Button size="lg" className="gap-2 text-base px-8 bg-primary hover:bg-primary/90">
                  Solicitar Demonstração
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a href="#features">
                <Button size="lg" variant="outline" className="text-base px-8 border-border text-foreground hover:bg-secondary">
                  Conheça a Plataforma
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-2">
              {["Score determinístico", "ISO 27001 & LGPD", "Resultado em minutos"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm" style={{ color: "#a3b3cc" }}>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Dashboard preview card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <div className="relative rounded-2xl border border-border overflow-hidden shadow-2xl" style={{ background: "#0f152d" }}>
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                <span className="text-sm font-semibold">Resultado da Análise</span>
                <span className="text-xs px-2 py-0.5 rounded font-bold" style={{ background: "#591a24", color: "#f2545b" }}>CRÍTICO</span>
              </div>

              <div className="p-6 space-y-5">
                {/* Score row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-xl p-4 border border-border" style={{ background: "#090d1a" }}>
                    <p className="text-xs mb-1" style={{ color: "#a3b3cc" }}>RISK SCORE</p>
                    <p className="text-3xl font-extrabold" style={{ color: "#f2545b" }}>100 <span className="text-base font-normal" style={{ color: "#a3b3cc" }}>/ 100</span></p>
                    <p className="text-[10px] mt-1" style={{ color: "#f2545b99" }}>Risco Máximo Detectado</p>
                  </div>
                  <div className="rounded-xl p-4 border border-border" style={{ background: "#090d1a" }}>
                    <p className="text-xs mb-1" style={{ color: "#a3b3cc" }}>EXPOSIÇÃO EST.</p>
                    <p className="text-2xl font-extrabold" style={{ color: "#f2545b" }}>R$ 2,26M</p>
                    <p className="text-[10px] mt-1 leading-snug" style={{ color: "#a3b3cc66" }}>*Estimado com base em penalidades regulatórias</p>
                  </div>
                </div>

                {/* Summary */}
                <div className="rounded-xl p-4 border border-border text-xs leading-relaxed" style={{ background: "#090d1a", color: "#a3b3cc" }}>
                  <p className="font-semibold text-white mb-1">Resumo Executivo</p>
                  O contrato apresenta risco crítico. Ausência de cláusulas LGPD/DPA, SLA de notificação de incidentes e controles mínimos de segurança.
                </div>

                {/* Bottom tabs */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="rounded-lg p-3 border text-center" style={{ background: "#090d1a", borderColor: "#f2545b33" }}>
                    <p className="text-xs font-semibold text-white">12</p>
                    <p className="text-xs" style={{ color: "#a3b3cc" }}>Ausentes</p>
                  </div>
                  <div className="rounded-lg p-3 border text-center" style={{ background: "#090d1a", borderColor: "#cca04333" }}>
                    <p className="text-xs font-semibold text-white">12</p>
                    <p className="text-xs" style={{ color: "#a3b3cc" }}>Compliance</p>
                  </div>
                  <div className="rounded-lg p-3 border text-center" style={{ background: "#090d1a", borderColor: "#437ef733" }}>
                    <p className="text-xs font-semibold text-white">11</p>
                    <p className="text-xs" style={{ color: "#a3b3cc" }}>Recomend.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


