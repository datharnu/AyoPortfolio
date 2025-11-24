import React from "react";
import Image from "next/image";
import photo1 from "../../../public/clean.jpeg";
import photo2 from "../../../public/clean2.jpeg";
import photo4 from "../../../public/digital1.jpeg";
import photo3 from "../../../public/clean4.jpeg";
import EnhancedModelHeader from "./components/EnhancedModel";
export default function DigitalsPage() {
  const DigitalsImage = [
    { id: 1, image: photo1 },
    { id: 2, image: photo2 },
    { id: 3, image: photo3 },
    { id: 4, image: photo4 },
  ];
  return (
    <div className="">
      {/* Name and Measurement */}

      <EnhancedModelHeader />
      {/* Digital Images */}

      <div className="container mx-auto px-4 py-12  ">
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8">
          {DigitalsImage.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-[2/3] overflow-hidden bg-white lg:rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={image.image}
                alt={`Digital Image `}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 lg:rounded-2xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="flex flex-col items-center mt-10 justify-center">
        <h1 className="text-4xl md:text-4xl font-light tracking-wide text-gray-900 mb-4">
          SIKIRU AYOMIDE
        </h1>
        <div className="font-bold flex items-center gap-2">
          <p>6&apos;1&quot;</p>
          <p>CH35</p>
          <p>W34</p>
          <div className="">
            <span className="align-super text-xs">Shoe</span>
            <span className="lg:text-lg  font-bold ml-1">EU45</span>
          </div>
          <div className="">
            <span className="align-super text-xs">Hair</span>
            <span className="lg:text-lg font-bold ml-1">BLACK</span>
          </div>
          <div className="">
            <span className="align-super text-xs">Eyes</span>
            <span className="lg:text-lg font-bold ml-1">BLACK</span>
          </div>
        </div>
      </div> */
}
