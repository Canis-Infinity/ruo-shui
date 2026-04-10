type Props = {
  align?: 'left' | 'center' | 'right';
  title: string;
  description: string;
  category: string;
};

export default function HGroup({ align = 'left', title, description, category }: Props) {
  return (
    <hgroup
      className={`max-w-full ${align === 'center' ? 'mx-auto text-center' : align === 'right' ? 'ml-auto text-right' : ''} mb-10`}
    >
      {/* <span className="text-sub-ink font-bold text-lg">{category}</span> */}
      <span className="border-brand-dark text-ink mb-5 inline-flex rounded-full border px-4 py-1 text-sm font-medium">
        {category}
      </span>
      <h1
        className={`w-fit max-w-10/12 text-3xl font-semibold text-balance whitespace-pre-line text-ink/90 sm:max-w-2/3 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}
      >
        {title}
      </h1>
      <p
        className={`text-sub-ink mt-5 w-fit max-w-10/12 text-base text-balance sm:max-w-2/3 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}
      >
        {description}
      </p>
    </hgroup>
  );
}
