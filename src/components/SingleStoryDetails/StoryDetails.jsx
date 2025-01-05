// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { HiOutlineUser } from "react-icons/hi2";
// import { GiRank3 } from "react-icons/gi";
// import { TbTopologyStarRing3 } from "react-icons/tb";
// import { MdOutlineDateRange, MdOutlinePets } from "react-icons/md";
// import { FaTransgender } from "react-icons/fa";
// import Image from "next/image";
// import { AllImages } from "../../../public/assets/AllImages";
// import Container from "../ui/Container";
// import SectionHeader from "../ui/SectionHeader";
// import { useGetSingleStoryQuery } from "@/redux/api/storyApi/storyApi";
// import { audioUrlGenerate, imageGenerate } from "@/utils/imageGenerate";
// import { format } from "date-fns";
// import { FaMars, FaVenus, FaGenderless, FaUser } from "react-icons/fa";
// import { useTranslations } from "next-intl";
// import { useLanguage } from "../AppContext";
// import translateText from "@/translateText";

// const StoryDeatils = ({ id }) => {
//   const { state } = useLanguage();
//   const t = useTranslations("AbouteApp")
//   const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;
//   // const storyText =  translateText(story.storyText, state.language, apiKey);

//   const { data: singleStory, isLoading, isError } = useGetSingleStoryQuery(id);

//   const audioUrl = audioUrlGenerate(singleStory?.data?.selectedMusic?.musicPath);
//   // console.log("audioUrl",audioUrl)

//   // Format date range
//   const formatDateRange = (startDate, endDate) => {
//     if (!startDate || !endDate) return "";

//     const formattedStartDate = format(new Date(startDate), "dd-MM-yyyy");
//     const formattedEndDate = format(new Date(endDate), "dd-MM-yyyy");

//     return `${formattedStartDate} To ${formattedEndDate}`;
//   };

//   // Loading and error handling
//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

//   if (isError) {
//     return <div>Error loading story details</div>;
//   }

//   const [translatedData, setTranslatedData] = useState({
//     storyText: "",
//     title: "",
//     heading: "",
//     category: "",
//     name: "",
//     serviceSector: "",
//     sex: "",
//   });
  
//   // Translate all relevant fields dynamically
//   useEffect(() => {
//     if (singleStory?.data) {
//       const fieldsToTranslate = [
//         "storyText",
//         "title",
//         "heading",
//         "category",
//         "name",
//         "serviceSector",
//         "sex",
//       ];
  
//       const translations = fieldsToTranslate.map((field) =>
//         translateText(singleStory.data[field], state.language, apiKey)
//       );
  
//       Promise.all(translations)
//         .then((results) => {
//           setTranslatedData({
//             storyText: results[0] || singleStory.data.storyText,
//             title: results[1] || singleStory.data.title,
//             heading: results[2] || singleStory.data.heading,
//             category: results[3] || singleStory.data.category,
//             name: results[4] || singleStory.data.name,
//             serviceSector: results[5] || singleStory.data.serviceSector,
//             sex: results[6] || singleStory.data.sex,
//           });
//         })
//         .catch((err) => {
//           console.error("Translation error:", err);
//           // Fallback to original text in case of translation error
//           setTranslatedData({
//             storyText: singleStory.data.storyText,
//             title: singleStory.data.title,
//             heading: singleStory.data.heading,
//             category: singleStory.data.category,
//             name: singleStory.data.name,
//             serviceSector: singleStory.data.serviceSector,
//             sex: singleStory.data.sex,
//           });
//         });
//     }
//   }, [singleStory, state.language]);






//   return (
//     // <div className="relative my-20">
//     //   {/* Play background audio */}
//     //   {/* <audio autoPlay loop controls src={audioUrlGenerate(singleStory?.data?.selectedMusic?.musicPath)} /> */}
//     //   <audio autoPlay controls className="hidden" src={audioUrl} />

