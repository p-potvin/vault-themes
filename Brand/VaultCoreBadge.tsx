import { colors } from '@/lib/brand/tokens';
export const VaultCoreBadge = ({ mode }: { mode: 'server' | 'local' }) => {
  const isLocal = mode === 'local';
  return (
    <div style={{
      backgroundColor: isLocal ? `${colors.green}15` : `${colors.gold.DEFAULT}15`,
      color: isLocal ? colors.green : colors.gold.DEFAULT,
      border: `1px solid ${isLocal ? colors.green : colors.gold.DEFAULT}40`,
      borderRadius: 12, padding: '4px 10px', fontSize: 12
    }}>
      {isLocal ? 'Local' : 'VaultWares Hosted'}
    </div>
  );
};