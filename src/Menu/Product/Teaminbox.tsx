import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import "./Teaminbox.css";

const Teaminbox = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const features = [
    {
      icon: "👥",
      title: "Organize Teams",
      description: "Assign conversations to users for seamless collaboration.",
    },
    {
      icon: "📇",
      title: "Manage Contacts",
      description: "Easily handle thousands of contacts with smart tagging.",
    },
    {
      icon: "💬",
      title: "Start Conversations",
      description: "See all messages, threads, and conversations in one place.",
    },
    {
      icon: "📢",
      title: "Broadcast Messages",
      description: "Send announcements or campaigns to multiple contacts.",
    },
  ];

  const testimonials = [
    {
      text: "Multipi allows multiple agents to answer guests efficiently, automating basic replies seamlessly.",
      author: "J Eduardo Zeballos, Hotel Rosario",
    },
    {
      text: "Multipi improves team collaboration and personalized customer support across multiple channels.",
      author: "Sidney Elena J, DynamiaERP",
    },
  ];

  return (
    <div className="team-3d-page">

      {/* Hero */}
      <section className="hero-3d" data-aos="fade-up">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Team Inbox: Effortless Collaboration
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          
        >
          Centralize messages, assign conversations, and manage your team efficiently.
        </motion.p>
        <motion.button
          // whileHover={{ scale: 1.1, rotate: 2 }}
          className="btn-3d"
        >
          Book a Demo
        </motion.button>
      </section>

      {/* Features */}
      <section className="features-3d" data-aos="fade-up">
        <h2>Features Designed for Teams</h2>
        <div className="features-grid-3d">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="feature-card-3d"
              whileHover={{ rotateY: 5, rotateX: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Manage Section */}
      <section className="manage-3d" data-aos="fade-left">
        <motion.h2
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Manage Conversations Smarter
        </motion.h2>
        <div className="manage-cards-3d">
          <motion.div whileHover={{ y: -4 }} className="manage-card-3d">
            <h3>Team Collaboration</h3>
            <p>Assign chats to teams and improve transparency in communication.</p>
          </motion.div>
          <motion.div whileHover={{ y: -4 }} className="manage-card-3d">
            <h3>Contact Scalability</h3>
            <p>Import/export contacts, tag VIPs, and manage large lists effortlessly.</p>
          </motion.div>
          <motion.div whileHover={{ y: -4 }} className="manage-card-3d">
            <h3>Personalized Engagement</h3>
            <p>Develop opportunities through personalized customer interactions.</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-3d" data-aos="fade-up">
        <h2>What Customers Say</h2>
        <div className="testimonials-grid-3d">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="testimonial-3d"
              whileHover={{ rotateY: 5, rotateX: 5, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <p>“{t.text}”</p>
              <span>- {t.author}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="team"> Start Using Your Team Inbox Today</h2>
        <p>
          Bring all customer conversations into one place and reply faster as a team.
        </p>
        <motion.button
          className="cta-btn"
          // whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
        >
           Book a Demo
        </motion.button>
      </motion.div>
    </section>
    </div>
  );
};

export default Teaminbox;
