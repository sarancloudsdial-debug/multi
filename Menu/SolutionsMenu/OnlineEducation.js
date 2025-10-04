import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../../assets/Whatsapp-education.png";
import heroImg2 from "../../assets/Online-education2.webp";
// ----------------- Hero Section -----------------
const OnlineEducation = () => {
    const styles = {
        section: {
            minHeight: "100vh",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5% 5%",
            background: "linear-gradient(to right, #f5f7fb, #ffffff, #e8eefc)",
            fontFamily: "'Poppins', sans-serif",
        },
        textBlock: {
            flex: 1,
            minWidth: "300px",
            paddingRight: "1.5rem",
        },
        title: {
            fontSize: "2.5rem",
            fontWeight: 800,
            marginBottom: "1.5rem",
            color: "#4368B1",
        },
        desc: {
            fontSize: "1.2rem",
            marginBottom: "1.5rem",
            color: "#374151",
            maxWidth: "600px",
        },
        button: {
            background: "linear-gradient(to right, #4368B1, #5a7bd6)",
            color: "#fff",
            padding: "0.75rem 1.5rem",
            borderRadius: "10px",
            fontWeight: 600,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            textDecoration: "none",
            display: "inline-block",
            cursor: "pointer",
        },
        imgBlock: {
            flex: 1,
            display: "flex",
            justifyContent: "center",
            minWidth: "300px",
        },
        img: {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "15px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        },
    };
    return (_jsxs("section", { style: styles.section, children: [_jsxs(motion.div, { style: styles.textBlock, initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 1 }, children: [_jsx("h1", { style: styles.title, children: "Transform Learning with WhatsApp" }), _jsx("p", { style: styles.desc, children: "Deliver personalized education, automate student support, and make learning fun \u2014 all through WhatsApp." }), _jsx(motion.div, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.95 }, children: _jsx(Link, { to: "/freeTrail", style: styles.button, children: "Get Started" }) })] }), _jsx(motion.div, { style: styles.imgBlock, initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 1 }, children: _jsx("img", { src: heroImg, alt: "Online Education", style: styles.img }) })] }));
};
// ----------------- CRM Features Section -----------------
const CRMFeaturesAnimated = () => {
    const features = [
        { title: "Smart Contact Segmentation", description: "AI-powered tags for better targeting.", icon: "📋" },
        { title: "Automated Follow-Ups", description: "Schedule WhatsApp follow-ups easily.", icon: "⏳" },
        { title: "Parent-Teacher Chat", description: "Instant parent-teacher communication.", icon: "💬" },
        { title: "Digital Onboarding", description: "Onboard students with digital checklists.", icon: "📝" },
        { title: "Event Notifications", description: "Automate reminders for events & exams.", icon: "📅" },
        { title: "Analytics Dashboard", description: "Visual performance reports via WhatsApp.", icon: "📊" },
    ];
    const styles = {
        section: {
            padding: "6rem 1.5rem",
            background: "linear-gradient(to right, #e8eefc, #ffffff, #f5f7fb)",
        },
        heading: {
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "3rem",
            color: "#4368B1",
        },
        container: {
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "space-between",
            alignItems: "center",
        },
        grid: {
            flex: 2,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            width: "100%",
        },
        card: {
            background: "#fff",
            borderRadius: "15px",
            boxShadow: "0 6px 18px rgba(67,104,177,0.2)",
            padding: "1.5rem",
        },
        icon: { fontSize: "2rem", marginBottom: "0.5rem" },
        title: { fontSize: "1.2rem", fontWeight: 700, color: "#1e3a8a" },
        desc: { color: "#374151", marginTop: "0.5rem" },
        sideImg: {
            flex: 1,
            minWidth: "300px",
            display: "flex",
            justifyContent: "center",
        },
        img: {
            width: "100%",
            maxWidth: "500px",
            borderRadius: "20px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        },
    };
    return (_jsxs("section", { id: "features", style: styles.section, children: [_jsx(motion.h2, { style: styles.heading, initial: { opacity: 0, y: -30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: "Powerful CRM Features" }), _jsxs("div", { style: styles.container, children: [_jsx("div", { style: styles.grid, children: features.map((feat, i) => (_jsxs(motion.div, { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { delay: i * 0.2, type: "spring", stiffness: 80 }, whileHover: { scale: 1.05 }, style: styles.card, children: [_jsx("div", { style: styles.icon, children: feat.icon }), _jsx("h3", { style: styles.title, children: feat.title }), _jsx("p", { style: styles.desc, children: feat.description })] }, feat.title))) }), _jsx(motion.div, { style: styles.sideImg, initial: { scale: 0.9, opacity: 0 }, whileInView: { scale: 1, opacity: 1 }, viewport: { once: true }, transition: { duration: 0.6, type: "spring", bounce: 0.3 }, children: _jsx("img", { src: heroImg2, alt: "Ad", style: styles.img }) })] })] }));
};
// ----------------- Free Trial Ad Section -----------------
const FreeTrialAd = () => {
    const styles = {
        section: {
            padding: "6rem 1.5rem",
            textAlign: "center",
        },
        ctaBtn: {
            marginTop: "24px",
            background: "#fff",
            color: "#1a1a1a",
            padding: "16px 32px",
            borderRadius: "12px",
            fontWeight: "700",
            border: "none",
            cursor: "pointer",
            transition: "0.3s",
        },
    };
    return (_jsxs("section", { style: styles.section, children: [_jsx(motion.h3, { initial: { opacity: 0, scale: 0.95 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.6 }, children: "Start Your 7-Day Free Trial" }), _jsx(motion.p, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6, delay: 0.12 }, children: "Unlock premium learning features today. Automate student support, boost engagement, and grow smarter \u2014 all risk-free." }), _jsx(motion.div, { style: { marginTop: 14 }, children: _jsx(Link, { to: "/freeTrail", style: { textDecoration: "none" }, children: _jsx(motion.button, { className: "btn primary pulse", whileHover: { scale: 1.05 }, style: styles.ctaBtn, children: "Start Free Trial \u2192" }) }) })] }));
};
// ----------------- Page Wrapper -----------------
const EducationPage = () => {
    return (_jsxs(_Fragment, { children: [_jsx(OnlineEducation, {}), _jsx(CRMFeaturesAnimated, {}), _jsx(FreeTrialAd, {})] }));
};
export default EducationPage;
