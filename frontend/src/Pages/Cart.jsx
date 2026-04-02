import React from "react";
import { useCart } from "../Context/CartContext";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cartItem, removeFromCart } = useCart();

  const handleRemove = (id) => {
  const el = document.getElementById(`cart-item-${id}`);

  if (el) {
    el.style.opacity = "0";
    el.style.transform = "translateX(40px)";
  }

  setTimeout(() => {
    removeFromCart(id);
  }, 300);
};

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-10 grid grid-cols-3 gap-10">
      
      {/* LEFT BOX */}
      <div className="col-span-2 border border-gray-200 p-6">
        
        <div className="flex justify-between mb-6">
          <h2 className="text-sm font-semibold tracking-wide">
            YOUR ORDER
          </h2>
          <span className="text-sm text-gray-500">
            ({cartItem.length})
          </span>
        </div>

        <div className="space-y-6">
          {cartItem.map((item) => (
  <div
    key={item._id}
    className={`flex gap-4 transition-all duration-300`}
    id={`cart-item-${item._id}`}
  >
    
    {/* IMAGE */}
    <img
      src={item.img}
      className="w-20 h-24 p-0.5 object-contain border border-[#D9D9D9]"
    />

    {/* DETAILS */}
    <div className="flex-1 text-sm">
      <p className="font-medium">{item.productName}</p>
      <p className="text-gray-500">
        {item.brandName || "Black / L"}
      </p>

      <div className="mt-2 text-xs text-gray-600">
        Qty: <span className="font-medium">{item.quantity}</span>
      </div>

      {/* REMOVE BUTTON */}
      <button
        onClick={() => handleRemove(item._id)}
        className="mt-2 text-xs text-red-500 hover:underline"
      >
        Remove
      </button>
    </div>
    

    {/* PRICE */}
    <div className="text-sm font-medium">
      ${item.price * item.quantity}
    </div>

  </div>
))}
        </div>
      </div>

      {/* RIGHT BOX */}
      <div className="border border-gray-200 p-6 h-fit">
        
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Subtotal</span>
            <span>${totalPrice}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Shipping</span>
            <span className="text-gray-400 text-xs">
              Free Shipping
            </span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </div>

        <button className="w-full mt-6 border border-black py-2 text-sm hover:bg-black hover:text-white transition">
          <NavLink to="/Checkout">CONTINUE</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Cart;