import { motion } from "motion/react";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden border-b border-border-main">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/videos/cozina-de-marray/video-hero-poster.webp"
            className="w-full h-full object-cover"
          >
            <source src="/videos/cozina-de-marray/video-hero.mp4" type="video/mp4" />
          </video>
          {/* Blend video into black background */}
          <div className="absolute inset-0 bg-background/80" />
        </div>

        {/* Decorative Geometric Elements */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-[500px] md:w-[700px] h-[500px] md:h-[700px] border border-gold rounded-full"></div>
          <div className="absolute w-[600px] md:w-[850px] h-[600px] md:h-[850px] border border-gold rotate-45"></div>
        </div>

        <motion.div 
          className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="text-[11px] uppercase tracking-[0.5em] text-gold font-semibold block">Est. 2018 — Premium Dining</span>
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight tracking-tight text-text-main">
            The Art of Modern <br className="hidden md:block"/>
            <span className="not-italic uppercase">Cozina</span>
          </motion.h1>
          <motion.div variants={fadeInUp} className="w-24 h-px bg-gold mx-auto mb-8"></motion.div>
          <motion.p variants={fadeInUp} className="text-sm tracking-wide text-[#999] max-w-lg mx-auto leading-relaxed mb-12">
            Curating exceptional culinary journeys for the most discerning palates. From intimate gatherings to grand celebrations, we define the pinnacle of luxury service.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contacts" className="border border-gold bg-gold text-background px-10 py-4 uppercase tracking-widest text-[#0C0C0C] font-semibold hover:bg-transparent hover:text-gold transition-colors">
              Reservations
            </Link>
            <Link to="/about" className="border border-border-main text-text-main px-10 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-surface transition-colors backdrop-blur-sm">
              Experience
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Symmetrical Service Grid (Replacing some logic but adding design aesthetic) */}
      <section className="border-b border-border-main grid grid-cols-1 md:grid-cols-4 w-full bg-background relative z-20">
        <div className="border-b md:border-b-0 md:border-r border-border-main p-12 flex flex-col justify-between hover:bg-surface transition-colors group h-64">
          <span className="text-[10px] text-gold font-mono uppercase tracking-widest">01</span>
          <div>
            <h3 className="font-serif text-xl mb-2 text-text-main group-hover:text-gold transition-colors">Signature Menus</h3>
            <p className="text-[11px] text-[#777] leading-relaxed tracking-wider">A seasonal rotation of avant-garde fusion flavors.</p>
          </div>
        </div>
        <div className="border-b md:border-b-0 md:border-r border-border-main p-12 flex flex-col justify-between hover:bg-surface transition-colors group h-64">
          <span className="text-[10px] text-gold font-mono uppercase tracking-widest">02</span>
          <div>
            <h3 className="font-serif text-xl mb-2 text-text-main group-hover:text-gold transition-colors">Wine Cellar</h3>
            <p className="text-[11px] text-[#777] leading-relaxed tracking-wider">Exquisite pairings curated by world-class sommeliers.</p>
          </div>
        </div>
        <div className="border-b md:border-b-0 md:border-r border-border-main p-12 flex flex-col justify-between hover:bg-surface transition-colors group h-64">
          <span className="text-[10px] text-gold font-mono uppercase tracking-widest">03</span>
          <div>
            <h3 className="font-serif text-xl mb-2 text-text-main group-hover:text-gold transition-colors">Event Styling</h3>
            <p className="text-[11px] text-[#777] leading-relaxed tracking-wider">Transformative aesthetics tailored to your vision.</p>
          </div>
        </div>
        <div className="p-12 flex flex-col justify-between hover:bg-surface transition-colors group h-64">
          <span className="text-[10px] text-gold font-mono uppercase tracking-widest">04</span>
          <div>
            <h3 className="font-serif text-xl mb-2 text-text-main group-hover:text-gold transition-colors">Private Chef</h3>
            <p className="text-[11px] text-[#777] leading-relaxed tracking-wider">Unparalleled expertise in the comfort of your home.</p>
          </div>
        </div>
      </section>

      <main className="relative z-20 bg-background pt-32 pb-40">
        
        {/* Zigzag Section 1: Signature Grill */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative order-2 md:order-1"
            >
              <div className="aspect-[4/5] overflow-hidden border border-border-main p-2">
                <img src="/images/cozina-de-marray/signature-grill.webp" alt="Signature Grill" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
              {/* Decorative circle */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-gold/30 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                 <svg viewBox="0 0 100 100" className="w-full h-full fill-text-main/50">
                   <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                   <text fontSize="12" letterSpacing="3"><textPath href="#curve">SIGNATURE GRILL • PREMIUM CUTS • </textPath></text>
                 </svg>
              </div>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="order-1 md:order-2 space-y-8"
            >
              <motion.span variants={fadeInUp} className="text-gold tracking-[0.2em] uppercase text-xs font-bold block">The Main Event</motion.span>
              <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-light text-text-main leading-tight">Signature <br/> <span className="italic text-[#999]">Grill</span></motion.h2>
              <motion.p variants={fadeInUp} className="text-[#999] text-sm tracking-wide leading-relaxed max-w-md">
                Mastered by fire and seasoned with heritage. Our prime cuts are aged for 28 days and grilled over native charcoal to lock in a smoky, succulent flavor that defines the heart of Ginatilan.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link to="/menu" className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-semibold text-text-main border-b border-border-main pb-2 hover:border-gold hover:text-gold transition-colors group">
                   Explore Grill Menu 
                   <span className="w-4 h-[1px] bg-text-main group-hover:bg-gold transition-colors ml-2 block"></span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Zigzag Section 2: Morning Cafe */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-8 md:pl-16"
            >
              <motion.span variants={fadeInUp} className="text-gold tracking-[0.2em] uppercase text-xs font-bold block">Sun-Drenched Sips</motion.span>
              <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-light text-text-main leading-tight">Morning <br/> <span className="italic text-[#999]">Cafe</span></motion.h2>
              <motion.p variants={fadeInUp} className="text-[#999] text-sm tracking-wide leading-relaxed max-w-md">
                Start your day in our sun-lit sanctuary. From artisanal pour-overs to our signature bamboo-roasted lattes, every cup is a tribute to the early hours. Pair it with our fresh, house-baked pastries.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link to="/menu" className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase font-semibold text-text-main border-b border-border-main pb-2 hover:border-gold hover:text-gold transition-colors group">
                   Breakfast Selection
                   <span className="w-4 h-[1px] bg-text-main group-hover:bg-gold transition-colors ml-2 block"></span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden ml-auto">
                <img src="/images/cozina-de-marray/morning-cafe.webp" alt="Morning Cafe" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Call to action with menu highlights */}
        <section className="mt-32 max-w-7xl mx-auto px-8 relative">
          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={fadeInUp}
             className="text-center mb-24"
          >
             <span className="text-gold tracking-[0.2em] uppercase text-xs font-bold block mb-4">Taste the Heritage</span>
             <h2 className="text-5xl md:text-7xl font-light">Chef's <span className="italic text-[#999]">Selection</span></h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: "Smoked Beef Ribs", price: "₱850", desc: "12-hour slow-cooked ribs with a house-made coffee rub and hickory glaze.", img: "smoked-beef-ribs.webp" },
              { title: "Seafood Linguine", price: "₱620", desc: "Fresh coastal catch tossed in a sun-dried tomato and white wine reduction.", img: "seafood-linguine.webp", pushDown: true },
              { title: "Heritage Salad", price: "₱450", desc: "Locally sourced organic greens, roasted heirloom beets, and whipped goat cheese.", img: "heritage-salad.webp" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeInUp}
                className={`group ${item.pushDown ? 'md:mt-16' : ''}`}
              >
                <div className="aspect-[3/4] overflow-hidden mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={`/images/cozina-de-marray/${item.img}`} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out" />
                </div>
                <div className="flex justify-between items-Baseline border-b border-border-main pb-4 mb-4">
                  <h3 className="text-2xl font-serif">{item.title}</h3>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-gold">{item.price}</span>
                </div>
                <p className="text-[#777] text-[11px] leading-relaxed tracking-wider">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-32 text-center">
            <Link to="/menu" className="inline-block border border-border-main px-12 py-5 text-[10px] uppercase tracking-[0.3em] font-medium hover:bg-surface hover:text-gold transition-colors">
              Explore Full Menu
            </Link>
          </div>
        </section>

      </main>
    </div>
  );
}
