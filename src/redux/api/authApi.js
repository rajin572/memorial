import Cookies from "universal-cookie";
const cookies = new Cookies();
import { baseApi } from "./baseApi";
import { decodedToken } from "@/utils/jwt";

// console.log("Bearer " + accessToken);
const accessToken = cookies.get("accessToken");

const AUTH_URL = "/users";
export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // getAllUser: build.query({
    //   query: () => ({
    //     url: `${AUTH_URL}`,
    //     method: "GET",
    //     headers: {
    //       "content-type": "application/json",
    //       Authorization: `${accessToken}`,
    //     },
    //   }),
    //   providesTags: ["user"],
    // }),
    // getSingleUser: build.query({
    //   query: (userId) => ({
    //     url: `${AUTH_URL}/${userId}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["user"],
    // }),

    // userLogin: build.mutation({
    //   query: (loginData) => ({
    //     url: `${AUTH_URL}/login`,
    //     method: "POST",
    //     data: loginData,
    //   }),
    //   invalidatesTags: ["user"],
    // }),
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
        console.log(token);
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

    // forgetPassword: build.mutation({
    //   query: (userEmail) => {
    //     return {
    //       url: `${AUTH_URL}/forget-password`,
    //       method: "POST",
    //       data: userEmail,
    //     };
    //   },
    //   invalidatesTags: ["user"],
    // }),
    // forgetOtpVerify: build.mutation({
    //   query: (otpData) => {
    //     return {
    //       url: `${AUTH_URL}/otp/forget-password`,
    //       method: "PATCH",
    //       data: otpData,
    //     };
    //   },
    //   invalidatesTags: ["user"],
    // }),
    // resetPassword: build.mutation({
    //   query: (resetData) => {
    //     return {
    //       url: `${AUTH_URL}/reset-password`,
    //       method: "PATCH",
    //       data: resetData,
    //     };
    //   },
    //   invalidatesTags: ["user"],
    // }),
  }),
});

export const {
  //   useGetAllUserQuery,
  //   useUserLoginMutation,
  useSignUpMutation,
  useVerifiedEmailMutation,
  useResendOTPMutation,
  //   useUpdateProfileMutation,
  //   useGetSingleUserQuery,
  //   useForgetPasswordMutation,
  //   useForgetOtpVerifyMutation,
  //   useResetPasswordMutation,
} = authApi;
