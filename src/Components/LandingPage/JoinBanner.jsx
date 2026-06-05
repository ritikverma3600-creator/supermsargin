import bannerBg from "./../../assets/join-banner-bg.png";
import personImage from "./../../assets/join-person.png";

function JoinBanner() {
  return (
    <section className="w-full px-6 lg:px-10 py-8 bg-[#eef2f7]">
      <div className="relative rounded-2xl overflow-hidden h-[480px]">

        {/* BACKGROUND IMAGE */}
        <img
          src={bannerBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-[3px]"
        />

        {/* PERSON + TEXT side by side */}
        <div className="absolute inset-0 flex items-end lg:items-center">

          {/* PERSON IMAGE */}
          <img
            src={personImage}
            alt="Person"
            className="object-contain flex-shrink-0"
          />

          {/* TEXT */}
          <div className="flex flex-col gap-4 pb-8 px-12  lg:pb-0">
            <h1 className="text-[60px] text-white font-bold leading-tight">
              बनिए आम आदमी से <br />
              एक सफल बिज़नेसमैन
            </h1>
            <p className="text-gray-200 text-[16px] lg:text-[24px]">
              सुपरमार्जिन से थोक में खरीदें और अच्छे प्रॉफिट मार्जिन पर बेचें
            </p>
            <button className="bg-white text-gray-800 font-2xl px-8 py-3 rounded-md hover:bg-gray-100 w-fit cursor-pointer">
              अभी जुड़ें
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default JoinBanner;