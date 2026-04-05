'use client';

import { ChevronUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      setIsVisible(window.scrollY > 320);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleClick = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      aria-label="回到頂部"
      onClick={handleClick}
      className={cn(
        'group border-border/80 bg-card/92 text-brand-dark shadow-soft focus-visible:ring-ring focus-visible:ring-offset-background hover:border-brand/50 hover:text-brand fixed right-5 bottom-5 isolate z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <ChevronUp className="relative h-5 w-5" strokeWidth={2.4} />
    </button>
  );
}
