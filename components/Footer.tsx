import Link from "next/link";

const Footer = () => {
  const sleepQuotes = [
    "A good laugh and a long sleep are the two best cures for anything.",
    "Quality sleep is not a luxury, it's a necessity.",
    "Track your sleep today for a better tomorrow.",
  ];

  return (
    <footer className="border-t-2 border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent mb-2">
              SleepWise
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Track your sleep, improve your health.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-gray-500">
              <span>✨ Advanced Sleep Analytics</span>
              <span>📊 Visual Sleep Patterns</span>
              <span>🎯 Personal Sleep Goals</span>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-gray-600 hover:text-purple-600 transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-purple-600 transition"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-purple-600 transition"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Sleep Wisdom
            </h3>
            <div className="italic text-gray-600">
              {sleepQuotes.map((quote, index) => (
                <p key={index} className="mb-2 text-sm">
                  &ldquo;{quote}&rdquo;
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
