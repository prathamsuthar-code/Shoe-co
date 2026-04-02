import React from "react";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <div className="px-10 py-24 bg-[#f5f3f1]">

      <div className="grid grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-12">

          {/* TITLE */}
          <h2 className="text-6xl font-extrabold tracking-tight">
            ABOUT US
          </h2>

          {/* TOP TEXT (RIGHT ALIGNED) */}
          <p className="text-sm text-gray-700 max-w-[320px] ml-auto leading-relaxed">
            Our sneaker reselling platform helps people create a stylish
            and confident identity in the modern streetwear culture.
          </p>

          {/* BOTTOM BLOCK */}
          <div className="flex flex-col gap-4">

            <p className="text-sm text-gray-700 max-w-[320px] leading-relaxed">
              Our shoes are sourced from trusted sellers, ensuring authenticity
              and comfort so you can step out with confidence.
            </p>

            {/* SMALL IMAGE */}
            <img
              src="/AboutImage1.png"
              alt=""
              className="w-[320px] h-[180px] object-cover rounded-2xl"
            />

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-end gap-6">

          {/* BIG IMAGE */}
          <img
            src="/AboutImage2.png"
            alt=""
            className="w-[380px] h-[480px] object-cover rounded-2xl"
          />

          {/* READ MORE */}
          <div
            onClick={() => navigate("/About")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <span className="text-sm font-medium">Read more</span>

            <div className="w-10 h-[1px] bg-black transition-all group-hover:w-14"></div>

            <span className="text-lg transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AboutSection;