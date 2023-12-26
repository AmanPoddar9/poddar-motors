import React from "react";
import Navbar from "@/components/Navbar";

const CareersPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100">
        <div className="container mx-auto p-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Careers</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Current Job Openings</h2>
            <ul className="list-disc pl-6">
              <li>Job Title 1</li>
              <li>Job Title 2</li>
              <li>Job Title 3</li>
              {/* Add more job titles as needed */}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Why Join Our Team</h2>
            <p className="text-gray-600">
              At Poddar Motors, we value innovation, teamwork, and dedication.
              We are committed to providing a positive and inclusive work
              environment where employees can thrive. Join us in our mission to
              deliver top-notch automotive services and exceed customer
              expectations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How to Apply</h2>
            <p className="text-gray-600">
              To apply for a position, please send your resume and cover letter
              to careers@poddarmotors.com. Be sure to include the job title in
              the subject line of your email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Culture</h2>
            <p className="text-gray-600">
              At Poddar Motors, we foster a culture of continuous learning,
              collaboration, and excellence. We believe in recognizing and
              rewarding the hard work and dedication of our employees.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Employee Benefits</h2>
            <ul className="list-disc pl-6">
              <li>Competitive salary</li>
              <li>Health and wellness programs</li>
              <li>Career development opportunities</li>
              {/* Add more benefits as needed */}
            </ul>
          </section>

          {/* Add more sections as needed */}
        </div>
      </div>
    </>
  );
};

export default CareersPage;
