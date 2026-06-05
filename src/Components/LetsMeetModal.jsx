import { useState } from "react";
import { FaClock, FaVideo, FaChevronLeft, FaChevronRight, FaTimes, FaGlobe } from "react-icons/fa";
import logoImage from "./../assets/images.png";

const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

function LetsMeetModal({ onClose }) {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 5)); // June 2025
  const [selectedDay, setSelectedDay] = useState(10);

  const availableDays = [10, 11, 12, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 30];

  const monthName = currentMonth.toLocaleString("default", { month: "long" });
  const year = currentMonth.getFullYear();

  // Get days in month and first day offset
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const offset = firstDay === 0 ? 6 : firstDay - 1; // Monday start

  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={onClose}>
      <div className="bg-white rounded-xl shadow-2xl w-[680px] max-w-[95vw] flex overflow-hidden relative" onClick={(e) => e.stopPropagation()}>

        {/* POWERED BY CALENDLY BADGE */}
        <div className="absolute top-0 right-0 bg-[#1a1456] text-white text-[12px] px-3 py-4 rounded-bl-xl font-medium" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          powered by Calendly
        </div>

        {/* LEFT PANEL */}
        <div className="w-[280px] flex-shrink-0 border-r border-gray-200 p-6 flex flex-col gap-4">
          <img src={logoImage} alt="Logo" className="w-36 object-contain" />
          <div>
            <p className="text-gray-500 text-[14px]">Support Team</p>
            <h3 className="font-bold text-gray-800 text-[20px]">Supermargins Meeting</h3>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-gray-600 text-[14px]">
              <FaClock className="text-gray-400" />
              <span>30 min</span>
            </div>
            <div className="flex items-start gap-2 text-gray-600 text-[14px]">
              <FaVideo className="text-gray-400 mt-0.5 flex-shrink-0" />
              <span>Web conferencing details provided upon confirmation.</span>
            </div>
          </div>
          <p className="text-gray-700 text-[14px] font-medium leading-relaxed">
            Hello thanks for your interests in supermargins, your factory direct gateway to wholesale shopping. we look forward to meeting you soon.
          </p>
          <button className="text-[#1a1456] text-[14px] underline mt-auto">Cookie settings</button>
        </div>

        {/* RIGHT PANEL — CALENDAR */}
        <div className="flex-1 p-6 flex flex-col gap-4">
          <h3 className="font-bold text-gray-800 text-[18px]">Select a Date & Time</h3>

          {/* MONTH NAV */}
          <div className="flex items-center justify-between mb-2">
            <button onClick={prevMonth} className="text-gray-400 hover:text-gray-700 p-1">
              <FaChevronLeft />
            </button>
            <span className="font-medium text-gray-800">{monthName} {year}</span>
            <button onClick={nextMonth} className="text-gray-400 hover:text-gray-700 p-1 bg-blue-50 rounded-full w-8 h-8 flex items-center justify-center">
              <FaChevronRight className="text-blue-500" />
            </button>
          </div>

          {/* DAY HEADERS */}
          <div className="grid grid-cols-7 mb-1">
            {DAYS.map((d) => (
              <div key={d} className="text-center text-[12px] text-gray-400 font-medium py-1">{d}</div>
            ))}
          </div>

          {/* CALENDAR GRID */}
          <div className="grid grid-cols-7 gap-y-1">
            {/* Empty offset cells */}
            {[...Array(offset)].map((_, i) => <div key={`empty-${i}`} />)}

            {/* Day cells */}
            {[...Array(daysInMonth)].map((_, i) => {
              const day = i + 1;
              const isAvailable = availableDays.includes(day);
              const isSelected = selectedDay === day;

              return (
                <div key={day} className="flex items-center justify-center">
                  <button
                    onClick={() => isAvailable && setSelectedDay(day)}
                    disabled={!isAvailable}
                    className={`w-9 h-9 rounded-full text-[14px] font-medium transition-colors relative
                      ${isSelected ? "bg-[#1a1456] text-white" : ""}
                      ${isAvailable && !isSelected ? "text-[#1a1456] hover:bg-blue-50" : ""}
                      ${!isAvailable ? "text-gray-300 cursor-default" : ""}
                    `}
                  >
                    {day}
                    {isAvailable && !isSelected && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#1a1456] rounded-full" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* TIMEZONE */}
          <div className="flex items-center gap-2 mt-2 text-gray-500 text-[14px]">
            <FaGlobe className="text-gray-400" />
            <span>Time zone</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 text-[14px]">
            <FaGlobe className="text-gray-400" />
            <span>India Standard Time (1:59pm) ▾</span>
          </div>

        </div>

        {/* CLOSE */}
        <button onClick={onClose} className="absolute top-3 right-8 text-gray-400 hover:text-gray-700">
          <FaTimes />
        </button>

      </div>
    </div>
  );
}

export default LetsMeetModal;