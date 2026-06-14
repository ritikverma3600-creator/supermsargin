import { FaEye } from "react-icons/fa";
import { useState } from "react";

// Add this password content component
function PasswordContent() {
  const [show, setShow] = useState({ old: false, new: false, confirm: false });

  const PasswordInput = ({ label, field }) => (
    <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2">
      <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">{label}</span>
      <div className="flex items-center gap-2">
        <input
          type={show[field] ? "text" : "password"}
          defaultValue="*******"
          className="flex-1 outline-none text-[14px] text-gray-700"
        />
        <button onClick={() => setShow((s) => ({ ...s, [field]: !s[field] }))}>
          <FaEye className="text-gray-400 text-[14px]" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-[#1a1456] text-[24px]">Change/Update Password</h2>
      <div className="max-w-sm">
        <PasswordInput label="Old Password*" field="old" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
        <PasswordInput label="New Password*" field="new" />
        <PasswordInput label="Confirm Password*" field="confirm" />
      </div>
      <div>
        <button className="cursor-pointer bg-[#1a1456] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2a2466]">
          Confirm Password
        </button>
      </div>
    </div>
  );
}
export default PasswordContent;