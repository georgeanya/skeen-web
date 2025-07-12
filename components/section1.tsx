import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import formula from "../public/assets/formula.png";
import purplearrow from "../public/assets/purplearrow.svg";
import whitearrow from "../public/assets/greyarrow.svg";
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
    <div className="px-5 md:px-[125px] md:pt-[120px] pt-20 md:pb-[130px] pb-[90px] bg-[#222E50]">
      <div className="">
        <p className="text-[28px] leading-[35px] md:text-[38px] md:leading-[48px] font-bold mr-3 md:mr-0 mb-[60px] max-w-[562px] text-white">
        Find your custom prescription cream 
        </p>
        <div className="flex justify-between md:flex-row flex-col gap-[33px]">
          <Link href="/acne">
            <div className="pt-2.5 px-[30px] pb-[32px] bg-[#FFFFFF] text-start md:w-[375px]">
              <img src={formula.src} alt="" className="m-auto" />
              <div className="flex justify-between">
                <p className="text-[18px] leading-[23px] font-medium md:text-[22px] md:leading-[28px]">
                  Acne cream
                </p>
                <Image
                  src={whitearrow}
                  alt=""
                  className="w-[28px] md:w-[30px]"
                />
              </div>
              <p className="text-[14px] leading-[19px] md:text-[16px] md:leading-[23px]md:mt-4 mt-2.5">
                Tackle acne, blackheads, whiteheads, pimples, clogged pores
              </p>
            </div>
          </Link>
          <Link href="/skin-aging">
            <div className="pt-2.5 px-[30px] pb-[32px] bg-[#FFFFFF] text-start md:w-[375px]">
              <img src={formula.src} alt="" className="m-auto" />
              <div className="flex justify-between">
                <p className="text-[18px] leading-[23px] font-medium md:text-[22px] md:leading-[28px]">
                  Anti-aging cream
                </p>
                <Image
                  src={whitearrow}
                  alt=""
                  className="w-[28px] md:w-[30px]"
                />
              </div>
              <p className="text-[14px] leading-[19px] md:text-[16px] md:leading-[23px] md:mt-4 mt-2.5">
                Tackle wrinkles, fine lines, firmness, skin texture, dullness
              </p>
            </div>
          </Link>
          <Link href="/pigmentation">
            <div className="pt-2.5 px-[30px] pb-[32px] bg-[#FFFFFF] text-start md:w-[375px]">
              <img src={formula.src} alt="" className="m-auto" />
              <div className="flex justify-between">
                <p className="text-[18px] leading-[23px] font-medium md:text-[22px] md:leading-[28px]">
                  Pigmentation cream
                </p>
                <Image
                  src={whitearrow}
                  alt=""
                  className="w-[28px] md:w-[30px]"
                />
              </div>
              <p className="text-[14px] leading-[19px] md:text-[16px] md:leading-[23px] md:mt-4 mt-2.5">
                Tackle dark spots, melasma, hormonal hyperpigmentation, acne
                scars
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section1;
