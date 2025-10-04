import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText, FaUsers, FaCogs, FaComments, FaLink, FaMagic, } from "react-icons/fa";
import heroImg from "../../assets/Whatsapp_Broadcast.png"; // ✅ your image
const features = [
    {
        icon: _jsx(FaEnvelopeOpenText, { size: 35 }),
        title: "Forget Email & SMS!",
        desc: "WhatsApp is now a primary channel. Drive high-impact campaigns that deliver action instantly.",
        color: "#06b6d4",
    },
    {
        icon: _jsx(FaUsers, { size: 35 }),
        title: "Engage & Nurture",
        desc: "Acquire, nurture, and upsell using chatbots, APIs, and commerce integrations.",
        color: "#a855f7",
    },
    {
        icon: _jsx(FaCogs, { size: 35 }),
        title: "Integrate Your CRM",
        desc: "Run campaigns by syncing your favorite CRM with WhatsApp for enterprise-level automation.",
        color: "#f59e0b",
    },
    {
        icon: _jsx(FaMagic, { size: 35 }),
        title: "Personalized Promotions",
        desc: "Deliver tailored messages & offers at scale, powered by your CRM data.",
        color: "#ef4444",
    },
    {
        icon: _jsx(FaComments, { size: 35 }),
        title: "Intelligent Auto-Response",
        desc: "Smart chatbots follow workflows and escalate to sales teams when needed.",
        color: "#22c55e",
    },
    {
        icon: _jsx(FaLink, { size: 35 }),
        title: "Add to Your Stack",
        desc: "Seamlessly integrate with CRMs, Google Sheets, and your existing tools.",
        color: "#3b82f6",
    },
];
const BrandingAgencies = () => {
    return (_jsxs("div", { style: { fontFamily: "'Poppins', sans-serif", color: "#111827" }, children: [_jsxs("section", { style: {
                    position: "relative",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "3rem 6%",
                    background: "linear-gradient(135deg, #e0f7fa, #f3e8ff, #fff9c4)",
                }, children: [_jsxs("div", { style: { flex: 1, zIndex: 10 }, children: [_jsxs(motion.h1, { style: { fontSize: "3.5rem", fontWeight: 800, lineHeight: "1.2" }, initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1 }, children: ["Reimagine Branding ", _jsx("br", {}), " with Next-Gen AI"] }), _jsx(motion.p, { style: {
                                    marginTop: "1.5rem",
                                    fontSize: "1.25rem",
                                    maxWidth: "600px",
                                    color: "#374151",
                                }, initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.5, duration: 1 }, children: "Deliver unforgettable experiences, engage clients 24/7, and grow your branding agency with powerful automation." }), _jsx(motion.button, { style: {
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
                                }, whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, children: "Free 7 Days Trial" })] }), _jsx(motion.div, { style: {
                            flex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }, initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 }, transition: { duration: 1 }, children: _jsx("img", { src: heroImg, alt: "Branding AI", style: { width: "90%", maxWidth: "500px" } }) })] }), _jsxs("section", { style: {
                    background: "#ecfdf5",
                    padding: "6rem 2rem",
                }, children: [_jsxs("div", { style: { textAlign: "center", marginBottom: "3rem" }, children: [_jsx("h2", { style: { fontSize: "2.5rem", fontWeight: 700, marginBottom: 12 }, children: "Why Branding Agencies Choose Us" }), _jsx("p", { style: { fontSize: "1.1rem", color: "#4b5563" }, children: "Powerful tools designed to amplify your campaigns and results." })] }), _jsx("div", { style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            gap: "2rem",
                            maxWidth: "1200px",
                            margin: "0 auto",
                        }, children: features.map((feature, i) => (_jsxs(motion.div, { style: {
                                background: "#fff",
                                padding: "2rem",
                                borderRadius: "1rem",
                                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                                border: `2px solid ${feature.color}`,
                            }, initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: i * 0.2 }, whileHover: { scale: 1.05, rotate: 1 }, children: [_jsx("div", { style: { color: feature.color, marginBottom: "1rem" }, children: feature.icon }), _jsx("h3", { style: { fontWeight: 600, fontSize: "1.25rem" }, children: feature.title }), _jsx("p", { style: { marginTop: "0.5rem", color: "#374151" }, children: feature.desc })] }, i))) })] }), _jsxs("section", { className: "cta", children: [_jsx(motion.h3, { initial: { opacity: 0, scale: 0.95, color: "white" }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.6 }, children: "Ready to Elevate Your Agency?" }), _jsx(motion.p, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6, delay: 0.12 }, children: " Join 1000+ branding agencies using AI to create unforgettable campaigns." }), _jsx(motion.div, { style: { marginTop: 14 }, children: _jsx(motion.button, { className: "btn primary pulse", whileHover: { scale: 1.05 }, style: { marginTop: "24px",
                                background: "#fff", // ✅ White button
                                color: "#1a1a1a",
                                padding: "16px 32px",
                                // borderRadius: "12px",
                                fontWeight: "700",
                                border: "none",
                                cursor: "pointer",
                                transition: "0.3s",
                            }, children: "Start Free Trial" }) })] })] }));
};
export default BrandingAgencies;
