import { useState } from "react";
import { FaEnvelope, FaKey } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import logImage from '../../src/assets/illustration.png'
import { Link } from "react-router-dom";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center px-4">
      {/* Left illustration */}
      <div className="hidden md:flex w-1/2  ">
        <img
          src={logImage}
          alt="login-illustration"
          className="w-3/4"
        />
      </div>

      {/* Right form */}
      <div className="bg-white shadow-md rounded-lg p-10 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-1">Welcome to</h2>
        <h1 className="text-3xl font-bold text-purple-600 text-center mb-6">SkillShare</h1>

        <form className="space-y-4">
          {/* Email Field */}
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

          {/* Password Field */}
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">Password</label>
            <div className="flex items-center bg-gray-100 px-3 rounded">
              <FaKey className="text-gray-400 mr-2" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full bg-gray-100 outline-none py-2"
              />
              <AiOutlineEye
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 cursor-pointer"
              />
            </div>
          </div>

          {/* Remember me + Login */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="w-4 h-4" />
            <label className="text-sm text-gray-600">Remember me</label>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
  Don’t have an account?{" "}
  <Link to="/register" className="text-purple-600 font-semibold hover:underline">
    Register
  </Link>
</p>
      </div>
    </div>
  );
};

export default Login;
