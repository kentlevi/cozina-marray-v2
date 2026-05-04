import { useState } from "react";
import { motion } from "motion/react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function Contacts() {
  const [formState, setFormState] = useState({ name: '', email: '', date: '', guests: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormState({ name: '', email: '', date: '', guests: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-background pt-24 pb-40 min-h-screen">
      
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="max-w-3xl mx-auto"
        >
          <span className="text-gold tracking-[0.3em] uppercase text-[11px] font-semibold block mb-6">Concierge</span>
          <h1 className="text-7xl font-serif italic mb-8 leading-tight tracking-tight text-text-main">Get in <span className="not-italic uppercase">Touch</span></h1>
          <div className="w-24 h-px bg-gold mx-auto mb-8"></div>
          <p className="text-[#999] text-sm tracking-wide leading-relaxed max-w-lg mx-auto">
            Whether inquiring about a private event, making a reservation, or requesting more information, our concierge team is at your service.
          </p>
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-border-main">
          
          {/* Contact Information */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-2 p-12 md:p-16 border-b lg:border-b-0 lg:border-r border-border-main bg-surface flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-serif text-gold mb-12 uppercase tracking-widest">Directory</h2>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-[10px] text-text-main font-mono uppercase tracking-[0.3em] mb-4 border-b border-border-main pb-2">Location</h3>
                  <p className="text-[#999] text-[12px] tracking-wide leading-relaxed">
                    123 Heritage Way<br/>
                    Ginatilan, Cebu<br/>
                    Philippines
                  </p>
                </div>

                <div>
                  <h3 className="text-[10px] text-text-main font-mono uppercase tracking-[0.3em] mb-4 border-b border-border-main pb-2">Direct Lines</h3>
                  <div className="text-[#999] text-[12px] tracking-wide leading-relaxed space-y-2">
                    <p className="flex justify-between"><span>Reservations</span> <a href="tel:+631234567890" className="hover:text-gold transition-colors">+63 (123) 456-7890</a></p>
                    <p className="flex justify-between"><span>Events</span> <a href="tel:+631234567891" className="hover:text-gold transition-colors">+63 (123) 456-7891</a></p>
                    <p className="flex justify-between mt-4"><span>Email</span> <a href="mailto:concierge@cozinamarray.com" className="hover:text-gold transition-colors">concierge@cozinamarray.com</a></p>
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] text-text-main font-mono uppercase tracking-[0.3em] mb-4 border-b border-border-main pb-2">Hours of Operation</h3>
                  <div className="text-[#999] text-[12px] tracking-wide leading-relaxed grid grid-cols-2 gap-2">
                    <span className="text-text-main">Morning Cafe</span>
                    <span className="text-right">7:00 AM - 2:00 PM</span>
                    
                    <span className="text-text-main">Evening Bar</span>
                    <span className="text-right">4:00 PM - 10:00 PM</span>
                    
                    <span className="text-text-main">Dining</span>
                    <span className="text-right">11:00 AM - 10:00 PM</span>
                  </div>
                  <p className="text-[#777] text-[10px] mt-4 uppercase tracking-widest text-center mt-6">Open Daily</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-3 p-12 md:p-16 bg-background relative overflow-hidden"
          >
            {/* Subtle Geometric Background */}
            <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
               <div className="w-[400px] h-[400px] border border-gold rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl font-serif text-text-main mb-4 leading-tight">Send an <span className="italic text-[#999]">Inquiry</span></h2>
              <p className="text-[#777] text-[12px] tracking-wide mb-12">Please provide your details and our team will respond promptly.</p>

              {submitted ? (
                <div className="border border-gold p-12 text-center bg-surface/50">
                  <span className="text-gold text-[10px] uppercase tracking-[0.3em] block mb-4">Confirmed</span>
                  <p className="text-text-main text-lg font-serif italic mb-6">Your inquiry has been gracefully received.</p>
                  <p className="text-[#999] text-[12px] tracking-wide">Our concierge will contact you shortly to confirm the details.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-[10px] text-text-main uppercase tracking-[0.3em] hover:text-gold border-b border-transparent hover:border-gold pb-1 transition-all"
                  >
                    Send Another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-[10px] text-gold uppercase tracking-[0.2em] font-mono">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-border-main text-text-main py-3 text-[12px] focus:outline-none focus:border-gold transition-colors placeholder:text-[#555]"
                        placeholder="e.g. Jean Dupont"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] text-gold uppercase tracking-[0.2em] font-mono">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-border-main text-text-main py-3 text-[12px] focus:outline-none focus:border-gold transition-colors placeholder:text-[#555]"
                        placeholder="jean@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="date" className="text-[10px] text-gold uppercase tracking-[0.2em] font-mono">Requested Date</label>
                      <input 
                        type="date" 
                        id="date" 
                        name="date" 
                        value={formState.date}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-border-main text-[#999] py-3 text-[12px] focus:outline-none focus:border-gold transition-colors [color-scheme:dark]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="guests" className="text-[10px] text-gold uppercase tracking-[0.2em] font-mono">Party Size</label>
                      <select 
                        id="guests" 
                        name="guests" 
                        value={formState.guests}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-border-main text-[#999] py-3 text-[12px] focus:outline-none focus:border-gold transition-colors appearance-none"
                      >
                        <option value="" disabled className="bg-background">Select party size</option>
                        <option value="1-2" className="bg-background">1-2 Guests</option>
                        <option value="3-4" className="bg-background">3-4 Guests</option>
                        <option value="5-8" className="bg-background">5-8 Guests (Private Booth)</option>
                        <option value="9+" className="bg-background">9+ Guests (Event Inquiry)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] text-gold uppercase tracking-[0.2em] font-mono">Message / Special Requests</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border-main text-text-main py-3 text-[12px] focus:outline-none focus:border-gold transition-colors placeholder:text-[#555] resize-none"
                      placeholder="Please note any dietary restrictions or preferences..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button type="submit" className="w-full border border-gold bg-transparent text-gold uppercase tracking-[0.3em] text-[10px] font-semibold py-5 hover:bg-gold hover:text-background transition-colors flex items-center justify-center gap-4 group">
                      <span>Submit Inquiry</span>
                      <span className="w-8 h-px bg-gold group-hover:bg-background transition-colors block"></span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
