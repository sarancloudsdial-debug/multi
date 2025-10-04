import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaSearch, FaQuestionCircle, FaCog, FaUserShield, FaPlug, FaCreditCard, FaLayerGroup, FaBullhorn, FaRobot, FaWhatsapp, FaInfoCircle } from "react-icons/fa";
const HelpCenter = () => {
    return (_jsxs("div", { className: "help-center", children: [_jsx("style", { children: `
        .help-center {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #f4f6fb, #ffffff);
          min-height: 100vh;
          padding: 60px 20px;
          overflow-x: hidden;
        }

        /* ✨ Smooth fade-in header */
        .help-header {
          margin-top: 100px;
          text-align: center;
          margin-bottom: 60px;
          animation: fadeInDown 1s ease;
        }

        .help-header h1 {
          font-size: 2.8rem;
          font-weight: bold;
          background: linear-gradient(90deg, #4368b1, #34528f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 15px;
        }

        .help-header p {
          font-size: 1.1rem;
          color: #374151;
        }

        /* 🔍 Search bar */
        .search-bar {
          display: flex;
          justify-content: center;
          margin: 30px auto 50px auto;
          max-width: 550px;
          background: #fff;
          border-radius: 35px;
          padding: 12px 18px;
          box-shadow: 0 6px 16px rgba(0,0,0,0.06);
          transition: all 0.3s ease;
        }

        .search-bar:focus-within {
          box-shadow: 0 8px 20px rgba(67,104,177,0.3);
          transform: scale(1.02);
        }

        .search-bar input {
          flex: 1;
          border: none;
          outline: none;
          padding: 10px;
          font-size: 1rem;
          border-radius: 30px;
        }

        .search-bar button {
          background: linear-gradient(135deg, #4368b1, #34528f);
          color: #fff;
          border: none;
          padding: 12px 16px;
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .search-bar button:hover {
          transform: rotate(10deg) scale(1.1);
        }

        /* 📂 Categories Grid */
        .categories {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        /* 🪄 Cards */
        .category-card {
          background: #fff;
          padding: 30px 25px;
          border-radius: 18px;
          text-align: center;
          box-shadow: 0 6px 16px rgba(0,0,0,0.08);
          transition: all 0.3s ease-in-out;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          animation: floatUp 0.8s ease forwards;
          opacity: 0;
        }

        .category-card:nth-child(1) { animation-delay: 0.1s; }
        .category-card:nth-child(2) { animation-delay: 0.2s; }
        .category-card:nth-child(3) { animation-delay: 0.3s; }
        .category-card:nth-child(4) { animation-delay: 0.4s; }
        .category-card:nth-child(5) { animation-delay: 0.5s; }
        .category-card:nth-child(6) { animation-delay: 0.6s; }
        .category-card:nth-child(7) { animation-delay: 0.7s; }
        .category-card:nth-child(8) { animation-delay: 0.8s; }
        .category-card:nth-child(9) { animation-delay: 0.9s; }
        .category-card:nth-child(10) { animation-delay: 1s; }

        /* ✨ Hover glow */
        .category-card::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(67,104,177,0.15), transparent 70%);
          transform: scale(0);
          transition: transform 0.4s ease;
        }

        .category-card:hover::before {
          transform: scale(1);
        }

        .category-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 10px 24px rgba(67,104,177,0.2);
        }

        .category-card .icon {
          font-size: 2.3rem;
          color: #4368b1;
          margin-bottom: 15px;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .category-card:hover .icon {
          transform: scale(1.2) rotate(8deg);
          color: #34528f;
        }

        .category-card h3 {
          font-size: 1.25rem;
          margin-bottom: 10px;
          color: #111827;
        }

        .category-card p {
          font-size: 0.95rem;
          color: #4b5563;
        }

        /* 🌟 Animations */
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes floatUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      ` }), _jsxs("div", { className: "help-header", children: [_jsx("h1", { children: "Welcome to the Help Center" }), _jsx("p", { children: "Find answers, guides, and support for all your needs." })] }), _jsxs("div", { className: "search-bar", children: [_jsx("input", { type: "text", placeholder: "Search for help..." }), _jsx("button", { children: _jsx(FaSearch, {}) })] }), _jsxs("div", { className: "categories", children: [_jsxs("div", { className: "category-card", children: [_jsx("div", { className: "icon", children: _jsx(FaQuestionCircle, {}) }), _jsx("h3", { children: "Getting Started" }), _jsx("p", { children: "Learn how to set up your account and start using our services." })] }), _jsxs("div", { className: "category-card", children: [_jsx("div", { className: "icon", children: _jsx(FaCog, {}) }), _jsx("h3", { children: "Settings & Preferences" }), _jsx("p", { children: "Customize your experience and manage your account settings." })] }), _jsxs("div", { className: "category-card", children: [_jsx("div", { className: "icon", children: _jsx(FaUserShield, {}) }), _jsx("h3", { children: "Privacy & Security" }), _jsx("p", { children: "Understand how we protect your data and how to stay safe." })] }), _jsxs("div", { className: "category-card", children: [_jsx("div", { className: "icon", children: _jsx(FaPlug, {}) }), _jsx("h3", { children: "Multipi API" }), _jsx("p", { children: "Learn how to integrate and use our APIs effectively." })] }), _jsxs("div", { className: "category-card", children: [_jsx("div", { className: "icon", children: _jsx(FaCreditCard, {}) }), _jsx("h3", { children: "Payment & Billing" }), _jsx("p", { children: "Manage your payments, invoices, and subscriptions securely." })] }), _jsxs("div", { className: "category-card", children: [_jsx("div", { className: "icon", children: _jsx(FaLayerGroup, {}) }), _jsx("h3", { children: "Multipi CRM" }), _jsx("p", { children: "Organize your leads, customers, and sales with our CRM." })] }), _jsxs("div", { className: "category-card", children: [_jsx("div", { className: "icon", children: _jsx(FaBullhorn, {}) }), _jsx("h3", { children: "Digital Marketing" }), _jsx("p", { children: "Automate campaigns and grow your reach with marketing tools." })] }), _jsxs("div", { className: "category-card", children: [_jsx("div", { className: "icon", children: _jsx(FaWhatsapp, {}) }), _jsx("h3", { children: "Click to WhatsApp Ads" }), _jsx("p", { children: "Boost engagement with targeted WhatsApp ad campaigns." })] }), _jsxs("div", { className: "category-card", children: [_jsx("div", { className: "icon", children: _jsx(FaRobot, {}) }), _jsx("h3", { children: "Automation" }), _jsx("p", { children: "Save time by automating tasks, workflows, and responses." })] }), _jsxs("div", { className: "category-card", children: [_jsx("div", { className: "icon", children: _jsx(FaInfoCircle, {}) }), _jsx("h3", { children: "Multipi Overview" }), _jsx("p", { children: "Explore the full potential of Multipli in one place." })] })] })] }));
};
export default HelpCenter;
