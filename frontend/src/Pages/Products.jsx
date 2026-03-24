import React, { useEffect } from "react";
// import products from "../Data/product";
import Card from "../Components/card";
import { useCart } from "../Context/CartContext";
import axios from "axios";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const fecthProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/products");

      console.log("res", res);
      return setProducts(res.data);
    } catch (error) {
      console.log("got runtime exception from the fecthProducts route handler");
    }
  };
  useEffect(() => {
    fecthProducts();
  }, []);

  // console.log("products", products);
  return (
    <div className="w-full grid grid-cols-4 gap-6 p-10">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
