import CareersHero from "./CareersHero";
import OpportunitiesTab from "./OpportunitiesTab";
import CultureTab from "./CultureTab";
import BenefitsTab from "./BenefitsTab";
import { useState } from "react";
import TabNav from "./TabNav";
import Navbar from "../LandingPage/Navbar";
import Footer from "../LandingPage/Footer";
import Copyright from "../LandingPage/Copyright";
function WorkWithUsPage() {
  const [activeTab, setActiveTab] = useState("Opportunities");

  return (
    <>
    <Navbar/>
    <div className="w-full bg-white min-h-screen mt-20 mb-3">

      {/* BREADCRUMB */}
      <div className="px-6 lg:px-16 py-3 flex items-center gap-2 text-[14px] text-gray-500">
        <span className="cursor-pointer hover:text-[#1a1456]">Home</span>
        <span>»</span>
        <span className="font-medium text-gray-800">Careers</span>
      </div>

      <CareersHero />
      <TabNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "Opportunities" && <OpportunitiesTab />}
      {activeTab === "Culture" && <CultureTab />}
      {activeTab === "Benefits" && <BenefitsTab />}

    </div>
    <Footer/>
    <Copyright/>
    </>
  );
}

export default WorkWithUsPage;