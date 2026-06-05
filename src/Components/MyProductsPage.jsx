import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const initialProducts = [
  { id: 1, uniqueId: "123456", brand: "Altro Genio", compliance: "NA", color: "Brown", price: 99, quantity: 100, image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=100" },
  { id: 2, uniqueId: "123456", brand: "Altro Genio", compliance: "NA", color: "Brown", price: 99, quantity: 100, image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=100" },
];

function MyProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 32;

  const toggleSelect = (id) => setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelected(selectAll ? [] : products.map((p) => p.id));
  };

  const updateQty = (id, delta) => {
    setProducts((prev) => prev.map((p) => p.id === id ? { ...p, quantity: Math.max(1, p.quantity + delta) } : p));
  };

  return (
    <div className="w-full bg-[#eef2f7] min-h-screen pb-3">
      <div className="bg-white rounded-b-xl overflow-hidden  ml-10  mr-10">

        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="font-bold text-[#1a1456] text-[20px]">My Products</h2>
          <button className="bg-[#1a1456] text-white px-6 py-2.5 rounded-md text-[14px] font-medium hover:bg-[#2a2466]">
            Move to cart
          </button>
        </div>

        {/* TABLE */}
        <table className="w-full text-[14px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 w-10">
                <input type="checkbox" checked={selectAll} onChange={toggleSelectAll} className="accent-[#1a1456] w-4 h-4" />
              </th>
              <th className="text-left px-4 py-3 text-gray-700 font-bold">Products</th>
              <th className="text-left px-4 py-3 text-gray-700 font-bold">
                <div className="flex items-center gap-1">Unique ID <span className="text-gray-400 text-[12px]">⇅</span></div>
              </th>
              <th className="text-left px-4 py-3 text-gray-700 font-bold">Brand</th>
              <th className="text-left px-4 py-3 text-gray-700 font-bold">Compliance</th>
              <th className="text-left px-4 py-3 text-gray-700 font-bold">Color</th>
              <th className="text-left px-4 py-3 text-gray-700 font-bold">Custom Style No</th>
              <th className="text-left px-4 py-3 text-gray-700 font-bold">Custom Order No</th>
              <th className="text-left px-4 py-3 text-gray-700 font-bold">
                <div className="flex items-center gap-1">Price Per Unit <span className="text-gray-400 text-[12px]">⇅</span></div>
              </th>
              <th className="text-left px-4 py-3 text-gray-700 font-bold">
                <div className="flex items-center gap-1">Order Quantity <span className="text-gray-400 text-[12px]">⇅</span></div>
              </th>
              <th className="text-left px-4 py-3 text-gray-700 font-bold">
                <div className="flex items-center gap-1">Total Value <span className="text-gray-400 text-[12px]">⇅</span></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-4">
                  <input type="checkbox" checked={selected.includes(product.id)} onChange={() => toggleSelect(product.id)} className="accent-[#1a1456] w-4 h-4" />
                </td>
                <td className="px-4 py-4">
                  <img src={product.image} alt="product" className="w-12 h-14 object-cover rounded" />
                </td>
                <td className="px-4 py-4 text-gray-700">{product.uniqueId}</td>
                <td className="px-4 py-4 text-gray-700">{product.brand}</td>
                <td className="px-4 py-4 text-gray-700">{product.compliance}</td>
                <td className="px-4 py-4 text-gray-700">{product.color}</td>
                <td className="px-4 py-4">
                  <input type="text" className="border border-gray-300 rounded px-2 py-1 w-24 text-[14px] outline-none" />
                </td>
                <td className="px-4 py-4">
                  <input type="text" className="border border-gray-300 rounded px-2 py-1 w-24 text-[14px] outline-none" />
                </td>
                <td className="px-4 py-4 text-gray-700">₹{product.price}.00</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQty(product.id, -1)} className="bg-[#1a1456] text-white w-7 h-7 rounded flex items-center justify-center text-[18px] hover:bg-[#2a2466]">−</button>
                    <span className="w-10 text-center text-[14px] font-medium">{product.quantity}</span>
                    <button onClick={() => updateQty(product.id, 1)} className="bg-[#1a1456] text-white w-7 h-7 rounded flex items-center justify-center text-[18px] hover:bg-[#2a2466]">+</button>
                    <a href="#" className="text-[#1a1456] text-[12px] underline ml-1">View</a>
                  </div>
                </td>
                <td className="px-4 py-4 font-medium text-gray-700">₹{(product.price * product.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-100">
          <FaChevronLeft className="text-[12px]" />
        </button>
        {[1, 2, 3].map((p) => (
          <button key={p} onClick={() => setCurrentPage(p)} className={`w-10 h-10 rounded-full text-[14px] font-medium ${currentPage === p ? "bg-[#1a1456] text-white" : "border border-gray-300 bg-white text-gray-600 hover:bg-gray-100"}`}>
            {p}
          </button>
        ))}
        <span className="text-gray-400">...</span>
        <button onClick={() => setCurrentPage(totalPages)} className={`w-10 h-10 rounded-full text-[14px] font-medium ${currentPage === totalPages ? "bg-[#1a1456] text-white" : "border border-gray-300 bg-white text-gray-600 hover:bg-gray-100"}`}>
          {totalPages}
        </button>
        <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-100">
          <FaChevronRight className="text-[12px]" />
        </button>
      </div>

    </div>
  );
}

export default MyProductsPage;