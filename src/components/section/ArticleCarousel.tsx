"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "keen-slider/keen-slider.min.css";

interface Article {
  title: string;
  image: string;
  link?: string;
}

interface ArticleCarouselProps {
  articles: Article[];
}

export default function ArticleCarousel({ articles }: ArticleCarouselProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: { 
      perView: 3,
      spacing: 32
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 16 }
      }
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {articles.map((article, index) => (
          <div key={index} className="keen-slider__slide">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{article.title}</h3>
              {article.link && (
                <a href={article.link} className="text-primary hover:underline mb-4 block">
                  View Article
                </a>
              )}
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            </div>
          </div>
        ))}
      </div>

      {articles.length > 3 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-600"
          >
            <IoChevronBack size={20} />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(articles.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => instanceRef.current?.moveToIdx(index * 3)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  Math.floor(currentSlide / 3) === index ? "bg-primary" : "bg-gray-300"
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