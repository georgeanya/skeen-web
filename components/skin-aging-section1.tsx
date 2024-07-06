import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import minus from "../public/assets/minus.png";
import purplearrow from "../public/assets/purplearrow.svg";
import support from "../public/assets/support.svg";
import Image from "next/image";

import Link from "next/link";
import FAQ2 from "./faq1";

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
    padding: "16px 32px",
  },
});

const Section1 = () => {
  const [faqs, setFaqs] = useState([
    {
       question: "What is skin aging?",
       answer:
         "Skin aging is a natural process that occurs over time, causing physical changes to the skin, including thinning, loss of fat and collagen, fine lines, wrinkles, dryness, age spots, and slower healing.",
       open: true,
     },
     {
       question: "What causes skin aging?",
       answer:
         "Skin aging can be caused by both intrinsic and extrinsic factors. Intrinsic factors include the natural aging process and genetics, while extrinsic factors include environmental and lifestyle choices, such as sun exposure, smoking, and repetitive facial expressions.",
       open: false,
     },
    
     {
       question: "What are the signs of skin aging?",
       answer:
         "Signs of skin aging include thinning, sagging, wrinkling, age spots, broken blood vessels, dryness, and itchiness.",
       open: false,
     },
     {
       question: "Can skin aging be reversed?",
       answer:
         "Some signs of skin aging can be reversed, but it depends on the severity of the aging and the effectiveness of the treatment.",
       open: false,
     },
     
   ]);
 
   const toggleFAQ = (index: number) => {
     setFaqs(
       faqs.map((faq, i) => {
         if (i === index) {
           faq.open = !faq.open;
         } else {
           faq.open = false;
         }
 
         return faq;
       })
     );
   };
  return (
    <div className="px-5 md:px-[125px] md:pt-28 pt-20 md:pb-[96px] pb-20 bg-[#222E50] text-white md:flex ">
      <div className="">
        <p className="text-[28px] leading-9 md:text-start md:text-[46px] md:leading-[58px] md:w-[360px] font-bold mr-3 md:mr-0  mb-[60px]">
          What you should know about Skin aging
        </p>
        <div className="md:mt-[37px] mt-[28px] hidden md:flex">
          <Link href="/book-consultation">
            <SkeenButton className="text-xs md:text-base font-medium">
              Start your consultation
            </SkeenButton>
          </Link>
        </div>
      </div>
      <div className="mt-[60xp] md:mt-0 md:w-full md:ml-[100px] mb-[40px] md:mb-0">
      {faqs.map((faq, index) => (
              <FAQ2 faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
            ))}
      </div>
      <div className=" md:hidden">
          <Link href="/book-consultation">
            <SkeenButton className="text-sm md:text-base font-medium">
              Start your consultation
            </SkeenButton>
          </Link>
        </div>
    </div>
  );
};

export default Section1;
