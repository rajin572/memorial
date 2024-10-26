// import Banner from "@/components/shared/Banner";
import StoryDeatils from "@/components/SingleStoryDetails/StoryDetails";
import React from "react";

const page = ({params}) => {
  // console.log('params id ', params.storyId)
  return (
    <div>
      {/* <Banner /> */}
      <StoryDeatils id={params.storyId}/>
    </div>
  );
};

export default page;
