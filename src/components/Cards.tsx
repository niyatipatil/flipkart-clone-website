import Image from "next/image";
import React from "react";
import img1 from "../../public/img1.jpg";
import img2 from "../../public/img2.jpg";
import img3 from "../../public/img3.jpg";

const Cards = () => {
  return (
    <div className="flex space-x-6 bg-slate-200 mt-20 mb-20">
      <div className="w-1/4 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition duration-300 mt-5 mb-5">
        <a href="#">
          <Image
            className="p-8 rounded-t-lg w-full"
            src={img1}
            alt="product image"
            width={500}
            height={300}
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
              Apple iPhone SE 3rd Gen
            </h5>
          </a>
          <div className="flex items-center justify-between mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              ></svg>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                4.0
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">₹ 30,000</span>
            <a
              href="#"
              className="text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/4 bg-white border border-gray-200 rounded-lg shadow  hover:shadow-lg transition duration-300 mt-5 mb-5 ">
        <a href="#">
          <Image
            className="p-8 rounded-t-lg w-full"
            src={img2}
            alt="product image"
            width={500}
            height={300}
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
              realme C67 5G Dual Sim Smartphone
            </h5>
          </a>
          <div className="flex items-center justify-between mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              ></svg>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                3.5
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 ">₹ 13,499</span>
            <a
              href="#"
              className="text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/4 bg-white border border-gray-200 rounded-lg shadow  hover:shadow-lg transition duration-300 mt-5 mb-5">
        <a href="#">
          <Image
            className="p-8 rounded-t-lg w-full"
            src={img3}
            alt="product image"
            width={500}
            height={300}
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900">
              Samsung Galaxy S24 Ultra
            </h5>
          </a>
          <div className="flex items-center justify-between mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              ></svg>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                5.0
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">₹ 13,499</span>
            <a
              href="#"
              className="text-white bg-green-700 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
