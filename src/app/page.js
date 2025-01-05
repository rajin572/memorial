"use client";
import { useState } from "react";
import Navbar from "../components/shared/Navbar";
import Banner from "../components/shared/Banner";
import RecentStories from "../components/SiteComponents/RecentStories";
import AboutUs from "../components/SiteComponents/AboutUs";
import AboutApp from "../components/SiteComponents/AboutApp";
import PricingPlan from "../components/SiteComponents/PricingPlan";
import Footer from "../components/shared/Footer";
import DownloadAppSection from "../components/SiteComponents/DownloadAppSection";
import { useTranslations } from "next-intl";

const HomePage = () => {
  const [language, setLanguage] = useState("en");
  const t = useTranslations("RecentStory");
  // console.log('home page navber text', language);
  return (
    <div>
      <Navbar  />
      <Banner />
      <RecentStories
        // title="Recent Stories"
        // description="Cherishing the Moments and Celebrating Lives Well Lived."
        // language={language}
        // setLanguage={setLanguage}
        title={t("title")}
        description={t("description")}
        showAll={false}
      />
      <AboutUs />
      {/* <AboutApp /> */}
      <DownloadAppSection />
      <PricingPlan />
      <Footer />
    </div>
  );
};

export default HomePage;
