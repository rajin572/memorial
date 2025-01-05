// For fetchbase query
import { tagTypes } from "@/redux/tagTypes";
import { baseApi } from "../baseApi";
import Cookies from "universal-cookie";
// const cookies = new Cookies();
// import { tagTypes } from "../tagTypes";

// Retrieve the access token from cookies
// const accessToken = cookies.get("mm_accessToken");

const MUSIC_URL = "/music";

export const musicApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllMusic: build.query({
      query: () => ({
        url: `${MUSIC_URL}/all`,
        method: "GET",
        // headers: {
        //   Authorization: `Bearer ${accessToken}`,  // Adding the access token to headers
        // },
      }),
      providesTags: [tagTypes.music],
    }),
  }),
});

export const {
  useGetAllMusicQuery,
} = musicApi;
