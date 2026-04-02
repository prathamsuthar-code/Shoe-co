import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[600px] flex">

      {/* LEFT SIDE */}
      <div className="w-1/2 bg-[#2d2d2d] relative flex items-center justify-center">

        {/* Decorative arrows (optional) */}
        <div className="absolute left-5 text-[#7fd1d8] text-6xl">
          ❯❯
        </div>

        {/* Shoe Image */}
        <img
          src="/JORDAN-Coolfrze.png"
          alt="shoe"
          className="w-[80%] object-contain z-10"
        />

        {/* Discount Box */}
        <div className="absolute top-10 left-10 bg-[#9ed9df] px-4 py-3 text-black font-bold">
          DISC <br /> 50% <br /> OFF
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 bg-black text-white flex flex-col justify-center px-16">

        <h1 className="text-[70px] font-extrabold leading-none">
          RUNNING
        </h1>

        <h1 className="text-[50px] text-[#9ed9df] font-bold">
          SHOES
        </h1>

        <button className="mt-6 bg-[#9ed9df] text-black px-6 py-3 rounded-full font-semibold w-fit">
          PRE - ORDER NOW
        </button>

      </div>

    </div>
  );
};

export default Hero;