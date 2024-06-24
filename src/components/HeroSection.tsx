import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const Products = [
    {
      id: 1,
      title: "Grocery",
      image: "/grocery.webp",
    },
    {
      id: 2,
      title: "Mobiles",
      image: "/mobiles.webp",
    },
    {
      id: 3,
      title: "Fashion",
      image: "/fashion.webp",
    },
    {
      id: 4,
      title: "Electronics",
      image: "/electronics.webp",
    },
    {
      id: 5,
      title: "Home & Furniture",
      image: "/furniture.webp",
    },
    {
      id: 6,
      title: "Appliances",
      image: "/appliances.webp",
    },
    {
      id: 7,
      title: "Travel",
      image: "/travel.webp",
    },
    {
      id: 8,
      title: "Beauty, Toys & More",
      image: "/toys.webp",
    },
    {
      id: 9,
      title: "Two Wheelers",
      image: "/bike.webp",
    },
  ];
  return (
    <div className="bg-slate-200 px-16 my-3">
      <div className="flex bg-white justify-between px-48 mx-4 h-32">
        {Products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col justify-center items-center "
            style={{ cursor: "pointer" }}
          >
            <Image
              height={60}
              width={60}
              src={product.image}
              alt={product.title}
            />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
