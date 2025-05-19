import Image from "next/image";

const MobileBottomCTA = () => {
  return (
    <div className="mobileCta fixed bottom-0 left-0 right-0 w-full bg-red-600 py-3 px-4 z-[999999999] shadow-md md:hidden">
      <div className="ctaContent flex items-center justify-center gap-3 max-w-md mx-auto">
        <span className="h-[45px] w-[45px] relative">
          <Image
            src="/images/call-pullu-love.png"
            alt="Phone Ringing"
            fill
            className="animate-[trin_1.5s_linear_infinite] object-contain"
          />
        </span>
        <div className="ctaText text-center text-white font-medium">
          <p className="text-sm leading-tight">
            Call & Get Unpublished Flight Deals
          </p>
          <a
            href="tel:+1-(844) 919-8610"
            className="block text-white font-bold text-2xl leading-tight"
          >
            +1-(844) 919-8610
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileBottomCTA;
