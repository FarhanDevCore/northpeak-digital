import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black antialiased">
      <Hero />
      <Services />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <Footer />
    </main>
  );
}