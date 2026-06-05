const categories = [
  { label: "APPAREL", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600" },
  { label: "HOME DECOR", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600"},
  { label: "KITCHEN & DININGS", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600" },
  { label: "STORAGE", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600" },
  { label: "SEASONAL GIFTS", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600" },
  { label: "FURNITURE", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600" },
];

function Categories() {
  return (
    <section className="w-full px-10 md:px-20 lg:px-30 py-10 bg-white">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {categories.map((cat, index) => (
          <div key={index} className="relative rounded-lg overflow-hidden cursor-pointer group mx-2">

            {/* IMAGE */}
            <img
              src={cat.image}
              alt={cat.label}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* BOTTOM BAR */}
            <div className="absolute bottom-0 left-0 right-0 bg-[#2e2d7a] bg-opacity-100 flex items-center justify-between px-5 py-4">
              <span className="text-white font-bold text-[14px] tracking-wide">
                {cat.label}
              </span>
              <button className="bg-white text-gray-800 text-[14px] font-medium px-5 py-2 rounded-sm hover:bg-gray-100">
                Shop Now
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Categories;