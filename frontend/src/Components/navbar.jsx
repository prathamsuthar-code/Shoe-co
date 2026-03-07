
import { ShoppingCart } from 'lucide-react'

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
            {isLoggedin && <button onClick={() => {localStorage.removeItem("access_token"); setIsLoggedIn("")}} className=' border-2 border-[#002b64] text-[#002b64] px-4 py-1 rounded-full font-normal'>Logout</button>}
        </div>
         </div> 
    </div> 
  )
}

export default Navbar