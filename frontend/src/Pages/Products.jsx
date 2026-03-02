import React from 'react'
import products from '../Data/product'
import Card from '../Components/card'
import { useCart } from '../Context/CartContext'


const Products = () => {
  
  return (
    <div className="w-full grid grid-cols-4 gap-6 p-10">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products