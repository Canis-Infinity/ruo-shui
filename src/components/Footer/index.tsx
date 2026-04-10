import { footerSection } from '@/data/footerSection';
import Logo from '@/components/Logo';

const containerClassName = 'container mx-auto px-4';

export default function Footer() {
  return (
    <footer className="bg-background grid gap-5 py-6 pb-14">
      <div className={`flex justify-center ${containerClassName}`}>
        <Logo withText={false} size="large" />
      </div>
      <div className={containerClassName}>
        <p className="mx-auto w-fit text-center text-xl leading-relaxed font-semibold whitespace-pre-wrap text-brand-dark">
          {footerSection.slogan}
        </p>
      </div>
      <div className={`flex justify-center ${containerClassName}`}>
        <a
          href={`mailto:${footerSection.email}`}
          className="text-muted-foreground hover:text-brand-dark w-fit transition-colors hover:underline"
        >
          {footerSection.email}
        </a>
      </div>
      <div className={containerClassName}>
        <p className="text-muted-foreground text-center text-sm">{footerSection.copyright}</p>
      </div>
    </footer>
  );
}
