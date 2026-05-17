import React from 'react';
import { motion } from "framer-motion";
import { Upload, Cpu, Shield } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Envie o PDF",
    description: "Selecione um dos créditos disponíveis e faça upload do contrato — ou use o exemplo.",
    color: "#437ef7",
  },
  {
    icon: Cpu,
    step: "02",
    title: "IA extrai os achados",
    description: "A IA identifica cláusulas presentes/ausentes, controles mitigadores e gaps de compliance.",
    color: "#cca043",
  },
  {
    icon: Shield,
    step: "03",
    title: "Score determinístico",
    description: "O backend aplica pesos fixos (ISO 27001 / LGPD) e calcula a nota auditável com exposição financeira.",
    color: "#f2545b",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 border-y border-border" style={{ background: "#0d1326" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Como Funciona</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-white">
            Simples, rápido e auditável
          </h2>
          <p className="text-lg" style={{ color: "#a3b3cc" }}>
            Em apenas 3 passos você terá um relatório completo com score, falhas e exposição financeira.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center rounded-2xl border border-border p-8"
              style={{ background: "#0f152d" }}
            >
              <div
                className="relative z-10 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${step.color}18` }}
              >
                <step.icon className="w-7 h-7" style={{ color: step.color }} />
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
                  style={{ background: step.color }}
                >
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed max-w-xs mx-auto" style={{ color: "#a3b3cc" }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


