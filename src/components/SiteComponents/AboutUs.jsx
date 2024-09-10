/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { Suspense } from "react";
import { aboutImg } from "../../../public/assets/AllImages";
import SectionHeader from "../ui/SectionHeader";
import Container from "../ui/Container";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export default function AboutUs() {
  return (
    <div className="my-12 sm:my-28 lg:mt-40">
      <Container>
        <div className="flex flex-col items-center gap-5 sm:gap-16">
          {/* page name */}
          <SectionHeader>About Us</SectionHeader>

          {/* 1st page section  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10">
            <div className="grid grid-cols-2 gap-1 sm:gap-2 w-full">
              <Suspense
                fallback={
                  <div className="w-full h-[400px] col-span-2 flex justify-center items-center">
                    <Spin indicator={<LoadingOutlined spin />} size="large" />
                  </div>
                }
              >
                <video autoPlay muted loop className="col-span-2 rounded-xl">
                  <source src="/assets/video/video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Suspense>

              <Image
                alt="about_us"
                src={aboutImg.lovedOne1}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[250px] rounded-xl"
              />
              <Image
                alt="about_us"
                src={aboutImg.lovedOne2}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[250px] rounded-xl"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center text-center">
              <h2 className=" text-2xl sm:text-3xl text-[#037EEE] font-medium mb-8 lg:text-4xl">
                Loved Ones
              </h2>
              <p className="w-full sm:w-[80%] lg:w-[80%] xl:w-[80%] text-lg sm:text-xl ">
                The Anderson family visited Grandpa Joe's grave, placing
                sunflowers as they remembered him. Mom wept, Dad comforted her,
                and Tommy and Emily reflected quietly. Dad reassured them,
                saying Grandpa would always remain in their hearts, never truly
                gone.
              </p>
            </div>
          </div>
          {/* 2nd page section  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10">
            <div className="grid grid-cols-2 gap-1 sm:gap-2 w-full">
              <video autoPlay muted loop className="col-span-2 rounded-xl">
                <source src="/assets/video/video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Image
                alt="about_us"
                src={aboutImg.aboutVeterans1}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[250px] rounded-xl"
              />
              <Image
                alt="about_us"
                src={aboutImg.aboutVeterans2}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[250px] rounded-xl"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center text-center order-last lg:order-first">
              <h2 className=" text-2xl sm:text-3xl text-[#037EEE] font-medium mb-8 lg:text-4xl">
                Veterans Memorial Moments
              </h2>
              <p className="w-full sm:w-[80%] lg:w-[80%] xl:w-[80%] text-lg sm:text-xl ">
                As the sun set, Lieutenant Johnson honored fallen comrades at
                the veteran's memorial. He traced the names etched in stone,
                memories of sacrifice flooding his mind. Placing a wreath, he
                vowed, "We will never forget," and the crowd silently agreed.
              </p>
            </div>
          </div>
          {/* 3rd page section  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10">
            <div className="grid grid-cols-2 gap-1 sm:gap-2 w-full">
              <video autoPlay muted loop className="col-span-2 rounded-xl">
                <source src="/assets/video/video3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Image
                alt="about_us"
                src={aboutImg.aboutPet1}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[250px] rounded-xl"
              />
              <Image
                alt="about_us"
                src={aboutImg.aboutPet2}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full max-h-[250px] rounded-xl"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-center text-center">
              <h2 className=" text-2xl sm:text-3xl text-[#037EEE] font-medium mb-8 lg:text-4xl">
                Pets Memorial Moments
              </h2>
              <p className="w-full sm:w-[80%] lg:w-[80%] xl:w-[80%] text-lg sm:text-xl ">
                As the sun set, Max lay peacefully on the rug, his soft
                breathing filling the room. His presence brought comfort, and
                his playful spirit always brightened your day. More than a pet,
                Max was your loyal companion and cherished friend.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
