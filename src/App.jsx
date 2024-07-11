import React from "react";
import { useState, useEffect } from "react";
const App = () => {
  const [pageviews, setPageviews] = useState(100);
  const [price, setPrice] = useState(16);
  const [isTrue, setIsTrue] = useState(true);
  const [isYearly, setIsYearly] = useState(false);

  useEffect(() => {
    const newPrice = pageviews / 6.25;
    setPrice(isYearly ? newPrice * 0.75 : newPrice);
  }, [pageviews, isYearly]);

  const handleSliderChange = (e) => {
    setPageviews(e.target.value * 2);
  };
  return (
    <main>
      <div className="w-[100vw]  h-full"></div>
      <div className=" App">
        <div className=" py-20  text-center">
          <h1 className="text-center text-xl font-bold mb-3 ">
            Simple, price-based pricing
          </h1>
          <p className="px-[80px] text-[#8E93A9] text-center text-[15px]">
            Sign-up for 30 days trial. No credit card required.
          </p>
        </div>

        <div className=" flex justify-center">
          <div className="w-[500px] h-[500px] bg-white">
            <div className="flex justify-between p-9">
              <p className="text-[#8E93A9] text-[15px] tracking-widest font-bold  mx-auto  lg:m-0">
                100K PAGEVIEWS
              </p>
              <h1 className="text-4xl text-center font-bold hidden lg:block ">
                $16.00 <span className="text-xl  font-light">/ month</span>
              </h1>
            </div>
            <div className="flex mt-4 justify-center ">
              <input
                min={0}
                max={100}
                type="range"
                name=""
                className=" w-5/6 h-2 bg-[#A1F2EA]    appearance-none cursor-pointer"
                id=""
              />
            </div>

            <div className="flex justify-center gap-2 py-12  ">
              <div className="relative flex gap-2">
                <h1 className="text-[#B6B9CA] text-[15px]">Monthly Billing</h1>
                <div className="w-16 rounded-full hover:bg-[#7CE9DE] cursor-pointer duration-300 transition-all h-7 border bg-[#CFD8EE]"></div>
                <p
                  onClick={() => setIsTrue(false)}
                  className={`h-5 w-5 bg-white absolute top-1  left-[109px] rounded-full ${
                    isTrue == true ? "block" : "hidden"
                  }`}
                ></p>
                <p
                  onClick={() => setIsTrue(true)}
                  className={`h-5 w-5 bg-white absolute top-1 left-[144px] rounded-full ${
                    isTrue === false ? "block" : "hidden"
                  } `}
                ></p>
              </div>
              <div className="flex gap-2">
                <p className="text-[#B6B9CA] text-[15px]">Yearly Billing</p>
                <p className="text-[11px]  bg-[#FFECE7] text-[#F3B29B] font-semibold rounded-full p-1 border ">
                  25% discount
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
