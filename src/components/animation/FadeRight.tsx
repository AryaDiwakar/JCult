'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ReactNode } from 'react';

interface FadeRightProps {
  children: ReactNode;
  delay?: number;
}

export default function FadeRight({ children, delay = 0 }: FadeRightProps) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref as any}
      className={`fade-right ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
