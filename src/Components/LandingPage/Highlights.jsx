function Highlights() {
  const stats = [
    { value: "339+", label: "Active Buyers" },
    { value: "820+", label: "Inquiries Weekly" },
    { value: "10K", label: "Products" },
  ];

  return (
    <section className="w-full bg-[#f0f0f5] py-10 px-12">

      {/* TITLE */}
      <h1 className="text-center font-bold text-[#1a1456] mb-8 text-4xl">
        Marketplace Highlights
      </h1>

      {/* STATS */}
      <div className="flex items-start justify-center gap-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-1  pt-6 border-t border-gray-600"
          >
            <span
              className="text-3xl md:text-8xl font-light"
              style={{
                background: "linear-gradient(to right, #3b3bff, #cc3bcc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {stat.value}
            </span>
            <span className="text-gray-600 text-xl md:text-3xl mt-3">{stat.label}</span>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Highlights;