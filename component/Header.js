import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
import logoScrolled from "../assets/logo2.png"; // Your second logo image
import logoname from "../assets/logoname.png";
import logoname2 from "../assets/logoname2.png";
import MegaMenu from "./Navbar/navbar";
import { motion } from "framer-motion";
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        const handleResize = () => setIsMobile(window.innerWidth < 900);
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const closeMobileMenu = () => setMenuOpen(false);
    return (_jsxs(motion.header, { initial: { y: -100 }, animate: { y: 0 }, transition: { duration: 0.5, ease: "easeOut" }, style: { ...styles.header, ...(scrolled ? styles.scrolled : {}) }, children: [_jsx("div", { style: { ...styles.logoContainer, cursor: "pointer" }, children: _jsxs(Link, { to: "/", style: { display: "flex", alignItems: "center", textDecoration: "none" }, children: [_jsx(motion.img, { src: scrolled ? logoScrolled : logo, alt: "Multipi Logo", style: styles.logoImg, whileHover: { scale: 1.1 }, transition: { type: "spring", stiffness: 300 } }), _jsx(motion.img, { src: scrolled ? logoname2 : logoname, alt: "Multipi", style: styles.logoname, whileHover: { scale: 1.05 }, transition: { type: "spring", stiffness: 300 } })] }) }), !isMobile && (_jsxs(_Fragment, { children: [_jsx("div", { style: styles.desktopNav, children: _jsx(MegaMenu, {}) }), _jsx("div", { style: styles.desktopNav, children: _jsxs("div", { style: styles.buttonGroup, children: [_jsx(Link, { to: "/demo", style: { textDecoration: "none" }, children: _jsx(motion.button, { style: {
                                            ...styles.button,
                                            ...styles.cta,
                                            background: scrolled ? "#fff" : "#000",
                                            color: scrolled ? "#000" : "#fff",
                                        }, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: "Book Demo" }) }), _jsx(Link, { to: "/freeTrail", style: { textDecoration: "none" }, children: _jsx("button", { style: {
                                            ...styles.button,
                                            ...styles.outline,
                                            border: `1px solid ${scrolled ? "white" : "black"}`,
                                            color: scrolled ? "white" : "black",
                                        }, children: "Free Trial" }) }), _jsx(Link, { to: "/login", style: { textDecoration: "none" }, children: _jsx("button", { style: {
                                            ...styles.button,
                                            fontWeight: "bold",
                                            background: "transparent",
                                            border: "none",
                                            color: scrolled ? "white" : "black",
                                        }, children: "Login" }) })] }) })] })), isMobile && (_jsx("div", { style: styles.mobileMenuIcon, onClick: () => setMenuOpen((prev) => !prev), children: menuOpen ? (_jsx(FiX, { size: 28, color: scrolled ? "white" : "black" })) : (_jsx(FiMenu, { size: 28, color: scrolled ? "white" : "black" })) })), menuOpen && isMobile && (_jsxs("div", { style: styles.mobileDropdown, children: [_jsx(MegaMenu, {}), _jsxs("div", { style: { marginTop: "20px" }, children: [_jsx(Link, { to: "/demo", style: { textDecoration: "none" }, onClick: closeMobileMenu, children: _jsx("button", { style: { ...styles.button, ...styles.cta, width: "100%" }, children: "Book Demo" }) }), _jsx(Link, { to: "/freeTrail", style: { textDecoration: "none" }, onClick: closeMobileMenu, children: _jsx("button", { style: { ...styles.button, ...styles.outline, width: "100%" }, children: "Free Trial" }) }), _jsx(Link, { to: "/login", style: { textDecoration: "none" }, onClick: closeMobileMenu, children: _jsx("button", { style: {
                                        ...styles.button,
                                        background: "transparent",
                                        border: "none",
                                        fontWeight: "bold",
                                        width: "100%",
                                    }, children: "Login" }) })] })] }))] }));
};
const styles = {
    header: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "20px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "all 0.4s ease",
        background: "transparent",
        zIndex: 1000,
    },
    scrolled: {
        background: "rgba(3, 12, 24, 0.8)",
        padding: "12px 30px",
        boxShadow: "0 4px 10px rgba(3, 87, 243, 0.2)",
    },
    logoContainer: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
    },
    logoImg: {
        width: "50px", // fixed width
        height: "50px", // fixed height
        objectFit: "contain", // keeps proportions inside the box
        aspectRatio: "1 / 1", // ensures square shape
        marginRight: "10px",
        display: "block", // removes inline spacing issues
    },
    logoname: {
        width: "150px", // fixed width
        height: "50px", // fixed height
        objectFit: "contain", // keeps proportions inside the box
        aspectRatio: "1 / 1", // ensures square shape
        marginRight: "10px",
        display: "block", // removes inline spacing issues
    },
    logoText: {
        fontFamily: "'Orbitron', sans-serif",
        fontSize: "28px",
        fontWeight: "700",
        transition: "all 0.3s ease",
    },
    buttonGroup: { display: "flex", gap: "12px" },
    button: {
        padding: "10px 20px",
        borderRadius: "25px",
        fontWeight: "500",
        cursor: "pointer",
        transition: "all 0.3s ease",
        marginBottom: "10px",
    },
    cta: {
        background: "black",
        color: "white",
    },
    outline: {
        background: "transparent",
        border: "1px solid black",
        color: "black",
    },
    desktopNav: {
        display: "flex",
        alignItems: "center",
        gap: "20px",
    },
    mobileMenuIcon: {
        cursor: "pointer",
    },
    mobileDropdown: {
        position: "absolute",
        top: "100%",
        left: 0,
        width: "100%",
        background: "white",
        padding: "20px",
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        zIndex: 999,
        animation: "slideDown 0.3s ease",
    },
};
export default Header;
