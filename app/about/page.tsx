import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      <section className="flex flex-col items-center justify-center text-center py-16 px-8 bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          About SleepWise
        </h1>
        <p className="text-lg md:text-xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Your personal sleep analytics platform for better rest and wellness
        </p>
      </section>

      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          At SleepWise, we&apos;ve developed a sophisticated sleep tracking
          system that helps you monitor and improve your sleep patterns. Using
          modern technology and data analytics, we provide detailed insights
          into your sleep duration, quality, and trends over time. Our goal is
          to help you achieve optimal rest through data-driven decisions.
        </p>
      </section>

      <section className="py-16 px-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-xl font-bold mb-2">Smart Sleep Tracking</h3>
            <p className="text-gray-600">
              Record your sleep hours with our intuitive slider interface. Track
              sleep quality with mood indicators like &ldquo;Refreshed&rdquo;,
              &ldquo;Energetic&rdquo;, &ldquo;Neutral&rdquo;,
              &ldquo;Tired&rdquo;, or &ldquo;Exhausted&rdquo;.
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-xl font-bold mb-2">Data Visualization</h3>
            <p className="text-gray-600">
              View your sleep patterns through interactive charts. Monitor your
              progress with average sleep calculations and historical data
              tracking.
            </p>
          </div>
          <div className="bg-white p-6 rounded-md shadow">
            <h3 className="text-xl font-bold mb-2">Performance Insights</h3>
            <p className="text-gray-600">
              Track your best and worst sleep records. Identify patterns and get
              insights into your sleep quality variations over time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">
          Technical Excellence
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center">
          Built with cutting-edge technology, SleepWise utilizes Next.js for
          lightning-fast performance, Clerk for secure authentication, and
          PostgreSQL for reliable data storage. Our modern, responsive interface
          ensures a seamless experience across all devices, while our precise
          tracking system allows you to log sleep durations down to 30-minute
          intervals, ranging from 0 to 12 hours.
        </p>
      </section>

      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Start Your Sleep Journey
        </h2>
        <p className="text-lg mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Join SleepWise today and gain access to powerful sleep tracking tools
          and personalized insights for better sleep quality.
        </p>
        <Link
          href="/sign-up"
          className="inline-block bg-white text-purple-600 hover:text-purple-700 px-6 py-3 rounded-md font-medium shadow-md transition"
        >
          Create Your Account
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
