import { Link } from "react-router-dom";
import Navbar from "./LandingPage/Navbar";
import Footer from "./LandingPage/Footer";
import Copyright from "./LandingPage/Copyright";
import policies from  "./../data/policies.json"

function PolicyPage({ policyKey }) {
  const data = policies[policyKey];

  if (!data) return <div className="p-16 text-center text-gray-500">Policy not found.</div>;

  return (
    <><Navbar/>
    <div className="w-full bg-white min-h-screen mt-20">

      {/* BREADCRUMB */}
      <div className="px-6 lg:px-16 py-3 flex items-center gap-2 text-[14px] text-gray-500">
        <Link to="/" className="hover:text-[#1a1456]">Home</Link>
        <span>»</span>
        <span className="font-medium text-gray-800">{data.title}</span>
      </div>

      {/* HERO */}
      <section className="w-full bg-[#2d2b6b] px-6 lg:px-16 py-14 text-center">
        <h1 className="text-white font-bold text-[30px] mb-3">{data.title}</h1>
        <p className="text-gray-300 text-[16px]">
          {data.subtitle}{" "}
          <span className="text-orange-400">Effective Date: {data.effectiveDate}</span>
        </p>
      </section>

      {/* INTRO */}
      <section className="px-6 lg:px-32 py-10 border-b border-gray-100">
        <p className="text-gray-600 text-[14px] leading-relaxed">{data.intro}</p>
      </section>

      {/* SECTIONS */}
      <section className="px-6 lg:px-32 py-10 flex flex-col gap-10">
        {data.sections.map((section, i) => (
          <div key={i}>
            <h2 className="font-bold text-gray-800 text-[20px] mb-3">{section.title}</h2>
            <p className="text-gray-600 text-[14px] leading-relaxed">{section.content}</p>
          </div>
        ))}
      </section>

    </div>
    <Footer/>
    <Copyright/>
    </>
  );
}

export default PolicyPage;