// For fetchbase query
import { tagTypes } from "@/redux/tagTypes";
import { baseApi } from "../baseApi";
import Cookies from "universal-cookie";
const cookies = new Cookies();
// import { tagTypes } from "../tagTypes";

// Retrieve the access token from cookies
const accessToken = cookies.get("mm_accessToken");

const SUBSCRIPTION_URL = "/subscription";

export const subscriptionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSubscription: build.query({
      query: () => ({
        url: `${SUBSCRIPTION_URL}/all`,
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${accessToken}`,  // Adding the access token to headers
        // },
      }),
      providesTags: [tagTypes.subscription],
    }),
  }),
});

export const {
  useGetAllSubscriptionQuery,
} = subscriptionApi;
