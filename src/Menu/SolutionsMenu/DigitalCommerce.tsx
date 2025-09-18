import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./DigitalCommerce.css";

// ✅ Import icons from lucide-react
import {
  Package,
  Zap,
  CheckCircle,
  Target,
  Trophy,
  Bell,
  Link as LinkIcon, // renamed to avoid conflict with react-router Link
  MessageSquare,
} from "lucide-react";

const DigitalCommerce: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero" data-aos="fade-up">
        <div className="hero-content">
          <h1>Multipi for Ecommerce</h1>
          <p>
            Grow your online store sales with WhatsApp. Engage customers,
            automate processes, and deliver seamless shopping experiences.
          </p>
          <button className="btn-primary">Book a Demo</button>
        </div>
        <div className="hero-img" data-aos="zoom-in">
          <img
            src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800"
            alt="Ecommerce Hero"
          />
        </div>
      </section>

      {/* Features */}
      <section className="features" data-aos="fade-up">
        <h2 className="features-title">Why Choose Multipi for Ecommerce?</h2>
        <div className="feature-grid">
          {/* Share Catalog */}
          <div className="feature-card" data-aos="fade-up">
            <div className="icon-circle">
              <Package color="#2256b7" size={28} />
            </div>
            <h3>Share Your Catalog</h3>
            <p>
              Use WhatsApp to showcase your products and keep your customers
              updated with the latest stock information.
            </p>
          </div>

          {/* Fast Response */}
          <div className="feature-card" data-aos="fade-up" data-aos-delay="150">
            <div className="icon-circle">
              <Zap color="#ff6600" size={28} />
            </div>
            <h3>Fast Response to Offers</h3>
            <p>
              Invite instant responses to your sales promotions — over 90% of
              WhatsApp messages are opened within 3 minutes.
            </p>
          </div>

          {/* Order Confirmation */}
          <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-circle">
              <CheckCircle color="#28a745" size={28} />
            </div>
            <h3>Confirmation & Support</h3>
            <p>
              Send automated order confirmations, billing updates, and provide
              instant support with no-code chatbots.
            </p>
          </div>

          {/* Personalized Promotions */}
          <div className="feature-card" data-aos="fade-up" data-aos-delay="450">
            <div className="icon-circle">
              <Target color="#3ea1ff" size={28} />
            </div>
            <h3>Personalized Promotions</h3>
            <p>
              Deliver targeted WhatsApp campaigns with personalized offers based
              on purchase patterns and seasons.
            </p>
          </div>

          {/* Loyalty Program */}
          <div className="feature-card" data-aos="fade-up" data-aos-delay="600">
            <div className="icon-circle">
              <Trophy color="#ffc107" size={28} />
            </div>
            <h3>Loyalty Program Updates</h3>
            <p>
              Keep customers engaged by enrolling them in loyalty programs and
              updating them on points & special offers.
            </p>
          </div>

          {/* Stock Alerts */}
          <div className="feature-card" data-aos="fade-up" data-aos-delay="750">
            <div className="icon-circle">
              <Bell color="#e83e8c" size={28} />
            </div>
            <h3>In Stock & New Products</h3>
            <p>
              Instantly alert customers when items are back in stock, and promote
              new arrivals, upsells, and cross-sells.
            </p>
          </div>
        </div>
      </section>

      {/* Traffic Section */}
      <section className="traffic" data-aos="fade-up">
        <h2 className="traffic-title">Drive More Traffic with WhatsApp</h2>
        <p className="traffic-subtitle">
          Supercharge your store with automation, integrations, and better
          customer experiences.
        </p>

        <div className="traffic-grid">
          <div className="traffic-card" data-aos="zoom-in" data-aos-delay={100}>
            <div className="icon-circle">
              <LinkIcon color="#2256b7" size={28} />
            </div>
            <h3>Seamless Integrations</h3>
            <p>
              Effortlessly connect Shopify, WooCommerce, or any custom platform.
            </p>
          </div>

          <div className="traffic-card" data-aos="zoom-in" data-aos-delay={200}>
            <div className="icon-circle">
              <Zap color="#ff6600" size={28} />
            </div>
            <h3>Smart Automation</h3>
            <p>
              Save time with automated workflows using Zapier & Integromat for
              ecommerce.
            </p>
          </div>

          <div className="traffic-card" data-aos="zoom-in" data-aos-delay={300}>
            <div className="icon-circle">
              <MessageSquare color="#3ea1ff" size={28} />
            </div>
            <h3>Enhanced CX</h3>
            <p>
              Reduce cart abandonment and boost engagement via WhatsApp
              conversations.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" data-aos="fade-up">
        <h2 className="testimonials-title">
          <MessageSquare color="#2256b7" size={26} /> What Our Customers Say
        </h2>
        <p className="testimonials-subtitle">
          Real stories from businesses that scaled faster with us.
        </p>

        <div className="testimonial-grid">
          <div
            className="testimonial-card"
            data-aos="fade-right"
            data-aos-delay={100}
          >
            <div className="quote">“</div>
            <p>
              Superb service! Automation flows are fantastic and make it stand
              out from competitors.
            </p>
            <span className="author">- Saisharan G, Founder</span>
          </div>

          <div
            className="testimonial-card"
            data-aos="fade-left"
            data-aos-delay={200}
          >
            <div className="quote">“</div>
            <p>
              Affordable, easy to use, and powerful. We automated our resort
              operations in just 2 days with zero dev costs.
            </p>
            <span className="author">- Anton V, General Manager</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" data-aos="zoom-in">
        <div className="cta-content">
          <h2>Ready to Grow Your Ecommerce with Multipi?</h2>
          <p>
            Harness WhatsApp, Facebook, and Instagram with one of the fastest
            growing business solution providers.
          </p>
          <button className="cta-btn">Book a Demo</button>
        </div>
      </section>
    </>
  );
};

export default DigitalCommerce;
