export default function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative px-8 py-12 md:py-20 rounded-[3rem] bg-gray-900">

          {/* Background illustration */}
          <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-1" aria-hidden="true">
            <svg width="940" height="462" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <circle fill="#0F172A" cx="470" cy="231" r="231" />
                <circle fill="#0F172A" cx="470" cy="231" r="196" />
                <circle fill="#0F172A" cx="470" cy="231" r="161" />
                <circle fill="#0F172A" cx="470" cy="231" r="126" />
                <circle fill="#0F172A" cx="470" cy="231" r="91" />
                <circle fill="#0F172A" cx="470" cy="231" r="56" />
                <circle fill="#0F172A" cx="470" cy="231" r="21" />
              </g>
            </svg>
          </div>

          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="h2 text-white mb-4">Ready to Change Your Career Trajectory?</h2>
            <p className="text-gray-300 text-xl mb-8">Join the professionals who've transformed their careers with Tech Ascension.</p>
            <a className="btn text-white bg-blue-600 hover:bg-blue-700" href="#0">Schedule A Call</a>
          </div>

        </div>
      </div>
    </section>
  );
}

