import React from 'react';

export interface ShellProps extends React.HTMLAttributes<HTMLDivElement> {
  mode: 'console' | 'warm';
}

export function Shell({ mode, children, className = '', ...props }: ShellProps) {
  const shellClass = mode === 'console' ? 'vw-console-shell' : 'vw-warm-shell';
  return (
    <div
      className={`min-h-screen w-full flex flex-col font-sans ${shellClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
