import React from "react";
import minus from "../public/assets/minus.png";
import plus from "../public/assets/plus.png";
import Image from "next/image";

const FAQ = ({ faq, index, toggleFAQ }: any) => {
  return (
    <div>
      <div
        className=" flex flex-row-reverse justify-between"
        onClick={() => toggleFAQ(index)}
        key={index}
      >
        <div className="self-start min-w-fit cursor-pointer h-4 md:h-5">
          {faq.open ? (
            <img
              className="flex self-center w-4 md:w-5 mt-3.5"
              src={minus.src}
              alt=""
            />
          ) : (
            <img
              className="self-center w-4 md:w-5 mt-1"
              src={plus.src}
              alt=""
            />
          )}
        </div>
        <div className="self-center">
          <p className="text-lg md:text-2xl text-[#333D47] md:leading-[30px] font-medium">
            {faq.question}
          </p>
          {faq.open ? (
            <p className="text-base md:text-xl md:leading-[30px] text-[#6C7884] mt-2 md:mt-6">
              {faq.answer}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <hr className="my-6 md:my-[34px] text-[#C0C9D8]" />
    </div>
  );
};

export default FAQ;
