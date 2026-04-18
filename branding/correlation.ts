// /lib/utils/correlation.ts
import { randomBytes } from 'crypto';

export type CorrelationContext = {
  correlationId: string;
  createdAt: number;
};

// Generates 7-char ID starting with 'c' per VaultWares guidelines
export const createCorrelationId = (): string => {
  return 'c' + randomBytes(3).toString('hex'); // e.g., c3f9a1b
};

export const withCorrelation = <T extends object>(data: T): T & CorrelationContext => {
  return {
    ...data,
    correlationId: createCorrelationId(),
    createdAt: Date.now(),
  };
};
