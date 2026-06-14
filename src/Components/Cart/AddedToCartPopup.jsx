// src/components/AddedToCartPopup.jsx
import { FaShoppingCart } from "react-icons/fa";
import { useEffect } from "react";

function AddedToCartPopup({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000); // auto close after 2s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="bg-white rounded-xl px-16 py-10 flex flex-col items-center gap-4 shadow-xl">
        <p className="text-[#1a1456] font-medium text-[20px]">Item added to cart</p>
        <FaShoppingCart className="text-green-500 text-[48px]" />
      </div>
    </div>
  );
}

export default AddedToCartPopup;