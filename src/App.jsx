import React from "react";
import { useState, useEffect } from "react";
const App = () => {
  const [pageviews, setPageviews] = useState(100);
  const [sliderPosition, setSliderPosition] = useState(50);

  const [isTrue, setIsTrue] = useState(true);

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setPageviews(value * 2);
    setSliderPosition(value);
  };
  return (
    <main>
      <div className="w-[100vw]  h-full"></div>
      <div className=" App ">
        <div className=" py-14 lg:py-20 text-center">
          <h1 className="text-center text-xl font-bold mb-3 ">
            Simple, price-based pricing
          </h1>
          <p className="px-[80px] text-[#8E93A9] text-center text-[15px]">
            Sign-up for 30 days trial. No credit card required.
          </p>
        </div>

        <div className=" flex justify-center mx-4">
          <div className="w-[500px] h-[470px]  shadowbx bg-white">
            <div className="flex justify-between p-9">
              <p className="text-[#8E93A9] text-[15px] tracking-widest font-bold  mx-auto  lg:m-0">
                100K PAGEVIEWS
              </p>
              <h1 className="text-4xl text-center font-bold hidden lg:block ">
                $16.00 <span className="text-xl  font-light">/ month</span>
              </h1>
            </div>
            <div className="flex mt-4 justify-center relative w-5/6 mx-auto">
              <input
                style={{
                  background: `linear-gradient(to right, #22d3ee 0%, #22d3ee ${sliderPosition}%, #e2e8f0 ${sliderPosition}%, #e2e8f0 100%)`,
                }}
                min={0}
                value={sliderPosition}
                onChange={handleSliderChange}
                max={100}
                type="range"
                className="w-full h-2 bg-[#A1F2EA] appearance-none cursor-pointer"
              />
            </div>

            <div className="flex justify-center gap-2 py-14  ">
              <div className="relative flex items-center gap-2">
                <h1 className="text-[#8E93A9] lg:text-[15px] text-[12px]">
                  Monthly Billing
                </h1>
                <div
                  onClick={() => setIsTrue((prevValue) => !prevValue)}
                  className="w-12 rounded-full hover:bg-[#7CE9DE] cursor-pointer duration-300  lg:h-6 transition-all h-5 border bg-[#CFD8EE]"
                ></div>
                <p
                  onClick={() => setIsTrue(false)}
                  className={`h-4 w-4 bg-white absolute  top-2   lg:left-[110px] left-[114px] rounded-full ${
                    isTrue == true ? "block" : "hidden"
                  }`}
                ></p>
                <p
                  onClick={() => setIsTrue(true)}
                  className={`h-4 w-4  bg-white absolute top-2 lg:top-2 left-[89px] lg:left-[134px] rounded-full ${
                    isTrue === false ? "block" : "hidden"
                  } `}
                ></p>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[#8E93A9] lg:text-[15px] text-[12px]">
                  Yearly Billing
                </p>
                <p className="text-[11px] mt-1 bg-[#FFECE7] text-[#F3B29B] font-semibold rounded-full p-1 border ">
                  25% discount
                </p>
              </div>
            </div>
            <hr />

            <div className="flex justify-around py-8 flex-wrap lg:flex-nowrap">
              <div>
                <h1 className="flex mb-2 text-[#8E93A9]  gap-3 text-[15px] items-center">
                  <img src="/images/icon-check.svg" alt="" /> Unlimited website
                </h1>
                <h1 className="flex  mb-2 text-[#8E93A9]  gap-3 text-[15px] items-center">
                  <img src="/images/icon-check.svg" alt="" /> 100% Data
                  ownership website
                </h1>
                <h1 className="flex  text-[#8E93A9]  gap-3 text-[15px] items-center">
                  <img src="/images/icon-check.svg" alt="" /> Email report
                </h1>
              </div>
              <div className="mt-7 mr-6 lg:mr-0 lg:mt-0">
                <button className="px-10 py-3 text-[#C5D2FA] hover:text-white duration-300 transition-all rounded-full bg-[#293356]">
                  Start my trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
