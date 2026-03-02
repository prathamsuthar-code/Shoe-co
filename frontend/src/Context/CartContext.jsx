import { createContext, useContext, useState} from 'react'

export const CartContext = createContext(null)

export const CartProvider = ({children}) => {
const[cartItem, setCartItem] = useState([])
const addToCart = (product) => {
    setCartItem((prev) => {
      const updated = [...prev, product]
      console.log("Updated Cart:", updated) // DEBUG
      return updated
    })
  }
return(
        <CartContext.Provider value={{cartItem, setCartItem, addToCart}}>
            {children}
        </CartContext.Provider>
        )
}

export const useCart = ()=> useContext(CartContext)