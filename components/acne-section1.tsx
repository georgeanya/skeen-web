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
  padding: "20px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
  },
});

const Section1 = () => {
  return (
    <div className="px-5 md:px-[125px] md:pt-28 pt-20 md:pb-28 pb-20 bg-[#222E50] text-white flex ">
      <div className="">
        <p className="text-[28px] leading-9 md:text-start md:text-[46px] md:leading-[58px] md:min-w-[360px] font-bold mr-3 md:mr-0  ">
          What you should know about Acne
        </p>
        <div className="md:mt-[37px] mt-[28px] ">
          <Link href="/book-consultation">
            <SkeenButton className="text-xs md:text-base font-medium">
              Start your consultation
            </SkeenButton>
          </Link>
        </div>
      </div>
      <div className="mt-[60xp] md:mt-0 md:w-full md:ml-[100px]">
        <hr className="h-[0.5px] border-t-[0.5px] mt-6 md:mt-0 mb-6 md:mb-6 hidden md:flex" />
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
        <hr className="h-[0.5px] border-t-[0.5px] my-6 md:my-6" />
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
        <hr className="h-[0.5px] border-t-[0.5px] my-6 md:my-6" />
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
        <hr className="h-[0.5px] border-t-[0.5px] my-6 md:my-6" />
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
        <hr className="h-[0.5px] border-t-[0.5px] my-6 md:my-6" />
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
        <hr className="h-[0.5px] border-t-[0.5px] my-6 md:my-6" />
      </div>
    </div>
  );
};

export default Section1;
