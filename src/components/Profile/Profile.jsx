"use client";
import {
  Badge,
  Button,
  Card,
  Carousel,
  Col,
  ConfigProvider,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Typography,
  Upload,
} from "antd";
import { CalendarOutlined, CommentOutlined, DownOutlined } from "@ant-design/icons";
import { CiLocationOn } from "react-icons/ci";
import { BiMessageDetail } from "react-icons/bi";
import Image from "next/image";
import React, { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { AllImages, storiesImg } from "../../../public/assets/AllImages";
import {
  useMyProfileQuery,
  useUpdateMyProfileMutation,
  useUpdateMyProfileQuery,
} from "@/redux/api/authApi";
import { toast } from "sonner";
import { useGetAllStoryQuery } from "@/redux/api/storyApi/storyApi";
import Link from "next/link";
import { imageGenerate } from "@/utils/imageGenerate";

const Profile = () => {
  const [isOnlyView, setIsOnlyView] = useState(true);
  const { data: profileData, error, isLoading } = useMyProfileQuery();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [updateProfile, { isLoading: isUpdating }] = useUpdateMyProfileMutation();
  const { data: storyPendingData } = useGetAllStoryQuery("pending");
  const { data: storyAcceptData } = useGetAllStoryQuery("accept");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    toast.error("Failed to load profile!");
    return <div>Error loading profile</div>;
  }

  console.log(profileData?.data);

  const onFinish = async (values) => {
    console.log(values);

    // Create a FormData object to hold the form fields and file
    const formData = new FormData();

    // Append text fields and file to FormData
    formData.append("fullName", values.fullName); // Append full name
    formData.append("image", values?.image?.file?.originFileObj); // Append image file

    const toastId = toast.loading("Submitting...");

    try {
      // Pass the FormData object directly to the updateProfile mutation
      const res = await updateProfile(formData).unwrap();
      console.log("Response from updateProfile:", res);

      if (res.success) {
        toast.success(res.message, {
          id: toastId,
          duration: 2000,
        });
      }
      setIsOnlyView(true);
    } catch (error) {
      toast.error(
        error?.data?.message || error?.error || "An error occurred while updating the profile",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };

  const handleImageUpload = (info) => {
    if (info.file.status === "removed") {
      setUploadedImage(null); // Reset to null or fallback image
    } else {
      const file = info.file.originFileObj;
      if (file) {
        setUploadedImage(URL.createObjectURL(file)); // Set new uploaded image
      }
    }
  };
  const toggleOnlyView = () => setIsOnlyView(!isOnlyView);

  const truncateDescription = (desc) => {
    if (desc.length > 60) {
      return desc.substring(0, 90) + "...";
    }
    return desc;
  };
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
              <div className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px]  rounded-full border-2 border-btn-secoundary overflow-hidden">
                <Image
                  src={
                    uploadedImage || "http://192.168.10.205:8000/".concat(profileData?.data?.image)
                  }
                  alt="profile_img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[150px] w-[150px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] object-cover"
                />
              </div>
              <div className="flex flex-col">
                {isOnlyView ? (
                  ""
                ) : (
                  <>
                    <p className="text-xl text-primary-color mb-7">
                      Maximum size 5mb. Format jpg, jpeg, png.
                    </p>
                    <Form.Item name="image" className="text-white ">
                      <Upload onChange={handleImageUpload}>
                        <Button className="px-16 py-7 text-lg md:text-xl font-semibold bg-btn-secoundary text-primary-color hover:text-primary-color  border-primary-color hover:border-primary-color rounded-3xl">
                          Change Picture
                        </Button>
                      </Upload>
                    </Form.Item>
                  </>
                )}
              </div>
            </div>
            <div className="mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                {/*  First Name  */}
                <div>
                  <Typography.Title level={4} style={{ color: " #3598F1" }}>
                    Full Name
                  </Typography.Title>
                  <Form.Item
                    initialValue={profileData?.data?.fullName}
                    name="fullName"
                    className="text-white "
                  >
                    <Input
                      placeholder="Enter your first name"
                      className={`py-3 px-3 text-xl text-primary-color  focus:bg-base-color focus:border-primary-color ${
                        isOnlyView
                          ? "!bg-[#F1F1F1] border-none"
                          : "!bg-transparent border !border-[#0000004d]"
                      }`}
                    />
                  </Form.Item>
                </div>

                {/*  Email  */}
                <div>
                  <Typography.Title level={4} style={{ color: " #3598F1" }}>
                    E-Mail
                  </Typography.Title>
                  <Form.Item
                    initialValue={profileData?.data?.email}
                    name="email"
                    className="text-white "
                  >
                    <Input
                      disabled
                      placeholder="Enter your email"
                      className={`py-3 px-3 text-xl text-primary-color  focus:bg-base-color focus:border-primary-color !bg-[#F1F1F1] border-none`}
                    />
                  </Form.Item>
                </div>
              </div>

              {!isOnlyView && (
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
              )}
            </div>
          </Form>
        </ConfigProvider>
        <div className="my-20">
          <Typography.Title className="mb-5" level={2} style={{ color: " #3598F1" }}>
            Pending story
          </Typography.Title>
          <Row gutter={[16, 16]} className="flex flex-wrap justify-start">
            {storyPendingData?.data?.length === 0 ? (
              <>
                <h1 className="text-lg text-start font-bold">Pending Story is not available..</h1>
              </>
            ) : (
              <>
                {storyPendingData?.data?.map((story, index) => (
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
                                  console.log(image);
                                  return (
                                    <div key={i}>
                                      <Image
                                        src={imageGenerate(normalizedImage)}
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
                            <p className="text-sm text-[#3598F1] font-semibold">
                              #{story.category}
                            </p>
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
              </>
            )}
          </Row>
        </div>

        <div className="my-20">
          <Typography.Title className="mb-5" level={2} style={{ color: " #3598F1" }}>
            Upload story
          </Typography.Title>
          <Row gutter={[16, 16]} className="flex flex-wrap justify-start">
            {storyAcceptData?.data?.length === 0 ? (
              <>
                <h1 className="text-lg text-start font-bold">Upload Story is not available..</h1>
              </>
            ) : (
              <>
                {storyAcceptData?.data?.map((story, index) => (
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
                                  console.log(image);
                                  return (
                                    <div key={i}>
                                      <Image
                                        src={imageGenerate(normalizedImage)}
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
                            <p className="text-sm text-[#3598F1] font-semibold">
                              #{story.category}
                            </p>
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
              </>
            )}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Profile;
