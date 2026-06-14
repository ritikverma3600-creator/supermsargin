import { FaBars, FaShoppingCart, FaSearch } from "react-icons/fa";
import logoImage from "./../../assets/images.png";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
function MobileNav() {
      const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
 <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-14 flex items-center justify-between px-3 gap-2">
      <FaBars className="text-gray-700 text-[20px] shrink-0" onClick={() => setMenuOpen(true)}/>
      <img src={logoImage} alt="Logo" className="h-8 object-contain shrink-0" />
      <div className="flex items-center border border-gray-300 rounded-md bg-white px-2 h-9 gap-2 flex-1 min-w-0">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 w-full outline-none text-[14px] text-gray-600 min-w-0"
        />
        <FaSearch className="text-gray-400 shrink-0" />
      </div>
      <div className="relative shrink-0">
        <FaShoppingCart className="text-gray-700 text-[20px]" />
        <span className="absolute -top-1 -right-1 bg-[#1a1456] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
          0
        </span>
      </div>
    </nav>
          {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
</>
  );
}
export default MobileNav;