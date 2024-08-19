"use client";
/* eslint-disable react/no-unescaped-entities */
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { PiUploadSimpleBold } from "react-icons/pi";
import React, { useState } from "react";
import {
  Button,
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
  CalendarOutlined,
  DownOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const UploadStory = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [category, setCategory] = useState("pet");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    console.log("story:", values);
  };
  const onChange = (value) => {
    setCategory(value);
  };
  return (
    <div className="my-20">
      <Container>
        <SectionHeader>Published stories</SectionHeader>
        <p className="text-2xl text-center lg:w-[80%] mx-auto mt-10">
          Discover a world of unforgettable experiences with Memorable Moments
          Magazine. Our stories capture the essence of life's most extraordinary
          moments, inspiring, touching, and delighting readers everywhere.
        </p>
        <div className="mt-20">
          <div
            onClick={showModal}
            className="flex flex-col items-center text-center justify-center w-48 h-64 border-2 border-dashed border-[#00000080] rounded-lg cursor-pointer hover:border-primary-color"
          >
            <PiUploadSimpleBold className="size-10 text-primary-color" />
            <p className="mt-4 text-primary-color font-semibold text-2xl">
              Upload
            </p>
          </div>
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
          className="!p-10 !rounded-lg"
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
              <Form.Item name="category">
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
                  style={{ width: "100%" }}
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
                Date of Death
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
