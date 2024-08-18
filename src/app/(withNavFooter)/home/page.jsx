import React from "react";
import RecentStories from "../../../components/SiteComponents/RecentStories";
import DownloadAppSection from "../../../components/SiteComponents/DownloadAppSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-32">
      <RecentStories showAll={false} />
      <DownloadAppSection />
    </div>
  );
}
