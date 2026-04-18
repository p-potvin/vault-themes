// /lib/i18n/brand.ts
export const brandStrings = {
  en: {
    tagline: 'Privacy first. Security in service.',
    vaultcore: {
      server: 'Runs on VaultWares self-hosted servers. No third-party clouds.',
      local: 'Runs entirely on your device. No data leaves.',
      badge: 'Your data stays in VaultWares',
    },
    privacy: {
      noTracking: "We don't track you by default.",
    },
  },
  fr: {
    tagline: 'La confidentialité d'abord. La sécurité au service.',
    vaultcore: {
      server: 'Fonctionne sur les serveurs auto-hébergés de VaultWares. Aucun cloud tiers.',
      local: 'Fonctionne entièrement sur votre appareil. Aucune donnée ne sort.',
      badge: 'Vos données restent chez VaultWares',
    },
    privacy: {
      noTracking: 'Nous ne vous traquons pas par défaut.',
    },
  },
} as const;
