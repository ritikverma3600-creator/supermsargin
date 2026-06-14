import { FaShoppingCart, FaCommentDots, FaTimes } from "react-icons/fa";

const suggestedProducts = [
  { id: 1, name: "Printed Blue Shorts", desc: "Comfortable cotton tee, Colors", price: "INR 99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=300" },
  { id: 2, name: "Blue Sweatshirt", desc: "Comfortable cotton tee, Colors", price: "INR 109.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=300" },
  { id: 3, name: "Black Jacket", desc: "Comfortable cotton tee, Colors", price: "INR 99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300" },
  { id: 4, name: "Gray Formal Shirt", desc: "Comfortable cotton tee, Colors", price: "INR 109.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300" },
];

function AlsoBoughtModal({ onClose, onSkip }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl w-[90%] max-w-4xl p-8 relative">

        <h2 className="font-bold text-gray-800 text-[20px] mb-6">Other buyers also bought</h2>

        {/* PRODUCTS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {suggestedProducts.map((product) => (
            <div key={product.id} className="border border-gray-200 rounded-xl overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-44 object-cover" />
              <div className="p-3 flex flex-col gap-2">
                <h3 className="font-bold text-gray-800 text-[14px]">{product.name}</h3>
                <p className="text-gray-400 text-[12px]">{product.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#1a1456] text-[14px]">{product.price}</span>
                  <span className="text-gray-400 text-[12px]">{product.min}</span>
                </div>
                <div className="flex gap-2 mt-1">
                  <button className="flex-1 flex items-center justify-center gap-1 bg-[#1a1456] text-white py-1.5 rounded-md text-[12px] hover:bg-[#2a2466]">
                    <FaShoppingCart className="text-[12px]" /> Add to cart
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 border border-gray-300 text-gray-700 py-1.5 rounded-md text-[12px] hover:bg-gray-50">
                    <FaCommentDots className="text-[12px]" /> Add to Chat
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SKIP BUTTON */}
        <div className="flex justify-end">
          <button
            onClick={onSkip}
            className="bg-red-500 text-white px-10 py-3 rounded-md font-medium hover:bg-red-600 text-[14px]"
          >
            Skip & Continue
          </button>
        </div>

      </div>
    </div>
  );
}

export default AlsoBoughtModal;