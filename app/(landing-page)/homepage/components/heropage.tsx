import Image from "next/image";
import React from "react";
import { pictures } from "../../../utils/Pictures"; // Adjust path as needed

export default function Heropage() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      {/* Hero Statement */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-light tracking-wide text-gray-900 mb-4">
          PORTFOLIO
        </h1>
        <div className="w-24 h-px bg-gray-900 mx-auto"></div>
      </div>

      {/* Main hero image - Full width spotlight */}
      <div className="mb-16">
        <div className="relative aspect-[16/12] md:aspect-[16/9] overflow-hidden">
          <Image
            src="/clean.jpeg"
            alt="Featured portfolio image"
            fill
            className="object-contain object-top hover:scale-110 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Image 1 */}
        <div className="group relative aspect-[3/5] overflow-hidden bg-gray-100">
          <Image
            src="/photo2.jpg"
            alt="Portfolio image 2"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Image 2 */}
        <div className="group relative aspect-[3/5] overflow-hidden bg-gray-100">
          <Image
            src="/photo3.jpg"
            alt="Portfolio image 3"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        {/* Placeholder for more images */}
        <div className="group relative aspect-[3/5] overflow-hidden bg-gray-100">
          {/* <OptimizedVideo src="/video.mp4" /> */}
          <Image
            src="/clean3.jpeg"
            alt="Portfolio image 3"
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Additional row for more images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {/* Display first 4 images from pictures array */}
        {pictures.slice(0, 9).map((picture) => (
          <div
            key={picture.id}
            className="group relative aspect-[2/3] overflow-hidden bg-gray-50 border border-gray-200"
          >
            <Image
              src={picture.image}
              alt={picture.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
