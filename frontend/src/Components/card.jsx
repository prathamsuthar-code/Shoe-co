import React from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="w-[260px] ">
  
  {/* Image */}
  <Link to={`/products/${product.id}`}>
    <div className="w-full h-[320px] bg-[#F3F4F9] border border-[#D9D9D9] overflow-hidden">
      <img
        src={product.img}
        alt={product.productName}
        className="w-full h-full object-cover"
        onError={(e) => (e.target.src = "/Productfallback.png")}
      />
    </div>
  </Link>

  {/* Content */}
  <div className="mt-3 space-y-1">

    {/* Brand */}
    <p className="text-xs text-gray-500">
      {product.brandName}
    </p>

    {/* Name + Price (IMPORTANT CHANGE) */}
    <div className="flex justify-between items-center">
      <h3 className="text-sm font-medium text-black">
        {product.productName}
      </h3>

      <span className="text-sm font-semibold text-black">
        ${product.sellingPrice}
      </span>
    </div>

  </div>

  {/* Button */}
  <button
    onClick={() => addToCart(product)}
    className="w-full mt-3 py-2 bg-black text-white text-sm font-medium hover:bg-gray-900"
  >
    Add to Cart
  </button>
</div>
  );
};

export default Card;