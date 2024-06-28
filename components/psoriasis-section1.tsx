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
       question: "What is psoriasis?",
       answer:
         "Psoriasis is a chronic autoimmune condition that causes rapid buildup of skin cells, resulting in scaly, itchy, and inflamed patches on the skin.",
       open: true,
     },
     {
       question: "What causes psoriasis?",
       answer:
         "The exact cause of psoriasis is not fully understood, but it's believed to involve an overactive immune system and genetic factors. Triggers can include stress, infections, skin injuries, certain medications, and cold weather.",
       open: false,
     },
    
     {
       question: "How do I know if I have psoriasis?",
       answer:
         "Psoriasis typically presents as thick, red patches of skin covered with silvery scales. Common areas include the elbows, knees, scalp, and lower back. Other signs include dry, cracked skin that may bleed, itching, burning, or soreness, and thickened or ridged nails.",
       open: false,
     },
     {
       question: "How long does it take to clear psoriasis?",
       answer:
         "There is no cure for psoriasis, but treatments can help manage symptoms. With proper treatment, many people see improvement in 1-3 months. However, psoriasis is a chronic condition with periods of remission and flare-ups, so ongoing management is usually necessary. The duration and effectiveness of treatment can vary significantly between individuals.",
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
          What you should know about Psoriasis
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
