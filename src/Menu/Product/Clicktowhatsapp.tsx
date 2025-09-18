import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import "./Clicktowhatsapp.css";

const Clicktowhatsapp = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="ctwa-page">
      {/* Hero Section */}
      <section className="ctwa-hero" data-aos="fade-up">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           Convert Clicks into WhatsApp Chats
        </motion.h1>
        <p>
          Run ads that <span>start real conversations</span>. Generate leads,
          qualify instantly & close deals — all inside WhatsApp.
        </p>
        <button className="btn-primary">Book My Demo</button>
      </section>

      {/* Advantage */}
      <section className="ctwa-advantage" data-aos="fade-right">
        <h2>Why Businesses ❤️ CTWA</h2>
        <div className="advantage-grid">
          <motion.div whileHover={{ scale: 1.05 }} className="advantage-card">
            <h3>📲 Instant Chat</h3>
            <p>No forms. Ads open direct WhatsApp conversations.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="advantage-card">
            <h3>🤖 Smart Bots</h3>
            <p>Automate lead capture & qualification in seconds.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="advantage-card">
            <h3>💡 Track ROI</h3>
            <p>Measure conversions & optimize campaigns easily.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="ctwa-stats" data-aos="zoom-in">
        <div className="stat">
          <h2>+300%</h2>
          <p>More Qualified Leads</p>
        </div>
        <div className="stat">
          <h2>-40%</h2>
          <p>Lower Ad Spend</p>
        </div>
      </section>
{/* Comparison Section */}
<section className="ctwa-comparison" data-aos="fade-up">
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    Traditional vs. Click-to-WhatsApp
  </motion.h2>
  <p className="comparison-sub">
    Skip the long funnel. Get customers talking to you instantly.
  </p>

  <div className="comparison-grid">
    {/* Traditional Path */}
    <motion.div
      className="comparison-card traditional"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h3>❌ Traditional Path</h3>
      <ul>
        <li>Customer sees Ad</li>
        <li>Clicks Landing Page</li>
        <li>Fills Form</li>
        <li>Waits for Email</li>
        <li>Website Visit</li>
      </ul>
      <span className="steps">5 Steps</span>
    </motion.div>

    {/* Click-to-WhatsApp Path */}
    <motion.div
      className="comparison-card whatsapp"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <h3>✅ Click-to-WhatsApp</h3>
      <ul>
        <li>Customer sees Ad</li>
        <li>Clicks WhatsApp Button</li>
        <li>Instant Conversation</li>
        <li>Guided Purchase</li>
      </ul>
      <span className="steps highlight">3 Steps</span>
    </motion.div>
  </div>
</section>

      {/* Features */}
      <section className="ctwa-features" data-aos="fade-up">
        <h2>Supercharge Your Marketing</h2>
        <div className="feature-grid">
          <motion.div whileHover={{ y: -6 }} className="feature-card">
            <h3>✅ Verified Leads</h3>
            <p>Every conversation = a valid phone number.</p>
          </motion.div>
          <motion.div whileHover={{ y: -6 }} className="feature-card">
            <h3>⚡ Auto-Qualification</h3>
            <p>Chatbots qualify leads instantly 24/7.</p>
          </motion.div>
          <motion.div whileHover={{ y: -6 }} className="feature-card">
            <h3>📊 Unified Inbox</h3>
            <p>All customer chats from Meta, Google & IG in one place.</p>
          </motion.div>
        </div>
      </section>

    {/* Testimonials */}
<section className="ctwa-testimonials py-16 px-6 md:px-20 bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] text-center">
  <motion.h2
    className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-12"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    What Our Clients Say
  </motion.h2>

  <div className="testimonial-grid grid md:grid-cols-3 gap-8">
    {[
      {
        text: "CTWA cut our cost per lead by 70%. Game-changer!",
        author: "Ananya, Growth Head",
      },
      {
        text: "We doubled conversions within the first 2 weeks.",
        author: "Rohan, Founder",
      },
      {
        text: "Finally, real conversations. No more fake leads.",
        author: "Meera, Marketing Lead",
      },
    ].map((t, i) => (
      <motion.div
        key={i}
        className="testimonial bg-white shadow-lg rounded-2xl p-6 border border-gray-200 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.2, duration: 0.8 }}
        whileHover={{ scale: 1.05, rotate: 1 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/10 to-transparent opacity-0 hover:opacity-100 transition duration-500"></div>

        <p className="text-gray-700 italic text-lg mb-4">“{t.text}”</p>
        <span className="block text-sm font-semibold text-[#1e3a8a]">
          - {t.author}
        </span>
      </motion.div>
    ))}
  </div>
</section>

    {/* Coming Soon with Animations */}
<section className="ctwa-coming-animated" data-aos="fade-up">
  <div className="coming-card">
    <div className="coming-icon">🚀</div>
    <h2>Next Stop: Google Ads</h2>
    <p>Get ready for Google Click-to-Message integration—launching soon!</p>
    <div className="coming-underline"></div>
  </div>
</section>


    {/* How It Works */}
<section className="ctwa-how-modern" data-aos="fade-up" data-aos-duration="1200">
  <h2>How CTWA Works</h2>
  <div className="how-steps">
    <div className="step" data-aos="fade-right" data-aos-delay="100">
      <div className="step-number">1</div>
      <p>Run CTWA ads → chat starts instantly</p>
    </div>
    <div className="step" data-aos="fade-left" data-aos-delay="200">
      <div className="step-number">2</div>
      <p>Bot qualifies leads in real-time</p>
    </div>
    <div className="step" data-aos="fade-right" data-aos-delay="300">
      <div className="step-number">3</div>
      <p>Team Inbox handles all conversations</p>
    </div>
    <div className="step" data-aos="fade-left" data-aos-delay="400">
      <div className="step-number">4</div>
      <p>Track conversions & optimize spend</p>
    </div>
    <div className="step" data-aos="fade-up" data-aos-delay="500">
      <div className="step-number">5</div>
      <p>Retarget with free 72-hour re-engagement</p>
    </div>
  </div>
</section>
<section className="ctwa-cta-modern">
  <motion.div
    className="cta-content"
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <h2>Turn Your Ads into Paying Customers</h2>
    <motion.button
      className="btn-primary-modern"
      whileHover={{ scale: 1.1, rotate: 3 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      🚀 Get Started
    </motion.button>
  </motion.div>
</section>

    </div>
  );
};

export default Clicktowhatsapp;
