import { useState, useEffect } from "react"

const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 120,
    img: "/Shoes-1MAIN.png",
    images: ["/Shoes-1SECOND.png", "/Shoes-1THIRD.png", "/Shoes-1FOURTH.png"],
    colors: ["#000000", "#ef4444", "#3b82f6"],
    sizes: [7, 8, 9, 10]
  },
  {
    id: 2,
    name: "Nike Jordan",
    price: 150,
    img: "/shoe2.png",
    images: ["/shoe2.png", "/shoe1.png", "/shoe3.png"],
    colors: ["#000000", "#ef4444", "#3b82f6"],
    sizes: [7, 8, 9, 10]
  }
]

const HeroShowcase = () => {

  const [activeProduct, setActiveProduct] = useState(products[0])
  const [activeImage, setActiveImage] = useState(products[0].img)
  const [selectedColor, setSelectedColor] = useState(products[0].colors[0])
  const [selectedSize, setSelectedSize] = useState(products[0].sizes[0])

  // reset on product change
  useEffect(() => {
    setActiveImage(activeProduct.img)
    setSelectedColor(activeProduct.colors[0])
    setSelectedSize(activeProduct.sizes[0])
  }, [activeProduct])

  return (
    <div className="h-screen bg-gradient-to-br from-gray-100 to-white flex items-center pt-24">

      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10 px-10 w-full">

        {/* LEFT SIDE */}
        <div className="space-y-6">

          <h1 className="text-4xl font-bold text-[#002b64]">
            {activeProduct.name}
          </h1>

          <p className="text-2xl font-semibold text-green-600">
            ${activeProduct.price}
          </p>

          {/* COLORS */}
          <div>
            <p className="font-medium mb-2">Colors</p>

            <div className="flex gap-3">
              {activeProduct.colors.map((color, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedColor(color)}
                  className={`w-7 h-7 rounded-full cursor-pointer border-2 transition ${
                    selectedColor === color
                      ? "border-black scale-110"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div>
            <p className="font-medium mb-2">Size</p>

            <div className="flex gap-2">
              {activeProduct.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded border transition ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={() => {
              console.log("BUY:", {
                product: activeProduct,
                color: selectedColor,
                size: selectedSize
              })
            }}
            className="bg-[#002b64] text-white px-6 py-3 rounded-xl hover:bg-[#001b3f]"
          >
            Buy Now
          </button>

        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center">

          <div className="relative">

            <div className="absolute w-80 h-80 bg-blue-200 blur-3xl rounded-full opacity-40"></div>

            <img
              src={activeImage}
              className="w-[400px] relative z-10 transition duration-500 hover:scale-105"
            />

          </div>

          {/* THUMBNAILS */}
          <div className="flex gap-4 mt-6">
            {activeProduct.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setActiveImage(img)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  activeImage === img ? "border-black" : ""
                }`}
              />
            ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">

          {products.map((p) => (
            <div
              key={p.id}
              onClick={() => setActiveProduct(p)}
              className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition ${
                activeProduct.id === p.id
                  ? "bg-white shadow-lg scale-105"
                  : "hover:bg-gray-100"
              }`}
            >
              <img src={p.img} className="w-16 h-16 object-cover" />

              <div>
                <p className="font-medium">{p.name}</p>
                <p className="text-sm text-gray-500">${p.price}</p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  )
}

export default HeroShowcase