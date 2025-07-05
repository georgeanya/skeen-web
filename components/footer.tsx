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
    <div className="bg-[#181C26] md:px-[125px] px-5 md:pt-[110px] pt-20 text-white">
      <div className="text-center">
        <p className="text-[34px] leading-[43px] md:text-[50px] md:leading-[68px] font-bold mb-5 md:mb-[22px]">
          Ready for your clearest skin?
        </p>
        <p className="text-lg leading-6 md:text-[22px] md:leading-[30px] font-normal md:mb-[48px] mb-8 max-w-2xl flex justify-center m-auto">
          Complete an online visit and get your custom cream prepared by a
          licensed dermatology provider
        </p>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSek0GpD3HYeD6VRRTr_nP-r5--4r_GoeL-m_XkUfoJ1mxWTUw/viewform">
          <SkeenButton className="self-center text-sm md:text-base font-medium">
            Get my cream now
          </SkeenButton>
        </Link>
      </div>
      <hr className="h-[0.5px] border-t-[0.5px] md:mt-[110px] mt-[90px] md:mb-[90px] mb-[70px] text-[#C7CBD1]" />
      <div className="md:flex md:justify-between text-start">
        <img src={skeen.src} className="self-start" alt="skeen logo" />
        <div className="flex flex-wrap">
          <div className="w-40 md:w-[245px]">
            <h3 className="md:mb-8 mb-[27px] mt-[52px] md:mt-0 text-[15px] leading-[18px] md:text-base font-medium">
              TREATMENTS
            </h3>
            <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
              <Link href="/acne">Acne</Link>
            </p>
            <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
              <Link href="skin-aging">Anti-aging</Link>
            </p>
            <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
              <Link href="/pigmentation">Pigmentation</Link>
            </p>
          </div>
          <div className="w-40 md:w-[245px]">
            <h3 className="md:mb-8 mb-[27px] mt-[52px] md:mt-0 text-[15px] leading-[18px] md:text-base md:leading-5 font-medium">
              RESOURCES
            </h3>
            <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
              <Link href="/404">Help center</Link>
            </p>
            <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
              <Link href="https://lifebox-labs.notion.site/Privacy-policy-9c564d4280694f34805e974ee3084c35">
                Privacy policy
              </Link>
            </p>
            <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
              <Link href="https://lifebox-labs.notion.site/lifebox-labs/Terms-of-use-1dc563d01e574d108fdc23f4c51d2ee1">
                Terms of use
              </Link>
            </p>
            {/* <p className="md:mb-6 md:text-sm text-sm leading-4 mb-[22px] text-[#C4CED4]">
              <Link href="/cookie">Cookie policy</Link>
            </p> */}
          </div>
          <div className="w-40 md:w-[245px]">
            <h3 className="md:mb-8 mb-[27px] mt-[52px] md:mt-0 text-[15px] leading-[18px] md:text-base md:leading-5 font-medium">
              COMPANY
            </h3>
            <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
              <Link href="https://lifebox.ng/">About</Link>
            </p>
            <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
              <Link href="/blog">Blog</Link>
            </p>
            <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
              <Link href="https://lifebox-labs.notion.site/Join-Lifebox-Labs-caed82beacb448cf9be9b380907caa19">
                Careers
              </Link>
            </p>
            {/* <p className="md:mb-6 md:text-sm text-sm leading-4 mb-[22px] text-[#C4CED4]">
              <Link href="/404">Press</Link>
            </p> */}
          </div>
          <div className="w-40 md:w-[245px]">
            <h3 className="md:mb-8 mb-[27px] mt-[52px] md:mt-0 text-[15px] leading-[18px] md:text-base md:leading-5 font-medium">
              CONTACT
            </h3>
            <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
              <Link href="tel:+2347040559724">+2347040559724</Link>
            </p>
            <p className="md:mb-[26px] md:text-[15px] text-sm leading-4 mb-[22px] text-[#C4CED4]">
              <Link href="mailto:hi@skeen.co">hi@tryskeen.com</Link>
            </p>
            <div className="flex">
              <Link href="https://facebook.com/tryskeen">
                <img
                  src={fbook.src}
                  className="mr-5 cursor-pointer"
                  alt="facebook logo"
                />
              </Link>
              <Link href="https://instagram.com/tryskeen">
                <img
                  src={insta.src}
                  className="mr-5 cursor-pointer"
                  alt="instagram logo"
                />
              </Link>
              <Link href="https://twitter.com/tryskeen">
                <img
                  src={twitter.src}
                  className="mr-5 cursor-pointer"
                  alt="twitter logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-[0.5px] border-t-[0.5px] md:mt-[90px] mt-[70px] text-[#C7CBD1]" />
      <p className="md:mt-[45px] mt-[35px] text-sm md:text-[15px] leading-[17px] md:leading-[18px] pb-[51px] md:pb-[65px] text-center md:text-start">
        ©2024 Skeen, a Lifebox Labs company
      </p>
    </div>
  );
};

export default Footer;
