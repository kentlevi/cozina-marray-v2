import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const menuItems = [
  // MORNING CAFE
  { id: 1, name: "Signature Espresso", price: "₱180", category: "MORNING CAFE", description: "Rich dark roast with velvet crema, sourced from high-altitude volcanic soil.", image: "/images/cozina-de-marray/signature-espresso.webp" },
  { id: 2, name: "Pastry Basket", price: "₱450", category: "MORNING CAFE", description: "Selection of house-made buttery croissants and seasonal fruit danishes.", image: "/images/cozina-de-marray/pastry-basket.webp" },
  { id: 3, name: "Ginatilan Hot Choco", price: "₱150", category: "MORNING CAFE", description: "Traditional local tablea chocolate frothed to perfection.", image: "/images/cozina-de-marray/ginatilan-hot-choco.webp" },
  // SIGNATURE GRILL
  { id: 4, name: "Grilled Sea Bass", price: "₱1,250", category: "SIGNATURE GRILL", description: "Fresh caught, herb crusted with charred lemon and sea salt flakes.", image: "/images/cozina-de-marray/grilled-sea-bass.webp" },
  { id: 5, name: "Wagyu Ribeye", price: "₱3,200", category: "SIGNATURE GRILL", description: "Aged 28 days, marble score 7+, finished with roasted garlic bone marrow butter.", image: "/images/cozina-de-marray/wagyu-ribeye.webp" },
  { id: 6, name: "Truffle Tagliatelle", price: "₱850", category: "SIGNATURE GRILL", description: "Hand-rolled daily, creamy parmesan emulsion, fresh shaved seasonal truffles.", image: "/images/cozina-de-marray/truffle-tagliatelle.webp" },
  { id: 7, name: "Pan-Seared Scallops", price: "₱920", category: "SIGNATURE GRILL", description: "Hokkaido scallops, sweet pea purée, mint oil, and crispy serrano ham shards.", image: "/images/cozina-de-marray/pan-seared-scallops.webp" },
  { id: 8, name: "Heritage Smoked Pork", price: "₱780", category: "SIGNATURE GRILL", description: "Slow-smoked for 24 hours over native wood, served with a citrus soy glaze.", image: "/images/cozina-de-marray/heritage-smoked-pork.webp" },
  { id: 9, name: "Balsamic Glazed Salmon", price: "₱980", category: "SIGNATURE GRILL", description: "Pan-seared Atlantic salmon with a honey-balsamic reduction.", image: "/images/cozina-de-marray/balsamic-glazed-salmon.webp" },
  // EVENING BAR
  { id: 10, name: "Evening Botanical", price: "₱420", category: "EVENING BAR", description: "Infused small-batch gin with lavender, elderflower, and artisanal tonic.", image: "/images/cozina-de-marray/evening-botanical.webp" },
  { id: 11, name: "Heirloom Burrata", price: "₱580", category: "EVENING BAR", description: "Creamy burrata, colorful heirloom tomatoes, aged balsamic, and basil crystals.", image: "/images/cozina-de-marray/heirloom-burrata.webp" },
  { id: 12, name: "Native Craft Beer", price: "₱280", category: "EVENING BAR", description: "Small-batch amber ale brewed with local honey and roasted malts.", image: "/images/cozina-de-marray/native-craft-beer.webp" }
];

