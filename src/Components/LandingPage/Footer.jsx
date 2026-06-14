import logoImage from "./../../assets/company_logo.png";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPhone, FaEnvelope } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-[#eef2f7] px-6 lg:px-30 py-5">
      <div className="flex flex-col lg:flex-row gap-10 justify-between">

        {/* COL 1 — LOGO */}
        <div className="flex flex-col items-center lg:items-start gap-3 max-w-[200px]">
          <img src={logoImage} alt="Logo" className="w-40 object-contain" />
          <p className="text-red-500 font-semibold text-[14px] text-center lg:text-left">
            Supermargin is a registered brand of Cost price stores Pvt. Ltd.
          </p>
          <hr className="w-full border-gray-300" />
        </div>

        {/* COL 2 — QUICK LINKS */}
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-gray-800 border-b-2 border-red-500  w-fit">Quick Links</h3>
          {[
            { label: "About us", path: "/aboutus" },
            { label: "Sell with us", path: "/sellwithus" },
            { label: "Agent sign up", path: "/agentsignup" },
            { label: "Contact us", path: "/support" },
            { label: "Work with us", path: "/workwithus" },
            { label: "FAQ", path: "/support" },
          ].map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-gray-500 text-[14px] hover:text-[#1a1456]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* COL 3 — POLICIES */}
        <div className="flex flex-col ">
          <h3 className="font-bold text-gray-800 border-b-2 border-red-500 pb-1 w-fit">Policies</h3>
            {[
              { label: "Shipping Policy", path: "/shipping-policy" },
              { label: "Return Policy", path: "/return-policy" },
              { label: "General T&C", path: "/general-tc" },
              { label: "Free Sample Policy", path: "/free-sample-policy" },
              { label: "Privacy Policy", path: "/privacy-policy" },
            ].map((link) => (
              <Link key={link.label} to={link.path} className="text-gray-500 text-[14px] hover:text-[#1a1456]">
                {link.label}
              </Link>
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
          <div className="flex items-center gap-3 text-gray-500 text-[14px]">
            <FaPhone className="text-gray-400" />
            <span>India</span>
            <span>+91 9289001476</span>
          </div>
          <hr className="border-gray-300" />
          <div className="flex items-start gap-3 text-[14px]">
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