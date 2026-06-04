import msmeImage from "./../../assets/msme.png";
import gstImage from "./../../assets/gst.png";

function Features() {
  return (
    <section className="w-full bg-[#eef2f7] px-6 lg:px-10 py-12 flex flex-col gap-12">

      {/* ROW 1 — text left, image right */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="font-bold text-[#1a1456] text-2xl lg:text-3xl">
            Empowering MSMEs Across India
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Supermargin is committed to strengthening India's MSME sector by providing a Tech enabled
            supply chain platform to buyers, and increasing profit margins. Direct access to nationwide
            market for small manufacturers. By providing access of tech enabled supply chain and simplified
            compliance processes, we aim to help MSMEs scale efficiently and compete in a rapidly evolving
            marketplace.
          </p>
        </div>
        <div className="flex-1 lg:flex justify-end hidden lg:flex">
          <img src={msmeImage} alt="MSMEs" className="w-full max-w-lg rounded-xl object-cover" />
        </div>
      </div>

      {/* ROW 2 — image left, text right */}
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <img src={gstImage} alt="GST" className="w-full max-w-lg rounded-xl object-cover" />
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <h2 className="font-bold text-[#1a1456] text-2xl lg:text-3xl">
            Get GST Invoice on All Your Purchase
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Get a GST invoice on all your B2B purchases and unlock the benefits of input tax credit for your
            business. Whether you're buying supplies, equipment, or services, a GST-compliant invoice
            ensures transparency and helps streamline your accounting and tax filing processes. Make your
            business purchases more efficient and cost-effective by opting for vendors who provide proper
            GST billing.
          </p>
        </div>
      </div>

    </section>
  );
}

export default Features;