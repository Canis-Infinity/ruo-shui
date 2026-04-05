// src\app\manifest.ts

import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '若水科技管理顧問有限公司',
    short_name: '若水科技管理顧問有限公司',
    id: '/',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#81D8D0',
    theme_color: '#81D8D0',
    description:
      '若水科技管理顧問有限公司，專注於客製化軟體開發與企業流程再造，協助企業透過數位化與流程優化，提升整體營運效率與競爭力。',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
