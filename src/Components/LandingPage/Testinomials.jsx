import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  { id: 1, name: "Ashok Mahto", role: "Prop.", text: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using letters Ipsum is that it has a more-or-less normal distribution of letter." },
  { id: 2, name: "Priya Sharma", role: "Retailer", text: "Supermargin has transformed the way we source products. The quality and pricing is unmatched in the market. Highly recommend to all small business owners." },
  { id: 3, name: "Rahul Gupta", role: "Wholesaler", text: "Amazing platform for B2B purchases. GST invoices make accounting so much easier. The delivery is always on time and products are exactly as described." },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="w-full bg-[#eef2f7] px-6 lg:px-10 py-12">

      {/* BADGE */}
      <div className="flex justify-center mb-4">
        <span className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-full text-md font-medium">
          <FaStar className="text-yellow-400" />
          Trusted by Industry Leaders
        </span>
      </div>

      {/* TITLE */}
      <h2 className="text-center font-bold text-[#1a1456] text-3xl lg:text-4xl mb-3">
        What Our Buyers Are Saying
      </h2>

      {/* SUBTITLE */}
      <p className="text-center text-gray-600 font-medium text-md mb-10">
        Trusted by businesses worldwide for quality, reliability, <br />
        and seamless B2B wholesale experiences.
      </p>

      {/* SLIDER */}
      <div className="flex items-center gap-4 mt-4">

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="flex-shrink-0 bg-white text-gray-600 p-3 rounded-full shadow hover:bg-gray-100 cursor-pointer"
        >
          <FaChevronLeft />
        </button>

        {/* CARD */}
        <div className="flex-1 bg-white rounded-xl shadow-sm p-8 flex gap-4">
          <div className="w-1 bg-red-500 rounded-full flex-shrink-0" />
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-gray-800 text-lg">{t.name}</h3>
            <p className="text-gray-400 text-sm">{t.role}</p>
            <p className="text-gray-500 text-base leading-relaxed mt-2">{t.text}</p>
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="flex-shrink-0 bg-[#1a1456] text-white p-3 rounded-full shadow hover:bg-[#2a2466] cursor-pointer"
        >
          <FaChevronRight />
        </button>

      </div>

    </section>
  );
}

export default Testimonials;