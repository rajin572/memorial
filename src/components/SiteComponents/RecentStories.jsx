"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Badge, Card, Col, Row, Carousel, Button, ConfigProvider } from "antd";
import { CalendarOutlined, CommentOutlined } from "@ant-design/icons";
import Container from "../ui/Container";
import Link from "next/link";
import { CiBookmark, CiSquarePlus } from "react-icons/ci";
import SectionHeader from "../ui/SectionHeader";
import { useGetAllAcceptStoryQuery, useGetAllStoryQuery, useGetAllUserByStoryStatusStoryQuery } from "@/redux/api/storyApi/storyApi";
import { useGetStoryCommentCountQuery } from "@/redux/api/commentApi/commentApi";
import { imageGenerate } from "@/utils/imageGenerate";
import { useMyProfileQuery } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";

export default function RecentStories({ showAll, title, description, description2 }) {
  const { data: storyAcceptData, isLoading } = useGetAllAcceptStoryQuery();
  const { data: userData } = useMyProfileQuery(null);
  const { data: storyStatus } = useGetAllUserByStoryStatusStoryQuery(null);
  console.log('story status',storyStatus?.data?.status)

  // console.log('user Data', userData?.data);

  const navigate = useRouter();
  console.log("isPurchesPackage", userData?.data._id);
  const handleUploadStory = () => {
    if (userData?.data?._id) {
      console.log("userData?.data?.isPurchesPackage", userData?.data?.isPurchesPackage);
      navigate.push("/story-upload");
    } else {
      navigate.push("/pricing");
    }
  };

  // Function to truncate the description
  const truncateDescription = (desc) => {
    if (desc.length > 60) {
      return desc.substring(0, 90) + "...";
    }
    return desc;
  };

  if (isLoading) {
    return <div>Loading......</div>;
  }

  return (
    <div className="relative my-20 flex flex-col items-center gap-16">
      <Container>
        <SectionHeader>{title}</SectionHeader>

        <h1 className="text-medium md:text-2xl lg:text-3xl font-semibold text-center mt-10 mb-16">
          {description}
        </h1>
        <h1 className="text-medium text-lg sm:text-xl lg:text-2xl text-center mt-10 mb-16 w-full sm:w-[90%] md:w-[80%] lg:w-[80%] mx-auto">
          {description2}
        </h1>

        <div className="mx-auto relative">
          {!showAll ? (
            <Link href="/stories">
              <p className="text-xs sm:text-base text-end absolute right-4 -top-7 text-blue-600 cursor-pointer underline">
                View All
              </p>
            </Link>
          ) : (
            <>
            {
                storyStatus?.data?.status ? <><Button disabled
                type="primary"
                className="ml-auto mb-5 flex items-center gap-1 px-6 py-5 text-primary-color text-lg md:text-xl font-semibold bg-slate-200 border border-slate-200 text-site-color rounded-xl"
                
              >
                <CiSquarePlus className="text-primary-color" />
                Upload Story
              </Button></>:<><Link href="/story-upload">
              <Button
                type="primary"
                className="ml-auto mb-5 flex items-center gap-1 px-6 py-5 text-primary-color text-lg md:text-xl font-semibold bg-btn-secoundary border border-btn-secoundary text-site-color rounded-xl"
                onClick={handleUploadStory}
              >
                <CiSquarePlus className="text-primary-color" />
                Upload Story
              </Button>
            </Link></>
              }
            </>
              
              
          )}

          <Row gutter={[16, 16]} className="flex flex-wrap justify-center">
            {storyAcceptData?.data?.slice(0, showAll ? 9 : 3)?.map((story, index) => (
              <Col key={index} xs={24} sm={12} md={12} lg={8}>
                <Link href={`/stories/${story._id}`}>
                  <Card
                    className="relative overflow-hidden rounded-lg shadow-lg bg-[#F7F6FA] w-full h-full"
                    hoverable
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
                            {story?.storyImages?.map((img, i) => {
                              // const normalizedImage = `/${img.replace(/\\/g, '/')}`;
                              const normalizedImage = img.replace(/\\/g, "/");
                              const image = imageGenerate(normalizedImage);
                              // console.log(normalizedImage);
                              return (
                                <div key={i}>
                                  <Image
                                    src={image}
                                    alt={story.title}
                                    width={500}
                                    height={320}
                                    className="rounded-lg w-full h-60 lg:h-72 xl:h-80"
                                  />
                                </div>
                              );
                            })}
                          </Carousel>
                        </ConfigProvider>

                        {/* Overlay date badge */}
                        <Badge
                          count={
                            <div className="bg-[#C3E2FF] bg-opacity-90 p-1 rounded">
                              <CalendarOutlined className="mr-1" />
                              {new Date(story.dateOfBirth).toLocaleDateString()}
                            </div>
                          }
                          className="absolute top-2 right-2"
                        />
                      </div>
                    }
                  >
                    <div className="bg-[#F7F6FA] h-[200px] sm:h-[200px] md:h-[210px] lg:max-h-[230px] xl:h-[200px] flex flex-col justify-between items-start">
                      <div>
                        <div className="flex justify-start"> <p className="text-sm text-[#3598F1] font-semibold mr-2">Memorial_Moments#{story.storyCount}</p>
                        <p className="text-sm text-[#3598F1] font-semibold">#{story.category}</p></div>
                       
                        <h3 className="text-xl lg:text-2xl font-bold mb-1 text-primary-color">
                          {story.title}
                        </h3>
                        <p className="lg:text-lg mb-1 text-[#484848]">
                          {truncateDescription(story.storyText)}
                        </p>
                      </div>
                      <div className="flex flex-col justify-between w-full gap-1 lg:text-lg text-[#5C5F66]">
                        <div className="flex items-center">
                          <CommentOutlined className="mr-2" />
                          {story.commentCount} Comments
                        </div>
                        <div className="flex justify-between items-center">
                          <span>{story.storyText.split(" ").length} Words</span>
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
