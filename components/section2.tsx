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

const SustainButton = styled(Button)({
  background: "#4F9EEA !important",
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

const Section2 = () => {
  return (
    <div className="px-5 md:px-32 md:pt-[120px] pt-20 md:pb-36 pb-[90px]">
      <p className=" text-3xl md:text-start md:text-4xl md:max-w-xl font-bold text-[#4F9EEA]">
        How Skeen works
      </p>
      <div className="max-w-xl min-w-full mt-12 md:mt-[60px] md:grid grid-flow-col grid-cols-3 gap-20">
        <div>
          <div className="">
            <div className="relative mb-7">
              <Image src={no1} alt="" className="absolute ml-3 mt-3" />
              <Image src={rectangle1} alt="" />
            </div>
            <div className="flex justify-between">
              <p className="text-[20px] leading-[25px] md:text-2xl text-[#333D47] font-medium">
                Tell us about you
              </p>
            </div>
            <p className="text-base md:text-[18px] md:leading-[26px] leading-[22px] text-[#333D47] mt-2 md:mt-4">
              Answer a few questions about your skin concern and medical history
              and submit photos for our dermatology provider to review
            </p>
          </div>
        </div>

        <div>
          <div className="mt-[50px] md:mt-0">
            <div className="relative mb-7">
              <Image src={no2} alt="" className="absolute ml-3 mt-3" />
              <Image src={rectangle2} alt="" />
            </div>
            <div className="flex justify-between">
              <p className="text-[20px] leading-[25px] md:text-2xl text-[#333D47] font-medium">
                Get your personalized treatment plan
              </p>
            </div>
            <p className="text-base md:text-[18px] md:leading-[26px] leading-[22px] text-[#333D47] mt-2 md:mt-4">
              Receive the right medication/product for your skin directly at
              home
            </p>
          </div>
        </div>

        <div>
          <div className="mt-[50px] md:mt-0">
            <div className="relative mb-7">
              <Image src={no3} alt="" className="absolute ml-3 mt-3" />
              <Image src={rectangle3} alt="" />
            </div>
            <div className="flex justify-between">
              <p className="text-[20px] leading-[25px] md:text-2xl text-[#333D47] font-medium">
                Ongoing support
              </p>
            </div>
            <p className="text-base md:text-[18px] md:leading-[26px] leading-[22px] text-[#333D47] mt-2 md:mt-4">
              Easily check-in with your dermatology provider to track your
              skin&apos;s progress and adjust your treatment plan
            </p>
          </div>
        </div>
      </div>
      <div className="md:mt-[60px] mt-10">
        <Link href="/book-consultation">
          <SustainButton className="text-xs lg:text-base font-medium">
            Get started now
          </SustainButton>
        </Link>
      </div>
    </div>
  );
};

export default Section2;
