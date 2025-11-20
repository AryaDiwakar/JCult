"use client";

import React, { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

interface Stat {
  title: string;
  number: string;
  shortPara: string;
  expandedPara: string;
  quote: string;
}

interface ExpandableStatsProps {
  title: string;
  description: string;
  stats: Stat[];
}

export default function ExpandableStats({ title, description, stats }: ExpandableStatsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpanded = (index: number) => {
    if (expandedIndex !== index) {
      setExpandedIndex(index);
    }
  };

  return (
    <section className="bg-primary py-6 md:py-8 lg:py-16">
      <div className="container-responsive">
        <div className="flex flex-col md:flex-row items-start mb-8 md:mb-10 lg:mb-12">
          <div className="flex-1 mb-4 md:mb-6 lg:mb-0">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white">
              {title}
            </h2>
          </div>
          <div className="flex-1 md:pl-8 lg:pl-16">
            <p className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className={`border-l-2 border-white/30 pl-3 md:pl-4 lg:pl-6 transition-all ${
              expandedIndex === index ? "flex-1" : "md:w-40 lg:w-48"
            }`}>
            <div className="flex flex-col h-full">
              <h3 className={`text-xl font-bold mb-4 transition-colors ${
                expandedIndex === index ? "text-yellow-400" : "text-white"
              }`}>
                {stat.title}
              </h3>
              
              <div className={`font-bold mb-4 transition-all ${
                expandedIndex === index ? "text-5xl" : "text-3xl"
              } text-white`}>
                {stat.number}
              </div>
              
              <p className="text-white/90 mb-4 leading-relaxed">
                {stat.shortPara}
              </p>
              
              {expandedIndex === index && (
                <div className="mb-4">
                  <p className="text-white/90 mb-4 leading-relaxed">
                    {stat.expandedPara}
                  </p>
                  <blockquote className="text-white/80 italic border-l-2 border-yellow-400 pl-4">
                    "{stat.quote}"
                  </blockquote>
                </div>
              )}
              
              <div className="mt-auto">
                {expandedIndex !== index && (
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 text-white transition-colors"
                  >
                    <IoAdd size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}