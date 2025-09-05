import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">What our candidates say about us...</h2>
            <p className="text-xl text-gray-600">Some have no experience, others are seasoned professionals. But all our candidates seek a fast, fun, and simple job search so they can get to building a great career in tech.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial image */}
              <div className="text-center absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
                <Image className="rounded-full" src="/images/testimonial-01.jpg" width={48} height={48} alt="Testimonial 01" unoptimized />
              </div>

              {/* Testimonial content */}
              <blockquote className="text-xl font-medium text-gray-800 px-12 py-8">
                "I went from struggling to land a role in tech sales to landing at a top startup. The program gave me the confidence and strategy I needed."
              </blockquote>
              <cite className="block font-bold text-lg not-italic absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 pr-12 pb-8">
                Sarah Chen <span className="text-gray-600 font-medium">- Sales Engineer, Stripe</span>
              </cite>

            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial image */}
              <div className="text-center absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
                <Image className="rounded-full" src="/images/testimonial-02.jpg" width={48} height={48} alt="Testimonial 02" unoptimized />
              </div>

              {/* Testimonial content */}
              <blockquote className="text-xl font-medium text-gray-800 px-12 py-8">
                "No experience? No problem. We got into interviews at 12 companies, and he chose an SDR role at Assembled, a top startup that counts big-name customers like Etsy."
              </blockquote>
              <cite className="block font-bold text-lg not-italic absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 pr-12 pb-8">
                Marcus Johnson <span className="text-gray-600 font-medium">- SDR, Assembled</span>
              </cite>

            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
            <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">

              {/* Testimonial image */}
              <div className="text-center absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
                <Image className="rounded-full" src="/images/testimonial-03.jpg" width={48} height={48} alt="Testimonial 03" unoptimized />
              </div>

              {/* Testimonial content */}
              <blockquote className="text-xl font-medium text-gray-800 px-12 py-8">
                "Their passion for helping candidates showed from the first day. You would never guess she was promoted to a Mid-Market AE role."
              </blockquote>
              <cite className="block font-bold text-lg not-italic absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 pr-12 pb-8">
                Angela Rodriguez <span className="text-gray-600 font-medium">- AE, Vercel</span>
              </cite>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

