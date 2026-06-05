import { useState } from "react";
import { FaUser, FaLock, FaBriefcase, FaMapMarkerAlt, FaUniversity, FaTh, FaFileAlt, FaUsers, FaTag, FaUpload } from "react-icons/fa";

const menuItems = [
  { icon: FaUser, label: "Profile", desc: "Name, mobile, email account" },
  { icon: FaLock, label: "Password", desc: "Update or reset your password" },
  { icon: FaBriefcase, label: "Business Details", desc: "Name, documents, tax certificate.." },
  { icon: FaMapMarkerAlt, label: "Manage Addresses", desc: "Add and update addresses" },
  { icon: FaUniversity, label: "Manage Bank Accounts", desc: "Add, update bank accounts" },
  { icon: FaTh, label: "Categories Preference", desc: "Manage product categories preferences" },
  { icon: FaFileAlt, label: "Upload KYC Documents", desc: "Verify business by uploading KYC documents" },
  { icon: FaUsers, label: "Manage Team", desc: "Add and update your team member" },
  { icon: FaTag, label: "Brand", desc: "Add & update your brands" },
];

function FloatingInput({ label, required, value, prefix }) {
  return (
    <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2">
      <span className="absolute -top-2.5 left-3 bg-white text-xs text-gray-500 px-1">
        {label}{required && <span className="text-red-500">*</span>}
      </span>
      <div className="flex items-center gap-1">
        {prefix && <span className="text-gray-500 text-[12px]">{prefix}</span>}
        <input
          type="text"
          defaultValue={value}
          className="w-full outline-none text-[12px] text-gray-700 bg-transparent"
        />
      </div>
    </div>
  );
}

function FloatingSelect({ label, value }) {
  return (
    <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2">
      <span className="absolute -top-2.5 left-3 bg-white text-xs text-gray-500 px-1">{label}</span>
      <select className="w-full outline-none text-[12px] text-gray-700 bg-transparent">
        <option>{value}</option>
      </select>
    </div>
  );
}

function ProfileContent() {
  return (
    <div className="flex flex-col gap-6">
      {/* PROFILE HEADER */}
      <div className="flex items-center gap-6 pb-6 border-b border-gray-200">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover"
        />
        <div>
          <h2 className="font-bold text-[#1a1456] text-[24px]">Mahesh Kumar</h2>
          <p className="text-gray-400 text-[12px]">(ID: BLK7845)</p>
        </div>
      </div>
      <FloatingInput label="Company/Business Name" required value="Your business name" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FloatingInput label="Person Name" value="Name" />
        <FloatingInput label="Contact" value="+91-" />
        <FloatingInput label="Email" value="Test@testemail.com" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FloatingInput label="Country" value="India" />
        <FloatingSelect label="State" value="Haryana" />
        <FloatingSelect label="City" value="Haryana" />
      </div>
      <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-3">
        <span className="absolute -top-2.5 left-3 bg-white text-xs text-gray-500 px-1">Profile Image</span>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#eef2f7] flex items-center justify-center flex-shrink-0">
            <FaUpload className="text-[#1a1456] text-[12px]" />
          </div>
          <span className="text-gray-400 text-[12px]">Upload or drag and dro JPEG, PNG, JPG</span>
        </div>
      </div>
      <div>
        <button className="bg-[#1a1456] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2a2466]">
          Update
        </button>
      </div>
    </div>
  );
}
export default ProfileContent;