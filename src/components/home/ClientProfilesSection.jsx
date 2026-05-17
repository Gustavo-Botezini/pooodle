import React, { useState } from "react";
import { motion } from "framer-motion";
import { Building2, User, Briefcase, Scale, Home, ShoppingCart } from "lucide-react";

const profiles = [
  {
    icon: Building2,
    title: "Empresas",
    pain: "Revisam dezenas de contratos com fornecedores, parceiros e clientes por mês.",
    solution: "Automatize a revisão e garanta conformidade em escala, economizando tempo e reduzindo riscos.",
    color: "#437ef7",
  },
  {
    icon: Scale,
    title: "Advogados",
    pain: "Precisam analisar contratos extensos e identificar riscos rapidamente.",
    solution: "Use como ferramenta auxiliar para acelerar a análise e nunca perder uma cláusula crítica.",
    color: "#cca043",
  },
  {
    icon: Briefcase,
    title: "Startups",
    pain: "Crescem rápido e fecham contratos sem tempo para revisão jurídica adequada.",
    solution: "Analise contratos de investimento, SaaS e parceria em minutos.",
    color: "#437ef7",
  },
  {
    icon: User,
    title: "Autônomos e Freelancers",
    pain: "Assinam contratos sem entender completamente os termos e riscos.",
    solution: "Entenda exatamente o que está assinando com relatórios claros e acessíveis.",
    color: "#3da9fc",
  },
  {
    icon: Home,
    title: "Imobiliárias",
    pain: "Contratos de locação e compra/venda exigem atenção a dezenas de cláusulas.",
    solution: "Padronize e valide contratos imobiliários com análise automatizada.",
    color: "#f2545b",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    pain: "Termos de uso, políticas e contratos de logística precisam estar em conformidade.",
    solution: "Garanta que seus termos estejam juridicamente sólidos e protejam seu negócio.",
    color: "#cca043",
  },
];

const PRIORITY = ["Empresas", "Advogados", "Startups"];

export default function ClientProfilesSection() {
  const [activeTab, setActiveTab] = useState("Empresas");

  const active = profiles.find((p) => p.title === activeTab);
  const tabs = PRIORITY.map((t) => profiles.find((p) => p.title === t));
  const secondary = profiles.filter((p) => !PRIORITY.includes(p.title));

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Para quem é</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-white">
            Solução para diversos perfis
          </h2>
          <p className="text-lg" style={{ color: "#a3b3cc" }}>
            Veja como o Poodle resolve problemas reais do dia a dia de diferentes profissionais.
          </p>
        </motion.div>

        {/* Priority tabs */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {tabs.map((p) => (
            <button
              key={p.title}
              onClick={() => setActiveTab(p.title)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border"
              style={
                activeTab === p.title
                  ? {
                      background: `${p.color}18`,
                      borderColor: `${p.color}40`,
                      color: p.color,
                    }
                  : {
                      background: "transparent",
                      borderColor: "rgba(148,163,184,0.12)",
                      color: "#a3b3cc",
                    }
              }
            >
              <p.icon className="w-4 h-4" />
              {p.title}
            </button>
          ))}
        </div>

        {/* Active tab detail */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-border p-8 mb-8 max-w-3xl mx-auto"
          style={{ background: "#0f152d", borderColor: `${active.color}22` }}
        >
          <div className="flex items-start gap-5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${active.color}18` }}
            >
              <active.icon className="w-6 h-6" style={{ color: active.color }} />
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">{active.title}</h3>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#f2545b" }}>
                  Problema
                </span>
                <p className="text-sm mt-1" style={{ color: "#a3b3cc" }}>{active.pain}</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#437ef7" }}>
                  Solução
                </span>
                <p className="text-sm mt-1" style={{ color: "#a3b3cc" }}>{active.solution}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary profiles compact grid */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {secondary.map((p) => (
            <div
              key={p.title}
              className="group rounded-xl border border-border p-5 hover:border-primary/30 hover:bg-card transition-all duration-300 cursor-default"
              style={{ background: "#0a0f1e" }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: `${p.color}18` }}
                >
                  <p.icon className="w-3.5 h-3.5" style={{ color: p.color }} />
                </div>
                <span className="text-sm font-semibold text-white">{p.title}</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "#a3b3cc" }}>{p.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



