import { useEffect, useState, useRef } from "react"
import { useNavigate, useParams } from "react-router-dom"
import toast from "react-hot-toast"

const EditProduct = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const fileInputRef = useRef(null)

  const [form, setForm] = useState({
    name: "",
    brandName: "",
    sellingPrice: ""
  })

  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)

  // ✅ FETCH EXISTING PRODUCT
  useEffect(() => {
  const fetchProduct = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/products/${id}`)
      const data = await res.json()

      console.log("Fetched product:", data)

      setForm({
        name: (data.name || data.productName ) || "",
        brandName: data.brandName || "",
        sellingPrice: (data.sellingPrice || data.price) || ""
      })

      if (data.img) {
  setPreview(
    data.img.startsWith("http")
      ? data.img
      : `http://localhost:8000/public/${data.img}`
  )
}

    } catch (error) {
      console.log(error)
    }
  }

  fetchProduct()
}, [id])

  // INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // IMAGE CHANGE
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return

    setImage(file)
    setPreview(URL.createObjectURL(file))
  }

  // REMOVE IMAGE
  const removeImage = () => {
    setImage(null)
    setPreview(null)

    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // SUBMIT
  const handleUpdate = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    console.log("form" , form)
    formData.append("name", form.name)
    formData.append("brandName", form.brandName)
    formData.append("sellingPrice", form.sellingPrice)

    if (image) {
      formData.append("image", image)
    }

    await fetch(`http://localhost:8000/api/products/${id}`, {
        method: "PUT",
        body: formData
      })

toast.success("Product updated successfully ✨")
navigate("/admin/products")
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">

      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">

        <h1 className="text-2xl font-bold mb-6 text-[#002b64]">
          Edit Product
        </h1>

        <form onSubmit={handleUpdate} className="space-y-5">

          {/* NAME */}
          <div>
            <label className="block mb-1 font-medium">Product Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* BRAND */}
          <div>
            <label className="block mb-1 font-medium">Brand Name</label>
            <input
              name="brandName"
              value={form.brandName}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* PRICE */}
          <div>
            <label className="block mb-1 font-medium">Price</label>
            <input
              name="sellingPrice"
              type="number"
              value={form.sellingPrice}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          {/* IMAGE */}
          <div>
            <label className="block mb-2 font-medium">Product Image</label>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="w-full border p-2 rounded"
            />

            {preview && (
              <div className="relative mt-4 w-fit">

                <img
                  src={preview}
                  className="w-32 h-32 object-cover rounded-lg border"
                />

                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                >
                  ✕
                </button>

              </div>
            )}

          </div>

          {/* SUBMIT */}
          <button className="w-full bg-[#002b64] text-white py-2 rounded">
            Update Product
          </button>

        </form>

      </div>

    </div>
  )
}

export default EditProduct