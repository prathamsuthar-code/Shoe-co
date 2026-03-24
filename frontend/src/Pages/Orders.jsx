import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const Orderslist = () => {

  const [orders, setOrders] = useState([])

  const userId = localStorage.getItem("userId")

  useEffect(() => {

    const fetchOrders = async () => {

      const res = await fetch(`http://localhost:8000/api/order/${userId}`)
      const data = await res.json()

      setOrders(data)

    }

    fetchOrders()

  }, [])

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        My Orders
      </h1>

      <div className="grid grid-cols-3 gap-6">

        {orders.map((order) => (

          <div
            key={order._id}
            className="border rounded-xl p-6 shadow-sm bg-white"
          >

            <p className="text-sm text-gray-500 mb-2">
              Order ID
            </p>

            <p className="font-semibold text-sm mb-4">
              {order._id}
            </p>

            <p className="text-sm text-gray-500">
              Date
            </p>

            <p className="mb-4">
              {new Date(order.createdAt).toLocaleDateString()}
            </p>

            <p className="text-sm text-gray-500">
              Status
            </p>

            <p className="mb-4 text-yellow-600 font-medium">
              {order.status}
            </p>

            <p className="font-bold mb-4">
              Total: ${order.totalPrice}
            </p>

            <NavLink to={`/orders/${order._id}`}>
              <button className="bg-[#002b64] text-white px-4 py-2 rounded w-full">
                View Details
              </button>
            </NavLink>

          </div>

        ))}

      </div>

    </div>

  )
}

export default Orderslist