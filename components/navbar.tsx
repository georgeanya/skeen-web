import { useState } from "react";
import skeen from "../public/assets/skeen.svg";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const SkeenButton = styled(Button)({
  background: "#3E7EEE !important",
  fontFamily: "Circular Std",
  color: "#f8f8f8",
  padding: "14px 30px",
  margin: "0px 0px",
  borderRadius: "32px",
  textTransform: "none",
});

// const ArrowIcon = styled(ArrowForwardIcon)({
//   color: "#f8f8f8",
//   padding: "1.5px",
//   marginTop: "-2px",
//   width: "21px",
//   ["@media (max-width:780px)"]: {
//     width: "16px",
//     marginTop: "0px",
//   },
// });

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(true);

  return (
    <div>
      <div className="px-5 md:px-[125px] py-5 md:py-[25px]">
        <nav>
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/">
              <img
                src={skeen.src}
                className="mr-3  self-center w-[80px] md:w-[92px]"
                alt="Skeen health logo"
              />
            </Link>

            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden"
              aria-controls="navbar-solid-bg"
              onClick={() => {
                setIsToggled(!isToggled);
              }}
            >
              <span className="sr-only">Open main menu</span>
              {isToggled ? (
                <svg
                  className="w-6 h-6"
                  aria-hidden="false"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>

            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-solid-bg"
            >
              <ul className="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <li className="mt-3 mx-[22.5px] ">
                  <Link
                    href="/all-conditions"
                    className="text-sm md:text-base md:leading-5 pt-5 text-[#323232] rounded hover:text-blue-700 md:p-0 "
                  >
                    Treatments
                  </Link>
                </li>
                <li className="mt-3 mx-[22.5px] ">
                  <Link
                    href="http://paystack.shop/skeen"
                    className="text-sm md:text-base md:leading-5 pt-5 text-[#323232] rounded hover:text-blue-700 md:p-0 "
                  >
                    Shop
                  </Link>
                </li>
                <li className="mt-3 mx-[22.5px] ">
                  <Link
                    href="https://privhealth.bumpa.shop"
                    className="text-sm md:text-base md:leading-5 pt-5 text-[#323232] rounded hover:text-blue-700 md:p-0 "
                  >
                    Community
                  </Link>
                </li>
                {/* <li className="mt-3 mx-[22.5px] ">
                  <Link
                    href="/blog"
                    className="text-sm md:text-base md:leading-5 pt-5 text-[#323232] rounded hover:text-blue-700 md:p-0 "
                  >
                    Blog
                  </Link>
                </li> */}
                <li className="ml-[35px]">
                  <Link href="/all-conditions">
                    <SkeenButton className="text-sm leading-[17px]">
                      Get started now
                    </SkeenButton>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          {isToggled ? (
            <div className="hidden"></div>
          ) : (
            <ul className="pt-5">
              <li>
                <Link href="/all-conditions" className="block text-sm py-4">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="http://paystack.shop/skeen" className="block text-sm py-4">
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="https://privhealth.bumpa.shop"
                  className="block text-sm py-4"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link href="/blog" className="block text-sm py-4">
                  Blog
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/all-conditions">
                  <SkeenButton className="text-sm ">
                    Get started now
                  </SkeenButton>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
