import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";

// Internal CSS with logo-based theme
const internalCss = `
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #f8fafc, #ffffff, #e2e8f0);
  overflow: hidden;
  padding-top: 192px;
  padding-left: 6%;
  padding-right: 6%;
  font-family: 'Poppins', sans-serif;
}
.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  gap: 40px;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}
.hero-content {
  flex: 1;
  min-width: 320px;
}
.hero-title {
  font-size: 3.6rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.1;
  background: linear-gradient(90deg, #4368B1, #5C8DFF, #89AFFF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 1.8rem;
  color: #374151;
  max-width: 520px;
}
.hero-cta {
  padding: 14px 34px;
  border-radius: 12px;
  background: linear-gradient(90deg, #4368B1, #5C8DFF);
  border: none;
  color: #fff;
  font-size: 1.15rem;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 18px rgba(67,104,177,0.4);
  animation: pulse 2.5s infinite;
}
.hero-cta::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 80%;
  height: 100%;
  background: linear-gradient(
    120deg,
    rgba(255,255,255,0.15) 0%,
    rgba(255,255,255,0.6) 50%,
    rgba(255,255,255,0.15) 100%
  );
  transform: skewX(-20deg);
}
.hero-cta:hover::after {
  animation: shine 1s forwards;
}
@keyframes shine {
  to { left: 120%; }
}
@keyframes pulse {
  0%, 100% { transform: scale(1); box-shadow: 0 0 18px rgba(67,104,177,0.5); }
  50% { transform: scale(1.05); box-shadow: 0 0 28px rgba(67,104,177,0.8); }
}
.hero-imageWrapper {
  flex: 1;
  text-align: center;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 2;
}
.hero-image {
  max-width: 90%;
  height: auto;
  object-fit: contain;
  animation: floatImage 6s ease-in-out infinite;
}
@keyframes floatImage {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-16px); }
}
@media (max-width: 900px) {
  .hero-section {
    padding-top: 100px;
    padding-left: 16px;
    padding-right: 16px;
  }
  .hero-container {
    flex-direction: column;
    gap: 20px;
  }
  .hero-title {
    font-size: 2.2rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
  .hero-cta {
    font-size: 1rem;
    padding: 12px 20px;
  }
}
`;

const Hero: React.FC = () => {
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = internalCss;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left: Text */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">Grow your business on WhatsApp</h1>
          <p className="hero-subtitle">
            Boost engagement and sales with the WhatsApp Business API — automate
            conversations, marketing, and support seamlessly.
          </p>
          <Link to="/freeTrail" style={{ textDecoration: "none" }}>
            <motion.button
              className="hero-cta"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            >
              Free 7 Days Trial
            </motion.button>
          </Link>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          className="hero-imageWrapper"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={heroImg} alt="Hero" className="hero-image" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
