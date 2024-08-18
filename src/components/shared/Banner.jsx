import Image from "next/image";
import React from "react";

import { AllImages } from "../../../public/assets/AllImages";

export default function Banner() {
  return (
    <div className="relative h-screen">
      <Image
        src={AllImages.banner}
        alt="banner-image"
        fill
        style={{ objectFit: "cover" }}
        className="absolute mix-blend-overlay w-full h-full"
      />
      <div className="relative z-10 text-white flex flex-col justify-center items-center h-full pt-96 xl:right-72">
        <p className="text-5xl font-bold text-black">
          Memorial Moments Magazine
        </p>
      </div>
    </div>
  );
}
