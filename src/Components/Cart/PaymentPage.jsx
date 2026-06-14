import { useState } from "react";
import { FaArrowLeft, FaClock, FaCreditCard, FaMobile, FaUniversity, FaBox, FaCalendar } from "react-icons/fa";
import Navbar from "../LandingPage/Navbar";
const paymentMethods = [
  { id: "saved", icon: FaClock, label: "Saved Payment Options", desc: "Pay by saved payment option in your account" },
  { id: "card", icon: FaCreditCard, label: "Credit/ Debit/ATM Card", desc: "Add and secure cards as per RBI guideline" },
  { id: "upi", icon: FaMobile, label: "UPI", desc: "Pay by any UPI App" },
  { id: "netbanking", icon: FaUniversity, label: "Net Banking", desc: "Use Bank net banking added in your account" },
  { id: "cod", icon: FaBox, label: "COD", desc: "Use Bank net banking added in your account" },
];

const banks = [
  { id: "axis", label: "AXIS Bank", emoji: "🔺" },
  { id: "hdfc", label: "HDFC Bank", emoji: "🟥" },
  { id: "icici", label: "ICICI Bank", emoji: "🔴" },
  { id: "kotak", label: "Kotak Bank", emoji: "🔄" },
  { id: "pnb", label: "Punjab National Bank - Retail Banking", emoji: "🤝" },
  { id: "sbi", label: "State Bank of India", emoji: "🔵" },
];

const upiApps = ["🟢", "💳", "🔵", "⭕", "📱"];

// CARD FORM
function CardForm() {
  const [billingDiff, setBillingDiff] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-800 text-[18px]">Payment Method</h3>
        <button className="text-gray-600 text-[14px] font-medium hover:text-[#1a1456]">Add new card</button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* CARD NUMBER */}
        <div className="flex flex-col gap-1">
          <label className="text-[12px] text-gray-500">Credit Card Number</label>
          <input
            type="text"
            placeholder="---- ---- ---- ----"
            className="border border-gray-300 rounded-md px-4 py-3 text-[14px] outline-none tracking-widest"
          />
        </div>

        {/* EXPIRY */}
        <div className="flex flex-col gap-1">
          <label className="text-[12px] text-gray-500">Expiry Date</label>
          <div className="border border-gray-300 rounded-md px-4 py-3 flex items-center justify-between">
            <input type="text" placeholder="MM/YY" className="outline-none text-[14px] flex-1" />
            <FaCalendar className="text-gray-400" />
          </div>
        </div>

        {/* CVV */}
        <div className="flex flex-col gap-1">
          <label className="text-[12px] text-gray-500">Enter CVV</label>
          <input
            type="password"
            placeholder="* * *"
            maxLength={3}
            className="border border-gray-300 rounded-md px-4 py-3 text-[14px] outline-none"
          />
        </div>

        {/* NAME */}
        <div className="flex flex-col gap-1">
          <label className="text-[12px] text-gray-500">Name on Card</label>
          <input
            type="text"
            className="border border-gray-300 rounded-md px-4 py-3 text-[14px] outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="bg-[#1a1456] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2a2466]">
          Continue
        </button>
        <label className="flex items-center gap-2 text-[14px] text-gray-600 cursor-pointer">
          <input
            type="checkbox"
            checked={billingDiff}
            onChange={() => setBillingDiff(!billingDiff)}
            className="w-4 h-4 accent-[#1a1456]"
          />
          Billing Address different from Shipping Address
        </label>
      </div>
    </div>
  );
}

// UPI FORM
function UPIForm() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-gray-800 text-[18px]">Payment Method</h3>
      <div className="flex flex-col gap-2">
        <label className="text-[12px] text-gray-500">UPI (Pay directly from your bank account)</label>
        <input
          type="text"
          placeholder="Please enter your UPI ID"
          className="border border-gray-300 rounded-md px-4 py-3 text-[14px] outline-none max-w-sm"
        />
        <p className="text-[12px] text-gray-400">Ex: mobileNumber@upi</p>
      </div>
      <div>
        <p className="text-[12px] text-gray-500 mb-2">We support following UPI IDs</p>
        <div className="flex gap-3 text-[24px]">
          {upiApps.map((app, i) => (
            <span key={i} className="cursor-pointer">{app}</span>
          ))}
        </div>
      </div>
      <button className="bg-[#1a1456] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2a2466] w-fit mt-2">
        Continue
      </button>
    </div>
  );
}

