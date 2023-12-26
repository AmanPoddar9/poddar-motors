import Navbar from "@/components/Navbar";
import ServiceCarousel from "@/components/ServiceCarousel";
import HighlightsSection from "@/components/Highlights";
import GallerySectionProps from "@/components/GallerySectionProps";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

const Home: React.FC = () => {
  const galleryImages = [
    "/Workshop_front.jpg",
    "/carwash.jpg",
    "/IMG_1247.jpg",
    "/Workshop_front3.jpg",
    // Add more images as needed
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-tl from-blue-50 to-blue-100">
        <div className="container mx-auto my-12 p-6 shadow-lg rounded-lg">
          {/* Hero Section */}
          <HeroSection galleryImages={[]} />
          {/* Highlights Section */}
          <HighlightsSection />
          {/* Service Carousel Section */}
          <ServiceCarousel />
          {/* Gallery Section */}
          <GallerySectionProps galleryImages={galleryImages} />
          <Footer />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-4 p-2 bg-gray-200 text-gray-800 text-center">
        <p>
          &copy; {new Date().getFullYear()} Poddar Motors Pvt. Ltd. All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Home;
