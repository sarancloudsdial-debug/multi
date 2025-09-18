import React, { useEffect } from "react";
import { Globe, ClipboardCheck, Users2, Gift } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
// import heroImg from "../../assets/hero_banner.png";
import heroImg from "../../assets/hero_banner_no_bg.png";
import {
  Bolt,
  Link2,
  BookOpen,
  Rocket,
  Target,
  MessageSquare,
  Star,
} from "lucide-react";
import "./ChatbotAutomation.css";

const ChatbotAutomation: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
     <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Build smarter customer journeys <br /> with Multipi WhatsApp chatbots
        </h1>
        <p>
          Design powerful, no-code workflows that simplify marketing, sales, and
          support—delivering the right message at the right moment, every time.
        </p>
        <div className="btn-group">
          <motion.button
            className="btn-modern primary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Free
          </motion.button>
          <motion.button
            className="btn-modern secondary"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Demo
          </motion.button>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={heroImg} alt="WhatsApp chatbot banner" />
      </motion.div>
    </section>
      {/* Trusted Brands & Features */}
      <section className="trusted">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Trusted by India’s fastest-growing brands
        </motion.h2>
        <p>Scalable automation that grows with your business</p>
        <div className="feature-grid">
          {[
            { icon: <Bolt size={40} color="#1e3a8a" />, title: "Automate 200+ steps with ease" },
            { icon: <Link2 size={40} color="#1e3a8a" />, title: "Link multiple chatbot flows together" },
            { icon: <BookOpen size={40} color="#1e3a8a" />, title: "Robust APIs & ready-to-use integrations" },
          ].map((f, idx) => (
            <motion.div
              key={idx}
              className="feature-card"
              data-aos="fade-up"
              whileHover={{ y: -8, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }}
            >
              <span className="icon flex justify-center">{f.icon}</span>
              <h3>{f.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Automation Funnel (Row-Column Grid) */}
      <section className="automation-flow">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Automate processes, drive sales & improve efficiency <br />
          across every stage of the customer journey
        </motion.h2>

        <div className="flow-grid1">
          {[
           {
    stage: "Acquisition",
    icon: <Globe size={40} color="#fff" />,
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    desc: "Attract & qualify leads instantly with AI-powered chatbots.",
  },
  {
    stage: "Onboarding",
    icon: <ClipboardCheck size={40} color="#fff" />,
    gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
    desc: "Guide users with smooth onboarding & smart data collection.",
  },
  {
    stage: "Engagement",
    icon: <Users2 size={40} color="#fff" />,
    gradient: "linear-gradient(135deg, #06b6d4, #22d3ee)",
    desc: "Boost interaction with reminders, updates & 1:1 conversations.",
  },
  {
    stage: "Post-Purchase",
    icon: <Gift size={40} color="#facc15" />,
    gradient: "linear-gradient(135deg, #14b8a6, #2dd4bf)",
    desc: "Delight customers with feedback loops, referrals & loyalty bots.",
  },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="stage-box"
              style={{ background: item.gradient }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
            >
              <div className="stage-icon">{item.icon}</div>
              <h3>{item.stage}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="flow-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          The possibilities with custom WhatsApp chatbots are endless 
        </motion.p>
      </section>
      
            {/* Automation Funnel */}
            <section className="automation">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Drive conversions, boost engagement & save hours <br /> with
                automated WhatsApp workflows
              </motion.h2>
              <motion.img
                src="https://cdn-icons-png.flaticon.com/512/891/891175.png"
                alt="Automation Funnel"
                className="funnel-img"
                whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
                transition={{ duration: 1 }}
              />
              <div className="options">
                <motion.div
                  className="option-card"
                  data-aos="fade-right"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3>BYOC: Build your own chatbot</h3>
                  <p>
                    Pick from our template library or create custom flows—launch within
                    minutes, no coding needed.
                  </p>
                </motion.div>
                <motion.div
                  className="option-card"
                  data-aos="fade-left"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3>Work with our experts</h3>
                  <p>
                    Have a complex automation in mind? Our team will help design &
                    deploy your chatbot strategy.
                  </p>
                </motion.div>
              </div>
            </section>
      
            {/* Comparison Table */}
            <section className="comparison">
              <h2>Why Multipi chatbots stand out</h2>
              <motion.table
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <thead>
                  <tr>
                    <th>Features</th>
                    <th>Competitor Chatbots</th>
                    <th>
                      Multipi
                      {/* <img
                        src="https://www.Multipi.io/wp-content/uploads/2021/04/Multipi-logo.png"
                        alt="Multipi"
                        className="Multipi-logo"
                      /> */}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Multi-step automation</td>
                    <td>Limited</td>
                    <td>Up to 200+ steps</td>
                  </tr>
                  <tr>
                    <td>Interconnected workflows</td>
                    <td>Not supported</td>
                    <td>Fully supported</td>
                  </tr>
                  <tr>
                    <td>API & integrations</td>
                    <td>Few options</td>
                    <td>Wide range + documentation</td>
                  </tr>
                </tbody>
              </motion.table>
            </section>
      
            {/* Final CTA */}
            <section className="cta">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h2>
                  Ready to supercharge your customer conversations with Multipi?
                </h2>
                <motion.button
                  className="btn-primary pulse"
                  whileHover={{ scale: 1.1 }}
                >
                  Get Started Today
                </motion.button>
              </motion.div>
            </section>
    </>
  );
};

export default ChatbotAutomation;
