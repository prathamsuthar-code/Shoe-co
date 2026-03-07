import { Heart, Star } from "lucide-react";
import React from "react";
import { useCart } from "../Context/CartContext";

const Card = ({ product }) => {
  const { addToCart } = useCart();

  const path = import.meta.env.VITE_API_URL_IMAGE;

  console.log("path", path, "12312", path + product?.images?.[0]?.path);
  // console.log(cartItem)
  return (
    <div className="max-w-60 ">
      <div className="rounded-xl w-70 p-4  border border-[#e1e1e1]">
        <div className="rounded-xl w-full bg-gray-200 outline-1 outline-[#f4f4f4] ">
          {/* <div className=' p-4 w-4 bg-white'></div> */}
          <div className=" w-full justify-center relative">
            <img
              src={path + product?.images?.[0]?.path}
              alt=""
              className="rounded-xl h-62 w-full object-cover object-center"
            />
            {/* <button className='absolute rounded-full top-2 right-2 bg-white/80 backdrop-blur-sm p-1.5  text-gray-600 hover:text-red-500 hover:bg-white transition-all shadow-sm'> <Heart /></button> */}
          </div>
        </div>

        <div className="max-w-fit space-y-1 mt-1 mb-1">
          <h2 className="text-xl font-semibold">{product.productName}</h2>
          <h2 className="flex gap-2 text-blue-800 font-medium">
            <span>{product.brandName}</span>
          </h2>

          <h1 className="text-2xl font-bold">
            ${product.sellingPrice}{" "}
            <span className="text-gray-400 text-xl font-normal line-through ">
              ${product.mrp}
            </span>
          </h1>
        </div>
        <div className="flex justify-center">
          <button
            className=" rounded-xl w-full mt-1 mb-1 py-2 bg-blue-800 hover:bg-blue-950 transition-colors text-white items-center"
            onClick={() => {
              addToCart(product);
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
