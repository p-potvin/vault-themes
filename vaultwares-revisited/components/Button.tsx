import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  mode?: 'console' | 'warm';
}

export function Button({
  variant = 'primary',
  mode = 'console',
  className = '',
  children,
  disabled = false,
  ...props
}: ButtonProps) {
  const baseClass = 'px-4 py-2 font-medium rounded-lg transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const getVariantClasses = () => {
    if (mode === 'console') {
      if (variant === 'primary') {
        return 'bg-[var(--vault-console-gold)] text-[#161320] hover:bg-[color-mix(in_srgb,_var(--vault-console-gold)_80%,_#000)] disabled:bg-[color-mix(in_srgb,_var(--vault-console-gold)_50%,_#000)] focus:ring-[var(--vault-console-gold)] focus:ring-offset-[var(--vault-console-bg)]';
      }
      if (variant === 'secondary') {
        return 'bg-[var(--vault-console-elevated)] text-[var(--vault-console-gold)] border border-[var(--vault-console-gold)] hover:bg-[var(--vault-console-raised)] disabled:opacity-50 focus:ring-[var(--vault-console-gold)] focus:ring-offset-[var(--vault-console-bg)]';
      }
      return 'text-[var(--vault-console-text-secondary)] hover:text-[#fff] hover:bg-[rgba(255,255,255,0.05)] disabled:opacity-50 focus:ring-[var(--vault-console-text-secondary)] focus:ring-offset-[var(--vault-console-bg)]';
    }
    
    // Warm mode
    if (variant === 'primary') {
      return 'bg-[#161320] text-[#F5F1E8] hover:bg-[#2A2340] disabled:bg-[#3a3355] focus:ring-[#161320] focus:ring-offset-[#F5F1E8]';
    }
    if (variant === 'secondary') {
      return 'bg-[var(--vault-warm-raised)] text-[#161320] border border-[#161320] hover:bg-[var(--vault-warm-muted)] disabled:opacity-50 focus:ring-[#161320] focus:ring-offset-[#F5F1E8]';
    }
    return 'text-[#4A5459] hover:text-[#161320] hover:bg-[rgba(0,0,0,0.05)] disabled:opacity-50 focus:ring-[#4A5459] focus:ring-offset-[#F5F1E8]';
  };

  return (
    <button
      className={`${baseClass} ${getVariantClasses()} ${className}`}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
