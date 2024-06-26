import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import minus from "../public/assets/minus.png";
import purplearrow from "../public/assets/purplearrow.svg";
import support from "../public/assets/support.svg";
import Image from "next/image";

import Link from "next/link";

const SkeenButton = styled(Button)({
  background: "#f8f8f8 !important",
  fontFamily: "Circular Std",
  color: "#222E50",
  cursor: "pointer",
  padding: "20px 38px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
  },
});

const Section1 = () => {
  return (
    <div className="px-5 md:px-[125px] md:pt-[120px] pt-20 md:pb-28 pb-[90px] bg-[#222E50] text-white grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 md:gap-[138px]">
      <div className="">
        <p className="text-[28px] leading-[35px] md:text-[38px] md:leading-[48px] font-bold mr-3 md:mr-0  ">
          What&apos;s your skin concern?
        </p>
        <div className="">
          <div className="h-[60px] md:hidden"></div>
          <hr className="md:mt-[60px] mb-6 hidden md:flex" />
          <div className="flex justify-between items-center ">
            <p className="text-lg leading-[22px] md:text-2xl md:leading-[30px] font-medium">
              Acne
            </p>
            <img
              className="ml-6 self-center w-[30px] md:w-[38px] cursor-pointer md:ml-10 mt-1"
              src={purplearrow.src}
              alt=""
            />
          </div>
          <hr className="my-[17px] md:my-6" />
          <div className="flex justify-between items-center">
            <p className="text-lg leading-6 md:text-2xl md:leading-[30px] font-medium">
              Eczema
            </p>
            <img
              className="ml-6 self-center w-[30px] md:w-[38px] cursor-pointer md:ml-10 mt-1"
              src={purplearrow.src}
              alt=""
            />
          </div>
          <hr className="my-[17px] md:my-6" />
          <div className="flex justify-between items-center">
            <p className="text-lg leading-6 md:text-2xl md:leading-[30px] font-medium">
              Dark spots
            </p>
            <img
              className="ml-6 self-center w-[30px] md:w-[38px] cursor-pointer md:ml-10 mt-1"
              src={purplearrow.src}
              alt=""
            />
          </div>
          <hr className="my-[17px] md:my-6" />
          <div className="flex justify-between items-center">
            <p className="text-lg leading-6 md:text-2xl md:leading-[30px] font-medium">
              Psoriasis
            </p>
            <img
              className="ml-6 self-center w-[30px] md:w-[38px] cursor-pointer md:ml-10 mt-1"
              src={purplearrow.src}
              alt=""
            />
          </div>
          <hr className="my-[17px] md:my-6" />
          <div className="flex justify-between items-center">
            <p className="text-lg leading-6 md:text-2xl md:leading-[30px] font-medium">
              See all conditions
            </p>
            <img
              className="ml-6 self-center w-[30px] md:w-[38px] cursor-pointer md:ml-10 mt-1"
              src={purplearrow.src}
              alt=""
            />
          </div>
          <hr className="my-[17px] md:my-6" />
        </div>
      </div>
      <div className="md:mt-48 mt-[35px] ">
        <p className="md:text-[24px] md:leading-[30px] text-[18px] font-medium leading-[22px]">
          Not sure about what condition you have?
        </p>
        <p className="md:text-[18px] md:leading-[24px] mt-4 font-normal text-[16px] leading-[22px]">
          That&apos;s not a problem! Our dermatology providers will provide you
          with an expert diagnosis and treatment
        </p>
        <div className="md:mt-10 mt-6  ">
          <Link href="/book-consultation">
            <SkeenButton className="text-sm md:text-base md:leading-5 font-medium">
              Start your consultation
            </SkeenButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section1;
