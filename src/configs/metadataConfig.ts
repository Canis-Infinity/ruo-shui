// src\configs\metadataConfig.ts

import type { Metadata } from 'next';
import { siteConfig } from '@/configs/siteConfig';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  manifest: siteConfig.manifestUrl,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.authorName }],
  creator: siteConfig.authorName,
  publisher: siteConfig.authorName,
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  openGraph: {
    title: siteConfig.title,
    url: siteConfig.url + '/',
    siteName: siteConfig.title,
    description: siteConfig.description,
    type: 'website',
    locale: siteConfig.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    siteId: siteConfig.twitterHandle,
  },
  appleWebApp: {
    title: siteConfig.title,
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
