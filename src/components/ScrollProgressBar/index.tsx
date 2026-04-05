'use client';

import { useEffect, useState } from 'react';

function getScrollProgress(): number {
  const scrollTop = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollableHeight = documentHeight - windowHeight;

  if (scrollableHeight <= 0) {
    return 0;
  }

  return Math.min(scrollTop / scrollableHeight, 1);
}

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    function updateProgress() {
      setProgress(getScrollProgress());
    }

    updateProgress();

    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-999 h-1 bg-black/5">
      <div
        className="bg-brand-dark h-full origin-left transition-[width] ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
