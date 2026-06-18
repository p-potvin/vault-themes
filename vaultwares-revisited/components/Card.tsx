import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  mode: 'console' | 'warm';
}

export function Card({ mode, children, className = '', ...props }: CardProps) {
  const cardClass = mode === 'console' ? 'vw-card text-vw-console-text-secondary' : 'vw-warm-card text-[#161320]';
  return (
    <div className={`p-6 md:p-8 backdrop-blur-sm ${cardClass} ${className}`} {...props}>
      {children}
    </div>
  );
}