const cinematicShorts = [
  { id: 1, title: 'The Living Fire', video: '/videos/campain/The_Art_of_the_Living_Fire_version_1.mp4', poster: '/videos/campain/The_Art_of_the_Living_Fire_version_1_poster.webp', subtitle: 'CHAPTER I' },
  { id: 2, title: 'Honor The Flame', video: '/videos/campain/Honor_Her_With_The_Flame_version_1.mp4', poster: '/videos/campain/Honor_Her_With_The_Flame_version_1_poster.webp', subtitle: 'CHAPTER II' },
  { id: 3, title: 'Modern Flame Mastery', video: '/videos/campain/Mastery_Within_the_Modern_Flame_version_1.mp4', poster: '/videos/campain/Mastery_Within_the_Modern_Flame_version_1_poster.webp', subtitle: 'CHAPTER III' },
  { id: 4, title: 'Refined by Coal', video: '/videos/campain/Refined_by_the_Coal_version_1.mp4', poster: '/videos/campain/Refined_by_the_Coal_version_1_poster.webp', subtitle: 'CHAPTER IV' },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const categories = ["ALL", "MORNING CAFE", "SIGNATURE GRILL", "EVENING BAR"];
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth / 2 : current.offsetWidth / 2;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  const filteredItems = activeCategory === "ALL" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-background pt-24 pb-40">
      
      {/* Menu Header */}
      <section className="text-center py-20 px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="max-w-3xl mx-auto"
        >
          <span className="text-gold tracking-[0.3em] uppercase text-[11px] font-semibold block mb-6">Culinary Journey</span>
          <h1 className="text-7xl font-serif italic mb-8 leading-tight tracking-tight text-text-main">Our <span className="not-italic uppercase">Menu</span></h1>
          <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
          <p className="text-[#999] text-sm tracking-wide leading-relaxed max-w-lg mx-auto">
            A curated selection of our finest offerings, blending local heritage with modern techniques. 
            Prepared fresh to order, just for you.
          </p>
        </motion.div>
      </section>

      {/* Categories Nav */}
      <nav className="sticky top-[80px] z-40 bg-background/90 backdrop-blur-md border-y border-border-main mb-20">
        <div className="max-w-5xl mx-auto px-6 overflow-x-auto hide-scrollbar">
          <div className="flex items-center justify-center min-w-max gap-8 md:gap-16 py-6 px-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] font-medium tracking-[0.3em] uppercase transition-all duration-300 relative ${
                  activeCategory === cat ? "text-text-main" : "text-[#777] hover:text-text-main"
                }`}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-6 left-0 right-0 h-[1px] bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Menu Grid */}
      <main className="max-w-6xl mx-auto px-6 mb-40 min-h-[500px]">
        <motion.div 
          layout
          className="grid md:grid-cols-2 gap-x-16 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.div
                layout
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(4px)", scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="flex gap-6 group"
              >
                <div className="w-28 h-32 flex-shrink-0 overflow-hidden filter grayscale group-hover:grayscale-0 transition-all duration-500 border border-border-main p-1">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex-grow flex flex-col justify-center">
                  <div className="flex justify-between items-baseline mb-2 border-b border-border-main pb-2">
                    <h3 className="font-serif text-xl tracking-wide text-text-main group-hover:text-gold transition-colors">{item.name}</h3>
                    <span className="text-[10px] text-gold font-mono uppercase tracking-wider">{item.price}</span>
                  </div>
                  <p className="text-[#999] text-[11px] leading-relaxed tracking-wider mt-1 text-balance">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Cinematic Shorts Concept */}
      <section className="py-24 border-y border-border-main bg-background">
        <div className="max-w-screen-2xl mx-auto px-6 mb-16 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="space-y-4">
            <span className="text-gold tracking-[0.3em] uppercase text-[11px] font-semibold block">Cinematic Shorts</span>
            <h2 className="text-4xl md:text-6xl font-light font-serif text-text-main">The Living <span className="italic text-[#999]">Flame</span></h2>
          </div>
          <div className="flex items-center gap-8">
            <p className="text-[#999] text-sm tracking-wide leading-relaxed max-w-sm text-center md:text-left">
              Experience the art and precision behind our fire-mastered dishes in these short visual journeys.
            </p>
            <div className="hidden md:flex gap-4">
              <button onClick={() => scroll('left')} className="p-4 border border-border-main text-[#777] hover:text-gold hover:border-gold transition-colors" aria-label="Scroll Left">
                <ChevronLeft size={16} />
              </button>
              <button onClick={() => scroll('right')} className="p-4 border border-border-main text-[#777] hover:text-gold hover:border-gold transition-colors" aria-label="Scroll Right">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div ref={carouselRef} className="flex overflow-x-auto gap-12 px-6 hide-scrollbar max-w-screen-2xl mx-auto snap-x snap-mandatory scroll-smooth">
          {cinematicShorts.map(short => (
            <div
              key={short.id}
              className="min-w-[85vw] md:min-w-[30vw] aspect-[9/16] relative overflow-hidden group snap-center bg-surface border border-border-main p-2 focus:outline-none focus:border-gold transition-colors"
              tabIndex={0}
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector('video');
                if (video) video.play().catch(() => {});
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector('video');
                if (video) {
                  video.pause();
                  video.currentTime = 0;
                }
              }}
              onFocus={(e) => {
                const video = e.currentTarget.querySelector('video');
                if (video) video.play().catch(() => {});
              }}
              onBlur={(e) => {
                const video = e.currentTarget.querySelector('video');
                if (video) {
                  video.pause();
                  video.currentTime = 0;
                }
              }}
            >
              <div className="w-full h-full relative overflow-hidden pointer-events-none">
                <video
                  loop
                  muted
                  playsInline
                  poster={short.poster}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 group-focus:scale-105"
                >
                  <source src={short.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-background/40 group-hover:bg-transparent group-focus:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <span className="text-gold tracking-[0.3em] uppercase text-[10px] block mb-2 font-semibold delay-100 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 transition-all">
                    {short.subtitle}
                  </span>
                  <h3 className="text-text-main font-serif text-3xl font-light delay-200 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100 transition-all">
                    {short.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
