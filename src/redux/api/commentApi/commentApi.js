// For fetchbase query
import { tagTypes } from "@/redux/tagTypes";
import { baseApi } from "../baseApi";
import Cookies from "universal-cookie";
const cookies = new Cookies();
// import { tagTypes } from "../tagTypes";

// Retrieve the access token from cookies
const accessToken = cookies.get("mm_accessToken");

const COMMENT_URL = "/comment";

export const commentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getStoryCommentCount: build.query({
      query: (id) => {
        console.log('comment id', id)
        return {
          url: `${COMMENT_URL}/${id}`,
        method: "GET",
        }
        // headers: {
        //   Authorization: `Bearer ${accessToken}`,  // Adding the access token to headers
        // },
      },
      providesTags: [tagTypes.comment],
    }),
  }),
});

export const {
    useGetStoryCommentCountQuery,
} = commentApi;
