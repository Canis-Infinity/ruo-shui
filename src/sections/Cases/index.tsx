import { casesSection } from '@/data/casesSection';
import HGroup from '@/components/HGroup';
import Cards from '@/components/cases/Cards';

export default function Cases({ id }: { id: string }) {
  return (
    <section id={id} className="bg-background mx-auto max-w-7xl overflow-hidden px-6 py-10 lg:px-8 lg:py-12">
      <HGroup
        title={casesSection.title}
        description={casesSection.description}
        category={casesSection.category}
      />
      <Cards data={casesSection.cases} />
    </section>
  );
}