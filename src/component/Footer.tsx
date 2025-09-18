import React from "react";

// Type for footer columns
interface FooterColumn {
  title: string;
  links: (string | { name: string; badge?: string })[];
}

// Footer data
const footerData: FooterColumn[] = [
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
    flexWrap: "wrap" as const,
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
    textTransform: "uppercase" as const,
    lineHeight: 1.1,
    display: "inline-block",
  },
  bottomBar: {
    textAlign: "center" as const,
    fontSize: "15px",
    color: logoBlue,
    borderTop: "1px solid #ececec",
    paddingTop: "28px",
    marginTop: "28px",
    fontWeight: 400,
    letterSpacing: "0.03em",
  },
};

const Footer: React.FC = () => (
  <footer style={styles.footerWrap}>
    <div style={styles.container}>
      {footerData.map((col, idx) => (
        <div style={styles.col} key={col.title + idx}>
          <h4 style={styles.title}>{col.title}</h4>
          <ul style={{ padding: 0, listStyle: "none", margin: 0 }}>
            {col.links.map((l, i) => {
              const item = typeof l === "string" ? { name: l } : l;
              return (
                <li key={i}>
                  <a
                    style={styles.link}
                    href="#"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = styles.linkHover.color)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = styles.link.color)
                    }
                  >
                    {item.name}
                    {item.badge && <span style={styles.badge}>{item.badge}</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
   <div style={styles.bottomBar}>
  <a 
    href="https://cloudsdials.com/" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ color: 'inherit', textDecoration: 'none' }}
  >
    © {new Date().getFullYear()} Copyrights by CloudsDial. All rights reserved.
  </a>
</div>

  </footer>
);

export default Footer;
