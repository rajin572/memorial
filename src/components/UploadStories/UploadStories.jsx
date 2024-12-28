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
import { useGetAllMusicQuery } from "@/redux/api/musicApi/musicApi";
import { useGetAllPurchestQuery } from "@/redux/api/purchestSubscriptionApi/purchestSubscriptionApi";
import { useGetAllUserByStoryQuery, usePostStoryMutation } from "@/redux/api/storyApi/storyApi";
import { toast } from "sonner";
import { imageGenerate } from "@/utils/imageGenerate";
import { useMyProfileQuery } from "@/redux/api/authApi";
import ImagePurchestModal from "../ui/ImagePurchestModal";
import ImageModal from "../ui/ImageModal";
import { useTranslations } from "next-intl";

const UploadStory = ({ extraImage }) => {
  const t = useTranslations("UploadStory");
  const tb = useTranslations("Button");
  const tst = useTranslations("StoryFormText");
  const [isModalVisible, setIsModalVisible] = useState(extraImage ? true : false);
  const [category, setCategory] = useState("");
  const { data: allMusic } = useGetAllMusicQuery(null);
  // const { data: allPurchest } = useGetAllPurchestQuery(null);
  const [fileList, setFileList] = useState([]);
  const { data: userByStory } = useGetAllUserByStoryQuery(null);
  const { data: userData } = useMyProfileQuery();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [addStory] = usePostStoryMutation();
  const [form] = Form.useForm();

  const baseWordCount = userData?.data?.purchesPackageId?.package_id?.facilities?.wordCount || 0;
  const [storyText, setStoryText] = useState('');
  // console.log("baseWordCount",baseWordCount)

  const handleTextChange = (e) => {
    const value = e.target.value;
    const words = value.trim().split(/\s+/).filter(Boolean);

    // Update the text only if the word count is 80 or fewer
    if (words.length <= baseWordCount) {
      setStoryText(value);
    }
  };

  const handleKeyDown = (e) => {
    const words = storyText.trim().split(/\s+/).filter(Boolean);

    // Prevent typing when the word count reaches or exceeds 80, except for backspace and delete
    if (words.length >= baseWordCount && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') {
      e.preventDefault();
    }
  };
  // console.log("storyText storyText", storyText);
  // const imageCount = userData?.data?.purchesPackageId?.package_id?.facilities?.pictureDistribution;

  const baseImageCount =
    userData?.data?.purchesPackageId?.package_id?.facilities?.pictureDistribution || 0;
  const extraImageCount = userData?.data?.purchesPackageId?.extraImage || 0;
  const imageCount = baseImageCount + extraImageCount;
  // console.log("imageCount", imageCount);
  // console.log("userData", userData?.data);
  // console.log("baseWordCount", baseWordCount);

  const handleChange = ({ fileList: newFileList }) => {
    // console.log(fileList);

    if (newFileList?.length <= imageCount) {
      setFileList(newFileList);
    }

    // console.log(imageCount);
  };

  // console.log('allPurchest all', allPurchest?.data);

  // console.log("userByStory", userByStory?.data);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleClose = () => {
    setIsModalVisible(false);
  };

  const onFinish = async (values) => {
    console.log("onFinish values:", values);

    const toastId = toast.loading("Submitting...");
    const formData = new FormData();

    Object.keys(values)?.forEach((key) => {
      if (key === "storyImages") {
        const images = values?.storyImages?.fileList;
        images?.forEach((file) => {
          formData.append("storyImages", file?.originFileObj);
        });
        formData.append(key, values[key]);
      } else {
        formData.append(key, values[key]);
      }
    });
    console.log("formData ", formData);

    try {
      const res = await addStory(formData).unwrap();
      console.log("Response from addStory:", res);
      if (res.success) {
        toast.success(res.message, {
          id: toastId,
          duration: 2000,
        });
      }
      setIsModalVisible(false);
      form.resetFields();
      setFileList([]);
    } catch (error) {
      console.error("Error adding story:", error); // Log the error for debugging
      toast.error(
        error?.data?.message || error?.error || "An error occurred while adding the story",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };

  const onChange = (value) => {
    setCategory(value);
  };

  const truncateDescription = (desc) => {
    if (desc.length > 60) {
      return desc.substring(0, 60) + "...";
    }
    return desc;
  };

  const showImageModal = () => {
    // console.log("Selected offer paymentData:", paymentData);
    setIsModalOpen(true);
  };

  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  const handleImageCancel = () => {
    setIsModalOpen(false);
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
        <SectionHeader>{t("heading")}</SectionHeader>
        <p className="text-2xl text-center lg:w-[80%] mx-auto mt-10">
          {t("details")}
        </p>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-center gap-5">
          <div
            onClick={() => {
              if (userData?.data?.isPurchesPackage) {
                showModal();
              } else {
                window.location.href = "/pricing";
              }
            }}
            className="flex flex-col items-center text-center justify-center h-full border-2 border-dashed border-[#00000080] rounded-lg cursor-pointer hover:border-primary-color w-full"
          >
            <PiUploadSimpleBold className="size-10 text-primary-color" />
            <p className="mt-4 text-primary-color font-semibold text-2xl">{tb("upload")}</p>
          </div>
          {userByStory?.data?.slice(0, 2)?.map((story) => (
            <Card
              key={story._id}
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
                  <p className="text-sm text-[#3598F1] font-semibold">{story.tag}</p>
                  <Link  href={`/stories/${story._id}`}>
                    <h3 className="text-xl lg:text-2xl font-bold mb-1 text-primary-color">
                      {story.title}
                    </h3>
                  </Link>
                  <p className=" lg:text-lg mb-1 text-[#484848]">
                    {truncateDescription(story.storyText)}
                  </p>
                </div>
                <div className="flex flex-col justify-between w-full gap-1 lg:text-lg text-[#5C5F66]">
                  <div className="flex items-center">
                    <CommentOutlined className="mr-1" />
                    {story.commentCount} Comments
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{story.storyText.split(" ").length} Words</span>
                    <span>{story.storyStatus === "pending" && "Pending"}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
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
            form={form}
            onFinish={onFinish}
            layout="vertical"
            className="bg-transparent p-4 w-full mt-10"
          >
            {/* Category  */}
            <div>
              <Typography.Title level={5} style={{ color: "#010515" }}>
               {/* Select Magazine Section */}
               {tst('selecMagazineSection')}
              </Typography.Title>
              <Form.Item required={true} name="category">
                <Select
                  onChange={onChange}
                  placeholder="Magazine Section"
                  suffixIcon={<DownOutlined className="text-[#1A1A1A] text-xl mt-1" />}
                  className="h-10 border-[#0000004d]  hover:border-primary-color focus:border-primary-color"
                >
                  <Select.Option value="Loved Ones">{tst('select1')}</Select.Option>
                  <Select.Option value="Veterans Memorial Moments">
                  {tst('select2')}
                  </Select.Option>
                  <Select.Option value="Pets Memorial Moments">{tst('select3')}</Select.Option>
                </Select>
              </Form.Item>
            </div>
            {/* Title  */}
            <div>
              <Typography.Title level={5} style={{ color: "#010515" }}>
              {tst('title')}
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
              {tst('Heading')}
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
              {tst('Name')}
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
              {tst('Iimage1')} {imageCount > 0 ? imageCount : 0} {tst('Iimage2')}
              </Typography.Title>

              <div className="">
                <div className="flex justify-start items-center">
                  <Form.Item name="storyImages" className="text-white">
                    <Upload
                      action=""
                      listType="picture-card"
                      fileList={fileList} // Control the file list
                      onChange={handleChange}
                      // beforeUpload={(file) => {
                      //   // Prevent uploading more images if the limit is reached
                      //   if (fileList.length >= imageCount) {
                      //     alert(`You can only upload up to ${imageCount} images.`);
                      //     return Upload.LIST_IGNORE; // Prevent further upload
                      //   }
                      //   return true; // Proceed with the upload if within the limit
                      // }}
                    >
                      {fileList?.length < imageCount && (
                        <button
                          className="p-5"
                          style={{
                            border: 0,
                            background: "none",
                          }}
                          type="button"
                        >
                          <PlusOutlined className="text-primary-color text-3xl" />
                          <p className="text-primary-color">{tst('UploadImage')}</p>
                        </button>
                      )}
                    </Upload>
                  </Form.Item>
                  <button
                    type="button"
                    onClick={showImageModal}
                    className="bg-red-400 ml-2 py-5 px-4 rounded mb-6"
                  >
                    {tst('addExtra1')} <br /> {tst('addExtra2')}
                  </button>
                </div>
                {/* <Form.Item name="storyImages" className="text-white">
                  <div className="flex justify-start items-center">
                    <Upload
                      action=""
                      listType="picture-card"
                      fileList={fileList} // Control the file list
                      onChange={handleChange}
                      // beforeUpload={(file) => {
                      //   // Prevent uploading more images if the limit is reached
                      //   if (fileList.length >= imageCount) {
                      //     alert(`You can only upload up to ${imageCount} images.`);
                      //     return Upload.LIST_IGNORE; // Prevent further upload
                      //   }
                      //   return true; // Proceed with the upload if within the limit
                      // }}
                    >
                      {fileList?.length < imageCount && (
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
                      )}
                    </Upload>
                    <button  type="button" onClick={showImageModal} className="bg-red-400 ml-2 py-5 px-4 rounded">
                      Add Extra <br /> Image
                    </button>
                  </div>
                </Form.Item> */}
              </div>
            </div>
            {category === "veteran" ? (
              <>
                <div>
                  <Typography.Title level={5} style={{ color: "#010515" }}>
                  {tst('description')}
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
                  {tst('force')}
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
                  {tst('breed')}
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
                  {tst('gender')}
                  </Typography.Title>
                  <Form.Item name="gender">
                    <Select
                      placeholder="Select Gender"
                      suffixIcon={<DownOutlined className="text-[#1A1A1A] text-xl mt-1" />}
                      className="h-10 border-[#0000004d]  hover:border-primary-color focus:border-primary-color"
                    >
                      <Select.Option value="male">{tst('male')}</Select.Option>
                      <Select.Option value="female">{tst('female')}</Select.Option>
                      <Select.Option value="others">{tst('others')}</Select.Option>
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
              {tst('dateOfBirth')}
              </Typography.Title>
              <Form.Item name="dateOfBirth" className="text-white ">
                <DatePicker
                  suffixIcon={<CalendarOutlined className="text-[#1A1A1A] mt-1" />}
                  placeholder="Date of Birth"
                  className="w-full py-2 px-3 bg-transparent border-[#0000004d] text-primary-color hover:bg-transparent hover:border-primary-color focus:bg-transparent focus:border-primary-color"
                />
              </Form.Item>
            </div>
            {/* Date of Death  */}
            <div>
              <Typography.Title level={5} style={{ color: "#010515" }}>
              {tst('dateOfPassing')}
              </Typography.Title>
              <Form.Item name="dateOfPassing" className="text-white ">
                <DatePicker
                  suffixIcon={<CalendarOutlined className="text-[#1A1A1A] mt-1" />}
                  placeholder="Date of Death"
                  className="w-full py-2 px-3 bg-transparent border-[#0000004d] text-primary-color hover:bg-transparent hover:border-primary-color focus:bg-transparent focus:border-primary-color"
                />
              </Form.Item>
            </div>
            {/* Story  */}
            <div>
              <Typography.Title level={5} style={{ color: "#010515" }}>
              {tst('story1')} {baseWordCount} {tst('story2')}
              </Typography.Title>
              <Form.Item
                name="storyText"
                className="text-white"
                rules={[
                  {
                    validator: (_, value) => {
                      if (value && value.trim().split(/\s+/).length >= baseWordCount) {
                        return Promise.reject(new Error(`The story must not exceed ${baseWordCount} words.`));
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <TextArea
                  rows={4}
                  value={storyText}
                  onChange={handleTextChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Write your story... "
                  className="py-2 px-3 bg-transparent border-[#0000004d] text-primary-color hover:bg-transparent hover:border-primary-color focus:bg-transparent focus:border-primary-color"
                />
              </Form.Item>
            </div>

            <div>
              <Typography.Title level={5} style={{ color: "#010515" }}>
              {tst('selectMusic')}
              </Typography.Title>
              <Form.Item required={true} name="selectedMusic">
                <Select
                  onChange={onChange}
                  placeholder="Select Music"
                  suffixIcon={<DownOutlined className="text-[#1A1A1A] text-xl mt-1" />}
                  className="h-10 border-[#0000004d]  hover:border-primary-color focus:border-primary-color"
                >
                  {allMusic?.data?.map((music) => (
                    <Select.Option key={music._id} value={music._id}>
                      {`${music.songName}-Singer-${music.singerName}`}
                    </Select.Option>
                  ))}
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
                    {tst('uploadStory')}
                  </Button>
                </ConfigProvider>
              </Form.Item>
            </div>
          </Form>
        </Modal>
      </ConfigProvider>
      <div>
        {isModalOpen && (
          <ImageModal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            handleCancel={handleImageCancel}
            // message="Payment System Will Be Available Soon."
            // modalPaymentData={modalPaymentData}
          />
        )}
      </div>
    </div>
  );
};

export default UploadStory;
