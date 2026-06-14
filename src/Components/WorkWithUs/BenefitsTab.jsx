import benefitCards from "./../../data/benefitcards.json";
import detailedBenefits from "./../../data/detailedbenefits.json"
import { FaHeart,  FaCreditCard,  FaDumbbell,  FaRocket, FaGlassCheers, FaBirthdayCake, FaShieldAlt, FaBullseye, FaHandshake, FaUserTag, FaHeartbeat, FaGraduationCap, FaUmbrellaBeach } from "react-icons/fa";
function BenefitsTab() {
    const iconMap = {
  FaHeart,
  FaCreditCard,
  FaDumbbell,
  FaRocket,
  FaGlassCheers,
  FaBirthdayCake,
  FaShieldAlt,
  FaBullseye,
  FaHandshake, FaUserTag, FaHeartbeat, FaGraduationCap, FaUmbrellaBeach
};
  return (
    <div>
      {/* BENEFIT CARDS */}
      <section className="px-6 lg:px-16 py-12 bg-white">
        <h2 className="text-center font-bold text-[#1a1456] text-[30px] mb-3">What benefits are waiting for you?</h2>
        <p className="text-center text-gray-500 text-[14px] mb-10">
          Supermargin offers a variety of hand-picked benefits that<br />you can take advantage of!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto my-3">
          {benefitCards.map((b) => { 
            const Icon = iconMap[b.icon];
          return (
            <div key={b.label} className="bg-blue-50 p-5 flex items-center gap-3">
              <Icon className="text-[30px] text-gray-700" />
              <span className="font-medium text-gray-700 text-[14px]">{b.label}</span>
            </div>
          )})}
        </div>
      </section>

      {/* DETAILED BENEFITS */}
      <section className="px-10 lg:px-30 py-12 bg-[#f5f7ff]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {detailedBenefits.map((b) => {
            const Icon = iconMap[b.icon];
            return(
            <div key={b.title} className="flex items-start gap-4">
              <div className={`w-14 h-14 ${b.bg} bg-gray-200 rounded-xl flex items-center justify-center text-[24px] flex-shrink-0`}>
              <Icon className="text-[30px]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-[14px] mb-2">{b.title}</h3>
                <p className="text-gray-500 text-[12px] leading-relaxed">{b.desc}</p>
              </div>
            </div>
          )})}
        </div>
      </section>
    </div>
  );
}
export default BenefitsTab;