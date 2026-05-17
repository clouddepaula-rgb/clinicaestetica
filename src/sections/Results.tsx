"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";
import Image from "next/image";

const results = [
  {
    image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec",
    title: "Harmonização Suave",
    description: "Equilíbrio e proporção preservando a identidade visual da paciente, garantindo uma aparência descansada."
  },
  {
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c",
    title: "Sustentação Profunda",
    description: "Protocolo combinado de bioestimuladores para tratar a flacidez e resgatar o contorno facial."
  },
  {
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702",
    title: "Revitalização Labial",
    description: "Volume e hidratação na medida certa com Ácido Hialurônico, evitando mudanças artificiais."
  }
];

export function Results() {
  const ref = useScrollReveal();

  return (
    <section id="resultados" className="py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-[var(--foreground)] mb-6">
            Nossa Assinatura
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resultados que falam por si. Trabalhamos para revelar a sua melhor versão com naturalidade e elegância, como uma verdadeira obra de arte.
          </p>
        </div>

        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500">
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-2xl font-medium text-white mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
