"use client";

import { useEffect, useState } from "react";
import { Button } from "../components/ui/Button";
import Image from "next/image";

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay - Optimized with Next.js Image for top-tier LCP performance */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2"
          alt="Clínica Estética Premium - Procedimentos Corporais"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover transition-transform duration-[10s] ease-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(250,248,245,0.95)] via-[rgba(250,248,245,0.8)] to-[rgba(250,248,245,0.3)] z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className={`max-w-2xl transition-all duration-1000 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-[var(--accent-gold)]/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)] animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-bronze)]">
              Precisão Científica. Beleza Natural.
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl font-medium text-[var(--foreground)] leading-tight mb-6">
            O rejuvenescimento elegante que respeita a sua singularidade.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-xl">
            Tratamentos estéticos avançados e personalizados sob medida para realçar os seus melhores traços, sem exageros ou mudanças artificiais.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => window.location.href='#contato'}>
              Agendar Minha Avaliação
            </Button>
            <Button variant="outline" onClick={() => window.location.href='#procedimentos'}>
              Conhecer Procedimentos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
