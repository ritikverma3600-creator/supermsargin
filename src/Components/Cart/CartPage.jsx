import { useState } from "react";
import { FaArrowLeft, FaShoppingCart, FaCreditCard, FaCheckCircle, FaTruck, FaTrash } from "react-icons/fa";
import Navbar from "../LandingPage/Navbar";
import AlsoBoughtModal from "./AlsoBoughtModal";

const initialCartItems = [
  { id: 1, name: "Premium Cotton T-Shirts", desc: "100% Cotton, Mixed Colors & Sizes", price: 105, qty: 100, min: 50, uniqueId: "APP-001", brand: "Test Brand", customStyle: "B-001", customOrder: "A-001", hsn: "6109", gst: 5, image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=200" },
  { id: 2, name: "Leather Handbags Collection", desc: "Leather", price: 105, qty: 100, min: 50, uniqueId: "APP-001", brand: "Test Brand", customStyle: "B-001", customOrder: "A-001", hsn: "6109", gst: 5, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=200" },
  { id: 3, name: "Decorative Throw Pillows", desc: "Various Patterns & Colors", price: 105, qty: 100, min: 50, uniqueId: "APP-001", brand: "Test Brand", customStyle: "B-001", customOrder: "A-001", hsn: "6109", gst: 5, image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=200" },
  { id: 4, name: "Blue Rugged Jeans", desc: "Comfortable denim, Colors", price: 105, qty: 100, min: 50, uniqueId: "APP-001", brand: "Test Brand", customStyle: "B-001", customOrder: "A-001", hsn: "6109", gst: 5, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200" },
];

function StepIndicator({ step }) {
  const steps = [
    { label: "Cart", icon: FaShoppingCart },
    { label: "Checkout", icon: FaCreditCard },
    { label: "Payment", icon: FaCheckCircle },
  ];

  return (
    <div className="flex items-center gap-4">
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i <= step ? "bg-[#1a1456] text-white" : "bg-gray-200 text-gray-400"}`}>
              <s.icon />
            </div>
            <span className={`text-[12px] font-medium ${i <= step ? "text-[#1a1456]" : "text-gray-400"}`}>{s.label}</span>
          </div>
          {i < steps.length - 1 && (
            <div className={`w-24 h-0.5 mb-4 ${i < step ? "bg-[#1a1456]" : "bg-gray-200"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function CartPage() {
  const [items, setItems] = useState(initialCartItems);
  const [showAlsoBought, setShowAlsoBought] = useState(false);

  const updateQty = (id, delta) => {
    setItems((prev) => prev.map((item) =>
      item.id === id ? { ...item, qty: Math.max(item.min, item.qty + delta) } : item
    ));
  };

  const removeItem = (id) => setItems((prev) => prev.filter((item) => item.id !== id));

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const gstTotal = items.reduce((sum, item) => sum + (item.price * item.qty * item.gst) / 100, 0);
  const total = subtotal + gstTotal;

  return (
    <><Navbar/>
    <div className="w-full bg-[#eef2f7] min-h-screen px-6 lg:px-10 py-8 mt-20">
        <div className="bg-white rounded-xl mx-12 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <button className="text-gray-600 hover:text-gray-800">
              <FaArrowLeft />
            </button>
            <h1 className="font-bold text-gray-800 text-[24px]">Cart</h1>
          </div>
          <p className="text-gray-500 text-[14px] ml-7">Review your wholesale order before checkout</p>
        </div>
        <StepIndicator step={0} />
      </div>

      <div className="flex gap-6 items-start">

        {/* LEFT — CART ITEMS */}
        <div className="flex-1 border rounded-xl divide-y divide-gray-300">
          <h2 className="font-bold text-gray-800 px-6 py-3 text-[18px] mb-4">Cart Items ({items.length})</h2>

          <div className="flex flex-col divide-y divide-gray-300">
            {items.map((item) => {
              const itemTotal = item.price * item.qty;
              const gstAmount = (itemTotal * item.gst) / 100;

              return (
                <div key={item.id} className="py-5 flex gap-4 p-6">

                  {/* IMAGE */}
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />

                  {/* DETAILS */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">

                      {/* LEFT INFO */}
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-[16px]">{item.name}</h3>
                        <p className="text-gray-400 text-[14px] mb-2">{item.desc}</p>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-1 text-[12px] text-gray-500">
                          <span>Unique ID: {item.uniqueId}</span>
                          <span>Brand: {item.brand}</span>
                          <span>Custom Style : {item.customStyle}</span>
                          <span>Custom Order No : {item.customOrder}</span>
                        </div>
                      </div>

                      {/* RIGHT — PRICE + QTY */}
                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <div className="text-right">
                          <p className="text-gray-600 text-[14px]">INR {item.price} each (Inc. GST)</p>
                          <p className="text-gray-400 text-[12px]">Min Order: {item.min} pcs</p>
                        </div>

                        {/* QTY CONTROLS */}
                        <div className="flex items-center gap-2">
                          <button onClick={() => updateQty(item.id, -1)} className="w-8 h-8 bg-[#1a1456] text-white rounded flex items-center justify-center hover:bg-[#2a2466]">−</button>
                          <span className="w-12 text-center font-medium text-[14px]">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, 1)} className="w-8 h-8 bg-[#1a1456] text-white rounded flex items-center justify-center hover:bg-[#2a2466]">+</button>
                          <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600 ml-1">
                            <FaTrash className="text-[14px]" />
                          </button>
                          <a href="#" className="text-[#1a1456] text-[12px] underline">Save for later</a>
                        </div>

                        {/* GST + TOTAL */}
                        <div className="text-right text-[12px] text-gray-400">
                          HSN: {item.hsn} &nbsp; GST: {item.gst}% : ₹{gstAmount.toFixed(2)}
                        </div>
                        <p className="font-bold text-gray-800 text-[18px]">₹{itemTotal.toFixed(2)}</p>
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT — CART SUMMARY */}
        <div className="w-[340px] flex-shrink-0 bg-white rounded-xl flex flex-col gap-4 border rounded-xl divide-y divide-gray-300">
          <h2 className="font-bold text-gray-800 text-[20px] px-4 py-2">Cart Summary</h2>

          <div className="flex flex-col gap-3 border-b border-gray-300 pb-4 p-4">
            <div className="flex items-center justify-between text-[14px] text-gray-600">
              <span>Subtotal (Excluding GST)</span>
              <span className="font-medium">₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-[14px] text-gray-600">
              <span>Bulk Discount (0%)</span>
              <span className="text-green-500 font-medium">-₹00.00</span>
            </div>
            <div className="flex items-center justify-between text-[14px] text-gray-600">
              <span>GST Itemized</span>
              <span className="font-medium">₹{gstTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pb-4 px-4">
            <span className="font-bold text-gray-800 text-[18px]">Total</span>
            <span className="font-bold text-gray-800 text-[20px]">₹{total.toFixed(2)}</span>
          </div>
        <div className="p-4">
          <button className="w-full bg-[#1a1456] text-white my-2 py-3 rounded-md font-semibold hover:bg-[#2a2466]">
            Select Address
          </button>
          <button  onClick={() => setShowAlsoBought(true)} className="w-full border border-gray-300 text-gray-700 py-3 rounded-md font-medium hover:bg-gray-50">
            Continue Shopping
          </button>
</div>
          <div className="flex items-center gap-2 text-gray-500 text-[14px] mt-2">
            <FaTruck className="text-gray-400" />
            <span>Free shipping on orders above ₹20,000</span>
          </div>
        </div>

      </div>
      </div>
    </div>
    {showAlsoBought && (
  <AlsoBoughtModal
    onClose={() => setShowAlsoBought(false)}
    onSkip={() => {
      setShowAlsoBought(false);
      navigate("/"); // or wherever
    }}
  />
)}
    </>
  );
}

export default CartPage;