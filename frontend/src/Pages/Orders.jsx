import React, { useEffect, useState } from "react"

const Orders = () => {

  const [orders, setOrders] = useState([])

  const userId = localStorage.getItem("userId")

  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const res = await fetch(`http://localhost:8000/api/order/${userId}`)
        const data = await res.json()

        setOrders(data)

      } catch (error) {
        console.log(error)
      }

    }

    fetchOrders()

  }, [])

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 && (
        <p>No orders found</p>
      )}

      {orders.map((order) => (

  <div key={order._id} className="border rounded-xl p-6 mb-6">

    <div className="flex justify-between mb-2">
      <span className="font-semibold">Order ID</span>
      <span>{order._id}</span>
    </div>

    <div className="flex justify-between mb-2">
      <span>Order Date</span>
      <span>
        {new Date(order.createdAt).toLocaleDateString()}
      </span>
    </div>

    <div className="flex justify-between mb-4">
      <span>Status</span>

      <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm">
        {order.status}
      </span>
    </div>

    {order.items.map((item) => (
      <div key={item.productId} className="flex justify-between mb-2">
        <span>{item.productName}</span>
        <span>${item.price}</span>
      </div>
    ))}

    <div className="mt-3 font-bold">
      Total: ${order.totalPrice}
    </div>

  </div>

))}

    </div>
  )
}

export default Orders 