import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Footer data
const footerData = [
    {
        title: "Solutions",
        links: [
            "Multipi for Marketing",
            "Multipi for Support",
            "Multipi for Sales",
            "eLearning",
            "E-Commerce",
            "Marketing Agencies",
            "Healthcare",
        ],
    },
    {
        title: "Company",
        links: ["About Us", "Careers", "Branding", "Terms", "Privacy"],
    },
    {
        title: "Customers",
        links: [
            "Habuild",
            "Vedantu",
            "ENI Networks",
            "Bowaba",
            "ProMujer",
            "Blacklyf",
            "See All",
        ],
    },
    {
        title: "Resources",
        links: [
            "Blog",
            "Ebooks",
            "WhatsApp Templates",
            "Customer Stories",
            "Developer Docs",
            "Templates",
            "Help Center",
        ],
    },
    {
        title: "Product",
        links: [
            "AI at Multipi",
            "AI Support Agent",
            "Broadcasts",
            "Custom Notifications",
            "Instagram and Facebook Messenger",
            "Multiple WhatsApp numbers",
        ],
    },
    {
        title: "Integrations",
        links: [
            "Salesforce",
            "CloudsDial CRM",
            "WooCommerce",
            "Pabbly Connect",
            "Make aka Integromat",
            "WhatsApp Shop",
            "Chat Backup",
        ],
    },
    {
        title: "Free Tools",
        links: [
            "WhatsApp Broadcast Score Calculator",
            "WhatsApp Chat Link Generator",
            "WhatsApp QR Code Generator",
            "WhatsApp Chat Button Generator",
        ],
    },
];
// Theme color
const logoBlue = "#4267B2";
const styles = {
    footerWrap: {
        backgroundColor: "#f0f4ff",
        color: "#222",
        fontFamily: "'Inter', 'Roboto', sans-serif",
        padding: "64px 0 28px 0",
    },
    container: {
        maxWidth: "1350px",
        margin: "0 auto",
        padding: "0 32px",
        display: "flex",
        flexWrap: "wrap",
        gap: "38px 24px",
        justifyContent: "flex-start",
    },
    col: {
        minWidth: "160px",
        flex: "1 1 150px",
    },
    title: {
        color: logoBlue,
        fontWeight: 700,
        fontSize: "18px",
        marginBottom: "16px",
        marginTop: 0,
        letterSpacing: "0.02em",
    },
    link: {
        color: logoBlue,
        fontSize: "15px",
        fontWeight: 400,
        textDecoration: "none",
        marginBottom: "12px",
        display: "flex",
        alignItems: "center",
        transition: "color .2s",
        cursor: "pointer",
        lineHeight: 1.5,
    },
    linkHover: {
        color: "#365899",
    },
    badge: {
        marginLeft: 8,
        background: logoBlue,
        color: "#fff",
        fontSize: "11px",
        fontWeight: "bold",
        padding: "2px 8px",
        borderRadius: "8px",
        letterSpacing: "0.01em",
        textTransform: "uppercase",
        lineHeight: 1.1,
        display: "inline-block",
    },
    bottomBar: {
        textAlign: "center",
        fontSize: "15px",
        color: logoBlue,
        borderTop: "1px solid #ececec",
        paddingTop: "28px",
        marginTop: "28px",
        fontWeight: 400,
        letterSpacing: "0.03em",
    },
};
const Footer = () => (_jsxs("footer", { style: styles.footerWrap, children: [_jsx("div", { style: styles.container, children: footerData.map((col, idx) => (_jsxs("div", { style: styles.col, children: [_jsx("h4", { style: styles.title, children: col.title }), _jsx("ul", { style: { padding: 0, listStyle: "none", margin: 0 }, children: col.links.map((l, i) => {
                            const item = typeof l === "string" ? { name: l } : l;
                            return (_jsx("li", { children: _jsxs("a", { style: styles.link, href: "#", onMouseEnter: (e) => (e.currentTarget.style.color = styles.linkHover.color), onMouseLeave: (e) => (e.currentTarget.style.color = styles.link.color), children: [item.name, item.badge && _jsx("span", { style: styles.badge, children: item.badge })] }) }, i));
                        }) })] }, col.title + idx))) }), _jsx("div", { style: styles.bottomBar, children: _jsxs("a", { href: "https://cloudsdials.com/", target: "_blank", rel: "noopener noreferrer", style: { color: 'inherit', textDecoration: 'none' }, children: ["\u00A9 ", new Date().getFullYear(), " Copyrights by CloudsDial. All rights reserved."] }) })] }));
export default Footer;
