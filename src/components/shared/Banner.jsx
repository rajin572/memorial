"use client";

import Image from "next/image";
import React from "react";

import { AllImages } from "../../../public/assets/AllImages";
import { usePathname } from "next/navigation";

export default function Banner() {
  const pathname = usePathname();
  // console.log(pathname);

  // Extract the part of the path after the "/"
  const pathSegment = pathname.split("/")[1]; // This will take the part after "/"

  // Capitalize each word, remove hyphens, and convert to uppercase
  const formattedPathSegment = pathSegment
    ? pathSegment
        .split("-") // Split by hyphens
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(" ") // Join with spaces
        .toUpperCase() // Convert the entire string to uppercase
    : "";

  return (
    <div className="relative h-full sm:h-3/4">
      <Image
        src={AllImages.banner}
        alt="banner-image"
        fill
        style={{ objectFit: "cover" }}
        className="absolute mix-blend-overlay h-[400px]  sm:w-full sm:h-full"
      />
      <div className="relative z-10 text-white flex flex-col sm:justify-end items-start h-full pt-72 mx-10 sm:pb-10 lg:pb-20 sm:pl-16 lg:pl-72">
        <p className="sm:text-xl lg:text-4xl font-bold text-black">
          Memorial Moments Magazine
        </p>
        {/* Route Name */}
        <p className="sm:text-2xl lg:text-5xl font-bold">
          {formattedPathSegment}
        </p>
      </div>
    </div>
  );
}
