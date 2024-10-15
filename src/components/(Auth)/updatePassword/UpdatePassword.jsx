"use client";
import Container from "@/components/ui/Container";
import { Button, ConfigProvider, Form, Input, Typography } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { AllImages } from "../../../../public/assets/AllImages";
import { toast } from "sonner";
import { useResetPasswordMutation } from "@/redux/api/authApi";

const UpdatePassword = () => {
  const [resetPassword] = useResetPasswordMutation();
  const router = useRouter();
  const onFinish = async (values) => {
    const toastId = toast.loading("Updateing Password...");
    try {
      const res = await resetPassword(values).unwrap();
      if (res.success) {
        toast.success(res.message, {
          id: toastId,
          duration: 2000,
        });
        setTimeout(() => {
          localStorage.removeItem("mm_otp_match_token");
        }, 2000);
        router.push("/sign-in");
      }
    } catch (error) {
      toast.error(error?.data?.message || "An error occurred during Login", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div className="text-primary-color">
      <Container>
        <div className="flex flex-col lg:flex-row justify-center gap-10 items-center min-h-screen bg-site-color py-10">
          <div className="w-full md:w-[80%] lg:w-[50%] flex justify-center items-center">
            <Image
              src={AllImages.setPassImg}
              alt="Log_In_Img"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[250px] w-[320px] md:h-[280px] md:w-[380px] lg:h-[390px] lg:w-[520px]"
            />
          </div>
          <div className="h-[80vh] w-[2px] bg-[#A3D3F9] hidden lg:block"></div>
          <div className="w-full md:w-[80%] lg:w-[50%]">
            {/* -------- update Password Page Header ------------ */}
            <div className="mb-8">
              <h1 className="text-3xl sm:text-4xl font-medium mb-4">
                Set new password
              </h1>
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
                  New Password
                </Typography.Title>
                <Form.Item
                  rules={[
                    {
                      required: true || "New Password is Required",
                      min: 6 || "Password must be at least 6 characters",
                    },
                  ]}
                  name="newPassword"
                  className="text-primary-color"
                >
                  <Input.Password
                    placeholder="Enter new password"
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
                      message: "Please confirm your new password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("newPassword") === value) {
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
                      className="w-full py-6 border border-btn-primary hover:border-btn-primary text-xl text-base-color bg-btn-primary font-semibold rounded-2xl mt-8"
                      htmlType="submit"
                    >
                      Change Password
                    </Button>
                  </ConfigProvider>
                </Form.Item>
              </Form>
            </ConfigProvider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpdatePassword;
