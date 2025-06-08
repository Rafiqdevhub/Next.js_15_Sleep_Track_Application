"use client";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";

const Guest = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      icon: "🌙",
      title: "Sleep Tracking",
      description: "Record and monitor your daily sleep patterns with ease",
    },
    {
      icon: "📊",
      title: "Smart Analytics",
      description: "Get insights into your sleep quality and duration trends",
    },
    {
      icon: "🎯",
      title: "Goal Setting",
      description: "Set and track your sleep goals for better health",
    },
  ];

  const testimonials = [
    {
      initial: "S",
      name: "Sarah L.",
      role: "Sleep Enthusiast",
      quote:
        "SleepWise has transformed my sleep habits. The insights are invaluable, and I&apos;ve never felt more energized!",
    },
    {
      initial: "M",
      name: "Michael R.",
      role: "Tech Professional",
      quote:
        "The analytics are top-notch! I can finally understand my sleep patterns and make meaningful improvements.",
    },
    {
      initial: "J",
      name: "Jessica K.",
      role: "Wellness Coach",
      quote:
        "As a wellness coach, I recommend SleepWise to all my clients. It&apos;s simple, effective, and beautifully designed!",
    },
  ];

  const faqs = [
    {
      question: "What is SleepWise?",
      answer:
        "SleepWise is an intelligent sleep tracking platform that combines modern technology with sleep science to help you understand and improve your sleep patterns.",
    },
    {
      question: "How does it work?",
      answer:
        "Simply log your sleep duration and quality daily. Our advanced analytics engine processes your data to provide personalized insights and recommendations.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely! We use Clerk for secure authentication and industry-standard encryption to protect your sleep data and personal information.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 animate-gradient-x"></div>
        <div className="flex flex-col md:flex-row items-center justify-between p-3 md:p-16 pt-20 relative z-10">
          <div className="flex-1 mb-8 xl:pl-10">
            <div className="space-y-2 mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
                Rest Smarter with SleepWise
              </h1>
              <p className="md:text-xl mb-6 text-gray-600 max-w-2xl">
                Your personal sleep companion that helps you track, analyze, and
                improve your sleep patterns for a more energized life.
              </p>
              <div className="flex items-center space-x-4">
                <SignInButton>
                  <button className="transform hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-3 rounded-lg font-medium cursor-pointer shadow-lg hover:shadow-xl">
                    Start Your Journey
                  </button>
                </SignInButton>
                <div className="text-sm text-gray-500">
                  ✨ Join 1000+ users tracking their sleep
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center relative p-4 md:p-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative z-10 w-full aspect-square md:aspect-[4/3] max-w-lg rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-2 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="w-full h-full relative rounded-xl overflow-hidden">
                <Image
                  src="/sleepwise.jpg"
                  alt="SleepTracker Illustration"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 px-8 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Why Choose SleepWise?
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="py-20 px-8 bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Common Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left flex justify-between items-center"
              >
                <h3 className="text-xl font-bold text-gray-800">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-20 px-8 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          What Our Community Says
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl`}
                >
                  {testimonial.initial}
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="py-20 px-8 bg-gradient-to-b from-gray-50 to-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Ready to Transform Your Sleep?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of users who have already improved their sleep quality
          with SleepWise.
        </p>
        <SignInButton>
          <button className="transform hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-8 py-3 rounded-lg font-medium cursor-pointer shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </SignInButton>
      </div>
    </div>
  );
};

export default Guest;
