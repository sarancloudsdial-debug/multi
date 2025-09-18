import React from "react";
import { useNavigate } from "react-router-dom";

const DemoPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Demo Request Submitted!");
    navigate("/thank-you");
  };

  return (
    <div className="demo-container">
      <style>{`
        .demo-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #eaf0fa, #ffffff); /* light blue tone */
          padding: 40px;
          padding-top: 140px; 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          box-sizing: border-box;
        }

        .demo-card {
          width: 100%;
          max-width: 750px;
          background: #fff;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          animation: fadeIn 0.7s ease;
          border-top: 6px solid #4368b1; /* logo blue accent */
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Header */
        .demo-header {
          text-align: center;
          margin-bottom: 28px;
        }
        .demo-header h1 {
          font-size: 2.5rem;
          margin-bottom: 10px;
          color: #4368b1; /* logo blue for main heading */
        }
        .demo-header p {
          font-size: 1.125rem;
          color: #4b5563;
        }

        /* Benefits */
        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 0 0 36px;
        }
        .benefits-list li {
          display: flex;
          align-items: center;
          margin-bottom: 14px;
          font-size: 1rem;
          color: #374151;
        }
        .benefits-list li::before {
          content: "✔";
          color: #4368b1; /* logo blue */
          margin-right: 10px;
          font-size: 1.2rem;
        }

        /* Form */
        .demo-form {
          margin-top: 8px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .demo-form input,
        .demo-form textarea,
        .demo-form select {
          padding: 12px 14px;
          font-size: 1rem;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          outline: none;
          transition: border 0.3s, box-shadow 0.3s;
        }
        .demo-form input:focus,
        .demo-form textarea:focus,
        .demo-form select:focus {
          border-color: #4368b1;
          box-shadow: 0 0 0 3px rgba(67,104,177,0.25);
        }
        .demo-form button {
          padding: 14px;
          background-color: #4368b1; /* logo blue */
          color: #fff;
          font-size: 1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s, transform 0.2s;
        }
        .demo-form button:hover {
          background-color: #365590;
          transform: translateY(-2px);
        }

        /* Footer */
        .footer-note {
          margin-top: 20px;
          font-size: 0.85rem;
          text-align: center;
          color: #6b7280;
        }
        .footer-note a {
          color: #4368b1;
          font-weight: 600;
          text-decoration: none;
        }
        .footer-note a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="demo-card">
        <section className="demo-header">
          <h1>Schedule Your Free Demo</h1>
          <p>
            Discover how WhatsApp automation can transform your business.
            Book a personalized session today.
          </p>
        </section>

        <ul className="benefits-list">
          <li>One-on-one walkthrough with our experts.</li>
          <li>Customized insights for your business needs.</li>
          <li>Get all your questions answered instantly.</li>
        </ul>

        <form className="demo-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Business Email" required />
          <input type="text" placeholder="Company Name" required />

          <select required>
            <option value="">Which team will use this?</option>
            <option>Marketing</option>
            <option>Sales</option>
            <option>Support</option>
            <option>IT / Developer / Product Manager</option>
            <option>Admin / Founder / Business Owner</option>
            <option>HR</option>
            <option>Other</option>
          </select>

          <textarea
            placeholder="What would you like to learn in the demo?"
            rows={4}
          ></textarea>

          <input type="tel" placeholder="WhatsApp Number" required />

          <button type="submit">Request Demo</button>
        </form>

        <p className="footer-note">
          By submitting, you agree to our <a href="#">Terms & Conditions</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default DemoPage;
