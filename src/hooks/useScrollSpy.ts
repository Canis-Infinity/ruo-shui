import { useEffect, useState } from 'react';

export function useScrollSpy(ids: readonly string[]) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const visibleSections = new Map<string, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;

          if (entry.isIntersecting) {
            visibleSections.set(id, entry);
          } else {
            visibleSections.delete(id);
          }
        });

        const nextActive = [...visibleSections.values()].sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        )[0]?.target.id;

        setActiveId(nextActive ?? '');
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
}
