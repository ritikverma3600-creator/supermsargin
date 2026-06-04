import { useState } from "react";
import { FaTag, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const categories = ["All Products", "Apparel", "Home decor & furnishings", "Kitchen & dinings", "Storage", "Seasonal gifts", "Furniture"];

const products = [
  { id: 1, name: "Kids Colorful Kurta", desc: "Colorful plastic toy cars", price: "INR 99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400" },
  { id: 2, name: "Basic Cotton T-Shirt", desc: "Comfortable cotton tee, Colors", price: "INR 99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400" },
  { id: 3, name: "Ceramic Candle Holders", desc: "Elegant ceramic holders, set of 3", price: "INR 99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400" },
  { id: 4, name: "Fashion Earrings Pack", desc: "Trendy earrings, pack of 12 pairs", price: "INR 99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400" },
  { id: 5, name: "Cotton Kurta Set", desc: "Traditional cotton kurta set", price: "INR 99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400" },
  { id: 6, name: "Wooden Photo Frame", desc: "Handcrafted wooden frame", price: "INR 99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400" },
  { id: 7, name: "Steel Water Bottle", desc: "Stainless steel, 1L capacity", price: "INR 99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400" },
  { id: 8, name: "Jute Tote Bag", desc: "Eco-friendly jute bag, pack of 10", price: "INR 99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1597633125097-5a9961e1f03d?w=400" },
];

function LiveDeals() {
  const [activeCategory, setActiveCategory] = useState("All Products");

  return (
    <section className="w-full  px-12 lg:px-12 py-12">

      {/* TOP BADGE */}
      <div className="flex justify-center mb-4">
        <span className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-medium">
          <FaTag />
          Live Deals
        </span>
      </div>

      {/* TITLE */}
      <h2 className="text-center font-bold text-[#1a1456] text-3xl lg:text-4xl mb-4">
        Products Under INR 99.00
      </h2>

      {/* SUBTITLE */}
      <p className="text-center text-gray-500 text-base  mx-auto mb-11">
        Discover amazing wholesale prices on quality apparel, toys, home decor,<br/>
        and accessories. Perfect for retailers looking to maximize profit margins.
      </p>

      {/* CATEGORY TABS */}
      <div className="flex justify-center items-center gap-2 bg-white rounded-lg px-4 py-3 mt-5 overflow-x-auto mb-8  w-fit mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`whitespace-nowrap px-5 py-3 rounded-md text-sm font-medium transition-colors ${
              activeCategory === cat
                ? "bg-[#1a1456] text-white"
                : "text-gray-600 hover:text-[#1a1456]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-full h-52 object-cover" />
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                Wholesale
              </span>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-bold text-gray-800 text-base">{product.name}</h3>
              <p className="text-gray-500 text-sm">{product.desc}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="font-bold text-[#1a1456] text-base">{product.price}</span>
                <span className="text-gray-400 text-xs">{product.min}</span>
              </div>
              <button className="mt-2 bg-[#1a1456] text-white py-2 rounded-md text-sm font-medium hover:bg-[#2a2466] cursor-pointer">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default LiveDeals;