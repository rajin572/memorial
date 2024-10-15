"use client";
/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { PiUploadSimpleBold } from "react-icons/pi";
import React, { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Carousel,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Typography,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import {
  BookFilled,
  CalendarOutlined,
  CommentOutlined,
  DownOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Link from "next/link";

import Image from "next/image";
import { storiesImg } from "../../../public/assets/AllImages";
import { CiBookmark } from "react-icons/ci";

const story = {
  title: "My Beloved Grandpa",
  tag: "Memorial_Moments#15",
  images: [
    storiesImg.beloved.beloved1,
    storiesImg.beloved.beloved2,
    storiesImg.beloved.beloved3,
  ],
  date: "2024-08-01",
  desc: "A family that are going to the cemetery for their family person.",
  comments: [
    { user: "JohnDoe", text: "Amazing story!" },
    { user: "JaneSmith", text: "Loved the twist at the end." },
  ],
};

const UploadStory = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [category, setCategory] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {};
  const onChange = (value) => {
    setCategory(value);
  };

  const truncateDescription = (desc) => {
    if (desc.length > 60) {
      return desc.substring(0, 60) + "...";
    }
    return desc;
  };

  return (
    <div className="relative my-20">
      <div
        style={{
          boxShadow: "0px 0px 200px 90px #3598F188",
        }}
        className="absolute left-[-50%] sm:left-[-30%] md:left-[-25%] xl:left-[-23%] md:top-[5%] w-[20%] h-[40vh]"
      ></div>
      <Container>
        <SectionHeader>Published stories</SectionHeader>
        <p className="text-2xl text-center lg:w-[80%] mx-auto mt-10">
          Discover a world of unforgettable experiences with Memorable Moments
          Magazine. Our stories capture the essence of life's most extraordinary
          moments, inspiring, touching, and delighting readers everywhere.
        </p>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-center gap-5">
          <div
            onClick={showModal}
            className="flex flex-col items-center text-center justify-center h-full border-2 border-dashed border-[#00000080] rounded-lg cursor-pointer hover:border-primary-color w-full"
          >
            <PiUploadSimpleBold className="size-10 text-primary-color" />
            <p className="mt-4 text-primary-color font-semibold text-2xl">
              Upload
            </p>
          </div>
          <Card
            className="relative overflow-hidden rounded-lg shadow-lg bg-[#F7F6FA] w-full "
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
                <Link href="/stories/1">
                  <h3 className="text-xl lg:text-2xl font-bold mb-1 text-primary-color">
                    {story.title}
                  </h3>
                </Link>
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
        </div>
      </Container>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "#E6F2FD",
              headerBg: "#E6F2FD",
            },
            Input: {
              colorTextPlaceholder: "#3A3A3A",
            },
            Select: {
              colorBgContainer: "transparent",
              fontSize: 16,
              optionSelectedColor: "#010515",
              optionSelectedBg: "#3598F1",
              colorBorder: "rgb(0, 0, 0,0.5)",
              colorBgElevated: "#F3F3F3",
              selectorBg: "transparent",
              colorText: "#1A1A1A",
              colorTextPlaceholder: "#3A3A3A",
              //   optionPadding: "12"
            },
            DatePicker: {
              fontSize: 16,
              colorBorder: "rgb(0, 0, 0,0.5)",
              colorTextPlaceholder: "#3A3A3A",
            },
          },
        }}
      >
        <Modal
          open={isModalVisible}
          onCancel={handleClose}
          width={800}
          footer={null}
          centered
          className="!sm:p-10 !rounded-lg"
        >
          <Form
            onFinish={onFinish}
            layout="vertical"
            className="bg-transparent p-4 w-full mt-10"
          >
            {/* Category  */}
            <div>
              <Typography.Title level={5} style={{ color: "#010515" }}>
                Category
              </Typography.Title>
              <Form.Item required={true} name="category">
                <Select
                  onChange={onChange}
                  placeholder="Create story"
                  suffixIcon={
                    <DownOutlined className="text-[#1A1A1A] text-xl mt-1" />
                  }
                  className="h-10 border-[#0000004d]  hover:border-primary-color focus:border-primary-color"
                >
                  <Select.Option value="lovedOnes">Loved Ones</Select.Option>
                  <Select.Option value="veteran">
                    Veterans Memorial Moments
                  </Select.Option>
                  <Select.Option value="pet">
                    Pets Memorial Moments
                  </Select.Option>
                </Select>
              </Form.Item>
            </div>
            {/* Title  */}
            <div>
              <Typography.Title level={5} style={{ color: "#010515" }}>
                Title
              </Typography.Title>
              <Form.Item name="title">
                <Input
                  placeholder="Title"
                  className="py-2 px-3 bg-transparent border-[#0000004d] text-primary-color hover:bg-transparent hover:border-primary-color focus:bg-transparent focus:border-primary-color"
                />
              </Form.Item>
            </div>
            {/* Heading  */}
            <div>
              <Typography.Title level={5} style={{ color: "#010515" }}>
                Heading
              </Typography.Title>
              <Form.Item name="heading">
                <Input
                  placeholder="Heading"
                  className="py-2 px-3 bg-transparent border-[#0000004d] text-primary-color hover:bg-transparent hover:border-primary-color focus:bg-transparent focus:border-primary-color"
                />
              </Form.Item>
            </div>
            {/* Name  */}
            <div>
              <Typography.Title level={5} style={{ color: "#010515" }}>
                Name
              </Typography.Title>
              <Form.Item name="name">
                <Input
                  placeholder="name"
                  className="py-2 px-3 bg-transparent border-[#0000004d] text-primary-color hover:bg-transparent hover:border-primary-color focus:bg-transparent focus:border-primary-color"
                />
              </Form.Item>
            </div>
            {/* Iamges  */}
            <div>
              <Typography.Title level={5} style={{ color: "#010515" }}>
                Images
              </Typography.Title>
              <Form.Item name="images" className="text-white ">
                <Upload
                  // style={{ width: "100%" }}
                  action="/upload.do"
                  listType="picture-card"
                >
                  <button
                    className="p-5"
                    style={{
                      border: 0,
                      background: "none",
                    }}
                    type="button"
                  >
                    <PlusOutlined className="text-primary-color text-3xl" />
                    <p className="text-primary-color">Upload Images</p>
                  </button>
                </Upload>
              </Form.Item>
            </div>
            {category === "veteran" ? (
              <>
                <div>
                  <Typography.Title level={5} style={{ color: "#010515" }}>
                    Designation
                  </Typography.Title>
                  <Form.Item name="designation">
                    <Input
                      placeholder="Designation"
                      className="py-2 px-3 bg-transparent border-[#0000004d] text-primary-color hover:bg-transparent hover:border-primary-color focus:bg-transparent focus:border-primary-color"
                    />
                  </Form.Item>
                </div>
                <div>
                  <Typography.Title level={5} style={{ color: "#010515" }}>
                    Force
                  </Typography.Title>
                  <Form.Item name="force">
                    <Input
                      defaultValue="Military"
                      value="military"
                      disabled
                      placeholder="Force"
                      className="py-2 px-3 bg-transparent border-[#0000004d] text-primary-color hover:bg-transparent hover:border-primary-color focus:bg-transparent focus:border-primary-color"
                    />
                  </Form.Item>
                </div>
              </>
            ) : category === "pet" ? (
              <>
                <div>
                  <Typography.Title level={5} style={{ color: "#010515" }}>
                    Breed
                  </Typography.Title>
                  <Form.Item name="breed">
                    <Input
                      placeholder="Breed Name"
                      className="py-2 px-3 bg-transparent border-[#0000004d] text-primary-color hover:bg-transparent hover:border-primary-color focus:bg-transparent focus:border-primary-color"
                    />
                  </Form.Item>
                </div>
                <div>
                  <Typography.Title level={5} style={{ color: "#010515" }}>
                    Gender
                  </Typography.Title>
                  <Form.Item name="gender">
                    <Select
                      placeholder="Select Gender"
                      suffixIcon={
                        <DownOutlined className="text-[#1A1A1A] text-xl mt-1" />
                      }
                      className="h-10 border-[#0000004d]  hover:border-primary-color focus:border-primary-color"
                    >
                      <Select.Option value="male">Male</Select.Option>
                      <Select.Option value="female">Female</Select.Option>
                      <Select.Option value="others">Others</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
              </>
            ) : (
              ""
            )}
            {/* Date of Birth  */}
            <div>
              <Typography.Title level={5} style={{ color: "#010515" }}>
                Date of Birth
              </Typography.Title>
              <Form.Item name="dateOfBirth" className="text-white ">
                <DatePicker
                  suffixIcon={
                    <CalendarOutlined className="text-[#1A1A1A] mt-1" />
                  }
                  placeholder="Date of Birth"
                  className="w-full py-2 px-3 bg-transparent border-[#0000004d] text-primary-color hover:bg-transparent hover:border-primary-color focus:bg-transparent focus:border-primary-color"
                />
              </Form.Item>
            </div>
            {/* Date of Death  */}
            <div>
              <Typography.Title level={5} style={{ color: "#010515" }}>
                Date of Passing
              </Typography.Title>
              <Form.Item name="dateOfDeath" className="text-white ">
                <DatePicker
                  suffixIcon={
                    <CalendarOutlined className="text-[#1A1A1A] mt-1" />
                  }
                  placeholder="Date of Death"
                  className="w-full py-2 px-3 bg-transparent border-[#0000004d] text-primary-color hover:bg-transparent hover:border-primary-color focus:bg-transparent focus:border-primary-color"
                />
              </Form.Item>
            </div>
            {/* Story  */}
            <div>
              <Typography.Title level={5} style={{ color: "#010515" }}>
                Story
              </Typography.Title>
              <Form.Item name="story" className="text-white ">
                <TextArea
                  rows={4}
                  placeholder="Write your story... "
                  className="py-2 px-3 bg-transparent border-[#0000004d] text-primary-color hover:bg-transparent hover:border-primary-color focus:bg-transparent focus:border-primary-color"
                />
              </Form.Item>
            </div>
            <div>
              <Typography.Title level={5} style={{ color: "#010515" }}>
                Select Music
              </Typography.Title>
              <Form.Item required={true} name="music">
                <Select
                  onChange={onChange}
                  placeholder="Select Music"
                  suffixIcon={
                    <DownOutlined className="text-[#1A1A1A] text-xl mt-1" />
                  }
                  className="h-10 border-[#0000004d]  hover:border-primary-color focus:border-primary-color"
                >
                  <Select.Option value="amazingGrace">
                    Amazing Grace
                  </Select.Option>
                  <Select.Option value="howGreatThouArt">
                    How Great Thou Art
                  </Select.Option>
                  <Select.Option value="swingLowSweetChariot">
                    Swing Low Sweet Chariot
                  </Select.Option>
                </Select>
              </Form.Item>
            </div>
            <div className="mt-5">
              <Form.Item>
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        defaultHoverBg: "#3598F1",
                        defaultHoverColor: "#1A1A1A",
                      },
                    },
                  }}
                >
                  <Button
                    className="w-full py-5 border border-btn-secoundary hover:border-btn-secoundary md:text-lg text-[#1A1A1A] bg-btn-secoundary font-semibold rounded"
                    htmlType="submit"
                  >
                    Upload Story
                  </Button>
                </ConfigProvider>
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </ConfigProvider>
    </div>
  );
};

export default UploadStory;
