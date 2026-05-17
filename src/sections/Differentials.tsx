"use client";

import { CheckCircle2, ShieldCheck, Award, Star } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const differentials = [
  {
    icon: <Star size={32} className="text-[var(--accent-gold)]" />,
    title: "+5.000 Clientes",
    description: "Procedimentos realizados com sucesso extremo e máxima segurança.",
  },
  {
    icon: <Award size={32} className="text-[var(--accent-gold)]" />,
    title: "Especialistas",
    description: "Profissionais rigorosamente selecionados e com padrão ouro em atendimento.",
  },
  {
    icon: <ShieldCheck size={32} className="text-[var(--accent-gold)]" />,
    title: "Certificação",
    description: "Utilizamos apenas protocolos e tecnologias aprovadas pela ANVISA.",
  },
  {
    icon: <CheckCircle2 size={32} className="text-[var(--accent-gold)]" />,
    title: "Avaliação 3D",
    description: "Análise facial e corporal completa antes de qualquer procedimento.",
  },
];

export function Differentials() {
  const ref = useScrollReveal();

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-[var(--background)] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-[var(--foreground)] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
