"use client";
import { useState } from "react";
import { Record } from "@/types/Record";
import deleteRecord from "@/actions/deleteRecord";

const RecordItem = ({ record }: { record: Record }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleDeleteRecord = async (recordId: string) => {
    setIsLoading(true);
    try {
      await deleteRecord(recordId);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to delete record:", error);
    }
    setIsLoading(false);
  };

  return (
    <li
      className={`flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4 border-t border-t-gray-100 transform hover:scale-[1.02] transition-all duration-200 ${
        record?.amount < 7
          ? "border-l-4 border-red-500"
          : "border-l-4 border-green-500"
      } relative`}
    >
      {showSuccess && (
        <div className="absolute inset-0 flex items-center justify-center bg-green-500/90 rounded-lg text-white font-medium animate-fade-in">
          Record deleted successfully!
        </div>
      )}
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">
          {new Date(record?.date).toLocaleDateString()}
        </span>
        <span className="text-lg font-bold text-gray-800">
          {record?.amount} hours
        </span>
        <span className="text-sm text-gray-600">
          Sleep Mode: {record?.text}
        </span>
      </div>
      <button
        onClick={() => handleDeleteRecord(record.id)}
        className={`bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition cursor-pointer ${
          isLoading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        aria-label="Delete record"
        disabled={isLoading}
      >
        {" "}
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        ) : (
          <svg
            className="h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m4-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        )}
      </button>
    </li>
  );
};

export default RecordItem;
