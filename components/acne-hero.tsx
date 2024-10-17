import React from "react";
import hero from "../public/assets/hero.png";
import { useState, useCallback, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";

const SkeenButton = styled(Button)({
  background: "#3E7EEE !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "20px 38px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 32px",
  },
});

const Hero = () => {
  return (
    <div className="px-5 md:px-[125px] pb-[90px] md:pb-36 flex flex-col md:flex-row md:justify-between">
      <div className=" md:max-w-[549px] pt-[42px] md:pb-0 md:pt-[130px]">
        <p className="text-[34px] md:text-start md:text-5xl md:leading-[60px] font-bold text-[#3E7EEE] leading-[43px]">
          Treat acne with a custom formula made just for you
        </p>
        <p className="mt-5 md:mt-5 text-base font-normal md:text-start md:text-[20px] leading-[22px] md:leading-7 text-[#333D47]">
          Your skin is unique, your skincare formula should be too. Analyze your
          skin and get a personalized acne formula made just for you
        </p>
        <div className="mt-8 ">
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSek0GpD3HYeD6VRRTr_nP-r5--4r_GoeL-m_XkUfoJ1mxWTUw/viewform">
            <SkeenButton className="text-sm md:text-base md:leading-5 font-medium">
              Get your formula now
            </SkeenButton>
          </Link>
        </div>
      </div>
      <div className=" mt-[60px] md:mt-0 flex md:pr-[75px] md:pt-[80px] justify-center">
        <img src={hero.src} alt="hero" className="md:w-[460px]" />
      </div>
    </div>
  );
};

export default Hero;
