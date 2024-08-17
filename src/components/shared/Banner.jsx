import Image from "next/image";
import React from "react";

import { AllImages } from "../../../public/assets/AllImages";

export default function Banner() {
  return (
    <div className="relative h-screen">
      <Image
        src={AllImages.banner}
        alt="banner-image"
        layout="fill"
        objectFit="cover"
        className="object-cover absolute mix-blend-overlay w-full h-full"
      />
      <div className="relative z-10 text-white flex flex-col justify-center items-center h-full">
        <p className="text-5xl font-bold text-black px-4 py-2 rounded">
          Memorial Moments Magazine
        </p>
      </div>
    </div>
  );
}
