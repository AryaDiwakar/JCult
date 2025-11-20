"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import "keen-slider/keen-slider.min.css";

interface Quote {
  image: string;
  quote: string;
  author?: string;
}

interface QuoteCarouselProps {
  quotes: Quote[];
}

export default function QuoteCarousel({ quotes }: QuoteCarouselProps) {
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
    <div className="relative mt-8">
      <div ref={sliderRef} className="keen-slider">
        {quotes.map((quote, index) => (
          <div key={index} className="keen-slider__slide">
            <div className="text-center max-w-2xl mx-auto">
              <img src={quote.image} alt="Quote" className="w-full h-48 object-cover mb-6" />
              <blockquote className="text-lg md:text-xl text-white/90 italic mb-4">
                "{quote.quote}"
              </blockquote>
              {quote.author && (
                <p className="text-white/70">— {quote.author}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {quotes.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 text-white"
          >
            <IoChevronBack size={20} />
          </button>
          <div className="flex gap-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => instanceRef.current?.moveToIdx(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => instanceRef.current?.next()}
            className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center hover:bg-white/10 text-white"
          >
            <IoChevronForward size={20} />
          </button>
        </div>
      )}
    </div>
  );
}