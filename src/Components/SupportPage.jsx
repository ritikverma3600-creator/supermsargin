import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaPlus, FaMinus, FaHeadset } from "react-icons/fa";
import Navbar from "./LandingPage/Navbar";
import CategoryBar from "./LandingPage/CategoryBar";
import Footer from "./LandingPage/Footer";
import Copyright from "./LandingPage/Copyright";

const faqSections = [
  {
    title: "GENERAL FAQs",
    questions: [
      { q: "What product categories do you offer?", a: "We offer a wide range of categories including Apparel, Home Decor, Home Furnishing, Kitchen & Dining, Storage, Seasonal Gifts, Furniture, Accessories, Lighting, FMCG, Fabrics, and Footwear." },
      { q: "What product categories do you offer?", a: "We offer wholesale products across multiple categories at factory direct prices with minimum order quantities starting at 25 pieces." },
      { q: "What product categories do you offer?", a: "Our platform connects buyers with thousands of registered manufacturers across India offering the best wholesale prices." },
    ],
  },
  {
    title: "ORDERING & SOURCING",
    questions: [
      { q: "Can I request custom/private label products?", a: "Yes, we offer custom and private label product development. You can work with our team to create products tailored to your brand requirements." },
      { q: "Are samples free of charge?", a: "Sample availability and pricing varies by product and supplier. Please contact our support team for specific sample requests." },
      { q: "What is the minimum order quantity (MOQ)?", a: "Our MOQ starts at just 25 pieces for most categories. We also offer add-on options to our bulk production orders." },
      { q: "How do I place an order?", a: "Simply browse our catalog, select your products, choose quantities, and proceed to checkout. Our team will confirm your order and provide shipping details." },
    ],
  },
  {
    title: "PAYMENTS & FINANCING",
    questions: [
      { q: "Do you offer credit or buyer financing?", a: "Yes, we offer working capital financing and credit solutions to qualified buyers. Contact our support team to learn more about financing options." },
      { q: "What payment methods are accepted?", a: "We accept bank transfers, UPI, credit/debit cards, and various other payment methods. All transactions are secured and encrypted." },
    ],
  },
  {
    title: "COMPLIANCE & QUALITY",
    questions: [
      { q: "How do you ensure product quality and compliance?", a: "All products undergo rigorous quality checks meeting 2.5 or 4.0 AQL requirements. We work with SGS, Bureau Veritas, Intertex, Asia Testing, and TUV for certifications." },
      { q: "Can I see quality test reports or certifications?", a: "Yes, all quality test reports and certifications are available in your buyer admin panel for orders placed on our platform." },
    ],
  },
  {
    title: "LOGISTICS & DELIVERY",
    questions: [
      { q: "Do you handle shipping and last-mile delivery?", a: "Yes, we provide door-to-door shipping solutions across India. We handle all logistics so you can focus on your business." },
      { q: "What countries do you ship to?", a: "We primarily ship across India, but also support international shipping. Contact us for specific country availability and shipping rates." },
      { q: "Who manages customs clearance?", a: "For international orders, we assist with customs documentation. Our logistics team will guide you through the process." },
    ],
  },
  {
    title: "PLATFORM & SUPPORT",
    questions: [
      { q: "Is there a membership or platform fee?", a: "Registration on Supermargins is free. We believe in making wholesale accessible to all businesses without upfront platform fees." },
      { q: "How do I contact support or get a dedicated account manager?", a: "You can reach our support team via email at support@supermargins.com or call +91 9289001476. For large accounts, we assign a dedicated KAM." },
    ],
  },
];

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50"
      >
        <span className="font-semibold text-gray-800 text-[14px]">{question}</span>
        {open
          ? <FaMinus className="cursor-pointer text-blue-500 flex-shrink-0" />
          : <FaPlus className="cursor-pointer text-blue-500 flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-500 text-[14px] leading-relaxed border-t border-gray-100">
          {answer}
        </div>
      )}
    </div>
  );
}

function SupportPage() {
  return (
    <>      <Navbar/>
      <CategoryBar/>
    <div className="w-full bg-white min-h-screen py-40">

      {/* HERE TO HELP */}
      <section className="w-full px-6 lg:px-16 py-12 border-b border-gray-100">
        <h2 className="text-center font-bold text-gray-800 text-[24px] mb-10">
          WE ARE <span className="text-[#1a1456]">HERE TO HELP</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
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

      {/* FAQ SECTION */}
      <section className="w-full px-6 lg:px-16 py-12 max-w-4xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-10">
          <h2 className="font-bold text-gray-800 text-[30px] mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-[16px]">Find answers to common questions about our B2B wholesale platform.</p>
          <p className="text-gray-500 text-[16px]">Get the information you need to make the most of your wholesale experience.</p>
        </div>

        {/* FAQ GROUPS */}
        <div className="flex flex-col gap-8">
          {faqSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-gray-400 font-semibold text-[14px] tracking-widest mb-4">{section.title}</h3>
              <div className="flex flex-col gap-3">
                {section.questions.map((item, i) => (
                  <FAQItem key={i} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* STILL HAVE QUESTIONS */}
        <div className="bg-[#1a1456] rounded-2xl p-10 text-center mt-10 flex flex-col gap-4">
          <h3 className="font-bold text-white text-[20px]">Still have questions?</h3>
          <p className="text-gray-300 text-[14px] max-w-lg mx-auto">
            Our dedicated support team is here to help you with any additional questions about our wholesale program, products, or services.
          </p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <button className="cursor-pointer flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-md text-[14px] font-medium hover:bg-gray-100">
              <FaHeadset /> Visit Help Center
            </button>
            <button className="cursor-pointer flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-md text-[14px] font-medium hover:bg-gray-100">
              <FaEnvelope /> Contact Support
            </button>
          </div>
        </div>

      </section>

    </div>
          <Footer/>
      <Copyright/>
      </>
  );
}

export default SupportPage;