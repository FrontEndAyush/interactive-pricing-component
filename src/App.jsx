import React from "react";

const App = () => {
  return (
    <main>
      <div className="w-[100vw] App h-full"></div>
      <div className="flex justify-center">
        <div className="w-full">
          <img src="/images/bg-pattern.svg" className="w-full" alt="" />
        </div>
        <div className="absolute top-0 flex mx-auto">
          <h1 className="text-center">Simple, price-based pricing</h1>
        </div>
      </div>
    </main>
  );
};

export default App;