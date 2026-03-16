import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {

  const [cartItem, setCartItem] = useState([])
  const [userId, setUserId] = useState(localStorage.getItem("userId"))

  const loginUser = (id) => {
    localStorage.setItem("userId", id)
    setUserId(id)
  }

  const logoutUser = () => {
    localStorage.removeItem("userId")
    setUserId(null)
    setCartItem([])
  }

  useEffect(() => {
    if (!userId) return

    const fetchCart = async () => {
      try {
        const res = await fetch(`http://localhost:8000/api/cart/${userId}`)
        const data = await res.json()
        setCartItem(data)
      } catch (error) {
        console.error("Error loading cart:", error)
      }
    }

    fetchCart()

  }, [userId])

  const addToCart = async (product) => {
    const res = await fetch("http://localhost:8000/api/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId,
        productId: product.id,
        productName: product.productName,
        brandName: product.brandName,
        price: product.sellingPrice,
        img: product.img
      })
    })

    const data = await res.json()
    setCartItem((prev) => [...prev, data])
  }

  const removeFromCart = async (id) => {
    await fetch(`http://localhost:8000/api/cart/remove/${id}`, {
      method: "DELETE"
    })

    setCartItem((prev) => prev.filter((item) => item._id !== id))
  }

  const clearCart = async () => {
    await fetch(`http://localhost:8000/api/cart/clear/${userId}`, {
      method: "DELETE"
    })
    setCartItem([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItem,
        addToCart,
        removeFromCart,
        clearCart,
        loginUser,
        logoutUser
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)