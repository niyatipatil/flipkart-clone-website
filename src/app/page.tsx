import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CarouselDemo } from "@/components/CarouselDemo";
import HeroSection from "@/components/HeroSection";
import Cards from "@/components/Cards";
import { Products } from "@/productdata";
//import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  return (
    <div className="bg-slate-200">
      <Header />
      <HeroSection />
      <CarouselDemo />
      <div className="grid grid-cols-3 gap-10 bg-slate-200 mt-8 mb-12 mx-20">
        {Products.map((product) => (
          <Cards
            key={product.id}
            id={product.id}
            name={product.name}
            rating={product.rating}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
