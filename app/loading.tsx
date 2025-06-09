const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 animate-gradient-x"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative w-16 h-16 mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-spin-slow"></div>
            <div className="absolute inset-1 rounded-full bg-white"></div>
            <div className="absolute right-2 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
          </div>
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            Loading...
          </h2>
          <p className="text-gray-600 text-center max-w-sm">
            Preparing your sleep insights...
          </p>
          <div className="mt-6 w-64 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-loading-bar"></div>
          </div>
          <div className="mt-6 text-2xl animate-bounce">😴</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
