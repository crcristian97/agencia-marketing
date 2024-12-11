import React from "react";

export default function HeroBanner( { title, src } ) {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src={src}
          alt="Background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 space-y-2">
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">{title}</h1>
      </div>
    </section>
  );
}
