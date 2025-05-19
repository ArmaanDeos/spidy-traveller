"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AlarmClock,
  Plane,
  PercentCircle,
  AirplaneTakeOff,
  PlaneTakeoff,
} from "lucide-react";

const CountdownSection = () => {
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 13);
    return date;
  }, []);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section
      id="countdown"
      className="py-16 relative overflow-hidden"
      aria-label="Limited time flash deals countdown"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1400&q=80"
          alt="Hot air balloons floating at sunrise"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-blue-900/85 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 drop-shadow-lg">
            SpidyTraveller Flash Deals — Fly Now, Flex Later
          </h2>
          <p className="text-lg md:text-xl text-white mb-12 drop-shadow-md">
            Book your dream vacation before these exclusive offers expire!
          </p>

          {/* Countdown Timer */}
          <div
            className="bg-white/20 backdrop-blur-md rounded-xl p-6 md:p-8 mb-12 shadow-lg"
            role="timer"
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/25 rounded-lg p-6 flex flex-col items-center justify-center transition-transform duration-700 animate-pulse"
                  aria-label={`${item.label}: ${String(item.value).padStart(
                    2,
                    "0"
                  )}`}
                >
                  <div className="text-5xl md:text-6xl font-extrabold text-white tracking-wide select-none">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-sm uppercase tracking-widest text-white mt-3 font-semibold select-none">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 text-white text-lg md:text-xl font-semibold">
              <div
                className="flex items-center gap-3 animate-bounce-slow"
                aria-label="Limited Time Offers"
              >
                <AlarmClock className="text-yellow-400 w-7 h-7" />
                <span>Limited Time Offers</span>
              </div>
              <div
                className="flex items-center gap-3 animate-bounce-slow animation-delay-200"
                aria-label="Exclusive Packages"
              >
                <Plane className="text-yellow-400 w-7 h-7" />
                <span>Exclusive Packages</span>
              </div>
              <div
                className="flex items-center gap-3 animate-bounce-slow animation-delay-400"
                aria-label="Up to 40% Off"
              >
                <PercentCircle className="text-yellow-400 w-7 h-7" />
                <span>Up to 40% Off</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="tel:+1-(844) 919-8610"
            aria-label="Call now to grab your deal"
            className="inline-flex items-center gap-4 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-extrabold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-yellow-500/80 shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300"
          >
            <PlaneTakeoff className="w-6 h-6" />
            Grab Your Deal Now!
          </a>
        </div>
      </div>

      {/* Extra styles for animation */}
      <style jsx>{`
        @keyframes bounceSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default CountdownSection;
