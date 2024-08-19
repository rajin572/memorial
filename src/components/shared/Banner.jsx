"use client";

import Image from "next/image";
import React from "react";

import { AllImages } from "../../../public/assets/AllImages";
import { usePathname } from "next/navigation";

export default function Banner() {
  const pathname = usePathname();
  console.log(pathname);

  // Extract the part of the path after the "/"
  const pathSegment = pathname.split("/")[1]; // This will take the part after "/"

  // Capitalize the first letter
  const capitalizedPathSegment = pathSegment
    ? pathSegment.charAt(0).toUpperCase() + pathSegment.slice(1)
    : "";

  return (
    <div className="relative h-screen">
      <Image
        src={AllImages.banner}
        alt="banner-image"
        fill
        style={{ objectFit: "cover" }}
        className="absolute mix-blend-overlay w-full h-full"
      />
      <div className="relative z-10 text-white flex flex-col justify-end items-start h-full pb-64 pl-80">
        <p className="text-5xl font-bold text-black">
          Memorial Moments Magazine
        </p>
        {/* Route Name */}
        <p className="text-7xl">{capitalizedPathSegment}</p>
      </div>
    </div>
  );
}
