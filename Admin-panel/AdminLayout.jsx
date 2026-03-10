import Sidebar from "./Components/sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {

  return (

    <div style={{ display: "flex" }}>

      <Sidebar />

      <div style={{ padding: "20px", flex: 1 }}>
        <Outlet />
      </div>

    </div>

  );

};

export default AdminLayout;