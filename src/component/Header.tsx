import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";
import logoScrolled from "../assets/logo2.png"; // Your second logo image
import logoname from "../assets/logoname.png";
import logoname2 from "../assets/logoname2.png"
import MegaMenu from "./Navbar/navbar";
import { motion, AnimatePresence } from "framer-motion";



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

  return (
   <motion.header
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  style={{ ...styles.header, ...(scrolled ? styles.scrolled : {}) }}
>

      {/* Logo Section */}
      <div style={{ ...styles.logoContainer, cursor: "pointer" }}>
        <Link
          to="/"
          style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          {/* Scroll changes logo image */}
        <motion.img
  src={scrolled ? logoScrolled : logo}
  alt="Multipi Logo"
  style={styles.logoImg}
  whileHover={{ scale: 1.1 }}
  transition={{ type: "spring", stiffness: 300 }}
/>
          {/* <h1
            style={{
              ...styles.logoText,
              fontSize: scrolled ? "26px" : "28px",
              color: scrolled ? "white" : "black",
            }}
          >
            MULTIPI
          </h1> */}
          <motion.img
  src={scrolled ? logoname2 : logoname}
  alt="Multipi"
  style={styles.logoname}
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
/>
          
        </Link>
      </div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <>
          <div style={styles.desktopNav}>
            <MegaMenu />
          </div>
          <div style={styles.desktopNav}>
            <div style={styles.buttonGroup}>
              <Link to="/demo" style={{ textDecoration: "none" }}>
               <motion.button
  style={{
    ...styles.button,
    ...styles.cta,
    background: scrolled ? "#fff" : "#000",
    color: scrolled ? "#000" : "#fff",
  }}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Book Demo
</motion.button>

              </Link>
              <Link to="/freeTrail" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    ...styles.button,
                    ...styles.outline,
                    border: `1px solid ${scrolled ? "white" : "black"}`,
                    color: scrolled ? "white" : "black",
                  }}
                >
                  Free Trial
                </button>
              </Link>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <button
                  style={{
                    ...styles.button,
                    fontWeight: "bold",
                    background: "transparent",
                    border: "none",
                    color: scrolled ? "white" : "black",
                  }}
                >
                  Login
                </button>
              </Link>
            </div>
          </div>
        </>
      )}

      {/* Mobile Hamburger */}
      {isMobile && (
        <div style={styles.mobileMenuIcon} onClick={() => setMenuOpen((prev) => !prev)}>
          {menuOpen ? (
            <FiX size={28} color={scrolled ? "white" : "black"} />
          ) : (
            <FiMenu size={28} color={scrolled ? "white" : "black"} />
          )}
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      {menuOpen && isMobile && (
        <div style={styles.mobileDropdown}>
          <MegaMenu />
          <div style={{ marginTop: "20px" }}>
            <Link to="/demo" style={{ textDecoration: "none" }} onClick={closeMobileMenu}>
              <button style={{ ...styles.button, ...styles.cta, width: "100%" }}>Book Demo</button>
            </Link>
            <Link to="/freeTrail" style={{ textDecoration: "none" }} onClick={closeMobileMenu}>
              <button style={{ ...styles.button, ...styles.outline, width: "100%" }}>Free Trial</button>
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }} onClick={closeMobileMenu}>
              <button
          style={{
            ...styles.button,
            background: "transparent",
            border: "none",
            fontWeight: "bold",
            width: "100%",
          }}
              >
          Login
              </button>
            </Link>
          </div>
        </div>
      )}
</motion.header>

  );
};

const styles: { [key: string]: React.CSSProperties } = {
  
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
    width: "50px",          // fixed width
    height: "50px",         // fixed height
    objectFit: "contain",   // keeps proportions inside the box
    aspectRatio: "1 / 1",   // ensures square shape
    marginRight: "10px",
    display: "block",       // removes inline spacing issues
  },
  logoname: {
    width: "150px",          // fixed width
    height: "50px",         // fixed height
    objectFit: "contain",   // keeps proportions inside the box
    aspectRatio: "1 / 1",   // ensures square shape
    marginRight: "10px",
    display: "block",       // removes inline spacing issues
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
