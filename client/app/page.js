import AboutUs from "@/components/AboutUs";
import BannerSection from "@/components/Banner";
import ClientBg from "@/components/ClientBg";
import ContactUs from "@/components/ContactUs";
import CountdownSection from "@/components/CountDownSection";
import CustomerReviews from "@/components/CustomerReviews";
import FlightSearch from "@/components/FlightSearchForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowWeWork from "@/components/HowWeWork";
import MobilePromo from "@/components/MobilePromoBanner";
import Newsletter from "@/components/NewsLetter";
import PopularFlightDeals from "@/components/PopularFlightDeals";
import PopularHotelDeals from "@/components/PopularHotelDeals";
import TabbedDealsSection from "@/components/TabbedDealsSection";

import WhyChooseUs from "@/components/WhyChooseUs";
import Head from "next/head";
import { Suspense } from "react";

const metadata = {
  title: "SpidyTraveller - Cheap Flight Booking | Airline Reservation",
  description:
    "Book cheap airline tickets online with SpidyTraveller. 24/7 customer support at (844) 930-0173. Enjoy great deals on domestic and international flights.",
  keywords:
    "Airline Reservation, Flight Reservation, cheap flight tickets, airline phone number, flight booking, airlines tickets, airline tickets booking, cheap flights tickets, flight ticket, plane tickets Deals, flight ticket booking, cheap airline tickets, air ticket booking, booking com flights, cheap plane tickets, flight ticket booking online, airline Customer Care Number, international flights tickets",
  siteUrl: "https://SpidyTraveller",
  phoneNumber: "(844) 919-8610",
};

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={metadata.siteUrl} />

        {/* Open Graph tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
      </Head>
      <Header />
      <MobilePromo />
      <BannerSection
        heading="SpidyTraveller: Fly Beyond Limits"
        subheading="Unlock exclusive fares from 100+ airlines. Travel smart. Travel bold. Travel your way."
        bgImage="/images/banner-bg.jpg"
      />
      <div className="block md:hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <FlightSearch />
        </Suspense>
      </div>
      <TabbedDealsSection />
      <CountdownSection />
      <WhyChooseUs />
      <HowWeWork />
      <PopularFlightDeals />
      <PopularHotelDeals />
      <AboutUs />
      <CustomerReviews />
      <ContactUs />
      <Newsletter />
      <ClientBg />

      <Footer />
    </div>
  );
};

export default HomePage;
