import React from "react";
import PricingPlan from "../../../components/SiteComponents/PricingPlan";
import Banner from "@/components/shared/Banner";

export default function Pricing() {
  return (

    <div>
      <Banner />
      <div className="relative">
        <div
          style={{
            boxShadow: "0px 0px 200px 90px #3598F188",
          }}
          className="absolute left-[-50%] sm:left-[-30%] md:left-[-25%] xl:left-[-23%] md:top-[5%] w-[20%] h-[40vh]"
        ></div>
        <PricingPlan />
      </div>
    </div>
  );
}
