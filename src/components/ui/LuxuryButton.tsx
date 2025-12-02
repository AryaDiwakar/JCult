'use client';

interface LuxuryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'gold' | 'outline';
  className?: string;
}

export default function LuxuryButton({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '' 
}: LuxuryButtonProps) {
  const baseClasses = 'btn-luxury px-6 py-3 font-medium relative z-10';
  
  const variantClasses = {
    primary: 'bg-primary text-white border-2 border-primary',
    gold: 'bg-gold text-charcoal border-2 border-gold',
    outline: 'border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-charcoal'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
