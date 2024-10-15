import Cookies from "universal-cookie";
const cookies = new Cookies();
import { baseApi } from "./baseApi";
import { decodedToken } from "@/utils/jwt";

// console.log("Bearer " + accessToken);
const accessToken = cookies.get("accessToken");

const AUTH_URL = "/users";
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `/auth/login`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["user"],
    }),
    signUp: build.mutation({
      query: (signupData) => {
        return {
          url: `${AUTH_URL}/create`,
          method: "POST",
          data: signupData,
        };
      },
      invalidatesTags: ["user"],
    }),
    verifiedEmail: build.mutation({
      query: (otpData) => {
        const token = localStorage.getItem("createUserToken");
        return {
          url: `${AUTH_URL}/create-user-verify-otp`,
          method: "POST",
          data: otpData,
          headers: {
            "content-type": "application/json",
            token: token,
          },
        };
      },
      invalidatesTags: ["user"],
    }),
    resendOTP: build.mutation({
      query: () => {
        const token = localStorage.getItem("createUserToken");
        const decoded = decodedToken(token);
        const email = decoded?.email;
        return {
          url: `/otp/resend-otp`,
          method: "PATCH",
          data: { email: email },
          headers: {
            "content-type": "application/json",
            token: token,
          },
        };
      },
      invalidatesTags: ["user"],
    }),

    // updateProfile: build.mutation({
    //   query: (updateData) => {
    //     return {
    //       url: `${AUTH_URL}/${updateData?.userId}`,
    //       method: "PUT",
    //       data: updateData?.updateData,
    //     };
    //   },
    //   invalidatesTags: ["user"],
    // }),

    forgetPassword: build.mutation({
      query: (userEmail) => {
        return {
          url: `/auth/forgot-password-otp`,
          method: "PATCH",
          data: userEmail,
        };
      },
      invalidatesTags: ["user"],
    }),
    resendForgetOTP: build.mutation({
      query: () => {
        const token = localStorage.getItem("mm_forgetPasswordVerifyToken");
        const decoded = decodedToken(token);
        const email = decoded?.email;
        return {
          url: `/otp/resend-otp`,
          method: "PATCH",
          data: { email: email },
          headers: {
            "content-type": "application/json",
            token: token,
          },
        };
      },
      invalidatesTags: ["user"],
    }),
    forgetOtpVerify: build.mutation({
      query: (otpData) => {
        const token = localStorage.getItem("mm_forgetPasswordVerifyToken");
        return {
          url: `/auth/forgot-password-otp-match`,
          method: "PATCH",
          data: otpData,
          headers: {
            "content-type": "application/json",
            token: token,
          },
        };
      },
      invalidatesTags: ["user"],
    }),
    resetPassword: build.mutation({
      query: (resetData) => {
        const token = localStorage.getItem("mm_otp_match_token");
        return {
          url: `/auth/forgot-password-reset`,
          method: "PATCH",
          data: resetData,
          headers: {
            "content-type": "application/json",
            token: token,
          },
        };
      },
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useSignUpMutation,
  useVerifiedEmailMutation,
  useResendOTPMutation,
  useUserLoginMutation,
  useForgetPasswordMutation,
  useResendForgetOTPMutation,
  useForgetOtpVerifyMutation,
  useResetPasswordMutation,
  //   useUpdateProfileMutation,
  //   useGetAllUserQuery,
  //   useGetSingleUserQuery,
} = authApi;
