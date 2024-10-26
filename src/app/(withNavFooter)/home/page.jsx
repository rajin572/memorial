import React from "react";
import RecentStories from "../../../components/SiteComponents/RecentStories";
import DownloadAppSection from "../../../components/SiteComponents/DownloadAppSection";
import AboutUs from "../about-the-app/page";
import PricingPlan from "@/components/SiteComponents/PricingPlan";
import Footer from "@/components/shared/Footer";
// import Banner from "@/components/shared/Banner";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      {/* <Banner /> */}
      <RecentStories
        title="Recent Stories"
        description="Cherishing the Moments and Celebrating Lives Well Lived."
        showAll={false}
      />

      <AboutUs />
      {/* <AboutApp /> */}
      <DownloadAppSection />
      <PricingPlan />
      <Footer />
    </div>
  );
}
