import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "../utils/masks";

export function WhatsAppFloat() {
  const link = createWhatsAppLink("11999999999", "Olá! Gostaria de agendar uma avaliação na Clínica Estética Premium.");
  
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        Agende pelo WhatsApp
      </div>
      <MessageCircle size={28} />
    </a>
  );
}
