import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "../Context/CartContext"

const Checkout = () => {
  const { cartItem, clearCart } = useCart()
  const navigate = useNavigate()

  const userId = localStorage.getItem("userId")

  const [form, setForm] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    address: "",
    city: "",
    pincode: ""
  })

  const [error, setError] = useState("")

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError("") // clear error when typing
  }

  const validateForm = () => {
    const {
      email,
      phone,
      firstName,
      lastName,
      country,
      state,
      address,
      city,
      pincode
    } = form

    if (
      !email ||
      !phone ||
      !firstName ||
      !lastName ||
      !country ||
      !state ||
      !address ||
      !city ||
      !pincode
    ) {
      return "Please fill all required fields"
    }

    if (!email.includes("@")) {
      return "Enter a valid email"
    }

    if (phone.length < 10) {
      return "Enter a valid phone number"
    }

    if (pincode.length < 5) {
      return "Enter a valid postal code"
    }

    return ""
  }

  const handleOrder = async () => {
    const validationError = validateForm()

    if (validationError) {
      setError(validationError)
      return
    }

    if (cartItem.length === 0) {
      setError("Your cart is empty")
      return
    }

    try {
      await fetch("http://localhost:8000/api/order/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          items: cartItem,
          shipping: form,
          totalPrice
        })
      })

      const orderData = {
        items: cartItem,
        totalPrice,
        shipping: form,
        orderId: "ORD-" + Date.now(),
        date: new Date().toLocaleDateString()
      }

      await clearCart()

      navigate("/OrderConfirmed", { state: orderData })
    } catch (err) {
      setError("Something went wrong. Try again.")
    }
  }

  return (
    <div className="px-12 py-10 grid grid-cols-3 gap-12 max-w-7xl mx-auto">

      {/* LEFT SECTION */}
      <div className="col-span-2 space-y-6">

        <h2 className="text-xl font-semibold">Checkout</h2>

        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}

        {/* CONTACT */}
        <div>
          <h3 className="text-sm font-semibold mb-2">CONTACT INFO</h3>
          <input name="email" placeholder="Email" onChange={handleChange} className="w-full border border-gray-300 p-3 text-sm mb-3"/>
          <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full border border-gray-300 p-3 text-sm"/>
        </div>

        {/* SHIPPING */}
        <div>
          <h3 className="text-sm font-semibold mb-2">SHIPPING ADDRESS</h3>

          <div className="grid grid-cols-2 gap-3 mb-3">
            <input name="firstName" placeholder="First Name" onChange={handleChange} className="border border-gray-300 p-3 text-sm"/>
            <input name="lastName" placeholder="Last Name" onChange={handleChange} className="border border-gray-300 p-3 text-sm"/>
          </div>

          <input name="country" placeholder="Country" onChange={handleChange} className="border border-gray-300 p-3 text-sm w-full mb-3"/>

          <input name="state" placeholder="State / Region" onChange={handleChange} className="border border-gray-300 p-3 text-sm w-full mb-3"/>

          <input name="address" placeholder="Address" onChange={handleChange} className="border border-gray-300 p-3 text-sm w-full mb-3"/>

          <div className="grid grid-cols-2 gap-3">
            <input name="city" placeholder="City" onChange={handleChange} className="border border-gray-300 p-3 text-sm"/>
            <input name="pincode" placeholder="Postal Code" onChange={handleChange} className="border border-gray-300 p-3 text-sm"/>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleOrder}
          className="w-full bg-black text-white py-3 text-sm hover:bg-gray-900 transition"
        >
          PLACE ORDER →
        </button>

      </div>

      {/* RIGHT SECTION */}
      <div className="border border-gray-300 p-6 h-fit">

        <div className="flex justify-between mb-4 text-sm">
          <h3 className="font-semibold">YOUR ORDER</h3>
          <span>({cartItem.length})</span>
        </div>

        <div className="space-y-4">

          {cartItem.map((item) => (
            <div key={item._id} className="flex gap-3">

              <img src={item.img} className="w-16 h-20 object-contain border border-gray-300"/>

              <div className="flex-1 text-sm">
                <p>{item.productName}</p>
                <p className="text-gray-500 text-xs">Qty: {item.quantity}</p>
              </div>

              <div className="text-sm font-medium">
                ${item.price * item.quantity}
              </div>

            </div>
          ))}

        </div>

        <div className="border-t border-gray-300 mt-6 pt-4 text-sm space-y-2">

          <div className="flex justify-between">
            <span className="text-gray-500">Subtotal</span>
            <span>${totalPrice}</span>
          </div>

          <div className="flex justify-between font-semibold mt-2">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Checkout