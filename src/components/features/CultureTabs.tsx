"use client";

import { useState } from "react";
import Image from "next/image";

interface TabItem {
  label: string;
  title: string;
  image: string;
  content: {
    heading: string;
    text: string;
  }[];
}

export default function CultureTabs({ tabs }: { tabs: TabItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="max-w-7xl mx-auto py-12 px-6">

      {/* TAB BAR */}
      <div className="flex justify-center border-b border-tertiary mb-10">
        {tabs.map((tab, i) => {
          const active = activeIndex === i;
          return (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`
                px-8 py-3 text-sm font-medium border-r last:border-r-0 
                transition
                ${active ? "bg-primary text-white" : "text-charcoal hover:bg-tertiary"}
              `}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* TAB CONTENT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-serif text-primary mb-6">
            {tabs[activeIndex].title}
          </h2>
          <div className="relative w-full h-[350px] overflow-hidden shadow">
            <Image
              src={tabs[activeIndex].image}
              alt={tabs[activeIndex].title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex items-center">
          <div className="space-y-6">
            {tabs[activeIndex].content.map((item, i) => (
              <div key={i}>
                <p className="font-semibold text-primary">{item.heading}</p>
                <p className="text-charcoal leading-relaxed mt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}