import React from 'react';
import { motion } from "framer-motion";
import { FileSearch, BarChart3, ShieldCheck, Clock, AlertTriangle, Brain } from "lucide-react";

const features = [
{
  icon: FileSearch,
  title: "Análise Profunda",
  description: "Identifique cláusulas abusivas, lacunas contratuais e riscos ocultos com análise detalhada por IA.",
  color: "#437ef7"
},
{
  icon: BarChart3,
  title: "Risk Score Auditável",
  description: "Score determinístico de 0 a 100 calculado com pesos fixos alinhados à ISO 27001, LGPD e gestão de risco enterprise.",
  color: "#f2545b"
},
{
  icon: AlertTriangle,
  title: "Alertas de Risco",
  description: "Alertas automáticos sobre cláusulas ausentes, gaps de compliance e exposição financeira estimada.",
  color: "#f2545b"
},
{
  icon: ShieldCheck,
  title: "Gaps de Compliance",
  description: "Saiba exatamente quais requisitos de LGPD, ISO 27001 e auditoria estão ausentes no seu contrato.",
  color: "#cca043"
},
{
  icon: Clock,
  title: "Resultados em Minutos",
  description: "Economize horas de revisão manual. Nossa IA processa contratos e entrega o relatório completo em minutos.",
  color: "#437ef7"
},
{
  icon: Brain,
  title: "IA Especializada",
  description: "Modelos treinados com foco em contratos brasileiros, padrões de segurança e conformidade regulatória.",
  color: "#3da9fc"
}];


export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16">
          
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Funcionalidades</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-white">
            Tudo que você precisa para contratos seguros
          </h2>
          <p className="text-lg" style={{ color: "#a3b3cc" }}>
            Ferramentas avançadas de análise contratual para proteger seus interesses e acelerar suas decisões.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) =>
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group rounded-2xl border border-border p-7 hover:border-primary/30 hover:bg-card transition-all duration-300"
            style={{ background: "#0f152d" }}>
              <h3 className="text-base font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#a3b3cc" }}>{feature.description}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}


