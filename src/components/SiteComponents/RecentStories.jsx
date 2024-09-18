"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { stories as storiesData } from "../../../public/demoData/storiesData";
import { Badge, Card, Col, Row, Carousel, Button, ConfigProvider } from "antd";
import {
  CalendarOutlined,
  CommentOutlined,
  BookFilled,
} from "@ant-design/icons";
import Container from "../ui/Container";
import Link from "next/link";
import { CiBookmark, CiSquarePlus } from "react-icons/ci";
import SectionHeader from "../ui/SectionHeader";

export default function RecentStories({
  showAll,
  title,
  description,
  description2,
}) {
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
      return desc.substring(0, 50) + "...";
    }
    return desc;
  };

  return (
    <div className=" relative my-20 flex flex-col items-center gap-16">
      <div
        style={{
          boxShadow: "0px 0px 200px 90px #3598F188",
        }}
        className="absolute left-[-50%] sm:left-[-30%] md:left-[-25%] xl:left-[-23%] md:top-[5%] w-[20%] h-[40vh]"
      ></div>
      <Container>
        <SectionHeader>{title}</SectionHeader>

        <h1 className="text-medium md:text-2xl lg:text-3xl font-semibold text-center mt-10 mb-16">
          {description}
        </h1>
        <h1 className="text-medium text-lg sm:text-xl lg:text-2xl text-center mt-10 mb-16 w-full sm:w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
          {description2}
        </h1>

        <div className="mx-auto relative">
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
                <Link href="/stories/1">
                  <Card
                    className="relative overflow-hidden rounded-lg shadow-lg bg-[#F7F6FA] w-full h-full"
                    hoverable
                    // style={{ width: "100%", height: "500px" }}
                    cover={
                      <div className="relative">
                        <ConfigProvider
                          theme={{
                            components: {
                              Carousel: {
                                colorBgContainer: "#FFFFFF",
                                dotActiveWidth: 12,
                                dotHeight: 12,
                                dotWidth: 12,
                              },
                            },
                          }}
                        >
                          <Carousel autoplay>
                            {story.images.map((img, i) => (
                              <div key={i}>
                                <Image
                                  src={img}
                                  alt={story.title}
                                  width={0}
                                  height={0}
                                  style={{ objectFit: "cover" }}
                                  className="rounded-lg w-full h-60 lg:h-72 xl:h-80"
                                />
                              </div>
                            ))}
                          </Carousel>
                        </ConfigProvider>
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
                    <div className="bg-[#F7F6FA]  h-[200px] sm:h-[200px] md:h-[210px] lg:max-h-[230px] xl:h-[200px] flex flex-col justify-between items-start">
                      <div>
                        <p className="text-sm text-[#3598F1] font-semibold">
                          {story.tag}
                        </p>

                        <h3 className="text-xl lg:text-2xl font-bold mb-1 text-primary-color">
                          {story.title}
                        </h3>

                        <p className=" lg:text-lg mb-1 text-[#484848]">
                          {truncateDescription(story.desc)}
                        </p>
                      </div>
                      <div className="flex flex-col justify-between w-full gap-1 lg:text-lg text-[#5C5F66]">
                        <div className="flex items-center">
                          <CommentOutlined className="mr-1" />
                          {story.comments.length} Comments
                        </div>
                        <div className="flex justify-between items-center">
                          <span>{story.desc.split(" ").length} Words</span>
                          <p>
                            <CiBookmark size={20} />
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
}
