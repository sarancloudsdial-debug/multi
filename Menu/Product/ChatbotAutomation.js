import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { Globe, ClipboardCheck, Users2, Gift } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
// import heroImg from "../../assets/hero_banner.png";
import heroImg from "../../assets/hero_banner_no_bg.png";
import { Bolt, Link2, BookOpen, } from "lucide-react";
import "./ChatbotAutomation.css";
const ChatbotAutomation = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: "hero", children: [_jsxs(motion.div, { className: "hero-content", initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1 }, children: [_jsxs("h1", { children: ["Build smarter customer journeys ", _jsx("br", {}), " with Multipi WhatsApp chatbots"] }), _jsx("p", { children: "Design powerful, no-code workflows that simplify marketing, sales, and support\u2014delivering the right message at the right moment, every time." }), _jsxs("div", { className: "btn-group", children: [_jsx(motion.button, { className: "btn-modern primary", whileHover: { scale: 1.05, y: -2 }, whileTap: { scale: 0.95 }, children: "Start Free" }), _jsx(motion.button, { className: "btn-modern secondary", whileHover: { scale: 1.05, y: -2 }, whileTap: { scale: 0.95 }, children: "Book a Demo" })] })] }), _jsx(motion.div, { className: "hero-image", initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 1 }, children: _jsx("img", { src: heroImg, alt: "WhatsApp chatbot banner" }) })] }), _jsxs("section", { className: "trusted", children: [_jsx(motion.h2, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 1 }, children: "Trusted by India\u2019s fastest-growing brands" }), _jsx("p", { children: "Scalable automation that grows with your business" }), _jsx("div", { className: "feature-grid", children: [
                            { icon: _jsx(Bolt, { size: 40, color: "#1e3a8a" }), title: "Automate 200+ steps with ease" },
                            { icon: _jsx(Link2, { size: 40, color: "#1e3a8a" }), title: "Link multiple chatbot flows together" },
                            { icon: _jsx(BookOpen, { size: 40, color: "#1e3a8a" }), title: "Robust APIs & ready-to-use integrations" },
                        ].map((f, idx) => (_jsxs(motion.div, { className: "feature-card", "data-aos": "fade-up", whileHover: { y: -8, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" }, children: [_jsx("span", { className: "icon flex justify-center", children: f.icon }), _jsx("h3", { children: f.title })] }, idx))) })] }), _jsxs("section", { className: "automation-flow", children: [_jsxs(motion.h2, { initial: { opacity: 0, y: -30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 1 }, children: ["Automate processes, drive sales & improve efficiency ", _jsx("br", {}), "across every stage of the customer journey"] }), _jsx("div", { className: "flow-grid1", children: [
                            {
                                stage: "Acquisition",
                                icon: _jsx(Globe, { size: 40, color: "#fff" }),
                                gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
                                desc: "Attract & qualify leads instantly with AI-powered chatbots.",
                            },
                            {
                                stage: "Onboarding",
                                icon: _jsx(ClipboardCheck, { size: 40, color: "#fff" }),
                                gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
                                desc: "Guide users with smooth onboarding & smart data collection.",
                            },
                            {
                                stage: "Engagement",
                                icon: _jsx(Users2, { size: 40, color: "#fff" }),
                                gradient: "linear-gradient(135deg, #06b6d4, #22d3ee)",
                                desc: "Boost interaction with reminders, updates & 1:1 conversations.",
                            },
                            {
                                stage: "Post-Purchase",
                                icon: _jsx(Gift, { size: 40, color: "#facc15" }),
                                gradient: "linear-gradient(135deg, #14b8a6, #2dd4bf)",
                                desc: "Delight customers with feedback loops, referrals & loyalty bots.",
                            },
                        ].map((item, idx) => (_jsxs(motion.div, { className: "stage-box", style: { background: item.gradient }, initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { delay: idx * 0.3, duration: 0.8 }, whileHover: { scale: 1.05, rotate: 1 }, children: [_jsx("div", { className: "stage-icon", children: item.icon }), _jsx("h3", { children: item.stage }), _jsx("p", { children: item.desc })] }, idx))) }), _jsx(motion.p, { className: "flow-footer", initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 1.2 }, children: "The possibilities with custom WhatsApp chatbots are endless" })] }), _jsxs("section", { className: "automation", children: [_jsxs(motion.h2, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 1 }, children: ["Drive conversions, boost engagement & save hours ", _jsx("br", {}), " with automated WhatsApp workflows"] }), _jsx(motion.img, { src: "https://cdn-icons-png.flaticon.com/512/891/891175.png", alt: "Automation Funnel", className: "funnel-img", whileInView: { scale: [0.8, 1], opacity: [0, 1] }, transition: { duration: 1 } }), _jsxs("div", { className: "options", children: [_jsxs(motion.div, { className: "option-card", "data-aos": "fade-right", whileHover: { scale: 1.05 }, children: [_jsx("h3", { children: "BYOC: Build your own chatbot" }), _jsx("p", { children: "Pick from our template library or create custom flows\u2014launch within minutes, no coding needed." })] }), _jsxs(motion.div, { className: "option-card", "data-aos": "fade-left", whileHover: { scale: 1.05 }, children: [_jsx("h3", { children: "Work with our experts" }), _jsx("p", { children: "Have a complex automation in mind? Our team will help design & deploy your chatbot strategy." })] })] })] }), _jsxs("section", { className: "comparison", children: [_jsx("h2", { children: "Why Multipi chatbots stand out" }), _jsxs(motion.table, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 1 }, children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "Features" }), _jsx("th", { children: "Competitor Chatbots" }), _jsx("th", { children: "Multipi" })] }) }), _jsxs("tbody", { children: [_jsxs("tr", { children: [_jsx("td", { children: "Multi-step automation" }), _jsx("td", { children: "Limited" }), _jsx("td", { children: "Up to 200+ steps" })] }), _jsxs("tr", { children: [_jsx("td", { children: "Interconnected workflows" }), _jsx("td", { children: "Not supported" }), _jsx("td", { children: "Fully supported" })] }), _jsxs("tr", { children: [_jsx("td", { children: "API & integrations" }), _jsx("td", { children: "Few options" }), _jsx("td", { children: "Wide range + documentation" })] })] })] })] }), _jsx("section", { className: "cta", children: _jsxs(motion.div, { initial: { scale: 0.9, opacity: 0 }, whileInView: { scale: 1, opacity: 1 }, transition: { duration: 0.8 }, children: [_jsx("h2", { children: "Ready to supercharge your customer conversations with Multipi?" }), _jsx(motion.button, { className: "btn-primary pulse", whileHover: { scale: 1.1 }, children: "Get Started Today" })] }) })] }));
};
export default ChatbotAutomation;
