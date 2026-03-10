import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

import Home from "./Pages/Home"
import Products from "./Pages/Products"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
import OrderConfirmed from "./Pages/OrderConfirmed"
import Signup from "./Pages/Signup"
import Signin from "./Pages/Signin"

import Navbar from "./Components/navbar"
import Footer from "./Components/footer"

// ADMIN
// ADMIN IMPORTS
import AdminLayout from "./Admin/AdminLayout"
import Dashboard from "./Admin/Pages/Dashboard"
import Users from "./Admin/Pages/Users"
import AdminProducts from "./Admin/Pages/Products"
import AddProduct from "./Admin/Pages/AddProduct"
import Orders from "./Admin/Pages/Orders"
import OrderDetail from "./Admin/Pages/OrderDetail"

function App() {

  const [isLoggedin, setIsLoggedIn] = useState(localStorage.getItem("access_token"))

  return (

    <BrowserRouter>

      {/* CUSTOMER NAVBAR */}
      <Navbar isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn} />

      <Routes>

        {/* CUSTOMER WEBSITE */}

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderconfirmed" element={<OrderConfirmed />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signin" element={<Signin setIsLoggedIn={setIsLoggedIn} />} />

        {/* ADMIN PANEL */}

       <Route path="/admin" element={<AdminLayout />}>

         <Route path="dashboard" element={<Dashboard />} />

         <Route path="users" element={<Users />} />

         <Route path="products" element={<AdminProducts />} />

         <Route path="products/add" element={<AddProduct />} />

         <Route path="orders" element={<Orders />} />

         <Route path="orders/:id" element={<OrderDetail />} />

      </Route>

      </Routes>

      {/* CUSTOMER FOOTER */}
      <Footer />

    </BrowserRouter>

  )
}

export default App