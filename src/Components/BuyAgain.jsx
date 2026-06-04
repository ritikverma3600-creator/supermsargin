// BuyAgain.jsx
import { FaShoppingCart, FaCommentDots } from "react-icons/fa";

const buyAgainProducts = [
  { id: 1, name: "Cotton white Shirt Lined", desc: "Comfortable cotton Shirt, Colors", price: "INR 99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400" },
  { id: 2, name: "Gray Formal Shirt", desc: "Comfortable cotton tee, Colors", price: "INR 109.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400" },
  { id: 3, name: "Gray Formal Pant", desc: "Comfortable cotton tee, Colors", price: "INR 99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400" },
  { id: 4, name: "Gray Formal Pant", desc: "Comfortable cotton tee, Colors", price: "INR 99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400" },
];

function BuyAgain() {
  return (
    <section className="w-full bg-white px-6 lg:px-10 py-10">
      <h2 className="text-center font-bold text-[#1a1456] text-3xl mb-8">Buy Again</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {buyAgainProducts.map((product) => (
          <div key={product.id} className="bg-gray-50 rounded-xl overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-bold text-gray-800 text-base">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.desc}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="font-bold text-[#1a1456] text-base">{product.price}</span>
                <span className="text-gray-400 text-xs">{product.min}</span>
              </div>
              <div className="flex gap-2 mt-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-[#1a1456] text-white py-2 rounded-md text-sm hover:bg-[#2a2466]">
                  <FaShoppingCart className="text-xs" /> Add to cart
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 rounded-md text-sm hover:bg-gray-100">
                  <FaCommentDots className="text-xs" /> Add to Chat
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BuyAgain;