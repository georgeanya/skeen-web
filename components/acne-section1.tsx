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
       question: "What is acne?",
       answer:
         "Acne takes the form of blackheads, whiteheads and pus-filled spots, which can appear on the face, neck, chest or back.",
       open: true,
     },
     {
       question: "What causes acne?",
       answer:
         "Acne is caused by a combination of factors, including overproduction of sebum, clogged pores, bacteria growth, hormonal fluctuations, stress, genetics, certain medications, environmental factors, and poor skin care habits.",
       open: false,
     },
    
     {
       question: "How do I know if I have acne?",
       answer:
         "You may have acne if you notice persistent red spots or pimples, whiteheads or blackheads, pustules or papules, cysts or nodules, oily or greasy skin, or uneven skin texture.",
       open: false,
     },
     {
       question: "How long does it take to clear acne?",
       answer:
         "The time it takes to clear acne varies depending on its severity and the treatment plan. Mild acne can clear up on its own within one to two weeks, while moderate acne may take two to four weeks to clear up with medicated treatment. Severe acne, however, can take several months or even years to clear up, and acne with scarring can also require extended treatment.",
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
          What you should know about acne
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
