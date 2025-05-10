import { useState } from "react";
import { FaEnvelope, FaKey, FaUser } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import signImage from '../../src/assets/signup.png'; // Image path

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center px-4">
      {/* Right form (now placed first to appear on left) */}
      <div className="bg-white shadow-md rounded-lg p-10 w-full max-w-md md:order-1">
        <h2 className="text-2xl font-semibold text-center mb-1">Join us at</h2>
        <h1 className="text-3xl font-bold text-purple-600 text-center mb-6">SkillShare</h1>

        <form className="space-y-4">
          
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">Full Name</label>
            <div className="flex items-center bg-gray-100 px-3 rounded">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full bg-gray-100 outline-none py-2"
              />
            </div>
          </div>

         
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">Email</label>
            <div className="flex items-center bg-gray-100 px-3 rounded">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-gray-100 outline-none py-2"
              />
            </div>
          </div>

         
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <div className="flex items-center bg-gray-100 px-3 rounded">
              <FaKey className="text-gray-400 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="w-full bg-gray-100 outline-none py-2"
              />
              <AiOutlineEye
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 cursor-pointer"
              />
            </div>
          </div>

          
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">Re-enter Password</label>
            <div className="flex items-center bg-gray-100 px-3 rounded">
              <FaKey className="text-gray-400 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="w-full bg-gray-100 outline-none py-2"
              />
              <AiOutlineEye
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 cursor-pointer"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-purple-600 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>

      
      <div className="hidden md:flex w-1/2 md:order-2 justify-center">
        <img
          src={signImage}
          alt="signup-illustration"
          className="w-3/4"
        />
      </div>
    </div>
  );
};

export default Signup;
