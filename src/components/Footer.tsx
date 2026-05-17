export function Footer() {
  return (
    <footer className="bg-[#1A1816] text-[var(--background-secondary)] py-12 border-t border-[var(--accent-gold)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-semibold tracking-wide text-white mb-4">Clínica Estética Premium</h3>
            <p className="text-sm opacity-80 max-w-sm">
              Tratamentos estéticos avançados e personalizados sob medida para realçar os seus melhores traços, sem exageros.
            </p>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-[var(--accent-gold)] mb-4 text-sm">Links Rápidos</h4>
            <ul className="space-y-2 opacity-80 text-sm">
              <li><a href="#sobre" className="hover:text-[var(--accent-gold)] transition-colors">Sobre Nós</a></li>
              <li><a href="#procedimentos" className="hover:text-[var(--accent-gold)] transition-colors">Procedimentos</a></li>
              <li><a href="#resultados" className="hover:text-[var(--accent-gold)] transition-colors">Resultados</a></li>
              <li><a href="#contato" className="hover:text-[var(--accent-gold)] transition-colors">Agendamento</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-widest text-[var(--accent-gold)] mb-4 text-sm">Contato</h4>
            <ul className="space-y-2 opacity-80 text-sm">
              <li>📍 Sua Região</li>
              <li>📱 +55 (11) 99999-9999</li>
              <li>✉️ contato@clinicaesteticapremium.com.br</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center opacity-60 text-xs">
          <p>&copy; {new Date().getFullYear()} Clínica Estética Premium. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Responsável Técnico: Dra. Exemplo - CRM/CRBM 00000</p>
        </div>
      </div>
    </footer>
  );
}
