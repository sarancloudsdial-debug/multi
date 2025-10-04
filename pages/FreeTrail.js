import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
const FreeTrial = () => {
    const [focused, setFocused] = useState(null);
    const handleFocus = (field) => setFocused(field);
    const handleBlur = () => setFocused(null);
    const mainFields = ["Full Name", "Email", "Company Name", "Phone"];
    const passwordFields = ["Password", "Confirm Password"];
    return (_jsx("div", { style: styles.container, children: _jsxs(motion.div, { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, style: styles.card, children: [_jsxs("div", { style: styles.header, children: [_jsx("h1", { style: styles.title, children: "Start Your Free Trial" }), _jsx("p", { style: styles.subtitle, children: "No credit card required. Cancel anytime." })] }), _jsxs("form", { style: styles.form, onSubmit: (e) => e.preventDefault(), children: [mainFields.map((label) => (_jsxs("div", { style: styles.field, children: [_jsx("label", { style: styles.label, children: label }), _jsx("input", { type: label === "Email" ? "email" : label === "Phone" ? "tel" : "text", placeholder: `Enter your ${label}`, style: { ...styles.input, ...(focused === label ? styles.inputFocus : {}) }, onFocus: () => handleFocus(label), onBlur: handleBlur })] }, label))), _jsx("div", { style: styles.row, children: passwordFields.map((label) => (_jsxs("div", { style: { flex: 1 }, children: [_jsx("label", { style: styles.label, children: label }), _jsx("input", { type: "password", placeholder: "********", style: { ...styles.input, ...(focused === label ? styles.inputFocus : {}) }, onFocus: () => handleFocus(label), onBlur: handleBlur })] }, label))) }), _jsx(motion.button, { whileHover: { scale: 1.03 }, whileTap: { scale: 0.98 }, type: "submit", style: styles.button, children: "Start Free Trial" })] }), _jsxs("div", { style: styles.dividerWrapper, children: [_jsx("div", { style: styles.divider }), _jsx("p", { style: styles.orText, children: "or" }), _jsx("div", { style: styles.divider })] }), _jsxs(motion.button, { whileHover: { scale: 1.03 }, whileTap: { scale: 0.98 }, style: styles.googleBtn, children: [_jsx(FcGoogle, { style: { fontSize: 22 } }), _jsx("span", { style: { fontWeight: 500 }, children: "Sign up with Google" })] }), _jsxs("p", { style: styles.footer, children: ["Already have an account?", " ", _jsx("a", { href: "#", style: styles.link, children: "Log in" })] })] }) }));
};
// Typed styles object
const styles = {
    container: {
        minHeight: "100vh",
        padding: "120px 20px 40px 20px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #f0f4ff, #ffffff)",
        boxSizing: "border-box",
    },
    card: {
        width: "100%",
        maxWidth: "600px",
        background: "#fff",
        borderRadius: "18px",
        padding: "40px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
    },
    header: { textAlign: "center", marginBottom: "56px" },
    title: {
        fontSize: "28px",
        fontWeight: 700,
        background: "linear-gradient(90deg, #4368b1, #5a7ed1)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    },
    subtitle: { fontSize: "14px", color: "#6b7280", marginTop: "8px" },
    form: { display: "flex", flexDirection: "column", gap: "16px" },
    field: { display: "flex", flexDirection: "column" },
    label: { color: "#374151", fontWeight: 600, marginBottom: "6px" },
    input: {
        padding: "10px 14px",
        border: "1px solid #d1d5db",
        borderRadius: "8px",
        fontSize: "14px",
        outline: "none",
        transition: "box-shadow 0.25s, border 0.25s",
    },
    inputFocus: {
        border: "1px solid #4368b1",
        boxShadow: "0 0 6px rgba(67, 104, 177, 0.6)",
    },
    row: { display: "flex", gap: "16px" },
    button: {
        width: "100%",
        background: "linear-gradient(90deg, #4368b1, #5a7ed1)",
        color: "#fff",
        padding: "14px",
        borderRadius: "10px",
        fontWeight: 600,
        fontSize: "16px",
        border: "none",
        cursor: "pointer",
        marginTop: "12px",
        boxShadow: "0 6px 16px rgba(67,104,177,0.25)",
    },
    dividerWrapper: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
        margin: "24px 0",
    },
    divider: { flex: 1, height: "1px", background: "#d1d5db" },
    orText: { fontSize: "14px", color: "#6b7280", margin: 0 },
    googleBtn: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "12px",
        border: "1px solid #d1d5db",
        borderRadius: "10px",
        cursor: "pointer",
        background: "#fff",
        fontSize: "15px",
        transition: "transform 0.15s ease",
    },
    footer: {
        textAlign: "center",
        fontSize: "14px",
        color: "#6b7280",
        marginTop: "18px",
    },
    link: {
        color: "#4368b1",
        fontWeight: 600,
        textDecoration: "none",
    },
};
export default FreeTrial;
