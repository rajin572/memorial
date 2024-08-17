"use client";

import Container from "@/components/ui/Container";
import {
  Button,
  Checkbox,
  ConfigProvider,
  Form,
  Input,
  Typography,
} from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { AllImages } from "../../../../public/assets/AllImages";

const SignIn = () => {
  const navigate = useRouter();
  const onFinish = (values) => {
    console.log("user:", values);
    navigate.push("/");
  };
  return (
    <div className="text-primary-color">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-10 min-h-screen py-10">
          <div className="hidden lg:block">
            <Image
              src={AllImages.logInImg}
              alt="Log_In_Img"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[520px] w-[520px]"
            />
          </div>
          <div className="w-full md:w-[80%] lg:w-full mx-auto">
            {/* -------- Sign In Page Header ------------ */}
            <div className="flex flex-col justify-center items-center">
              <div>
                <Image
                  src={AllImages.logoLg}
                  alt="largeLogo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-[180px] w-[260px]"
                />
              </div>
              <div className="text-center mt-5 mb-8">
                <h1 className="text-3xl sm:text-4xl font-medium mb-4">
                  Login to Account!
                </h1>
                <p className="text-lg sm:text-xl mb-2 ">
                  Please enter your email and password to continue.
                </p>
              </div>
            </div>
            {/* -------- Form Start ------------ */}
            <ConfigProvider
              theme={{
                components: {
                  Form: {
                    colorError: "rgb(244,142,72)",
                  },
                },
              }}
            >
              <Form
                layout="vertical"
                className="bg-transparent w-full"
                onFinish={onFinish}
              >
                <Typography.Title level={4} style={{ color: "#1A1A1A" }}>
                  Email
                </Typography.Title>
                <Form.Item
                  name="email"
                  className="text-primary-color"
                  rules={[
                    {
                      required: true,
                      message: "Email is Required",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your email"
                    className="py-2 px-3 text-xl bg-site-color border border-[#97C6EA] text-primary-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                  />
                </Form.Item>
                <Typography.Title level={4} style={{ color: "#1A1A1A" }}>
                  Password
                </Typography.Title>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Password is Required",
                    },
                  ]}
                  name="password"
                  className="text-primary-color"
                >
                  <Input.Password
                    placeholder="Enter your password"
                    className="py-2 px-3 text-xl bg-site-color border border-[#97C6EA] text-primary-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                  />
                </Form.Item>
                <div className="flex justify-between items-center">
                  <Checkbox className="">Remember me</Checkbox>
                  <Link
                    href="/forget-password"
                    className="text-[#F48E48] underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <Form.Item>
                  <ConfigProvider
                    theme={{
                      components: {
                        Button: {
                          defaultHoverBg: "#013564",
                          defaultHoverColor: "#F3F3F3",
                        },
                      },
                    }}
                  >
                    <Button
                      className="w-full py-6 border border-btn-primary hover:border-btn-primary text-xl text-base-color bg-btn-primary font-semibold rounded-2xl mt-8"
                      htmlType="submit"
                    >
                      Sign In
                    </Button>
                  </ConfigProvider>
                </Form.Item>
              </Form>
            </ConfigProvider>
            {/* -------- Redirect to Sign Up ------------ */}
            <p className="text-center mt-4">
              Don’t have an account?
              <span>
                <Link href="/sign-up" className="text-[#F48E48] underline ml-2">
                  Sign Up
                </Link>
              </span>{" "}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignIn;
