import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const AdminOrders = () => {

  const [orders, setOrders] = useState([])

  const fetchOrders = async () => {
    const res = await fetch("http://localhost:8000/api/order")
    const data = await res.json()
    setOrders(data)
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-6 text-[#002b64]">
        Orders
      </h1>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-[#002b64] text-white">
            <tr>
              <th className="p-4 text-left">Order ID</th>
              <th className="text-left">Customer</th>
              <th className="text-left">Total</th>
              <th className="text-left">Date</th>
              <th className="text-left">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>

            {orders.map((order) => (

              <tr key={order._id} className="border-b hover:bg-gray-50">

                {/* ORDER ID */}
                <td className="p-4 text-sm text-gray-600">
                  {order._id.slice(-6)}
                </td>

                {/* CUSTOMER */}
                <td>
                  <div className="font-medium">{order.shipping?.name}</div>
                  <div className="text-sm text-gray-500">
                    {order.shipping?.phone}
                  </div>
                </td>

                {/* TOTAL */}
                <td className="font-bold text-[#002b64]">
                  ${order.totalPrice}
                </td>

                {/* DATE */}
                <td>
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>

                {/* STATUS */}
                <td>
                  <span className={`px-3 py-1 rounded-full text-sm
                    ${order.status === "Delivered" ? "bg-green-100 text-green-600" :
                      order.status === "Pending" ? "bg-yellow-100 text-yellow-600" :
                      "bg-gray-100 text-gray-600"}
                  `}>
                    {order.status || "Pending"}
                  </span>
                </td>

                {/* ACTION */}
                <td className="text-center">
                  <Link to={`/admin/orders/${order._id}`}>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                      View
                    </button>
                  </Link>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default AdminOrders