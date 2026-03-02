import React from 'react'
import { NavLink } from 'react-router-dom'

const OrderConfirmed = () => {
  return (
    <div className=' flex w-full h-screen items-center '>
        <div className='mx-auto space-y-5'>

            <h1 className='text-2xl font-bold items-center'>Order Confirmed</h1>
            <button className='px-6 py-2 bg-[#002b64] font-semibold text-white rounded-xl'>
                <NavLink to='/Products'>
                    Continue Shopping
                </NavLink>
            </button>
        
        </div>
        
    </div>
  )
}

export default OrderConfirmed