import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaForward, FaGlobe, FaBell, FaUsers } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { FiMessageCircle } from "react-icons/fi";
import hero from "../../assets/AiSupport.png";
// Features data
const features = [
    {
        title: "Automated Lead Capture",
        description: "AI captures and qualifies leads from website chats, instantly notifying your sales team and keeping your pipeline full.",
        icon: _jsx(FaRobot, { size: 36, color: "#2256b7" }),
    },
    {
        title: "Intelligent Query Routing",
        description: "Smart algorithms sort customer queries by urgency and topic, ensuring every issue reaches the right expert fast.",
        icon: _jsx(FaForward, { size: 36, color: "#2256b7" }),
    },
    {
        title: "Personalized Support Experience",
        description: "Every interaction adapts to the customer's language and context, delivering accurate answers and seamless escalation.",
        icon: _jsx(FaGlobe, { size: 36, color: "#2256b7" }),
    },
    {
        title: "Smart Follow-ups & Feedback",
        description: "Automated reminders and feedback collection boost satisfaction and ensure resolutions are never missed.",
        icon: _jsx(FaBell, { size: 36, color: "#2256b7" }),
    },
];
// Animation variants
const sectionFade = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.15 + i * 0.15, type: "spring", stiffness: 70 },
    }),
};
// Flow diagram component
function WhatsAppFlowDiagram() {
    const svgRef = useRef(null);
    const centerRef = useRef(null);
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
                return `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`;
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
                return `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`;
            });
            setPaths({ left: leftPaths, right: rightPaths });
        };
        compute();
        window.addEventListener("resize", compute);
        return () => window.removeEventListener("resize", compute);
    }, []);
    return (_jsxs("section", { className: "flow-section", children: [_jsx("h2", { style: {
                    fontSize: "2.4rem",
                    fontWeight: "800",
                    textAlign: "center",
                    background: "linear-gradient(90deg, rgb(30, 58, 138) 25%, rgb(6, 182, 212) 55%, rgb(30, 58, 138) 75%, rgb(30, 58, 138) 100%) text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                    margin: "0 auto 36px auto",
                    letterSpacing: "-1px",
                }, children: "Customer Queries on WhatsApp" }), _jsxs("div", { className: "flow-container", children: [_jsxs("div", { className: "flow-header", children: [_jsx("h2", { children: "Manage Your Conversations Seamlessly" }), _jsxs("p", { children: ["Handle ", _jsx("span", { className: "highlight", children: "AI-powered automation" }), ",", " ", _jsx("span", { className: "highlight", children: "smart chatbots" }), ", and", " ", _jsx("span", { className: "highlight", children: "human handoff" }), " all in one flow."] })] }), _jsxs("div", { className: "flow-grid", children: [_jsx("div", { className: "flow-col", children: [
                                    { icon: BsRobot, color: "purple", title: "AI Agent by Multipi" },
                                    { icon: FiMessageCircle, color: "green", title: "Custom Smart Chatbots" },
                                    { icon: FaUsers, color: "blue", title: "Human Handoff" },
                                ].map((item, i) => (_jsxs("div", { ref: (el) => { leftRefs.current[i] = el; }, className: "flow-card", children: [_jsx("div", { className: "icon", children: _jsx(item.icon, { className: `icon-inner ${item.color === "green" ? "green" : item.color === "blue" ? "blue" : ""}` }) }), _jsx("span", { className: "title", children: item.title })] }, i))) }), _jsxs("div", { ref: centerRef, className: "flow-center", children: [_jsx("div", { className: "center-glow" }), _jsxs("div", { className: "center-content", children: [_jsx("img", { src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg", alt: "WhatsApp", width: 40, height: 40 }), _jsxs("div", { children: [_jsx("div", { className: "center-label", children: "Customer Queries on" }), _jsx("div", { className: "center-title", children: "WhatsApp" })] })] })] }), _jsx("div", { className: "flow-col", children: [
                                    { icon: BsRobot, color: "purple", title: "24/7 Availability" },
                                    { icon: FiMessageCircle, color: "green", title: "Instant Response" },
                                    { icon: FaUsers, color: "blue", title: "Seamless Escalation" },
                                ].map((item, i) => (_jsxs("div", { ref: (el) => { rightRefs.current[i] = el; }, className: "flow-card", children: [_jsx("div", { className: "icon", children: _jsx(item.icon, { className: `icon-inner ${item.color === "green" ? "green" : item.color === "blue" ? "blue" : ""}` }) }), _jsx("span", { className: "title", children: item.title })] }, i))) }), _jsxs("svg", { ref: svgRef, className: "flow-svg", children: [paths.left.map((d, i) => (_jsx("path", { d: d, className: "line", stroke: "#059669", fill: "none", strokeWidth: 2 }, i))), paths.right.map((d, i) => (_jsx("path", { d: d, className: "line", stroke: "#0ea5e9", fill: "none", strokeWidth: 2 }, i)))] })] })] })] }));
}
export default function AISupportAgentPage() {
    return (_jsxs("div", { style: { fontFamily: "Inter, sans-serif", background: "#f5fafe" }, children: [_jsxs("section", { style: {
                    minHeight: "90vh",
                    padding: "4rem 9rem",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "linear-gradient(140deg,#eefcff 40%,#e9f7fe 100%)",
                    borderRadius: "0 0 48px 48px",
                    flexWrap: "wrap-reverse",
                }, children: [_jsxs(motion.div, { initial: { opacity: 0, y: -40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, type: "spring", stiffness: 70, damping: 20 }, style: {
                            flex: "1",
                            minWidth: "300px",
                            maxWidth: "550px",
                            marginBottom: "2rem",
                        }, children: [_jsx("h1", { style: {
                                    fontSize: "2.5rem",
                                    fontWeight: 800,
                                    marginBottom: "1.2rem",
                                    color: "#2256b7",
                                    lineHeight: 1.3,
                                }, children: "Supercharge Customer Support with AI Automation" }), _jsx("p", { style: {
                                    fontSize: "1.1rem",
                                    color: "#3f4b63",
                                    marginBottom: "1.8rem",
                                    lineHeight: 1.6,
                                }, children: "Provide instant, personalized answers for every customer. Let our AI handle common queries, automate follow-ups, and seamlessly connect users to your expert team whenever human help is needed\u201424/7." }), _jsx(motion.button, { whileHover: { scale: 1.08, background: "#2256b7", color: "#fff" }, transition: { type: "spring", stiffness: 330, damping: 18 }, style: {
                                    padding: "0.9rem 2.4rem",
                                    fontSize: "1.1rem",
                                    fontWeight: "700",
                                    border: "none",
                                    borderRadius: "12px",
                                    background: "#3ea1ff",
                                    color: "#fff",
                                    boxShadow: "0 8px 22px rgba(56, 122, 230, 0.3)",
                                    cursor: "pointer",
                                }, children: "Try AI Support Free" })] }), _jsx(motion.div, { initial: { opacity: 0, scale: 0.85 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.8, delay: 0.3, type: "spring", bounce: 0.25 }, style: {
                            flex: "1",
                            display: "flex",
                            justifyContent: "center",
                            minWidth: "300px",
                        }, children: _jsx("img", { src: hero, alt: "AI Support Agent", style: {
                                width: "590px",
                                maxWidth: "100%",
                                height: "auto",
                            } }) })] }), _jsx(WhatsAppFlowDiagram, {}), _jsx("section", { style: {
                    marginTop: "4rem",
                    padding: "0 3% 5rem 3%",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "2.5rem",
                }, children: features.map((feature, i) => (_jsxs(motion.div, { custom: i, initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: sectionFade, style: {
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
                    }, whileHover: { scale: 1.05 }, children: [_jsx("div", { style: { marginBottom: "0.7rem" }, children: feature.icon }), _jsx("div", { style: {
                                fontWeight: 700,
                                fontSize: "1.2rem",
                                marginBottom: "0.5rem",
                                color: "#2256b7",
                            }, children: feature.title }), _jsx("div", { style: {
                                fontSize: "1.05rem",
                                color: "#355",
                                lineHeight: 1.6,
                                opacity: 0.9,
                            }, children: feature.description })] }, feature.title))) }), _jsx("section", { className: "cta", children: _jsxs(motion.div, { initial: { scale: 0.9 }, whileInView: { scale: 1 }, transition: { duration: 0.8 }, children: [_jsx("h2", { children: " Ready to automate customer support and boost satisfaction?" }), _jsx("p", { children: "Start your free trial today and see how AI transforms your support team productivity." }), _jsx("button", { className: "btn-primary", children: "Book a Demo" })] }) })] }));
}
