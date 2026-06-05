import { useState } from "react";
import { FaUser, FaLock, FaBriefcase, FaMapMarkerAlt, FaUniversity, FaTh, FaFileAlt, FaUsers, FaTag, FaUpload, FaGlobe } from "react-icons/fa";
import ProfileContent from "./AccountDetails/ProfileContent";
import PasswordContent from "./AccountDetails/PasswordContent";
import BusinessDetailsContent from "./AccountDetails/BusinessDetailsContent";
import ManageAddressesContent from "./AccountDetails/ManageAddressesContent";
import ManageBankAccountsContent from "./AccountDetails/ManageBankAccountsContent";
import CategoriesPreferenceContent from "./AccountDetails/CategoriesPreferenceContent";
import UploadKYCContent from "./AccountDetails/UploadKYCContent";
import ManageTeamContent from "./AccountDetails/ManageTeamContent";
import BrandContent from "./AccountDetails/BrandContent";
import LanguageContent from "./AccountDetails/LanguageContent";
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
  { icon: FaGlobe, label: "Language", desc: "Select your preferred language" },
];
function AccountPage() {
  const [activeMenu, setActiveMenu] = useState("Profile");

  return (
    <>
    <div className="mx-10 gap-2  w-full bg-[#eef2f7] min-h-screen flex">

      {/* SIDEBAR */}
      <div className="w-[300px] flex-shrink-0 bg-white border-r border-gray-200">
        {menuItems.map((item) => (
          <div
            key={item.label}
            onClick={() => setActiveMenu(item.label)}
            className={`flex items-center gap-4 px-6 py-4 cursor-pointer border-b border-gray-100 transition-colors ${
              activeMenu === item.label ? "bg-gray-50" : "hover:bg-gray-50"
            }`}
          >
            <item.icon className="text-gray-500 text-[18px] flex-shrink-0" />
            <div>
              <p className="font-medium text-gray-800 text-[14px]">{item.label}</p>
              <p className="text-gray-400 text-[12px]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="bg-white flex flex-col w-full mr-20 px-10 py-8">

        {activeMenu === "Profile" && <ProfileContent />}
        {activeMenu === "Password" && <PasswordContent />}
        {activeMenu === "Business Details" && <BusinessDetailsContent />}
        {activeMenu === "Manage Addresses" && <ManageAddressesContent />}
        {activeMenu === "Manage Bank Accounts" && <ManageBankAccountsContent />}
        {activeMenu === "Categories Preference" && <CategoriesPreferenceContent />}
        {activeMenu === "Upload KYC Documents" && <UploadKYCContent />}
        {activeMenu === "Manage Team" && <ManageTeamContent />}
        {activeMenu === "Brand" && <BrandContent />}
        {activeMenu === "Language" && <LanguageContent />}
    </div>
    </div>
    </>
  );
}

export default AccountPage;