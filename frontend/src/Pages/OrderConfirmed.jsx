import { useLocation, useNavigate } from "react-router-dom"

const OrderConfirmed = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const order = location.state

  // ⚠️ if user refreshes page
  if (!order) {
    return (
      <div className="p-10 text-center">
        <p>No order data found</p>
      </div>
    )
  }

  return (
    <div className="px-12 py-12 max-w-7xl mx-auto grid grid-cols-2 gap-12">

      {/* LEFT */}
      <div className="space-y-6">

        <h1 className="text-4xl font-bold">
          Thank you for your purchase!
        </h1>

        <p className="text-gray-600 text-sm">
          Your order will be processed within 24 hours.
        </p>

        {/* BILLING */}
        <div className="space-y-2 text-sm mt-6">
          <h3 className="font-semibold">Billing address</h3>

          <p><span className="text-gray-500">Name:</span> {order.shipping.firstName} {order.shipping.lastName}</p>
          <p><span className="text-gray-500">Address:</span> {order.shipping.address}</p>
          <p><span className="text-gray-500">Phone:</span> {order.shipping.phone}</p>
          <p><span className="text-gray-500">Email:</span> {order.shipping.email}</p>
        </div>
        
        <button
          onClick={() => navigate("/orders")}
          className="mt-6 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-900"
        >
          View Order
        </button>
        

      </div>

      {/* RIGHT */}
      <div className="border p-6">

        <h2 className="font-semibold mb-4">Order Summary</h2>

        <div className="flex justify-between text-sm mb-4 border-b pb-4">
          <div>
            <p className="text-gray-500 text-xs">Date</p>
            <p>{order.date}</p>
          </div>

          <div>
            <p className="text-gray-500 text-xs">Order ID</p>
            <p>{order.orderId}</p>
          </div>

          <div>
            <p className="text-gray-500 text-xs">Payment</p>
            <p>COD</p>
          </div>
        </div>

        {/* ITEMS */}
        <div className="space-y-4">

          {order.items.map((item) => (
            <div key={item._id} className="flex gap-3">

              <img src={item.img} className="w-14 h-16 border object-contain"/>

              <div className="flex-1 text-sm">
                <p className="font-medium">{item.productName}</p>
                <p className="text-gray-500 text-xs">
                  Qty: {item.quantity}
                </p>
              </div>

              <p className="text-sm font-medium">
                ${item.price * item.quantity}
              </p>

            </div>
          ))}

        </div>

        {/* TOTAL */}
        <div className="border-t mt-6 pt-4 text-sm">

          <div className="flex justify-between">
            <span className="text-gray-500">Total</span>
            <span className="font-semibold">${order.totalPrice}</span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default OrderConfirmed