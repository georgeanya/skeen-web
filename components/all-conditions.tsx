import React from "react";
import Navbar from "./navbar1";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import whitearrow from "../public/assets/whitearow.svg";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const SkeenButton = styled(Button)({
  background: "#3E7EEE !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 30px",
  margin: "0px 0px",
  width: "100%  ",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 30px",
  },
});

const StartSuccess = () => {
  return (
    <div className="max-w-[400px] mx-5 sm:mx-auto mt-[25px] md:mt-10 pb-20 md:pb-24">
      <p className=" leading-tight md:text-[28px] text-2xl font-bold text-[#3E7EEE] text-center">
        Get the right treatment for your skin
      </p>
      <p className="text-[16px] leading-[22px] md:text-[18px] md:leading-[22px] text-center mt-3">
        Start by choosing your skin condition
      </p>
      <Link href="/acne">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#F5F5F5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[28px]  items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
            Acne
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link href="/skin-aging">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#F5F5F5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
            Anti-aging
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link href="/pigmentation">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#F5F5F5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
            Pigmentation
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      
     
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSek0GpD3HYeD6VRRTr_nP-r5--4r_GoeL-m_XkUfoJ1mxWTUw/viewform">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#F5F5F5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
            Shop routine essentials
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
    </div>
  );
};

export default StartSuccess;
