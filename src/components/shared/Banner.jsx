"use client";

import Image from "next/image";
import React from "react";

import { AllImages } from "../../../public/assets/AllImages";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { Button } from "antd";

export default function Banner() {
  // const pathname = usePathname();

  // Extract the part of the path after the "/"
  // const pathSegment = pathname.split("/")[1];

  // const formattedPathSegment = pathSegment
  //   ? pathSegment
  //       .split("-")
  //       .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
  //       .join(" ")
  //       .toUpperCase()
  //   : "";

  return (
    <div className="relative h-[90vh]">
      <Image
        src={AllImages.banner}
        alt="banner-image"
        fill
        style={{ objectFit: "cover" }}
        className="relative   sm:w-full h-full"
      />
      <div className="absolute bottom-[13%] left-5 sm:left-[10%] xl:left-[15%]  z-10 text-white flex flex-col justify-end  items-start h-full ">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          Memorial Moments Magazine
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mt-3 text-black">
          Every Life Matters
        </p>
        {/* <p className="sm:text-2xl lg:text-5xl font-bold">
          {formattedPathSegment}
        </p> */}
      </div>
    </div>
  );
}
