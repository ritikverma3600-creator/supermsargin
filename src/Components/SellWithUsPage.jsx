import { FaBox, FaTruck, FaUsers, FaUser, FaBolt, FaCheckCircle, FaShareAlt, FaStar, FaArrowRight } from "react-icons/fa";
import underlineImage from "./../assets/underline.svg";
import sellerBannerBg from "./../assets/hero.png";
import ctaBannerImage from "./../assets/cta-banner.png";

function SellerHero() {
  return (
    <section className="w-full bg-[#eef2f7] pt-16 flex flex-col lg:flex-row items-center justify-between pl-6 lg:pl-16  gap-8">
      <div className="flex flex-col gap-6 max-w-xl">
        <h1 className="font-bold text-gray-800 text-[48px] leading-tight">
          Reach thousands of <br />
          <span className=" text-[#1a1456]">buyers{" "}</span>
          
          <span className="relative inline-block text-[#1a1456]">
            Nationwide
            <img src={underlineImage} alt="" className="absolute left-0 -bottom-4 w-full" />
          </span>
        </h1>
        <p className="text-gray-600 text-[16px] leading-relaxed">
          India's trusted B2B marketplace connecting suppliers and buyers across the country. Grow your business with secure trade, real-time insights, and smooth opportunities to scale.
        </p>
        <button className="cursor-pointer flex items-center gap-2 bg-[#1a1456] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2a2466] w-fit">
          Start Selling <FaArrowRight />
        </button>
      </div>
      <div className="hidden lg:block w-[45%] rounded-xl mix-blend-multiply">
        <img src={sellerBannerBg} alt="Seller" className="w-full object-contain rounded-tl-half" />
      </div>
    </section>
  );
}
// WHY CHOOSE
function WhyChoose() {
  const features = [
    { icon: <FaBox className="text-blue-500 text-[20px]" />, bg: "bg-blue-100", title: "Smooth shipping across India", desc: "All products are delivered directly to your buyers anywhere in India. We take care of logistics so you can focus on business." },
    { icon: <FaTruck className="text-green-500 text-[20px]" />, bg: "bg-green-100", title: "On time delivery", desc: "We value your business timelines. Every bulk order is delivered within 20, 60, or 90 days, exactly as promised." },
    { icon: <FaUsers className="text-purple-400 text-[20px]" />, bg: "bg-gray-200", title: "Nationwide reach", desc: "Reach millions of buyers nationwide. From metro cities to small towns, your products can be discovered everywhere in India." },
  ];

  return (
    <section className="w-full bg-white px-6 lg:px-16 py-5">
      <h2 className="text-center text-[30px] font-bold text-gray-700 mb-3">
        Why choose <span className="text-[#1a1456]">Supermargins?</span>
      </h2>
      <p className="flex justify-center text-center text-gray-500 text-[18px] mx-auto mb-10">
        Your one-stop platform for wholesale buying and selling with fast delivery, easy shipping,<br/> and nationwide reach
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="flex justify-center items-center bg-white rounded-xl p-8 flex flex-col gap-4">
            <div className={`w-14 h-14 ${f.bg} rounded-full flex items-center justify-center`}>
              {f.icon}
            </div>
            <h3 className="font-bold text-gray-800 text-[18px]">{f.title}</h3>
            <p className="text-gray-500 text-[14px] leading-relaxed text-center">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// CATEGORIES
function CategoriesWeBuy() {
  const cats = ["Accessories", "Apparel", "Bags & Luggage", "Fabrics", "FMCG", "Footwear", "Furniture", "Home Decor", "Home Furnishing", "Infants & Babies", "Kitchen & Dining", "Lighting"];

  return (
    <section className="w-full bg-white px-6 lg:px-16 py-5">
      <h2 className="text-center text-[30px] font-bold text-gray-500 mb-2">
        <span className="text-indigo-800">Categories</span> we buy
      </h2>
      <p className="text-center text-gray-500 mb-10">Explore our wide range of product categories</p>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3 my-8">
        {cats.map((cat) => (
          <div key={cat} className="border border-black-200 rounded-md px-2 py-2 text-center text-bold  text-[18px] text-black cursor-pointer hover:border-[#1a1456] hover:text-[#1a1456] transition-colors">
            {cat}
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-8 py-3 rounded-md text-[14px] font-medium hover:bg-gray-50">
          View all categories <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

// HOW IT WORKS
function HowItWorks() {
  const steps = [
    { step: "Step 1", icon: <FaUser className="text-blue-500 text-[20px]" />, bg: "bg-blue-100", title: "Register in 2 minutes", desc: "Quick and easy registration process" },
    { step: "Step 2", icon: <FaBox className="text-green-500 text-[20px]" />, bg: "bg-green-100", title: "Upload your products", desc: "Use our automated cataloguing tools" },
    { step: "Step 3", icon: <FaBolt className="text-purple-500 text-[20px]" />, bg: "bg-purple-100", title: "Receive bulk orders", desc: "Get orders for production" },
    { step: "Step 4", icon: <FaTruck className="text-orange-400 text-[20px]" />, bg: "bg-orange-100", title: "Fulfill orders", desc: "30,60 & 90 days delivery" },
    { step: "Step 5", icon: <FaCheckCircle className="text-red-400 text-[20px]" />, bg: "bg-red-100", title: "Get paid instantly", desc: "Through our automated payment system" },
    { step: "Step 6", icon: <FaShareAlt className="text-purple-400 text-[20px]" />, bg: "bg-purple-100", title: "Scale nationwide", desc: "Sell your products & brands to all over India" },
  ];

  return (
    <section className="w-full bg-[#eef2f7] px-6 lg:px-16 py-16">
      <h2 className="text-center text-[30px] font-bold text-gray-700 mb-2">
        How it <span className="text-[#1a1456]">works?</span>
      </h2>
      <p className="text-center text-gray-500 mb-10">Start your journey in 6 easy steps</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {steps.map((s) => (
          <div key={s.step} className="bg-white rounded-md p-6 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 ${s.bg} rounded-full flex items-center justify-center`}>
                {s.icon}
              </div>
              <span className="border border-gray-100 bg-gray-100 text-zinc-950 text-[12px] px-3 py-1 rounded-xl">{s.step}</span>
            </div>
            <h3 className="font-bold text-gray-800 text-[16px]">{s.title}</h3>
            <p className="text-gray-500 text-[14px]">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="cursor-pointer flex items-center gap-2 bg-[#1a1456] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2a2466]">
          Start Selling <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

// TESTIMONIALS
function SellerTestimonials() {
  const reviews = [
    { initials: "JK", name: "Javed Khan", role: "Managing Director, Hira International", text: "Supermargins has transformed our business. The platform's ease of use and global reach helped us expand across India." },
    { initials: "VM", name: "Varun Malhotra", role: "CEO, Asian Handicrafts", text: "The automated cataloguing and payment system makes wholesale trading incredibly efficient. Highly Recommended." },
    { initials: "RS", name: "Rakshit Sharma", role: "CEO, Fabs International", text: "Outstanding platform with excellent support Our sales have grown 300% since joining Supermargins." },
  ];

  return (
    <section className="w-full bg-white px-6 lg:px-16 py-16">
      <h2 className="text-center text-[30px] font-bold text-gray-700 mb-2">
        What our <span className="text-[#1a1456]">sellers</span> says?
      </h2>
      <p className="text-center text-gray-500 font-medium mb-10">Success stories from businesses across India</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((r) => (
          <div key={r.name} className="border border-gray-200 rounded-xl p-6 flex flex-col gap-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
            </div>
            <p className="text-gray-600 text-[14px] italic">"{r.text}"</p>
            <div className="flex items-center gap-3 mt-2">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600 text-[14px]">
                {r.initials}
              </div>
              <div>
                <p className="font-bold text-gray-800 text-[14px]">{r.name}</p>
                <p className="text-gray-400 text-[12px]">{r.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// BOTTOM CTA
function SellerCta() {
  return (
    <section className="w-full relative overflow-hidden h-64">
      <img src={ctaBannerImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 text-center px-6">
        <h1 className="text-white font-bold">
          क्या आप अपने व्यवसाय को तेज़ी से बढ़ाना चाहते हैं?
        </h1>
        <p className="text-gray-200 text-[16px]">
          सुपरमार्जिन्स से जुड़ें और हज़ारों सफल विक्रेताओं की तरह अपने खरीदारों तक पहुँचें।
        </p>
        <button className="cursor-pointer bg-white text-gray-800 font-medium px-10 py-3 rounded-md hover:bg-gray-100">
          अपना स्टोर शुरु करें
        </button>
      </div>
    </section>
  );
}

// FULL PAGE
function SellWithUsPage() {
  return (
    <div className="w-full">
      <SellerHero />
      <WhyChoose />
      <CategoriesWeBuy />
      <HowItWorks />
      <SellerTestimonials />
      <SellerCta />
    </div>
  );
}

export default SellWithUsPage;