import { FaSearch } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import logoImage from "./../../assets/images.png"
import { FaBars } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { useState } from "react";
import SignInModal from "./SignInModal";
import { useNavigate } from "react-router-dom";

function Navbar() {
  // inside your Nav component:


  const [showSignIn, setShowSignIn] = useState(false);
  const navigate = useNavigate();

  return (
    <>
<nav className="fixed z-50 w-full bg-white px-12">
  <div className="max-w-7xl mx-auto h-20 flex items-center gap-4">

    {/* HAMBURGER */}
    <div className="md:hidden text-xl cursor-pointer">
      <FaBars />
    </div>

    {/* LOGO */}
    <div className="flex items-center" onClick={() => navigate("/")}>
      <img
        src={logoImage}
        alt="Logo"
        className="w-90  object-contain flex-shrink-0"
      />
    </div>

    {/* SEARCH BAR */}
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden flex-1 min-w-0 h-11">
      <select className="hidden md:block h-full px-3 bg-gray-100 outline-none">
        <option>All</option>
        <option>Products</option>
        <option>Brands</option>
      </select>
      <input
        type="text"
        placeholder="Search for Product, Brand and More"
        className="flex-1 h-full px-3 outline-none text-sm md:text-lg"
      />
      <div className="px-4 cursor-pointer text-gray-600">
        <FaSearch />
      </div>
    </div>

    {/* RIGHT SECTION */}
    <div className="hidden md:flex items-center gap-6">
      <div className="flex items-center gap-2 cursor-pointer">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
          alt="India Flag"
          className="w-6 h-4"
        />
        <span>English</span>
        <FaChevronDown className="text-xs" />
      </div>
      <div onClick={() => setShowSignIn(true)} className="flex items-center gap-2 cursor-pointer">
        <FaRegUserCircle className="text-xl" />
        <span>Sign In</span>
      </div>
      <button className="bg-orange-400 hover:bg-orange-500 text-white px-5 py-2 rounded-md cursor-pointer" onClick={() => navigate("/register")}>
        Create Account
      </button>
    </div>

  </div>
</nav>

{showSignIn && <SignInModal onClose={() => setShowSignIn(false)} />}
</>
  );
}

export default Navbar;