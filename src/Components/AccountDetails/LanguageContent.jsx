import { useState } from "react";

function LanguageContent() {
  const languages = [
    { code: "EN", label: "English - EN" },
    { code: "HI", label: "हिन्दी - HI - अनुवाद" },
    { code: "PA", label: "ਪੰਜਾਬੀ - PA - ਅਨੁਵਾਦ" },
    { code: "MR", label: "मराठी - MR - भाषांतर" },
    { code: "KN", label: "ಕನ್ನಡ - KN - ಭಾಷಾಂತರ" },
    { code: "TE", label: "తెలుగు - TE - అనువాదం" },
    { code: "GU", label: "ગુજરાતી - GU - અનુવાદ" },
  ];

  const [selected, setSelected] = useState("EN");

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="font-bold text-[#1a1456] text-[24px]">Select Language</h2>
        <p className="text-gray-500 text-[12px] mt-1">Select The Language You Prefer For Browsing, Shopping</p>
      </div>

      {/* LANGUAGE OPTIONS */}
      <div className="flex flex-col">
        {languages.map((lang, index) => (
          <div key={lang.code}>
            <label className="flex items-center gap-3 py-4 cursor-pointer">
              <input
                type="radio"
                name="language"
                checked={selected === lang.code}
                onChange={() => setSelected(lang.code)}
                className="w-5 h-5 accent-[#1a1456]"
              />
              <span className="text-gray-700 text-[12px]">{lang.label}</span>
            </label>
            {index === 0 && <hr className="border-gray-200 w-72" />}
          </div>
        ))}
      </div>

      {/* UPDATE */}
      <div>
        <button className="bg-[#1a1456] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2a2466]">
          Update Preferences
        </button>
      </div>
    </div>
  );
}
export default LanguageContent;