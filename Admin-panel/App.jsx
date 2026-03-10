import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/pages/Users";
import Products from "./admin/pages/Products";
import AddProduct from "./admin/pages/AddProduct";
import Orders from "./admin/pages/Orders";
import OrderDetails from "./admin/pages/OrderDetails";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/admin" element={<AdminLayout />}>

          <Route path="dashboard" element={<Dashboard />} />

          <Route path="users" element={<Users />} />

          <Route path="products" element={<Products />} />

          <Route path="products/add" element={<AddProduct />} />

          <Route path="orders" element={<Orders />} />

          <Route path="orders/:id" element={<OrderDetails />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;