import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import { FaRobot, FaForward, FaGlobe, FaBell, FaUsers } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { FiMessageCircle } from "react-icons/fi";

import hero from "../../assets/AiSupport.png";

// Feature type
interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

// Features data
const features: Feature[] = [
  {
    title: "Automated Lead Capture",
    description:
      "AI captures and qualifies leads from website chats, instantly notifying your sales team and keeping your pipeline full.",
    icon: <FaRobot size={36} color="#2256b7" />,
  },
  {
    title: "Intelligent Query Routing",
    description:
      "Smart algorithms sort customer queries by urgency and topic, ensuring every issue reaches the right expert fast.",
    icon: <FaForward size={36} color="#2256b7" />,
  },
  {
    title: "Personalized Support Experience",
    description:
      "Every interaction adapts to the customer's language and context, delivering accurate answers and seamless escalation.",
    icon: <FaGlobe size={36} color="#2256b7" />,
  },
  {
    title: "Smart Follow-ups & Feedback",
    description:
      "Automated reminders and feedback collection boost satisfaction and ensure resolutions are never missed.",
    icon: <FaBell size={36} color="#2256b7" />,
  },
];

// Animation variants
const sectionFade = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.15, type: "spring" as const, stiffness: 70 },
  }),
};


// Flow diagram component
function WhatsAppFlowDiagram() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);
  const leftRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [paths, setPaths] = useState<{ left: string[]; right: string[] }>({
    left: [],
    right: [],
  });

  useEffect(() => {
    const compute = () => {
      if (!svgRef.current || !centerRef.current) return;

      const svgRect = svgRef.current.getBoundingClientRect();
      const cRect = centerRef.current.getBoundingClientRect();
      const cX = cRect.left + cRect.width / 2 - svgRect.left;
      const cY = cRect.top + cRect.height / 2 - svgRect.top;

      const leftPaths = leftRefs.current.map((el) => {
        if (!el) return "";
        const r = el.getBoundingClientRect();
        const x1 = r.right - svgRect.left;
        const y1 = r.top + r.height / 2 - svgRect.top;
        const x2 = cX - 24;
        const y2 = cY;
        const dx = Math.max(80, (x2 - x1) * 0.6);
        return `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`;
      });

      const rightPaths = rightRefs.current.map((el) => {
        if (!el) return "";
        const r = el.getBoundingClientRect();
        const x1 = cX + 24;
        const y1 = cY;
        const x2 = r.left - svgRect.left;
        const y2 = r.top + r.height / 2 - svgRect.top;
        const dx = Math.max(80, (x2 - x1) * 0.6);
        return `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`;
      });

      setPaths({ left: leftPaths, right: rightPaths });
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return (
    <section className="flow-section">
      {/* Heading */}
      <h2
        style={{
          fontSize: "2.4rem",
          fontWeight: "800",
          textAlign: "center",
          background:
            "linear-gradient(90deg, rgb(30, 58, 138) 25%, rgb(6, 182, 212) 55%, rgb(30, 58, 138) 75%, rgb(30, 58, 138) 100%) text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          margin: "0 auto 36px auto",
          letterSpacing: "-1px",
        }}
      >
        Customer Queries on WhatsApp
      </h2>

      <div className="flow-container">
        {/* Header */}
        <div className="flow-header">
          <h2>Manage Your Conversations Seamlessly</h2>
          <p>
            Handle <span className="highlight">AI-powered automation</span>,{" "}
            <span className="highlight">smart chatbots</span>, and{" "}
            <span className="highlight">human handoff</span> all in one flow.
          </p>
        </div>

        {/* Grid */}
        <div className="flow-grid">
          {/* Left */}
          <div className="flow-col">
            {[
              { icon: BsRobot, color: "purple", title: "AI Agent by Multipi" },
              { icon: FiMessageCircle, color: "green", title: "Custom Smart Chatbots" },
              { icon: FaUsers, color: "blue", title: "Human Handoff" },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => { leftRefs.current[i] = el; }}
                className="flow-card"
              >
                <div className="icon">
                  <item.icon
                    className={`icon-inner ${
                      item.color === "green" ? "green" : item.color === "blue" ? "blue" : ""
                    }`}
                  />
                </div>
                <span className="title">{item.title}</span>
              </div>
            ))}
          </div>

          {/* Center */}
          <div ref={centerRef} className="flow-center">
            <div className="center-glow"></div>
            <div className="center-content">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                width={40}
                height={40}
              />
              <div>
                <div className="center-label">Customer Queries on</div>
                <div className="center-title">WhatsApp</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flow-col">
            {[
              { icon: BsRobot, color: "purple", title: "24/7 Availability" },
              { icon: FiMessageCircle, color: "green", title: "Instant Response" },
              { icon: FaUsers, color: "blue", title: "Seamless Escalation" },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => { rightRefs.current[i] = el; }}
                className="flow-card"
              >
                <div className="icon">
                  <item.icon
                    className={`icon-inner ${
                      item.color === "green" ? "green" : item.color === "blue" ? "blue" : ""
                    }`}
                  />
                </div>
                <span className="title">{item.title}</span>
              </div>
            ))}
          </div>

          {/* SVG lines */}
          <svg ref={svgRef} className="flow-svg">
            {paths.left.map((d, i) => (
              <path key={i} d={d} className="line" stroke="#059669" fill="none" strokeWidth={2} />
            ))}
            {paths.right.map((d, i) => (
              <path key={i} d={d} className="line" stroke="#0ea5e9" fill="none" strokeWidth={2} />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

export default function AISupportAgentPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#f5fafe" }}>
      {/* Hero Section */}
      <section
        style={{
          minHeight: "90vh",
          padding: "4rem 9rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(140deg,#eefcff 40%,#e9f7fe 100%)",
          borderRadius: "0 0 48px 48px",
          flexWrap: "wrap-reverse",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 70, damping: 20 }}
          style={{
            flex: "1",
            minWidth: "300px",
            maxWidth: "550px",
            marginBottom: "2rem",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              marginBottom: "1.2rem",
              color: "#2256b7",
              lineHeight: 1.3,
            }}
          >
            Supercharge Customer Support with AI Automation
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#3f4b63",
              marginBottom: "1.8rem",
              lineHeight: 1.6,
            }}
          >
            Provide instant, personalized answers for every customer. Let our AI
            handle common queries, automate follow-ups, and seamlessly connect
            users to your expert team whenever human help is needed—24/7.
          </p>
          <motion.button
            whileHover={{ scale: 1.08, background: "#2256b7", color: "#fff" }}
            transition={{ type: "spring", stiffness: 330, damping: 18 }}
            style={{
              padding: "0.9rem 2.4rem",
              fontSize: "1.1rem",
              fontWeight: "700",
              border: "none",
              borderRadius: "12px",
              background: "#3ea1ff",
              color: "#fff",
              boxShadow: "0 8px 22px rgba(56, 122, 230, 0.3)",
              cursor: "pointer",
            }}
          >
            Try AI Support Free
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.25 }}
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            minWidth: "300px",
          }}
        >
          <img
            src={hero}
            alt="AI Support Agent"
            style={{
              width: "590px",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </motion.div>
      </section>

      {/* Flow Diagram */}
      <WhatsAppFlowDiagram />

      {/* Features Section */}
      <section
        style={{
          marginTop: "4rem",
          padding: "0 3% 5rem 3%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionFade}
            style={{
              background: "#fff",
              borderRadius: "24px",
              padding: "2rem 2rem",
              boxShadow: "0 4px 22px rgba(56,122,230,0.15)",
              minWidth: "280px",
              maxWidth: "320px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.3s",
              cursor: "pointer",
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{ marginBottom: "0.7rem" }}>{feature.icon}</div>
            <div
              style={{
                fontWeight: 700,
                fontSize: "1.2rem",
                marginBottom: "0.5rem",
                color: "#2256b7",
              }}
            >
              {feature.title}
            </div>
            <div
              style={{
                fontSize: "1.05rem",
                color: "#355",
                lineHeight: 1.6,
                opacity: 0.9,
              }}
            >
              {feature.description}
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="cta">
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2> Ready to automate customer support and boost satisfaction?</h2>
          <p>
            Start your free trial today and see how AI transforms your support team productivity.
          </p>
          <button className="btn-primary">Book a Demo</button>
        </motion.div>
      </section>
    </div>
  );
}
