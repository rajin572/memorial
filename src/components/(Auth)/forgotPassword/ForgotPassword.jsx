"use client";
import { Button, ConfigProvider, Form, Input } from "antd";
import Container from "../../ui/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AllImages } from "../../../../public/assets/AllImages";

const ForgotPassword = () => {
  const navigate = useRouter();
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate.push("/otp-verification");
  };
  return (
    <div className="text-primary-color">
      <Container>
        <div className="flex flex-col lg:flex-row justify-center gap-10 items-center min-h-screen bg-site-color py-10">
          <div className="w-full md:w-[80%] lg:w-[50%] flex justify-center items-center">
            <Image
              src={AllImages.forgotPasswordImg}
              alt="forgot_Password_Img"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[320px] w-[320px] md:h-[380px] md:w-[380px] lg:h-[520px] lg:w-[520px]"
            />
          </div>
          <div className="h-[80vh] w-[2px] bg-[#A3D3F9] hidden lg:block"></div>
          <div className="w-full md:w-[80%] lg:w-[50%]">
            <div className="">
              <div className="mb-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
                  Forget password
                </h1>
                <p className="md:text-lg lg:text-xl mb-2 ">
                  Enter your email address to ger a verification code for
                  resetting your password.
                </p>
              </div>
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
                      type="email"
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
                        Get OTP
                      </Button>
                    </ConfigProvider>
                  </Form.Item>
                </Form>
              </ConfigProvider>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default ForgotPassword;
