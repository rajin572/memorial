"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { stories as storiesData } from "../../../public/demoData/storiesData";
import { Badge, Card, Col, Row, Carousel, Button } from "antd";
import {
  CalendarOutlined,
  CommentOutlined,
  BookFilled,
} from "@ant-design/icons";
import Container from "../ui/Container";
import Link from "next/link";
import { CiSquarePlus } from "react-icons/ci";

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
      <Container>
        <div className="flex justify-center flex-row gap-1 sm:gap-2 items-center mx-auto">
          <div className="flex flex-col items-center md:items-end">
            <hr className="w-[60px] md:w-[100px] mr-10 md:mr-14 border-t-2 border-[#F6A56D]" />
            <hr className="w-[60px] md:w-[100px] mt-1 md:mr-5 border-t-2 border-[#0259A9]" />
          </div>
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center md:text-left">
            Recent Stories
          </p>
          <div className="flex flex-col items-center md:items-start">
            <hr className="w-[60px] md:w-[100px] ml-10 md:ml-14 border-t-2 border-[#0259A9]" />
            <hr className="w-[60px] md:w-[100px] mt-1 md:ml-5 border-t-2 border-[#F6A56D]" />
          </div>
        </div>

        <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold text-center mt-10 mb-16">
          Cherishing the Moments and Celebrating Lives Well Lived.
        </h1>

        <div className="w-[90%] mx-auto relative">
          {/* stories data */}
          {!showAll ? (
            <Link href="/stories">
              <p className="text-xs sm:text-base text-end absolute right-4 -top-7 text-blue-600 cursor-pointer underline">
                View All
              </p>
            </Link>
          ) : (
            <Link href="/story-upload">
              <Button
                type="primary"
                className="ml-auto mb-5 flex items-center gap-1 px-6 py-5 text-primary-color text-lg md:text-xl font-semibold bg-btn-secoundary border border-btn-secoundary text-site-color rounded-xl"
              >
                <CiSquarePlus className="text-primary-color" />
                Upload Story
              </Button>
            </Link>
          )}
          <Row gutter={[16, 16]} className="flex flex-wrap justify-center ">
            {displayedStories.map((story, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={8}>
                <Card
                  className="relative overflow-hidden rounded-lg shadow-lg bg-[#F7F6FA]"
                  hoverable
                  style={{ width: "100%", height: "500px" }}
                  cover={
                    <div className="relative h-2/3">
                      <Carousel autoplay>
                        {story.images.map((img, i) => (
                          <div key={i}>
                            <Image
                              src={img}
                              alt={story.title}
                              width={500}
                              height={450}
                              style={{ objectFit: "cover" }}
                              className="rounded-lg"
                            />
                          </div>
                        ))}
                      </Carousel>
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
                  <div className="bg-[#F7F6FA] h-1/3 flex flex-col justify-between gap-2">
                    <Link href="/stories/1">
                      <h3 className="text-lg font-bold mb-1">{story.title}</h3>
                    </Link>
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
      </Container>
    </div>
  );
}
