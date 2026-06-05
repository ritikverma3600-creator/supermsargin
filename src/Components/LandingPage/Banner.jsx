import bannerImage from "./../../assets/banner.png";

function Banner() {
  return (
    <section className="w-full relative overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src={bannerImage}
        alt="Banner"
        className="w-full h-[320px] lg:h-[400px] object-cover"
      />

      {/* DARK OVERLAY ON LEFT */}
<div className="absolute inset-0 bg-gradient-to-r from-[#2d2a8e]/90 via-[#2d2a8e]/50 to-transparent" />
      {/* TEXT CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 lg:px-30 max-w-3xl gap-3">

        <h1 className="text-white text-[36px] font-bold leading-relaxed">
          थोक खरीद की हर ज़रूरत का
          समाधान, अब एक ही प्लेटफ़ॉर्म पर
        </h1>

        <p className="text-gray-200 text-[24px] lg:text-[24px] leading-relaxed">
          चुने हुए थोक प्रोडक्ट्स, सही दाम, समय पर स्टॉक अपडेट और
          भरोसेमंद डिलीवरी के साथ।
        </p>

        <button className="bg-white text-[#1a1456] font-medium px-6 py-3 rounded-sm w-fit hover:bg-gray-100 cursor-pointer">
          अपना प्रोडक्ट खोजें
        </button>

      </div>

    </section>
  );
}

export default Banner;