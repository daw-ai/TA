import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link href="/" className="inline-block" aria-label="Tech Ascension">
                <div className="flex items-center">
                  <img src="/images/TA-favicon.png" alt="Tech Ascension" className="w-8 h-8 mr-2" />
                  <span className="text-xl font-bold text-gray-900">Tech Ascension</span>
                </div>
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <p className="mb-4">Helping ambitious professionals break into high-paying tech roles at top companies.</p>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="#about" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About</Link>
              </li>
              <li className="mb-2">
                <Link href="#process" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Process</Link>
              </li>
              <li className="mb-2">
                <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Success Stories</Link>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Legal</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 font-medium mb-2">Contact</h6>
            <p className="text-sm text-gray-600 mb-4">Ready to transform your career?</p>
            <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700" href="#0">Schedule A Call</a>
          </div>

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
          {/* Copyright */}
          <div className="text-sm text-gray-600 mr-4">&copy; 2025 Tech Ascension. All rights reserved.</div>
        </div>

      </div>
    </footer>
  );
}

