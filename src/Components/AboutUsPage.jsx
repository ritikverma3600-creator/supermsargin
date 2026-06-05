import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import Navbar from "./LandingPage/Navbar";
import CategoryBar from "./LandingPage/CategoryBar";
import Footer from "./LandingPage/Footer";
import Copyright from "./LandingPage/Copyright";


// HEXAGON CATEGORIES HERO
function AboutHero() {
  const categories = [
    { label: "HOME FURNISHING", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300" },
    { label: "ACCESSORIES", image: "https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?w=300" },
    { label: "KITCHEN & DINING", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300" },
    { label: "APPAREL", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300" },
    { label: "FURNITURE", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300" },
    { label: "HOME DECOR", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=300" },
    { label: "STORAGE & ORGANIZATION", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=300" },
    { label: "SEASONAL DECORATION", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300" },
    { label: "LIGHTING", image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=300" },
  ];

  return (
    <section className="w-full relative overflow-hidden bg-[#f5e6d3] py-40" style={{ minHeight: "500px" }}>
      <div className="flex flex-wrap justify-center gap-2 p-6">
        {categories.map((cat) => (
          <div key={cat.label} className="relative cursor-pointer group" style={{ width: "260px", height: "240px" }}>
            <div className="w-full h-full overflow-hidden" style={{
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
            }}>
              <img src={cat.image} alt={cat.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/30" />
            </div>
            <div className="absolute inset-0 flex items-end justify-center pb-8">
              <span className="bg-black/60 text-white text-[12px] font-bold px-3 py-1 rounded-full text-center">
                {cat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// SUPERMARGIN ADVANTAGE
function SupermarginAdvantage() {
  return (
    <section className="w-full bg-white px-6 lg:px-16 py-12">
      <h2 className="font-bold text-gray-800 text-[24px] mb-6">
        SUPERMARGIN <span className="text-[#1a1456]">ADVANTAGE</span>
      </h2>
      <div className="flex flex-col gap-4 text-gray-700 text-[14px] leading-relaxed">
        <p><span className="font-bold">Supermargins</span> is a registered brand of cost price discount stores pvt ltd and is slated to be a "disruptive b2b" game changer for bulk wholesale of lifestyle products such as apparel, home furnishings, lighting, footwear, fmcg, accessories, home decor and furnishings at wholesale prices.</p>
        <p>We are a b2b <span className="font-bold">wholesale platform</span> offering <span className="font-bold">factory direct</span> products with lowest prices to empower the retail sector with innovative buying tools on our platform. we not only offer great products at wholesale prices, but provide door to door shipping solutions, quality testing & factory audits and most of all we credit & provide working capital financing.</p>
        <p>We have revolutionized the way global companies buy from india bringing <span className="font-bold">factory direct</span> sourcing to our customers worldwide & <span className="font-bold">offer most products with low minimum order quantity [ moq starting at just 25 pieces for most categories] with one of a kind running inventory solution as most products shown on our site are in bulk production at all times. you can do an "add on" to our bulk orders thus reducing the moq to your desired levels.</span> our services encompass product development, design to final quality checks & shipping. we are the ultimate supplier to our buyers and do consolidated shipping and billing for ease.</p>
        <p>We aim to be the largest web-based and app-driven <span className="font-bold">wholesale supplier &</span> our business models serves wholesalers, super markets, departmental stores, resellers, distributors & retailers globally on a fully automated supply chain offering all features such as quality checks, dynamic shipping and finance to both buyers and seller. supermargins offers an innovative tech-powered, quality-assured supply chain incorporating all offline supply chain attributes such as quality, factory audits, free samples &custom made orders..</p>
        <p>with <span className="font-bold">over 30 years of experience</span> of running a formidable supply chain combined with our on-ground team of experienced merchants, quality checkers and logistic staff offering you the best factory <span className="font-bold">direct products</span> at lowest prices. we will dedicate a kam [key account manager] to your account for seamless service.</p>
        <p>We have tech enabled thousands of factories that sell products on supermargins and help them with automation, finance & shipping solutions. we make available the widest range of responsibly produced goods across all consumer categories while supporting the producers and manufacturers to bring about efficiency and competitive prices. our sellers can now access global markets efficiently sell their own brands worldwide.</p>
        <p>We are committed to deliver a sustainable and profitable cash & carry solution to our buyers, sellers & stakeholders.</p>
        <p className="text-green-600">For more information, please write to: <span className="font-bold">support@supermargins.com</span></p>
      </div>
    </section>
  );
}

// FEATURE CARDS
function FeatureCards() {
  const features = [
    {
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=200",
      title: "Over 5500 + Registered Manufacturers",
      desc: "Supermargins has enabled all factories with tech support for seamless ecommerce environment. we have empowered thousands of manufactures auto uploads of catalogues and product profiles, billing, shipping & quality testing creating optimization and cost reduction. reports are provided on automated vendor panels",
    },
    {
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=200",
      title: "Flexible Minimum Order Quantity [MOQ]",
      desc: "Products displayed on supermargins are from our \"running production\" [wip] and buyers can make \"add on\" of any quantity to our bulk production [min of 25 pieces], we also sell stocks with immediate delivery or deliver made to order as well as products from our running orders for best selection of quantity and SKUs to suit your buying.",
    },
    {
      image: "https://images.unsplash.com/photo-1533749871411-5e21e14bcc7d?w=200",
      title: "End-End Order Automation",
      desc: "Supermargins offers a full spectrum supply chain online, we are able to create products specially & custom ordered from product development, sampling, manufacturing, shipping & finance till your final sales. we will provide complete plm and visibility of entire process including 3rd party / nominated testing & quality certifications. we assure your 100% satisfaction till your final sales.",
    },
    {
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=200",
      title: "Quality Assurance & Testing",
      desc: "All products sold on supermargin platform are subject to rigorous quality checks and meet either 2.5 or 4.0 aql requirements. all base materials are tested at acrredited laboratories & certifications can be viewed in buyer admin panels. for orders over $ 10,000. we have automation with sgs, burea veritas, intertex, asia testing, tuv and the likes for quality checks and testing & certifications.",
    },
  ];

  return (
    <section className="w-full bg-[#eef2f7] px-6 lg:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="bg-white rounded-xl p-6 flex flex-col gap-4 shadow-sm">
            <img src={f.image} alt={f.title} className="w-24 h-24 object-contain mx-auto" />
            <h3 className="font-bold text-gray-800 text-[16px]">{f.title}</h3>
            <p className="text-gray-500 text-[12px] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// WE ARE HERE TO HELP
function HereToHelp() {
  return (
    <section className="w-full bg-white px-6 lg:px-16 py-12">
      <h2 className="text-center font-bold text-gray-800 text-[24px] mb-10">
        WE ARE <span className="text-[#1a1456]">HERE TO HELP</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        <div className="flex flex-col items-center gap-3">
          <FaMapMarkerAlt className="text-[30px] text-gray-700" />
          <h3 className="font-bold text-gray-800 text-[14px] tracking-wide">OUR MAIN OFFICE</h3>
          <p className="text-gray-500 text-[14px]">166, Udyog Vihar Phase 1, Udyog Vihar, Sector 20,<br />Gurugram, Haryana 122008</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <FaPhone className="text-[30px] text-gray-700" />
          <h3 className="font-bold text-gray-800 text-[14px] tracking-wide">PHONE</h3>
          <p className="text-gray-500 text-[14px]">
            <span className="font-bold text-gray-700">India</span> +91 9289001476<br />
            <span className="font-bold text-gray-700">Mexico</span> +52 5564227193<br />
            <span className="font-bold text-gray-700">United Kingdom</span> +44 7539588515
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <FaEnvelope className="text-[30px] text-gray-700" />
          <h3 className="font-bold text-gray-800 text-[14px] tracking-wide">EMAIL</h3>
          <p className="text-gray-500 text-[14px]">
            support@supermargins.com<br />
            customerservice@supermargins.com
          </p>
        </div>

      </div>
    </section>
  );
}

// FULL PAGE
function AboutUsPage() {
  return (
    <div className="w-full">
      <Navbar/>
      <CategoryBar/>
      <AboutHero />
      <SupermarginAdvantage />
      <FeatureCards />
      <HereToHelp />
      <Footer/>
      <Copyright/>
    </div>
  );
}

export default AboutUsPage;