import React, { useEffect, useState } from "react"
import axios from "axios"
import Card from "../Components/card"

const Products = () => {

  const [products, setProducts] = useState([])

  // FILTER STATES
  const [selectedBrands, setSelectedBrands] = useState([])
  const [showAllBrands, setShowAllBrands] = useState(false)
  const [maxPrice, setMaxPrice] = useState("")

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 16

  // FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/products")
      setProducts(res.data)
    } catch (error) {
      console.log("Fetch error", error)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  // UNIQUE BRANDS
  const brands = [...new Set(products.map(p => p.brandName))]

  // TOGGLE BRAND
  const toggleBrand = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
    setCurrentPage(1)
  }

  // FILTER LOGIC
  const filteredProducts = products.filter((p) => {

    const matchBrand =
      selectedBrands.length > 0
        ? selectedBrands.includes(p.brandName)
        : true

    const matchPrice = maxPrice
      ? p.price <= Number(maxPrice)
      : true

    return matchBrand && matchPrice
  })

  // PAGINATION LOGIC
  const indexOfLast = currentPage * itemsPerPage
  const indexOfFirst = indexOfLast - itemsPerPage

  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast)
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  return (
  <div className="bg-white min-h-screen px-10 py-8">

    {/* HEADER */}
    <div className="mb-6">
      <p className="text-sm text-gray-500">Home / Products</p>

      <div className="flex justify-between items-center mt-2">
        <h1 className="text-2xl font-semibold">PRODUCTS</h1>

        {/* Search */}
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 px-4 py-2 w-[300px] text-sm outline-none"
        />
      </div>
    </div>

    <div className="flex gap-10">

      {/* LEFT FILTER (MINIMAL) */}
      <div className="w-[220px] space-y-6 text-sm">

        <h2 className="font-semibold">Filters</h2>

        {/* SIZE */}
        <div>
          <p className="mb-2 font-medium">Size</p>
          <div className="flex flex-wrap gap-2">
            {["XS", "S", "M", "L", "XL", "2X"].map((size) => (
              <button
                key={size}
                className="border border-gray-300 px-3 py-1 text-xs hover:border-black"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* BRAND */}
        <div>
          <p className="mb-2 font-medium">Brand</p>

          <div className="space-y-2">
            {brands.slice(0, 6).map((brand, i) => (
              <label key={i} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                />
                {brand}
              </label>
            ))}
          </div>
        </div>

        {/* PRICE */}
        <div>
          <p className="mb-2 font-medium">Max Price</p>
          <input
            type="number"
            placeholder="$"
            value={maxPrice}
            onChange={(e) => {
              setMaxPrice(e.target.value)
              setCurrentPage(1)
            }}
            className="border px-2 py-1 w-full text-sm"
          />
        </div>

      </div>

      {/* RIGHT PRODUCTS */}
      <div className="flex-1">

        {/* GRID */}
        <div className="grid grid-cols-4 gap-x-6 gap-y-10">

          {currentProducts.map((product) => (
            <Card key={product._id} product={product} />
          ))}

        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-10 gap-2">

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 text-sm ${
                currentPage === i + 1
                  ? "text-black font-semibold"
                  : "text-gray-400"
              }`}
            >
              {i + 1}
            </button>
          ))}

        </div>

      </div>

    </div>
  </div>
)
}

export default Products