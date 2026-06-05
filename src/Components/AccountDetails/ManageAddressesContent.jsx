import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";


function ManageAddressesContent() {
  const [addresses, setAddresses] = useState([
    { id: 1, name: "Abhay Kumar", phone: "+91-1234567899", address: "Plot No. 32, 1st Floor, Near Park Hospital, MG Road, Gopalganj, Bengaluru", state: "Karnataka", pincode: "560001", country: "India" },
    { id: 2, name: "Ashok Sinha", phone: "+91-1234567899", address: "Plot No. 32, 1st Floor, Near Park Hospital, MG Road, Gopalganj, Bengaluru", state: "Karnataka", pincode: "560001", country: "India" },
    { id: 3, name: "Pranay Sharma", phone: "+91-1234567899", address: "Plot No. 32, 1st Floor, Near Park Hospital, MG Road, Gopalganj, Bengaluru", state: "Karnataka", pincode: "560001", country: "India" },
  ]);

  const deleteAddress = (id) => setAddresses((prev) => prev.filter((a) => a.id !== id));

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold text-[#1a1456] text-[24px]">Addresses Details</h2>

      {/* ADD NEW */}
      <div className="border border-gray-200 rounded-lg p-5 flex items-center gap-3 cursor-pointer hover:bg-gray-50">
        <span className="text-[#1a1456] text-[24px] font-light">+</span>
        <span className="text-[#1a1456] font-medium text-[18px]">Add New Address</span>
      </div>

      {/* ADDRESS LIST */}
      {addresses.map((addr) => (
        <div key={addr.id} className="border border-gray-200 rounded-lg p-5 relative">

          {/* TAGS */}
          <div className="flex items-center gap-2 mb-3">
            <span className="border border-gray-300 text-gray-500 text-[12px] px-3 py-1 rounded-md">
              Shipping & Billing
            </span>
            <span className="bg-green-600 text-white text-[12px] px-3 py-1 rounded-md">
              Active
            </span>
          </div>

          {/* NAME + PHONE */}
          <p className="text-gray-800 text-[14px] mb-1">
            <span className="font-bold">{addr.name}</span>
            {"  "}
            <span className="text-gray-500">{addr.phone}</span>
          </p>

          {/* ADDRESS */}
          <p className="text-gray-600 text-[14px]">
            {addr.address}
            <br />
            {addr.state} (<span className="font-bold">{addr.pincode}</span>), {addr.country}
          </p>

          {/* ACTIONS */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="text-blue-500 hover:text-blue-700">
              <FaEdit />
            </button>
            <button onClick={() => deleteAddress(addr.id)} className="text-red-500 hover:text-red-700">
              <FaTrash />
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default ManageAddressesContent;