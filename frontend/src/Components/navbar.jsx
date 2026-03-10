
import { ShoppingCart, User } from 'lucide-react'

import { NavLink } from 'react-router-dom'
import { useCart } from "../Context/CartContext"


const Navbar = ({isLoggedin , setIsLoggedIn}) => {
    const { cartItem } = useCart()

    console.log("isLoggedin" , isLoggedin)
  return (
    <div className=' bg-white flex items-center justify-between py-6 px-18 border-b-2 border-gray-200 '>
        <div className='text-2xl font-bold text-[#002b64]'>
            <NavLink to='/'><h1>SHOE.CO</h1></NavLink>
        </div>
        <div className='flex gap-5 font-medium'>
            
            <NavLink to='/'><h4>Home</h4></NavLink>
            <NavLink to='/Products'><h4 className='flex gap-1 items-center'>Products</h4></NavLink>
            <NavLink to='/About'><h4>About</h4></NavLink>
            <NavLink to='/Contact'><h4>Contact us</h4></NavLink>
            
        </div>
         <div className='flex gap-3 items-center'>
            <div className='relative inline-block'>
                <NavLink to='/Cart'>
                    <ShoppingCart size={24}/>
                    
                </NavLink>
            <span className='absolute -top-2 -right-2 bg-[#002b64] text-white text-xs px-2 py-0.5 rounded-full'>{cartItem.length}</span>
             </div>
            <div className='flex gap-2'>
         {!isLoggedin  &&  <><NavLink to='/Signin'><button className='bg-[#002b64] text-white px-4 py-1 rounded-full font-normal'>Login</button></NavLink>
            <NavLink to='/Signup'><button className=' border-2 border-[#002b64] text-[#002b64] px-4 py-1 rounded-full font-normal'>Sign up</button></NavLink></>}
            {isLoggedin && (
  <div className="relative group">
    <User size={26} className="cursor-pointer" />

    <div className="absolute right-0 mt-3 w-40 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
      
      <NavLink
        to="/profile"
        className="block px-4 py-2 hover:bg-gray-100"
      >
        My Profile
      </NavLink>

      <NavLink
        to="/Orders"
        className="block px-4 py-2 hover:bg-gray-100"
      >
        My Orders
      </NavLink>

      <button
        onClick={() => {
          localStorage.removeItem("access_token")
          setIsLoggedIn("")
        }}
        className="text-red-500 block w-full text-left px-4 py-2 hover:bg-red-100"
      >
        Logout
      </button>

    </div>
  </div>
)}
        </div>
         </div> 
    </div> 
  )
}

export default Navbar