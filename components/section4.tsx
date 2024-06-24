import React from "react";
import hero from "../public/assets/shop.png";
import { useState, useCallback, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";

const SkeenButton = styled(Button)({
  background: "#FFFFFF !important",
  fontFamily: "Circular Std",
  color: "#1B947D",
  cursor: "pointer",
  padding: "20px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
  },
});

const Section4 = () => {
  return (
    <div className="px-5 md:px-[125px] pb-[90px] md:pb-36 pt-20 md:pt-0 flex flex-col md:flex-row md:justify-between bg-[#1B947D]">
      <div className="md:max-w-md md:max-w-lg  pb-[60px] md:pb-0 md:pt-[184px]">
        <p className="  text-[32px] leading-[40px] md:text-start md:text-5xl font-bold text-white md:leading-[60px]">
          Quality products. By dermatologists. For all skin types.
        </p>
        <p className="mt-5 md:mt-6 text-[16px] leading-[22px] font-normal md:pr-8 md:text-start md:text-[20px] md:leading-6 text-white">
          Find your favorite skincare and hair products to help keep your skin
          healthy, glowing, and fresh
        </p>
        <div className="mt-8 ">
          <Link href="/book-consultation">
            <SkeenButton className="text-xs md:text-base font-medium">
              Start shopping
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