//     //   {/* Dynamic shadow box */}
//     //   <div
//     //     style={{ boxShadow: "0px 0px 200px 90px #3598F188" }}
//     //     className="absolute left-[-50%] sm:left-[-30%] md:left-[-25%] xl:left-[-23%] md:top-[5%] w-[20%] h-[40vh]"
//     //   ></div>

//     //   <Container>
//     //     <SectionHeader>Published stories details</SectionHeader>

//     //     <div className="mt-20">
//     //       <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-secondary-color font-semibold mb-16">
//     //         {singleStory?.data.title}
//     //       </h1>

//     //       {/* Dynamic Image Gallery */}
//     //       <div
//     //         className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-5`}
//     //       >
//     //         {singleStory?.data?.storyImages.map((img, i) => (
//     //           <Image
//     //             key={i}
//     //             src={imageGenerate(img)}
//     //             alt={`story_image_${i}`}
//     //             width={0}
//     //             height={0}
//     //             sizes="100vw"
//     //             className="w-full sm:h-full"
//     //           />
//     //         ))}
//     //       </div>

//     //       <div className="mt-12">
//     //         <p className="text-sm sm:text-base text-[#3598F1] font-semibold mb-4">
//     //           #{singleStory.data.category}
//     //         </p>

//     //         <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary-color font-semibold mb-5">
//     //           {singleStory?.data?.heading}
//     //         </h2>

//     //         {/* Dynamic Info based on category */}
//     //         <div>
              
//     //           {
//     //             singleStory?.data?.name && <p className="flex items-center gap-3 text-xl mb-3">
//     //             <HiOutlineUser /> <span>{singleStory?.data?.name}</span>
//     //           </p>
//     //           }
//     //           {
//     //             singleStory?.data?.rank && <p className="flex items-center gap-3 text-xl mb-3">
//     //             {singleStory?.data?.rank && (
//     //               <>
//     //                 <GiRank3 />
//     //                 <span>{singleStory.data.rank}</span>
//     //               </>
//     //             )}
//     //           </p>
//     //           }
              
//     //             {
//     //               singleStory?.data?.serviceSector && <p className="flex items-center gap-3 text-xl mb-3">
//     //               {singleStory?.data?.serviceSector && (
//     //                 <>
//     //                   <TbTopologyStarRing3 />
//     //                   <span>{singleStory.data.serviceSector}</span>
//     //                 </>
//     //               )}
//     //             </p>
//     //             }
              
//     //           {
//     //             singleStory?.data?.sex && <p className="flex items-center gap-3 text-xl mb-3">
//     //             {singleStory?.data?.sex && (
//     //               <>
//     //                 {singleStory.data.sex === "male" && <FaMars />}
//     //                 {singleStory.data.sex === "female" && <FaVenus />}
//     //                 {singleStory.data.sex === "other" && <FaGenderless />}
//     //                 <span>{singleStory.data.sex}</span>
//     //               </>
//     //             )}
//     //           </p>
//     //           }
              

//     //           {/* Displaying date range */}
//     //           {
//     //             singleStory?.data?.dateOfBirth && singleStory?.data?.dateOfPassing &&  <p className="flex items-center gap-3 text-xl mb-3">
//     //             {
//     //               singleStory?.data?.dateOfBirth && singleStory?.data?.dateOfPassing && <><MdOutlineDateRange />{" "}
//     //               <span>
//     //                 {formatDateRange(
//     //                   singleStory?.data?.dateOfBirth,
//     //                   singleStory?.data?.dateOfPassing
//     //                 )}
//     //               </span></>
//     //             }
                
//     //           </p>
//     //           }
             
//     //         </div>

//     //         {/* Story Text */}
//     //         <p className="text-lg mt-10 text-justify">{singleStory?.data?.storyText}</p>
//     //       </div>
//     //     </div>
//     //   </Container>
//     // </div>
//     <div className="relative my-20">
//   <audio autoPlay controls className="hidden" src={audioUrl} />

