import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Megaphone, Bot, Inbox, Workflow, MessageCircle, Plug } from "lucide-react";
const Features = () => {
    const features = [
        {
            title: "Broadcast",
            desc: "Push out your campaigns and engage with high response WhatsApp messages. Tag contacts, categorize and target them in groups using personalized communications.",
            icon: _jsx(Megaphone, { size: 40, color: "#4369B2" }),
        },
        {
            title: "Chatbots",
            desc: "Create no-code chatbots to provide instant responses to common requests. Simplify mass communication and boost sales with automated tools.",
            icon: _jsx(Bot, { size: 40, color: "#3b82f6" }),
        },
        {
            title: "Shared Team Inbox",
            desc: "Collaborate with your team using a shared WhatsApp inbox. Manage support, post-sales communication, and order updates seamlessly.",
            icon: _jsx(Inbox, { size: 40, color: "#1e40af" }),
        },
        {
            title: "Automation",
            desc: "Automate workflows, replies, and customer journeys effortlessly to save time and scale support.",
            icon: _jsx(Workflow, { size: 40, color: "#2563eb" }),
        },
        {
            title: "Personalized Engagement",
            desc: "Build and nurture customer relationships by sending tailored messages and campaigns that resonate.",
            icon: _jsx(MessageCircle, { size: 40, color: "#60a5fa" }),
        },
        {
            title: "Integrations",
            desc: "Connect with CRM and other tools effortlessly to bring customer context in a few clicks.",
            icon: _jsx(Plug, { size: 40, color: "#93c5fd" }),
        },
    ];
    return (_jsxs("section", { style: styles.section, children: [_jsx("div", { style: styles.backgroundAccent }), _jsx(motion.div, { style: styles.animatedBlob, animate: { scale: [1, 1.2, 1] }, transition: { duration: 8, repeat: Infinity, ease: "easeInOut" } }), _jsxs("div", { style: styles.container, children: [_jsxs(motion.h2, { style: styles.title, initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.7 }, viewport: { once: true }, children: ["Powerful ", _jsx("span", { style: styles.gradientText, children: "Features" })] }), _jsx(motion.p, { style: styles.subtitle, initial: { opacity: 0 }, whileInView: { opacity: 1 }, transition: { delay: 0.2, duration: 0.7 }, viewport: { once: true }, children: "Engage customers, automate workflows, and boost sales with our all-in-one solutions." }), _jsx("div", { style: styles.grid, children: features.map((feature, i) => (_jsxs(motion.div, { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: i * 0.15 }, viewport: { once: true }, style: styles.card, whileHover: {
                                scale: 1.05,
                                boxShadow: "0 12px 30px rgba(67,105,178,0.3)",
                            }, children: [_jsx("div", { style: styles.iconWrapper, children: feature.icon }), _jsx(motion.h3, { style: styles.featureTitle, whileHover: { scale: 1.08 }, children: feature.title }), _jsx("p", { style: styles.featureDesc, children: feature.desc })] }, i))) })] })] }));
};
const styles = {
    section: {
        position: "relative",
        paddingTop: 80,
        paddingBottom: 80,
        background: "linear-gradient(to bottom right, #ffffff, #f3f4f6, #e0e7ff)",
        overflow: "hidden",
    },
    backgroundAccent: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0, // fixed `inset: 0`
        background: "radial-gradient(circle at 20% 30%, rgba(67,105,178,0.12), transparent 60%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.15), transparent 50%)",
        zIndex: 0,
    },
    animatedBlob: {
        position: "absolute",
        top: "30%",
        left: "50%",
        width: 400,
        height: 400,
        background: "radial-gradient(circle, rgba(67,105,178,0.15), transparent 70%)",
        borderRadius: "50%",
        zIndex: 0,
        filter: "blur(60px)",
    },
    container: {
        position: "relative",
        zIndex: 1,
        maxWidth: 1280,
        margin: "0 auto",
        paddingLeft: 24,
        paddingRight: 24,
        boxSizing: "border-box",
    },
    title: {
        fontSize: 40,
        fontWeight: 800,
        textAlign: "center",
        color: "#111827",
        marginBottom: 16,
        lineHeight: 1.2,
    },
    gradientText: {
        background: "linear-gradient(90deg, #4369B2, #3b82f6, #1e40af)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },
    subtitle: {
        fontSize: 18,
        textAlign: "center",
        color: "#6B7280",
        marginBottom: 64,
        maxWidth: 768,
        marginLeft: "auto",
        marginRight: "auto",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 40,
    },
    card: {
        backgroundColor: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(14px)",
        borderRadius: 24,
        padding: 32,
        boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    iconWrapper: {
        marginBottom: 16,
    },
    featureTitle: {
        fontSize: 20,
        fontWeight: 700,
        marginBottom: 12,
        background: "linear-gradient(90deg, #4369B2, #3b82f6)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },
    featureDesc: {
        color: "#374151",
        lineHeight: 1.5,
        fontSize: 16,
    },
};
export default Features;
