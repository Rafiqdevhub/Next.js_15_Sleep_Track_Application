import AddNewRecord from "@/components/AddNewRecord";
import AverageSleep from "@/components/AverageSleep";
import BestWorstSleep from "@/components/BestWorstSleep";
import Guest from "@/components/Guest";
import RecordChart from "@/components/RecordChart";
import RecordHistory from "@/components/RecordHistory";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

export default async function HomePage() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <main className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                  <Image
                    src={user.imageUrl}
                    alt={`${user.firstName}&apos;s profile`}
                    width={96}
                    height={96}
                    className="relative w-24 h-24 rounded-full border-2 border-white shadow-md group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-800 bg-clip-text text-transparent">
                      Welcome Back, {user.firstName} {user.lastName}
                    </span>
                    <span className="ml-1">👋</span>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Here&apos;s your sleep dashboard. Keep track of your
                    patterns and improve your rest quality!
                  </p>
                  <div className="inline-flex flex-col sm:flex-row gap-4 text-sm">
                    <div className="bg-purple-50 px-4 py-2 rounded-lg">
                      <span className="font-semibold text-purple-800">
                        Joined:{" "}
                      </span>
                      <span className="text-purple-600">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="bg-pink-50 px-4 py-2 rounded-lg">
                      <span className="font-semibold text-pink-800">
                        Last Active:{" "}
                      </span>
                      <span className="text-pink-600">
                        {user.lastActiveAt
                          ? new Date(user.lastActiveAt).toLocaleString()
                          : "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <AddNewRecord />
            </div>
          </div>
          <div className="space-y-6">
            <div className="transform hover:scale-[1.02] transition-transform duration-300">
              <RecordChart />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="transform hover:scale-[1.02] transition-transform duration-300">
                <AverageSleep />
              </div>
              <div className="transform hover:scale-[1.02] transition-transform duration-300">
                <BestWorstSleep />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Sleep History
            </h3>
            <RecordHistory />
          </div>
        </div>
      </div>
    </main>
  );
}
