import { FaUpload } from "react-icons/fa";

function UploadKYCContent() {
  const docs = [
    { label: "Business PAN Number", value: "SKJHD224" },
    { label: "TAN Number", value: "SKJHD224" },
    { label: "GST Number", value: "27AADCB2230M1ZT" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-[#1a1456] text-[24px]">Upload & Update Your KYC Docs</h2>

      {/* ROWS */}
      <div className="flex flex-col gap-4">
        {docs.map((doc) => (
          <div key={doc.label} className="grid grid-cols-2 gap-6 items-center">

            {/* INPUT */}
            <div className="relative border border-gray-300 rounded-md px-3 pt-5 pb-2">
              <span className="absolute -top-2.5 left-3 bg-white text-[12px] text-gray-500 px-1">{doc.label}</span>
              <input
                type="text"
                defaultValue={doc.value}
                className="w-full outline-none text-[14px] text-gray-700"
              />
            </div>

            {/* UPLOAD */}
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-80">
              <div className="w-10 h-10 rounded-full border-2 border-[#1a1456] flex items-center justify-center flex-shrink-0">
                <FaUpload className="text-[#1a1456] text-[14px]" />
              </div>
              <span className="text-gray-400 text-[14px]">Upload or drag and dro JPEG, PNG, JPG</span>
            </div>

          </div>
        ))}
      </div>

      {/* UPDATE */}
      <div>
        <button className="cursor-pointer bg-[#1a1456] text-white px-8 py-3 rounded-md font-medium hover:bg-[#2a2466]">
          Update
        </button>
      </div>

    </div>
  );
}
export default UploadKYCContent;