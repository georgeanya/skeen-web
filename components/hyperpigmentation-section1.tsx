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
       question: "What is hyperpigmentation?",
       answer:
         "Hyperpigmentation is a condition where patches of skin become darker than the surrounding areas due to excess melanin production. It can affect people of all skin types.",
       open: true,
     },
     {
       question: "What causes hyperpigmentation?",
       answer:
         "Hyperpigmentation can be caused by sun exposure, inflammation, hormonal changes (such as during pregnancy), certain medications, and skin injuries or inflammation (post-inflammatory hyperpigmentation).",
       open: false,
     },
    
     {
       question: "How do I know if I have hyperpigmentation?",
       answer:
         "You can identify hyperpigmentation by noticing darker patches on your skin. These can be small spots or larger areas and can vary in color from light brown to dark brown or black, depending on your skin tone and the cause.",
       open: false,
     },
     {
       question: "How long does it take to clear hyperpigmentation?",
       answer:
         "The time to clear hyperpigmentation can range from a few months to years, depending on the cause, depth of discoloration, and treatment approach. Superficial hyperpigmentation may fade in 3-6 months with proper treatment, while deeper pigmentation can take a year or more to show significant improvement.",
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
          What you should know about Hyperpigmentation
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
