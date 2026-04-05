import { servicesSection } from '@/data/servicesSection';
import HGroup from '@/components/HGroup';
import Cards from '@/components/services/Cards';

export default function Services({ id }: { id: string }) {
  return (
    <section id={id} className="bg-background mx-auto max-w-7xl overflow-hidden px-6 py-10 lg:px-8 lg:py-12">
      <HGroup
        title={servicesSection.title}
        description={servicesSection.description}
        category={servicesSection.category}
        align='center'
      />
      <Cards data={servicesSection.cards} />
    </section>
  );
}