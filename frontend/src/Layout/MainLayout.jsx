import Navbar from "../Components/navbar"
import Footer from "../Components/footer"
import { Outlet } from "react-router-dom"

const MainLayout = ({ isLoggedin, setIsLoggedIn }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn} />
      
      {/* 3. flex-grow tells the content area to take up all available space, 
             pushing the footer to the bottom */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}

export default MainLayout