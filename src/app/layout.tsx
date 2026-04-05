import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { fontVars } from '@/configs/fontsConfig';
import NextTopLoader from 'nextjs-toploader';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: '若水科技管理顧問有限公司',
  description: '以水為道，提供專業科技管理顧問服務',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant" className={cn('h-full', 'antialiased', ...fontVars)}>
      <body className="flex min-h-full flex-col font-sans">
        <NextTopLoader
          color="var(--color-brand)"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px var(--color-brand-soft),0 0 5px var(--color-brand-soft)"
          zIndex={999}
        />
        <ScrollProgressBar />
        {children}
        <ScrollToTopButton />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
