import type { Config } from 'tailwindcss';
import animatePlugin from 'tailwindcss-animate';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Add paths to all your template files
  ],
  theme: {
    extend: {
      borderColor: {
        border: 'var(--border)', // Define the border color
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        cardForeground: 'var(--card-foreground)',
        popover: 'var(--popover)',
        popoverForeground: 'var(--popover-foreground)',
        primary: 'var(--primary)',
        primaryForeground: 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        secondaryForeground: 'var(--secondary-foreground)',
        muted: 'var(--muted)',
        mutedForeground: 'var(--muted-foreground)',
        accent: 'var(--accent)',
        accentForeground: 'var(--accent-foreground)',
        destructive: 'var(--destructive)',
        destructiveForeground: 'var(--destructive-foreground)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        sidebar: 'var(--sidebar)',
        sidebarForeground: 'var(--sidebar-foreground)',
        sidebarPrimary: 'var(--sidebar-primary)',
        sidebarPrimaryForeground: 'var(--sidebar-primary-foreground)',
        sidebarAccent: 'var(--sidebar-accent)',
        sidebarAccentForeground: 'var(--sidebar-accent-foreground)',
        sidebarBorder: 'var(--sidebar-border)',
        sidebarRing: 'var(--sidebar-ring)',
      },
      borderRadius: {
        sm: 'calc(var(--radius) - 4px)',
        md: 'calc(var(--radius) - 2px)',
        lg: 'var(--radius)',
        xl: 'calc(var(--radius) + 4px)',
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;