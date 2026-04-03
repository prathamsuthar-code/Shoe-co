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
    <div className="px-12 py-10 max-w-7xl mx-auto">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-semibold">Order Details</h1>

        <span className="px-4 py-1 rounded-full text-sm bg-yellow-100 text-yellow-700">
          {order.status}
        </span>
      </div>

      {/* TOP GRID */}
      <div className="grid grid-cols-3 gap-6 mb-10">

        {/* ORDER INFO */}
        <div className="border border-gray-200 p-6 rounded-lg">

          <h3 className="text-sm font-semibold mb-4 text-gray-500">
            ORDER INFO
          </h3>

          <p className="text-sm mb-2">
            <span className="text-gray-500">Order ID:</span><br/>
            {order._id}
          </p>

          <p className="text-sm mb-2">
            <span className="text-gray-500">Date:</span><br/>
            {new Date(order.createdAt).toLocaleDateString()}
          </p>

          <p className="text-sm font-semibold mt-3">
            Total: ${order.totalPrice}
          </p>

        </div>

        {/* SHIPPING */}
        <div className="border border-gray-200 p-6 rounded-lg">

          <h3 className="text-sm font-semibold mb-4 text-gray-500">
            SHIPPING
          </h3>

          <p className="text-sm">
            {order.shipping.firstName} {order.shipping.lastName}
          </p>

          <p className="text-sm text-gray-500">
            {order.shipping.phone}
          </p>

          <p className="text-sm mt-2">
            {order.shipping.address}
          </p>

          <p className="text-sm text-gray-500">
            {order.shipping.city} - {order.shipping.pincode}
          </p>

        </div>

        {/* PAYMENT */}
        <div className="border border-gray-200 p-6 rounded-lg">

          <h3 className="text-sm font-semibold mb-4 text-gray-500">
            PAYMENT
          </h3>

          <p className="text-sm">Cash on Delivery</p>
          <p className="text-xs text-gray-400 mt-2">
            Payment will be collected at delivery
          </p>

        </div>

      </div>

      {/* ITEMS */}
      <div className="border border-gray-200 rounded-lg p-6">

        <h3 className="text-lg font-semibold mb-6">
          Ordered Items
        </h3>

        <div className="space-y-5">

          {order.items.map((item) => (
            <div
              key={item.productId}
              className="flex items-center justify-between border-b border-gray-300 pb-4"
            >

              {/* LEFT */}
              <div className="flex items-center gap-4">

                <img
                  src={item.img}
                  alt={item.productName}
                  className="w-16 h-16 object-contain border border-gray-300"
                />

                <div>
                  <p className="font-medium text-sm">
                    {item.productName}
                  </p>

                  <p className="text-xs text-gray-500">
                    Qty: {item.quantity}
                  </p>
                </div>

              </div>

              {/* RIGHT */}
              <div className="text-right">
                <p className="text-sm font-medium">
                  ${item.price * item.quantity}
                </p>
                <p className="text-xs text-gray-400">
                  ${item.price} each
                </p>
              </div>

            </div>
          ))}

        </div>

        {/* TOTAL */}
        <div className="mt-6 pt-4 border-t border-gray-400 flex justify-between font-semibold">

          <span>Total</span>
          <span>${order.totalPrice}</span>

        </div>

      </div>

    </div>
  )
}

export default OrderDetail