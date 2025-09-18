import React from "react"; 
import { 
  FaSearch, 
  FaQuestionCircle, 
  FaCog, 
  FaUserShield, 
  FaPlug, 
  FaCreditCard, 
  FaLayerGroup, 
  FaBullhorn, 
  FaRobot, 
  FaWhatsapp, 
  FaInfoCircle 
} from "react-icons/fa";

const HelpCenter = () => {
  return (
    <div className="help-center">
      <style>{`
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
      `}</style>

      <div className="help-header">
        <h1>Welcome to the Help Center</h1>
        <p>Find answers, guides, and support for all your needs.</p>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search for help..." />
        <button><FaSearch /></button>
      </div>

      <div className="categories">
        <div className="category-card">
          <div className="icon"><FaQuestionCircle /></div>
          <h3>Getting Started</h3>
          <p>Learn how to set up your account and start using our services.</p>
        </div>

        <div className="category-card">
          <div className="icon"><FaCog /></div>
          <h3>Settings & Preferences</h3>
          <p>Customize your experience and manage your account settings.</p>
        </div>

        <div className="category-card">
          <div className="icon"><FaUserShield /></div>
          <h3>Privacy & Security</h3>
          <p>Understand how we protect your data and how to stay safe.</p>
        </div>

        <div className="category-card">
          <div className="icon"><FaPlug /></div>
          <h3>Multipi API</h3>
          <p>Learn how to integrate and use our APIs effectively.</p>
        </div>

        <div className="category-card">
          <div className="icon"><FaCreditCard /></div>
          <h3>Payment & Billing</h3>
          <p>Manage your payments, invoices, and subscriptions securely.</p>
        </div>

        <div className="category-card">
          <div className="icon"><FaLayerGroup /></div>
          <h3>Multipi CRM</h3>
          <p>Organize your leads, customers, and sales with our CRM.</p>
        </div>

        <div className="category-card">
          <div className="icon"><FaBullhorn /></div>
          <h3>Digital Marketing</h3>
          <p>Automate campaigns and grow your reach with marketing tools.</p>
        </div>

        <div className="category-card">
          <div className="icon"><FaWhatsapp /></div>
          <h3>Click to WhatsApp Ads</h3>
          <p>Boost engagement with targeted WhatsApp ad campaigns.</p>
        </div>

        <div className="category-card">
          <div className="icon"><FaRobot /></div>
          <h3>Automation</h3>
          <p>Save time by automating tasks, workflows, and responses.</p>
        </div>

        <div className="category-card">
          <div className="icon"><FaInfoCircle /></div>
          <h3>Multipi Overview</h3>
          <p>Explore the full potential of Multipli in one place.</p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
