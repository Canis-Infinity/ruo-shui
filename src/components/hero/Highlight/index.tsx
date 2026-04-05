import { heroSection } from '@/data/heroSection';
import CountUp from '@/components/CountUp';

export default function Highlight() {
  return (
    <div className="border-line mt-10 flex max-w-full justify-around gap-4 border-t pt-6">
      {heroSection.highlights.map((highlight, index) => (
        <div key={index} className="max-w-fit">
          {highlight.type === 'count' ? (
            <CountUp
              from={0}
              to={highlight.label as number}
              separator=","
              direction="up"
              duration={1}
              className="text-ink text-2xl font-semibold"
            />
          ) : (
            <p className="text-ink text-2xl font-semibold">{highlight.label}</p>
          )}
          <p className="text-sub-ink mt-1 text-sm">{highlight.description}</p>
        </div>
      ))}
    </div>
  );
}
