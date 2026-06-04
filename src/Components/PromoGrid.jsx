// PromoGrid.jsx
const promoImages = [
  { label: "TOP SELLING PRODUCTS", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600" },
  { label: "ON FACTORY FLOOR", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600" },
  { label: "REPLENISH YOUR STOCK", image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600" },
];

function PromoGrid() {
  return (
    <section className="w-full px-6 lg:px-10 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {promoImages.map((promo) => (
          <div key={promo.label} className="relative rounded-xl overflow-hidden cursor-pointer group h-56">
            <img
              src={promo.image}
              alt={promo.label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40" />
            <span className="absolute bottom-4 left-4 text-white font-bold text-lg leading-tight">
              {promo.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PromoGrid;