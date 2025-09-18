import React from "react";
import { motion } from "framer-motion";
import {
  Headphones,      // 24/7 support
  BarChart4,       // Scaling
  Link2,           // Connect Smarter
  Share2           // Engage Across Platforms
} from "lucide-react";

interface Card {
  icon: React.ReactNode;
  accent: string;
  title: string;
  desc: string;
}

const cards: Card[] = [
  {
    icon: <Headphones size={42} color="#16a34a" />,
    accent: "#D1FADF",
    title: "24/7 Support, Instantly",
    desc: "Get round-the-clock support from our expert team, ensuring customer issues are resolved—day or night.",
  },
  {
    icon: <BarChart4 size={42} color="#2563eb" />,
    accent: "#E0EAFF",
    title: "Effortless Scaling",
    desc: "Handle increased inquiries during peak times with ease—our tools let your support operation grow as fast as you do.",
  },
  {
    icon: <Link2 size={42} color="#db2777" />,
    accent: "#FEE2F1",
    title: "Connect Smarter",
    desc: "Seamlessly integrate WhatsApp with your favorite apps. Centralize all messages in one easy inbox.",
  },
  {
    icon: <Share2 size={42} color="#ca8a04" />,
    accent: "#FEF9C3",
    title: "Engage Across Platforms",
    desc: "Nurture leads from email, Facebook, or Instagram, and instantly convert conversations to WhatsApp.",
  },
];

const Testimonials: React.FC = () => (
  <section style={styles.section}>
    <motion.h2
      style={styles.heading}
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Why Customers Love Multipi
    </motion.h2>

    <motion.p
      style={styles.subheading}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      Real results from our most successful clients—powered by smarter WhatsApp engagement.
    </motion.p>

    <div style={styles.container}>
      {cards.map((c, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: i * 0.15 }}
          viewport={{ once: true }}
          style={{
            ...styles.card,
            boxShadow:
              i % 2 === 0
                ? "0 8px 28px rgba(53,211,102,0.12)"
                : "0 8px 28px rgba(59,130,246,0.12)",
          }}
          whileHover={{ y: -8, scale: 1.03 }}
        >
          <div style={{ ...styles.imgWrapper, background: c.accent }}>
            {c.icon}
          </div>
          <h3 style={styles.cardTitle}>{c.title}</h3>
          <p style={styles.cardDesc}>{c.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: "80px 20px",
    background: "#fff",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "12px",
    letterSpacing: "-0.5px",
  },
  subheading: {
    color: "#555",
    fontSize: "1.15rem",
    marginBottom: "50px",
    maxWidth: "650px",
    marginInline: "auto",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "32px",
    maxWidth: "1250px",
    margin: "0 auto",
  },
  card: {
    flex: "1 1 260px",
    minWidth: "250px",
    maxWidth: "300px",
    background: "#fff",
    borderRadius: "24px",
    padding: "36px 24px 28px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  imgWrapper: {
    width: "90px",
    height: "90px",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
  },
  cardTitle: {
    fontSize: "1.18rem",
    fontWeight: "700",
    marginBottom: "12px",
    textAlign: "center",
  },
  cardDesc: {
    color: "#555",
    fontSize: "1rem",
    lineHeight: "1.6",
    textAlign: "center",
  },
};

export default Testimonials;
