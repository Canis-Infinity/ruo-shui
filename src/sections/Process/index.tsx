import { processSection } from '@/data/processSection';
import HGroup from '@/components/HGroup';
import Steps from '@/components/process/Steps';

export default function Process({ id }: { id: string }) {
  return (
    <section id={id} className="bg-background mx-auto max-w-7xl overflow-hidden px-6 py-10 lg:px-8 lg:py-12">
      <HGroup
        title={processSection.title}
        description={processSection.description}
        category={processSection.category}
        align='right'
      />
      <Steps data={processSection.steps} />
    </section>
  );
}