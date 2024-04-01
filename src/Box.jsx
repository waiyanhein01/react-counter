import React, { useState } from "react";

const Box = (props) => {
  const [hide, setHide] = useState(true);

  const openBtnHandler = () => {
    setHide(false);
  };

  const closeBtnHandler = () => {
    setHide(true);
  };

  const toggleBtnHandler = () => {
    setHide(!hide);
  };

  return (
    <div className="">
      <div className="p-3">
        <button
          onClick={toggleBtnHandler}
          className=" flex justify-between w-full items-center border active:scale-100 duration-100 border-gray-400 p-2 text-center bg-red-400 rounded-lg"
        >
          <span className=" text-white">{props.question}</span>
          {hide ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </button>
        {/* <button onClick={openBtnHandler} className=" col-span-1 border active:scale-95 duration-100 border-gray-400 p-2 text-center bg-green-400 rounded-lg">
          Open
        </button>
        <button onClick={closeBtnHandler} className=" col-span-1 border active:scale-95 duration-100 border-gray-400 p-2 text-center bg-red-400 rounded-lg">
          Close
        </button> */}
        <div
          className={`${
            hide && "hidden"
          } col-span-2 border border-gray-300 p-5 rounded-lg`}
        >
          {/* <h1 className="font-bold text-2xl">Text Box</h1> */}
          <p className="">
            {props.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Box;
