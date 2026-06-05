import { useState } from "react";
import { FaUpload, FaCheckCircle } from "react-icons/fa";
import logoImage from "./../assets/images.png";

const slides = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
  "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600",
  "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600",
  "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600",
  "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=600",
];

function FloatingInput({ label, required, type = "text", prefix }) {
  return (
    <div className="relative border border-gray-300 rounded-md px-3 pt-4 pb-2 flex items-center gap-2">
      <span className="absolute -top-2.5 left-3 bg-white text-xs text-gray-500 px-1">
        {label}{required && <span className="text-red-500">*</span>}
      </span>
      {prefix && <span className="text-gray-500 text-[12px]">{prefix}</span>}
      <input type={type} className="flex-1 outline-none text-[12px] text-gray-700" />
    </div>
  );
}

function FileInput({ label, required }) {
  return (
    <div>
      <div className="relative border border-gray-300 rounded-md px-3 pt-4 pb-2 flex items-center justify-between">
        <span className="absolute -top-2.5 left-3 bg-white text-xs text-gray-500 px-1">
          {label}{required && <span className="text-red-500">*</span>}
        </span>
        <span className="text-gray-400 text-[12px]">No File Chosen</span>
        <FaUpload className="text-[#1a1456]" />
      </div>
      <p className="text-xs text-gray-400 mt-1">Max size 1MB pdf, jpg, jpeg, png</p>
    </div>
  );
}

