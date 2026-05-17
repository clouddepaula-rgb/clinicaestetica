"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ title, content, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border-b border-[var(--accent-gold)]/30">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="font-serif text-xl font-medium text-[var(--foreground)]">{title}</span>
        <ChevronDown 
          className={`transform transition-transform duration-300 text-[var(--accent-gold)] ${isOpen ? "rotate-180" : ""}`} 
          size={20} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
      >
        <p className="text-[var(--foreground)] opacity-80 leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: { title: string; content: string }[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
