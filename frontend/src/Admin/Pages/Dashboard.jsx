import { useEffect, useState } from "react"

const Dashboard = () => {

  const [data, setData] = useState({
    totalOrders: 0,
    totalUsers: 0,
    totalProducts: 0,
    totalRevenue: 0
  })

  useEffect(() => {
    const fetchDashboard = async () => {
      const res = await fetch("http://localhost:8000/api/dashboard")
      const result = await res.json()
      setData(result)
    }

    fetchDashboard()
  }, [])

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-8 text-[#002b64]">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">

        {/* REVENUE */}
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Revenue</p>
          <h2 className="text-2xl font-bold text-green-600">
            ${data.totalRevenue}
          </h2>
        </div>

        {/* ORDERS */}
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Orders</p>
          <h2 className="text-2xl font-bold text-blue-600">
            {data.totalOrders}
          </h2>
        </div>

        {/* PRODUCTS */}
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Products</p>
          <h2 className="text-2xl font-bold text-purple-600">
            {data.totalProducts}
          </h2>
        </div>

        {/* USERS */}
        <div className="bg-white p-6 rounded-xl shadow">
          <p className="text-gray-500">Total Users</p>
          <h2 className="text-2xl font-bold text-orange-600">
            {data.totalUsers}
          </h2>
        </div>

      </div>

    </div>
  )
}

export default Dashboard