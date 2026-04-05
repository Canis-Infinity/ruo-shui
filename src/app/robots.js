// src\app\robots.js

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // disallow: [],
    },
    sitemap: 'https://ruo-shui.iistw.com/sitemap.xml',
  };
}
