import getRecords from "@/actions/getRecord";
import { Record } from "@/types/Record";
import RecordItem from "./RecordItem";

const RecordHistory = async () => {
  const { records, error } = await getRecords();

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center transform hover:scale-[1.01] transition-all duration-200">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-red-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          </div>
          <p className="text-red-800 font-medium">{error}</p>
        </div>
      </div>
    );
  }

  if (!records || records.length === 0) {
    return (
      <div className="bg-gray-50 rounded-xl p-8">
        <div className="bg-white shadow-lg rounded-xl p-8 text-center transform hover:scale-[1.01] transition-all duration-200">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🌙</span>
            </div>
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              No Sleep Records Found
            </h3>
            <p className="text-gray-600 mb-6">
              Start tracking your sleep to see your history here.
            </p>
            <div className="flex justify-center space-x-2 text-sm text-gray-500">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                <span>Add records</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                <span>Track progress</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                <span>Gain insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10"></div>
          <h3 className="relative text-2xl font-bold text-center py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Sleep History
          </h3>
        </div>

        <div className="p-6">
          <div className="flex justify-between text-sm text-gray-500 mb-4 px-4">
            <span>Date</span>
            <span>Duration</span>
          </div>{" "}
          <ul className="space-y-3">
            {records.map((record: Record) => (
              <RecordItem key={record.id} record={record} />
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-red-500/5 px-6 py-4 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            Showing your {records.length} most recent sleep records
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecordHistory;
