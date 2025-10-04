import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useEffect, useState } from "react";
import { Bot, MessageCircle, Users } from "lucide-react";
import { motion } from "framer-motion";
import "./MultipiAssist.css";
import heroImg from "../../assets/hero2.png"; // adjust path
import { Link } from "react-router-dom";
export default function PageWithAnimatedFlow() {
    return (_jsxs("div", { children: [_jsx(Hero, {}), _jsx(WhatsAppFlowDiagram, {}), _jsx(AiHumanBalanceBlock, {})] }));
}
// ---------- HERO Section ----------
function Hero() {
    return (_jsxs("section", { className: "hero-section", children: [_jsxs(motion.div, { className: "hero-content", initial: { opacity: 0, x: -60, scale: 0.96 }, animate: { opacity: 1, x: 0, scale: 1 }, transition: { duration: 0.9, ease: "easeOut" }, children: [_jsxs(motion.h1, { className: "hero-title", initial: { opacity: 0, y: 38 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2, duration: 0.8 }, children: [_jsxs("span", { className: "title-anim", children: ["Scale Customer Conversations Effortlessly with", " "] }), _jsx("span", { className: "gradient-text hero-gradient-anim", children: "WhatsApp AI" })] }), _jsxs(motion.p, { className: "hero-subtitle", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.4, duration: 0.7 }, children: ["Cut response times, reduce manual workload, and deliver instant 24/7 support \u2014 all without hiring extra staff.", _jsx("br", {}), "Join ", _jsx("strong", { className: "muted-strong", children: "12,000+" }), " businesses already growing faster with", " ", _jsx("strong", { className: "accent-strong", children: "Multipi Assist" }), "."] }), _jsx(motion.button, { className: "hero-cta", whileHover: {
                            scale: 1.08,
                            boxShadow: "0 8px 32px rgba(34,197,94,0.18)",
                            background: "linear-gradient(90deg, #22d3ee, #14b8a6)",
                        }, whileTap: { scale: 0.96 }, transition: { type: "spring", stiffness: 400, damping: 20 }, children: _jsx(Link, { to: "/freeTrail", style: { textDecoration: "none", color: "inherit" }, children: "Start Free 7 Day Trial" }) })] }), _jsxs(motion.div, { className: "hero-image", initial: { opacity: 0, x: 60, scale: 0.96 }, animate: { opacity: 1, x: 0, scale: 1 }, transition: { duration: 1.1, ease: "easeOut" }, children: [_jsx("div", { className: "hero-img-bg" }), _jsx(motion.img, { src: heroImg, alt: "Hero Illustration", initial: { scale: 0.95, filter: "blur(10px)" }, animate: { scale: 1, filter: "blur(0px)" }, transition: { duration: 1.2, type: "spring", bounce: 0.4 } })] })] }));
}
// ---------- Animated CTA ----------
function AnimatedModernCtaBox() {
    return (_jsx("section", { children: _jsxs("div", { className: "cta-box live-ad-animation", children: [_jsx("div", { className: "cta-message", children: _jsx(AnimatedText, { text: "Looking to meet modern support demands of today\u2019s customers on messaging apps?" }) }), _jsxs("button", { className: "cta-btn", children: ["Free 7 Day Trial", _jsx("span", { className: "btn-wave" })] })] }) }));
}
function AnimatedText({ text }) {
    return (_jsx(_Fragment, { children: [...text].map((char, i) => (_jsx("span", { className: "animated-letter", style: { animationDelay: `${i * 0.04}s` }, children: char }, i))) }));
}
// ---------- FLOW DIAGRAM ----------
function WhatsAppFlowDiagram() {
    const svgRef = useRef(null);
    const centerRef = useRef(null);
    // ✅ Correctly typed array refs
    const leftRefs = useRef([]);
    const rightRefs = useRef([]);
    const [paths, setPaths] = useState({
        left: [],
        right: [],
    });
    useEffect(() => {
        const compute = () => {
            if (!svgRef.current || !centerRef.current)
                return;
            const svgRect = svgRef.current.getBoundingClientRect();
            const cRect = centerRef.current.getBoundingClientRect();
            const cX = cRect.left + cRect.width / 2 - svgRect.left;
            const cY = cRect.top + cRect.height / 2 - svgRect.top;
            const leftPaths = leftRefs.current.map((el) => {
                if (!el)
                    return "";
                const r = el.getBoundingClientRect();
                const x1 = r.right - svgRect.left;
                const y1 = r.top + r.height / 2 - svgRect.top;
                const x2 = cX - 24;
                const y2 = cY;
                const dx = Math.max(80, (x2 - x1) * 0.6);
                return `M ${x1},${y1} C ${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`;
            });
            const rightPaths = rightRefs.current.map((el) => {
                if (!el)
                    return "";
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
    const leftCards = [
        { icon: Bot, color: "purple", title: "AI Agent by Multipi" },
        { icon: MessageCircle, color: "green", title: "Custom Smart Chatbots" },
        { icon: Users, color: "blue", title: "Human Handoff" },
    ];
    const rightCards = [
        { icon: Bot, color: "purple", title: "24/7 Availability" },
        { icon: MessageCircle, color: "green", title: "Instant Response" },
        { icon: Users, color: "blue", title: "Seamless Escalation" },
    ];
    return (_jsxs("section", { className: "flow-section", children: [_jsx("h2", { style: {
                    fontSize: "2.4rem",
                    fontWeight: "800",
                    textAlign: "center",
                    background: "linear-gradient(90deg, #1e3a8a 25%, #06b6d4 55%, #1e3a8a 75%, #1e3a8a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                    margin: "0 auto 36px auto",
                    letterSpacing: "-1px",
                }, children: "Customer Queries on WhatsApp" }), _jsxs("div", { className: "flow-container", children: [_jsxs("div", { className: "flow-header", children: [_jsx("h2", { children: "Manage Your Conversations Seamlessly" }), _jsxs("p", { children: ["Handle ", _jsx("span", { className: "highlight", children: "AI-powered automation" }), ",", " ", _jsx("span", { className: "highlight", children: "smart chatbots" }), ", and", " ", _jsx("span", { className: "highlight", children: "human handoff" }), " all in one flow."] })] }), _jsxs("div", { className: "flow-grid", children: [_jsx("div", { className: "flow-col", children: leftCards.map((item, i) => (_jsxs("div", { ref: (el) => {
                                        leftRefs.current[i] = el;
                                    }, className: "flow-card", children: [_jsx("div", { className: "icon", children: _jsx(item.icon, { className: `icon-inner ${item.color === "green"
                                                    ? "green"
                                                    : item.color === "blue"
                                                        ? "blue"
                                                        : ""}` }) }), _jsx("span", { className: "title", children: item.title })] }, i))) }), _jsxs("div", { ref: centerRef, className: "flow-center", children: [_jsx("div", { className: "center-glow" }), _jsxs("div", { className: "center-content", children: [_jsx("img", { src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", alt: "WhatsApp", width: 40, height: 40 }), _jsxs("div", { children: [_jsx("div", { className: "center-label", children: "Customer Queries on" }), _jsx("div", { className: "center-title", children: "WhatsApp" })] })] })] }), _jsx("div", { className: "flow-col", children: rightCards.map((item, i) => (_jsxs("div", { ref: (el) => {
                                        rightRefs.current[i] = el;
                                    }, className: "flow-card", children: [_jsx("div", { className: "icon", children: _jsx(item.icon, { className: `icon-inner ${item.color === "green"
                                                    ? "green"
                                                    : item.color === "blue"
                                                        ? "blue"
                                                        : ""}` }) }), _jsx("span", { className: "title", children: item.title })] }, i))) }), _jsxs("svg", { ref: svgRef, className: "flow-svg", children: [paths.left.map((d, i) => (_jsx("path", { d: d, className: "line", stroke: "#059669", fill: "none", strokeWidth: 2 }, i))), paths.right.map((d, i) => (_jsx("path", { d: d, className: "line", stroke: "#0ea5e9", fill: "none", strokeWidth: 2 }, i)))] })] })] })] }));
}
// ---------- AI + Human Balance Block ----------
function AiHumanBalanceBlock() {
    return (_jsx("section", { style: { margin: "56px auto", maxWidth: 960, padding: "0 16px" }, children: _jsxs(motion.div, { initial: { opacity: 0, y: 40, scale: 0.95 }, whileInView: { opacity: 1, y: 0, scale: 1 }, transition: { duration: 1, ease: "easeOut" }, className: "ai-balance-card", children: [_jsxs("h2", { className: "ai-balance-title", children: ["Supercharge Customer Service With", " ", _jsx("span", { className: "gradient-highlight", children: "Smart AI + Human Expertise" })] }), _jsxs("div", { className: "ai-balance-row", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.9, delay: 0.2 }, className: "ai-balance-col", children: [_jsx("p", { children: "AI-driven support accelerates responses and keeps communication smooth\u2014without losing the human touch." }), _jsxs("p", { children: [_jsx("span", { className: "bold", children: "Multipi\u2019s AI" }), " blends", " ", _jsx("span", { className: "highlight", children: "efficiency" }), " and", " ", _jsx("span", { className: "highlight", children: "empathy" }), ", adapts to multiple languages, and responds contextually so customers always feel understood."] })] }), _jsxs(motion.ul, { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.9, delay: 0.4 }, className: "ai-balance-list", children: [_jsxs("li", { children: [_jsx("span", { className: "point-highlight", children: "Rapid FAQ resolution" }), " & automated ticket closure"] }), _jsx("li", { children: "Escalation of complex queries to expert agents" }), _jsx("li", { children: "Direct human help whenever requested" }), _jsx("li", { children: "Fair query distribution for improved service" })] })] }), _jsx(motion.button, { whileHover: {
                        scale: 1.08,
                        boxShadow: "0 8px 30px rgba(14,165,233,0.35)",
                    }, transition: { type: "spring", stiffness: 300, damping: 18 }, className: "ai-balance-cta", children: "Discover Multipi\u2019s Human-Centric AI Support" })] }) }));
}
