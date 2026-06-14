import { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaClock, FaBriefcase, FaChevronRight, FaChevronLeft, FaLinkedin, FaHandsHelping, FaWallet, FaDumbbell, FaRocket, FaBirthdayCake, FaShieldAlt, FaBullseye, FaUmbrella, FaGraduationCap, FaMoon, FaUser, FaHandHoldingHeart } from "react-icons/fa";
import testimonials from "./../../data/testimonials.json";
import cultureCards from "./../../data/culturecards.json"
function CultureTab() {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      {/* WORKING WITH SUPERMARGINS */}
      <section className="px-6 lg:px-16 py-12 bg-[#f5f7ff]">
        <h2 className="text-center font-bold text-[#1a1456] text-[30px] mb-10">Working with Supermargins</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {cultureCards.map((card) => (
            <div key={card.title} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-[16px] mb-2">{card.title}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SLIDER */}
      <section className="px-6 lg:px-16 py-12 bg-[#f5f7ff]">
        <h2 className="text-center font-bold text-[#1a1456] text-[30px] mb-10">See the feedback from your teammates.</h2>

        <div className="flex items-center gap-4 max-w-4xl mx-auto">

          {/* MAIN CARD */}
          <div className="flex-1 bg-white rounded-xl overflow-hidden flex shadow-sm">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-48 object-cover flex-shrink-0"
            />
            <div className="p-8 flex flex-col gap-4">
              <span className="text-gray-300 text-[48px] leading-none">"</span>
              <p className="text-gray-700 text-[16px] leading-relaxed -mt-4">
                {testimonials[current].quote}
              </p>
              <div>
                <p className="font-bold text-gray-800">{testimonials[current].name}</p>
                <p className="text-gray-400 text-[14px]">{testimonials[current].exp}</p>
                <p className="text-gray-400 text-[14px]">{testimonials[current].role}</p>
                <button className="flex items-center gap-2 mt-2 text-blue-600 text-[14px]">
                  <FaLinkedin /> LinkedIn profile
                </button>
              </div>
            </div>
          </div>

          {/* NEXT PREVIEWS */}
          <div className="flex flex-col gap-2 w-24">
            {testimonials.filter((_, i) => i !== current).slice(0, 3).map((t, i) => (
              <img
                key={i}
                src={t.image}
                alt={t.name}
                className="w-24 h-20 object-cover rounded-lg cursor-pointer opacity-70 hover:opacity-100"
                onClick={() => setCurrent(testimonials.indexOf(t))}
              />
            ))}
          </div>

        </div>

        {/* PROGRESS + CONTROLS */}
        <div className="flex items-center justify-center gap-4 mt-6 max-w-4xl mx-auto">
          <div className="flex-1 bg-gray-200 rounded-full h-1">
            <div
              className="bg-[#1a1456] h-1 rounded-full transition-all"
              style={{ width: `${((current + 1) / testimonials.length) * 100}%` }}
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrent((p) => Math.max(0, p - 1))}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
              <FaChevronLeft className="text-[12px]" />
            </button>
            <span className="text-[14px] text-gray-500">{current + 1}/{testimonials.length}</span>
            <button
              onClick={() => setCurrent((p) => Math.min(testimonials.length - 1, p + 1))}
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
              <FaChevronRight className="text-[12px]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default CultureTab;