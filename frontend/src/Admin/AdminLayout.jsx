import { Outlet } from "react-router-dom"
import Sidebar from "./Components/sidebar"

const AdminLayout = () => {

  return (
    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>
        <Outlet />
      </div>

    </div>
  )

}

export default AdminLayout