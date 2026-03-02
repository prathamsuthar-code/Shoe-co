import React from 'react'
import { useCart } from '../Context/CartContext'
import { Trash } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Cart = () => {
  const { cartItem } = useCart()
console.log(cartItem)

 const totalPrice = cartItem.reduce(
  (total, item) => total + item.sellingPrice,
  0
)
  return (
    <div className=" p-10">
      <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

      {cartItem.length === 0 ? (
        <div className="text-gray-500 text-lg">
          Cart is empty
        </div>
      ) : (
        
        <div className=" w-2/3 space-y-6">
          {cartItem.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 border border-gray-300 p-4 rounded-xl"
            >
              <img
                src={item.img}
                alt={item.productName}
                className="w-32 h-32 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="text-xl font-semibold">
                  {item.productName}
                </h3>

                <p className="text-blue-800">
                  {item.brandName}
                </p>

                <p className="text-lg font-bold mt-2">
                  ${item.sellingPrice}
                </p>
              </div>
              <span >
                <Trash className='text-red-500'/>
              </span>
              
            </div>



            
          )
          
          
          )}
        </div>
        
        
      )}
      <div className='py-10 px-10 mt-20 bg-gray-200 rounded-2xl space-y-2'>
        <h3 className='text-3xl font-bold'>Order Summary</h3>
        <div>
          <span>Total items: <span>{cartItem.length}</span></span>
        </div>
        <div>
          <span>Total Price:<span className="font-bold text-lg">
                ${totalPrice}
              </span></span>

        </div>
        
        <NavLink to='/OrderConfirmed'><button className='bg-white hover:bg-[#002b64] hover:text-white px-5 py-2 rounded-xl'>Proceed to Checkout</button></NavLink>
        
      </div>
    </div>
    
  )
}

export default Cart