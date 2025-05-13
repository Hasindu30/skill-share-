
import { useEffect, useState } from 'react';
import Navbar from '../../src/components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const guarantees = [
  {
    title: '100% Original Work',
    description: 'Every assignment is written from scratch and passed through strict plagiarism checks using trusted tools.'
  },
  {
    title: 'Timely Delivery',
    description: 'Deadlines matter. We guarantee on-time delivery so you never miss a submission date.'
  },
  {
    title: 'Subject-Matter Experts',
    description: 'Assignments are handled by academically qualified experts with subject specialization.'
  },
  {
    title: 'Unlimited Revisions',
    description: 'Not satisfied with the first draft? We offer free revisions to match your original instructions.'
  },
  {
    title: '100% Confidentiality',
    description: 'Your identity and submitted data are never shared. We maintain full privacy and discretion.'
  },
  {
    title: '24/7 Support',
    description: 'Our team is available round-the-clock to assist you with queries or order tracking.'
  }
];

const GuaranteePage = () => {
  return (
    <div>
      <Navbar />
      <section className="py-24 px-4 bg-gradient-to-b from-purple-200 to-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6"data-aos="fade-up">Our Guarantees</h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12"data-aos="fade-up">
          We are committed to delivering top-tier academic support backed by strong values and solid promises.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"data-aos="fade-up">
          {guarantees.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GuaranteePage;