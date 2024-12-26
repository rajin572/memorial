import React from "react";
import RecentStories from "../../../components/SiteComponents/RecentStories";
import { useTranslations } from "next-intl";
// import Banner from "@/components/shared/Banner";

export default function Stories() {
  const t = useTranslations("Stories")
  return (
    <div>
      {/* <Banner /> */}
      <RecentStories
        title={t("heading")}
        description2={t("details")}
        showAll={true}
      />
    </div>
  );
}