//   {/* Dynamic shadow box */}
//   <div
//     style={{ boxShadow: "0px 0px 200px 90px #3598F188" }}
//     className="absolute left-[-50%] sm:left-[-30%] md:left-[-25%] xl:left-[-23%] md:top-[5%] w-[20%] h-[40vh]"
//   ></div>

//   <Container>
//     <SectionHeader>Published stories details</SectionHeader>

//     <div className="mt-20">
//       <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-secondary-color font-semibold mb-16">
//         {translatedData.title}
//       </h1>

//       {/* Dynamic Image Gallery */}
//       <div
//         className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-5`}
//       >
//         {singleStory?.data?.storyImages.map((img, i) => (
//           <Image
//             key={i}
//             src={imageGenerate(img)}
//             alt={`story_image_${i}`}
//             width={0}
//             height={0}
//             sizes="100vw"
//             className="w-full sm:h-full"
//           />
//         ))}
//       </div>

//       <div className="mt-12">
//         <p className="text-sm sm:text-base text-[#3598F1] font-semibold mb-4">
//           #{translatedData.category}
//         </p>

//         <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary-color font-semibold mb-5">
//           {translatedData.heading}
//         </h2>

//         {/* Dynamic Info based on category */}
//         <div>
//           {translatedData.name && (
//             <p className="flex items-center gap-3 text-xl mb-3">
//               <HiOutlineUser /> <span>{translatedData.name}</span>
//             </p>
//           )}
//           {singleStory?.data?.rank && (
//             <p className="flex items-center gap-3 text-xl mb-3">
//               <GiRank3 />
//               <span>{singleStory.data.rank}</span>
//             </p>
//           )}
//           {translatedData.serviceSector && (
//             <p className="flex items-center gap-3 text-xl mb-3">
//               <TbTopologyStarRing3 />
//               <span>{translatedData.serviceSector}</span>
//             </p>
//           )}
//           {translatedData.sex && (
//             <p className="flex items-center gap-3 text-xl mb-3">
//               {translatedData.sex === "male" && <FaMars />}
//               {translatedData.sex === "female" && <FaVenus />}
//               {translatedData.sex === "other" && <FaGenderless />}
//               <span>{translatedData.sex}</span>
//             </p>
//           )}

//           {/* Displaying date range */}
//           {singleStory?.data?.dateOfBirth && singleStory?.data?.dateOfPassing && (
//             <p className="flex items-center gap-3 text-xl mb-3">
//               <MdOutlineDateRange />{" "}
//               <span>
//                 {formatDateRange(
//                   singleStory?.data?.dateOfBirth,
//                   singleStory?.data?.dateOfPassing
//                 )}
//               </span>
//             </p>
//           )}
//         </div>

//         {/* Story Text */}
//         <p className="text-lg mt-10 text-justify">{translatedData.storyText}</p>
//       </div>
//     </div>
//   </Container>
// </div>

//   );
// };

// export default StoryDeatils;


"use client";
import React, { useEffect, useMemo, useState } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import { GiRank3 } from "react-icons/gi";
import { TbTopologyStarRing3 } from "react-icons/tb";
import { MdOutlineDateRange } from "react-icons/md";
import { FaMars, FaVenus, FaGenderless } from "react-icons/fa";
import Image from "next/image";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";
import { useGetSingleStoryQuery } from "@/redux/api/storyApi/storyApi";
import { audioUrlGenerate, imageGenerate } from "@/utils/imageGenerate";
import { format } from "date-fns";
import { useLanguage } from "../AppContext";
import translateText from "@/translateText";
import { useTranslations } from "next-intl";

