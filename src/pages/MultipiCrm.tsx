import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MultipiCrm.css";

import Header from "../component/Header";
import Footer from "../component/Footer";

import converseLogo from "../assets/saran/converse.png";
import img1 from "../assets/saran/crmimg1.jpg";
import img2 from "../assets/saran/Automated.png";
import img3 from "../assets/saran/booking.png";
import img4 from "../assets/saran/funnel.png";
import img5 from "../assets/saran/Fullfunnel.png";

// ✅ Import modern icons
import {
  Smartphone,
  RefreshCw,
  Lock,
  Rocket,
  Bot,
  BarChart3,
  CheckCircle,
  Calendar,
  Zap,
  Link,
  Megaphone,
  Heart,
  Clock,
} from "lucide-react";

const MultipiCrm = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="multipi-hero" data-aos="fade-up">
        <div className="hero-content">
          <h1>From one deal to thousands — sell at scale with Multipi</h1>
          <p>
            Stop losing revenue to slow response times, inconsistent manual
            follow-ups, and lack of visibility. Multipi helps you build scalable
            communication and close more deals directly on WhatsApp.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Book a Demo</button>
          </div>
        </div>
        <div className="hero-img" data-aos="zoom-in">
          <img src={converseLogo} alt="Multipi CRM Hero" className="crm-image" />
        </div>
      </section>

      {/* Features */}
      <section className="multipi-features">
        <div className="feature" data-aos="fade-right">
          <div className="feature-text">
            <h2>Designed for High-Growth Sales Teams</h2>
            <p>
              Keep track of conversations, follow up on leads, and move deals
              forward — all inside WhatsApp. Multipi syncs seamlessly with your
              favorite CRM.
            </p>
          </div>
          <img src={img1} alt="CRM Feature" className="crm-image" />
        </div>

        <div className="feature reverse" data-aos="fade-left">
          <div className="feature-text">
            <h2>Outreach That Actually Converts</h2>
            <p>
              Reach thousands of verified leads with powerful broadcast campaigns,
              build stronger relationships, and effortlessly turn conversations
              into lasting revenue.
            </p>
          </div>
          <img src={img2} alt="CRM Automation" className="crm-image" />
        </div>

        <div className="feature" data-aos="fade-right">
          <div className="feature-text">
            <h2>Book Appointments & Boost Show Rates</h2>
            <p>
              Let customers book instantly on WhatsApp. Multipi automates
              scheduling, confirmations, and reminders to keep prospects engaged.
            </p>
          </div>
          <img src={img3} alt="CRM Booking" className="crm-image" />
        </div>

        <div className="feature reverse" data-aos="fade-left">
          <div className="feature-text">
            <h2>Speed Up Your Funnel with Automation</h2>
            <p>
              Multipi’s AI engages leads instantly, qualifies prospects, assigns
              them to the right reps, and sets automated reminders for timely
              follow-ups.
            </p>
          </div>
          <img src={img4} alt="CRM Funnel" className="crm-image" />
        </div>
      </section>

      {/* Funnel Visibility */}
      <section className="funnel-visibility" data-aos="zoom-in-up">
        <h2>Full Funnel, Fully Visible</h2>
        <p>
          Measure what matters — from first message to closed deal. Track
          conversations, monitor performance, and sync everything with your CRM
          to get complete visibility.
        </p>
        <img src={img5} alt="CRM Full Funnel" className="crm-image_1" />
      </section>

      {/* Flexibility Features */}
      <section className="flexibility-features" data-aos="fade-up">
        <div className="container">
          <h2 className="section-title" data-aos="fade-down">
            Our Flexibility Drives Success
          </h2>
          <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Empower your team with seamless WhatsApp integrations and smarter
            control.
          </p>

          <div className="features-grid">
            <div className="feature-card" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon-circle">
                <Smartphone color="#2256b7" size={28} />
              </div>
              <h3>Connect Multiple Numbers Effortlessly</h3>
              <p>
                Assign a unique number to each rep, all linked to your central
                Multipi account. No personal numbers, just smooth professional
                conversations.
              </p>
            </div>

            <div className="feature-card" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon-circle">
                <RefreshCw color="#3ea1ff" size={28} />
              </div>
              <h3>Migrate Without Any Hassle</h3>
              <p>
                Transfer your chats, automations, and settings from previous
                WhatsApp Business Apps or API numbers seamlessly. No data lost
                thanks to Meta Coexistence.
              </p>
            </div>

            <div className="feature-card" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-circle">
                <Lock color="#ff6600" size={28} />
              </div>
              <h3>Role-Based Access Control</h3>
              <p>
                Protect sensitive insights by granting access only to managers
                and select team members. Advanced analytics are just a click away
                for the right users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Benefits */}
      <section className="engagement-benefits">
        <h2>How Multipi Helps Sales Teams</h2>
        <div className="benefits-grid">
          {[
            { text: "Close deals faster", icon: <Rocket color="#2256b7" /> },
            { text: "Qualify leads automatically", icon: <Bot color="#3ea1ff" /> },
            { text: "Track lead progress", icon: <BarChart3 color="#ff6600" /> },
            { text: "Verify leads instantly", icon: <CheckCircle color="#28a745" /> },
            { text: "Book appointments", icon: <Calendar color="#2256b7" /> },
            { text: "Automated follow-ups", icon: <RefreshCw color="#3ea1ff" /> },
            { text: "Reduce first response time", icon: <Zap color="#ff6600" /> },
            { text: "CRM Integrations", icon: <Link color="#2256b7" /> },
            { text: "WhatsApp broadcasts", icon: <Megaphone color="#3ea1ff" /> },
            { text: "Increase customer loyalty", icon: <Heart color="red" /> },
          ].map((item, idx) => (
            <div
              key={idx}
              className="benefit-card"
              data-aos="flip-left"
              data-aos-delay={idx * 100}
            >
              <div className="benefit-icon">{item.icon}</div>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Connectivity Table */}
      <section className="connectivity-table" data-aos="fade-up">
        <h2>Stay Connected with Multipi</h2>
        <p>Track your team’s activity and schedule communications efficiently.</p>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Team Member</th>
                <th>Available</th>
                <th>Next Follow-up</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr data-aos="fade-right" data-aos-delay="100">
                <td>John Doe</td>
                <td>9:00 AM - 5:00 PM</td>
                <td>Today, 3:00 PM</td>
                <td className="status active">
                  <CheckCircle color="#28a745" size={18} /> Active
                </td>
              </tr>
              <tr data-aos="fade-right" data-aos-delay="200">
                <td>Jane Smith</td>
                <td>10:00 AM - 6:00 PM</td>
                <td>Tomorrow, 11:00 AM</td>
                <td className="status busy">
                  <Zap color="#ff6600" size={18} /> Busy
                </td>
              </tr>
              <tr data-aos="fade-right" data-aos-delay="300">
                <td>Mike Johnson</td>
                <td>8:00 AM - 4:00 PM</td>
                <td>Today, 1:00 PM</td>
                <td className="status pending">
                  <Clock color="#ffc107" size={18} /> Pending
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Final CTA */}
      <section className="multipi-cta" data-aos="fade-up">
        <h2 className="move_deals">
          Move Deals Forward & Drive More Revenue with Multipi
        </h2>
        <p>
          Enable your reps to build stronger relationships, personalize
          communication at scale, and close more deals on WhatsApp.
        </p>
        <button className="btn-primary">Get Started Now</button>
      </section>
    </>
  );
};

export default MultipiCrm;
