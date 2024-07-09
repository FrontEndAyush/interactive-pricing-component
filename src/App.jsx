import React from "react";

const App = () => {
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
              <p className="text-[#8E93A9] text-[15px] tracking-widest ">100K PAGEVIEWS</p>
              <h1 className="text-4xl text-center font-bold hidden lg:block ">
                $16.00 <span className="text-xl  font-light">/ month</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
