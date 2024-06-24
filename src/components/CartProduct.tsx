import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CartProductProps {
  name: string;
  price: number;
  image: string;
  rating: number;
  count: number;
  removeProduct: (id: number) => void;
  id: number;
}

const CartProduct: React.FC<CartProductProps> = ({
  name,
  price,
  image,
  rating,
  count,
  removeProduct,
  id,
}) => {
  return (
    <div className=" bg-white py-4 px-8 h-[200px] w-[800px] border-b-2 border-slate-100 ">
      <div className="flex bg-white h-[90px] w-[650px]">
        <div className="flex items-center justify-center">
          <Image
            className=""
            src={image}
            alt="productimage"
            height={90}
            width={90}
          ></Image>
        </div>
        <div className="px-7 flex flex-col gap-y-2 ml-8">
          <h1 className="">{name}</h1>
          <h3 className="text-[15px] font-semibold text-green-500">
            ₹ {price}
          </h3>
        </div>
        <Link
          href={`/buynow/${id}`}
          className="bg-blue-500 shadow-md flex items-center justify-center text-white font-semibold text-[15px] shadow-slate-300 w-40 h-10 mt-24 rounded-sm"
        >
          Place Order
        </Link>
      </div>
      <div className="bg-white flex gap-x-2 h-[30px] w-[650px] mt-4">
        <button className="border-2 border-slate-200 px-3 py-0.5 rounded-lg ">
          -
        </button>
        <h1 className="inline-block border-2 border-slate-200 py-0.5 px-3">
          {count}
        </h1>
        <button className="border-2 px-3 py-0.5 border-slate-200 rounded-lg ">
          +
        </button>
        <div className="mx-4 text-[14px] my-1 font-semibold hover:text-blue-500">
          SAVE FOR LATER
        </div>
        <div
          className="mx-4 text-[14px] my-1 font-semibold hover:text-blue-500"
          onClick={() => removeProduct(id)}
        >
          REMOVE
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
