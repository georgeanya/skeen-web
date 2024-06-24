import React from "react";
import hero from "../public/assets/hero.png";
import { useState, useCallback, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";

const SkeenButton = styled(Button)({
  background: "#3E7EEE !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  cursor: "pointer",
  padding: "20px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
  },
});

const Hero = () => {
  return (
    <div className="px-5 md:px-[125px] pb-20 md:pb-36 flex flex-col md:flex-row md:justify-between">
      <div className="md:max-w-md md:max-w-lg pt-[42px] pb-17 md:pb-0 md:pt-[130px]">
        <p className="text-[34px] md:text-start md:text-5xl md:leading-[60px] font-bold text-[#3E7EEE] leading-[43px]">
          Get expert Acne treatment online
        </p>
        <p className="mt-5 md:mt-6 text-base font-normal md:pr-8 md:text-start md:md:text-[20px] leading-7 text-[#333D47]">
          Get effective Acne treatments that works. Prescribed online by
          licensed dermatology providers. No appointments, waiting rooms, or
          pharmacy visits
        </p>
        <div className="mt-8 ">
          <Link href="/book-consultation">
            <SkeenButton className="text-xs md:text-base font-medium">
              Get started now
            </SkeenButton>
          </Link>
        </div>
      </div>
      <div className=" md:w-[460px] mt-[60px] md:mt-0 flex md:pr-[75px] md:pt-[80px] justify-center">
        <img src={hero.src} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
