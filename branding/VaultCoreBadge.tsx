// /components/ui/VaultCoreBadge.tsx
import { colors } from '@/lib/brand/tokens';
import { Shield, Server, HardDrive } from 'lucide-react';

type Mode = 'server' | 'local';

export const VaultCoreBadge = ({ mode }: { mode: Mode }) => {
  const isLocal = mode === 'server' ? false : true;
  
  return (
    <div
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
      style={{
        backgroundColor: isLocal ? `${colors.green}15` : `${colors.gold.DEFAULT}15`,
        color: isLocal ? colors.green : colors.gold.DEFAULT,
        border: `1px solid ${isLocal ? colors.green : colors.gold.DEFAULT}40`,
      }}
    >
      {isLocal ? <HardDrive size={12} /> : <Server size={12} />}
      <span>{isLocal ? 'Local' : 'VaultWares Hosted'}</span>
      <Shield size={12} />
    </div>
  );
};
