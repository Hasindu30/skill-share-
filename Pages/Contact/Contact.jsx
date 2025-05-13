import Navbar from '../../src/components/Navbar';
import contact from "../../src/assets/contact.jpg"
import { useEffect, useState } from 'react';
const Contact = () => {
  useEffect(() => {
      setTimeout(() => {
        AOS.init({ duration: 1100, once: true });
      }, 100); 
    }, []);
  return (
    <div>
      <Navbar />

      {/* Top Banner */}
      <div className="relative bg-gray-100 w-full h-[300px] flex items-center justify-center" >
        <img
          src={contact}
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover "
        />
        <h1 className="relative z-10 text-4xl font-bold text-[#001242]">Contact Us</h1>
      </div>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white"data-aos="fade-up">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          
          {/* Left Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#1f1f1f]">Let's talk with us</h2>
            <p className="text-gray-600">
              Need help with your assignment? Have questions or feedback? Fill out the form and our academic team will get back to you shortly.
            </p>

            <div className="text-gray-700 space-y-4">
              <p><span className="font-bold text-purple-700">📍</span> 401 University Avenue, Floor 2,
                <br />Colombo 07, Sri Lanka.</p>
              <p><span className="font-bold text-purple-700">📞</span> +94 71 703 3907</p>
              <p><span className="font-bold text-purple-700">📧</span> Contact@skillshare.com</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white shadow-md rounded-xl p-8">
            <form className="space-y-5">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="w-1/2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="w-1/2 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="Phone Number*"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Your message..."
                className="w-full px-4 py-3 border rounded-md h-28 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
