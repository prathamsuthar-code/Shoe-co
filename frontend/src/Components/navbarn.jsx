import { ShoppingCart, User } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useCart } from "../Context/CartContext"

const NavbarN = ({ isLoggedin, setIsLoggedIn }) => {

  const { cartItem } = useCart()
  const { logoutUser } = useCart()

  return (
    <div className='fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-sm'>

      <div className='flex items-center justify-between py-5 px-18'>

        {/* LOGO */}
        <div className='text-2xl font-bold text-[#002b64]'>
          <NavLink to='/'>SHOE.CO</NavLink>
        </div>

        {/* NAV LINKS */}
        <div className='flex gap-6 font-medium text-gray-800'>
          <NavLink to='/' className="hover:text-[#002b64] transition">Home</NavLink>
          <NavLink to='/Products' className="hover:text-[#002b64] transition">Products</NavLink>
          <NavLink to='/About' className="hover:text-[#002b64] transition">About</NavLink>
          <NavLink to='/Contact' className="hover:text-[#002b64] transition">Contact</NavLink>
        </div>

        {/* RIGHT SIDE */}
        <div className='flex gap-4 items-center'>

          {/* CART */}
          <div className='relative'>
            <NavLink to='/Cart'>
              <ShoppingCart size={24} />
            </NavLink>

            <span className='absolute -top-2 -right-2 bg-[#002b64] text-white text-xs px-2 py-0.5 rounded-full'>
              {cartItem.length}
            </span>
          </div>

          {/* AUTH */}
          {!isLoggedin ? (
            <div className='flex gap-2'>

              <NavLink to='/Signin'>
                <button className='bg-[#002b64] text-white px-4 py-1 rounded-full'>
                  Login
                </button>
              </NavLink>

              <NavLink to='/Signup'>
                <button className='border border-[#002b64] text-[#002b64] px-4 py-1 rounded-full'>
                  Sign up
                </button>
              </NavLink>

            </div>
          ) : (

            <div className="relative group">

              <User size={26} className="cursor-pointer" />

              {/* DROPDOWN */}
              <div className="absolute right-0 mt-3 w-40 backdrop-blur-md bg-white/70 border border-white/30 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">

                <NavLink to="/Profile" className="block px-4 py-2 hover:bg-white/50">
                  My Profile
                </NavLink>

                <NavLink to="/Orders" className="block px-4 py-2 hover:bg-white/50">
                  My Orders
                </NavLink>

                <button
                  onClick={() => {
                    logoutUser()
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

export default NavbarN