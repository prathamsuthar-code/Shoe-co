import React from "react";

const collections = [
  {
    title: "CASUAL",
    image: "/CasualWear.png",
  },
  {
    title: "RUNNING",
    image: "/RunningWear.png",
  },
  {
    title: "SPORTS",
    image: "/SportsWear.png",
  },
];

const ShoeCollections = () => {
  return (
    <div className="px-10 py-16">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 ">
          OUR COLLECTIONS
        </h2>

        <button className="bg-black text-white px-5 py-2 rounded-full text-sm hover:bg-gray-900 transition">
          View more →
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-3 gap-6">

        {collections.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden group cursor-pointer"
          >
            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full aspect-square object-cover transition duration-500 group-hover:scale-105"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>

            {/* TEXT */}
            <h3 className="absolute bottom-6 left-6 text-white text-3xl md:text-4xl font-extrabold tracking-wider uppercase opacity-90">
              {item.title}
            </h3>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ShoeCollections;