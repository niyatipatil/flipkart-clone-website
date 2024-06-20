import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { CarouselDemo } from "@/components/CarouselDemo";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <div>
      <Header />
      <CarouselDemo />
      <Cards />
      <Footer />
    </div>
  );
}
