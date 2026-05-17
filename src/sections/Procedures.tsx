"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import { Tabs } from "../components/ui/Tabs";

const injectables = (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        title: "Toxina Botulínica",
        desc: "Prevenção e suavização de rugas de expressão com efeito natural e duradouro."
      },
      {
        title: "Preenchimento Hialurônico",
        desc: "Harmonização de traços, hidratação profunda (Skinbooster) e restauração de volumes perdidos."
      },
      {
        title: "Bioestimuladores",
        desc: "Combate efetivo à flacidez e sustentação facial através da produção do seu próprio colágeno natural."
      }
    ].map((proc, i) => (
      <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <h4 className="font-serif text-2xl text-[var(--accent-bronze)] mb-4">{proc.title}</h4>
        <p className="text-gray-600 leading-relaxed">{proc.desc}</p>
      </div>
    ))}
  </div>
);

const tech = (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        title: "Ultraformer MPT",
        desc: "Efeito lifting facial imediato e queima de gordura (como papada) sem agulhas ou tempo de recuperação."
      },
      {
        title: "Peelings Premium",
        desc: "Renovação celular completa, controle de melasma e luminosidade radiante desde a primeira sessão."
      },
      {
        title: "Limpeza Skin-Glow",
        desc: "Nutrição celular e desintoxicação profunda com hidratação de alta performance para a pele."
      }
    ].map((proc, i) => (
      <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <h4 className="font-serif text-2xl text-[var(--accent-bronze)] mb-4">{proc.title}</h4>
        <p className="text-gray-600 leading-relaxed">{proc.desc}</p>
      </div>
    ))}
  </div>
);

const body = (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {[
      {
        title: "Lipo Sem Cortes",
        desc: "Redução de gordura localizada e melhora expressiva do contorno corporal através de ultrassom cavitacional."
      },
      {
        title: "Drenagem Alta Definição",
        desc: "Eliminação de toxinas e redução do inchaço, com foco em ressaltar a definição muscular."
      }
    ].map((proc, i) => (
      <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <h4 className="font-serif text-2xl text-[var(--accent-bronze)] mb-4">{proc.title}</h4>
        <p className="text-gray-600 leading-relaxed">{proc.desc}</p>
      </div>
    ))}
  </div>
);

export function Procedures() {
  const ref = useScrollReveal();

  const tabs = [
    { id: "injetaveis", label: "Injetáveis & Preenchedores", content: injectables },
    { id: "tecnologias", label: "Tecnologias Faciais", content: tech },
    { id: "corporal", label: "Estética Corporal", content: body },
  ];

  return (
    <section id="procedimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal flex flex-col items-center text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--foreground)] mb-6">
            Protocolos de Excelência
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Descubra os procedimentos mais desejados do mundo para revitalizar sua aparência de forma segura e com resultados de altíssimo padrão.
          </p>
        </div>
        
        <div className="reveal active">
          <Tabs items={tabs} />
        </div>
      </div>
    </section>
  );
}
