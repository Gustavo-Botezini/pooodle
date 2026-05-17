import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const subjects = [
  { value: "demo", label: "Solicitar Demonstração" },
  { value: "pricing", label: "Informações sobre Planos" },
  { value: "support", label: "Suporte Técnico" },
  { value: "partnership", label: "Parceria Comercial" },
  { value: "other", label: "Outro Assunto" },
];

const contactInfo = [
  { icon: Mail, label: "E-mail", value: "contato@poodle.com.br", href: "mailto:contato@poodle.com.br" },
  { icon: Phone, label: "Telefone comercial", value: "+55 49 9926-2036", href: "https://wa.me/554999262036?text=Ol%C3%A1%2C%20quero%20falar%20com%20a%20equipe%20comercial." },
  { icon: MapPin, label: "Endereço", value: "São Paulo, SP – Brasil", href: null },
  { icon: Clock, label: "Horário", value: "Seg a Sex, 9h às 18h", href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const subjectLabel = subjects.find((item) => item.value === form.subject)?.label || "Sem assunto";
    const whatsappMessage = [
      "Olá, gostaria de falar com a equipe comercial.",
      `Nome: ${form.name || "Não informado"}`,
      `E-mail: ${form.email || "Não informado"}`,
      `Telefone: ${form.phone || "Não informado"}`,
      `Empresa: ${form.company || "Não informado"}`,
      `Assunto: ${subjectLabel}`,
      `Mensagem: ${form.message || "Não informada"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/554999262036?text=${encodeURIComponent(whatsappMessage)}`;
    window.location.href = whatsappUrl;
    setSending(false);
    setSent(true);
  };

  return (
    <div className="pt-20 lg:pt-24 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 pt-8"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contato</span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-3 mb-4 text-white">Fale com nossa equipe</h1>
          <p className="text-lg" style={{ color: "#a3b3cc" }}>
            Estamos prontos para ajudar. Envie sua mensagem ou entre em contato diretamente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-border p-8" style={{ background: "#0f152d" }}>
              {sent ? (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center" style={{ background: "rgba(67,126,247,0.15)" }}>
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Mensagem enviada!</h3>
                  <p style={{ color: "#a3b3cc" }}>Nossa equipe entrará em contato em até 24 horas.</p>
                  <Button variant="outline" onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "" }); }}>
                    Enviar outra mensagem
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label className="text-white">Nome completo *</Label>
                      <Input className="border-border bg-background text-white placeholder:text-muted-foreground" placeholder="Seu nome" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">E-mail *</Label>
                      <Input className="border-border bg-background text-white placeholder:text-muted-foreground" type="email" placeholder="seu@email.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label className="text-white">Telefone</Label>
                      <Input className="border-border bg-background text-white placeholder:text-muted-foreground" placeholder="(11) 99999-9999" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white">Empresa</Label>
                      <Input className="border-border bg-background text-white placeholder:text-muted-foreground" placeholder="Nome da empresa" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white">Assunto</Label>
                    <Select value={form.subject} onValueChange={(value) => setForm({ ...form, subject: value })}>
                      <SelectTrigger className="border-border bg-background text-white">
                        <SelectValue placeholder="Selecione o assunto" />
                      </SelectTrigger>
                      <SelectContent className="border-border" style={{ background: "#0f152d" }}>
                        {subjects.map((s) => (
                          <SelectItem key={s.value} value={s.value} className="text-white">{s.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white">Mensagem *</Label>
                    <Textarea className="border-border bg-background text-white placeholder:text-muted-foreground" placeholder="Descreva como podemos ajudar..." required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
                  </div>
                  <Button type="submit" size="lg" className="w-full gap-2 bg-primary hover:bg-primary/90" disabled={sending}>
                    <Send className="w-4 h-4" />
                    {sending ? "Abrindo WhatsApp..." : "Enviar via WhatsApp"}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="rounded-xl border border-border p-5 flex items-start gap-4" style={{ background: "#0f152d" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(67,126,247,0.15)" }}>
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: "#a3b3cc" }}>{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-sm font-semibold text-white hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-white">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-xl border border-border p-5" style={{ background: "#0f152d", borderColor: "rgba(67,126,247,0.2)" }}>
              <h4 className="font-semibold mb-2 text-white">Formas de Pagamento</h4>
              <p className="text-sm mb-3" style={{ color: "#a3b3cc" }}>Aceitamos as seguintes formas de pagamento:</p>
              <div className="flex flex-wrap gap-2">
                {["PIX", "VISA", "MASTERCARD", "ELO", "AMEX"].map(b => (
                  <span key={b} className="px-3 py-1.5 rounded-md text-xs font-mono font-semibold border border-border text-white" style={{ background: "#090d1a" }}>{b}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}


