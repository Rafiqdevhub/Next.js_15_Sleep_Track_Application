"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 animate-gradient-x" />
          <div className="relative z-10">
            <div className="mx-auto w-16 h-16 mb-6 bg-red-100 rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Oops! Something went wrong
            </h1>

            <p className="text-gray-600 text-center mb-8 max-w-md mx-auto">
              {error.message ||
                "Don't worry, we're on it! Please try again or return to the home page."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={reset}
                className="transform hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="transform hover:scale-105 transition-transform duration-200 bg-white text-gray-700 border border-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 w-full sm:w-auto text-center"
              >
                Return Home
              </Link>
            </div>
            {error.digest && (
              <p className="mt-8 text-sm text-center text-gray-500">
                Error ID: {error.digest}
              </p>
            )}
            <div className="mt-8 text-2xl text-center animate-bounce">😴</div>
          </div>
        </div>
      </div>
    </div>
  );
}
