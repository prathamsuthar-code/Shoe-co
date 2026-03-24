import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

const AdminLayout = () => {
  return (
    <div className="flex">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
        <h2 className="text-xl font-bold mb-6">Admin</h2>

        <ul className="space-y-3">
          <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/admin/products">Products</NavLink></li>
          <li><NavLink to="/admin/orders">Orders</NavLink></li>
          <li><NavLink to="/admin/users">Users</NavLink></li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>

    </div>
  )
}

export default AdminLayout