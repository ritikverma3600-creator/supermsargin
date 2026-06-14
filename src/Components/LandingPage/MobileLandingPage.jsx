import { useState } from "react";
import { FaBars, FaShoppingCart, FaSearch, FaChevronRight, FaChevronLeft, FaChevronDown, FaChevronUp, FaHeart, FaTag, FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logoImage from "./../../assets/images.png";
import joinperson from "./../../assets/join-person.png";
import MobileNav from "./MobileNav";
import { useNavigate } from "react-router-dom";

// ─── DATA ───────────────────────────────────────────

const categories = [
  { label: "Apparel", icon: "👕" },
  { label: "Home Decor & Furnishing", icon: "🛋️" },
  { label: "Kitchen & Dining", icon: "🍽️" },
  { label: "Storage", icon: "📦" },
  { label: "Seasonal Gifts", icon: "🎁" },
  { label: "Furniture", icon: "🪑" },
];

const products = [
  { id: 1, name: "Fashion Earrings Pack", desc: "Trendy earrings, 2 pairs", price: "$4.25", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300", wholesale: true },
  { id: 2, name: "Ceramic Candle Holders", desc: "Elegant ceramic holders, set of", price: "$4.25", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=300", wholesale: true },
  { id: 3, name: "Basic Cotton T-Shirt", desc: "Comfortable cotton tee", price: "$4.25", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300", wholesale: true },
  { id: 4, name: "Leather Handbag", desc: "Premium leather bag", price: "$4.25", min: "Min: 50 pcs", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300", wholesale: true },
];

const testimonials = [
  { name: "Maria Sarapavoo", role: "CEO (XYZ Ltd.)", text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using letters Ipsum is that it has a more-or-less normal distribution of letter." },
  { name: "Rahul Sharma", role: "MD, ABC Traders", text: "Supermargins has transformed our wholesale buying experience. The platform is easy to use and the product quality is excellent." },
  { name: "Priya Patel", role: "Owner, Fashion Hub", text: "Amazing platform for B2B purchases. GST invoices make accounting so much easier." },
];

const quickLinks = ["Sell with us", "Support", "Join Us", "Agent sign up", "Contact us", "Work with us"];
const policies = ["Shipping Policy", "Return Policy", "General T&C", "Free Sample Policy", "Privacy Policy"];

// ─── MOBILE NAVBAR ──────────────────────────────────



// ─── HERO ────────────────────────────────────────────

function MobileHero() {
      const navigate = useNavigate();

  return (
    <section className="px-4 pt-6 pb-8 bg-[#eef2f7]">


      {/* HEADING */}
      <h1 className="font-bold text-[#1a1456] text-[24px] leading-tight mb-3">
        Empowering Small Businesses:{" "}
        <span className="relative inline-block">
          India's Top eB2B Platform
          <div className="absolute left-0 bottom-0 w-48 h-0.5 bg-red-500" />
        </span>
      </h1>
      <p className="text-gray-500 text-[14px] leading-relaxed mb-6">
        Everything you need — quality products, trusted brands, and smooth delivery — right at your fingertips.
      </p>

      {/* BUTTONS */}
      <div className="flex gap-3 mb-8">
        <button  onClick={() => navigate("/register")} className="flex-1 bg-[#1a1456] text-white py-3 rounded-md font-medium text-[14px]">
          Sign up to buy
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 rounded-md text-[14px] font-medium">
          <span className="text-red-500">▶</span> Watch Demo
        </button>
      </div>

      {/* STATS */}
      <div className="flex gap-6 mb-8">
        {[{ val: "339+", label: "Active Buyers" }, { val: "820+", label: "Inquiries Weekly" }, { val: "35+", label: "Countries" }].map((s) => (
          <div key={s.label}>
            <p className="font-bold text-gray-800 text-[18px]">{s.val}</p>
            <p className="text-gray-500 text-[12px]">{s.label}</p>
          </div>
        ))}
      </div>

      {/* PHONE MOCKUP */}
      <div className="relative flex justify-center">
        <div className="w-52 bg-[#1a1456] rounded-3xl overflow-hidden shadow-xl border-4 border-[#1a1456]">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400"
            alt="App"
            className="w-full h-72 object-cover opacity-80"
          />
          <div className="absolute top-4 left-4 right-4 bg-white/90 rounded-lg p-3">
            <img src={logoImage} alt="Logo" className="h-5 object-contain mb-2" />
            <p className="font-bold text-[#1a1456] text-[12px]">Empowering Small Businesses: India's Top eB2B Platform</p>
            <p className="text-gray-500 text-[10px] mt-1">Connect with verified suppliers worldwide</p>
          </div>
        </div>
        {/* FLOATING ICONS */}
        <div className="absolute top-8 -left-2 bg-pink-100 p-2 rounded-lg shadow-sm">🛍️</div>
        <div className="absolute top-8 -right-2 bg-blue-100 p-2 rounded-lg shadow-sm">🚚</div>
        <div className="absolute bottom-8 -left-2 bg-green-100 p-2 rounded-lg shadow-sm">📦</div>
        <div className="absolute top-1/2 -right-2 bg-purple-100 p-2 rounded-lg shadow-sm">🏪</div>
      </div>
    </section>
  );
}

// ─── SHOP BY CATEGORY ───────────────────────────────

function ShopByCategory() {
      const navigate = useNavigate();
  return (
    <section className="px-4 py-8 bg-white">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-gray-800 text-[20px]">Shop by Category</h2>
        <button className="bg-[#1a1456] text-white text-[12px] px-4 py-2 rounded-md">View All</button>
      </div>
      <div  onClick={() => navigate("/category")} className="flex flex-col">
        {categories.map((cat, i) => (
          <div key={cat.label} className={`flex items-center justify-between py-4 ${i < categories.length - 1 ? "border-b border-gray-100" : ""}`}>
            <div className="flex items-center gap-4">
              <span className="text-[24px]">{cat.icon}</span>
              <span className="text-gray-700 font-medium">{cat.label}</span>
            </div>
            <FaChevronRight className="text-gray-400 text-[14px]" />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── SIGNUP FORM ─────────────────────────────────────

function MobileSignupForm() {
  return (
    <section className="bg-[#2d2b6b] px-4 pt-8">
      <div className="bg-white rounded-2xl pb-8 p-6">
        <h2 className="font-bold text-gray-800 text-[20px] text-center mb-6">
          अपना बायर अकाउंट मुफ्त में बनाएं।
        </h2>
        <div className="flex flex-col gap-4">
          {[
            { label: "Business Name", required: true },
            { label: "Email", required: true },
            { label: "Contact Person Name", required: true },
          ].map((f) => (
            <div key={f.label} className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2">
              <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">
                {f.label}{f.required && <span className="text-red-500">*</span>}
              </span>
              <input type="text" className="w-full outline-none text-[14px]" />
            </div>
          ))}

          {/* MOBILE */}
          <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2 flex items-center gap-2">
            <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">Mobile Number<span className="text-red-500">*</span></span>
            <span className="text-gray-500 text-[14px]">+91</span>
            <span className="text-gray-300">|</span>
            <input type="tel" className="flex-1 outline-none text-[14px]" />
            <button className="text-[#1a1456] text-[14px] font-medium">Verify</button>
          </div>

          {[
            { label: "Password", required: true, type: "password" },
            { label: "Confirm Password", required: true, type: "password" },
          ].map((f) => (
            <div key={f.label} className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2">
              <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">
                {f.label}{f.required && <span className="text-red-500">*</span>}
              </span>
              <input type={f.type} className="w-full outline-none text-[14px]" />
            </div>
          ))}

          <p className="text-gray-400 text-[12px]">(Re-type your password)</p>

          <button className="w-full bg-[#1a1456] text-white py-3 rounded-md font-semibold">
            Create account
          </button>
        </div>
      </div>

      {/* PERSON IMAGE */}
      <div className="flex justify-center">
        <img
          src={joinperson}
          alt="Person"
          className="w-48 object-contain rounded-2xl"
        />
      </div>
    </section>
  );
}

// ─── FEATURES ────────────────────────────────────────

function MobileFeatures() {
  return (
    <section className="px-4 py-8 bg-white flex flex-col gap-10">
      {/* MSME */}
      <div>
        <h2 className="font-bold text-gray-800 text-[20px] mb-3">Empowering MSMEs Across India</h2>
        <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
          Supermargin is committed to strengthening India's MSME sector by providing a Tech enabled supply chain platform to buyers, and increasing profit margins. Direct access to nationwide market for small manufacturers. By providing access of tech enabled supply chain and simplified compliance processes, we aim to help MSMEs scale efficiently and compete in a rapidly evolving marketplace.
        </p>
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500"
          alt="MSMEs"
          className="w-full rounded-xl object-cover h-48"
        />
      </div>

      {/* GST */}
      <div>
        <h2 className="font-bold text-gray-800 text-[20px] mb-3">Get GST Invoice on All Your Purchase</h2>
        <p className="text-gray-500 text-[14px] leading-relaxed mb-4">
          Get a GST invoice on all your B2B purchases and unlock the benefits of input tax credit for your business. Whether you're buying supplies, equipment, or services, a GST-compliant invoice ensures transparency and helps streamline your accounting and tax filing processes. Make your business purchases more efficient and cost-effective by opting for vendors who provide proper GST billing.
        </p>
        <img
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500"
          alt="GST"
          className="w-full rounded-xl object-cover h-48 bg-[#1a1456]"
        />
      </div>
    </section>
  );
}

// ─── ONE PLATFORM CTA ────────────────────────────────

function OnePlatformCTA() {
  return (
    <section className="bg-[#2d2b6b] px-4 py-10 relative overflow-hidden">
      <div className="relative z-10 mb-6">
        <h2 className="font-bold text-white text-[24px] leading-tight mb-3">
          One platform for all your wholesale requirements
        </h2>
        <p className="text-gray-300 text-[14px] leading-relaxed mb-6">
          Explore a wide range of wholesale products with real-time pricing, stock updates, and fast delivery.
        </p>
        <button className="bg-white text-gray-800 px-8 py-3 rounded-md font-medium text-[14px]">
          Sign up to buy
        </button>
      </div>
      <img
        src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=500"
        alt="Wholesale"
        className="w-full h-64 object-cover rounded-2xl opacity-60"
        style={{ clipPath: "ellipse(90% 100% at 50% 100%)" }}
      />
    </section>
  );
}

// ─── LIVE DEALS ──────────────────────────────────────

function MobileLiveDeals() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="px-4 py-8 bg-[#eef2f7]">
      <div className="flex justify-center mb-4">
        <span className="flex items-center gap-2 bg-[#1a1456] text-white px-6 py-2 rounded-full text-[14px] font-medium">
          <FaTag /> Live Deals
        </span>
      </div>

      <h2 className="font-bold text-gray-800 text-[24px] text-center mb-2">Products Under $4.99</h2>
      <p className="text-gray-500 text-[14px] text-center mb-6">
        Discover amazing wholesale prices on quality apparel, toys, home decor, and accessories.
      </p>

      {/* FILTER ROW */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-800 text-[14px]">All Products</span>
          <FaChevronDown className="text-gray-400 text-[12px]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#1a1456]">247</span>
          <span className="text-gray-500 text-[14px]">New Products</span>
        </div>
        <button className="text-[#1a1456] text-[14px] underline">View all</button>
      </div>

      <p className="text-gray-400 text-[12px] mb-4">Premium wholesale products</p>

      {/* PRODUCT CARDS SCROLL */}
      <div className="flex gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <div key={product.id} className="flex-shrink-0 w-44 bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
              {product.wholesale && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-[12px] px-2 py-0.5 rounded-full">Wholesale</span>
              )}
              <button className="absolute top-2 right-2 bg-white w-7 h-7 rounded-full flex items-center justify-center shadow">
                <FaHeart className="text-gray-400 text-[12px]" />
              </button>
            </div>
            <div className="p-3">
              <h3 className="font-bold text-gray-800 text-[12px] mb-1">{product.name}</h3>
              <p className="text-gray-400 text-[12px] mb-2">{product.desc}</p>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-[#1a1456] text-[14px]">{product.price}</span>
                <span className="text-gray-400 text-[12px]">{product.min}</span>
              </div>
              <button className="w-full flex items-center justify-center gap-1 bg-[#1a1456] text-white py-1.5 rounded-md text-[12px] font-medium">
                + Add to chat
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex-1 bg-gray-300 rounded-full h-1">
          <div className="bg-[#1a1456] h-1 rounded-full w-1/4" />
        </div>
        <div className="flex items-center gap-2 ml-4">
          <button className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center">
            <FaChevronLeft className="text-[12px]" />
          </button>
          <span className="text-[12px] text-gray-500">1/8</span>
          <button className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center">
            <FaChevronRight className="text-[12px]" />
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── READY TO TRANSFORM ──────────────────────────────

function ReadyToTransform() {
  return (
    <section className="bg-[#2d2b6b] px-4 py-10 text-center">
      <h2 className="font-bold text-white text-[24px] mb-3">Ready to Transform Your Business?</h2>
      <p className="text-gray-300 text-[14px] mb-6">
        Join thousands of successful retailers who trust our wholesale platform
      </p>
      <button className="bg-white text-gray-800 px-10 py-3 rounded-md font-medium text-[14px]">
        Get Started Today
      </button>
    </section>
  );
}

// ─── TESTIMONIALS ────────────────────────────────────

function MobileTestimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="px-4 py-8 bg-white">
      <h2 className="font-bold text-gray-800 text-[24px] text-center mb-2">What Our Buyers Are Saying</h2>
      <p className="text-gray-500 text-[14px] text-center mb-6">
        Trusted by businesses worldwide for quality, reliability, and seamless B2B wholesale experiences.
      </p>

      <div className="border-l-4 border-red-500 bg-white rounded-xl shadow-sm p-5 mb-4">
        <h3 className="font-bold text-gray-800 text-[18px] mb-1">{testimonials[current].name}</h3>
        <p className="text-gray-400 text-[14px] mb-3">{testimonials[current].role}</p>
        <p className="text-gray-500 text-[14px] leading-relaxed">{testimonials[current].text}</p>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-[#1a1456]" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  );
}

// ─── BULK CTA ────────────────────────────────────────

function BulkCTA() {
  return (
    <section className="bg-[#2d2b6b] px-4 py-10 text-center">
      <h2 className="font-bold text-white text-[24px] mb-3">
        Need to purchase in bulk for your business?
      </h2>
      <p className="text-gray-300 text-[14px] mb-6">
        Bulk Buying Made Easy – Competitive Pricing and Priority Support
      </p>
      <button className="bg-white text-gray-800 px-10 py-3 rounded-md font-medium text-[14px]">
        Enquire Now
      </button>
    </section>
  );
}

// ─── MOBILE FOOTER ───────────────────────────────────

function MobileFooter() {
  const [openQuickLinks, setOpenQuickLinks] = useState(true);
  const [openPolicies, setOpenPolicies] = useState(true);

  return (
    <footer className="bg-[#f5f5f0]">

      {/* CONNECT */}
      <div className="px-4 py-6 border-b border-gray-200">
        <h3 className="font-bold text-gray-800 text-[16px] border-b-2 border-red-500 pb-1 w-fit mb-4">Connect with us</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start gap-2">
            <FaPhone className="text-gray-500 mt-0.5 flex-shrink-0" />
            <div className="text-[14px] text-gray-600 flex flex-col gap-1">
              <span><span className="font-medium">India</span> +91 9289001476</span>
              <span><span className="font-medium">Mexico</span> +52 5564227193</span>
              <span><span className="font-medium">UK</span> +44 7539588515</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <FaEnvelope className="text-gray-500 mt-0.5 flex-shrink-0" />
            <div className="text-[14px] flex flex-col gap-1">
              <a href="mailto:Support@supermargins.com" className="text-[#1a1456]">Support@supermargins.com</a>
              <a href="mailto:customerservice@supermargins.com" className="text-[#1a1456] text-[12px]">customerservice@supermargins.com</a>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div className="px-4 py-4 border-b border-gray-200">
        <button
          onClick={() => setOpenQuickLinks(!openQuickLinks)}
          className="flex items-center justify-between w-full"
        >
          <h3 className="font-bold text-gray-800 text-[16px] border-b-2 border-red-500 pb-1">Quick Links</h3>
          {openQuickLinks ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
        </button>
        {openQuickLinks && (
          <div className="flex flex-col gap-3 mt-3">
            {quickLinks.map((link) => (
              <a key={link} href="#" className="text-gray-600 text-[14px] hover:text-[#1a1456]">{link}</a>
            ))}
          </div>
        )}
      </div>

      {/* POLICIES */}
      <div className="px-4 py-4 border-b border-gray-200">
        <button
          onClick={() => setOpenPolicies(!openPolicies)}
          className="flex items-center justify-between w-full"
        >
          <h3 className="font-bold text-gray-800 text-[16px] border-b-2 border-red-500 pb-1">Policies</h3>
          {openPolicies ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
        </button>
        {openPolicies && (
          <div className="flex flex-col gap-3 mt-3">
            {policies.map((policy) => (
              <a key={policy} href="#" className="text-gray-600 text-[14px] hover:text-[#1a1456]">{policy}</a>
            ))}
          </div>
        )}
      </div>

      {/* SOCIAL */}
      <div className="px-4 py-6 flex justify-center gap-4">
        {[
          { icon: FaFacebookF, bg: "bg-blue-600" },
          { icon: FaXTwitter, bg: "bg-black" },
          { icon: FaInstagram, bg: "bg-pink-500" },
          { icon: FaLinkedinIn, bg: "bg-blue-700" },
          { icon: FaYoutube, bg: "bg-red-600" },
        ].map(({ icon: Icon, bg }, i) => (
          <a key={i} href="#" className={`${bg} text-white w-10 h-10 rounded-full flex items-center justify-center`}>
            <Icon className="text-[14px]" />
          </a>
        ))}
      </div>

      {/* BRAND */}
      <div className="mx-4 mb-4 bg-white rounded-xl p-6 text-center">
        <img src={logoImage} alt="Logo" className="w-32 mx-auto mb-3 object-contain" />
        <p className="text-red-500 text-[14px] font-medium">
          Supermargin is a registered brand of Cost price stores Pvt. Ltd.
        </p>
        <hr className="my-4 border-gray-200" />
        <div className="flex justify-center gap-4">
          {["🌐", "🌐", "🌐"].map((icon, i) => (
            <span key={i} className="text-[24px]">{icon}</span>
          ))}
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-red-600 py-4 text-center">
        <p className="text-white text-[14px]">Copyright © 2024 – 2025 Supermargin All Rights Reserved.</p>
      </div>

    </footer>
  );
}

// ─── MAIN PAGE ───────────────────────────────────────

function MobileLandingPage() {
  return (
    <div className="w-full bg-white min-h-screen pt-14">
      <MobileNav />
      <MobileHero />
      <ShopByCategory />
      <MobileSignupForm />
      <MobileFeatures />
      <OnePlatformCTA />
      <MobileLiveDeals />
      <ReadyToTransform />
      <MobileTestimonials />
      <BulkCTA />
      <MobileFooter />
    </div>
  );
}

export default MobileLandingPage;