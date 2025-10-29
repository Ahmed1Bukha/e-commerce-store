import React from "react";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="hero-section relative">
      <Image
        src="/images/placerHolder.png"
        alt="hero-image"
        width={1120}
        height={1120}
        className="mx-auto"
      />
      <div className="hero-content absolute inset-0 flex items-center justify-center flex-col text-center">
        <h3 className=" text-6xl font-poppins font-medium mb-4">Shop Page</h3>
        <div className="text-3xl font-inter text-black/90">
          Let’s design the place you always imagined.
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
