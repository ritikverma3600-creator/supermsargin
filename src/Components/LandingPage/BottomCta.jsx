import ctaBg from "./../../assets/cta-bg.png";

function BottomCta() {
  return (
    <section className="w-full px-6 lg:px-10 py-8 bg-[#eef2f7]">
      <div className="relative rounded-2xl overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <img
          src={ctaBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#1a1456]/75" />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center text-center gap-4 px-8 py-14">
          <h1 className="text-white font-bold leading-tight text-[30px]">
            क्या आप अपने बिज़नेस के लिए थोक में सामान ढूंढ रहे हैं?
          </h1>
          <p className="text-gray-300 text-[15px] lg:text-[20px]">
            थोक ख़रीदारी अब आसान, किफ़ायती दाम और प्राथमिक सहायता।
          </p>
          <button className="mt-2 bg-white text-gray-800 font-medium px-10 py-3 rounded-md hover:bg-gray-100 cursor-pointer">
            अभी शुरु करें
          </button>
        </div>

      </div>
    </section>
  );
}

export default BottomCta;