"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

export function About() {
  const textRef = useScrollReveal();
  const imageRef = useScrollReveal();

  return (
    <section id="sobre" className="py-24 bg-[var(--background-secondary)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div ref={imageRef} className="reveal lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--accent-gold)] rounded-2xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80" 
                alt="Clínica Estética Premium" 
                className="relative rounded-2xl w-full h-auto object-cover shadow-xl z-10"
              />
            </div>
          </div>
          
          <div ref={textRef} className="reveal lg:w-1/2 w-full">
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--foreground)] mb-6">
              Ciência e arte unidas para revelar sua melhor versão.
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Na <strong className="text-[var(--accent-bronze)]">Clínica Estética Premium</strong>, acreditamos que a verdadeira beleza reside na harmonia e na naturalidade. Cada rosto conta uma história e cada procedimento é planejado meticulosamente.
            </p>
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Combinamos a precisão científica dos tratamentos estéticos mais avançados do mundo com um atendimento caloroso e altamente personalizado. Nosso espaço foi projetado para ser um refúgio de bem-estar e luxo.
            </p>
            
            <div className="border-l-4 border-[var(--accent-gold)] pl-6 py-2 italic text-gray-600 text-lg">
              "Nosso maior objetivo é que você se olhe no espelho e ame o que vê, sem perder a sua essência."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
