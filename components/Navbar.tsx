import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-200/80">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 group">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                <span className="relative text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent group-hover:scale-105 transform transition-all duration-200">
                  SleepWise
                </span>
              </div>
            </Link>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-4">
            <div className="hidden sm:flex space-x-1">
              <Link
                href="/"
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-gray-700 hover:text-purple-600 hover:bg-purple-50"
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <SignedOut>
                <SignInButton>
                  <button className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-200"></div>
                    <span className="relative block bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transform group-hover:scale-105 transition-all duration-200">
                      Sign In
                    </span>
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox:
                        "w-10 h-10 rounded-full ring-2 ring-purple-500/20 hover:ring-purple-500/40 transition-all duration-200",
                    },
                  }}
                />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
