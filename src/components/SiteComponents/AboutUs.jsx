/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import { aboutImg } from "../../../public/assets/AllImages";
import SectionHeader from "../ui/SectionHeader";
import Container from "../ui/Container";

export default function AboutUs() {
  return (
    <div className="my-12 sm:my-28">
      <Container>
        <div className="flex flex-col items-center gap-5 sm:gap-16">
          {/* page name */}
          <SectionHeader>About Us</SectionHeader>
          <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-5">
            <Image
              alt="about_us"
              src={aboutImg.about1}
              width={0}
              height={0}
              sizes="100vw"
              className="w-[400px] h-auto rounded-xl"
            />
            <Image
              alt="about_us"
              src={aboutImg.about2}
              width={0}
              height={0}
              sizes="100vw"
              className="w-[400px] h-auto rounded-xl"
            />
            <Image
              alt="about_us"
              src={aboutImg.about3}
              width={0}
              height={0}
              sizes="100vw"
              className="w-[400px] h-auto rounded-xl"
            />
          </div>
          <p className="sm:w-2/3 px-2 sm:px-8 text-center text-sm sm:text-lg">
            Welcome to Memorial Moments Magazine, where we celebrate life's
            treasured memories. Our magazine captures heartfelt stories and
            inspiring moments, honoring the past and embracing the present. Join
            us in creating a future filled with beautiful, unforgettable
            experiences. Explore our stories, share your own, and be inspired by
            the moments that make life extraordinary.
          </p>
        </div>
      </Container>
    </div>
  );
}
