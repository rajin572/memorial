"use client";
import {
  Button,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Select,
  Typography,
  Upload,
} from "antd";
import { CalendarOutlined, DownOutlined } from "@ant-design/icons";
import { CiLocationOn } from "react-icons/ci";
import { BiMessageDetail } from "react-icons/bi";
import Image from "next/image";
import React, { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { AllImages, storiesImg } from "../../../public/assets/AllImages";

const Profile = () => {
  const [isOnlyView, setIsOnlyView] = useState(true);
  const users = {
    profilePhoto: AllImages.profile,
    firstName: "Din Islam",
    lastName: "Rajin",
    gender: "Male",
    dob: "2002-02-02",
    email: "rajinm@gmail.com",
    city: "Dhaka",
    zipCode: "1203",
    country: "Bangladesh",
    aboutMe:
      "Alexander James Smith, a 24-year-old software engineer, holds a master's degree from London. Her passion for coding and problem-solving has driven her to excel in the tech industry. With a solid academic foundation and hands-on experience, she's a dynamic professional contributing innovative solutions to the ever-evolving world of software development.",
  };
  const props = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  const onFinish = (values) => {
    console.log("userUpdate:", values);
  };
  const toggleOnlyView = () => setIsOnlyView(!isOnlyView);
  return (
    <div>
      <div className="min-h-screen my-14 md:mt-20">
        <div className="flex flex-col sm:flex-row justify-between items-center ">
          <h1 className="text-secondary-color text-3xl md:text-3xl lg:text-4xl font-semibold mb-6 order-last sm:order-first">
            Add Profile Picture
          </h1>

          <div className="mb-10 sm:mb-0">
            {isOnlyView ? (
              <Button
                onClick={toggleOnlyView}
                type="primary"
                className="px-12  py-6 text-lg md:text-xl font-semibold bg-button-color border border-button-color text-site-color rounded-3xl shadow-inner shadow-[#00000040]"
              >
                Edit My Profile
              </Button>
            ) : (
              <Button
                onClick={toggleOnlyView}
                type="primary"
                className="px-12 py-6 text-lg md:text-xl font-semibold bg-base-color border border-primary-color text-primary-color rounded-3xl"
              >
                Undo Changes
              </Button>
            )}
          </div>
        </div>
        <ConfigProvider
          theme={{
            components: {
              Form: {
                labelFontSize: 16,
                labelColor: "rgb(243,243,243)",
              },
              Input: {
                colorTextPlaceholder: "rgb(0, 0, 0,0.5)",
              },
              Select: {
                colorBgContainer: "transparent",
                fontSize: 20,
                optionSelectedColor: "#010515",
                optionSelectedBg: "#3598F1",
                colorBorder: "rgb(0, 0, 0,0.5)",
                colorBgElevated: "#F3F3F3",
                selectorBg: "#F3F3F3",
                colorText: "#1A1A1A",
                colorTextPlaceholder: "rgb(0, 0, 0,0.5)",
                //   optionPadding: "12"
              },
              DatePicker: {
                fontSize: 20,
                colorBorder: "rgb(0, 0, 0,0.5)",
                colorTextPlaceholder: "rgb(0, 0, 0,0.5)",
              },
            },
          }}
        >
          <Form
            disabled={isOnlyView}
            onFinish={onFinish}
            layout="vertical"
            className="bg-transparent w-full"
          >
            <div className="flex flex-col sm:flex-row items-center gap-10">
              <Image
                src={AllImages.profile}
                alt="profile_img"
                width={0}
                height={0}
                sizes="100vw"
                className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] "
              />
              <div className="flex items-center flex-col">
                <p className="text-xl text-primary-color mb-7">
                  Maximum size 5mb. Format jpg, jpeg, png.
                </p>
                {isOnlyView ? (
                  ""
                ) : (
                  <Form.Item name="profileImage" className="text-white ">
                    <Upload {...props}>
                      <Button className="px-16 py-7 text-lg md:text-xl font-semibold bg-btn-secoundary text-primary-color hover:text-primary-color  border-primary-color hover:border-primary-color rounded-3xl">
                        Change Picture
                      </Button>
                    </Upload>
                  </Form.Item>
                )}
              </div>
            </div>
            <div className="mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center">
                {/*  First Name  */}
                <div>
                  <Typography.Title level={4} style={{ color: " #3598F1" }}>
                    First Name
                  </Typography.Title>
                  <Form.Item
                    initialValue={users.firstName}
                    name="firstName"
                    className="text-white "
                  >
                    <Input
                      placeholder="Enter your first name"
                      className="py-3 px-3 text-xl bg-transparent border-[#0000004d] text-primary-color hover:bg-base-color hover:border-primary-color focus:bg-base-color focus:border-primary-color"
                    />
                  </Form.Item>
                </div>
                {/*  Last Name  */}
                <div>
                  <Typography.Title level={4} style={{ color: " #3598F1" }}>
                    Last Name
                  </Typography.Title>
                  <Form.Item
                    initialValue={users.lastName}
                    name="lastName"
                    className="text-white "
                  >
                    <Input
                      placeholder="Enter your last name"
                      className="py-3 px-3 text-xl bg-transparent border-[#0000004d] text-primary-color hover:bg-base-color hover:border-primary-color focus:bg-base-color focus:border-primary-color"
                    />
                  </Form.Item>
                </div>
                {/*  Gender  */}
                <div>
                  <Typography.Title level={4} style={{ color: " #3598F1" }}>
                    Gender
                  </Typography.Title>
                  <Form.Item
                    initialValue={users.gender}
                    name="gender"
                    className="text-white "
                  >
                    <Select
                      placeholder="Select a shop type"
                      suffixIcon={
                        <DownOutlined className="text-[#1A1A1A] text-xl mt-1" />
                      }
                      className="h-14 border-base-color  hover:border-base-color focus:border-button-color"
                    >
                      <Select.Option value="male">Male</Select.Option>
                      <Select.Option value="female">Female</Select.Option>
                      <Select.Option value="others">Others</Select.Option>
                    </Select>
                  </Form.Item>
                </div>
                {/*  Date of Birth  */}
                <div>
                  <Typography.Title level={4} style={{ color: " #3598F1" }}>
                    Date of Birth
                  </Typography.Title>
                  <Form.Item
                    // initialValue={users.dob}
                    name="dob"
                    className="text-white "
                  >
                    <DatePicker
                      suffixIcon={
                        <CalendarOutlined className="text-[#1A1A1A] text-xl mt-1" />
                      }
                      placeholder="Enter your validity date"
                      className="w-full py-3 px-3 text-xl bg-transparent border-[#0000004d] text-primary-color hover:bg-base-color hover:border-primary-color focus:bg-base-color focus:border-primary-color"
                    />
                  </Form.Item>
                </div>
                {/*  Email  */}
                <div>
                  <Typography.Title level={4} style={{ color: " #3598F1" }}>
                    E-Mail
                  </Typography.Title>
                  <Form.Item
                    initialValue={users.email}
                    name="email"
                    className="text-white "
                  >
                    <Input
                      placeholder="Enter your email"
                      className="py-3 px-3 text-xl bg-transparent border-[#0000004d] text-primary-color hover:bg-base-color hover:border-primary-color focus:bg-base-color focus:border-primary-color"
                    />
                  </Form.Item>
                </div>
                {/*  City  */}
                <div>
                  <Typography.Title level={4} style={{ color: " #3598F1" }}>
                    City
                  </Typography.Title>
                  <Form.Item
                    initialValue={users.city}
                    name="city"
                    className="text-white "
                  >
                    <Input
                      placeholder="Enter your city"
                      className="py-3 px-3 text-xl bg-transparent border-[#0000004d] text-primary-color hover:bg-base-color hover:border-primary-color focus:bg-base-color focus:border-primary-color"
                    />
                  </Form.Item>
                </div>
                {/*  ZIP Code  */}
                <div>
                  <Typography.Title level={4} style={{ color: " #3598F1" }}>
                    Zip Code
                  </Typography.Title>
                  <Form.Item
                    initialValue={users.zipCode}
                    name="zipCode"
                    className="text-white "
                  >
                    <Input
                      placeholder="Enter your zip code"
                      className="py-3 px-3 text-xl bg-transparent border-[#0000004d] text-primary-color hover:bg-base-color hover:border-primary-color focus:bg-base-color focus:border-primary-color"
                    />
                  </Form.Item>
                </div>
                {/*  Country  */}
                <div>
                  <Typography.Title level={4} style={{ color: " #3598F1" }}>
                    Country
                  </Typography.Title>
                  <Form.Item
                    initialValue={users.country}
                    name="country"
                    className="text-white "
                  >
                    <Input
                      placeholder="Enter your country"
                      className="py-3 px-3 text-xl bg-transparent border-[#0000004d] text-primary-color hover:bg-base-color hover:border-primary-color focus:bg-base-color focus:border-primary-color"
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="mt-8">
                <Typography.Title level={3} style={{ color: " #3598F1" }}>
                  About Me
                </Typography.Title>
                <Form.Item
                  initialValue={users.aboutMe}
                  name="aboutMe"
                  className="text-white "
                >
                  <TextArea
                    rows={6}
                    placeholder="Write something about you"
                    className="py-3 px-3 text-xl bg-transparent border-[#0000004d] text-primary-color hover:bg-base-color hover:border-primary-color focus:bg-base-color focus:border-primary-color"
                  />
                </Form.Item>
              </div>
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
                    className="px-14 py-7 border border-btn-secoundary hover:border-btn-secoundary md:text-2xl text-[#1A1A1A] bg-btn-secoundary font-semibold rounded mt-5"
                    htmlType="submit"
                  >
                    Save Changes
                  </Button>
                </ConfigProvider>
              </Form.Item>
            </div>
          </Form>
        </ConfigProvider>
        <div className="my-20">
          <Typography.Title
            className="mb-5"
            level={2}
            style={{ color: " #3598F1" }}
          >
            Upload story
          </Typography.Title>
          <div className="flex items-center flex-wrap gap-5">
            <div className="max-w-md bg-base-color shadow-md rounded-lg overflow-hidden">
              <Image
                src={storiesImg.veterans.veterans1.src}
                alt="Military Officer"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-48 object-cover"
              />
              <div className="p-2">
                <div>
                  <BiMessageDetail className="ml-auto text-[#F6A56D] size-5" />
                </div>
                <h2 className="text-xl font-semibold text-primary-color">
                  William David Johnson
                </h2>
                <p className="text-primary-color text-sm flex items-center mt-2">
                  <CiLocationOn className="mr-1" />
                  Via Luigi Alamanni, 3, 50123 Firenze
                </p>
                <p className="text-primary-color mt-2">
                  August 25, 1996 to June 06, 2019
                </p>
              </div>
            </div>
            <div className="max-w-md bg-base-color shadow-md rounded-lg overflow-hidden">
              <Image
                src={storiesImg.pets.pet1.src}
                alt="Military Officer"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-48 object-cover"
              />
              <div className="p-2">
                <div>
                  <BiMessageDetail className="ml-auto text-[#F6A56D] size-5" />
                </div>
                <h2 className="text-xl font-semibold text-primary-color">
                  My Lovable Pet.
                </h2>
                <p className="text-primary-color text-sm flex items-center mt-2">
                  <CiLocationOn className="mr-1" />
                  Via Luigi Alamanni, 3, 50123 Firenze
                </p>
                <p className="text-primary-color mt-2">
                  August 25, 1996 to June 06, 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
