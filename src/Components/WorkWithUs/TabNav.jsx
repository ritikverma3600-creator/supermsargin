function TabNav({ activeTab, setActiveTab }) {
  return (
    <div className="w-full border-b border-gray-200 px-6 lg:px-16 sticky top-0 bg-white z-20">
      <div className="flex gap-8">
        {["Opportunities", "Culture", "Benefits"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-4 text-[14px] font-medium border-b-2 transition-colors ${
              activeTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
export default TabNav;