import { useState } from "react";
import { FaPlus, FaMinus, FaCheckCircle } from "react-icons/fa";
import logoImage from "./../assets/images.png";

const faqs = [
  { q: "Why is mobile number required?", a: "Your mobile number is used for business verification and will serve as your login ID on our platform." },
  { q: "Where all will it be used?", a: "Your mobile number will only be used for account verification, login, and important business communications." },
  { q: "Is my contact information safe?", a: "Yes, we guarantee no spam calls. Your information is encrypted and never shared with third parties." },
];

function FloatingInput({ label, required, type = "text", prefix }) {
  return (
    <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2 flex items-center gap-2">
      <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">
        {label}{required && <span className="text-red-500">*</span>}
      </span>
      {prefix && <span className="text-gray-500 text-[14px]">{prefix}</span>}
      <input type={type} className="flex-1 outline-none text-[14px] text-gray-700 bg-transparent" />
    </div>
  );
}

function FloatingSelect({ label, required }) {
  return (
    <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2">
      <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">
        {label}{required && <span className="text-red-500">*</span>}
      </span>
      <select className="w-full outline-none text-[14px] text-gray-700 bg-transparent">
        <option value=""></option>
      </select>
    </div>
  );
}

function AgentSignupPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [agreed, setAgreed] = useState(true);

  return (
    <div className="min-h-screen bg-[#2d2b6b] flex flex-col">

      {/* NAVBAR */}
      <nav className="w-full h-16 bg-white flex items-center px-6 lg:px-10">
        <img src={logoImage} alt="Logo" className="w-40 object-contain" />
      </nav>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT — FIXED */}
        <div className="w-[45%] flex-shrink-0 flex flex-col justify-center px-16 py-12 sticky top-16 h-[calc(100vh-64px)]">

          <h1 className="text-white font-bold text-[36px] mb-10 leading-tight">
            Get started with Supermargins
          </h1>

          {/* FAQ */}
          <div className="flex flex-col border-l-4 border-red-500 pl-6 gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-500 pb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span className="text-white text-[14px] font-medium">{faq.q}</span>
                  {openFaq === i
                    ? <FaMinus className="text-white text-[12px] flex-shrink-0" />
                    : <FaPlus className="text-white text-[12px] flex-shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <p className="text-gray-300 text-[12px] mt-2 leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>

          {/* BOTTOM TEXT */}
          <div className="mt-auto pt-1">
            <p className="text-white font-bold text-[18px]">One platform. Many trusted solution.</p>
            <p className="text-gray-300 text-[14px]">Accelerate growth for your business today</p>
            <div className="flex gap-2 mt-3">
              {[0,1,2,3,4].map((i) => (
                <span key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-red-500" : "bg-gray-500"}`} />
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT — SCROLLABLE */}
        <div className="flex-1 overflow-y-auto bg-white rounded-2xl m-10 h-screen [&::-webkit-scrollbar]:hidden">
          <div className="pb-8 px-8 flex flex-col gap-6">

            {/* TITLE */}
            <div className="sticky top-0 z-10 bg-white p-3">
            <h2 className="text-center font-bold text-gray-800 text-[20px]">Create Your Agent Account.</h2>

            {/* INFO BOX */}
            <div className="bg-[#eef2f7] rounded-md  py-3 px-4 mt-3 text-center text-[14px] text-gray-500">
              Please share your mobile number for business verification. Your number is safe with us.
              We guarantee no spam calls. Your Mobile Number would be used as your login ID.
            </div>
            </div>
            {/* COMPANY INFO */}
            <div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Company/Business Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FloatingInput label="Company Name" required />
                <FloatingInput label="Contact Person Name" required />
                <FloatingInput label="Email" required type="email" />
                <FloatingInput label="Password" required type="password" />
                <FloatingInput label="Confirm Password" required type="password" />
                <FloatingInput label="Address" required />
                <FloatingSelect label="State" required />
                <FloatingSelect label="City" required />

                {/* MOBILE */}
                <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2 flex items-center gap-2">
                  <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">Mobile Number<span className="text-red-500">*</span></span>
                  <span className="text-gray-500 text-[14px]">+91</span>
                  <span className="text-gray-300">|</span>
                  <input type="tel" className="flex-1 outline-none text-[14px]" />
                  <FaCheckCircle className="text-green-500" />
                </div>

                <FloatingSelect label="PAN Number" required />
              </div>
            </div>

            {/* BANKING DETAILS */}
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Banking Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* BANK ACCOUNT */}
                <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2 flex items-center gap-2">
                  <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">Bank Account Number<span className="text-red-500">*</span></span>
                  <input type="text" className="flex-1 outline-none text-[14px]" />
                  <FaCheckCircle className="text-green-500" />
                </div>

                <FloatingInput label="IFSC Code" required />
                <FloatingInput label="Bank Name" />
                <FloatingInput label="Account Holder Name" />
                <FloatingInput label="Bank Branch" />
                <FloatingInput label="Bank City" />
                <FloatingInput label="Bank State" />
              </div>
            </div>

            {/* CAPTCHA + TERMS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

              {/* CAPTCHA */}
              <div>
                <h3 className="font-bold text-gray-800 mb-1">Confirm Humanity</h3>
                <p className="text-gray-500 text-[14px] mb-3">Before we onboard you, we need to confirm you are a human.</p>
                <div className="border border-gray-300 rounded-md p-4 flex items-center gap-3 w-fit">
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-[14px] text-gray-600">I'm not a robot</span>
                  <div className="ml-4 text-right">
                    <div className="text-[12px] text-gray-400">reCAPTCHA</div>
                    <div className="text-[12px] text-gray-300">Privacy - Terms</div>
                  </div>
                </div>
              </div>

              {/* TERMS + SUBMIT */}
              <div className="flex flex-col gap-4">
                <label className="flex items-center gap-2 text-[14px] text-gray-600 cursor-pointer">
                  <input type="checkbox" checked={agreed} onChange={() => setAgreed(!agreed)} className="w-4 h-4 accent-[#1a1456]" />
                  I agree to the <a href="#" className="text-[#1a1456] underline">Terms & Conditions</a>
                </label>
                <button className="w-full bg-[#1a1456] text-white py-3 rounded-md font-semibold hover:bg-[#2a2466]">
                  Submit
                </button>
              </div>

            </div>

          </div>
        </div>
</div>
      </div>
    </div>
  );
}

export default AgentSignupPage;