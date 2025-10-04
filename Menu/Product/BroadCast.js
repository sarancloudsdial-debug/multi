import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { MessageSquare, Send, Users, BarChart } from "lucide-react";
import heroImg from "../../assets/wb-api.webp"; // replace with your image
export default function BroadcastPage() {
    const styles = {
        container: {
            fontFamily: "sans-serif",
            color: "#1a1a1a",
        },
        hero: {
            color: "black",
            padding: "180px 20px",
        },
        heroGrid: {
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
        },
        heroTitle: {
            fontSize: "48px",
            fontWeight: "bold",
            lineHeight: "1.2",
        },
        highlight: {
            color: "#2256b7", // ✅ logo matching color
        },
        heroText: {
            marginTop: "16px",
            fontSize: "18px",
            opacity: 0.9,
        },
        buttonGroup: {
            marginTop: "24px",
            display: "flex",
            gap: "16px",
            color: "black",
        },
        primaryBtn: {
            background: "#2256b7", // ✅ logo color
            color: "#fff",
            padding: "14px 28px",
            borderRadius: "12px",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            transition: "0.3s",
        },
        heroImg: {
            maxWidth: "400px",
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        },
        features: {
            background: "#f9fafb",
            padding: "80px 20px",
        },
        featuresGrid: {
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
            marginTop: "48px",
        },
        featureCard: {
            background: "white",
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            transition: "0.3s",
        },
        featureTitle: {
            marginTop: "12px",
            fontSize: "20px",
            fontWeight: "600",
        },
        featureText: {
            marginTop: "8px",
            color: "#555",
            fontSize: "16px",
        },
        testimonials: {
            background: "#f0f4f8", // neutral light background
            padding: "80px 20px",
        },
        testimonialsGrid: {
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            marginTop: "48px",
        },
        testimonialCard: {
            background: "white",
            borderRadius: "16px",
            padding: "28px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
            border: "1px solid #e5e7eb",
            textAlign: "left",
        },
        quote: {
            fontSize: "20px",
            fontWeight: "600",
            color: "#111827",
        },
        text: {
            marginTop: "12px",
            fontSize: "16px",
            color: "#4b5563",
            lineHeight: "1.6",
        },
        author: {
            marginTop: "20px",
            fontWeight: "700",
            color: "#111827",
        },
        role: {
            fontSize: "14px",
            color: "#6b7280",
        },
        cta: {
            padding: "80px 10%",
            textAlign: "center",
            background: "linear-gradient(120deg, #2256b7, #334155)", // ✅ logo gradient
            color: "#fff",
        },
        ctaHeading: {
            fontSize: "28px",
            marginBottom: "20px",
            color: "#fff",
        },
        ctaBtn: {
            marginTop: "24px",
            background: "#fff",
            color: "#2256b7", // ✅ logo color
            padding: "16px 32px",
            fontWeight: "700",
            border: "none",
            cursor: "pointer",
            transition: "0.3s",
        },
        automationFlow: {
            textAlign: "center",
            padding: "90px 10%",
            position: "relative",
        },
        flowContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "50px",
            marginTop: "50px",
        },
        stageBox: {
            width: "320px",
            padding: "30px",
            borderRadius: "25px",
            color: "#fff",
            textAlign: "center",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
        },
        stageIcon: {
            fontSize: "40px",
            display: "block",
            marginBottom: "10px",
        },
        stageTitle: {
            fontSize: "22px",
            fontWeight: 700,
            marginBottom: "8px",
        },
        stageText: {
            fontSize: "16px",
            lineHeight: 1.5,
        },
        flowArrow: {
            fontSize: "32px",
            marginTop: "15px",
            animation: "bounce 1.5s infinite",
        },
        flowFooter: {
            marginTop: "60px",
            fontSize: "18px",
            fontWeight: 600,
            color: "#334155",
        },
    };
    const testimonials = [
        {
            quote: "“Game-Changer for Our Marketing”",
            text: "This platform has completely transformed the way we reach our customers. The broadcast tools help us send campaigns faster and track results in real-time.",
            author: "Sophia Lee",
            role: "Marketing Director, BrightStart",
        },
        {
            quote: "“Seamless and Easy to Use”",
            text: "We scaled our customer support with zero hassle. The modern dashboard and automation features are intuitive and saved us hours every week.",
            author: "Daniel Kim",
            role: "Founder, NovaTech",
        },
        {
            quote: "“Boosted Engagement by 40%”",
            text: "Our engagement rate skyrocketed after using the broadcast system. Personalization and analytics helped us understand our audience better.",
            author: "Priya Sharma",
            role: "Growth Manager, Zenith Corp",
        },
    ];
    return (_jsxs("div", { style: styles.container, children: [_jsx("section", { style: styles.hero, children: _jsxs("div", { style: styles.heroGrid, children: [_jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [_jsxs("h1", { style: styles.heroTitle, children: ["Reach Customers ", _jsx("span", { style: styles.highlight, children: "Anywhere" })] }), _jsx("p", { style: styles.heroText, children: "Send personalized updates, promotions, and reminders instantly with our smart messaging platform. Engage your audience with one click." }), _jsx("div", { style: styles.buttonGroup, children: _jsx("button", { style: styles.primaryBtn, onMouseEnter: (e) => {
                                            e.currentTarget.style.background = "#334155";
                                        }, onMouseLeave: (e) => {
                                            e.currentTarget.style.background = "#2256b7";
                                        }, children: "Start Broadcasting" }) })] }), _jsx(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.9 }, style: { display: "flex", justifyContent: "center" }, children: _jsx("img", { src: heroImg, alt: "Broadcast Illustration", style: styles.heroImg }) })] }) }), _jsx("section", { style: { background: "#e0f2fe", padding: "60px 20px" }, children: _jsx("div", { style: {
                        maxWidth: "1100px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "24px",
                    }, children: [
                        {
                            icon: "📊",
                            title: "Analytics Dashboard",
                            desc: "Track campaign performance with real-time insights and reports.",
                        },
                        {
                            icon: "⚡",
                            title: "Automation Tools",
                            desc: "Save time by automating follow-ups, reminders, and workflows.",
                        },
                        {
                            icon: "🌍",
                            title: "Global Reach",
                            desc: "Connect with audiences worldwide in their local language.",
                        },
                    ].map((item, i) => (_jsxs(motion.div, { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: i * 0.15 }, style: {
                            background: "#fff",
                            borderRadius: "14px",
                            padding: "30px 20px",
                            textAlign: "center",
                            boxShadow: "0 6px 14px rgba(0,0,0,0.1)",
                            border: "2px solid #cbd5e1",
                        }, children: [_jsx("div", { style: { fontSize: "36px", color: "#2256b7" }, children: item.icon }), _jsx("h3", { style: { fontSize: "20px", fontWeight: "700", marginTop: "10px" }, children: item.title }), _jsx("p", { style: { fontSize: "16px", color: "#555", marginTop: "8px" }, children: item.desc })] }, i))) }) }), _jsx("section", { style: styles.features, children: _jsxs("div", { children: [_jsx("h2", { style: { textAlign: "center", fontSize: "36px", fontWeight: "bold" }, children: "Why Choose Our Broadcast?" }), _jsx("p", { style: {
                                textAlign: "center",
                                color: "#555",
                                maxWidth: "700px",
                                margin: "12px auto",
                                fontSize: "18px",
                            }, children: "Simplify customer engagement with powerful tools designed for modern businesses." }), _jsx("div", { style: styles.featuresGrid, children: [
                                {
                                    icon: _jsx(MessageSquare, { size: 40, color: "#2256b7" }),
                                    title: "Instant Messaging",
                                    desc: "Deliver updates instantly with bulk messaging that feels personal.",
                                },
                                {
                                    icon: _jsx(Users, { size: 40, color: "#2256b7" }),
                                    title: "Smart Audience",
                                    desc: "Segment and target your audience for better conversions.",
                                },
                                {
                                    icon: _jsx(Send, { size: 40, color: "#2256b7" }),
                                    title: "One-Click Campaigns",
                                    desc: "Schedule, automate, and send broadcasts effortlessly.",
                                },
                                {
                                    icon: _jsx(BarChart, { size: 40, color: "#2256b7" }),
                                    title: "Track Performance",
                                    desc: "Get real-time analytics on campaign reach and engagement.",
                                },
                            ].map((feature, i) => (_jsxs(motion.div, { style: styles.featureCard, initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: i * 0.2 }, children: [feature.icon, _jsx("h3", { style: styles.featureTitle, children: feature.title }), _jsx("p", { style: styles.featureText, children: feature.desc })] }, i))) })] }) }), _jsx("section", { style: styles.testimonials, children: _jsxs("div", { style: { maxWidth: "1200px", margin: "0 auto", textAlign: "center" }, children: [_jsx("h2", { style: { fontSize: "36px", fontWeight: "700", color: "#111827" }, children: "Loved by Businesses Worldwide" }), _jsx("p", { style: { marginTop: "12px", fontSize: "18px", color: "#374151", opacity: 0.9 }, children: "Here\u2019s what some of our amazing clients have to say about us." }), _jsx("div", { style: styles.testimonialsGrid, children: testimonials.map((t, i) => (_jsxs(motion.div, { style: styles.testimonialCard, initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { delay: i * 0.2 }, children: [_jsx("p", { style: styles.quote, children: t.quote }), _jsx("p", { style: styles.text, children: t.text }), _jsx("p", { style: styles.author, children: t.author }), _jsx("p", { style: styles.role, children: t.role })] }))) })] }) }), _jsxs("section", { className: "cta", children: [_jsx(motion.h3, { initial: { opacity: 0, scale: 0.95, color: "white" }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.6 }, children: "Ready to Supercharge Your Communication?" }), _jsx(motion.p, { initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { duration: 0.6, delay: 0.12 }, children: "Start a free trial and see how much time your team can save by automating routine replies and centralizing inboxes." }), _jsx(motion.div, { style: { marginTop: 14 }, children: _jsx(motion.button, { className: "btn primary pulse", whileHover: { scale: 1.05 }, style: styles.ctaBtn, children: "Start Free Trial" }) })] })] }));
}
