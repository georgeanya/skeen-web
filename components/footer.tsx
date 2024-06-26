import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import twitter from "../public/assets/tw.svg";
import skeen from "../public/assets/skeenw.svg";
import fbook from "../public/assets/fbook.svg";
import insta from "../public/assets/insta.svg";
import Link from "next/link";
import Image from "next/image";

const SkeenButton = styled(Button)({
  background: "#3E7EEE !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "20px 38px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
  ["@media (max-width:780px)"]: {
    padding: "15px 30px",
  },
});

const Footer = () => {
  return (
    <div className="bg-[#181C26] md:px-[125px] px-5 md:pt-36 pt-20 text-white">
      <div className="text-center">
        <p className="text-[34px] leading-[43px] md:text-[50px] md:leading-[68px] font-bold mb-5 md:mb-[22px]">
          Start improving your skin
        </p>
        <p className="text-lg leading-6 md:text-[22px] md:leading-[30px] font-normal md:mb-[48px] mb-8 max-w-2xl flex justify-center m-auto">
          Complete an online consultation so a licensed dermatology provider can
          help you find relief
        </p>
        <Link href="/book-consultation">
          <SkeenButton className="self-center text-sm md:text-base font-medium">
            Get started today
          </SkeenButton>
        </Link>
      </div>
      <hr className="md:mt-[110px] mt-[90px] md:mb-[90px] mb-[70px] text-[#C7CBD1]" />
      <div className="md:flex md:justify-between text-start">
        <Image src={skeen.src} className="self-start" alt="skeen logo" />
        <div className="flex flex-wrap">
          <div className="w-40 md:w-[245px]">
            <h3 className="md:mb-8 mb-[27px] mt-[52px] md:mt-0 text-[15px] leading-[18px] md:text-base font-medium">
              TREATMENTS
            </h3>
            <p className="md:mb-6 md:text-[15px] text-sm leading-4 mb-4 text-[#C4CED4]">
              <Link href="/blog">Acne</Link>
            </p>
            <p className="md:mb-6 md:text-[15px] text-sm leading-4 mb-4 text-[#C4CED4]">
              <Link href="/">Eczema</Link>
            </p>
            <p className="md:mb-6 md:text-[15px] text-sm leading-4 mb-4 text-[#C4CED4]">
              <Link href="https://priv-health.notion.site/Terms-of-use-254e525466a3493687d94fd671d93ad8">
                Clogged pores
              </Link>
            </p>
            <p className="md:mb-6 md:text-[15px] text-sm leading-4 mb-4 text-[#C4CED4]">
              <Link href="https://priv-health.notion.site/Privacy-policy-2f70cbb81ab843ca920e87d2b32caa37">
                Psoriasis
              </Link>
            </p>
            <p className="md:mb-6 md:text-[15px] text-sm leading-4 mb-4 text-[#C4CED4]">
              <Link href="https://priv-health.notion.site/Privacy-policy-2f70cbb81ab843ca920e87d2b32caa37">
                See all
              </Link>
            </p>
          </div>
          <div className="w-40 md:w-[245px]">
            <h3 className="md:mb-8 mb-[27px] mt-[52px] md:mt-0 text-[15px] leading-[18px] md:text-base md:leading-5 font-medium">
              RESOURCES
            </h3>
            <p className="md:mb-6 md:text-[15px] text-sm leading-4 mb-4 text-[#C4CED4]">
              <Link href="/404">Help center</Link>
            </p>
            <p className="md:mb-6 md:text-[15px] text-sm leading-4 mb-4 text-[#C4CED4]">
              <Link href="https://lifebox-labs.notion.site/Privacy-policy-9c564d4280694f34805e974ee3084c35">
                Privacy policy
              </Link>
            </p>
            <p className="md:mb-6 md:text-[15px] text-sm leading-4 mb-4 text-[#C4CED4]">
              <Link href="https://lifebox-labs.notion.site/lifebox-labs/Terms-of-use-1dc563d01e574d108fdc23f4c51d2ee1">
                Terms of use
              </Link>
            </p>
            {/* <p className="md:mb-6 md:text-sm text-sm leading-4 mb-4 text-[#C4CED4]">
              <Link href="/cookie">Cookie policy</Link>
            </p> */}
          </div>
          <div className="w-40 md:w-[245px]">
            <h3 className="md:mb-8 mb-[27px] mt-[52px] md:mt-0 text-[15px] leading-[18px] md:text-base md:leading-5 font-medium">
              COMPANY
            </h3>
            <p className="md:mb-6 md:text-[15px] text-sm leading-4 mb-4 text-[#C4CED4]">
              <Link href="https://lifebox.ng/">About</Link>
            </p>
            <p className="md:mb-6 md:text-[15px] text-sm leading-4 mb-4 text-[#C4CED4]">
              <Link href="/blog">Blog</Link>
            </p>
            <p className="md:mb-6 md:text-[15px] text-sm leading-4 mb-4 text-[#C4CED4]">
              <Link href="https://lifebox-labs.notion.site/Join-Lifebox-Labs-caed82beacb448cf9be9b380907caa19">
                Careers
              </Link>
            </p>
            {/* <p className="md:mb-6 md:text-sm text-sm leading-4 mb-4 text-[#C4CED4]">
              <Link href="/404">Press</Link>
            </p> */}
          </div>
          <div className="w-40 md:w-[245px]">
            <h3 className="md:mb-8 mb-[27px] mt-[52px] md:mt-0 text-[15px] leading-[18px] md:text-base md:leading-5 font-medium">
              CONTACT
            </h3>
            <p className="md:mb-6 md:text-[15px] text-sm leading-4 mb-4 text-[#C4CED4]">
              <Link href="tel:+2347040559724">+2347040559724</Link>
            </p>
            <p className="md:mb-6 md:text-[15px] text-sm leading-4 mb-4 text-[#C4CED4]">
              <Link href="mailto:hi@custodiahealth.com">hi@skeen.co</Link>
            </p>
            <div className="flex">
              <Link href="https://facebook.com/custodiahealth">
                <Image
                  src={fbook.src}
                  className="mr-5 cursor-pointer"
                  alt="facebook logo"
                />
              </Link>
              <Link href="https://instagram.com/custodiahealth">
                <Image
                  src={insta.src}
                  className="mr-5 cursor-pointer"
                  alt="instagram logo"
                />
              </Link>
              <Link href="https://twitter.com/custodiahealth">
                <Image
                  src={twitter.src}
                  className="mr-5 cursor-pointer"
                  alt="twitter logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="md:mt-[90px] mt-[70px] text-[#C7CBD1]" />
      <p className="md:mt-[45px] mt-[35px] text-sm md:text-[15px] leading-[17px] md:leading-[18px] pb-[51px] md:pb-[65px] text-center md:text-start">
        ©2024 Skeen, a Lifebox Labs company
      </p>
    </div>
  );
};

export default Footer;
