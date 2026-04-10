import type { Cases, CaseItem } from '@/data/casesSection';

type Props = {
  data: Cases;
};

function Card({ subject, problem, solution, results, summary }: CaseItem) {
  return (
    <div className="shadow-soft hover:shadow-brand-soft hover:border-brand flex w-full flex-col overflow-hidden rounded-2xl border-2 border-transparent transition-all duration-200 hover:-translate-y-0.5 lg:flex-row">
      <div className="bg-brand-dark/15 max-w-full p-6 lg:max-w-3/12 lg:min-w-3/12">
        <h3 className="text-ink mb-2 text-2xl font-semibold">{subject}</h3>
        {summary && <p className="text-sub-ink mt-3 text-sm">{summary}</p>}
      </div>
      <div className="max-w-full space-y-4 space-x-4 bg-white p-6 lg:max-w-3/4 lg:min-w-3/4 lg:space-y-4 lg:space-x-0">
        <div className="">
          <h4 className="text-ink font-semibold mb-1">問題描述</h4>
          <p className="text-sm">{problem}</p>
        </div>
        <div>
          <h4 className="text-ink font-semibold mb-1">解決方案</h4>
          <p className="text-sm">{solution}</p>
        </div>
        <div>
          <h4 className="text-ink font-semibold mb-1">成果效益</h4>
          <div className="space-y-2">
            {results.map((result, index) => (
              <div key={index} className="border-line bg-background flex items-center gap-3 rounded-2xl border px-4 py-3">
                <div className="relative flex items-center justify-center">
                  <span className="bg-brand animate-ripple absolute h-2.5 w-2.5 rounded-full"></span>
                  <span className="bg-brand relative h-2.5 w-2.5 rounded-full"></span>
                </div>
                <p className="text-ink text-sm">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cards({ data }: Props) {
  return (
    <div className="space-y-8">
      {data.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
