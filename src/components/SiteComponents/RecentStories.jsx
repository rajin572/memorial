"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { stories as storiesData } from "../../../public/demoData/storiesData";
import { Badge, Card, Col, Row } from "antd";
import {
  CalendarOutlined,
  CommentOutlined,
  BookFilled,
} from "@ant-design/icons";
import Meta from "antd/es/card/Meta";

export default function RecentStories({ showAll }) {
  const [stories, setStories] = useState([]);
  const [displayedStories, setDisplayedStories] = useState([]);

  useEffect(() => {
    setStories(storiesData);

    // Determine the number of stories to display
    if (showAll) {
      setDisplayedStories(storiesData);
    } else {
      setDisplayedStories(storiesData.slice(0, 3)); // Show only the first 3 stories
    }
  }, [showAll]);

  // Function to truncate the description
  const truncateDescription = (desc) => {
    if (desc.length > 60) {
      return desc.substring(0, 60) + "...";
    }
    return desc;
  };

  return (
    <div className="my-20 flex flex-col items-center gap-16">
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-8 items-center mx-auto">
        <div className="flex flex-col items-center md:items-end">
          <hr className="w-[60px] md:w-[120px] lg:w-[240px] md:mr-16 lg:mr-24 border-t-2 border-[#F6A56D]" />
          <hr className="w-[60px] md:w-[120px] lg:w-[240px] mt-1 sm:mt-2 md:mr-24 lg:mr-32 border-t-2 border-[#0259A9]" />
        </div>
        <p className="text-lg md:text-2xl lg:text-3xl font-bold text-center md:text-left">
          Recent Stories
        </p>
        <div className="flex flex-col items-center md:items-start">
          <hr className="w-[60px] md:w-[120px] lg:w-[240px] ml:12 md:ml-24 lg:ml-32 border-t-2 border-[#0259A9]" />
          <hr className="w-[60px] md:w-[120px] lg:w-[240px] mt-1 sm:mt-2 ml:12 md:ml-16 lg:ml-24 border-t-2 border-[#F6A56D]" />
        </div>
      </div>

      <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold text-center">
        Cherishing the Moments and Celebrating Lives Well Lived.
      </h1>
      <div className="w-4/5 relative">
        {/* stories data */}
        {!showAll && (
          <p className="text-xs sm:text-base text-end absolute right-4 -top-7 text-blue-600 cursor-pointer underline">
            View All
          </p>
        )}
        <Row gutter={[16, 16]} className="flex flex-wrap justify-center ">
          {displayedStories.map((story, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8}>
              <Card
                className="relative overflow-hidden rounded-lg shadow-lg bg-[#F7F6FA]"
                hoverable
                style={{ width: "100%", height: "600px" }}
                cover={
                  <div className="relative h-2/3">
                    <Image
                      src={story.img}
                      alt={story.title}
                      width={500}
                      height={450}
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                      // height={100}
                    />
                    {/* Overlay date badge */}
                    <Badge
                      count={
                        <div className="bg-[#C3E2FF] bg-opacity-90 p-1 rounded">
                          <CalendarOutlined className="mr-1" />
                          {story.date}
                        </div>
                      }
                      className="absolute top-2 right-2"
                    />
                  </div>
                }
              >
                <div className="bg-[#F7F6FA] p-3 h-1/3 flex flex-col justify-between gap-2">
                  <h3 className="text-lg font-bold mb-1">{story.title}</h3>
                  <p className="text-sm mb-1 text-[#625F68]">
                    {truncateDescription(story.desc)}
                  </p>
                  <div className="flex flex-col justify-between gap-1 text-sm text-gray-600">
                    <div className="flex items-center">
                      <CommentOutlined className="mr-1" />
                      {story.comments.length} Comments
                    </div>
                    <div className="flex justify-between items-center">
                      <span>{story.desc.split(" ").length} Words</span>
                      <p>
                        <BookFilled size={50} />
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
