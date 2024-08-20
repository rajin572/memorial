import Image from "next/image";
import React from "react";
import { aboutImg } from "../../../public/assets/AllImages";
import SectionHeader from "../ui/SectionHeader";

export default function AboutUs() {
  return (
    <div className="my-12 sm:my-28 flex flex-col items-center gap-5 sm:gap-16">
      {/* page name */}
      <SectionHeader>About Us</SectionHeader>
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
