import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

// CUSTOMER
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
import Checkout from "./Pages/CheckOut"
import Orders from "./Pages/Orders"
import OrderDetail from "./Pages/OrderDetail"
import Profile from "./Pages/Profile"
import ProductDetail from "./Pages/ProductDetail"
import OrderConfirmed from "./Pages/OrderConfirmed"
import Signup from "./Pages/Signup"
import Signin from "./Pages/Signin"

// LAYOUT
import MainLayout from "./Layout/MainLayout"

// ADMIN
import AdminLayout from "./Admin/AdminLayout"
import Dashboard from "./Admin/Pages/Dashboard"
import Users from "./Admin/Pages/Users"
import AdminOrders from "./Admin/Pages/Orders"
import AdminOrderDetail from "./Admin/Pages/AdminOrderDetail"
import AdminProducts from "./Admin/Pages/Products"
import AddProduct from "./Admin/Pages/AddProduct"
import EditProduct from "./Admin/Pages/EditProduct"
import ProductView from "./Admin/Pages/ViewProduct"

function App() {

  const [isLoggedin, setIsLoggedIn] = useState(localStorage.getItem("access_token"))

  return (
    <BrowserRouter>

      <Routes>

        
        <Route element={<MainLayout isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn} />}>

          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderDetail />} />
          <Route path="/profile" element={<Profile />} />
         <Route path="/orderconfirmed" element={<OrderConfirmed />} />

        </Route>

        
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signin" element={<Signin setIsLoggedIn={setIsLoggedIn} />} />

        
        <Route path="/admin" element={<AdminLayout />}>

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="orders/:id" element={<AdminOrderDetail />} />

          <Route path="products" element={<AdminProducts />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="products/:id" element={<ProductView />} />
          <Route path="products/edit/:id" element={<EditProduct />} />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App