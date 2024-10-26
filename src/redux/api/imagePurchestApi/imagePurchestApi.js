// For fetchbase query
import { tagTypes } from "@/redux/tagTypes";
import { baseApi } from "../baseApi";
import Cookies from "universal-cookie";
const cookies = new Cookies();
// import { tagTypes } from "../tagTypes";

// Retrieve the access token from cookies
const accessToken = cookies.get("mm_accessToken");

const IMAGE_PURCHEST_URL = "/image-package";
const IMAGE_PAYMENT_PURCHEST_URL = "/payment/imagePackage";

export const imagePurchestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllImagePurchest: build.query({
      query: () => ({
        url: `${IMAGE_PURCHEST_URL}`,
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${accessToken}`,  // Adding the access token to headers
        // },
      }),
    }),
    paymentImagePurchest: build.mutation({
      query: (data) => ({
        url: `${IMAGE_PAYMENT_PURCHEST_URL}`,
        method: "POST",
        body:data,
        headers: {
          Authorization: `Bearer ${accessToken}`,  // Adding the access token to headers
        },
      }),
      // providesTags: [tagTypes.purchest],
    }),
  }),
});

export const {
  useGetAllImagePurchestQuery,
  usePaymentImagePurchestMutation
} = imagePurchestApi;
