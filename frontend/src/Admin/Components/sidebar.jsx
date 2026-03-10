import { Link } from "react-router-dom";

const Sidebar = () => {

  return (
    <div style={{width:"200px",background:"#111",color:"#fff",height:"100vh",padding:"20px"}}>

      <h2>Admin</h2>

      <div style={{display:"flex",flexDirection:"column",gap:"15px",marginTop:"30px"}}>

        <Link to="/admin">Dashboard</Link>

        <Link to="/admin/users">Users</Link>

        <Link to="/admin/products">Products</Link>

        <Link to="/admin/orders">Orders</Link>

      </div>

    </div>
  );
};

export default Sidebar;