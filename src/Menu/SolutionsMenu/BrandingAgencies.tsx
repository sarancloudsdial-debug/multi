// src/pages/BrandingAgencies.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelopeOpenText,
  FaUsers,
  FaCogs,
  FaComments,
  FaLink,
  FaMagic,
} from "react-icons/fa";
import heroImg from "../../assets/Whatsapp_Broadcast.png"; // ✅ your image

const features = [
  {
    icon: <FaEnvelopeOpenText size={35} />,
    title: "Forget Email & SMS!",
    desc: "WhatsApp is now a primary channel. Drive high-impact campaigns that deliver action instantly.",
    color: "#06b6d4",
  },
  {
    icon: <FaUsers size={35} />,
    title: "Engage & Nurture",
    desc: "Acquire, nurture, and upsell using chatbots, APIs, and commerce integrations.",
    color: "#a855f7",
  },
  {
    icon: <FaCogs size={35} />,
    title: "Integrate Your CRM",
    desc: "Run campaigns by syncing your favorite CRM with WhatsApp for enterprise-level automation.",
    color: "#f59e0b",
  },
  {
    icon: <FaMagic size={35} />,
    title: "Personalized Promotions",
    desc: "Deliver tailored messages & offers at scale, powered by your CRM data.",
    color: "#ef4444",
  },
  {
    icon: <FaComments size={35} />,
    title: "Intelligent Auto-Response",
    desc: "Smart chatbots follow workflows and escalate to sales teams when needed.",
    color: "#22c55e",
  },
  {
    icon: <FaLink size={35} />,
    title: "Add to Your Stack",
    desc: "Seamlessly integrate with CRMs, Google Sheets, and your existing tools.",
    color: "#3b82f6",
  },
];

const BrandingAgencies: React.FC = () => {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: "#111827" }}>
      {/* === HERO SECTION === */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "3rem 6%",
          background: "linear-gradient(135deg, #e0f7fa, #f3e8ff, #fff9c4)",
        }}
      >
        {/* Left Content */}
        <div style={{ flex: 1, zIndex: 10 }}>
          <motion.h1
            style={{ fontSize: "3.5rem", fontWeight: 800, lineHeight: "1.2" }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Reimagine Branding <br /> with Next-Gen AI
          </motion.h1>
          <motion.p
            style={{
              marginTop: "1.5rem",
              fontSize: "1.25rem",
              maxWidth: "600px",
              color: "#374151",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Deliver unforgettable experiences, engage clients 24/7, and grow
            your branding agency with powerful automation.
          </motion.p>
          <motion.button
            style={{
              marginTop: "2rem",
              padding: "0.9rem 1.8rem",
              background: "linear-gradient(90deg,#06b6d4,#3b82f6)",
              color: "#fff",
              fontWeight: 600,
              borderRadius: "9999px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              border: "none",
              fontSize: "1rem",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Free 7 Days Trial
          </motion.button>
        </div>

        {/* Right Hero Image */}
        <motion.div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={heroImg}
            alt="Branding AI"
            style={{ width: "90%", maxWidth: "500px" }}
          />
        </motion.div>
      </section>

      {/* === FEATURES SECTION === */}
      <section
        style={{
          background: "#ecfdf5",
          padding: "6rem 2rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: 12 }}>
            Why Branding Agencies Choose Us
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#4b5563" }}>
            Powerful tools designed to amplify your campaigns and results.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              style={{
                background: "#fff",
                padding: "2rem",
                borderRadius: "1rem",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                border: `2px solid ${feature.color}`,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div style={{ color: feature.color, marginBottom: "1rem" }}>
                {feature.icon}
              </div>
              <h3 style={{ fontWeight: 600, fontSize: "1.25rem" }}>
                {feature.title}
              </h3>
              <p style={{ marginTop: "0.5rem", color: "#374151" }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === CTA SECTION === */}
      <section className="cta"
        // style={{
        //   background:
        //     "linear-gradient(135deg, #3b82f6, #9333ea)",
        //   color: "#fff",
        //   textAlign: "center",
        //   padding: "5rem 1rem",
        // }}
      >
        {/* <motion.h2
          style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "1rem" }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Elevate Your Agency?
        </motion.h2>
        <p style={{ fontSize: "1.25rem" }}>
          Join 1000+ branding agencies using AI to create unforgettable
          campaigns.
        </p>
        <motion.button
          style={{
            marginTop: "2rem",
            padding: "0.9rem 2rem",
            background: "#fff",
            color: "#111827",
            fontWeight: 700,
            borderRadius: "9999px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
            border: "none",
            fontSize: "1rem",
            cursor: "pointer",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Today
        </motion.button> */}
          {/* CTA */}
          <motion.h3 initial={{ opacity: 0, scale: 0.95,color: "white"}} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>Ready to Elevate Your Agency?</motion.h3>
                          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.12 }}> Join 1000+ branding agencies using AI to create unforgettable
          campaigns.</motion.p>
                          <motion.div style={{ marginTop: 14 }}>
                            <motion.button className="btn primary pulse" whileHover={{ scale: 1.05 }} style={{marginTop: "24px",
                                  background: "#fff", // ✅ White button
                                  color: "#1a1a1a",
                                  padding: "16px 32px",
                                  // borderRadius: "12px",
                                  fontWeight: "700",
                                  border: "none",
                                  cursor: "pointer",
                                  transition: "0.3s",
                                 }}>Start Free Trial</motion.button>
                          </motion.div>
                       
        
      </section>
      
    </div>
  );
};

export default BrandingAgencies;
