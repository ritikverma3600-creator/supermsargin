import ctaBannerImage from "./../../assets/cta-banner.png";

function CtaBanner() {
  return (
    <section className="w-full px-6 lg:px-10 py-8 bg-[#eef2f7]">
      <div className="relative rounded-2xl overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src={ctaBannerImage}
          alt="CTA Banner"
          className="w-full h-[280px] object-cover"
        />

        {/* TEXT OVERLAY */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center px-6">
          <h2 className="text-white font-bold text-[24px] lg:text-[30px]">
            तेज़ और आसान थोक सप्लाई के साथ बढ़ाएँ अपना बिज़नेस।
          </h2>
          <p className="text-white text-[15px] lg:text-[17px]">
            ₹99 में किफ़ायती थोक प्रोडक्ट्स देखें।
          </p>
          <button className="mt-2 bg-white text-gray-800 font-medium px-8 py-3 rounded-md hover:bg-gray-100 cursor-pointer">
            सभी प्रोडक्ट्स देखें
          </button>
        </div>

      </div>
    </section>
  );
}

export default CtaBanner;