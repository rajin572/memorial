"use client";
import Image from "next/image";
import { Button, ConfigProvider, Form, Input, Typography } from "antd";
import Container from "../../ui/Container";
import Link from "next/link";
import { AllImages } from "../../../../public/assets/AllImages";

const SignUp = () => {
  const onFinish = (values) => {
    console.log("user:", values);
  };

  return (
    <div>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-10 min-h-screen py-10">
          <div>
            <Image
              src={AllImages.logoLg}
              alt="largeLogo"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[180px] w-[260px] md:h-[260px] md:w-[360px]"
            />
          </div>
          <div className="w-full md:w-[80%] lg:w-full mx-auto">
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
                  Full name
                </Typography.Title>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Fullname is Required",
                    },
                  ]}
                  name="fullName"
                  className="text-primary-color "
                >
                  <Input
                    placeholder="Enter your Full Name"
                    className="py-2 px-3 text-xl bg-site-color border border-[#97C6EA] text-primary-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                  />
                </Form.Item>
                <Typography.Title level={4} style={{ color: "#1A1A1A" }}>
                  Email
                </Typography.Title>
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Email is Required",
                    },
                  ]}
                  name="email"
                  className="text-primary-color"
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
                <Typography.Title level={4} style={{ color: "#1A1A1A" }}>
                  Confirm Password
                </Typography.Title>
                <Form.Item
                  name="confirmPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error(
                            "The two passwords that you entered do not match!"
                          )
                        );
                      },
                    }),
                  ]}
                  className="text-primary-color"
                >
                  <Input.Password
                    placeholder="Enter your password"
                    className="py-2 px-3 text-xl bg-site-color border border-[#97C6EA] text-primary-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
                  />
                </Form.Item>

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
                      className="w-full py-6 border border-btn-primary hover:border-btn-primary text-xl text-base-color bg-btn-primary font-semibold rounded-2xl mt-10"
                      htmlType="submit"
                    >
                      Sign Up
                    </Button>
                  </ConfigProvider>
                </Form.Item>
              </Form>
            </ConfigProvider>
            <p className="text-center mt-4">
              Already have account?
              <span>
                <Link href="/sign-in" className="text-[#F48E48] underline ml-2">
                  Sign In
                </Link>
              </span>{" "}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
