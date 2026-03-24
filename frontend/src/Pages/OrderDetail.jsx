import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const OrderDetail = () => {

  const { id } = useParams()
  const [order, setOrder] = useState(null)

  useEffect(() => {

    const fetchOrder = async () => {

      const res = await fetch(`http://localhost:8000/api/order/details/${id}`)
      const data = await res.json()

      setOrder(data)

    }

    fetchOrder()

  }, [id])

  if (!order) return <p className="p-10">Loading...</p>

  return (
    <div className="p-10 max-w-6xl mx-auto">

      <h1 className="text-3xl font-bold mb-8">
        Order Details
      </h1>

      {/* ORDER INFO + SHIPPING GRID */}
      <div className="grid grid-cols-2 gap-6 mb-8">

        {/* ORDER INFO */}
        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-4">
            Order Information
          </h2>

          <p>
            <strong>Order ID:</strong> {order._id}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {new Date(order.createdAt).toLocaleDateString()}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            <span className="bg-yellow-200 px-3 py-1 rounded-full text-sm">
              {order.status}
            </span>
          </p>

          <p className="mt-2 font-bold">
            Total: ${order.totalPrice}
          </p>

        </div>


        {/* SHIPPING ADDRESS */}
        <div className="bg-white shadow rounded-xl p-6">

          <h2 className="text-xl font-semibold mb-4">
            Shipping Address
          </h2>

          <p>{order.shipping.name}</p>
          <p>{order.shipping.phone}</p>
          <p>{order.shipping.address}</p>
          <p>
            {order.shipping.city} - {order.shipping.pincode}
          </p>

        </div>

      </div>


      {/* ORDER ITEMS */}
      <div className="bg-white shadow rounded-xl p-6">

        <h2 className="text-xl font-semibold mb-6">
          Ordered Items
        </h2>

        {order.items.map((item) => (

          <div
            key={item.productId}
            className="flex items-center justify-between border-b py-4"
          >

            <div className="flex items-center gap-4">

              <img
                src={item.img}
                alt={item.productName}
                className="w-16 h-16 object-cover rounded"
              />

              <span className="font-medium">
                {item.productName}
              </span>

            </div>

            <span className="font-semibold">
              ${item.price}
            </span>

          </div>

        ))}

      </div>

    </div>
  )
}

export default OrderDetail