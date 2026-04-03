import { useParams } from "react-router-dom"
import { useState } from "react"
import products from "../Data/product"
import { useCart } from "../Context/CartContext"

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [qty, setQty] = useState(1)

  const product = products.find((p) => p.id === Number(id))
  const [mainImg, setMainImg] = useState(product?.img)

  if (!product) return <p className="p-10">Product not found</p>

  return (
    <div className="px-10 py-12 max-w-7xl mx-auto">

      <div className="grid grid-cols-2 gap-14">

        {/* LEFT: IMAGE GALLERY */}
        <div className="flex gap-4">

          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {[product.img, product.img, product.img, product.img].map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setMainImg(img)}
                className={`w-20 h-24 object-cover border cursor-pointer ${
                  mainImg === img ? "border-black" : "border-gray-200"
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-gray-100 flex items-center justify-center">
            <img
              src={mainImg}
              alt={product.productName}
              className="max-h-[500px] object-contain"
            />
          </div>

        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div className="flex flex-col justify-between">

          <div className="space-y-4">

            {/* Brand */}
            <p className="text-sm text-gray-500 tracking-wide uppercase">
              {product.brandName}
            </p>

            {/* Title */}
            <h1 className="text-3xl font-semibold leading-tight">
              {product.productName}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-semibold text-black">
                ${product.sellingPrice}
              </span>
              <span className="text-gray-400 line-through">
                ${product.mrp}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm max-w-md">
              Minimal design meets everyday comfort. Crafted with premium
              materials for durability and a clean modern aesthetic.
            </p>

          </div>
          <div className="flex items-center gap-3 mt-4">

              <button
                onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                className="w-8 h-8 border flex items-center justify-center"
              >
                −
              </button>

              <span className="w-8 text-center">{qty}</span>

              <button
                onClick={() => setQty((prev) => prev + 1)}
                className="w-8 h-8 border flex items-center justify-center"
              >
                +
              </button>

        </div>

          {/* CTA */}
          <div className="mt-8">
            <button
              onClick={() => addToCart(product, qty)}
              className="w-full py-4 bg-black text-white text-sm tracking-wide font-medium hover:bg-gray-900 transition"
            >
              ADD TO CART
            </button>
          </div>

        </div>

      </div>

    </div>
  )
}

export default ProductDetail