import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import "./MedicalService.css";





import img4 from "../../assets/saran/funnel.png"
// import img4 from "../assets/saran/funnel.png";

import img6 from "../../assets/saran/Whatsapp_Health.jpg";
import img1 from "../../assets/saran/app.png";

import img3 from "../../assets/saran/chat.png";
import img5 from "../../assets/saran/Thumbnail.png";


const MedicalService = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
     

      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Multipi for Healthcare</h1>
          <p>
            Connect and engage your patients using WhatsApp. More secure
            healthcare communications that guarantee better privacy.
          </p>
          <ul>
            <li>⭐ Rated 4.6/5 on G2</li>
            <li>💳 No credit card required</li>
          </ul>
          <div className="btn-group">
            <button className="btn-primary">Book a Demo</button>
            {/* <button className="btn-secondary">Start Free</button> */}
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img src={img6} alt="Healthcare Hero"  className="healthcare" />
          
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="features-grid">
        {[
          {
            title: "Appointment Automation",
            text: "Automate with Multipi’s drag-and-drop chatbot builder for self-service appointment booking.",
            img: img1,
          },
          {
            title: "Appointment Reminders",
            text: "Send automated WhatsApp reminders to reduce no-shows and improve patient care.",
            img: img5,
          },
          {
            title: "Confirmation & Support",
            text: "Notify patients for sample collection, report pickup, and clinic visits automatically.",
            img: img4,
          },
          {
            title: "Automated Support",
            text: "Support patients 24/7 with Multipi chatbot, even without live staff.",
            img: img3,
          },
        ].map((f, idx) => (
          <motion.div
            className="feature-card"
            key={idx}
            whileHover={{ scale: 1.05 }}
            data-aos="fade-up"
          >
            <img src={f.img} alt={f.title} />
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Secure Section */}
      <section className="secure-section">
        <motion.div
          className="secure-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="secure">Secure & Compliant</h2>
          <p>
            WhatsApp ensures end-to-end encryption, HIPAA compliance, and safe
            patient data exchange for collaboration and consultation.
          </p>
          <ul>
            <li>📅 Appointment Reminders</li>
            <li>🤖 Automated Booking</li>
            <li>⚡ Faster Workflows</li>
            <li>🔗 Easy Integrations</li>
            <li>📱 Telemedicine Ready</li>
            <li>🔒 Privacy Guaranteed</li>
          </ul>
        </motion.div>
      </section>

      {/* Engagement */}
      <section className="engagement">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Enhanced Patient Engagement
        </motion.h2>
        <p>
          Use personalized messaging, multimedia content, and remote
          consultations to improve accessibility and patient outcomes.
        </p>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Customers Say</h2>
        <div className="testimonial-slider">
          <motion.div
            className="testimonial-card"
            whileHover={{ scale: 1.05 }}
          >
            <p>
              “Amazing CRM to manage WhatsApp business. Simple, easy to manage,
              and no technical code is required. Best support team ever.”
            </p>
            <span>- Arth T, Owner</span>
          </motion.div>
          <motion.div
            className="testimonial-card"
            whileHover={{ scale: 1.05 }}
          >
            <p>
              “Very useful for Marketing. It’s the most complete WhatsApp tool
              I’ve ever used. Email is dropping, but WhatsApp delivers.”
            </p>
            <span>- Cristian, CEO</span>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta">
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Discover More with Multipi</h2>
          <p>
            Harness WhatsApp, Facebook, and Instagram with one of the fastest
            growing Business Solution Providers.
          </p>
          <button className="btn-primary">Book a Demo</button>
        </motion.div>
      </section>

    
    </>
  );
};

export default MedicalService;
