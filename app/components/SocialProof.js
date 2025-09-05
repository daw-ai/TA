import Image from 'next/image';

export default function SocialProof() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          
          {/* Candidate avatars */}
          <div className="flex -space-x-2">
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
              <Image src="/images/testimonial-01.jpg" width={48} height={48} alt="Candidate 1" className="w-full h-full object-cover" unoptimized />
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
              <Image src="/images/testimonial-02.jpg" width={48} height={48} alt="Candidate 2" className="w-full h-full object-cover" unoptimized />
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
              <Image src="/images/testimonial-03.jpg" width={48} height={48} alt="Candidate 3" className="w-full h-full object-cover" unoptimized />
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white bg-purple-500 flex items-center justify-center">
              <span className="text-white text-sm font-semibold">+2</span>
            </div>
            <div className="w-12 h-12 rounded-full border-2 border-white bg-pink-500 flex items-center justify-center">
              <span className="text-white text-sm font-semibold">+5</span>
            </div>
          </div>

          {/* Rating and text */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900 mr-2">4.9/5</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <span className="text-gray-600 text-lg">from 200+ candidates</span>
          </div>

        </div>
      </div>
    </section>
  );
}