function RegisterSeller() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ownsBrand, setOwnsBrand] = useState(false);
  const [agreed, setAgreed] = useState(true);

  return (
    <div className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="w-full h-16 border-b border-gray-200 flex items-center px-6 lg:px-10">
        <img src={logoImage} alt="Logo" className="w-40 object-contain" />
      </nav>

      {/* HEADING */}
      <div className="text-center py-8">
        <h1 className="font-bold text-gray-800">One platform. Many trusted solution.</h1>
        <p className="text-gray-500 text-[17px] mt-1">Accelerate growth for your business today</p>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col lg:flex-row gap-8 px-6 lg:px-16 pb-16">

        {/* LEFT — IMAGE SLIDER */}
        <div className="flex flex-col gap-4 lg:w-[40%]">
          <div className="rounded-xl overflow-hidden">
            <img
              src={slides[currentSlide]}
              alt="Slide"
              className="w-full h-[400px] object-cover"
            />
          </div>
          {/* DOTS */}
          <div className="flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-3 h-3 rounded-full ${i === currentSlide ? "bg-red-500" : "bg-gray-300"}`}
              />
            ))}
          </div>
          <button className="bg-[#1a1456] text-white py-3 rounded-md font-medium hover:bg-[#2a2466]">
            Register as a Seller
          </button>
        </div>

        {/* RIGHT — FORM */}
        <div className="flex-1 border border-gray-200 rounded-xl p-8 flex flex-col gap-6">

          {/* TITLE */}
          <h2 className="text-center font-bold text-[#1a1456] text-[20px]">Register as a Buyer</h2>

          {/* INFO BOX */}
          <div className="bg-[#eef2f7] rounded-md px-4 py-3 text-center text-[12px] text-gray-500">
            Please share your mobile number for business verification. Your number is safe with us.
            We guarantee no spam calls. Your Mobile Number would be used as your login ID.
          </div>

          {/* BUSINESS DETAILS */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Business Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative border border-gray-300 rounded-md px-3 pt-4 pb-2 flex items-center justify-between">
                <span className="absolute -top-2.5 left-3 bg-white text-xs text-gray-500 px-1">Pan Number<span className="text-red-500">*</span></span>
                <input type="text" className="flex-1 outline-none text-[12px]" />
                <FaCheckCircle className="text-green-500" />
              </div>
              <FileInput label="Upload Pan" required />
              <FloatingInput label="GST Number" required />
              <FileInput label="Upload GST" required />
              <FloatingInput label="Company / Business Name" required />
              <div className="relative border border-gray-300 rounded-md px-3 pt-4 pb-2">
                <span className="absolute -top-2.5 left-3 bg-white text-xs text-gray-500 px-1">Legal Entity Type<span className="text-red-500">*</span></span>
                <select className="w-full outline-none text-[12px] text-gray-700 bg-transparent">
                  <option value="">Select</option>
                  <option>Proprietorship</option>
                  <option>Partnership</option>
                  <option>Pvt. Ltd.</option>
                  <option>LLP</option>
                </select>
              </div>
              <FloatingInput label="Pincode" required />
              <FloatingInput label="City" required />
            </div>
          </div>

          {/* PERSONAL DETAILS */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FloatingInput label="Contact Person" required />
              <FloatingInput label="Email" required type="email" />
              <div className="relative border border-gray-300 rounded-md px-3 pt-4 pb-2 flex items-center gap-2">
                <span className="absolute -top-2.5 left-3 bg-white text-xs text-gray-500 px-1">Mobile Number<span className="text-red-500">*</span></span>
                <span className="text-gray-500 text-[12px]">+91</span>
                <span className="text-gray-300">|</span>
                <input type="tel" className="flex-1 outline-none text-[12px]" />
                <FaCheckCircle className="text-green-500" />
              </div>
              <FloatingInput label="Password" required type="password" />
              <FloatingInput label="Confirm Password" required type="password" />
            </div>
          </div>

          {/* BANKING DETAILS */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Banking Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-2 items-start">
                <FloatingInput label="Bank Account Number" required />
              </div>
              <div className="flex gap-2 items-center">
                <div className="flex-1">
                  <FloatingInput label="Swift / IFSC" required />
                </div>
                <button className="bg-[#1a1456] text-white px-5 py-3 rounded-md text-[12px] font-medium hover:bg-[#2a2466] flex-shrink-0">
                  Verify
                </button>
              </div>
              <FloatingInput label="Bank Name" required />
              <FloatingInput label="Account Holder Name" required />
              <FloatingInput label="Bank Branch" required />
              <FloatingInput label="Bank City" required />
              <FloatingInput label="Bank State" required />
            </div>
          </div>

          {/* OTHER INFORMATIONS */}
          <div>
            <h3 className="font-bold text-gray-800 mb-4">Other Informations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <FileInput label="Address Proof" required />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[12px] text-gray-600">Do You Own A Brand?</span>
                <label className="flex items-center gap-1 text-[12px] cursor-pointer">
                  <input type="radio" name="brand" checked={ownsBrand} onChange={() => setOwnsBrand(true)} /> Yes
                </label>
                <label className="flex items-center gap-1 text-[12px] cursor-pointer">
                  <input type="radio" name="brand" checked={!ownsBrand} onChange={() => setOwnsBrand(false)} /> NO
                </label>
              </div>
              <FloatingInput label="Brand Name" />
              <FloatingInput label="Trademark Number" />
              <FileInput label="Upload Brand Logo" required />
              <FloatingInput label="ESI Registration Number" required />
            </div>
          </div>

          {/* CAPTCHA */}
          <div>
            <h3 className="font-bold text-gray-800 mb-1">Confirm Humanity</h3>
            <p className="text-gray-500 text-[12px] mb-3">Before we onboard you, we need to confirm you are a human.</p>
            <div className="border border-gray-300 rounded-md p-4 flex items-center gap-3 w-fit">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-[12px] text-gray-600">I'm not a robot</span>
              <div className="ml-4 text-right">
                <div className="text-xs text-gray-400">reCAPTCHA</div>
                <div className="text-xs text-gray-300">Privacy - Terms</div>
              </div>
            </div>
          </div>

          {/* TERMS + BUTTONS */}
          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-2 text-[12px] text-gray-600 cursor-pointer">
              <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} className="w-4 h-4 accent-[#1a1456]" />
              I agree to the <a href="#" className="text-[#1a1456] underline">Terms & Conditions</a>
            </label>
            <button className="w-full bg-[#1a1456] text-white py-3 rounded-md font-semibold hover:bg-[#2a2466]">
              Submit
            </button>
            <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-md font-medium hover:bg-gray-50">
              Cancel
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default RegisterSeller;