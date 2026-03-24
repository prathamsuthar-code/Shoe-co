import Navbar from "../Components/navbar"
import Footer from "../Components/footer"
import { Outlet } from "react-router-dom"

const MainLayout = ({ isLoggedin, setIsLoggedIn }) => {
  return (
    <>
      <Navbar isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn} />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout