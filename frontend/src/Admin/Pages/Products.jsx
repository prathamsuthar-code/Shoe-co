import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"
// import AdminProducts from "/Admin/Pages/Products"

const AdminProducts = () => {

  const [products, setProducts] = useState([])

    const apiUrl = import.meta.env.VITE_API_URL_IMAGE;

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:8000/api/products")
    const data = await res.json()
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const deleteProduct = async (id) => {

  const confirmDelete = window.confirm("Are you sure you want to delete this product?")
  if (!confirmDelete) return

  try {

    const res = await fetch(`http://localhost:8000/api/products/${id}`, {
      method: "DELETE"
    })

    if (res.ok) {
      toast.success("Product deleted successfully ✅")
      fetchProducts()
    } else {
      toast.error("Failed to delete product ❌")
    }

  } catch (error) {
    toast.error("Something went wrong ⚠️")
  }
}


console.log(
  products ,apiUrl
)
  

  return (
    <div className="p-10">

      <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-[#002b64]">Products</h1>

      <Link to="/admin/products/add">
      <button className="bg-[#002b64] hover:bg-[#001b3f] text-white px-5 py-2 rounded-lg shadow">
      + Add Product
      </button>
      </Link>
    </div>

      <table className="w-full bg-white rounded-xl overflow-hidden shadow-md">

  <thead className="bg-[#002b64] text-white">
    <tr>
      <th className="p-4 text-left">Image</th>
      <th className="text-left">Product</th>
      <th className="text-left">Brand</th>
      <th className="text-left">Price</th>
      <th className="text-center">Actions</th>
    </tr>
  </thead>

  <tbody>
    {products.map((p) => {
      // console.log("p" , p.img , p.images ,  p.images[0]?.path)
      return <tr key={p._id} className="border-b hover:bg-gray-50 transition">

        {/* IMAGE */}
        <td className="p-3">
          <img
            src={
              p.img
                ? (p.img.startsWith("http")
                    ? p.img
                    : apiUrl + p.image)
                : Array.isArray(p.images) ? apiUrl + p.images[0].path : ""
            }
            className="w-14 h-14 object-cover rounded-lg"
          />
        </td>

        {/* NAME */}
        <td className="font-semibold">{p.name || p.productName}</td>

        {/* BRAND */}
        <td className="text-gray-600">{p.brandName}</td>

        {/* PRICE */}
        <td className="font-bold text-[#002b64]">
          ${p.sellingPrice || 0}
        </td>

        {/* ACTIONS */}
        <td className="text-center space-x-2">

          <Link to={`/admin/products/${p._id}`}>
            <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              View
            </button>
          </Link>

          <Link to={`/admin/products/edit/${p._id}`}>
            <button className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
              Edit
            </button>
          </Link>

          <button
            onClick={() => deleteProduct(p._id)}
            className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Delete
          </button>

        </td>

      </tr>
})}
  </tbody>

</table>

    </div>
  )
}

export default AdminProducts