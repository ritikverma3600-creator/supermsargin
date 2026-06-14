import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
function BrandContent() {
  const [brands, setBrands] = useState([
    { id: "A-123", name: "Allen John", trademark: "Verified", category: "Apparel" },
  ]);

  const deleteBrand = (id) => setBrands((prev) => prev.filter((b) => b.id !== id));

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-[#1a1456] text-[24px]">Add /Update Brands</h2>

      {/* ADD NEW */}
      <div className="border border-gray-200 rounded-lg p-5 flex items-center gap-3 cursor-pointer hover:bg-gray-50">
        <span className="text-[#1a1456] text-[24px] font-light">+</span>
        <span className="text-[#1a1456] font-medium text-[18px]">Add New Brand</span>
      </div>

      {/* CURRENT BRANDS */}
      <div>
        <h3 className="font-bold text-[#1a1456] text-[18px] mb-4">Currents Brands</h3>
        <table className="w-full text-[14px]">
          <thead>
            <tr className="bg-gray-50">
              {["Brand ID", "Brand Name", "Trademark", "Category", "Action"].map((col) => (
                <th key={col} className="text-left px-4 py-3 text-gray-600 font-medium">
                  <div className="flex items-center gap-1">
                    {col}
                    {col !== "Action" && <span className="text-gray-400 text-[12px]">⇅</span>}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {brands.map((brand) => (
              <tr key={brand.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-4 text-gray-700">{brand.id}</td>
                <td className="px-4 py-4 text-gray-600">{brand.name}</td>
                <td className="px-4 py-4 text-gray-600">{brand.trademark}</td>
                <td className="px-4 py-4 text-gray-600">{brand.category}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <button className="cursor-pointer text-blue-500 hover:text-blue-700"><FaEdit /></button>
                    <button onClick={() => deleteBrand(brand.id)} className="cursor-pointer text-red-500 hover:text-red-700"><FaTrash /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
export default BrandContent;