const StoryDetails = ({ id }) => {
  const { state } = useLanguage();
    const t = useTranslations("Details");
  // const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;
   // Memoize API key to ensure it doesn't cause unnecessary re-renders
   const apiKey = useMemo(() => process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY, []);


  const { data: singleStory, isLoading, isError } = useGetSingleStoryQuery(id);

  const audioUrl = audioUrlGenerate(singleStory?.data?.selectedMusic?.musicPath);

  const formatDateRange = (startDate, endDate) => {
    if (!startDate || !endDate) return "";
    const formattedStartDate = format(new Date(startDate), "dd-MM-yyyy");
    const formattedEndDate = format(new Date(endDate), "dd-MM-yyyy");
    return `${formattedStartDate} To ${formattedEndDate}`;
  };

  const [translatedData, setTranslatedData] = useState({
    storyText: "",
    title: "",
    heading: "",
    category: "",
    name: "",
    serviceSector: "",
    sex: "",
  });

  // useEffect(() => {
  //   if (singleStory?.data) {
  //     const translations = Object.keys(translatedData).map((field) =>
  //       translateText(singleStory.data[field], state.language, apiKey)
  //     );

  //     Promise.all(translations)
  //       .then((results) => {
  //         const updatedData = Object.fromEntries(
  //           Object.keys(translatedData).map((key, idx) => [key, results[idx]])
  //         );
  //         setTranslatedData(updatedData);
  //       })
  //       .catch(() => setTranslatedData(singleStory.data));
  //   }
  // }, [singleStory, state.language, apiKey]);

  useEffect(() => {
    if (singleStory?.data) {
      const fieldsToTranslate = Object.keys(translatedData);

      const translations = fieldsToTranslate.map((field) =>
        translateText(singleStory.data[field], state.language, apiKey)
      );

      Promise.all(translations)
        .then((results) => {
          const updatedData = Object.fromEntries(
            fieldsToTranslate.map((key, idx) => [key, results[idx]])
          );
          setTranslatedData(updatedData);
        })
        .catch(() => setTranslatedData(singleStory.data)); // Fallback to original data in case of error
    }
  }, [singleStory, state.language, apiKey]);

  if (isLoading) return <div>Loading ...</div>;
  if (isError) return <div>Error loading story details</div>;

  return (
    <div className="relative my-20">
      <audio autoPlay controls className="hidden" src={audioUrl} />
      <Container>
        <SectionHeader>{t("title")}</SectionHeader>
        <div className="mt-20">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-secondary-color font-semibold mb-16">
            {translatedData.title}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {singleStory?.data?.storyImages?.map((img, i) => (
              <Image
                key={i}
                src={imageGenerate(img)}
                alt={`story_image_${i}`}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full sm:h-full"
              />
            ))}
          </div>
          <div className="mt-12">
            <p className="text-sm sm:text-base text-[#3598F1] font-semibold mb-4">
              #{translatedData.category}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary-color font-semibold mb-5">
              {translatedData.heading}
            </h2>
            <div>
              {translatedData.name && (
                <p className="flex items-center gap-3 text-xl mb-3">
                  <HiOutlineUser />
                  <span>{translatedData.name}</span>
                </p>
              )}
              {translatedData.serviceSector && (
                <p className="flex items-center gap-3 text-xl mb-3">
                  <TbTopologyStarRing3 />
                  <span>{translatedData.serviceSector}</span>
                </p>
              )}
              {translatedData.sex && (
                <p className="flex items-center gap-3 text-xl mb-3">
                  {translatedData.sex === "male" && <FaMars />}
                  {translatedData.sex === "female" && <FaVenus />}
                  {translatedData.sex === "other" && <FaGenderless />}
                  <span>{translatedData.sex}</span>
                </p>
              )}
              {singleStory?.data?.dateOfBirth && singleStory?.data?.dateOfPassing && (
                <p className="flex items-center gap-3 text-xl mb-3">
                  <MdOutlineDateRange />
                  <span>
                    {formatDateRange(
                      singleStory?.data?.dateOfBirth,
                      singleStory?.data?.dateOfPassing
                    )}
                  </span>
                </p>
              )}
            </div>
            <p className="text-lg mt-10 text-justify">{translatedData.storyText}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StoryDetails;

