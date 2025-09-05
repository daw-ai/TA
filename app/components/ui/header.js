import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Tech Ascension">
              <Image src="/images/TA-favicon.png" width={32} height={32} alt="Tech Ascension Logo" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/privacy" className="font-medium text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="font-medium text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Terms of Service</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

