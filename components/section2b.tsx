import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import formula from "../public/assets/formula.png";
import azelaic from "../public/assets/azelaic.png";
import niacinamide from "../public/assets/niacinamide.png";
import tretinoin from "../public/assets/tretinoin.png";
import clindamycin from "../public/assets/clindamycin.png";
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

const Section2b = () => {
  return (
    <div className="pl-5 md:pl-[125px] md:pt-[120px] pt-20 md:pb-[130px] pb-[90px] bg-[#181C26] text-white">
      <div className="">
        <p className="text-[28px] leading-[35px] md:text-[38px] md:leading-[48px] font-bold mr-3 md:mr-0 mb-[20px] max-w-[485px] text-white">
          Made with science-backed ingredients
        </p>
        <p className="text-[16px] leading-[22px] md:text-[20px] md:leading-[30px] mr-3 md:mr-0 mb-[60px] max-w-[508px] ">
          Your custom cream combines prescription ingredients - in the proper
          amounts and strength for your skin
        </p>
        <div className="mt-8 md:mt-14 overflow-x-auto hide-scrollbar ">
          <div className="flex flex-nowrap md:gap-x-[30px] gap-x-4">
            <div className="md:min-w-[275px] min-w-[260px] ">
              <img src={azelaic.src} alt="" className="" />
              <p className="mt-[28px] mb-[16px] text-[18px] leading-[23px] md:text-[22px] md:leading-[28px] ">Azelaic acid</p>
              <p className="text-[14px] leading-[19px] md:text-[16px] md:leading-[23px]">Keeps pores clear while reducing redness and dark spots</p>
            </div>
            <div className="md:min-w-[275px] min-w-[260px] ">
              <img src={niacinamide.src} alt="" className="" />
              <p className="mt-[28px] mb-[16px] text-[18px] leading-[23px] md:text-[22px] md:leading-[28px] ">Niacinamide</p>
              <p className="text-[14px] leading-[19px] md:text-[16px] md:leading-[23px]">
                Reduces inflammation, targets excess oil productions, and
                increases skin hydration
              </p>
            </div>
            <div className="md:min-w-[275px] min-w-[260px] ">
              <img src={tretinoin.src} alt="" className="" />
              <p className="mt-[28px] mb-[16px] text-[18px] leading-[23px] md:text-[22px] md:leading-[28px] ">Tretinoin</p>
              <p className="text-[14px] leading-[19px] md:text-[16px] md:leading-[23px]">Keeps pores clear while reducing redness and dark spots</p>
            </div>
            <div className="md:min-w-[275px] min-w-[260px] ">
              <img src={clindamycin.src} alt="" className="" />
              <p className="mt-[28px] mb-[16px] text-[18px] leading-[23px] md:text-[22px] md:leading-[28px] ">Clindamycin</p>
              <p className="text-[14px] leading-[19px] md:text-[16px] md:leading-[23px]">
                Fights acne-contributing bacteria and helps reduce painful
                blemishes
              </p>
            </div>
            <div className="md:min-w-[275px] min-w-[260px]  ">
              <img src={azelaic.src} alt="" className="" />
              <p className="mt-[28px] mb-[16px] text-[18px] leading-[23px] md:text-[22px] md:leading-[28px] ">Tranexamic acid</p>
              <p className="text-[14px] leading-[19px] md:text-[16px] md:leading-[23px]">Reduces hyperpigmentation and reduces inflammation</p>
            </div>
            <div className="flex-shrink-0 w-1 md:w-[95px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2b;
