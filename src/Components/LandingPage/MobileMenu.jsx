import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FaTimes, FaSearch, FaShoppingCart, FaChevronDown } from 'react-icons/fa'
import {
  PiTShirtBold,
  PiArmchairBold,
  PiBowlFoodBold,
  PiArchiveBold,
  PiGiftBold,
  PiCouchBold,
} from 'react-icons/pi'
import logoImage from "./../../assets/images.png";

const categories = [
  { name: 'Apparel', icon: PiTShirtBold, path: '/category' },
  { name: 'Home Decor & Furnishing', icon: PiArmchairBold, path: '/category' },
  { name: 'Kitchen & Dining', icon: PiBowlFoodBold, path: '/category' },
  { name: 'Storage', icon: PiArchiveBold, path: '/category/storage' },
  { name: 'Seasonal Gifts', icon: PiGiftBold, path: '/category' },
  { name: 'Furniture', icon: PiCouchBold, path: '/category' },
]

const accountLinks = [
  { name: 'My Orders', path: '/account' },
  { name: 'My Products', path: '/account' },
  { name: 'My product Development', path: '/account' },
  { name: 'My Selection', path: '/account' },
  { name: 'My Transactions', path: '/account' },
  { name: 'My Chats', path: '/account' },
]

const moreLinks = [
  { name: 'Sell With Us', path: '/sellwithus' },
  { name: 'Request a Quote', path: '/requestquote' },
  { name: 'Schedule a Meet', path: '/scheduleameet' },
]

function MobileMenu({ onClose }) {
  const [accountOpen, setAccountOpen] = useState(false)
  const navigate = useNavigate()

  const goTo = (path) => {
    navigate(path)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 h-14 border-b border-gray-200">
        <FaTimes className="text-gray-700 text-[20px] cursor-pointer" onClick={onClose} />

        <Link to="/" onClick={onClose}>
          <img src={logoImage} alt="Logo" className="h-8 object-contain" />
        </Link>

        <div className="flex items-center border border-gray-300 rounded-md bg-white px-2 h-9 gap-2 flex-1 max-w-[140px] mx-2">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 w-full min-w-0 outline-none text-[14px] text-gray-600"
          />
          <FaSearch className="text-gray-400 text-[14px] shrink-0" />
        </div>

        <div className="relative shrink-0 cursor-pointer" onClick={() => goTo('/cart')}>
          <FaShoppingCart className="text-gray-700 text-[20px]" />
          <span className="absolute -top-1 -right-1 bg-[#1a1456] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            0
          </span>
        </div>
      </div>

      {/* Account / language strip */}
      <div className="bg-[#2d2a5e] px-4 py-3 flex items-center justify-between">
        <p className="text-white text-[14px]">
          Hello,{' '}
          <span
            className="underline cursor-pointer"
            onClick={() => goTo('/login')}
          >
            Login
          </span>
        </p>
        <button
          className="bg-[#f5a623] text-white text-[14px] font-semibold px-3 py-1.5 rounded-md"
          onClick={() => goTo('/register')}
        >
          Create Account
        </button>
        <div className="flex items-center gap-1 text-white text-[14px] cursor-pointer">
          English <FaChevronDown className="text-[12px]" />
        </div>
      </div>

      {/* Categories */}
      <div>
        {categories.map(({ name, icon: Icon, path }) => (
          <div
            key={name}
            className="flex items-center justify-between px-4 py-4 border-b border-gray-100 cursor-pointer"
            onClick={() => goTo(path)}
          >
            <div className="flex items-center gap-4">
              <Icon className="text-gray-700 text-[24px]" />
              <span className="text-[#2d2a5e] font-semibold">{name}</span>
            </div>
            <FaChevronDown className="text-gray-400" />
          </div>
        ))}
      </div>

      {/* Spacer */}
      <div className="h-3 bg-white" />

      {/* Account section */}
      <div>
        <div
          className="flex items-center justify-between px-4 py-4 bg-gray-100 cursor-pointer"
          onClick={() => setAccountOpen(!accountOpen)}
        >
          <span className="text-[#2d2a5e] font-semibold">Account</span>
          <FaChevronDown
            className={`text-gray-500 transition-transform ${accountOpen ? 'rotate-180' : ''}`}
          />
        </div>
        {accountOpen &&
          accountLinks.map(({ name, path }) => (
            <div
              key={name}
              className="px-4 py-4 bg-gray-100 border-t border-gray-200 text-[#2d2a5e] cursor-pointer"
              onClick={() => goTo(path)}
            >
              {name}
            </div>
          ))}
      </div>

      {/* Spacer */}
      <div className="h-3 bg-white" />

      {/* More links section */}
      <div>
        {moreLinks.map(({ name, path }) => (
          <div
            key={name}
            className="px-4 py-4 bg-gray-100 border-b border-gray-200 text-[#2d2a5e] cursor-pointer"
            onClick={() => goTo(path)}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MobileMenu