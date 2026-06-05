import { FaCalendar } from "react-icons/fa";
function FloatingInput({ label, required, value, prefix }) {
  return (
    <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2">
      <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">
        {label}{required && <span className="text-red-500">*</span>}
      </span>
      <div className="flex items-center gap-1">
        {prefix && <span className="text-gray-500 text-[14px]">{prefix}</span>}
        <input
          type="text"
          defaultValue={value}
          className="w-full outline-none text-[14px] text-gray-700 bg-transparent"
        />
      </div>
    </div>
  );
}

function FloatingSelect({ label, value }) {
  return (
    <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2">
      <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">{label}</span>
      <select className="w-full outline-none text-[14px] text-gray-700 bg-transparent">
        <option>{value}</option>
      </select>
    </div>
  );
}
function BusinessDetailsContent() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-[#1a1456] text-[24px]">Business Details</h2>

      {/* ROW 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FloatingInput label="Website" value="www.testsite.com" />
        <FloatingSelect label="Type" value="Company" />
        <FloatingSelect label="Business Type" value="Company" />
      </div>

      {/* ROW 2 */}
      <div className="max-w-sm flex flex-col gap-1">
        <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2">
          <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">Year of Establishment</span>
          <div className="flex items-center justify-between">
            <input
              type="text"
              defaultValue="05/15/2023"
              placeholder="DD/MM/YYYY"
              className="flex-1 outline-none text-[14px] text-gray-700"
            />
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
              <FaCalendar className="text-white text-[12px]" />
            </div>
          </div>
        </div>
        <span className="text-[12px] text-gray-400 px-1">DD/MM/YYYY</span>
      </div>

      {/* UPDATE */}
      <div>
        <button className="bg-[#1a1456] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2a2466]">
          Update
        </button>
      </div>

    </div>
  );
}

export default BusinessDetailsContent;