// NET BANKING FORM
function NetBankingForm() {
  const [selectedBank, setSelectedBank] = useState("axis");

  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-[#1a1456] text-[18px]">Select Bank</h3>

      <div className="flex flex-col gap-3">
        {banks.map((bank) => (
          <label key={bank.id} className="flex items-center gap-3 cursor-pointer">
            <div
              onClick={() => setSelectedBank(bank.id)}
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 cursor-pointer ${selectedBank === bank.id ? "border-[#1a1456]" : "border-gray-300"}`}
            >
              {selectedBank === bank.id && <div className="w-2.5 h-2.5 rounded-full bg-[#1a1456]" />}
            </div>
            <span className="text-[18px]">{bank.emoji}</span>
            <span className="text-[14px] text-gray-700">{bank.label}</span>
          </label>
        ))}
      </div>

      {/* DROPDOWN */}
      <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2 max-w-lg">
        <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">
          Select if your bank is not listed above
        </span>
        <select className="w-full outline-none text-[14px] text-gray-500 bg-transparent">
          <option>Select Bank</option>
          <option>Yes Bank</option>
          <option>IndusInd Bank</option>
          <option>Bank of Baroda</option>
          <option>Canara Bank</option>
        </select>
      </div>
    </div>
  );
}

// SAVED PAYMENT
function SavedPaymentForm() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-gray-800 text-[18px]">Saved Payment Options</h3>
      <p className="text-gray-400 text-[14px]">No saved payment options found.</p>
    </div>
  );
}

// COD FORM
function CODForm() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-gray-800 text-[18px]">Cash on Delivery</h3>
      <p className="text-gray-500 text-[14px] leading-relaxed max-w-md">
        Pay cash when your order is delivered. COD is available for orders within supported pin codes.
      </p>
      <button className="bg-[#1a1456] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2a2466] w-fit">
        Confirm COD Order
      </button>
    </div>
  );
}

// MAIN PAYMENT PAGE
function PaymentPage() {
  const [activeMethod, setActiveMethod] = useState("saved");

  const renderContent = () => {
    switch (activeMethod) {
      case "saved": return <SavedPaymentForm />;
      case "card": return <CardForm />;
      case "upi": return <UPIForm />;
      case "netbanking": return <NetBankingForm />;
      case "cod": return <CODForm />;
      default: return null;
    }
  };

  return (
    <>
    <Navbar/>
    <div className="w-full bg-[#eef2f7] min-h-screen px-6 lg:px-10 py-8">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-6">
        <button className="text-gray-600 hover:text-gray-800"><FaArrowLeft /></button>
        <h1 className="font-bold text-gray-800 text-[24px]">Complete Payment</h1>
      </div>

      {/* MAIN */}
      <div className="bg-white rounded-xl flex overflow-hidden">

        {/* LEFT SIDEBAR */}
        <div className="w-[320px] flex-shrink-0 border-r border-gray-100">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              onClick={() => setActiveMethod(method.id)}
              className={`flex items-center gap-4 px-6 py-5 cursor-pointer border-b border-gray-100 transition-colors ${
                activeMethod === method.id ? "bg-gray-50" : "hover:bg-gray-50"
              }`}
            >
              <method.icon className={`text-[20px] flex-shrink-0 ${activeMethod === method.id ? "text-[#1a1456]" : "text-gray-400"}`} />
              <div>
                <p className={`font-medium text-[14px] ${activeMethod === method.id ? "text-[#1a1456] font-bold" : "text-gray-700"}`}>
                  {method.label}
                </p>
                <p className="text-gray-400 text-[12px]">{method.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 p-8">
          {renderContent()}
        </div>

      </div>
    </div>
    </>
  );
}

export default PaymentPage;