"use client";

import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import { GiRank3 } from "react-icons/gi";
import { TbTopologyStarRing3 } from "react-icons/tb";
import { MdOutlineDateRange, MdOutlinePets } from "react-icons/md";
import { FaTransgender } from "react-icons/fa";
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import Container from "../ui/Container";
import SectionHeader from "../ui/SectionHeader";

const StoryDeatils = () => {
  const images = [
    AllImages.details1,
    AllImages.details3,
    AllImages.details2,
    AllImages.details4,
    AllImages.details5,
  ];

  const [category, setCategory] = useState("veteran");
  return (
    <div className="my-20">
      <Container>
        <SectionHeader>Published stories details</SectionHeader>
        <div className="mt-20 ">
          <h1 className="text-center text-3xl md:text-4xl lg:text-5xl text-secondary-color font-semibold mb-16">
            My Veteran Friend
          </h1>
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-5 `}
          >
            <Image
              src={AllImages.details1}
              alt="huddai"
              width={0}
              height={0}
              sizes="100vw"
              className={`w-[420px] h-[300px] col-span-1 `}
            />
            <Image
              src={AllImages.details3}
              alt="huddai"
              width={0}
              height={0}
              sizes="100vw"
              className={`w-[420px] h-[300px] md:h-full col-span-1 md:row-span-2`}
            />
            <Image
              src={AllImages.details2}
              alt="huddai"
              width={0}
              height={0}
              sizes="100vw"
              className={`w-[420px] h-[300px] col-span-1`}
            />
            <Image
              src={AllImages.details4}
              alt="huddai"
              width={0}
              height={0}
              sizes="100vw"
              className={`w-[420px] h-[300px] col-span-1`}
            />
            <Image
              src={AllImages.details5}
              alt="huddai"
              width={0}
              height={0}
              sizes="100vw"
              className={`w-[420px] h-[300px] col-span-1`}
            />
          </div>
          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary-color font-semibold mb-5">
              A Story About My Veteran Friend.
            </h2>
            <div>
              {category === "veteran" ? (
                <>
                  <p className="flex items-center gap-3 text-xl mb-3">
                    <HiOutlineUser /> <span> George A. Torress</span>
                  </p>
                  <p className="flex items-center gap-3 text-xl mb-3">
                    <GiRank3 /> <span> Captain</span>
                  </p>
                  <p className="flex items-center gap-3 text-xl mb-3">
                    <TbTopologyStarRing3 /> <span> Military</span>
                  </p>
                </>
              ) : category === "pet" ? (
                <>
                  <p className="flex items-center gap-3 text-xl mb-3">
                    <MdOutlinePets /> <span>Leo</span>
                  </p>
                  <p className="flex items-center gap-3 text-xl mb-3">
                    <Image
                      src={allIcons.breed}
                      alt="profile_img"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-[20px] w-[20px]"
                    />{" "}
                    <span> Beagle</span>
                  </p>
                  <p className="flex items-center gap-3 text-xl mb-3">
                    <FaTransgender /> <span> Male</span>
                  </p>
                </>
              ) : (
                <p className="flex items-center gap-3 text-xl mb-3">
                  <HiOutlineUser /> <span> George A. Torress</span>
                </p>
              )}
              <p className="flex items-center gap-3 text-xl mb-3">
                <MdOutlineDateRange /> <span> 09-11-1976 To 15-09-1992</span>
              </p>
            </div>
            <p className="text-lg mt-10 text-justify">
              The sun was just beginning to set, casting a warm golden hue
              across the living room. In the middle of the floor, sprawled out
              on his favorite fluffy rug, lay your lovable pet, Max. His chest
              rose and fell in a steady rhythm as he enjoyed one of his many
              afternoon naps. Max had a special way of making himself at home
              wherever he went, and today, the living room rug was his chosen
              spot. Max had been a part of your life for years, and he had a
              knack for making even the dullest days brighter. Whether it was
              the way he’d wag his tail with pure joy every time you walked
              through the door or how he’d nuzzle his head into your hand when
              he sensed you needed comfort, Max was more than just a pet—he was
              family. Today, though, Max seemed more relaxed than usual. He had
              spent the morning playing fetch in the yard, chasing after his
              favorite squeaky toy, and basking in the sun. After lunch, he had
              followed you around the house, content to be wherever you were. By
              the time afternoon rolled around, it was clear he needed a good
              rest. As you sat on the couch, you couldn’t help but smile at the
              sight of him. Max was lying on his back, his legs stretched out in
              different directions, his soft belly exposed to the world. His
              ears flopped over his eyes, and his mouth was slightly open,
              revealing a glimpse of his tiny, white teeth. He looked completely
              at peace. You reached down to gently scratch his belly, careful
              not to wake him, but Max, being the affectionate dog he was,
              stirred just enough to let out a soft, contented sigh. His tail
              gave a little wag before he settled back into his nap, his dreams
              surely filled with happy thoughts of running in open fields and
              endless belly rubs. As the evening light dimmed, you noticed how
              still the house felt, the quiet only interrupted by the occasional
              sound of Max’s soft breathing. It was in these moments that you
              realized just how much he meant to you. His presence brought a
              sense of calm and love that was irreplaceable. Max may have been
              passed out on the rug, lost in his dreams, but his heart was
              always with you. And as you watched him sleep, you felt a deep
              gratitude for the simple joy he brought into your life every day.
              Max was more than a pet; he was your loyal companion, your
              confidant, and above all, your beloved friend.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StoryDeatils;
