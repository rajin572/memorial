// For fetchbase query
import { tagTypes } from "@/redux/tagTypes";
import { baseApi } from "../baseApi";
import Cookies from "universal-cookie";
const cookies = new Cookies();
// import { tagTypes } from "../tagTypes";

// Retrieve the access token from cookies
const accessToken = cookies.get("mm_accessToken");

const STORY_URL = "/story";

export const storyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    postStory: build.mutation({
      query: (data) => ({
        url: `${STORY_URL}`,
        method: "POST",
        body:data,
        headers: {
          Authorization: `Bearer ${accessToken}`,  // Adding the access token to headers
        },
      }),
      invalidatesTags: [tagTypes.story],
    }),
    getAllStory: build.query({
      query: (status) => ({
        url: `${STORY_URL}/user-story?storyStatus=${status}&page=1&limit=10`,
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${accessToken}`,  // Adding the access token to headers
        // },
      }),
      providesTags: [tagTypes.story],
    }),
    getAllAcceptStory: build.query({
      query: () => ({
        url: `${STORY_URL}?page=1&limit=9&storyStatus=accept`,
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${accessToken}`,  // Adding the access token to headers
        // },
      }),
      providesTags: [tagTypes.story],
    }),
    getSingleStory: build.query({
      query: (id) => ({
        url: `${STORY_URL}/${id}`,
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${accessToken}`,  // Adding the access token to headers
        // },
      }),
      providesTags: [tagTypes.story],
    }),
    getAllUserByStory: build.query({
      query: () => ({
        url: `${STORY_URL}/user-story`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,  
        },
      }),
      providesTags: [tagTypes.story],
    }),
  }),
});

export const {
    useGetAllStoryQuery,
    useGetSingleStoryQuery,
    usePostStoryMutation,
    useGetAllUserByStoryQuery,
    useGetAllAcceptStoryQuery
} = storyApi;
