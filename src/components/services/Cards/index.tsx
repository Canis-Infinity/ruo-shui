import type { ServicesCards, ServiceCard } from '@/data/servicesSection';

type Props = {
  data: ServicesCards;
};

const IconGradient = () => (
  <svg width="0" height="0">
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--color-sub-ink)" />
        <stop offset="100%" stopColor="var(--color-brand)" />
      </linearGradient>
    </defs>
  </svg>
);

function Card({ subject, content, icon: Icon }: ServiceCard) {
  return (
    <div className="shadow-soft bg-background hover:bg-brand-soft hover:border-brand cursor-default rounded-[2rem] border-2 border-white p-5 transition hover:-translate-y-0.5 hover:shadow-brand-soft">
      <IconGradient />
      <Icon className="mx-auto mb-3 text-7xl" style={{ fill: 'url(#icon-gradient)' }} />
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
