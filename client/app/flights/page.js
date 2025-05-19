"use client";
import React, { Suspense } from "react";
import Footer from "@/components/Footer";
import Loader from "@/components/LoadingPage";
import dynamic from "next/dynamic";
import Header from "@/components/Header";

// Dynamically import the client component
const FlightResultClient = dynamic(
  () => import("@/components/FlightResultClient"),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

const FlightResultPage = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <FlightResultClient />
      </Suspense>
      <Footer />
    </>
  );
};

export default FlightResultPage;
