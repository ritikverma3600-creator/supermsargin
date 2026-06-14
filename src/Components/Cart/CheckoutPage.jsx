import { useState } from "react";
import { FaArrowLeft, FaShoppingCart, FaCreditCard, FaCheckCircle, FaTruck, FaChevronDown, FaPlus } from "react-icons/fa";
import Navbar from "../LandingPage/Navbar";
import AddAddressModal from "./AddAddressModal";
const addresses = [
  { id: 1, name: "Abhay Kumar", phone: "+91-1234567899", address: "Plot No. 32, 1st Floor, Near Park Hospital, MG Road, Gopalganj, Bengaluru", state: "Karnataka", pincode: "560001", country: "India" },
  { id: 2, name: "Mukesh Kumar", phone: "+91-1234567899", address: "Plot No. 56, 1st Floor, Near Park Hospital, MG Road, Gopalganj, Bengaluru", state: "Karnataka", pincode: "560001", country: "India" },
];

function AddressCard({ address, selected, onSelect }) {
  return (

    <div
      onClick={() => onSelect(address.id)}
      className={`border rounded-xl p-4 cursor-pointer transition-colors ${selected ? "border-[#1a1456]" : "border-gray-200 hover:border-gray-300"}`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${selected ? "border-[#1a1456]" : "border-gray-300"}`}>
          {selected && <div className="w-2.5 h-2.5 rounded-full bg-[#1a1456]" />}
        </div>
        <span className="font-bold text-gray-800 text-[14px]">{address.name}</span>
        <span className="text-gray-500 text-[14px]">{address.phone}</span>
      </div>
      <p className="text-gray-500 text-[14px] ml-8">
        {address.address}<br />
        {address.state} (<span className="font-bold">{address.pincode}</span>), {address.country}
      </p>
    </div>
  );
}

function CheckoutPage() {
  const [selectedShipping, setSelectedShipping] = useState(1);
  const [selectedBilling, setSelectedBilling] = useState(2);
  const [sameAsShipping, setSameAsShipping] = useState(false);
  const [showAllShipping, setShowAllShipping] = useState(false);
  const [showAllBilling, setShowAllBilling] = useState(false);
  const [showAddAddress, setShowAddAddress] = useState(false);

  return (
        <>
    <Navbar/>
    <div className="w-full bg-[#eef2f7] min-h-screen px-6 lg:px-10 py-8 mt-20">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <button className="text-gray-600 hover:text-gray-800"><FaArrowLeft /></button>
            <h1 className="font-bold text-gray-800 text-[24px]">Checkout</h1>
          </div>
          <p className="text-gray-500 text-[14px] ml-7">Review your wholesale order before checkout</p>
        </div>

        {/* STEP INDICATOR */}
        <div className="flex items-center gap-4">
          {[
            { label: "Cart", icon: FaShoppingCart, done: true },
            { label: "Checkout", icon: FaCreditCard, active: true },
            { label: "Payment", icon: FaCheckCircle, done: false },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center gap-2">
              <div className="flex flex-col items-center gap-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${s.done || s.active ? "bg-[#1a1456] text-white" : "bg-gray-200 text-gray-400"}`}>
                  <s.icon />
                </div>
                <span className={`text-[12px] font-medium ${s.done || s.active ? "text-[#1a1456]" : "text-gray-400"}`}>{s.label}</span>
              </div>
              {i < 2 && <div className={`w-20 h-0.5 mb-4 ${s.done ? "bg-[#1a1456]" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-6 items-start">

        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-6">

          {/* BUSINESS INFO */}
          <div className="bg-white rounded-xl p-6">
            <h2 className="font-bold text-gray-800 text-[18px] mb-3">Business Information</h2>
            <div className="flex items-center gap-6 text-[14px] text-gray-600">
              <span><span className="font-medium text-gray-700">Account:</span> Mukesh Retail (ID: BLK7845)</span>
              <span><span className="font-medium text-gray-700">GST Number:</span> 27AADCB2230M1ZT</span>
            </div>
          </div>

          {/* SHIPPING ADDRESS */}
          <div className="bg-white rounded-xl p-6">
            <h2 className="font-bold text-gray-800 text-[18px] mb-4">Shipping Address</h2>
            <div className="flex flex-col gap-3">
              {addresses.slice(0, showAllShipping ? addresses.length : 2).map((addr) => (
                <AddressCard
                  key={addr.id}
                  address={addr}
                  selected={selectedShipping === addr.id}
                  onSelect={setSelectedShipping}
                />
              ))}

              {/* VIEW ALL */}
              <button
                onClick={() => setShowAllShipping(!showAllShipping)}
                className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-600 hover:bg-gray-50"
              >
                <FaChevronDown className={`text-[12px] transition-transform ${showAllShipping ? "rotate-180" : ""}`} />
                View All 8 Addresses
              </button>

              {/* ADD NEW */}
              <button onClick={() => setShowAddAddress(true)} className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-[#1a1456] hover:bg-gray-50 font-medium">
                <FaPlus className="text-[12px]" />
                Add New Address
              </button>
            </div>
          </div>

          {/* BILLING ADDRESS */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-800 text-[18px]">Billing Address</h2>
              <label className="flex items-center gap-2 text-[14px] text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  checked={sameAsShipping}
                  onChange={() => setSameAsShipping(!sameAsShipping)}
                  className="w-4 h-4 accent-[#1a1456]"
                />
                Same as Shipping Address
              </label>
            </div>

            {!sameAsShipping && (
              <div className="flex flex-col gap-3">
                {addresses.slice(0, showAllBilling ? addresses.length : 2).map((addr) => (
                  <AddressCard
                    key={addr.id}
                    address={addr}
                    selected={selectedBilling === addr.id}
                    onSelect={setSelectedBilling}
                  />
                ))}
                <button
                  onClick={() => setShowAllBilling(!showAllBilling)}
                  className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-gray-600 hover:bg-gray-50"
                >
                  <FaChevronDown className={`text-[12px] transition-transform ${showAllBilling ? "rotate-180" : ""}`} />
                  View All 8 Addresses
                </button>
                <button onClick={() => setShowAddAddress(true)} className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 text-[14px] text-[#1a1456] hover:bg-gray-50 font-medium">
                  <FaPlus className="text-[12px]" />
                  Add New Address
                </button>
              </div>
            )}
          </div>

        </div>

        {/* RIGHT — ORDER SUMMARY */}
        <div className="w-[340px] flex-shrink-0 bg-white rounded-xl p-6 flex flex-col gap-4">
          <h2 className="font-bold text-gray-800 text-[20px]">Order Summary</h2>

          <div className="flex flex-col gap-3 border-b border-gray-100 pb-4">
            <div className="flex items-center justify-between text-[14px] text-gray-600">
              <span>Subtotal (Excluding GST)</span>
              <span className="font-medium">₹40000.00</span>
            </div>
            <div className="flex items-center justify-between text-[14px] text-gray-600">
              <span>Bulk Discount (0%)</span>
              <span className="text-green-500 font-medium">-₹00.00</span>
            </div>
            <div className="flex items-center justify-between text-[14px] text-gray-600">
              <span>Shipping</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex items-center justify-between text-[14px] text-gray-600">
              <span>GST Itemized</span>
              <span className="font-medium">₹2000.00</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-bold text-gray-800 text-[18px]">Total</span>
            <span className="font-bold text-gray-800 text-[20px]">₹42000.00</span>
          </div>

          <button className="w-full bg-[#1a1456] text-white py-3 rounded-md font-semibold hover:bg-[#2a2466]">
            Pay Now
          </button>

          <div className="flex items-center gap-2 text-gray-500 text-[14px]">
            <FaTruck className="text-gray-400" />
            <span>Free shipping on orders above ₹20,000</span>
          </div>

          <p className="text-[12px] text-gray-400">
            By placing your order, you agree to our Terms of Service &{" "}
            <a href="#" className="text-[#1a1456] underline">Privacy Policy</a>
          </p>
        </div>

      </div>
    </div>
    {showAddAddress && (
  <AddAddressModal
    onClose={() => setShowAddAddress(false)}
    onSubmit={() => setShowAddAddress(false)}
  />
)}
    </>
  );
}

export default CheckoutPage;