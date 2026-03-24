import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductView = () => {

  const { id } = useParams()
  const [product, setProduct] = useState(null)

  const apiUrl = import.meta.env.VITE_API_URL_IMAGE

  useEffect(() => {
    fetch(`http://localhost:8000/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  if (!product) return <p className="p-10">Loading...</p>

  const imageSrc =
    product.img
      ? (product.img.startsWith("http")
          ? product.img
          : apiUrl + product.img)
      : Array.isArray(product.images)
        ? apiUrl + product.images[0]?.path
        : "https://via.placeholder.com/300"

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <div className="max-w-5xl mx-auto grid grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-lg">

        {/* LEFT: IMAGE */}
        <div className="flex justify-center items-center">
          <img
            src={imageSrc}
            className="w-full max-w-md h-[400px] object-cover rounded-xl border"
          />
        </div>

        {/* RIGHT: DETAILS */}
        <div className="space-y-5">

          <h1 className="text-3xl font-bold text-[#002b64]">
            {product.name || product.productName}
          </h1>

          <p className="text-gray-500 text-lg">
            Brand: <span className="font-medium text-black">{product.brandName}</span>
          </p>

          <p className="text-2xl font-bold text-green-600">
            ${product.sellingPrice || product.price}
          </p>

          <div className="border-t pt-4 space-y-2 text-sm text-gray-600">

            {product.createdAt && (
              <p>
                <strong>Added On:</strong>{" "}
                {new Date(product.createdAt).toLocaleString()}
              </p>
            )}

            <p>
              <strong>Product ID:</strong> {product._id}
            </p>

          </div>

          {/* DESCRIPTION (STATIC) */}
          <div className="mt-4">
            <h3 className="font-semibold mb-1">Description</h3>
            <p className="text-gray-600 text-sm">
              This is a premium quality product designed for comfort and style.
              Perfect for daily use and long-lasting durability.
            </p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default ProductView