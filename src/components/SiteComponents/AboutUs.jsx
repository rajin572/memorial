import Image from "next/image";
import React from "react";
import { aboutImg } from "../../../public/assets/AllImages";

export default function AboutUs() {
  return (
    <div className="my-12 sm:my-28 flex flex-col items-center gap-5 sm:gap-16">
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-8 items-center mx-auto">
        <div className="flex flex-col items-center md:items-end">
          <hr className="w-[100px] md:w-[180px] lg:w-[240px] md:mr-16 lg:mr-24 border-t-2 border-[#F6A56D]" />
          <hr className="w-[100px] md:w-[180px] lg:w-[240px] mt-1 sm:mt-2 md:mr-24 lg:mr-32 border-t-2 border-[#0259A9]" />
        </div>
        <p className="text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-left">
          About Us
        </p>
        <div className="flex flex-col items-center md:items-start">
          <hr className="w-[100px] md:w-[180px] lg:w-[240px] md:ml-24 lg:ml-32 border-t-2 border-[#0259A9]" />
          <hr className="w-[100px] md:w-[180px] lg:w-[240px] mt-1 sm:mt-2 md:ml-16 lg:ml-24 border-t-2 border-[#F6A56D]" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <Image
          src={aboutImg.about1}
          width={400}
          height={400}
          className="rounded-xl"
        />
        <Image
          src={aboutImg.about2}
          width={400}
          height={400}
          className="rounded-xl"
        />
        <Image
          src={aboutImg.about3}
          width={400}
          height={400}
          className="rounded-xl"
        />
      </div>
      <p className="sm:w-2/3 px-2 sm:px-8 text-center text-sm sm:text-lg">
        Welcome to Memorial Moments Magazine, where we celebrate life's
        treasured memories. Our magazine captures heartfelt stories and
        inspiring moments, honoring the past and embracing the present. Join us
        in creating a future filled with beautiful, unforgettable experiences.
        Explore our stories, share your own, and be inspired by the moments that
        make life extraordinary.
      </p>
    </div>
  );
}
