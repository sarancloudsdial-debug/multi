import React, { useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

type InputField = "Full Name" | "Email" | "Company Name" | "Phone" | "Password" | "Confirm Password" | null;

const FreeTrial: React.FC = () => {
  const [focused, setFocused] = useState<InputField>(null);

  const handleFocus = (field: InputField) => setFocused(field);
  const handleBlur = () => setFocused(null);

  const mainFields: InputField[] = ["Full Name", "Email", "Company Name", "Phone"];
  const passwordFields: InputField[] = ["Password", "Confirm Password"];

  return (
    <div style={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.card}
      >
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>Start Your Free Trial</h1>
          <p style={styles.subtitle}>No credit card required. Cancel anytime.</p>
        </div>

        {/* Form */}
        <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
          {mainFields.map((label) => (
            <div style={styles.field} key={label}>
              <label style={styles.label}>{label}</label>
              <input
                type={label === "Email" ? "email" : label === "Phone" ? "tel" : "text"}
                placeholder={`Enter your ${label}`}
                style={{ ...styles.input, ...(focused === label ? styles.inputFocus : {}) }}
                onFocus={() => handleFocus(label)}
                onBlur={handleBlur}
              />
            </div>
          ))}

          <div style={styles.row}>
            {passwordFields.map((label) => (
              <div style={{ flex: 1 }} key={label}>
                <label style={styles.label}>{label}</label>
                <input
                  type="password"
                  placeholder="********"
                  style={{ ...styles.input, ...(focused === label ? styles.inputFocus : {}) }}
                  onFocus={() => handleFocus(label)}
                  onBlur={handleBlur}
                />
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            style={styles.button}
          >
            Start Free Trial
          </motion.button>
        </form>

        {/* Divider */}
        <div style={styles.dividerWrapper}>
          <div style={styles.divider} />
          <p style={styles.orText}>or</p>
          <div style={styles.divider} />
        </div>

        {/* Google Signup */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          style={styles.googleBtn}
        >
          <FcGoogle style={{ fontSize: 22 }} />
          <span style={{ fontWeight: 500 }}>Sign up with Google</span>
        </motion.button>

        {/* Footer */}
        <p style={styles.footer}>
          Already have an account?{" "}
          <a href="#" style={styles.link}>
            Log in
          </a>
        </p>
      </motion.div>
    </div>
  );
};

// Typed styles object
const styles: Record<string, React.CSSProperties> = {
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
