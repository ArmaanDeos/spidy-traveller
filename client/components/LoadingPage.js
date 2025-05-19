const LoadingPage = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white h-screen w-screen">
      {/* Text Section */}
      <div className="text-center space-y-5 animate-fade-in px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[color:var(--color-primary-red)] animate-pulse">
          Finding the best flights just for you ✈️
        </h2>
        <p className="text-lg md:text-xl font-medium text-[color:var(--color-primary-blue)]">
          Please wait a moment... Your perfect trip is almost ready.
        </p>
        <a
          href="tel:+1-(844) 919-8610"
          className="inline-block mt-4 px-6 py-3 text-base font-semibold rounded-full bg-white text-gray-900 hover:bg-gray-200 transition"
        >
          📞 Call Now for Instant Booking: +1-(844) 919-8610
        </a>
      </div>

      {/* Plane Animation */}
      <div className="mt-12 w-48 h-48 animate-fade-in-slow">
        <img
          src="https://zupimages.net/up/19/34/4820.gif"
          alt="Loading animation"
          className="w-full h-full object-contain animate-spin-slow"
        />
      </div>
    </div>
  );
};

export default LoadingPage;
