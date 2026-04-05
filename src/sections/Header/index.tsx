'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import Logo from '@/components/Logo';
import { navItems } from '@/data/navItems';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/lib/utils';

export default function Header() {
  const ids = useMemo(() => navItems.map((item) => item.id), []);
  const activeId = useScrollSpy(ids);

  return (
    <header id="header" className="border-line/80 bg-background/85 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" aria-label="回到首頁">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition',
                activeId === item.id ? 'text-ink font-semibold' : 'text-sub-ink hover:text-ink',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="bg-ink inline-flex h-11 items-center rounded-full px-5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          預約諮詢
        </Link>
      </div>
    </header>
  );
}
