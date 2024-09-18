/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Container from "../ui/Container";
import Image from "next/image";
import { userGuide } from "../../../public/assets/AllImages";
import SectionHeader from "../ui/SectionHeader";
import { useRouter } from "next/navigation";

const sections = [
  { id: "register", label: "Register" },
  { id: "subscription", label: "Subscription" },
  { id: "upload-story", label: "Upload Story" },
  { id: "broadcast-story", label: "Broadcast Story" },
];

const AboutApp = () => {
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
          <SectionHeader>User flow</SectionHeader>
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
              <Image
                src={userGuide.userGuideRegister}
                alt="userGuideRegister"
                width={0}
                height={0}
                sizes="100vw"
                className="h-[500px] w-[250px] md:w-[300px] md:h-[600px] lg:h-[600px] "
              />
              <p className="md:text-xl w-full md:w-[80%] lg:w-[70%] text-center">
                Welcome! Sign in to your account or sign up for a new one. Use
                OTP for secure access. Forgot your password? Update it easily.
                Join us today and enjoy a seamless experience.
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
                Subscribe to Memorable Moments Magazine and never miss an issue.
                Enjoy exclusive stories, timeless tributes, and heartwarming
                content delivered straight to your inbox. Join our community and
                keep your memories alive every month.
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
                Share your cherished memories with the world by uploading your
                story. Whether it's a heartfelt tribute or a special moment, let
                your words and photos preserve the memories that matter most to
                you.
              </p>
            </section>
            {/* Broadcast Story  */}
            <section
              id="broadcast-story"
              className="w-full flex flex-col justify-center items-center gap-10  py-20"
            >
              <Image
                src={userGuide.useGuideBroadcastStory}
                alt="useGuideBroadcastStory"
                width={0}
                height={0}
                sizes="100vw"
                className="h-[500px] w-[250px] md:w-[300px] md:h-[600px] lg:h-[600px] "
              />
              <p className="md:text-xl w-full md:w-[80%] lg:w-[70%] text-center">
                Welcome! Sign in to your account or sign up for a new one. Use
                OTP for secure access. Forgot your password? Update it easily.
                Join us today and enjoy a seamless experience.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutApp;
