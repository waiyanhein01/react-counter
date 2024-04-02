import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const subBtnHandler = () => {
    // console.log("U sub")
    count > 1 && setCount(count - 1);
  };

  const addBtnHandler = () => {
    // console.log("U add")
    setCount(count + 1);
  };

  return (
    <div className=" grid grid-cols-2 p-5 gap-5">
      <h1 className=" col-span-2 border border-gray-400 p-5 text-center text-5xl bg-gray-100 rounded-lg">
        {count}
      </h1>
      <button
        onClick={subBtnHandler}
        className=" col-span-1 border active:scale-95 duration-100 border-gray-400 p-5 text-center bg-green-400 rounded-lg"
      >
        Sub
      </button>
      <button
        onClick={addBtnHandler}
        className=" col-span-1 border active:scale-95 duration-100 border-gray-400 p-5 text-center bg-red-400 rounded-lg"
      >
        Add
      </button>
    </div>
  );
};

export default Counter;
