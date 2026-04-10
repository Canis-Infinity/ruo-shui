import type { ServicesCards, ServiceCard } from '@/data/servicesSection';

type Props = {
  data: ServicesCards;
};


function Card({ subject, content, icon: Icon }: ServiceCard) {
  return (
    <div className="shadow-soft bg-background hover:bg-brand-soft hover:border-brand cursor-default rounded-[2rem] border-2 border-white p-5 transition hover:-translate-y-0.5 hover:shadow-brand-soft">
      <Icon className="mx-auto mb-3 text-7xl fill-brand-dark" />
      <h3 className="text-ink mb-2 text-xl font-semibold">{subject}</h3>
      <p className="text-muted-foreground">{content}</p>
    </div>
  );
}

export default function Cards({ data }: Props) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
