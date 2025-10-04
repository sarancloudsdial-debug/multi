import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
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
    return (_jsxs("div", { className: "team-3d-page", children: [_jsxs("section", { className: "hero-3d", "data-aos": "fade-up", children: [_jsx(motion.h1, { initial: { y: 50, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 1.2 }, children: "Team Inbox: Effortless Collaboration" }), _jsx(motion.p, { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 1.2, delay: 0.3 }, children: "Centralize messages, assign conversations, and manage your team efficiently." }), _jsx(motion.button
                    // whileHover={{ scale: 1.1, rotate: 2 }}
                    , { 
                        // whileHover={{ scale: 1.1, rotate: 2 }}
                        className: "btn-3d", children: "Book a Demo" })] }), _jsxs("section", { className: "features-3d", "data-aos": "fade-up", children: [_jsx("h2", { children: "Features Designed for Teams" }), _jsx("div", { className: "features-grid-3d", children: features.map((f, i) => (_jsxs(motion.div, { className: "feature-card-3d", whileHover: { rotateY: 5, rotateX: 5, scale: 1.05 }, transition: { type: "spring", stiffness: 300 }, children: [_jsx("div", { className: "feature-icon", children: f.icon }), _jsx("h3", { children: f.title }), _jsx("p", { children: f.description })] }, i))) })] }), _jsxs("section", { className: "manage-3d", "data-aos": "fade-left", children: [_jsx(motion.h2, { initial: { x: -50, opacity: 0 }, whileInView: { x: 0, opacity: 1 }, transition: { duration: 0.8 }, children: "Manage Conversations Smarter" }), _jsxs("div", { className: "manage-cards-3d", children: [_jsxs(motion.div, { whileHover: { y: -4 }, className: "manage-card-3d", children: [_jsx("h3", { children: "Team Collaboration" }), _jsx("p", { children: "Assign chats to teams and improve transparency in communication." })] }), _jsxs(motion.div, { whileHover: { y: -4 }, className: "manage-card-3d", children: [_jsx("h3", { children: "Contact Scalability" }), _jsx("p", { children: "Import/export contacts, tag VIPs, and manage large lists effortlessly." })] }), _jsxs(motion.div, { whileHover: { y: -4 }, className: "manage-card-3d", children: [_jsx("h3", { children: "Personalized Engagement" }), _jsx("p", { children: "Develop opportunities through personalized customer interactions." })] })] })] }), _jsxs("section", { className: "testimonials-3d", "data-aos": "fade-up", children: [_jsx("h2", { children: "What Customers Say" }), _jsx("div", { className: "testimonials-grid-3d", children: testimonials.map((t, i) => (_jsxs(motion.div, { className: "testimonial-3d", whileHover: { rotateY: 5, rotateX: 5, scale: 1.03 }, transition: { type: "spring", stiffness: 250 }, children: [_jsxs("p", { children: ["\u201C", t.text, "\u201D"] }), _jsxs("span", { children: ["- ", t.author] })] }, i))) })] }), _jsx("section", { className: "cta", children: _jsxs(motion.div, { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { duration: 1 }, children: [_jsx("h2", { className: "team", children: " Start Using Your Team Inbox Today" }), _jsx("p", { children: "Bring all customer conversations into one place and reply faster as a team." }), _jsx(motion.button, { className: "cta-btn", 
                            // whileHover={{ scale: 1.1, rotate: 2 }}
                            whileTap: { scale: 0.95 }, children: "Book a Demo" })] }) })] }));
};
export default Teaminbox;
