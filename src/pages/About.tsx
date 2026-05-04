import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function About() {
  return (
    <div className="bg-background pt-24 pb-40">
      
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="max-w-3xl mx-auto"
        >
          <span className="text-gold tracking-[0.3em] uppercase text-[11px] font-semibold block mb-6">Our Heritage</span>
          <h1 className="text-7xl font-serif italic mb-8 leading-tight tracking-tight text-text-main">The <span className="not-italic uppercase">Experience</span></h1>
          <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
          <p className="text-[#999] text-sm tracking-wide leading-relaxed max-w-lg mx-auto">
            A dedication to the art of open-fire cooking and unparalleled hospitality. 
            Discover the passion and philosophy that shape Cozina Marray.
          </p>
        </motion.div>
      </section>

      {/* Philosophy Grid */}
      <main className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 border border-border-main">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="p-12 md:p-20 border-b md:border-b-0 md:border-r border-border-main flex flex-col justify-center bg-surface"
          >
            <span className="text-gold font-mono text-[10px] uppercase tracking-[0.3em] mb-8">01 &mdash; The Hearth</span>
            <h2 className="text-4xl font-serif text-text-main mb-6 leading-tight">Mastery of the <br/><span className="italic text-[#999]">Living Flame</span></h2>
            <p className="text-[#999] text-[12px] tracking-wide leading-relaxed">
              At the heart of Cozina Marray lies our custom-built hearth. Here, we embrace the primal element of fire, utilizing native wood and charcoal to impart distinct, complex flavors to our carefully sourced ingredients. It is an intuitive dance between chef and flame, requiring patience, respect, and deep understanding.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="h-[400px] md:h-auto relative overflow-hidden"
          >
            <img src="/images/cozina-de-marray/hearth-preparation.webp" alt="Hearth Preparation" className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-background/20"></div>
          </motion.div>

          <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={fadeInUp}
             className="h-[400px] md:h-auto relative overflow-hidden order-last md:order-none"
          >
            <img src="/images/cozina-de-marray/sustainable-sourcing.webp" alt="Sustainable Sourcing" className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute inset-0 bg-background/20"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="p-12 md:p-20 border-t md:border-l border-border-main flex flex-col justify-center bg-background"
          >
            <span className="text-gold font-mono text-[10px] uppercase tracking-[0.3em] mb-8">02 &mdash; Provenance</span>
            <h2 className="text-4xl font-serif text-text-main mb-6 leading-tight">Honoring the <br/><span className="italic text-[#999]">Origin</span></h2>
            <p className="text-[#999] text-[12px] tracking-wide leading-relaxed">
              We believe exceptional cuisine begins long before the kitchen. Our commitment to sustainable sourcing means we partner directly with local farmers, foragers, and fishermen who share our reverence for the land and sea. Every plate tells the story of its pristine origins.
            </p>
          </motion.div>

        </div>
      </main>

      {/* Atmosphere Feature */}
      <section className="mt-32 border-y border-border-main bg-surface relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-24 flex flex-col justify-center relative z-10 border-b lg:border-b-0 lg:border-r border-border-main bg-surface">
            <span className="text-gold font-mono text-[10px] uppercase tracking-[0.3em] mb-8">03 &mdash; Design</span>
            <h2 className="text-4xl md:text-5xl font-serif text-text-main mb-8 leading-tight">A Sanctuary of <br/><span className="italic text-[#999]">Refined Elegance</span></h2>
            <div className="w-12 h-px bg-border-main mb-8"></div>
            <p className="text-[#999] text-[12px] tracking-wide leading-relaxed">
              Designed to evoke both warmth and sophistication, the dining room at Cozina Marray is a meticulously curated environment. The interplay of raw materials—aged timber, burnished brass, and textured stone—reflects the elemental nature of our culinary approach, providing a serene backdrop for unforgettable gatherings.
            </p>
          </div>
          <div className="relative h-[400px] lg:h-auto min-h-[500px]">
            <img src="/images/cozina-de-marray/restaurant-atmosphere.webp" alt="Restaurant Atmosphere" className="absolute inset-0 w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 bg-background/30 mix-blend-multiply"></div>
            {/* Geometric Accent Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
              <div className="w-[300px] h-[300px] border border-gold rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
