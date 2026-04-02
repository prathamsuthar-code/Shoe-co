import { ShoppingCart, User } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useEffect, useState } from "react";

const Navbar = ({ isLoggedin, setIsLoggedIn }) => {
  const { cartItem, logoutUser } = useCart();

  const location = useLocation();
  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  // Scroll only for homepage
  useEffect(() => {
  if (!isHome) {
    setScrolled(false); // ✅ reset when not homepage
    return;
  }

  // ✅ reset when entering homepage
  setScrolled(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, [isHome]);

  // Dynamic styles
  const textColor = isHome
    ? scrolled
      ? "text-black"
      : "text-white"
    : "text-black";

  const navBg = isHome
    ? scrolled
      ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-[#E5E5E5]"
      : "bg-transparent border-b border-transparent"
    : "bg-white border-b border-[#E5E5E5]";

  const buttonStyle = isHome
    ? scrolled
      ? "border-black text-black hover:bg-black hover:text-white"
      : "border-white text-white hover:bg-white hover:text-black"
    : "border-black text-black hover:bg-black hover:text-white";

  const signupStyle = isHome
    ? scrolled
      ? "bg-black text-white"
      : "bg-white text-black"
    : "bg-black text-white";

  return (
    <div
      className={`${isHome ? "fixed" : "sticky"} top-0 left-0 w-full z-50 
      transition-[background-color,backdrop-filter,box-shadow,border-color] 
      duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${navBg}`}
    >
      <div className="flex items-center justify-between px-10 py-4">

        {/* LOGO */}
        <NavLink
          to="/"
          className={`text-xl font-semibold tracking-wide transition-colors duration-500 ${textColor}`}
        >
          SHOE.CO
        </NavLink>

        {/* MENU */}
        <div
          className={`flex gap-8 text-sm font-medium transition-colors duration-500 ${textColor}`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "Products", path: "/Products" },
            { name: "About", path: "/About" },
            { name: "Contact", path: "/Contact" },
          ].map((item) => (
            <NavLink key={item.name} to={item.path} className="relative group">

              <span className="transition-colors duration-300 hover:text-black">
                {item.name}
              </span>

              {/* UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 
                transition-all duration-300 
                ${textColor === "text-white" ? "bg-white" : "bg-black"} 
                group-hover:w-full`}
              ></span>

            </NavLink>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">

          {/* CART */}
          <NavLink to="/Cart" className="relative">
            <ShoppingCart
              size={22}
              className={`transition-colors duration-500 ${textColor}`}
            />

            {cartItem.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] px-1.5 py-[2px] rounded-full">
                {cartItem.length}
              </span>
            )}
          </NavLink>

          {/* AUTH */}
          {!isLoggedin ? (
            <div className="flex gap-3 text-sm">

              <NavLink to="/Signin">
                <button
                  className={`px-4 py-1 border transition-all duration-300 ${buttonStyle}`}
                >
                  Login
                </button>
              </NavLink>

              <NavLink to="/Signup">
                <button
                  className={`px-4 py-1 transition-all duration-300 ${signupStyle}`}
                >
                  Sign up
                </button>
              </NavLink>

            </div>
          ) : (
            <div className="relative group">
              <User
                size={24}
                className={`cursor-pointer transition-colors duration-500 ${textColor}`}
              />

              {/* DROPDOWN */}
              <div className="absolute right-0 mt-3 w-40 bg-white border border-[#E5E5E5] shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                <NavLink
                  to="/Profile"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  My Profile
                </NavLink>

                <NavLink
                  to="/Orders"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  My Orders
                </NavLink>

                <button
                  onClick={() => {
                    logoutUser();
                    setIsLoggedIn("");
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                >
                  Logout
                </button>

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Navbar;