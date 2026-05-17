import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 p-12 lg:p-20 text-center"
          style={{ background: "linear-gradient(135deg, #0f152d 0%, #1a2240 50%, #0f152d 100%)" }}
        >
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl" style={{ background: "rgba(67,126,247,0.1)" }} />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full blur-3xl" style={{ background: "rgba(242,84,91,0.08)" }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Proteja seus contratos agora
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#a3b3cc" }}>
              Não espere um problema jurídico para descobrir que seu contrato tinha falhas. 
              Analise com inteligência artificial e obtenha um score auditável hoje mesmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contato">
                <Button size="lg" className="gap-2 text-base px-8 bg-primary hover:bg-primary/90">
                  Começar Agora
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



