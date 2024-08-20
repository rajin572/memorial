import Image from "next/image";
import React from "react";
import { appAboutImg } from "../../../public/assets/AllImages";
import SectionHeader from "../ui/SectionHeader";

export default function AboutApp() {
  return (
    <div className="my-28 sm:w-2/3 lg:w-1/2 mx-auto lg:mx-auto flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-1/3 flex justify-center">
        <Image
          src={appAboutImg}
          alt="About The App"
          className="h-auto w-auto"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col items-center md:items-center justify-center">
        <SectionHeader> About The App</SectionHeader>
        <div className="mt-6 sm:w-2/3 ">
          <p className="text-center text-sm sm:text-sm lg:text-base px-2 sm:px-0">
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
