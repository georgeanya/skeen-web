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
      question: "How do I use my Pigmentation Cream?",
      answer:
        "After cleansing your skin, apply one pump to your fingertips and gently massage onto your face - or as directed by your dermatology provider.",
      open: true,
    },
    {
      question: "When will I see results?",
      answer:
        "Many patients using the Pigmentation Cream see noticeable results within 6 to 12 weeks with consistent use. However, everyone's skin is unique, so your timeline may differ.",
      open: false,
    },

    {
      question: "How long will my Pigmentation Cream last?",
      answer: "One bottle contains approximately a 2-month supply.",
      open: false,
    },
    {
      question: "Can I use other products with my Pigmentation Cream?",
      answer:
        "Yes, you can, but since the Pigmentation Cream contains clinical-strength actives, we recommend simplifying your routine to gentle cleansing and moisturizing in conjunction with your cream. Your dermatology provider will provide more information about incorporating your cream into your skincare routine.",
      open: false,
    },
    {
      question: "What type of skin does the Pigmentation Cream work for?",
      answer:
        "The Pigmentation Cream can be used by all skin types (dry, combination, and oily). Your dermatology provider will use the information you provide to formulate one that works for you.",
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
        <p className="text-[28px] leading-9 md:text-start md:text-[46px] md:leading-[58px] md:w-[360px] font-bold mr-3 md:mr-0  mb-[36px]">
          FAQs about the pigmentation cream
        </p>
        <div className="md:mt-[37px] mt-[28px] hidden md:flex">
          <Link href="https://paystack.com/buy/skeen-pigmentation-formula">
            <SkeenButton className="text-xs md:text-base font-medium">
              Get my cream now
            </SkeenButton>
          </Link>
        </div>
      </div>
      <div className="mt-[60px] md:mt-0 md:w-full md:ml-[100px] mb-[40px] md:mb-0">
        {faqs.map((faq, index) => (
          <FAQ2 faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
      <div className=" md:hidden">
        <Link href="https://paystack.com/buy/skeen-pigmentation-formula">
          <SkeenButton className="text-sm md:text-base font-medium">
            Get my cream now
          </SkeenButton>
        </Link>
      </div>
    </div>
  );
};

export default Section1;
