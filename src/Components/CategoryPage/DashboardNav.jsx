import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/home" },
  { label: "Account", path: "/account" },
  { label: "My Orders", path: "/orders" },
  { label: "My Products", path: "/products" },
  { label: "My product Development", path: "/development" },
  { label: "My Transactions", path: "/transactions" },
  { label: "My Chats", path: "/chats", badge: 2 },
];

function DashboardNav() {
  return (
    <nav className="gap-2 flex mt-[60px] md:mt-[90px] h-14 bg-white border-b rounded-t-lg border-gray-200 flex items-center mx-6 lg:mx-10 px-2">

      {/* HAMBURGER */}
      
      <FaBars className="text-gray-600 text-[18px] cursor-pointer flex-shrink-0" />

      {/* NAV ITEMS */}
      <div className="flex overflow-x-auto gap-4 border-b w-full p-2">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `gap-10 whitespace-nowrap text-md font-medium pb-1 transition-colors ${
                isActive
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-500 hover:text-gray-800"
              }`
            }
          >
            {item.label}
            {item.badge && (
              <span className="bg-red-500 text-white text-[12px] font-bold w-5 h-5 rounded-full mx-2 p-1">
                {item.badge}
              </span>
            )}
          </NavLink>
        ))}
      </div>

    </nav>
  );
}

export default DashboardNav;