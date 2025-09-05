import Hero from './components/Hero';
import Clients from './components/Clients';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Cta from './components/Cta';

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <Testimonials />
      <Cta />
    </>
  );
}


// Force Vercel redeployment

