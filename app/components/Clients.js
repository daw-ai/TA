import LogoCarousel from './LogoCarousel';

export default function Clients() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Our candidates have landed at these elite tech companies</h2>
            <p className="text-xl text-gray-600">From startups to Fortune 500s, our alumni are making an impact across the tech industry.</p>
          </div>

          {/* Logo Carousel */}
          <LogoCarousel />

        </div>
      </div>
    </section>
  );
}

