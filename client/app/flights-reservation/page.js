import BannerSection from "@/components/Banner";
import ClientBg from "@/components/ClientBg";
import FlightSearch from "@/components/FlightSearchForm";
import Footer from "@/components/Footer";
import MobileBottomCTA from "@/components/GenericComponents/BottomFixedCta";
import CheapFlightDeals from "@/components/GenericComponents/CheapFlightDeals";
import GenericBanner from "@/components/GenericComponents/GenericBanner";
import MobilePromo from "@/components/GenericComponents/MobilePromo";
import MobilePromoModal from "@/components/GenericComponents/MobilePromoModal";
import WhyBookWithSkyJoyTravels from "@/components/GenericComponents/WhyBookingWIthSkyJoy";
import Header from "@/components/Header";
import HowWeWork from "@/components/HowWeWork";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Suspense } from "react";

const FlightReservations = () => {
  return (
    <div className="">
      <div className="hidden md:block">
        <Header />
      </div>
      <MobilePromo />

      <BannerSection
        heading="Fly Cheap. Travel Far."
        subheading="Save big with exclusive deals and 24/7 customer support."
        additionalHeading="Airfare Made Simple"
        bgImage="/images/generic-banner.jpg"
      />
      <div className="block md:hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <FlightSearch />
        </Suspense>
      </div>
      <HowWeWork />
      <WhyChooseUs />
      <CheapFlightDeals />

      <WhyBookWithSkyJoyTravels />
      <ClientBg />
      <Footer />
      <MobileBottomCTA />
      <MobilePromoModal />
    </div>
  );
};

export default FlightReservations;
