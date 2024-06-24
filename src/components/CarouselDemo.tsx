import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  const images = [
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a55788076655d58a.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f3bf52cd04277d01.png?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f888f8f443a8a927.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e7230486b354e4d7.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bf42fbdd3d37c8c3.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a55788076655d58a.jpg?q=20",
  ];

  return (
    <div className="w-full bg-slate-200 px-16 my-8 mx-2">
      <Carousel className="relative w-full max-w-full mx-auto">
        <CarouselContent className="max-w-full">
          {images.map((imageUrl, index) => (
            <CarouselItem key={index} className="flex-shrink-0">
              <div className="p-0">
                <Card>
                  <CardContent className="flex items-center justify-center rounded-lg p-0">
                    <img
                      src={imageUrl}
                      alt={`Image ${index + 1}`}
                      className="max-w-full h-auto rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-slate-200 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-900" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-slate-200 bg-opacity-50 text-white p-2 rounded-full hover:bg-gray-900" />
      </Carousel>
    </div>
  );
}
