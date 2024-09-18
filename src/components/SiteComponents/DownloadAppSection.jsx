import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { Button } from "antd";
import { allIcons, AllImages } from "../../../public/assets/AllImages";

const DownloadAppSection = () => {
  return (
    <div className="py-40 bg-[#C3E2FF]">
      <Container className="max-w-[1450px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-x-10 items-end">
          <div className="justify-self-center lg:justify-self-start xl:col-span-3">
            <Image
              src={AllImages.dualSmartPhone}
              alt="play_store"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[300px] md:h-[450px] lg:h-[500px] xl:h-[600px] w-[400px] md:w-[500px]  lg:w-[800px]"
            />
          </div>
          <div className="text-center lg:justify-self-start mt-10 lg:mt-0 xl:col-span-2">
            <h2 className="text-secondary-color text-3xl md:text-4xl xl:text-5xl font-bold mb-7">
              Relive Your Greatest Moments
            </h2>
            <p className="text-primary-color md:text-lg">
              Experience the joy of revisiting your most cherished memories. Our
              platform allows you to relive and celebrate your greatest moments,
              preserving them for you to enjoy forever.
            </p>
            <Button
              type="primary"
              className="mt-10 mb-8 px-10 py-7 text-lg md:text-2xl bg-btn-primary border-none text-base-color font-bold rounded-3xl shadow-inner shadow-[#ffffff40]"
            >
              Download App
            </Button>
            <div className="flex justify-center items-center gap-2">
              <Button className=" text-start gap-1 py-8  md:w-[200px] bg-[#1A1A1A] border-none rounded-xl">
                <Image
                  src={allIcons.playstore}
                  alt="play_store"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px] md:h-[40px] md:w-[40px]"
                />
                <div>
                  <p className="text-xs text-base-color mb-1">Get it on</p>
                  <h1 className="text-base-color text-sm sm:text-lg md:text-xl">
                    Download App
                  </h1>
                </div>
              </Button>
              <Button className=" text-start gap-1 py-8  md:w-[200px] bg-[#1A1A1A] border-none rounded-xl">
                <Image
                  src={allIcons.appleStore}
                  alt="apple_store"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px] md:h-[40px] md:w-[40px]"
                />
                <div>
                  <p className="text-xs text-base-color mb-1">
                    Download on the
                  </p>
                  <h1 className="text-base-color text-sm sm:text-lg md:text-xl">
                    Apple Store
                  </h1>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DownloadAppSection;
