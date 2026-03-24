import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import toast from "react-hot-toast"

const AdminOrderDetail = () => {

  const { id } = useParams()

  const [order, setOrder] = useState(null)
  const [status, setStatus] = useState("")

  // ✅ FETCH SINGLE ORDER (CORRECT API)
  useEffect(() => {
    const fetchOrder = async () => {
      try {

        const res = await fetch(`http://localhost:8000/api/order/details/${id}`)
        const data = await res.json()

        console.log("Order:", data)

        setOrder(data)
        setStatus(data.status || "Pending")

      } catch (error) {
        console.log(error)
      }
    }

    fetchOrder()
  }, [id])

  // ✅ UPDATE STATUS (CORRECT API)
  const updateStatus = async () => {
    try {

      const res = await fetch(`http://localhost:8000/api/order/status/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status })
      })

      if (res.ok) {
        toast.success("Status updated ✅")
      } else {
        toast.error("Update failed ❌")
      }

    } catch (error) {
      toast.error("Error updating ⚠️")
    }
  }

  if (!order) return <p className="p-10">Loading...</p>

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-6 text-[#002b64]">
        Order Details
      </h1>

      <div className="grid grid-cols-2 gap-8">

        {/* ================= LEFT: PRODUCTS ================= */}
        <div className="bg-white p-6 rounded-xl shadow">

          <h2 className="text-xl font-semibold mb-4">Products</h2>

          {order.items && order.items.length > 0 ? (
            order.items.map((item, index) => (
              <div key={index} className="flex gap-4 mb-4 border-b pb-3">

                <img
                   src={
                     item.img
                     ? (item.img.startsWith("http")
                        ? item.img
                        : apiUrl + item.image)
                        : Array.isArray(item.images) ? apiUrl + item.images[0].path : ""
                       }
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div>
                  <h3 className="font-semibold">{item.productName}</h3>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <p className="text-sm">Qty: {item.quantity || 1}</p>
                </div>

              </div>
            ))
          ) : (
            <p>No items found</p>
          )}

        </div>

        {/* ================= RIGHT: DETAILS ================= */}
        <div className="bg-white p-6 rounded-xl shadow space-y-4">

          <h2 className="text-xl font-semibold">Order Info</h2>

          {/* SHIPPING */}
          <div className="space-y-1 text-sm">

            <p><strong>Name:</strong> {order.shipping?.name || "-"}</p>
            <p><strong>Phone:</strong> {order.shipping?.phone || "-"}</p>
            <p><strong>Address:</strong> {order.shipping?.address || "-"}</p>
            <p><strong>City:</strong> {order.shipping?.city || "-"}</p>
            <p><strong>Pincode:</strong> {order.shipping?.pincode || "-"}</p>

          </div>

          {/* PRICE */}
          <p className="font-bold text-lg mt-4">
            Total: ${order.totalPrice || 0}
          </p>

          {/* DATE */}
          <p>
            <strong>Date:</strong>{" "}
            {order.createdAt
              ? new Date(order.createdAt).toLocaleString()
              : "-"}
          </p>

          {/* STATUS */}
          <div className="mt-4">

            <label className="block mb-1 font-medium">
              Order Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border p-2 rounded w-full"
            >
              <option value="Pending">Pending</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>

            <button
              onClick={updateStatus}
              className="mt-3 w-full bg-[#002b64] text-white py-2 rounded hover:bg-[#001b3f]"
            >
              Update Status
            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default AdminOrderDetail