import Hero from '@/sections/Hero';
import Header from '@/sections/Header';
import Services from '@/sections/Services';
import Process from '@/sections/Process';
import Cases from '@/sections/Cases';
import Contact from '@/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services id="services" />
        <Process id="process" />
        <Cases id="cases" />
        <Contact id="contact" />
        <Footer />
      </main>
    </>
  );
}
