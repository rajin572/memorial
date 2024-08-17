"use client";
import { Button, ConfigProvider, Form, Input } from "antd";
import { useState } from "react";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import OTPInput from "react-otp-input";
import Link from "next/link";
import { AllImages } from "../../../../public/assets/AllImages";

const OtpVerification = () => {
  const navigate = useRouter();
  const [otp, setOtp] = useState("");

  const handleOTPSubmit = () => {
    if (otp.length < 4) {
      alert("Please fill in all OTP fields");
    } else {
      // Proceed with form submission logic
      console.log("OTP submitted:", otp);
      navigate.push("/update-password");
    }
  };

  return (
    <div className="text-primary-color">
      <Container>
        <div className="flex flex-col lg:flex-row justify-center gap-10 items-center min-h-screen bg-site-color py-10">
          <div className="w-full md:w-[80%] lg:w-[50%] flex justify-center items-center">
            <Image
              src={AllImages.otpImg}
              alt="forgot_Password_Img"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[320px] w-[320px] md:h-[380px] md:w-[380px] lg:h-[520px] lg:w-[520px]"
            />
          </div>
          <div className="h-[80vh] w-[2px] bg-[#A3D3F9] hidden lg:block"></div>
          <div className="w-full md:w-[80%] lg:w-[50%] ">
            <div className="">
              <div className="mb-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
                  Verify OTP
                </h1>
                <p className="md:text-lg lg:text-xl mb-2 ">
                  Please check your email. We have sent a code to contact
                  @gmail.com
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
                <Form layout="vertical" className="bg-transparent w-full">
                  <Form.Item className="">
                    <div className="flex justify-center items-center">
                      <OTPInput
                        inputStyle="w-[55px] h-[45px] sm:w-[76px] sm:h-[64px] text-[20px] sm:text-[30px] bg-transparent border border-[#97C6EA] hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color rounded-lg mr-[10px] sm:mr-[20px]"
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        renderInput={(props) => <input {...props} required />}
                      />
                    </div>
                  </Form.Item>
                  <div className="flex justify-between py-1">
                    <p>Didn’t receive code?</p>
                    <Link
                      href="/otp-verification"
                      className="text-[#F48E48] underline"
                    >
                      Resend
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
                        onClick={handleOTPSubmit}
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
export default OtpVerification;
