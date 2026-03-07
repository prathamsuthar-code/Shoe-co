import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Products from "./Pages/Products"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
import Navbar from "./Components/navbar"
import Footer from "./Components/footer"
import OrderConfirmed from "./Pages/OrderConfirmed"
import Signup from "./Pages/Signup"
import Signin from "./Pages/Signin"
import { useState } from "react"


function App() {
      const [isLoggedin, setIsLoggedIn] = useState(localStorage.getItem("access_token"))
  return (
    <BrowserRouter>
      <Navbar isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/OrderConfirmed" element={<OrderConfirmed />} />
        <Route path="/Signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/Signin" element={<Signin setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       </div>
//   )
// }

export default App