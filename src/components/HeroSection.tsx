// HeroSection.tsx
import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  galleryImages: string[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ galleryImages }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
      <div className="lg:w-2/3 lg:pr-8 mb-4 lg:mb-0">
        <h2 className="text-5xl font-bold mb-4 text-black-800">
          Navigating Perfection, Accelerating Satisfaction
        </h2>
        <p className="text-gray-600">
          Welcome to Poddar Motors Pvt. Ltd., where passion for automobiles
          meets precision in automotive care. Our commitment is to deliver
          top-notch services, exceeding your expectations since 1996.
        </p>
        <div className="mt-6 space-x-4">
          {/* Call Us Now and Book a Service Now Buttons */}
          <div className="mt-6 space-x-4">
            {/* Call Us Now Button */}
            <a
              href="tel:+918873002702"
              className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-transform"
            >
              Call Us Now
            </a>

            {/* Book a Service Now Button */}
            <a
              href="/service-booking"
              className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition-transform"
            >
              Book a Service Now
            </a>
          </div>
          {/* ... (existing button code) */}
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src={"/maruti_car.png"}
            alt="Maruti Suzuki Car"
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
