import React, { useRef, useEffect, useState, JSX } from "react";
import { Bot, MessageCircle, Users } from "lucide-react";
import { motion } from "framer-motion";
import "./MultipiAssist.css";
import heroImg from "../../assets/hero2.png"; // adjust path
import { Link } from "react-router-dom";

// Types
type IconType = React.FC<React.SVGProps<SVGSVGElement>>;

export default function PageWithAnimatedFlow(): JSX.Element {
  return (
    <div>
      <Hero />
      {/* <AnimatedModernCtaBox/> */}
      <WhatsAppFlowDiagram />
      {/* <ModernCtaBox/> */}
      <AiHumanBalanceBlock />
    </div>
  );
}

// ---------- HERO Section ----------
function Hero(): JSX.Element {
  return (
    <section className="hero-section">
      {/* Left side: Animated text */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -60, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="title-anim">
            Scale Customer Conversations Effortlessly with{" "}
          </span>
          <span className="gradient-text hero-gradient-anim">WhatsApp AI</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Cut response times, reduce manual workload, and deliver instant 24/7
          support — all without hiring extra staff.
          <br />
          Join <strong className="muted-strong">12,000+</strong> businesses
          already growing faster with{" "}
          <strong className="accent-strong">Multipi Assist</strong>.
        </motion.p>

        <motion.button
          className="hero-cta"
          whileHover={{
            scale: 1.08,
            boxShadow: "0 8px 32px rgba(34,197,94,0.18)",
            background: "linear-gradient(90deg, #22d3ee, #14b8a6)",
          }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <Link
            to="/freeTrail"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Start Free 7 Day Trial
          </Link>
        </motion.button>
      </motion.div>

      {/* Right side: Animated hero image */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 60, scale: 0.96 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <div className="hero-img-bg"></div>
        <motion.img
          src={heroImg}
          alt="Hero Illustration"
          initial={{ scale: 0.95, filter: "blur(10px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
        />
      </motion.div>
    </section>
  );
}

// ---------- Animated CTA ----------
function AnimatedModernCtaBox(): JSX.Element {
  return (
    <section>
      <div className="cta-box live-ad-animation">
        <div className="cta-message">
          <AnimatedText text="Looking to meet modern support demands of today’s customers on messaging apps?" />
        </div>
        <button className="cta-btn">
          Free 7 Day Trial
          <span className="btn-wave"></span>
        </button>
      </div>
    </section>
  );
}

type AnimatedTextProps = { text: string };
function AnimatedText({ text }: AnimatedTextProps): JSX.Element {
  return (
    <>
      {[...text].map((char, i) => (
        <span
          key={i}
          className="animated-letter"
          style={{ animationDelay: `${i * 0.04}s` }}
        >
          {char}
        </span>
      ))}
    </>
  );
}

// ---------- FLOW DIAGRAM ----------
function WhatsAppFlowDiagram(): JSX.Element {
  const svgRef = useRef<SVGSVGElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  // ✅ Correctly typed array refs
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
        return `M ${x1},${y1} C ${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`;
      });

      const rightPaths = rightRefs.current.map((el) => {
        if (!el) return "";
        const r = el.getBoundingClientRect();
        const x1 = cX + 24;
        const y1 = cY;
        const x2 = r.left - svgRect.left;
        const y2 = r.top + r.height / 2 - svgRect.top;
        const dx = Math.max(80, (x2 - x1) * 0.6);
        return `M ${x1},${y1} C ${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`;
      });

      setPaths({ left: leftPaths, right: rightPaths });
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const leftCards: { icon: IconType; color: string; title: string }[] = [
    { icon: Bot, color: "purple", title: "AI Agent by Multipi" },
    { icon: MessageCircle, color: "green", title: "Custom Smart Chatbots" },
    { icon: Users, color: "blue", title: "Human Handoff" },
  ];
  const rightCards: { icon: IconType; color: string; title: string }[] = [
    { icon: Bot, color: "purple", title: "24/7 Availability" },
    { icon: MessageCircle, color: "green", title: "Instant Response" },
    { icon: Users, color: "blue", title: "Seamless Escalation" },
  ];

  return (
    <section className="flow-section">
      <h2
        style={{
          fontSize: "2.4rem",
          fontWeight: "800",
          textAlign: "center",
          background:
            "linear-gradient(90deg, #1e3a8a 25%, #06b6d4 55%, #1e3a8a 75%, #1e3a8a 100%)",
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
        <div className="flow-header">
          <h2>Manage Your Conversations Seamlessly</h2>
          <p>
            Handle <span className="highlight">AI-powered automation</span>,{" "}
            <span className="highlight">smart chatbots</span>, and{" "}
            <span className="highlight">human handoff</span> all in one flow.
          </p>
        </div>

        <div className="flow-grid">
          {/* left side */}
          <div className="flow-col">
            {leftCards.map((item, i) => (
              <div
                key={i}
                ref={(el: HTMLDivElement | null) => {
                  leftRefs.current[i] = el;
                }}
                className="flow-card"
              >
                <div className="icon">
                  <item.icon
                    className={`icon-inner ${
                      item.color === "green"
                        ? "green"
                        : item.color === "blue"
                        ? "blue"
                        : ""
                    }`}
                  />
                </div>
                <span className="title">{item.title}</span>
              </div>
            ))}
          </div>

          {/* center node */}
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

          {/* right side */}
          <div className="flow-col">
            {rightCards.map((item, i) => (
              <div
                key={i}
                ref={(el: HTMLDivElement | null) => {
                  rightRefs.current[i] = el;
                }}
                className="flow-card"
              >
                <div className="icon">
                  <item.icon
                    className={`icon-inner ${
                      item.color === "green"
                        ? "green"
                        : item.color === "blue"
                        ? "blue"
                        : ""
                    }`}
                  />
                </div>
                <span className="title">{item.title}</span>
              </div>
            ))}
          </div>

          {/* animated lines */}
          <svg ref={svgRef} className="flow-svg">
            {paths.left.map((d, i) => (
              <path
                key={i}
                d={d}
                className="line"
                stroke="#059669"
                fill="none"
                strokeWidth={2}
              />
            ))}
            {paths.right.map((d, i) => (
              <path
                key={i}
                d={d}
                className="line"
                stroke="#0ea5e9"
                fill="none"
                strokeWidth={2}
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}

// ---------- AI + Human Balance Block ----------
function AiHumanBalanceBlock(): JSX.Element {
  return (
    <section style={{ margin: "56px auto", maxWidth: 960, padding: "0 16px" }}>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="ai-balance-card"
      >
        <h2 className="ai-balance-title">
          Supercharge Customer Service With{" "}
          <span className="gradient-highlight">
            Smart AI + Human Expertise
          </span>
        </h2>

        <div className="ai-balance-row">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="ai-balance-col"
          >
            <p>
              AI-driven support accelerates responses and keeps communication
              smooth—without losing the human touch.
            </p>
            <p>
              <span className="bold">Multipi’s AI</span> blends{" "}
              <span className="highlight">efficiency</span> and{" "}
              <span className="highlight">empathy</span>, adapts to multiple
              languages, and responds contextually so customers always feel
              understood.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="ai-balance-list"
          >
            <li>
              <span className="point-highlight">Rapid FAQ resolution</span> &
              automated ticket closure
            </li>
            <li>Escalation of complex queries to expert agents</li>
            <li>Direct human help whenever requested</li>
            <li>Fair query distribution for improved service</li>
          </motion.ul>
        </div>

        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0 8px 30px rgba(14,165,233,0.35)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="ai-balance-cta"
        >
          Discover Multipi’s Human-Centric AI Support
        </motion.button>
      </motion.div>
    </section>
  );
}
