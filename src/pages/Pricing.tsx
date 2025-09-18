import React, { useState } from "react";  

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  const plans = [
    {
      name: "Starter",
      price: billing === "monthly" ? 25 : 250,
      description: "For small businesses getting started with WhatsApp.",
      features: [
        "1 User",
        "Basic Chat Features",
        "Template Messages",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: billing === "monthly" ? 60 : 600,
      description: "For growing teams needing automation & collaboration.",
      features: [
        "5 Users",
        "Broadcast Messaging",
        "Automation Tools",
        "Priority Support",
      ],
    },
    {
      name: "Enterprise",
      price: billing === "monthly" ? 120 : 1200,
      description: "For enterprises with large-scale communication needs.",
      features: [
        "Unlimited Users",
        "Advanced Integrations",
        "Dedicated Manager",
        "24/7 Premium Support",
      ],
    },
  ];

  return (
    <div className="pricing-container">
      {/* Internal CSS */}
      <style>{`
        .pricing-container {
          background: linear-gradient(to bottom right, #f4f7fb, #ffffff);
          min-height: 100vh;
          padding-top: 100px; /* 👈 Space for header */
        }
        .pricing-header {
          text-align: center;
          padding: 3rem 1rem;
        }
        .pricing-header h1 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #4368b1;
        }
        .pricing-header p {
          color: #555;
          margin-bottom: 1.5rem;
        }
        .billing-toggle {
          display: inline-flex;
          background: #e5e7eb;
          border-radius: 9999px;
          padding: 4px;
        }
        .billing-toggle button {
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: 0.3s;
          color: #4368b1;
          background: transparent;
        }
        .billing-toggle button.active {
          background: #4368b1;
          color: white;
        }
        .pricing-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          gap: 2rem;
          padding: 0 1.5rem 4rem;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }
        .pricing-card {
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 2px 6px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          transition: 0.3s;
          background: white;
        }
        .pricing-card:hover {
          box-shadow: 0 8px 20px rgba(67,104,177,0.25);
          transform: translateY(-4px);
        }
        .pricing-card h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: #4368b1;
        }
        .pricing-card p {
          color: #666;
          margin-bottom: 1rem;
        }
        .pricing-price {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          color: #4368b1;
        }
        .pricing-price span {
          font-size: 1rem;
          font-weight: normal;
          color: #777;
        }
        .pricing-card ul {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem;
        }
        .pricing-card li {
          display: flex;
          align-items: center;
          margin-bottom: 0.5rem;
          color: #444;
        }
        .pricing-card li span {
          margin-left: 0.5rem;
        }
        .pricing-card button {
          background: #4368b1;
          color: white;
          border: none;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          cursor: pointer;
          transition: 0.3s;
          margin-top: auto;
          font-weight: 500;
        }
        .pricing-card button:hover {
          background: #34528f;
        }
      `}</style>

      {/* Header */}
      <section className="pricing-header">
        <h1>Choose Your Pricing Plan</h1>
        <p>Simple, transparent pricing. No hidden fees.</p>

        {/* Toggle Billing */}
        <div className="billing-toggle">
          <button
            onClick={() => setBilling("monthly")}
            className={billing === "monthly" ? "active" : ""}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={billing === "yearly" ? "active" : ""}
          >
            Yearly
          </button>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <div className="pricing-price">
              ₹{plan.price}
              <span>/{billing === "monthly" ? "mo" : "yr"}</span>
            </div>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>✓ <span>{feature}</span></li>
              ))}
            </ul>
            <button>Get Started</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Pricing;
