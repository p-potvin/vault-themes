export const brandStrings = {
  en: {
    tagline: 'Privacy first. Security in service.',
    extendedTagline: 'Privacy first. Security in service. Take back control of your digital footprint.',
    privacyNotice: 'We do not track you. Here is what we store, and why.',
    analyticsOptIn: 'Turn this on if you want analytics. It is off by default.',
    vaultSecured: 'Vault secured.',
    vaultcore: {
      server: 'Runs on VaultWares self-hosted servers. No third-party clouds.',
      local: 'Runs entirely on your device. Zero-Knowledge encryption means we never see your data.',
    },
  },
  qc: {
    tagline: "La confidentialité d'abord. La sécurité au service.",
    extendedTagline: "La confidentialité d'abord. La securité au service. Des outils clairs pour tout le monde.",
    privacyNotice: 'On ne vous suit pas. Voici ce que nous conservons, et pourquoi.',
    analyticsOptIn: "Activez ceci seulement si vous nous faites confiance. Désactivé par défaut.",
    vaultSecured: 'Encryption "Zero-Knowledge".',
    vaultcore: {
      server: 'Fonctionne sur des serveurs auto-hebergés par VaultWares. Aucun tierce parties.',
      local: 'Fonctionne entièrement sur votre appareil.',
    },
  },
  fr: {
    tagline: "La confidentialite d'abord. La securite au service.",
    extendedTagline: "La confidentialite d'abord. La securite au service. Des fonctionnalites pour tous.",
    privacyNotice: 'Nous ne vous suivons pas. Voici ce que nous conservons, et pourquoi.',
    analyticsOptIn: "Activez cette option si vous souhaitez partager des donnees d'utilisation. Elle est desactivee par defaut.",
    vaultSecured: 'Coffre securise.',
    vaultcore: {
      server: 'Fonctionne sur des serveurs auto-heberges VaultWares. Aucun cloud tiers.',
      local: 'Fonctionne entierement sur votre appareil.',
    },
  },
} as const

export type BrandLanguage = keyof typeof brandStrings
