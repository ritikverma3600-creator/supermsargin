import { useState } from "react";
import { FaEnvelope, FaEyeSlash, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SignInModal({ onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-xl w-full max-w-md p-8 relative">

        {/* CLOSE */}
        <button onClick={onClose} className="absolute top-4 right-4 text-red-500 text-[20px] cursor-pointer">
          <FaTimes />
        </button>

        {/* TITLE */}
        <div className="mb-6">
          <h2 className="font-bold text-gray-800 text-[20px] border-b-2 border-gray-800 pb-2 w-fit">
            Buyer Sign In
          </h2>
          <p className="text-gray-500 text-[14px] mt-3">Welcome back! Please sign in to your account</p>
        </div>

        {/* EMAIL */}
        <div className="flex flex-col gap-1 mb-4">
          <label className="text-[14px] text-gray-700">Email<span className="text-red-500">*</span></label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 h-12">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 outline-none text-[14px] text-gray-600"
            />
            <FaEnvelope className="text-gray-400" />
          </div>
        </div>

        {/* PASSWORD */}
        <div className="flex flex-col gap-1 mb-2">
          <label className="text-[14px] text-gray-700">Password<span className="text-red-500">*</span></label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 h-12">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="flex-1 outline-none text-[14px] text-gray-600"
            />
            <button onClick={() => setShowPassword(!showPassword)}>
              <FaEyeSlash className="text-gray-400" />
            </button>
          </div>
        </div>

        {/* FORGOT PASSWORD */}
        <div className="flex justify-end mb-6">
          <a href="#" className="text-[#1a1456] text-[14px] hover:underline">Forgot Password?</a>
        </div>

        {/* LOGIN BUTTON */}
        <button className="w-full bg-[#1a1456] text-white py-3 rounded-md font-semibold hover:bg-[#2a2466] mb-4 cursor-pointer">
          Login
        </button>

        {/* CREATE ACCOUNT */}
        <p className="text-gray-500 text-[14px] mb-2">Do not have an account?</p>
        <button onClick={() => navigate("/register")} className="w-full bg-gray-100 text-gray-800 py-3 rounded-md font-medium hover:bg-gray-200 mb-4 cursor-pointer">
          Create Account
        </button>

        {/* TERMS */}
        <p className="text-center text-[12px] text-gray-400">
          By signing in, you agree to our{" "}
          <a href="#" className="text-[#1a1456] hover:underline">Terms of Service</a>
          {" "}and{" "}
          <a href="#" className="text-[#1a1456] hover:underline">Privacy Policy</a>
        </p>

      </div>
    </div>
  );
}

export default SignInModal;