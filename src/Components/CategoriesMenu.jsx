import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const categoryData = {
  Apparel: {
    subcategories: ["Men's Wear", "Women's Wear", "Kids Wear", "Ethnic Wear", "Accessories"],
    items: {
      "Men's Wear": [
        { label: "T-Shirts", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200" },
        { label: "Shirts", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200" },
        { label: "Trousers", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=200" },
        { label: "Jackets", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200" },
        { label: "Ethnic Kurta", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=200" },
        { label: "Innerwear", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=200" },
      ],
    },
  },
  "Home decor": {
    subcategories: ["Lights & Lightning", "Home & Garden", "Furniture", "Kitchen & Dining", "Gift & Cards"],
    items: {
      "Home & Garden": [
        { label: "Vases", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=200" },
        { label: "Rugs & carpets", image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=200" },
        { label: "Comforters", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=200" },
        { label: "Laundry baskets", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200" },
        { label: "Wall Arts", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=200" },
        { label: "Pillows", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=200" },
        { label: "Tableware", image: "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?w=200" },
        { label: "Hangers", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200" },
        { label: "Planters", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=200" },
      ],
    },
  },
  "Home Furnishings": {
    subcategories: ["Curtains", "Bedsheets", "Cushions", "Towels", "Table Covers"],
    items: {},
  },
  "Kitchen & dinings": {
    subcategories: ["Cookware", "Dinnerware", "Storage", "Appliances", "Cutlery"],
    items: {},
  },
  Storage: {
    subcategories: ["Boxes", "Racks", "Baskets", "Organisers"],
    items: {},
  },
  "Seasonal gifts": {
    subcategories: ["Diwali", "Christmas", "New Year", "Wedding"],
    items: {},
  },
  Furniture: {
    subcategories: ["Sofas", "Beds", "Tables", "Chairs", "Wardrobes"],
    items: {},
  },
};

function CategoriesMenu({ onClose }) {
  const mainCategories = Object.keys(categoryData);
  const [activeMain, setActiveMain] = useState("Home decor");
  const [activeSub, setActiveSub] = useState("Home & Garden");
  const location = useNavigate();
  const category = location.state?.category || "Apparel";
  const subcategories = categoryData[activeMain]?.subcategories || [];
  const items = categoryData[activeMain]?.items[activeSub] || [];


  const handleMainClick = (cat) => {
    setActiveMain(cat);
    setActiveSub(categoryData[cat]?.subcategories[0] || "");
  };

  return (
    <div className="fixed top-[150px] left-0 right-0 z-50 bg-white shadow-xl border-t border-gray-200 flex" style={{ minHeight: "400px" }}>

      {/* COL 1 — MAIN CATEGORIES */}
      <div onClick={() => navigate("/category")} className="w-[220px] border-r border-gray-200 py-4 flex-shrink-0">
        {mainCategories.map((cat) => (
          <div
            key={cat}
            onMouseEnter={() => handleMainClick(cat)}
            onClick={() => {
                handleMainClick(cat);
                location("/category");
            }}
            className={`px-6 py-3 cursor-pointer text-[14px] transition-colors ${
              activeMain === cat
                ? "font-bold text-gray-900 bg-gray-50"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {cat}
          </div>
        ))}
      </div>

      {/* COL 2 — SUBCATEGORIES */}
      <div  className="w-[220px] border-r border-gray-200 py-4 flex-shrink-0">
        {subcategories.map((sub) => (
          <div
            key={sub}
            onMouseEnter={() => setActiveSub(sub)}
            onClick={() => setActiveSub(sub)}
            className={`px-6 py-3 cursor-pointer text-[14px] transition-colors ${
              activeSub === sub
                ? "font-bold text-gray-900 underline"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {sub}
          </div>
        ))}
      </div>

      {/* COL 3 — ITEMS GRID */}
      <div className="flex-1 p-6">
        {items.length > 0 ? (
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
            {items.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className="w-20 h-20 rounded-full overflow-hidden border border-gray-200">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                  />
                </div>
                <span className="text-[12px] text-gray-600 text-center">{item.label}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-[14px]">
            No items available
          </div>
        )}
      </div>

      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-red-500 text-[18px] hover:text-red-700"
      >
        <FaTimes />
      </button>

      {/* VIEW ALL */}
      <button className="absolute bottom-4 right-4 bg-[#1a1456] text-white px-6 py-2 rounded-md text-[14px] font-medium hover:bg-[#2a2466]">
        View All
      </button>

    </div>
  );
}

export default CategoriesMenu;