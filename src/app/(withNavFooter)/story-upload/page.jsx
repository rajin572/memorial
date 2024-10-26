// import Banner from "@/components/shared/Banner";
import UploadStory from "@/components/UploadStories/UploadStories";
import React from "react";

const page = ({ searchParams: { extraImage } }) => {
  console.log({ extraImage });
  return (
    <div>
      {/* <Banner /> */}
      <UploadStory extraImage={extraImage} />
    </div>
  );
};

export default page;
