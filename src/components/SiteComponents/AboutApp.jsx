import Image from "next/image";
import React from "react";
import { appAboutImg } from "../../../public/assets/AllImages";

export default function AboutApp() {
  return (
    <div className="my-28 w-1/2 mx-10 md:mx-32 lg:mx-auto flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/3 flex justify-center">
        <Image
          src={appAboutImg}
          alt="About The App"
          className="h-auto w-auto"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col items-center md:items-center justify-center">
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-8 items-center">
          <div className="flex flex-col items-center md:items-end">
            <hr className="w-[40px] md:w-[80px] lg:w-[100px] border-t-2 border-[#F6A56D]" />
            <hr className="w-[40px] md:w-[80px] lg:w-[100px] mt-1 sm:mt-2 border-t-2 border-[#0259A9]" />
          </div>
          <p className="text-lg md:text-xl lg:text-2xl font-bold text-center md:text-left">
            About the app
          </p>
          <div className="flex flex-col items-center md:items-start">
            <hr className="w-[40px] md:w-[80px] lg:w-[100px] border-t-2 border-[#0259A9]" />
            <hr className="w-[40px] md:w-[80px] lg:w-[100px] mt-1 sm:mt-2 border-t-2 border-[#F6A56D]" />
          </div>
        </div>
        <div className="mt-6 sm:w-1/2 ">
          <p className="text-center text-sm sm:text-base">
            Welcome to Memorial Moments Magazine, where we celebrate life's
            treasured memories. Our magazine captures heartfelt stories and
            inspiring moments, honoring the past and embracing the present. Join
            us in creating a future filled with beautiful, unforgettable
            experiences. Explore our stories, share your own, and be inspired by
            the moments that make life extraordinary.
          </p>
        </div>
      </div>
    </div>
  );
}
