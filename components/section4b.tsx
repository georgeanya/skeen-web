import React from "react";
import hero from "../public/assets/shop.png";
import { useState, useCallback, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";

const SkeenButton = styled(Button)({
  background: "#3E7EEE !important",
  fontFamily: "Circular Std",
  color: "#FFFFFF",
  cursor: "pointer",
  padding: "20px 38px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 32px",
  },
});

const Section4 = () => {
  return (
    <div className="px-5 md:px-[125px] pb-[90px] md:pb-[130px] pt-20 md:pt-0 flex flex-col md:flex-row md:justify-between gap-[106px] ">
      <div className="md:max-w-[549px] pb-[60px] md:pb-0 md:pt-[184px]">
        <p className="  text-[28px] leading-[35px] md:text-start md:text-5xl font-bold text-[#3E7EEE] md:leading-[60px]">
          Support your custom formula with routine essentials
        </p>
        <p className="mt-5 md:mt-5 text-[16px] leading-[22px] font-normal md:pr-8 md:text-start md:text-[20px] md:leading-[28px] text-[#333D47]">
          Find your favorite routine skincare products to help keep your skin
          healthy, glowing, and fresh
        </p>
        <div className="mt-8 ">
          <Link href="/book-consultation">
            <SkeenButton className="text-sm md:text-base  md:leading-5 font-medium">
              Start shopping now
            </SkeenButton>
          </Link>
        </div>
      </div>
      <div className="  flex md:pr-[75px] md:pt-[120px] justify-center">
        <img src={hero.src} alt="hero" className="md:w-[460px]" />
      </div>
    </div>
  );
};

export default Section4;
