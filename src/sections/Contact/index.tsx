import { contactSection } from '@/data/contactSection';
import HGroup from '@/components/HGroup';
import ContactForm from '@/components/contact/ContactForm';

export default function Contact({ id }: { id: string }) {
  return (
    <section id={id} className="bg-background mx-auto max-w-7xl overflow-hidden px-6 py-10 lg:px-8 lg:py-12">
      <HGroup
        title={contactSection.title}
        description={contactSection.description}
        category={contactSection.category}
        align='center'
      />
      <ContactForm />
    </section>
  );
}