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
    <div className="max-w-[400px] mx-5 sm:mx-auto mt-[25px] md:mt-10">
      <p className=" leading-tight md:text-[28px] text-2xl font-bold text-[#3E7EEE] text-center">
        What’s your skin concern?
      </p>

      <Link href="/book-consultation">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#F5F5F5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[35px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
            Acne
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link href="/book-consultation">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#F5F5F5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
            Eczema
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link href="/book-consultation">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#F5F5F5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
            Hyperpigmentation
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link href="/book-consultation">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#F5F5F5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
            Skin aging
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link href="/book-consultation">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#F5F5F5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
            Rosacea
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link href="/book-consultation">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#F5F5F5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
            Clogged pores
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link href="/book-consultation">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#F5F5F5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
            Hair loss
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link href="/book-consultation">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#F5F5F5] rounded-[16px] mb-[12px] md:mb-5 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
          Skin aging
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
      <Link href="/book-consultation">
        <div className="md:px-5 px-[16px] py-[11px] md:py-[18px] bg-[#F5F5F5] rounded-[16px] mb-[52px] md:mb-10 flex justify-between mt-[12px] items-center">
          <p className="text-[16px] md:text-[20px] leading-[20px] md:leading-[25.24px] font-medium text-[#333D47]">
            Other
          </p>
          <Image src={whitearrow} alt="" className="w-[30px] md:w-[38px]" />
        </div>
      </Link>
    </div>
  );
};

export default StartSuccess;
