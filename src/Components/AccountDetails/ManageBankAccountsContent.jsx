function FloatingInput({ label, required, value, prefix }) {
  return (
    <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2">
      <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">
        {label}{required && <span className="text-red-500">*</span>}
      </span>
      <div className="flex items-center gap-1">
        {prefix && <span className="text-gray-500 text-[14px]">{prefix}</span>}
        <input
          type="text"
          defaultValue={value}
          className="w-full outline-none text-[14px] text-gray-700 bg-transparent"
        />
      </div>
    </div>
  );
}

function FloatingSelect({ label, value }) {
  return (
    <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2">
      <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">{label}</span>
      <select className="w-full outline-none text-[14px] text-gray-700 bg-transparent">
        <option>{value}</option>
      </select>
    </div>
  );
}
function ManageBankAccountsContent() {
  const accounts = [
    { id: 1, name: "ashish kumar srvastava", bank: "pnb", ifsc: "PUNB0019100", country: "United States", accountNo: "0191000109519121", city: "los angeles", status: "Active" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-[#1a1456] text-[24px]">Banking Details</h2>

      {/* FORM */}
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FloatingInput label="Account Holder Name*" value="" />
          <FloatingInput label="Bank Name*" value="" />
          <FloatingInput label="IFSC Code*" value="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <FloatingInput label="Account Number" value="" />
          <FloatingInput label="City" value="" />
          <button className="bg-gray-400 text-white py-3 rounded-md font-medium cursor-not-allowed">
            Verified
          </button>
        </div>
        <div>
          <button className="bg-[#1a1456] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2a2466]">
            Update
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div className="border border-gray-200 rounded-lg overflow-hidden mt-4">
        <table className="w-full text-[14px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left px-4 py-3 text-gray-600 font-medium">ID</th>
              <th className="text-left px-4 py-3 text-gray-600 font-medium">Account Holder Name</th>
              <th className="text-left px-4 py-3 text-gray-600 font-medium">Bank Name</th>
              <th className="text-left px-4 py-3 text-gray-600 font-medium">Swift Code/Ifsc Code</th>
              <th className="text-left px-4 py-3 text-gray-600 font-medium">COUNTRY</th>
              <th className="text-left px-4 py-3 text-gray-600 font-medium">Account No</th>
              <th className="text-left px-4 py-3 text-gray-600 font-medium">CITY</th>
              <th className="text-left px-4 py-3 text-gray-600 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acc) => (
              <tr key={acc.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-600">{acc.id}</td>
                <td className="px-4 py-3 text-gray-600">{acc.name}</td>
                <td className="px-4 py-3 text-gray-600">{acc.bank}</td>
                <td className="px-4 py-3 text-gray-600">{acc.ifsc}</td>
                <td className="px-4 py-3 text-gray-600">{acc.country}</td>
                <td className="px-4 py-3 text-gray-600">{acc.accountNo}</td>
                <td className="px-4 py-3 text-gray-600">{acc.city}</td>
                <td className="px-4 py-3">
                  <span className="bg-green-600 text-white text-[12px] px-3 py-1 rounded-md">{acc.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
export default ManageBankAccountsContent;