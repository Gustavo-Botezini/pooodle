import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Check, CreditCard, QrCode } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "19,90",
    period: "uso único",
    description: "Ideal para para freelancers e pequenos empreendedores.",
    features: [
      "Risk Score auditável",
      "Relatório básico de achados",
      "Suporte por e-mail",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "149,90",
    period: "/mês",
    description: "Para pequenas empresas.",
    features: [
      "10 análises de contratos/mês",
      "Risk Score + Exposição Financeira",
      "Gaps de Compliance (LGPD / ISO 27001)",
      "Relatório completo com recomendações",
      "Suporte prioritário",
    ],
    highlighted: true,
  },
    {
    name: "Enterprise",
    price: "799,90",
    period: "/mês",
    description: "Para pequenos escritórios.",
    features: [
      "80 análises de contratos/mês",
      "Risk Score + Exposição Financeira",
      "Gaps de Compliance (LGPD / ISO 27001)",
      "Relatório completo com recomendações",
      "Suporte prioritário",
    ],
    highlighted: false,
  },
  {
    name: "Unlimited",
    price: "Sob consulta",
    period: "",
    description: "Para grandes empresas e corporações.",
    features: [
      "Análises ilimitadas",
      "Score com benchmarking setorial",
      "Relatório personalizado",
      "Integrações customizadas",
      "Gestor de conta dedicado",
      "SLA garantido",
      "Treinamento da equipe",
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 lg:py-32 border-y border-border" style={{ background: "#0d1326" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Planos</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-white">
            Escolha o plano ideal
          </h2>
          <p className="text-lg mb-6" style={{ color: "#a3b3cc" }}>
            Planos flexíveis que crescem com sua necessidade. Pague com PIX ou cartão de crédito.
          </p>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-sm" style={{ color: "#a3b3cc" }}>
              <QrCode className="w-4 h-4 text-primary" />
              PIX
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: "#a3b3cc" }}>
              <CreditCard className="w-4 h-4 text-primary" />
              Cartão de Crédito
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:gap-8 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 border ${
                plan.highlighted
                  ? "border-primary shadow-xl shadow-primary/10 scale-105"
                  : "border-border"
              }`}
              style={{ background: plan.highlighted ? "#0f152d" : "#090d1a" }}
            >
              {plan.highlighted && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 text-white" style={{ background: "#437ef7" }}>
                  Mais Popular
                </Badge>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-sm mt-1" style={{ color: "#a3b3cc" }}>{plan.description}</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-white">
                  {plan.price !== "Sob consulta" ? `R$${plan.price}` : plan.price}
                </span>
                <span className="text-sm ml-1" style={{ color: "#a3b3cc" }}>{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm" style={{ color: "#a3b3cc" }}>
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {plan.price === "Sob consulta" ? (
                <Button
                  asChild
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                >
                  <a href="https://wa.me/554999262036?text=Ol%C3%A1%2C%20quero%20falar%20com%20a%20equipe%20de%20vendas.">
                    Falar com Equipe de Vendas
                  </a>
                </Button>
              ) : (
                <Link to="/contato">
                  <Button
                    className="w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                  >
                    Começar Agora
                  </Button>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



