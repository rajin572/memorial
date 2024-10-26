"use client";
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import { GiRank3 } from "react-icons/gi";
import { TbTopologyStarRing3 } from "react-icons/tb";
import { MdOutlineDateRange, MdOutlinePets } from "react-icons/md";
import { FaTransgender } from "react-icons/fa";
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { useGetSingleStoryQuery } from "@/redux/api/storyApi/storyApi";
import { audioUrlGenerate, imageGenerate } from "@/utils/imageGenerate";
import { format } from "date-fns";

const StoryDeatils = ({ id }) => {
  const { data: singleStory, isLoading, isError } = useGetSingleStoryQuery(id);

    const audioUrl = audioUrlGenerate(singleStory?.data?.selectedMusic?.musicPath);

    
    // Format date range
    const formatDateRange = (startDate, endDate) => {
        if (!startDate || !endDate) return "";

        const formattedStartDate = format(new Date(startDate), "dd-MM-yyyy");
        const formattedEndDate = format(new Date(endDate), "dd-MM-yyyy");

        return `${formattedStartDate} To ${formattedEndDate}`;
    };

    // Loading and error handling
    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if (isError) {
        return <div>Error loading story details</div>;
    }

  return (
    <div className="relative my-20">
      {/* Play background audio */}
      {/* <audio autoPlay loop controls src={audioUrlGenerate(singleStory?.data?.selectedMusic?.musicPath)} /> */}
      <audio
       autoPlay
       controls
       className="hidden"
       src={audioUrl}
    />


      {/* Dynamic shadow box */}
      <div
        style={{ boxShadow: "0px 0px 200px 90px #3598F188" }}
        className="absolute left-[-50%] sm:left-[-30%] md:left-[-25%] xl:left-[-23%] md:top-[5%] w-[20%] h-[40vh]"
      ></div>

      <Container>
        <SectionHeader>Published stories details</SectionHeader>

        <div className="mt-20">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-secondary-color font-semibold mb-16">
            {singleStory?.data.title}
          </h1>

          {/* Dynamic Image Gallery */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-5`}
          >
            {singleStory?.data?.storyImages.map((img, i) => (
              <Image
                key={i}
                src={imageGenerate(img)}
                alt={`story_image_${i}`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full sm:h-full"
              />
            ))}
          </div>

          <div className="mt-12">
            <p className="text-sm sm:text-base text-[#3598F1] font-semibold mb-4">
              #{singleStory.data.category}
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary-color font-semibold mb-5">
              {singleStory?.data?.heading}
            </h2>

            {/* Dynamic Info based on category */}
            <div>
              <p className="flex items-center gap-3 text-xl mb-3">
                <HiOutlineUser /> <span>{singleStory?.data?.name}</span>
              </p>
              <p className="flex items-center gap-3 text-xl mb-3">
                {singleStory?.data?.rank && (
                  <>
                    <GiRank3 />
                    <span>{singleStory.data.rank}</span>
                  </>
                )}
              </p>

              <p className="flex items-center gap-3 text-xl mb-3">
                {singleStory?.data?.rank && (
                  <>
                    <TbTopologyStarRing3 />
                    <span>{singleStory.data.serviceSector}</span>
                  </>
                )}
              </p>

              {/* Displaying date range */}
              <p className="flex items-center gap-3 text-xl mb-3">
                <MdOutlineDateRange />{" "}
                <span>
                  {formatDateRange(
                    singleStory?.data?.dateOfBirth,
                    singleStory?.data?.dateOfPassing
                  )}
                </span>
              </p>
            </div>

            {/* Story Text */}
            <p className="text-lg mt-10 text-justify">{singleStory?.data?.storyText}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StoryDeatils;
