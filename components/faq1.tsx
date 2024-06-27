import React from "react";
import minus from "../public/assets/minus.svg";
import plus from "../public/assets/plus.svg";

const FAQ2 = ({ faq, index, toggleFAQ }: any) => {
  return (
    <div>
      <div
        className="flex justify-between"
        onClick={() => toggleFAQ(index)}
        key={index}
      >
        <div className="self-center">
          <p className="text-lg leading-[22px] md:text-[24px] md:leading-[30px] font-medium">
            {faq.question}
          </p>
          {faq.open ? (
            <p className="text-base leading-[22px] md:text-[20px] md:leading-[30px] mt-2 md:mt-6">
              {faq.answer}
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="self-start min-w-fit cursor-pointer h-4 md:h-5">
          {faq.open ? (
            <img
              className="ml-6 flex self-center w-4 md:w-5 md:ml-1 mt-3.5"
              src={minus.src}
              alt=""
            />
          ) : (
            <img
              className="ml-6 self-center w-4 md:w-5 md:ml-1 mt-1"
              src={plus.src}
              alt=""
            />
          )}
        </div>
      </div>
      <hr className="my-6 md:my-[34px]" />
    </div>
  );
};

export default FAQ2;