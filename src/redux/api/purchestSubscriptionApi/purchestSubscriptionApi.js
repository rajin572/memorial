// For fetchbase query
import { tagTypes } from "@/redux/tagTypes";
import { baseApi } from "../baseApi";
import Cookies from "universal-cookie";
const cookies = new Cookies();
// import { tagTypes } from "../tagTypes";

// Retrieve the access token from cookies
const accessToken = cookies.get("mm_accessToken");

const PURCHEST_URL = "/purchest";
const PAYMENT_URL = "/payment";

export const purchestApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPurchest: build.query({
      query: () => ({
        url: `${PURCHEST_URL}/user`,
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${accessToken}`,  // Adding the access token to headers
        // },
      }),
      providesTags: [tagTypes.purchest],
    }),
    paymentPurchest: build.mutation({
      query: (data) => ({
        url: `${PAYMENT_URL}`,
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
  useGetAllPurchestQuery,
  usePaymentPurchestMutation
} = purchestApi;
