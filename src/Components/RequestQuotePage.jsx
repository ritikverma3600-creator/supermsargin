import Navbar from "./LandingPage/Navbar";
import CategoryBar from "./LandingPage/CategoryBar";
function RequestQuotePage() {
  return (
    <>
    <Navbar/>
    <CategoryBar/>
    <div className="top-120 w-full bg-white min-h-screen px-6 lg:px-16 py-40">

      {/* TITLE */}
      <h2 className="text-center font-bold text-gray-800 text-xl tracking-wide mb-10">
        GET A QUOTE TODAY / YOUR BRANDS
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-6">

          {/* CATEGORY */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">
              Tell us about your category / business to help us find the right match.*
            </label>
            <select className="border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-500 outline-none">
              <option value="">Select Category</option>
              <option>Apparel</option>
              <option>Home Decor</option>
              <option>Kitchen & Dining</option>
              <option>Furniture</option>
              <option>Accessories</option>
            </select>
          </div>

          {/* QUANTITY */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-700">
              Please give an indication of quantities required per product (to match the right price and supplier)*
            </label>
            <select className="border border-gray-300 rounded-md px-4 py-3 text-sm text-gray-500 outline-none">
              <option value="">Select Quantity</option>
              <option>Below 50</option>
              <option>50 - 100</option>
              <option>100 - 500</option>
              <option>500 - 1000</option>
              <option>1000+</option>
            </select>
            <p className="text-xs text-gray-400">For lower quantities, we recommend you select products from our existing catalog</p>
          </div>

          {/* PERSONAL DETAILS */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-bold text-gray-800 text-sm">Please share your details so we can respond:</p>
              <p className="text-gray-500 text-xs">Your information is safe with us.</p>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Your name*</label>
              <input type="text" className="border border-gray-300 rounded-md px-4 py-3 text-sm outline-none" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Email address*</label>
              <input type="email" className="border border-gray-300 rounded-md px-4 py-3 text-sm outline-none" />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">Phone number</label>
              <input type="tel" className="border border-gray-300 rounded-md px-4 py-3 text-sm outline-none" />
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-5">

          {[
            { label: "Upload Image*", hint: "( JPEG,PNG,JPG,PDF ONLY & SIZE LESS THAN 1MB )" },
            { label: "Add Tech Pack*", hint: "( JPEG,PNG,JPG,PDF,XLS,XLSX ONLY & SIZE LESS THAN 1MB )" },
            { label: "Add Trims*", hint: "( JPEG,PNG,JPG,PDF,XLS,XLSX & SIZE LESS THAN 1MB )" },
            { label: "Add Measurements*", hint: "( JPEG,PNG,JPG,PDF,XLS,XLSX & SIZE LESS THAN 1MB )" },
            { label: "Add Logo*", hint: "( JPEG,PNG,JPG,PDF, FILE SIZE LESS THAN 1MB )" },
          ].map((field) => (
            <div key={field.label} className="flex flex-col gap-1">
              <label className="text-sm text-gray-700">
                {field.label} <span className="text-gray-400 text-xs">{field.hint}</span>
              </label>
              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                <label className="bg-gray-100 border-r border-gray-300 px-4 py-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-200 flex-shrink-0">
                  Choose File
                  <input type="file" className="hidden" />
                </label>
                <span className="px-4 text-sm text-gray-400 flex-1">No file chosen</span>
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* SUBMIT */}
      <div className="flex justify-center mt-10">
        <button className="bg-[#1a1456] text-white px-10 py-3 rounded-md font-medium hover:bg-[#2a2466]">
          Submit Detail
        </button>
      </div>

    </div></>
  );
}

export default RequestQuotePage;