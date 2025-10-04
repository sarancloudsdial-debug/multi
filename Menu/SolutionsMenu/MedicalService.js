import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import "./MedicalService.css";
import img4 from "../../assets/saran/funnel.png";
// import img4 from "../assets/saran/funnel.png";
import img6 from "../../assets/saran/Whatsapp_Health.jpg";
import img1 from "../../assets/saran/app.png";
import img3 from "../../assets/saran/chat.png";
import img5 from "../../assets/saran/Thumbnail.png";
const MedicalService = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, once: true });
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs("section", { className: "hero-section", children: [_jsxs(motion.div, { className: "hero-text", initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1 }, children: [_jsx("h1", { children: "Multipi for Healthcare" }), _jsx("p", { children: "Connect and engage your patients using WhatsApp. More secure healthcare communications that guarantee better privacy." }), _jsxs("ul", { children: [_jsx("li", { children: "\u2B50 Rated 4.6/5 on G2" }), _jsx("li", { children: "\uD83D\uDCB3 No credit card required" })] }), _jsx("div", { className: "btn-group", children: _jsx("button", { className: "btn-primary", children: "Book a Demo" }) })] }), _jsx(motion.div, { className: "hero-image", initial: { scale: 0.8 }, animate: { scale: 1 }, transition: { duration: 1.2 }, children: _jsx("img", { src: img6, alt: "Healthcare Hero", className: "healthcare" }) })] }), _jsx("section", { className: "features-grid", children: [
                    {
                        title: "Appointment Automation",
                        text: "Automate with Multipi’s drag-and-drop chatbot builder for self-service appointment booking.",
                        img: img1,
                    },
                    {
                        title: "Appointment Reminders",
                        text: "Send automated WhatsApp reminders to reduce no-shows and improve patient care.",
                        img: img5,
                    },
                    {
                        title: "Confirmation & Support",
                        text: "Notify patients for sample collection, report pickup, and clinic visits automatically.",
                        img: img4,
                    },
                    {
                        title: "Automated Support",
                        text: "Support patients 24/7 with Multipi chatbot, even without live staff.",
                        img: img3,
                    },
                ].map((f, idx) => (_jsxs(motion.div, { className: "feature-card", whileHover: { scale: 1.05 }, "data-aos": "fade-up", children: [_jsx("img", { src: f.img, alt: f.title }), _jsx("h3", { children: f.title }), _jsx("p", { children: f.text })] }, idx))) }), _jsx("section", { className: "secure-section", children: _jsxs(motion.div, { className: "secure-content", initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 1 }, children: [_jsx("h2", { className: "secure", children: "Secure & Compliant" }), _jsx("p", { children: "WhatsApp ensures end-to-end encryption, HIPAA compliance, and safe patient data exchange for collaboration and consultation." }), _jsxs("ul", { children: [_jsx("li", { children: "\uD83D\uDCC5 Appointment Reminders" }), _jsx("li", { children: "\uD83E\uDD16 Automated Booking" }), _jsx("li", { children: "\u26A1 Faster Workflows" }), _jsx("li", { children: "\uD83D\uDD17 Easy Integrations" }), _jsx("li", { children: "\uD83D\uDCF1 Telemedicine Ready" }), _jsx("li", { children: "\uD83D\uDD12 Privacy Guaranteed" })] })] }) }), _jsxs("section", { className: "engagement", children: [_jsx(motion.h2, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 1 }, children: "Enhanced Patient Engagement" }), _jsx("p", { children: "Use personalized messaging, multimedia content, and remote consultations to improve accessibility and patient outcomes." })] }), _jsxs("section", { className: "testimonials", children: [_jsx("h2", { children: "What Customers Say" }), _jsxs("div", { className: "testimonial-slider", children: [_jsxs(motion.div, { className: "testimonial-card", whileHover: { scale: 1.05 }, children: [_jsx("p", { children: "\u201CAmazing CRM to manage WhatsApp business. Simple, easy to manage, and no technical code is required. Best support team ever.\u201D" }), _jsx("span", { children: "- Arth T, Owner" })] }), _jsxs(motion.div, { className: "testimonial-card", whileHover: { scale: 1.05 }, children: [_jsx("p", { children: "\u201CVery useful for Marketing. It\u2019s the most complete WhatsApp tool I\u2019ve ever used. Email is dropping, but WhatsApp delivers.\u201D" }), _jsx("span", { children: "- Cristian, CEO" })] })] })] }), _jsx("section", { className: "cta", children: _jsxs(motion.div, { initial: { scale: 0.9 }, whileInView: { scale: 1 }, transition: { duration: 0.8 }, children: [_jsx("h2", { children: "Discover More with Multipi" }), _jsx("p", { children: "Harness WhatsApp, Facebook, and Instagram with one of the fastest growing Business Solution Providers." }), _jsx("button", { className: "btn-primary", children: "Book a Demo" })] }) })] }));
};
export default MedicalService;
