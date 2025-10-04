import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
// Sample blog data
const blogs = [
    {
        title: "WhatsApp API for Businesses",
        description: "Learn how businesses can leverage the WhatsApp Business API to grow and engage with customers.",
        img: "https://plus.unsplash.com/premium_photo-1719839720683-72c8eb65b10a?q=80&w=1170&auto=format&fit=crop",
    },
    {
        title: "Multipli CRM Integration",
        description: "Discover how Multipli CRM simplifies customer relationship management with seamless integrations.",
        img: "https://plus.unsplash.com/premium_photo-1667232504929-f94b7002079d?q=80&w=1228&auto=format&fit=crop",
    },
    {
        title: "Digital Marketing Automation",
        description: "Automate your campaigns with AI-powered tools for better reach and engagement.",
        img: "https://plus.unsplash.com/premium_photo-1725985758385-d5462d6e7f50?q=80&w=1170&auto=format&fit=crop",
    },
    {
        title: "Payments & Billing Solutions",
        description: "Smart billing and payment solutions designed to help you streamline your business finances.",
        img: "https://plus.unsplash.com/premium_photo-1663039905163-5e57cd0207e0?q=80&w=687&auto=format&fit=crop",
    },
];
// Strongly typed CSS styles
const styles = {
    container: {
        padding: "100px 10%",
        background: "linear-gradient(135deg, #f4f6fb, #ffffff)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    heading: {
        fontSize: "42px",
        fontWeight: 700,
        textAlign: "center",
        color: "#4368b1",
        marginBottom: "12px",
        letterSpacing: "-1px",
    },
    subHeading: {
        fontSize: "18px",
        textAlign: "center",
        color: "#475569",
        marginBottom: "50px",
    },
    blogGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "35px",
    },
    card: {
        background: "#fff",
        borderRadius: "20px",
        boxShadow: "0 8px 30px rgba(67,104,177,0.15)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s ease",
    },
    imageWrapper: {
        overflow: "hidden",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
    },
    image: {
        width: "100%",
        height: "220px",
        objectFit: "cover",
    },
    cardContent: {
        padding: "24px",
    },
    cardTitle: {
        fontSize: "22px",
        fontWeight: "600",
        color: "#4368b1",
        marginBottom: "12px",
    },
    cardDesc: {
        fontSize: "16px",
        color: "#475569",
        marginBottom: "18px",
        lineHeight: 1.5,
    },
    readMore: {
        background: "#4368b1",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "10px",
        fontSize: "14px",
        fontWeight: 600,
        cursor: "pointer",
        transition: "0.3s ease",
    },
};
const BlogCard = ({ blog, index }) => (_jsxs(motion.div, { style: styles.card, initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, whileHover: { scale: 1.05 }, transition: { duration: 0.5, delay: index * 0.1 }, viewport: { once: true }, children: [_jsx(motion.div, { style: styles.imageWrapper, whileHover: { scale: 1.05 }, transition: { duration: 0.4 }, children: _jsx("img", { src: blog.img, alt: blog.title, style: styles.image }) }), _jsxs("div", { style: styles.cardContent, children: [_jsx("h2", { style: styles.cardTitle, children: blog.title }), _jsx("p", { style: styles.cardDesc, children: blog.description }), _jsx(motion.button, { style: styles.readMore, whileHover: { scale: 1.08, backgroundColor: "#34528f" }, whileTap: { scale: 0.95 }, children: "Read More \u2192" })] })] }));
// Main Blog component
const Blog = () => {
    return (_jsxs("div", { style: styles.container, children: [_jsx("h1", { style: styles.heading, children: "Multipli Blog" }), _jsx("p", { style: styles.subHeading, children: "Explore the latest insights, updates, and resources about Multipli API, CRM, digital marketing, and more." }), _jsx("div", { style: styles.blogGrid, children: blogs.map((blog, idx) => (_jsx(BlogCard, { blog: blog, index: idx }, idx))) })] }));
};
export default Blog;
