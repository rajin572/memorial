/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Container from "../ui/Container";
import Image from "next/image";
import { userGuide } from "../../../public/assets/AllImages";
import SectionHeader from "../ui/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import required modules
import { EffectFade, Autoplay } from "swiper/modules";
import { useTranslations } from "next-intl";



const registerSliderImages = [
  { img: userGuide.register1 },
  { img: userGuide.register2 },
  { img: userGuide.register3 },
  { img: userGuide.register4 },
  { img: userGuide.register5 },
  { img: userGuide.register6 },
  { img: userGuide.register7 },
];
// const practiceRegisterSliderImages = [
//   { img: userGuide.userGuideRegister },
//   { img: userGuide.userGuideRegister },
//   { img: userGuide.userGuideRegister },
//   { img: userGuide.userGuideRegister },
// ];
const broadcastStorySliderImages = [
  { img: userGuide.broadcastStory1 },
  { img: userGuide.broadcastStory2 },
  { img: userGuide.broadcastStory3 },
];
// const practiceBroadcastStorySliderImages = [
//   { img: userGuide.useGuideBroadcastStory },
//   { img: userGuide.useGuideBroadcastStory },
//   { img: userGuide.useGuideBroadcastStory },
//   { img: userGuide.useGuideBroadcastStory },
// ];

const AboutApp = () => {
   const t = useTranslations("AbouteApp")
  const sections = [
    { id: "register", label: t("register") },
    { id: "subscription", label: t("subscription")},
    { id: "upload-story", label: t("upload-story") },
    { id: "broadcast-story", label: t("broadcast-story") },
  ];
  
  const [activeSection, setActiveSection] = useState(sections[0].id);
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // viewport
      threshold: 0.9, // When 90% of the section is visible
    });

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="text-[#F4F6FC]">
      <Container>
        <div className="mt-16">
          <SectionHeader>{t("heading")}</SectionHeader>
        </div>
        <div className="flex flex-col lg:flex-row relative my-28 ">
          <div className="flex-shrink-0 lg:w-1/5 py-5 ">
            <nav className="space-y-4 sticky lg:top-52 lg:mt-10 lg:mb-60 border-l border-primary-color py-8">
              {sections.map((section) => (
                <div className="-ml-[6px]  flex items-center" key={section.id}>
                  <span
                    className={classNames(
                      "h-3 w-3 rounded-full bg-[#F48E48]",
                      activeSection === section.id ? "block" : "hidden"
                    )}
                  ></span>
                  <a
                    href={`#${section.id}`}
                    className={classNames(
                      "block text-lg font-semibold ps-10",
                      activeSection === section.id
                        ? "text-secondary-color ps-8 transition ease-in-out scale-110"
                        : "text-primary-color"
                    )}
                  >
                    {section.label}
                  </a>
                </div>
              ))}
            </nav>
          </div>
          <div className="text-primary-color flex-grow flex flex-col w-full gap-y-28 mt-16 lg:mt-0">
            {/* Register  */}
            <section
              id="register"
              className="w-full flex flex-col justify-center items-center gap-10  py-20"
            >
              <div
                className="relative h-[520px] w-[250px] sm:w-[300px] sm:h-[620px] lg:h-[620px] p-10  flex justify-center items-center overflow-hidden gap-0 select-none"
                style={{
                  backgroundImage: `url(${userGuide.casing.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Swiper
                  spaceBetween={0}
                  draggable={false}
                  effect={"fade"}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[EffectFade, Autoplay]}
                  className="mySwiper absolute sm:top-[15px] sm:left-[12px] h-[96%] w-[93%] sm:h-[95%] sm:w-[92%] rounded-[36px] sm:rounded-[40px] bg-[#C3E2FE]"
                >
                  {registerSliderImages.map((img, i) => (
                    <SwiperSlide
                      // className="w-full flex justify-center items-center gap-0"
                      key={i}
                    >
                      <Image
                        src={img.img}
                        alt="userGuideRegister"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-full w-full"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {/* Practice  */}
              {/* <Swiper
                spaceBetween={0}
                draggable={false}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper h-[500px] w-[250px] md:w-[300px] md:h-[600px] lg:h-[600px] "
              >
                {practiceRegisterSliderImages.map((img, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={img.img}
                      alt="userGuideRegister"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-full w-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper> */}
              {/* Practice  */}

              <p className="md:text-xl w-full md:w-[80%] lg:w-[70%] text-center">
              {t("details1")}
              </p>
            </section>
            {/* Subscription   */}
            <section
              id="subscription"
              className="w-full flex flex-col justify-center items-center gap-10  py-20"
            >
              <Image
                src={userGuide.useGuideSubscription}
                alt="useGuideSubscription"
                width={0}
                height={0}
                sizes="100vw"
                className="h-[300px] w-[500px] md:w-[750px] md:h-[500px] lg:h-[500px] "
              />
              <p className="md:text-xl w-full md:w-[80%] lg:w-[70%] text-center">
              {t("details2")}
              </p>
            </section>
            {/* Upload Story  */}
            <section
              id="upload-story"
              className="w-full flex flex-col justify-center items-center gap-10  py-20"
            >
              <Image
                src={userGuide.useGuideUploadStory}
                alt="useGuideUploadStory"
                width={0}
                height={0}
                sizes="100vw"
                className="h-[300px] w-[500px] md:w-[750px] md:h-[500px] lg:h-[500px] "
              />
              <p className="md:text-xl w-full md:w-[80%] lg:w-[70%] text-center">
              {t("details3")}
              </p>
            </section>
            {/* Broadcast Story  */}
            <section
              id="broadcast-story"
              className="w-full flex flex-col justify-center items-center gap-10  py-20"
            >
              {/* Practice  */}
              {/* <Swiper
                spaceBetween={0}
                draggable={false}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper h-[500px] w-[250px] md:w-[300px] md:h-[600px] lg:h-[600px]"
              >
                {practiceBroadcastStorySliderImages.map((img, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      src={img.img}
                      alt="userGuideRegister"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-full w-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper> */}
              {/* Practice  */}
              <div>
                <div
                  className="relative h-[520px] w-[250px] sm:w-[300px] sm:h-[620px] lg:h-[620px] p-10  flex justify-center items-center overflow-hidden gap-0 select-none"
                  style={{
                    backgroundImage: `url(${userGuide.casing.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Swiper
                    spaceBetween={0}
                    draggable={true}
                    effect={"fade"}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    modules={[EffectFade, Autoplay]}
                    className="mySwiper absolute sm:top-[15px] sm:left-[12px] h-[96%] w-[93%] sm:h-[95%] sm:w-[92%] rounded-[36px] sm:rounded-[40px] bg-[#C3E2FE]"
                  >
                    {broadcastStorySliderImages.map((img, i) => (
                      <SwiperSlide key={i}>
                        <Image
                          src={img.img}
                          alt="userGuideRegister"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="h-full w-full"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              <p className="md:text-xl w-full md:w-[80%] lg:w-[70%] text-center">
              {t("details4")}
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutApp;
