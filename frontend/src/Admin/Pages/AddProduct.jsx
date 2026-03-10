import { useState } from "react"
import axios from "axios"

const AddProduct = () => {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    image: "",
    stock: ""
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      setLoading(true)

      const res = await axios.post(
        "http://localhost:8000/api/admin/products",
        product
      )

      setMessage("Product added successfully")

      setProduct({
        name: "",
        price: "",
        category: "",
        description: "",
        image: "",
        stock: ""
      })

    } catch (error) {

      console.log(error)
      setMessage("Failed to add product")

    } finally {

      setLoading(false)

    }

  }

  return (

    <div style={{ maxWidth: "500px" }}>

      <h2>Add Product</h2>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>

        <input
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <input
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
        />

        <input
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
        />

        <input
          name="stock"
          type="number"
          placeholder="Stock Quantity"
          value={product.stock}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>

      </form>

    </div>

  )

}

export default AddProduct