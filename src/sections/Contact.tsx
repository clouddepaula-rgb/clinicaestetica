"use client";

import { useState } from "react";
import { formatPhone, createWhatsAppLink } from "../utils/masks";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { Accordion } from "../components/ui/Accordion";
import { Button } from "../components/ui/Button";

const faqItems = [
  {
    title: "Os procedimentos são dolorosos?",
    content: "Nossa prioridade é o seu conforto. Utilizamos os mais eficientes métodos de analgesia e técnicas minimamente invasivas para garantir que sua experiência seja o mais tranquila e indolor possível."
  },
  {
    title: "Quanto tempo duram os resultados?",
    content: "A duração varia conforme o procedimento e o metabolismo de cada paciente. A toxina botulínica geralmente dura de 4 a 6 meses, enquanto bioestimuladores e preenchedores podem durar de 12 a 24 meses."
  },
  {
    title: "Como funciona a avaliação 3D?",
    content: "Em nossa consulta inicial, utilizamos tecnologias avançadas de mapeamento facial e corporal para analisar sua estrutura anatômica em três dimensões. Isso nos permite criar um plano de tratamento 100% personalizado e preciso."
  },
  {
    title: "Quais são as formas de pagamento?",
    content: "Aceitamos todos os cartões de crédito, com possibilidade de parcelamento para tratamentos completos. Também oferecemos condições especiais para pagamentos à vista via PIX."
  }
];

export function Contact() {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Avaliação Geral",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá! Meu nome é ${formData.name}. Gostaria de agendar uma consulta sobre ${formData.service}. Meu telefone para contato é ${formData.phone}.`;
    const link = createWhatsAppLink("11999999999", text); // Fictitious number for now
    window.open(link, "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-[var(--background-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/2 w-full">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--foreground)] mb-6">
              Dúvidas Frequentes
            </h2>
            <p className="text-gray-700 text-lg mb-10">
              Transparência é um de nossos pilares. Abaixo, respondemos as perguntas mais comuns de nossos pacientes.
            </p>
            <Accordion items={faqItems} />
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-gold)] opacity-10 rounded-bl-full pointer-events-none"></div>
              
              <h3 className="font-serif text-3xl font-medium text-[var(--foreground)] mb-2">
                Dê o primeiro passo
              </h3>
              <p className="text-gray-600 mb-8">
                Preencha os dados abaixo e nossa concierge de atendimento entrará em contato via WhatsApp rapidamente.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--accent-gold)] focus:border-transparent transition-all outline-none"
                    placeholder="Ex: Maria Silva"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--accent-gold)] focus:border-transparent transition-all outline-none"
                    placeholder="(11) 99999-9999"
                    maxLength={15}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Serviço de Interesse</label>
                  <select 
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[var(--accent-gold)] focus:border-transparent transition-all outline-none bg-white"
                  >
                    <option value="Avaliação Geral">Avaliação Geral Inicial</option>
                    <option value="Injetáveis">Injetáveis (Toxina, Preenchimento)</option>
                    <option value="Tecnologias Faciais">Tecnologias Faciais (Ultraformer, Peelings)</option>
                    <option value="Estética Corporal">Estética Corporal (Lipo, Drenagem)</option>
                  </select>
                </div>

                <Button type="submit" className="w-full mt-4">
                  Solicitar Agendamento
                </Button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
