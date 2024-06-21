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
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e7230486b354e4d7.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f3bf52cd04277d01.png?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a55788076655d58a.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e7230486b354e4d7.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bf42fbdd3d37c8c3.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f888f8f443a8a927.jpg?q=20",
  ];
  return (
    <Carousel className="w-full max-w-screen-xl mx-auto">
      <CarouselContent className="max-w-full">
        {images.map((imageUrl, index) => (
          <CarouselItem key={index} className="flex-shrink-0">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center bg-white justify-center p-6 rounded-lg">
                  <img
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    className="max-w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
