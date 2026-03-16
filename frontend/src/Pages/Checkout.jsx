import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../Context/CartContext"

const Checkout = () => {

  const { cartItem, clearCart } = useCart()
  const navigate = useNavigate()

  const userId = localStorage.getItem("userId")

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: ""
  })

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleOrder = async () => {

    const res = await fetch("http://localhost:8000/api/order/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        items: cartItem,
        shipping: form,
        totalPrice
      })
    })

    const data = await res.json()

    await clearCart()

    navigate("/OrderConfirmed")
  }

  return (
    <div className="p-10 grid grid-cols-2 gap-10">

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Shipping Details</h2>

        <input name="name" placeholder="Full Name" onChange={handleChange} className="border p-2 w-full"/>
        <input name="phone" placeholder="Phone" onChange={handleChange} className="border p-2 w-full"/>
        <input name="address" placeholder="Address" onChange={handleChange} className="border p-2 w-full"/>
        <input name="city" placeholder="City" onChange={handleChange} className="border p-2 w-full"/>
        <input name="pincode" placeholder="Pincode" onChange={handleChange} className="border p-2 w-full"/>

        <button
          onClick={handleOrder}
          className="bg-[#002b64] text-white px-6 py-2 rounded"
        >
          Place Order
        </button>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

        {cartItem.map((item) => (
          <div key={item._id} className="flex justify-between mb-2">
            <span>{item.productName}</span>
            <span>${item.price}</span>
          </div>
        ))}

        <div className="border-t mt-4 pt-4 font-bold text-lg">
          Total: ${totalPrice}
        </div>
      </div>

    </div>
  )
}

export default Checkout