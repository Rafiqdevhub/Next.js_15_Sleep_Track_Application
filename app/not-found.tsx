"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div
        className={`max-w-2xl w-full text-center transition-all duration-700 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 animate-gradient-x"></div>
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Looks like you&apos;ve wandered into dreamland! The page
              you&apos;re looking for doesn&apos;t exist or has been moved to a
              different realm.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="transform hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl w-full sm:w-auto"
              >
                Return Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="transform hover:scale-105 transition-transform duration-200 bg-white text-gray-700 border border-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 w-full sm:w-auto"
              >
                Go Back
              </button>
            </div>
            <div className="mt-8 text-2xl animate-bounce">😴</div>
          </div>
        </div>
      </div>
    </div>
  );
}
