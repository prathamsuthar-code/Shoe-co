import { useParams } from "react-router-dom"
import products from "../Data/product"
import { useCart } from "../Context/CartContext"

const ProductDetail = () => {

  const { id } = useParams()
  const { addToCart } = useCart()

  const product = products.find((p) => p.id === Number(id))

  if (!product) return <p className="p-10">Product not found</p>

  return (
    <div className="p-10 max-w-6xl mx-auto">

      <div className="grid grid-cols-2 gap-10">

        {/* PRODUCT IMAGE */}
        <div>

          <img
            src={product.img}
            alt={product.productName}
            className="w-full rounded-xl"
          />

        </div>

        {/* PRODUCT INFO */}
        <div className="space-y-4">

          <h2 className="text-gray-500 text-lg">
            {product.brandName}
          </h2>

          <h1 className="text-3xl font-bold">
            {product.productName}
          </h1>

          <div className="text-2xl font-bold">

            ${product.sellingPrice}

            <span className="text-gray-400 line-through ml-3">
              ${product.mrp}
            </span>

          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed">
            These premium sneakers are designed for both comfort and
            performance. Crafted with high-quality materials and modern
            design, they provide durability, style, and excellent support
            for everyday wear.
          </p>

          {/* ADD TO CART */}
          <button
            onClick={() => addToCart(product)}
            className="bg-[#002b64] text-white px-6 py-3 rounded-xl hover:bg-[#001a3f]"
          >
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  )
}

export default ProductDetail