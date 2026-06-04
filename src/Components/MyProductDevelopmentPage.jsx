import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaFilePdf, FaFileExcel, FaFileImage } from "react-icons/fa";

const techPacks = [
  {
    sno: 1, category: "LIGHTING", quantity: "500 To 1000", postedOn: "2025-06-04",
    techPacks: ["pdf", "pdf"], labels: ["img"], measurement: ["img", "pdf"],
    pantone: ["pdf", "pdf"], comments: "test check",
  },
  {
    sno: 2, category: "Apparel", quantity: "22", postedOn: "2025-05-30",
    techPacks: ["img"], labels: ["img"], measurement: [],
    pantone: [], comments: "",
  },
  {
    sno: 3, category: "MIRRORS", quantity: "Below 200", postedOn: "2025-05-20",
    techPacks: ["img"], labels: ["xls"], measurement: ["img"],
    pantone: ["img"], comments: "testing",
  },
];

function FileIcon({ type }) {
  const icons = {
    pdf: <div className="flex flex-col items-center gap-1 cursor-pointer"><div className="w-10 h-12 bg-white border border-gray-200 rounded flex items-center justify-center"><FaFilePdf className="text-red-500 text-xl" /></div><span className="text-[#1a1456] text-xs">Download</span></div>,
    xls: <div className="flex flex-col items-center gap-1 cursor-pointer"><div className="w-10 h-12 bg-white border border-gray-200 rounded flex items-center justify-center"><FaFileExcel className="text-green-600 text-xl" /></div><span className="text-[#1a1456] text-xs">Download</span></div>,
    img: <div className="flex flex-col items-center gap-1 cursor-pointer"><div className="w-10 h-12 bg-white border border-gray-200 rounded flex items-center justify-center overflow-hidden"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80" alt="" className="w-full h-full object-cover" /></div><span className="text-[#1a1456] text-xs">Download</span></div>,
  };
  return icons[type] || null;
}

function MyProductDevelopmentPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6;

  return (
    <div className="w-full bg-[#eef2f7] min-h-screen pb-6">
      <div className="bg-white rounded-b-xl p-6 flex flex-col gap-6 mx-10">

        {/* UPLOAD */}
        <div className="border border-gray-200 rounded-lg p-5 flex items-center gap-3 cursor-pointer hover:bg-gray-50">
          <span className="text-[#1a1456] text-2xl font-light">+</span>
          <span className="text-[#1a1456] font-medium text-lg">Upload Product Detail / Pantone/ Labels & Trims</span>
        </div>

        {/* VIEW TECH PACK */}
        <h2 className="font-bold text-gray-800 text-xl">View Tech Pack</h2>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                {["Sno.", "Category", "Quantity", "Posted On", "Tech Packs", "Labels/Trims", "Measurement", "Pantone", "Comments", "More Details", "Remove"].map((col) => (
                  <th key={col} className="text-left px-3 py-3 text-gray-600 font-medium whitespace-nowrap">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {techPacks.map((row) => (
                <tr key={row.sno} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-3 py-4 text-gray-700">{row.sno}</td>
                  <td className="px-3 py-4 text-gray-700 font-medium">{row.category}</td>
                  <td className="px-3 py-4 text-gray-600">{row.quantity}</td>
                  <td className="px-3 py-4 text-gray-600">{row.postedOn}</td>
                  <td className="px-3 py-4">
                    <div className="flex gap-2">
                      {row.techPacks.map((t, i) => <FileIcon key={i} type={t} />)}
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="flex gap-2">
                      {row.labels.map((t, i) => <FileIcon key={i} type={t} />)}
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="flex gap-2">
                      {row.measurement.map((t, i) => <FileIcon key={i} type={t} />)}
                    </div>
                  </td>
                  <td className="px-3 py-4">
                    <div className="flex gap-2">
                      {row.pantone.map((t, i) => <FileIcon key={i} type={t} />)}
                    </div>
                  </td>
                  <td className="px-3 py-4 text-gray-600">{row.comments}</td>
                  <td className="px-3 py-4">
                    <a href="#" className="text-[#1a1456] underline text-sm">View</a>
                  </td>
                  <td className="px-3 py-4">
                    <a href="#" className="text-[#1a1456] underline text-sm">Remove</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-center gap-2 mt-6">
        <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))} className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-100">
          <FaChevronLeft className="text-xs" />
        </button>
        {[1, 2].map((p) => (
          <button key={p} onClick={() => setCurrentPage(p)} className={`w-10 h-10 rounded-full text-sm font-medium ${currentPage === p ? "bg-[#1a1456] text-white" : "border border-gray-300 bg-white text-gray-600 hover:bg-gray-100"}`}>
            {p}
          </button>
        ))}
        <span className="text-gray-400">...</span>
        <button onClick={() => setCurrentPage(totalPages)} className={`w-10 h-10 rounded-full text-sm font-medium ${currentPage === totalPages ? "bg-[#1a1456] text-white" : "border border-gray-300 bg-white text-gray-600 hover:bg-gray-100"}`}>
          {totalPages}
        </button>
        <button onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))} className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:bg-gray-100">
          <FaChevronRight className="text-xs" />
        </button>
      </div>

    </div>
  );
}

export default MyProductDevelopmentPage;