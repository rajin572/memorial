import React from "react";
import RecentStories from "../../../components/SiteComponents/RecentStories";
import DownloadAppSection from "../../../components/SiteComponents/DownloadAppSection";
import AboutUs from "../about-the-app/page";
import PricingPlan from "@/components/SiteComponents/PricingPlan";
import Footer from "@/components/shared/Footer";
import { useTranslations } from "next-intl";
// import Banner from "@/components/shared/Banner";

export default function Home() {
  const t = useTranslations("RecentStory")
  return (
    <div className="flex flex-col gap-32">
      {/* <Banner /> */}
      <RecentStories
        title={t("title")}
        description={t("description")}
        showAll={false}
      />

      <AboutUs />
      {/* <AboutApp /> */}
      <DownloadAppSection />
      <PricingPlan />
      {/* <Footer /> */}
    </div>
  );
}
