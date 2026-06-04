import logoImage from "./../../assets/company_logo.png";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPhone, FaEnvelope } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-[#eef2f7] px-6 lg:px-10 py-10">
      <div className="flex flex-col lg:flex-row gap-10 justify-between">

        {/* COL 1 — LOGO */}
        <div className="flex flex-col items-center lg:items-start gap-3 max-w-[200px]">
          <img src={logoImage} alt="Logo" className="w-40 object-contain" />
          <p className="text-red-500 font-semibold text-sm text-center lg:text-left">
            Supermargin is a registered brand of Cost price stores Pvt. Ltd.
          </p>
          <hr className="w-full border-gray-300" />
        </div>

        {/* COL 2 — QUICK LINKS */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-gray-800 border-b-2 border-red-500 pb-1 w-fit">Quick Links</h3>
          {["About us", "Sell with us", "Agent sign up", "Contact us", "Work with us", "FAQ"].map((link) => (
            <a key={link} href="#" className="text-gray-500 text-sm hover:text-[#1a1456]">{link}</a>
          ))}
        </div>

        {/* COL 3 — POLICIES */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-gray-800 border-b-2 border-red-500 pb-1 w-fit">Policies</h3>
          {["Shipping Policy", "Return Policy", "General T&C", "Free Sample Policy", "Privacy Policy"].map((link) => (
            <a key={link} href="#" className="text-gray-500 text-sm hover:text-[#1a1456]">{link}</a>
          ))}
          {/* PARTNER LOGOS */}
          <div className="flex items-center gap-3 mt-4">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/40px-Flag_of_India.svg.png" alt="AIPC" className="h-10 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/40px-Flag_of_India.svg.png" alt="EPCH" className="h-10 object-contain" />
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/40px-Flag_of_India.svg.png" alt="FIEO" className="h-10 object-contain" />
          </div>
        </div>

        {/* COL 4 — CONNECT */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-gray-800 border-b-2 border-red-500 pb-1 w-fit">Connect with us</h3>
          <div className="flex items-center gap-3 text-gray-500 text-sm">
            <FaPhone className="text-gray-400" />
            <span>India</span>
            <span>+91 9289001476</span>
          </div>
          <hr className="border-gray-300" />
          <div className="flex items-start gap-3 text-sm">
            <FaEnvelope className="text-gray-400 mt-1 flex-shrink-0" />
            <div className="flex flex-col gap-1">
              <a href="mailto:Support@supermargins.com" className="text-[#1a1456] hover:underline">Support@supermargins.com</a>
              <a href="mailto:customerservice@supermargins.com" className="text-[#1a1456] hover:underline">customerservice@supermargins.com</a>
            </div>
          </div>
        </div>

        {/* COL 5 — FOLLOW */}
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-gray-800 border-b-2 border-red-500 pb-1 w-fit">Follow us</h3>
          <div className="flex items-center gap-3">
            <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:opacity-80"><FaFacebookF /></a>
            <a href="#" className="bg-black text-white p-2 rounded-full hover:opacity-80"><FaXTwitter /></a>
            <a href="#" className="bg-pink-500 text-white p-2 rounded-full hover:opacity-80"><FaInstagram /></a>
            <a href="#" className="bg-blue-700 text-white p-2 rounded-full hover:opacity-80"><FaLinkedinIn /></a>
            <a href="#" className="bg-red-600 text-white p-2 rounded-full hover:opacity-80"><FaYoutube /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;