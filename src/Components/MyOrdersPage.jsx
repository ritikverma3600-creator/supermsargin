import { useState } from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const orders = [
  { id: "123456", date: "04 June 2025", status: "On Way", item: "Adlina Dress", moreItems: 2, amount: "35,000.00", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100" },
  { id: "123456", date: "04 June 2025", status: "On Way", item: "Adlina Dress", moreItems: 2, amount: "35,000.00", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100" },
  { id: "123456", date: "04 June 2025", status: "On Way", item: "Adlina Dress", moreItems: 2, amount: "35,000.00", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100" },
];

function MyOrdersPage() {
  const [statusFilters, setStatusFilters] = useState(["All Orders", "In Progress", "On the way", "Delivered"]);
  const [timeFilters, setTimeFilters] = useState(["Last 30 days"]);
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleStatus = (s) => setStatusFilters((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);
  const toggleTime = (t) => setTimeFilters((prev) => prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]);
  const toggleSelect = (id) => setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  return (
    <div className="w-full gap-2  bg-[#eef2f7] min-h-screen flex mx-10">

      {/* SIDEBAR FILTERS */}
      <div className="w-[220px] flex-shrink-0 bg-white border-r border-gray-200 p-5">
        <h2 className="font-bold text-[#1a1456] text-[20px] mb-4">Order History</h2>
        <h3 className="font-bold text-gray-700 text-[14px] mb-3">Filters</h3>

        {/* ORDER STATUS */}
        <div className="mb-4">
          <p className="text-gray-600 text-[14px] font-medium mb-2">Order Status</p>
          {["All Orders", "In Progress", "On the way", "Delivered"].map((s) => (
            <label key={s} className="flex items-center gap-2 py-1 cursor-pointer text-[14px] text-gray-600">
              <input type="checkbox" checked={statusFilters.includes(s)} onChange={() => toggleStatus(s)} className="accent-[#1a1456]" />
              {s}
            </label>
          ))}
        </div>

        {/* ORDER TIME */}
        <div>
          <p className="text-gray-600 text-[14px] font-medium mb-2">Order Time</p>
          {["Last 30 days", "2024", "2023"].map((t) => (
            <label key={t} className="flex items-center gap-2 py-1 cursor-pointer text-[14px] text-gray-600">
              <input type="checkbox" checked={timeFilters.includes(t)} onChange={() => toggleTime(t)} className="accent-[#1a1456]" />
              {t}
            </label>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 flex flex-col gap-4  mr-20 bg-white">

        {/* SEARCH + DOWNLOAD */}
        <div className="flex items-center gap-4">
          <div className="flex-1 flex items-center border border-gray-300 rounded-md bg-white px-4 h-11 gap-2">
            <input type="text" placeholder="Search your order here" className="flex-1 outline-none text-[14px] text-gray-600" />
            <FaSearch className="text-gray-400" />
          </div>
          <button className="bg-[#1a1456] text-white px-6 py-2.5 rounded-md text-[14px] font-medium hover:bg-[#2a2466] whitespace-nowrap">
            Download Selected
          </button>
        </div>

        {/* TABLE HEADER */}
        <div className="bg-white rounded-t-lg">
          <div className="grid grid-cols-[40px_1fr_1fr_1fr_1fr_1fr] px-4 py-3 border-b border-gray-200">
            <input type="checkbox" checked={selectAll} onChange={() => setSelectAll(!selectAll)} className="accent-[#1a1456] w-4 h-4" />
            <span className="text-[14px] font-bold text-gray-700">Order Number</span>
            <span className="text-[14px] font-bold text-gray-700">Order Placed</span>
            <span className="text-[14px] font-bold text-gray-700">Order Status</span>
            <span className="text-[14px] font-bold text-gray-700">Links & Documents</span>
            <span className="text-[14px] font-bold text-gray-700 text-right">Order Amount<br />(Inc GST)</span>
          </div>
        </div>

        {/* ORDER ROWS */}
        <div className="flex flex-col gap-3">
          {orders.map((order, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200">
              {/* TOP ROW */}
              <div className="grid grid-cols-[40px_1fr_1fr_1fr_1fr_1fr] px-4 py-4 items-center">
                <input
                  type="checkbox"
                  checked={selected.includes(index)}
                  onChange={() => toggleSelect(index)}
                  className="accent-[#1a1456] w-4 h-4"
                />
                <span className="font-bold text-gray-800 text-[14px]">{order.id}</span>
                <span className="font-bold text-gray-800 text-[14px]">{order.date}</span>
                <span className="font-bold text-gray-800 text-[14px]">{order.status}</span>
                <a href="#" className="text-[#1a1456] text-[14px] underline">View Tracking</a>
                <div className="flex items-center justify-end gap-2">
                  <span className="font-bold text-gray-800 text-[14px]">Total-INR {order.amount}</span>
                  <FaChevronDown className="text-gray-500 text-[12px]" />
                </div>
              </div>

              {/* BOTTOM ROW */}
              <div className="grid grid-cols-[40px_1fr_1fr_1fr_1fr_1fr] px-4 pb-4 items-center border-t border-gray-100">
                <div />
                <div className="flex items-center gap-3">
                  <img src={order.image} alt={order.item} className="w-10 h-10 object-cover rounded" />
                  <div>
                    <p className="text-[14px] text-gray-600">{order.item}</p>
                    <p className="text-[#1a1456] text-[12px] font-medium">+{order.moreItems} More Items</p>
                  </div>
                </div>
                <div>
                  <button className="bg-[#1a1456] text-white text-[12px] px-4 py-2 rounded-md hover:bg-[#2a2466]">
                    Shop from this order
                  </button>
                </div>
                <span className="font-bold text-gray-700 text-[14px]">Logistics Docs</span>
                <div className="flex flex-col gap-1">
                  <a href="#" className="text-[#1a1456] text-[12px] underline">Packing List</a>
                  <a href="#" className="text-[#1a1456] text-[12px] underline">e -Way Bill</a>
                </div>
                <div className="flex justify-end">
                  <button className="bg-[#1a1456] text-white text-[12px] px-4 py-2 rounded-md hover:bg-[#2a2466]">
                    Download Invoice
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default MyOrdersPage;