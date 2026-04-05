import { heroSection } from '@/data/heroSection';
import CTA from '@/components/hero/CTA';
import Highlight from '@/components/hero/Highlight';

export default function HGroup() {
  return (
    <div className="max-w-full">
      <span className="border-brand/40 bg-brand-soft text-ink inline-flex rounded-full border px-4 py-1.5 text-sm font-medium">
        {heroSection.badge}
      </span>

      <h1 className="mt-6 text-4xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        <span className="from-ink via-brand to-brand-dark bg-linear-to-r bg-clip-text whitespace-pre-line text-transparent">
          {heroSection.title}
        </span>
      </h1>

      <p className="text-sub-ink mt-6 max-w-xl text-lg leading-8 text-balance sm:text-pretty">
        {heroSection.description}
      </p>

      <CTA />

      <Highlight />
    </div>
  );
}
