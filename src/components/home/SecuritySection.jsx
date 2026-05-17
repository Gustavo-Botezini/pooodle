import React from 'react';
import { motion } from "framer-motion";
import { Trash2, Lock, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Trash2,
    title: "Retenção Zero de Dados",
    description:
      "Seus documentos são processados estritamente na memória e descartados de forma permanente após a geração do relatório.",
    color: "#f2545b",
  },
  {
    icon: Lock,
    title: "Criptografia de Ponta a Ponta",
    description:
      "Arquivos protegidos por criptografia de nível militar em trânsito (TLS) e em repouso (AES-256).",
    color: "#437ef7",
  },
  {
    icon: ShieldCheck,
    title: "Privacidade e LGPD",
    description:
      "Garantia contratual de que seus dados comerciais nunca serão utilizados para treinar modelos públicos de IA.",
    color: "#cca043",
  },
];

export default function SecuritySection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Segurança e Privacidade
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-white">
            Seus contratos estão em mãos seguras
          </h2>
          <p className="text-lg" style={{ color: "#a3b3cc" }}>
            Projetado desde o início para lidar com documentos sensíveis com total responsabilidade.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-border p-7 hover:border-primary/30 hover:bg-card transition-all duration-300"
              style={{ background: "#0f152d" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{ background: `${item.color}18` }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <h3 className="text-base font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#a3b3cc" }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


