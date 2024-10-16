import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import { useState } from "react";
import FAQ from "./faqsection";
import Link from "next/link";

const SkeenButton = styled(Button)({
  background: "#3E7EEE !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 38px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "16px 30px",
  },
});

const Faq = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Skeen?",
      answer:
        "Skeen is a personalized skincare service that provides custom prescription treatments for acne, anti-aging, hyperpigmentation, and other skin concerns. Our formulas are tailored to each person’s skin needs, designed by licensed dermatology providers.",
      open: true,
    },
    {
      question:
        "What makes Skeen different from store-bought skincare products?",
      answer:
        "Unlike store-bought products, Skeen offers personalized prescription formulas based on your unique skin type and concerns. Our products are crafted by dermatology providers and include active ingredients that target specific skin issues, which aren't always available in over-the-counter products, making it more effective than over-the-counter products",
      open: false,
    },
    {
      question: "Are the ingredients safe to use?",
      answer:
        "Yes, Skeen’s ingredients are safe and approved by dermatology providers. We use clinically proven, FDA-approved ingredients like tretinoin, clindamycin, and niacinamide, which are commonly prescribed by dermatologists.",
      open: false,
    },
    {
      question: "When can I expect to start seeing results with my formula?",
      answer:
        "Most users begin to see noticeable improvements in their skin within 6 to 12 weeks of consistent use. However, everyone's skin is unique, so your timeline may differ.",
      open: false,
    },
    {
      question: "Are your dermatology providers qualified?",
      answer:
        " Yes, Skeen’s dermatology providers are licensed and qualified healthcare professionals, who specialize in skincare. They are trained to assess your skin needs and prescribe appropriate treatments, ensuring you receive expert guidance throughout your skincare journey.",
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
    console.log("click " + index);
  };

  return (
    <div className="px-5 md:px-[125px] md:pt-[120px] pt-20 md:pb-36 pb-[90px]">
      <p className=" text-[28px] leading-[35px] md:text-start md:text-[38px] md:leading-[48px] md:max-w-xl font-bold text-[#3E7EEE]  mb-[60px] md:mb-[80px] pr-8">
        Frequently asked questions
      </p>
      <div className="">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
        {/* <hr className="h-[0.5px] border-t-[0.5px] my-6 md:my-8 mb-6 md:mb-12 " /> */}
      </div>
      <div className="mt-[40px] md:mt-[60px]">
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSek0GpD3HYeD6VRRTr_nP-r5--4r_GoeL-m_XkUfoJ1mxWTUw/viewform">
          <SkeenButton className="text-sm leading-[17px] md:text-base md:leading-5 font-medium">
            See all FAQs
          </SkeenButton>
        </Link>
      </div>
    </div>
  );
};

export default Faq;
