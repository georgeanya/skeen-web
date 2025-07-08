import React from "react";
import Image from "next/image";
import stars from "../public/assets/stars.svg";

const Section1 = () => {
  return (
    <div className="px-5 md:px-[125px] md:pt-28 pt-20 md:pb-28 pb-[90px] bg-[#487FE6] text-white ">
      <p className="text-[28px] leading-9 md:text-start md:text-4xl md:max-w-xl font-bold mr-3 md:mr-0  ">
        Real patients, real results
      </p>
      <p className="mt-5 md:mt-6 text-[16px] leading-[24px] font-normal md:pr-8 md:text-start md:text-[20px] md:leading-6 text-white">
        See what some of our patients say about us
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 gap-5 md:gap-6 mt-10 md:mt-12">
        <div className="md:px-10 md:py-12 px-5 py-8 bg-white">
          <p className="text-[18px] leading-[26px] md:text-[22px] md:leading-[34px] text-[#333D47]">
            After trying countless over-the-counter products, Skeen&apos;s custom
            cream finally addressed my stubborn blackheads and fine lines. My
            skin looks younger and it feels amazing!
          </p>
          <div className="flex justify-between items-center mt-6">
            <p className="md:text-[18px] md:leading-[30px] text-[16px] leading-[20px] text-[#6C7884] ">
              Moyo
            </p>
            <Image src={stars} alt="" />
          </div>
        </div>
        <div className="md:px-10 md:py-12 px-5 py-8 bg-white">
          <p className="text-[18px] leading-[26px] md:text-[22px] md:leading-[34px] text-[#333D47]">
            Skeen made dermatology accessible and affordable for me. The custom
            cream targeted my exact skin concerns better than any
            over-the-counter products ever did.
          </p>
          <div className="flex justify-between items-center mt-6">
            <p className="md:text-[18px] md:leading-[30px] text-[16px] leading-[20px] text-[#6C7884] ">
              Teju
            </p>
            <Image src={stars} alt="" />
          </div>
        </div>
        <div className="md:px-10 md:py-12 px-5 py-8 bg-white">
          <p className="text-[18px] leading-[26px] md:text-[22px] md:leading-[34px] text-[#333D47]">
            I struggled with hormonal acne for years before finding Skeen. My
            personalized cream cleared my skin in three months. I finally feel
            confident going makeup-free again!
          </p>
          <div className="flex justify-between items-center mt-6">
            <p className="md:text-[18px] md:leading-[30px] text-[16px] leading-[20px] text-[#6C7884] ">
              Angela
            </p>
            <Image src={stars} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
