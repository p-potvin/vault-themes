import React from 'react';

export interface LedProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: 'online' | 'relay' | 'sync' | 'warning' | 'alert';
  pulse?: boolean;
  size?: number;
}

const statusColors: Record<string, string> = {
  online: 'var(--vault-signal-online)',
  relay: 'var(--vault-signal-relay)',
  sync: 'var(--vault-signal-sync)',
  warning: 'var(--vault-signal-warning)',
  alert: 'var(--vault-signal-alert)',
};

export function Led({
  status = 'online',
  pulse = true,
  className = '',
  size = 8,
  ...props
}: LedProps) {
  const backgroundColor = statusColors[status] || statusColors.online;

  return (
    <div
      className={`rounded-full flex-shrink-0 ${pulse ? 'vw-led' : ''} ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor,
        boxShadow: `0 0 ${size}px ${backgroundColor}`,
      }}
      aria-label={`Status: ${status}`}
      role="status"
      {...props}
    />
  );
}
