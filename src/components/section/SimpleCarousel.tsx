"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "keen-slider/keen-slider.min.css";

interface CarouselItem {
  image: string;
  title: string;
  description: string;
  link?: string;
}

interface SimpleCarouselProps {
  items: CarouselItem[];
  showButtons?: boolean;
}

export default function SimpleCarousel({ items, showButtons = true }: SimpleCarouselProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {items.map((item, index) => (
          <div key={index} className="keen-slider__slide">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
                {item.link && (
                  <a href={item.link} className="text-primary hover:underline mt-4 inline-block">
                    View Article
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showButtons && items.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-600"
          >
            <IoChevronBack size={20} />
          </button>
          <div className="flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => instanceRef.current?.moveToIdx(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => instanceRef.current?.next()}
            className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-600"
          >
            <IoChevronForward size={20} />
          </button>
        </div>
      )}
    </div>
  );
}