import React from "react";
import Image from "next/image";
import no1 from "../public/assets/no1.svg";
import no2 from "../public/assets/no2.svg";
import no3 from "../public/assets/no3.svg";
import rectangle1 from "../public/assets/Rectangle1.png";
import rectangle2 from "../public/assets/Rectangle2.png";
import rectangle3 from "../public/assets/Rectangle3.png";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";

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

const Section2 = () => {
  return (
    <div className="px-5 md:px-[125px] md:pt-[120px] md:pb-[130px] py-[90px]">
      <p className=" text-[28px] md:text-start md:text-[38px] leading-[35px] md:leading-[48px] md:max-w-xl font-bold text-[#3E7EEE]">
        Get your best skin in 3 steps
      </p>
      <div className="max-w-xl min-w-full mt-10 md:mt-[60px] md:grid grid-flow-col grid-cols-3 gap-20">
        <div>
          <div className="">
            <div className="relative mb-6 md:mb-7">
              <Image src={no1} alt="" className="absolute ml-3 mt-3" />
              <Image src={rectangle1} alt="" />
            </div>
            <div className="flex justify-between">
              <p className="text-[20px] leading-[23px] md:text-[26px] md:leading-[32px] text-[#333D47] font-medium">
                Tell us about your skin
              </p>
            </div>
            <p className="text-base md:text-[18px] md:leading-[26px] leading-[22px] text-[#333D47] mt-2.5 md:mt-4">
              Answer a few questions about your skin concern and medical history
              and submit photos to help us create the right cream for your skin
            </p>
          </div>
        </div>

        <div>
          <div className="mt-[50px] md:mt-0">
            <div className="relative mb-6 md:mb-7">
              <Image src={no2} alt="" className="absolute ml-3 mt-3" />
              <Image src={rectangle2} alt="" />
            </div>
            <div className="flex justify-between">
              <p className="text-[20px] leading-[25px] md:text-[26px] md:leading-[32px] text-[#333D47] font-medium">
                Get your skincare formula
              </p>
            </div>
            <p className="text-base md:text-[18px] md:leading-[26px] leading-[22px] text-[#333D47] mt-2 md:mt-4">
              Receive your personalized cream for your skin tailored to help you
              achieve your skin goals
            </p>
          </div>
        </div>

        <div>
          <div className="mt-[50px] md:mt-0">
            <div className="relative mb-6 md:mb-7">
              <Image src={no3} alt="" className="absolute ml-3 mt-3" />
              <Image src={rectangle3} alt="" />
            </div>
            <div className="flex justify-between">
              <p className="text-[20px] leading-[25px] md:text-[26px] md:leading-[32px] text-[#333D47] font-medium">
                Ongoing support
              </p>
            </div>
            <p className="text-base md:text-[18px] md:leading-[26px] leading-[22px] text-[#333D47] mt-2 md:mt-4">
              Easily check-in with your dermatology provider to track your
              skin&apos;s progress and adjust your cream over time
            </p>
          </div>
        </div>
      </div>
      <div className="md:mt-[60px] mt-10">
        <Link href="/all-treatments">
          <SkeenButton className="text-sm md:text-base md:leading-5 font-medium">
            Get my cream now
          </SkeenButton>
        </Link>
      </div>
    </div>
  );
};

export default Section2;
