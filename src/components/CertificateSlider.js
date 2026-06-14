"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function CertificateSlider() {
  const images = [
    {
      url: "https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/nyomtatott-184780375-AVLW214Gz2IpXNn4.jpg",
      alt: "NayePankh Certificate 1",
    },
    {
      url: "https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/nyomtatott-184780375-mP4wg2o0j3Uv1ggM.jpg",
      alt: "NayePankh Certificate 2",
    },
    {
      url: "https://assets.zyrosite.com/YKbL494Mv8Ip3qgy/nyomtatott-184780375-dWxpDB9gXRuoxvrv.jpg",
      alt: "NayePankh Certificate 3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3500);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl bg-[#1e2022] border border-white/5 shadow-2xl p-4 sm:p-6 group">
      <div className="relative h-64 sm:h-96 md:h-[450px] w-full flex items-center justify-center overflow-hidden rounded-xl bg-black/40">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out flex items-center justify-center p-2 sm:p-4 ${
              index === currentIndex
                ? "opacity-100 scale-100 translate-x-0"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-contain rounded-lg p-2 shadow-lg"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all shadow-lg opacity-0 group-hover:opacity-100"
        aria-label="Previous Slide"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/60 border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all shadow-lg opacity-0 group-hover:opacity-100"
        aria-label="Next Slide"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="flex justify-center gap-2.5 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-6 bg-primary" : "w-2 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
