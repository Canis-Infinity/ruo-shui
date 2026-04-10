import type { ProcessSteps, ProcessStep } from '@/data/processSection';

type Props = {
  data: ProcessSteps;
};

type StepProps = ProcessStep & {
  id: number;
};

function Step({ id, subject, content }: StepProps) {
  return (
    <div className="group grid grid-cols-1 gap-x-4 gap-y-2 p-8 [grid-template-areas:'number''title''content'] sm:grid-cols-[auto_1fr] sm:items-start sm:[grid-template-areas:'number_title''number_content']">
      <span className="w-fit origin-top-right pl-0 sm:pl-8 font-mono text-5xl font-semibold text-brand-dark transition [grid-area:number] group-hover:scale-145">
        {(id + 1).toString().padStart(2, '0')}
      </span>
      <h3 className="text-ink w-fit text-2xl font-semibold transition-all duration-300 [grid-area:title]">
        {subject}
      </h3>
      <p className="text-muted-foreground [grid-area:content]">{content}</p>
    </div>
  );
}

export default function Steps({ data }: Props) {
  return (
    <div className="[&>*:not(:last-child)]:border-border grid [&>*:not(:last-child)]:border-b">
      {data.map((card, index) => (
        <Step key={index} id={index} {...card} />
      ))}
    </div>
  );
}
