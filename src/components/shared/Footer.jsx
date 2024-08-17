import { Button, Divider, Space } from "antd";
import Image from "next/image";
import { AllIcons, AllImages } from "@/assets/AllImages";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#010515] text-base-color py-16">
      <div className="container w-[90%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          <div className="mb-20 lg:mb-0 lg:w-2/3">
            <Image
              src={AllImages.logo}
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-[200px] md:w-[250px] lg:w-[300px]"
            />
            <p className="text-gray-300 mt-4 text-lg lg:text-xl mb-12">
              Pay your rent through our program and earn valuable rewards. Enjoy
              benefits and incentives by simply making your regular payments.
              Sign up now to start reaping the rewards of our convenient and
              rewarding rent payment system.
            </p>
            <div className="flex justify-start items-center gap-2">
              <Button className=" text-start gap-1 py-8  md:w-[200px] bg-[#1A1A1A] border-none rounded-xl">
                <Image
                  src={AllIcons.playstore}
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
              <Button className=" text-start gap-1 py-8  md:w-[200px] bg-[#1A1A1A] border-none rounded-xl">
                <Image
                  src={AllIcons.apple}
                  alt="apple_store"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[20px] w-[20px]  md:h-[40px] md:w-[40px]"
                />
                <div>
                  <p className="text-xs text-base-color mb-1">
                    Download on the
                  </p>
                  <h1 className="text-base-color text-sm md:text-xl">
                    Apple Store
                  </h1>
                </div>
              </Button>
            </div>
          </div>
          <Divider
            type="vertical"
            style={{
              background: "linear-gradient(to right, #0085CA, #FD8112)",
              height: "350px",
              width: "4px",
            }}
            className="hidden lg:block rounded-lg ml-20"
          />
          <div className="lg:w-1/3 flex flex-col items-center justify-center ">
            <p className="font-bold text-2xl mb-2 ">Follow us on</p>
            <div className="flex space-x-4 mb-4">
              <div className="p-2 rounded-full bg-[#121212]">
                <Link href="#">
                  <Image
                    src={AllIcons.linkedin}
                    alt="play_store"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-[24px] w-[24px]"
                  />
                </Link>
              </div>
              <div className="p-2 rounded-full bg-[#121212]">
                <Link href="#">
                  <Image
                    src={AllIcons.facebook}
                    alt="play_store"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-[24px] w-[24px]"
                  />
                </Link>
              </div>
              <div className="p-2 rounded-full bg-[#121212]">
                <Link href="#">
                  <Image
                    src={AllIcons.twitter}
                    alt="play_store"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-[24px] w-[24px]"
                  />
                </Link>
              </div>
            </div>
            <div className="text-base-color text-xl mt-11">
              <p className="font-bold ">Contact us</p>
              <p>+48 661 120 494</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 ">
          <div className="border-t border-[#F3F3F3] mt-10"></div>
          <div className="flex flex-col lg:flex-row lg:justify-end lg:items-center gap-5 mt-10">
            <Link href="/about-us">
              <p className="text-base-color text-xl">About Us</p>
            </Link>
            <Link href="/privacy-policy">
              <p className="text-base-color text-xl">Privacy Policy</p>
            </Link>
            <Link href="/terms-of-use">
              <p className="text-base-color text-xl">Terms of Use</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
