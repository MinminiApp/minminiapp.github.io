import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Screenshots from '@/components/Screenshots';
import Polls from '@/components/Polls';
import Reviews from '@/components/Reviews';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Screenshots />
      <Polls />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
