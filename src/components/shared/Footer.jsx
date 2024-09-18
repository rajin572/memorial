/* eslint-disable react/no-unescaped-entities */
import { Button, Divider, Space } from "antd";
import Image from "next/image";
import { AllImages, allIcons } from "../../../public/assets/AllImages";
import Link from "next/link";

export default function Footer() {
  return (
    // <footer className="w-full bg-white text-black py-16">
    <div className="container w-[90%] mx-auto py-16">
      <div className="flex flex-col lg:flex-row justify-between items-start  mx-auto mb-12">
        {/* 1st */}
        <div className="mb-10 lg:mb-0 lg:w-2/3 flex flex-col ">
          <Image
            src={AllImages.logo}
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[150px] md:w-[150px] lg:w-[150px]"
          />
          <p className="text-[#1A1A1A] mt-4 sm:text-lg lg:text-xl mb-12 w-4/5">
            Memorial Moments Magazine celebrates life's treasured memories,
            capturing heartfelt stories and inspiring moments. Join us in
            honoring unforgettable experiences.
          </p>
          <div className="flex justify-start items-center gap-2">
            <Button className="text-start flex gap-2 py-8  md:w-[200px] bg-[#1A1A1A] border-none rounded-xl">
              <Image
                src={allIcons.playstore}
                alt="play_store"
                width={0}
                height={0}
                sizes="100vw"
                className="h-[20px] w-[20px] md:h-[40px] md:w-[40px]"
              />
              <div>
                <p className="text-xs text-base-color mb-1">Get it on</p>
                <h1 className="text-base-color text-sm md:text-xl">
                  Download App
                </h1>
              </div>
            </Button>
            <Button className="text-start flex gap-2 py-8  md:w-[200px] bg-[#1A1A1A] border-none rounded-xl">
              <Image
                src={allIcons.appleStore}
                alt="apple_store"
                width={0}
                height={0}
                sizes="100vw"
                className="h-[20px] w-[20px]  md:h-[40px] md:w-[40px]"
              />
              <div>
                <p className="text-xs text-base-color mb-1">Download on the</p>
                <h1 className="text-base-color text-sm md:text-xl">
                  Apple Store
                </h1>
              </div>
            </Button>
          </div>
        </div>

        {/* 2nd */}
        <div className="lg:w-1/3 flex flex-col gap-6 items-start lg:items-center justify-center lg:justify-start">
          <p className="font-semibold text-xl mb-2 text-[#037EEE] lg:-ml-4">
            Links
          </p>
          <div className="flex flex-col gap-6">
            <div>
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="about-us">About Us</Link>
            </div>
            <div>
              <Link href="stories">Stories</Link>
            </div>
            <div>
              <Link href="pricing">Pricing</Link>
            </div>
          </div>
        </div>

        {/* 3rd */}
        <div className="lg:w-1/3 flex flex-col gap-6 lg:items-center justify-start mt-6 lg:mt-0">
          <p className="font-semibold text-xl mb-2 text-[#037EEE]">
            Follow Us On
          </p>
          <div className="flex space-x-4 mb-4">
            <div className="p-2 rounded-full bg-[#E6F2FD]">
              <Link href="#">
                <Image
                  src={AllImages.linkedIn}
                  alt="play_store"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[24px] w-[24px]"
                />
              </Link>
            </div>
            <div className="p-2 rounded-full bg-[#E6F2FD]">
              <Link href="#">
                <Image
                  src={AllImages.facebook}
                  alt="play_store"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[24px] w-[24px]"
                />
              </Link>
            </div>
            <div className="p-2 rounded-full bg-[#E6F2FD]">
              <Link href="#">
                <Image
                  src={AllImages.insta}
                  alt="play_store"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[24px] w-[24px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 ">
        <div className="border-t border-[#1A1A1A] mt-10"></div>
        <div className="flex flex-col md:flex-row justify-between lg:justify-end lg:items-center gap-2 sm:gap-10 mt-4 sm:mt-10 text-sm sm:text-xl">
          <Link href="/about-us">
            <p className="text-[#1a1a1a7c]">About Us</p>
          </Link>
          <Link href="/privacy-policy">
            <p className="text-[#1a1a1a7c]">Privacy Policy</p>
          </Link>
          <Link href="/terms-of-use">
            <p className="text-[#1a1a1a7c]">Terms of Use</p>
          </Link>
        </div>
      </div>
    </div>
    // </footer>
  );
}
