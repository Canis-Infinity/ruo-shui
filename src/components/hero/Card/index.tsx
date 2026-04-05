import { brandConcept } from '@/data/heroSection';

export default function Card() {
  return (
    <div className="relative">
      <div className="shadow-soft bg-background rounded-[2rem] border border-white/60 p-6">
        <div className="border-line bg-surface rounded-[1.5rem] border p-6">
          <div className="border-line flex items-center justify-between border-b pb-4">
            <div>
              <p className="text-sub-ink text-sm font-medium">品牌理念</p>
              <p className="text-ink mt-1 text-lg font-semibold">{brandConcept.title}</p>
            </div>
            <span className="bg-brand text-ink rounded-full px-3 py-1 text-xs font-medium">
              {brandConcept.badge}
            </span>
          </div>
          <p className="text-sub-ink mt-5 text-sm">{brandConcept.description}</p>

          <div className="mt-6 space-y-4">
            {brandConcept.concepts.map((item) => (
              <div
                key={item}
                className="border-line bg-background flex items-center gap-3 rounded-2xl border px-4 py-3"
              >
                <div className="relative flex items-center justify-center">
                  <span className="bg-brand animate-ripple absolute h-2.5 w-2.5 rounded-full" />
                  <span className="bg-brand relative h-2.5 w-2.5 rounded-full" />
                </div>
                <p className="text-ink text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
