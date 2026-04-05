import { Noto_Sans_TC, Inter, Fira_Code } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansTC = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto',
  display: 'swap',
});

export const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  variable: '--font-fira-code',
});

export const fontVars = [inter.variable, notoSansTC.variable, firaCode.variable] as const;
