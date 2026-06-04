import { useState } from "react";
import { FaShoppingCart, FaCommentDots, FaChevronDown, FaChevronUp, FaChevronLeft, FaChevronRight, FaBars } from "react-icons/fa";
import DashboardNav from "./DashboardNav";

const mainCategories = ["Apparel", "Home Decor", "Home Furnishing", "Kitchen & Dinings", "Storage", "Seasonal Gifts", "Furniture"];

const shopByCategory = ["LADIES", "Men", "BABIES", "BOYS", "GIRLS"];
const brands = ["FABALLEY", "INDYA", "LADIES FORMAL TROUSER", "S.S.F", "ADITI WASAN", "UNMODA"];
const fabrics = ["COTTON", "100% COTTON", "98% COTTON / 2% SPANDEX", "98% 100% COTTON / 2% SPANDEX", "95% COTTON 5% ELASTANE", "POLY BLEND", "65% COTTON 35% POLY", "60% COTTON 40% POLY"];
const prices = ["BZD2 - BZD20", "BZD20 - BZD30", "BZD30 - BZD50", "BZD50 - BZD100", "BZD100 Above"];


const products = [
  { id: 1, name: "Basic Cotton T-Shirt", desc: "Comfortable cotton tee, Colors", price: "₹99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400" },
  { id: 2, name: "Basic Cotton Dotted Shirt", desc: "Comfortable cotton tee, Colors", price: "₹109.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400" },
  { id: 3, name: "Blue Rugged Jeans", desc: "Comfortable cotton tee, Colors", price: "₹99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400" },
  { id: 4, name: "Cotton White Shirt Lined", desc: "Comfortable cotton Shirt, Colors", price: "₹99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400" },
  { id: 5, name: "Girls Cotton Lycra Top", desc: "Comfortable cotton tee, Colors", price: "₹109.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400" },
  { id: 6, name: "Gray Formal Pant", desc: "Comfortable cotton tee, Colors", price: "₹99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400" },
  { id: 7, name: "Basic Cotton T-Shirt", desc: "Comfortable cotton tee, Colors", price: "₹99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400" },
  { id: 8, name: "Basic Cotton Dotted Shirt", desc: "Comfortable cotton tee, Colors", price: "₹109.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400" },
  { id: 9, name: "Blue Rugged Jeans", desc: "Comfortable cotton tee, Colors", price: "₹99.00", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400" },

];

const promoImages = [
  { label: "TOP SELLING PRODUCTS", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600" },
  { label: "ON FACTORY FLOOR", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600" },
  { label: "REPLENISH YOUR STOCK", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600" },
];

function FilterSection({ title, items, type = "checkbox" }) {
  const [open, setOpen] = useState(true);
  const [checked, setChecked] = useState([]);

  const toggle = (item) => {
    setChecked((prev) => prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]);
  };

  return (
    <div className="border-b border-gray-200 py-3 pt-[136px]">
      <div className="flex items-center justify-between cursor-pointer mb-2" onClick={() => setOpen(!open)}>
        <span className="font-bold text-gray-700 text-sm">{title}</span>
        {open ? <FaChevronUp className="text-xs text-gray-400" /> : <FaChevronDown className="text-xs text-gray-400" />}
      </div>
      {open && (
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <label key={item} className="flex items-center gap-2 text-xs text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={checked.includes(item)}
                onChange={() => toggle(item)}
                className="accent-[#1a1456]"
              />
              {item}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

function CategoryItems() {
  const [activeCategory, setActiveCategory] = useState("Apparel");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 32;

  return (
    <div className="pt-[92px] w-full bg-[#eef2f7] min-h-screen">

      {/* CATEGORY TABS */}
      <div className="fixed z-40 w-full bg-[#eef2f7]  px-6 lg:px-10 overflow-x-auto">
        <div className="flex justify-between flex-1 gap-2 py-2">
          {mainCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-1 text-center whitespace-nowrap cursor-pointer gap-2 px-5 py-2 rounded-md text-sm font-medium border transition-colors ${
                activeCategory === cat
                  ? "bg-[#0a5d93] text-white border-[#1a1456]"
                  : "text-gray-600 border-gray-200 bg-white hover:border-[#1a1456] hover:text-[#1a1456]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
          <DashboardNav/>
      {/* HERO BANNER */}
      <div className="relative mx-6 lg:mx-10 rounded-xl overflow-hidden h-48 bg-[#1a1456]">
        <img
          src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200"
          alt="Banner"
          className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-60"
        />
        <div className="relative z-10 p-8 flex flex-col gap-3">
          <h2 className="text-white font-bold text-2xl lg:text-3xl">Apparel & Fashion</h2>
          <p className="text-gray-300 text-sm">Wholesale clothing and fashion accessories for retailers across India</p>
          <div className="flex items-center gap-6 text-gray-300 text-xs">
            <span>🛍 50,000+ Products</span>
            <span>👥 2,500+ Suppliers</span>
            <span>🚚 Pan India Delivery</span>
          </div>
        </div>
      </div>



      {/* MAIN CONTENT */}
      <div className="flex bg-white gap-4 mx-6 lg:mx-10 pb-10">

        {/* SIDEBAR */}
        <div className="w-[280px] flex-shrink-0 bg-white rounded-xl p-4 self-start sticky top-24">
          <div className="border-l-4 border-[#1a1456] pl-3 mb-3">
            <span className="font-bold text-gray-700 text-sm">SHOP BY CATEGORY</span>
          </div>
          {shopByCategory.map((item) => (
            <div key={item} className="flex items-center gap-2 py-2 border-b border-gray-100 text-sm text-gray-600 cursor-pointer hover:text-[#1a1456]">
              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
              {item}
            </div>
          ))}
          <FilterSection title="Brand" items={brands} />
          <FilterSection title="Fabric" items={fabrics} />
          <FilterSection title="Shop by Price" items={prices} />
        </div>

        {/* PRODUCTS */}
        <div className="flex-1 flex flex-col gap-6">
      {/* BREADCRUMB + SORT */}
      <div className="flex items-center justify-between px-6 lg:px-10 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="text-[#1a1456] cursor-pointer">All</span>
          <FaChevronRight className="text-xs" />
          <span className="font-medium text-gray-700 border-b border-gray-400">Apparel</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">Sort By</span>
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none text-gray-700">
            <option>Best Match</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>
          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
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
                    <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 rounded-md text-sm hover:bg-gray-50">
                      <FaCommentDots className="text-xs" /> Add to Chat
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100"
            >
              <FaChevronLeft className="text-xs" />
            </button>
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`w-10 h-10 rounded-full text-sm font-medium ${
                  currentPage === p ? "bg-[#1a1456] text-white" : "border border-gray-300 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {p}
              </button>
            ))}
            <span className="text-gray-400">...</span>
            <button
              onClick={() => setCurrentPage(totalPages)}
              className={`w-10 h-10 rounded-full text-sm font-medium ${
                currentPage === totalPages ? "bg-[#1a1456] text-white" : "border border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {totalPages}
            </button>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>

          {/* PROMO IMAGES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {promoImages.map((promo) => (
              <div key={promo.label} className="relative rounded-xl overflow-hidden cursor-pointer group h-48">
                <img src={promo.image} alt={promo.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/40" />
                <span className="absolute bottom-4 left-4 text-white font-bold text-lg leading-tight">{promo.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default CategoryItems;