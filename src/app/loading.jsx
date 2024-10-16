import React from "react";
import { FadeLoader } from "react-spinners";

const loading = () => {
  return (
    <div className=" isolate aspect-video h-screen w-full flex justify-center items-center">
      <FadeLoader color="#3598F1" />
      {/* <p className="font-bold"> Loading</p> */}
    </div>
  );
};

export default loading;
