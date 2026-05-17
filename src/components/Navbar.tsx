"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Procedimentos", href: "#procedimentos" },
    { name: "Resultados", href: "#resultados" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[rgba(255,255,255,0.95)] backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-serif text-2xl font-semibold tracking-wide text-[var(--foreground)]">
              Clínica Estética Premium
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-[var(--foreground)] hover:text-[var(--accent-gold)] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" onClick={() => window.location.href='#contato'}>
              Agendar Avaliação
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[var(--foreground)] hover:text-[var(--accent-gold)]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-[var(--foreground)] hover:text-[var(--accent-gold)] border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-6 px-3">
              <Button variant="primary" className="w-full" onClick={() => { setIsMobileMenuOpen(false); window.location.href='#contato'; }}>
                Agendar Avaliação
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
