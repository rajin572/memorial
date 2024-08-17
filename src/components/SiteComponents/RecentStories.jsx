import React from "react";

export default function RecentStories() {
  return (
    <div className="mt-6">
      <div className="flex gap-8 items-center mx-auto">
        <div>
          <hr className="w-[100px] sm:w-[240px] ml-20 mr-24 border-t-2 border-[#F6A56D]" />
          <hr className="w-[100px] sm:w-[240px] mt-2 ml-20 sm:ml-32 border-t-2 border-[#0259A9]" />
        </div>
        <p className="sm:text-3xl font-bold">Recent Stories</p>
        <div>
          <hr className="w-[100px] sm:w-[240px]  ml-20 sm:ml-32 border-t-2 border-[#0259A9]" />
          <hr className="w-[100px] sm:w-[240px] mt-2 ml-20 mr-24 border-t-2 border-[#F6A56D]" />
        </div>
      </div>
      <h1></h1>
      <div>
        {/* <div className="text-white flex flex-col items-center pt-10 sm:pt-48">
          <div className="grid sm:flex mt-20 sm:gap-6 mx-64 ">
            <Button className="h-36 w-full normal-case	">
              <Link href="/packagePath">
                <div className="flex gap-2 text-2xl items-center pl-12 pr-8 py-12 rounded-lg bg-white hover:bg-white">
                  <p className="text-xs md:text-2xl lg:text-4xl text-black font-semibold">
                    {t("choose-results")}
                  </p>
                  <LuPackageOpen size={100} style={{ color: "black" }} />
                </div>
              </Link>
            </Button>
            <Button className="h-36 w-full bg-transparent text-white normal-case mt-20 sm:mt-1">
              <Link href="/questions">
                <div className="flex gap-2 text-2xl items-center pl-12 pr-8 py-10 rounded-lg border-4 border-[#FF0060] ">
                  <p className="text-xs md:text-2xl lg:text-4xl">
                    {t("answer-questions")}
                  </p>
                  <FaQuestionCircle size={100} style={{ color: "white" }} />
                </div>
              </Link>
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
