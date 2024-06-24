"use client";
import React from "react";
import Header from "@/components/Header";
import CartProduct from "@/components/CartProduct";
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  count: number;
}
const page = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json"); // Path to your data.json file in the public directory
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const removeProduct = async (id: number) => {
    try {
      const response = await axios.delete("/api/deleteproduct", {
        data: { id },
      });
      if (!response) {
        throw new Error("Failed to delete product");
      }
      setProducts((prevProducts) =>
        prevProducts.filter((item) => item.id !== id)
      );
      alert("Product removed successfully!");
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="bg-slate-100 py-5 px-64">
        <div className="flex bg-white justify-between items-center py-2 text-[15px] px-8 h-16 w-[800px] shadow-sm">
          From Saved Addresses
          <button className="border-2 rounded-md text-blue-500 p-2 font-normal hover:shadow-md hover:shadow-blue-100">
            Enter Delivery Pincode
          </button>
        </div>
        <div className="my-3 bg-white w-[700px]">
          {products.map((product) => (
            <CartProduct
              id={product.id}
              removeProduct={removeProduct}
              key={product?.id}
              name={product.name}
              price={product.price}
              rating={product.rating}
              image={product.image}
              count={product.count}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
