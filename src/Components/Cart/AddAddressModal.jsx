import { FaTimes } from "react-icons/fa";

function AddAddressModal({ onClose, onSubmit }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={onClose}>
      <div className="bg-white rounded-xl w-[90%] max-w-3xl p-8 relative" onClick={(e) => e.stopPropagation()}>

        {/* CLOSE */}
        <button onClick={onClose} className="absolute top-4 right-4 text-red-500 hover:text-red-700">
          <FaTimes />
        </button>

        <h2 className="font-bold text-gray-800 text-[20px] mb-6">Add New Address</h2>

        {/* FORM GRID */}
        <div className="grid grid-cols-3 gap-4">

          {/* ROW 1 */}
          {[
            { label: "Address Title", required: false },
            { label: "Address", required: true },
            { label: "Country", required: true },
          ].map((field) => (
            <div key={field.label} className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2">
              <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">
                {field.label}{field.required && <span className="text-red-500">*</span>}
              </span>
              <input type="text" className="w-full outline-none text-[14px] text-gray-700" />
            </div>
          ))}

          {/* ROW 2 */}
          {[
            { label: "Zip Code", required: true },
            { label: "City", required: true },
            { label: "Contact Person", required: false },
          ].map((field) => (
            <div key={field.label} className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2">
              <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">
                {field.label}{field.required && <span className="text-red-500">*</span>}
              </span>
              <input type="text" className="w-full outline-none text-[14px] text-gray-700" />
            </div>
          ))}

          {/* ROW 3 */}
          <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2">
            <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">Mobile Number</span>
            <input type="tel" className="w-full outline-none text-[14px] text-gray-700" />
          </div>

          <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2">
            <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">Address Type</span>
            <select className="w-full outline-none text-[14px] text-gray-500 bg-transparent">
              <option value=""></option>
              <option>Home</option>
              <option>Office</option>
              <option>Warehouse</option>
              <option>Other</option>
            </select>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="border border-gray-300 text-gray-700 px-8 py-2.5 rounded-md text-[14px] font-medium hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="bg-[#1a1456] text-white px-8 py-2.5 rounded-md text-[14px] font-medium hover:bg-[#2a2466]"
          >
            Submit
          </button>
        </div>

      </div>
    </div>
  );
}

export default AddAddressModal;