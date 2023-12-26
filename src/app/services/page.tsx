"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Paid Service:",
    description:
      "Our paid service is a comprehensive package designed to keep your Maruti Suzuki vehicle in optimal condition. It includes a thorough inspection, engine tune-up, fluid checks and top-ups, and other essential maintenance tasks. Our certified technicians ensure that your vehicle receives the attention it needs for long-lasting performance.",
    image: "public/oilchange.jpg",
  },
  {
    id: 2,
    title: "Running Repair",
    description:
      "Running repairs address specific issues or malfunctions in your vehicle's components. Whether it's addressing engine problems, brake issues, or other running-related concerns, our skilled technicians diagnose and repair the problem efficiently to get you back on the road",
    image: "/oilchange.jpg",
  },
  {
    id: 3,
    title: "Denting",
    description:
      "Our denting services focus on repairing and restoring the body of your vehicle. From minor dents to more significant damage, our team uses advanced techniques to reshape and restore the body panels, providing a smooth and flawless finish ",
    image: "/oilchange.jpg",
  },
  {
    id: 4,
    title: "Painting",
    description:
      "Our painting services involve restoring the exterior appearance of your vehicle. Whether you need a touch-up, color matching, or a full-body paint job, our skilled painters use high-quality paints and precision techniques to achieve a factory-like finish.",
    image: "/oilchange.jpg",
  },
  {
    id: 5,
    title: "A.C. Work",
    description:
      "Keep your cool with our air conditioning services. We provide a range of A.C services, including diagnostics, refrigerant recharge, component repairs, and overall system maintenance to ensure your vehicle's air conditioning operates efficiently",
    image: "/oilchange.jpg",
  },
  {
    id: 6,
    title: "Electrical",
    description:
      " Our electrical services cover a wide range of issues, from diagnosing and repairing electrical system malfunctions to installing new components. Whether it's a faulty starter, alternator, or wiring issue, our technicians use advanced diagnostic tools to pinpoint and resolve electrical issues.",
    image: "/oilchange.jpg",
  },
  {
    id: 7,
    title: "Heat Paint Booth",
    description:
      "Our heat paint booth is equipped with state-of-the-art facilities to ensure a flawless paint finish. The controlled environment helps in achieving the desired paint quality, durability, and smooth texture.",
    image: "/oilchange.jpg",
  },
  {
    id: 8,
    title: "MIG Welding",
    description:
      "Metal Inert Gas (MIG) welding is a versatile welding process used for joining metal components. Our MIG welding services are performed by skilled welders to ensure strong, durable, and precise welds for various automotive applications.",
    image: "/oilchange.jpg",
  },
  {
    id: 9,
    title: "Spot Welding",
    description:
      "Spot welding is a technique used to join metal sheets at specific points. In our workshop, spot welding is employed for structural repairs and body panel assembly, ensuring the integrity and strength of the vehicle's structure",
    image: "/oilchange.jpg",
  },
  {
    id: 10,
    title: "Wheel Alignment",
    description:
      "Wheel alignment is crucial for ensuring that your vehicle travels straight and handles well. Our wheel alignment services involve adjusting the angles of the wheels to manufacturer specifications, improving tire life and overall driving performance.",
    image: "/oilchange.jpg",
  },
  {
    id: 11,
    title: "Wheel Balancing",
    description:
      "Unbalanced wheels can lead to uneven tire wear and affect the vehicle's stability. Our wheel balancing services involve redistributing weight on the wheels, ensuring a smooth and comfortable ride while extending the life of your tires.",
    image: "/oilchange.jpg",
  },
  {
    id: 12,
    title: "Automatic Car Wash",
    description:
      "Treat your vehicle to a thorough and convenient cleaning with our automatic car wash services. Our automated system uses gentle yet effective methods to remove dirt, grime, and contaminants, leaving your vehicle looking spotless.",
    image: "/oilchange.jpg",
  },
  {
    id: 3,
    title: "Brake Repair",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin convallis.",
    image: "/oilchange.jpg",
  },
  {
    id: 3,
    title: "Brake Repair",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin convallis.",
    image: "/oilchange.jpg",
  },
];

const ServicesPage: React.FC = () => {
  useEffect(() => {
    const handleScroll = (event: Event) => {
      event.preventDefault();
      const target = event.target as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.substring(1);
      const targetElement = document.getElementById(targetId || "");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleScroll);

    return () => {
      document.removeEventListener("click", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.title.toLowerCase().replace(/\s/g, "")}
                className="flex flex-col items-center text-gray-800 border p-6 rounded-md shadow-lg hover:shadow-xl transition duration-300"
              >
                {/* Your Service Image */}
                <div className="mb-4">
                  <img
                    src={`/oilchange.jpg`}
                    alt={service.title}
                    className="object-cover w-32 h-32 rounded-full "
                  />
                </div>
                <h2 className="text-xl font-bold mb-2">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`#${service.title.toLowerCase().replace(/\s/g, "")}`}
                  passHref
                >
                  {/* <a className="text-blue-500 hover:underline">Learn More</a> */}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
