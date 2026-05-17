"use client";

import { useState } from "react";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
}

export function Tabs({ items }: TabsProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.id);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === item.id
                ? "bg-[var(--accent-gold)] text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-[var(--background-secondary)] border border-gray-100"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="relative">
        {items.map((item) => (
          <div
            key={item.id}
            className={`transition-all duration-500 ${
              activeTab === item.id ? "opacity-100 translate-y-0 relative z-10" : "opacity-0 translate-y-4 absolute inset-0 z-0 pointer-events-none"
            }`}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}
