import HGroup from '@/components/hero/HGroup';
import Card from '@/components/hero/Card';

export default function Hero() {
  return (
    <section className="bg-background mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-14 overflow-hidden px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
      <HGroup />
      <Card />
    </section>
  );
}
