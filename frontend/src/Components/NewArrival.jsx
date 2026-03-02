import React from 'react'
import Card from './card'
import products from "../Data/product"



const Newarrival = () => {

    const newArrivalProducts = products.filter(
    (product) => product.newArrival === true
  )

  return (
    <div className='px-20 py-20 w-full'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-gray-900 '>New Arrivals</h1>
        <p className="text-gray-500">
            Check out the latest products!
          </p>
      </div>
      <div className='w-full flex gap-6 overflow-x-auto scroll-smooth no-scrollbar'>
        {newArrivalProducts.map((product)  => (
        <div className="min-w-70">
          <Card product={product}/>
        </div>
        ))}
      </div>
    </div>
    
  )
}

export default Newarrival