import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Tech Ascension">
              <div className="flex items-center">
                <img src="/images/TA-favicon.png" alt="Tech Ascension" className="w-8 h-8 mr-2" />
                <span className="text-xl font-bold text-gray-900">Tech Ascension</span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-center flex-wrap items-center">
              <li>
                <Link href="#about" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  About
                </Link>
              </li>
              <li>
                <Link href="#process" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  Process
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                  Success Stories
                </Link>
              </li>
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <a className="btn-sm text-white bg-blue-600 hover:bg-blue-700 ml-3" href="#0">
              Schedule A Call
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}

