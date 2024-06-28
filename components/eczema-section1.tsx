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
       question: "What is eczema?",
       answer:
         "Eczema, also known as atopic dermatitis, is a chronic skin condition characterized by dry, itchy, and inflamed skin. It often appears as red, scaly patches that can become cracked and weepy.",
       open: true,
     },
     {
       question: "What causes eczema?",
       answer:
         "The exact cause of eczema is unknown, but it's believed to result from a combination of genetic and environmental factors. Triggers can include allergens, irritants, stress, and changes in temperature or humidity.",
       open: false,
     },
    
     {
       question: "How do I know if I have eczema?",
       answer:
         "Signs of eczema include dry, itchy skin, red or brownish-gray patches, small raised bumps that may leak fluid when scratched, and thickened, cracked, or scaly skin. It commonly affects the hands, feet, ankles, wrists, neck, upper chest, eyelids, and inside the bends of the elbows and knees.",
       open: false,
     },
     {
       question: "How long does it take to clear eczema?",
       answer:
         "The duration for clearing eczema varies as it's a chronic condition with periods of flare-ups and remission. With proper treatment and trigger avoidance, symptoms can improve within a few weeks, but complete clearing may not be possible for all patients. Long-term management is often necessary.",
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
          What you should know about Eczema
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
