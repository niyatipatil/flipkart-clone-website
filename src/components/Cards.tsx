"use client";
import Image from "next/image";
import React from "react";
//import img1 from "../../public/img1.jpg";
//import img2 from "../../public/img2.jpg";
//import img3 from "../../public/img3.jpg";
import { Products } from "@/productdata";
import axios from "axios";

interface CardProps {
  id: number;
  name: string;
  //handleClick: (id: number) => void;
  price: number;
  rating: number;
  image: string;
}
const Cards: React.FC<CardProps> = ({
  id,
  name,
  //handleClick,
  price,
  rating,
  image,
}) => {
  const handleClick = async (id: number) => {
    const product = Products.find((product) => product.id === id);
    if (!product) return;

    try {
      const response = await axios.post("/api/product", product, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(`Product ${id} added to the cart!`);
      console.log(response.data.message);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    //<div className="grid grid-cols-3 gap-10 bg-slate-200 mt-8 mb-12 mx-20">
    <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300">
      <a href="#">
        <Image
          className="p-8 rounded-t-lg w-full"
          src={image}
          alt="product image"
          width={500}
          height={300}
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900">
            {name}
          </h5>
        </a>
        <div className="flex items-center justify-between mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            <svg
              className="w-4 h-4 text-yellow-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M11 0.6L8.575 6.57L2.7 7.18L7.6 11.115L6.17 17.2L11 14.065L15.83 17.2L14.4 11.115L19.3 7.18L13.425 6.57L11 0.6Z" />
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              {rating}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900">₹ {price}</span>
          <button
            className="text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => handleClick(id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
    //</div>
  );
};

export default Cards;
