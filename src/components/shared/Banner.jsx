"use client";

import Image from "next/image";
import React from "react";

import { AllImages } from "../../../public/assets/AllImages";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "antd";

export default function Banner() {
  const pathname = usePathname();
  // console.log(pathname);

  // Extract the part of the path after the "/"
  const pathSegment = pathname.split("/")[1];

  const formattedPathSegment = pathSegment
    ? pathSegment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
        .join(" ")
        .toUpperCase()
    : "";

  return (
    <div className="relative h-full sm:h-3/4">
      <Image
        src={AllImages.banner}
        alt="banner-image"
        fill
        style={{ objectFit: "cover" }}
        className="absolute mix-blend-overlay h-[400px] sm:w-full sm:h-full"
      />
      <div className="relative z-10 text-white flex flex-col sm:justify-end items-start h-full pt-72 mx-10 sm:pb-10 lg:pb-20 sm:pl-16 lg:pl-72">
        <p className="sm:text-xl lg:text-4xl font-bold text-black">
          Memorial Moments Magazine
        </p>
        <p className="sm:text-2xl lg:text-5xl font-bold">
          {formattedPathSegment}
        </p>
      </div>
      {/* Conditionally render the User Guide button */}
      {pathname !== "/" && pathname !== "/user-guide" && (
        <Link
          href="/user-guide"
          className="flex justify-end pr-2 md:pr-20 lg:pr-80 pb-10"
        >
          <Button className="bg-[#3598F1] text-white font-bold text-xs sm:text-lg sm:px-8 sm:py-5 rounded-full">
            User Guide
          </Button>
        </Link>
      )}
    </div>
  );
}
