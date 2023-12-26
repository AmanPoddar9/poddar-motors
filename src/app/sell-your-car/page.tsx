import React from "react";
import Navbar from "@/components/Navbar";

const SellYourCarPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Sell Your Car</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Sell to Us?</h2>
            <p className="text-gray-600">
              At Poddar Motors, we make the car-selling process easy and
              convenient. We offer competitive prices and a hassle-free
              experience for our customers. Sell your car to us and experience a
              seamless transaction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <ol className="list-decimal pl-6">
              <li>Submit the form below with details about your car.</li>
              <li>Our team will review the information and contact you.</li>
              <li>We'll schedule an inspection of your car.</li>
              <li>Receive a competitive offer for your car.</li>
              <li>Complete the necessary paperwork.</li>
              <li>Get paid and hand over your car!</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Sell Your Car Form</h2>
            {/* Include a form for users to submit information about their cars */}
            {/* You can use a form library like Formik or react-hook-form for this */}
            {/* Example Form: */}
            <form>
              {/* Include form fields for car details (make, model, year, etc.) */}
              {/* Include form fields for contact information (name, email, phone, etc.) */}
              {/* Include a submit button */}
            </form>
          </section>

          {/* Add more sections as needed */}
        </div>
      </div>
    </>
  );
};

export default SellYourCarPage;
