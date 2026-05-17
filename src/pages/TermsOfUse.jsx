import React from 'react';
import { motion } from "framer-motion";

const sections = [
  {
    title: "1. OBJETO",
    content: `A plataforma disponibiliza conteúdos, ferramentas, orientações técnicas e serviços relacionados à segurança cibernética, incluindo, mas não se limitando a:

• Implementação de políticas de segurança Kubernetes;
• Configuração de NetworkPolicy para segmentação de rede;
• Configuração de controles de segurança para workloads e containers;
• Implementação de RBAC (Role-Based Access Control);
• Definição de permissões baseadas em menor privilégio;
• Orientações sobre hardening de ambientes;
• Boas práticas para ambientes multi-tenant;
• Recomendações para proteção contra acessos não autorizados;
• Documentação técnica e materiais educacionais.`
  },
  {
    title: "2. ACEITAÇÃO DOS TERMOS",
    content: `Ao acessar ou utilizar o site, o usuário declara:

• Possuir capacidade legal para contratação;
• Utilizar a plataforma para fins lícitos;
• Concordar com todas as condições aqui descritas.

Caso não concorde, o usuário deve interromper imediatamente o uso.`
  },
  {
    title: "3. RESPONSABILIDADE DO USUÁRIO",
    content: `O usuário compromete-se a utilizar a plataforma de forma ética e legal.

É proibido:
• Tentar invadir sistemas;
• Realizar testes ofensivos sem autorização;
• Explorar vulnerabilidades ilegalmente;
• Utilizar ferramentas fornecidas para atividades criminosas;
• Compartilhar credenciais de acesso;
• Comprometer a integridade da plataforma.

O usuário é integralmente responsável pelo uso das informações obtidas.`
  },
  {
    title: "4. USO DE CONTEÚDO TÉCNICO E IMPLEMENTAÇÕES DE SEGURANÇA",
    content: `As recomendações disponibilizadas, incluindo políticas Kubernetes, RBAC, segmentação de rede e demais configurações de segurança:

• Possuem finalidade educativa ou de suporte técnico;
• Devem ser adaptadas à infraestrutura do usuário;
• Não substituem auditorias profissionais;
• Podem exigir validação antes da implementação em produção.

A empresa não garante que configurações aplicadas pelo usuário eliminarão integralmente riscos cibernéticos.`
  },
  {
    title: "5. LIMITAÇÃO DE RESPONSABILIDADE",
    content: `A plataforma não será responsável por:

• Indisponibilidade de sistemas do usuário;
• Perda de dados;
• Falhas decorrentes de implementação incorreta;
• Ataques cibernéticos sofridos pelo usuário;
• Prejuízos financeiros decorrentes do uso inadequado das orientações;
• Interrupções causadas por terceiros.

Os serviços são disponibilizados "como estão", sem garantia absoluta de segurança ou disponibilidade contínua.`
  },
  {
    title: "6. SEGURANÇA DA INFORMAÇÃO",
    content: `Adotamos medidas razoáveis para proteção dos dados, podendo incluir:

• Criptografia;
• Controle de acesso;
• Autenticação;
• Segregação de ambientes;
• Monitoramento;
• Registros de auditoria.

Nenhum ambiente digital é totalmente imune a riscos.`
  },
  {
    title: "7. PROPRIEDADE INTELECTUAL",
    content: `Todo conteúdo do site pertence ao Poodle, incluindo:

• Documentação;
• Textos;
• Códigos;
• Exemplos técnicos;
• Materiais educacionais;
• Fluxos de implementação;
• Políticas de segurança.

É proibida reprodução sem autorização.`
  },
  {
    title: "8. PRIVACIDADE E COLETA DE DADOS",
    content: `A utilização da plataforma pode envolver coleta de:

• Endereço IP;
• Logs;
• Navegador;
• Dados técnicos;
• Informações necessárias à autenticação.

O tratamento ocorrerá conforme a Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).`
  },
  {
    title: "9. DISPONIBILIDADE DO SERVIÇO",
    content: `Reservamo-nos o direito de:

• Modificar funcionalidades;
• Interromper serviços;
• Realizar manutenção;
• Suspender acessos por uso indevido.`
  },
  {
    title: "10. SUSPENSÃO OU ENCERRAMENTO DE CONTA",
    content: `Poderemos suspender usuários que:

• Violem estes termos;
• Pratiquem atividades ilícitas;
• Utilizem recursos para fins ofensivos;
• Comprometam a segurança da plataforma.`
  },
  {
    title: "11. ALTERAÇÕES DOS TERMOS",
    content: `Os presentes Termos poderão ser atualizados a qualquer momento.

O uso contínuo após alterações implica aceitação das novas condições.`
  },
  {
    title: "12. LEGISLAÇÃO APLICÁVEL",
    content: `Este documento será regido pelas leis da República Federativa do Brasil, especialmente:

• Código Civil;
• Marco Civil da Internet;
• LGPD;
• Legislação aplicável à segurança da informação.

Fica eleito o foro da comarca de São Paulo/SP para resolução de conflitos.`
  },
  {
    title: "13. CONTATO",
    content: `Dúvidas podem ser encaminhadas para:

Empresa: Poodle
E-mail: contato@poodle.com.br
Site: poodle.com.br
Telefone: (11) 99999-9999`
  },
];

export default function TermsOfUse() {
  return (
    <div className="pt-20 lg:pt-24 pb-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-8 mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Termos de Uso</h1>
          <p className="text-sm" style={{ color: "#a3b3cc" }}>Última atualização: 16 de maio de 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-2xl border border-border p-8 lg:p-10 mb-6" style={{ background: "#0f152d" }}>
            <p className="leading-relaxed" style={{ color: "#a3b3cc" }}>
              Bem-vindo(a) ao <strong className="text-white">Poodle</strong>. Estes Termos de Uso regulam o acesso e utilização da plataforma, ferramentas, conteúdos técnicos e serviços disponibilizados relacionados à segurança cibernética, proteção de infraestrutura, governança de acesso e implementação de políticas de segurança em ambientes computacionais, incluindo Kubernetes.
            </p>
            <p className="leading-relaxed mt-4" style={{ color: "#a3b3cc" }}>
              Ao utilizar a plataforma, você concorda integralmente com estes termos.
            </p>
          </div>

          <div className="space-y-4">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="rounded-2xl border border-border p-8 lg:p-10"
                style={{ background: "#0f152d" }}
              >
                <h2 className="text-base font-bold mb-4 text-white">{section.title}</h2>
                <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "#a3b3cc" }}>
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}


