import React from 'react';
import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin } from "lucide-react";
import logoBranca from "../../../Logo-branca.png";

export default function Footer() {
  return (
    <footer className="border-t border-border" style={{ background: "#090d1a" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img src={logoBranca} alt="Poodle" className="h-24 lg:h-28 w-auto" />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#a3b3cc" }}>
              Poodle — Análise inteligente de contratos com IA. Identifique falhas, riscos e oportunidades em segundos.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-xs uppercase tracking-wider" style={{ color: "#a3b3cc" }}>Links</h4>
            <div className="flex flex-col gap-2.5">
              <Link to="/" className="text-sm hover:text-white transition-colors" style={{ color: "#a3b3cc" }}>Início</Link>
              <Link to="/contato" className="text-sm hover:text-white transition-colors" style={{ color: "#a3b3cc" }}>Contato</Link>
              <Link to="/termos-de-uso" className="text-sm hover:text-white transition-colors" style={{ color: "#a3b3cc" }}>Termos de Uso</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-xs uppercase tracking-wider" style={{ color: "#a3b3cc" }}>Contato</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:contato@poodle.com.br" className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: "#a3b3cc" }}>
                <Mail className="w-4 h-4 text-primary" />
                contato@poodle.com.br
              </a>
              <a href="https://wa.me/554999262036?text=Ol%C3%A1%2C%20quero%20falar%20com%20a%20equipe%20comercial." className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: "#a3b3cc" }} target="_blank" rel="noreferrer">
                <Phone className="w-4 h-4 text-primary" />
                +55 49 9926-2036
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: "#a3b3cc" }}>
                <MapPin className="w-4 h-4 text-primary" />
                Chapecó, SC – Brasil
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-xs uppercase tracking-wider" style={{ color: "#a3b3cc" }}>Pagamento</h4>
            <p className="text-sm leading-relaxed" style={{ color: "#a3b3cc" }}>
              Aceitamos <strong className="text-white">PIX</strong> e <strong className="text-white">Cartão de Crédito</strong> (Visa, Mastercard, Elo, American Express).
            </p>
            <div className="flex gap-2 flex-wrap">
              {["PIX", "VISA", "MASTER", "ELO"].map(b => (
                <span key={b} className="px-3 py-1.5 rounded-md text-xs font-mono font-medium border border-border text-white" style={{ background: "#0f152d" }}>{b}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#a3b3cc" }}>
            © {new Date().getFullYear()} Poodle. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/termos-de-uso" className="text-xs hover:text-white transition-colors" style={{ color: "#a3b3cc" }}>
              Termos de Uso
            </Link>
            <Link to="/contato" className="text-xs hover:text-white transition-colors" style={{ color: "#a3b3cc" }}>
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


