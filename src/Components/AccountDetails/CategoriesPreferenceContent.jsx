import { useState } from "react";

function CategoriesPreferenceContent() {
  const allCategories = ["Apparel", "Home decor & furnishings", "Kitchen & dinings", "Storage", "Seasonal gifts", "Furniture"];
  const [selected, setSelected] = useState(allCategories);

  const toggleAll = () => {
    setSelected(selected.length === allCategories.length ? [] : allCategories);
  };

  const toggleOne = (cat) => {
    setSelected((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-[#1a1456] text-[24px]">Select Preferred Categories</h2>

      {/* SELECT ALL */}
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={selected.length === allCategories.length}
            onChange={toggleAll}
            className="w-5 h-5 accent-[#1a1456]"
          />
          <span className="text-gray-600 text-[14px]">Select All Categories</span>
        </label>
        <hr className="border-gray-200 w-48" />
      </div>

      {/* CATEGORIES GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {allCategories.map((cat) => (
          <label key={cat} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selected.includes(cat)}
              onChange={() => toggleOne(cat)}
              className="w-5 h-5 accent-[#1a1456]"
            />
            <span className="text-gray-600 text-[14px]">{cat}</span>
          </label>
        ))}
      </div>

      {/* UPDATE BUTTON */}
      <div>
        <button className="cursor-pointer bg-[#1a1456] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2a2466]">
          Update Preferences
        </button>
      </div>
    </div>
  );
}

export default CategoriesPreferenceContent;