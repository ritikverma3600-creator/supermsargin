import { useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaClock, FaBriefcase, FaChevronRight, FaChevronLeft, FaLinkedin, FaHandsHelping, FaWallet, FaDumbbell, FaRocket, FaBirthdayCake, FaShieldAlt, FaBullseye, FaUmbrella, FaGraduationCap, FaMoon, FaUser, FaHandHoldingHeart } from "react-icons/fa";
import jobs from "./../../data/jobs.json";
import departments from "./../../data/departments.json"
import locations from "./../../data/locations.json"

function OpportunitiesTab() {
  const [deptFilters, setDeptFilters] = useState([]);
  const [locFilters, setLocFilters] = useState([]);

  const toggleFilter = (arr, setArr, val) =>
    setArr(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);

  return (
    <div className="px-6 lg:px-16 py-12">
      <h2 className="text-center font-bold text-gray-800 text-[30px] mb-2">
        {jobs.length} Jobs, across all teams & all locations
      </h2>

      {/* SEARCH */}
      <div className="flex justify-end mb-8">
        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden w-full max-w-lg bg-[#f5f7ff]">
          <input
            type="text"
            placeholder="Search for your seat in the Supermargins"
            className="flex-1 px-4 py-3 text-[14px] outline-none bg-transparent text-gray-600"
          />
          <button className="bg-[#1a1456] text-white px-5 py-3 flex items-center gap-2 text-[14px] font-medium hover:bg-[#2a2466]">
            <FaSearch /> Search
          </button>
        </div>
      </div>

      <div className="flex gap-6">
        {/* SIDEBAR FILTERS */}
        <div className="w-[260px] flex-shrink-0 border border-gray-200 rounded-xl p-5 self-start">

          {/* DEPARTMENT */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <span className="font-bold text-gray-800 text-[14px]">Department</span>
              <FaChevronRight className="text-gray-400 text-[12px] rotate-90" />
            </div>
            {departments.map((d) => (
              <label key={d.name} className="flex items-center justify-between py-1.5 cursor-pointer">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={deptFilters.includes(d.name)}
                    onChange={() => toggleFilter(deptFilters, setDeptFilters, d.name)}
                    className="accent-[#1a1456]"
                  />
                  <span className="text-[14px] text-gray-600">{d.name}</span>
                </div>
                <span className="text-[12px] text-gray-400">({d.count})</span>
              </label>
            ))}
          </div>

          {/* LOCATION */}
          <div>
            <span className="font-bold text-gray-800 text-[14px] block mb-3">Location</span>
            {locations.map((l) => (
              <label key={l.name} className="flex items-center justify-between py-1.5 cursor-pointer">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={locFilters.includes(l.name)}
                    onChange={() => toggleFilter(locFilters, setLocFilters, l.name)}
                    className="accent-[#1a1456]"
                  />
                  <span className="text-[14px] text-gray-600">{l.name}</span>
                </div>
                <span className="text-[12px] text-gray-400">({l.count})</span>
              </label>
            ))}
            <button className="text-[#1a1456] text-[14px] font-medium mt-2">Show More</button>
          </div>

        </div>

        {/* JOB LISTINGS */}
        <div className="flex-1 flex flex-col gap-4">
          {jobs.map((job) => (
            <div key={job.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-sm transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-[#1a1456] text-[18px]">{job.title}</h3>
                <button className="flex items-center gap-1 border border-gray-200 text-gray-600 text-[14px] px-4 py-2 rounded-md hover:bg-gray-50 flex-shrink-0 ml-4">
                  More Info <FaChevronRight className="text-[12px]" />
                </button>
              </div>
              <div className="flex items-center gap-4 text-gray-500 text-[14px] mb-3">
                <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-[12px]" />{job.location}</span>
                <span className="flex items-center gap-1"><FaClock className="text-[12px]" />{job.type}</span>
                <span className="flex items-center gap-1"><FaBriefcase className="text-[12px]" />{job.tag}</span>
              </div>
              <p className="text-gray-500 text-[14px] leading-relaxed line-clamp-2">{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default OpportunitiesTab;