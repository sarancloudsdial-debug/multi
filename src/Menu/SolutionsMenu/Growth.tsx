import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./growth.css";

// ✅ Import images with type safety
import featureImage from "../../assets/grow_img_01.png";
import featureImg from "../../assets/grow_img_02.jpeg";
import chat from "../../assets/chat_img.png";
import analytics from "../../assets/analytics_img.png";
import integration from "../../assets/integration_img.png";
import replies from "../../assets/replies_img.png";
import scheduling from "../../assets/scheduling_img.jpeg";
import inbox from "../../assets/team_inbox.jpeg";
import customer01 from "../../assets/cus_img_01.jpg";
import customer02 from "../../assets/cus_img_2.jpg";
import customer03 from "../../assets/cus_img_03.jpg";

const Growth: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="growth-container">
      {/* Hero Section */}
      <div className="growth-hero" data-aos="fade-up">
        <h1>Accelerate Your Growth with Smarter WhatsApp Marketing by Multipi</h1>
        <p>
          Reach your customers instantly, automate conversations, and strengthen
          loyalty all within WhatsApp. Multipi empowers your business to turn
          every chat into a powerful growth opportunity.
        </p>
      </div>

      {/* Features Section */}
      <div className="growth-features">
        <div className="growth-card" data-aos="fade-right">
          <h3>Automated Replies</h3>
          <p>
            Respond to customers instantly with smart automation, saving time
            and increasing engagement.
          </p>
        </div>
        <div className="growth-card" data-aos="fade-up">
          <h3>Broadcast Messages</h3>
          <p>
            Send personalized messages to a large audience with just one click.
            No spam, just value.
          </p>
        </div>
        <div className="growth-card" data-aos="fade-left">
          <h3>CRM Integration</h3>
          <p>
            Seamlessly integrate with your CRM to track conversations and
            convert leads faster.
          </p>
        </div>
      </div>

      {/* Connect to people image part */}
      <div className="growth-img">
        <div className="growth-image" data-aos="zoom-in">
          <img src={featureImg} alt="WhatsApp Marketing Feature" />
        </div>
        <div className="growth-text" data-aos="flip-right">
          <h3>Seamlessly integrate Multipi with your favorite marketing tools</h3>
          <p>
            Link your CRM, e-commerce, and marketing platforms to Multipi for
            smooth workflows and unified data across your business.
          </p>
        </div>
      </div>

      {/* Scrollable Features Slider */}
      <div className="growth-scroll-section">
        <h3>Explore More Features</h3>
        <p>
          Leading eCommerce brands trust Multipi to maximize ROI through smarter
          WhatsApp engagement.
        </p>
        <div className="scroll-wrapper">
          <div className="auto-scroll-track">
            <div className="scroll-item">
              Quick Replies <img src={replies} alt="Quick Replies" />
            </div>
            <div className="scroll-item">
              Team Inbox <img src={inbox} alt="Team Inbox" />
            </div>
            <div className="scroll-item">
              Chat Tags <img src={chat} alt="Chat Tags" />
            </div>
            <div className="scroll-item">
              Analytics <img src={analytics} alt="Analytics" />
            </div>
            <div className="scroll-item">
              Scheduling <img src={scheduling} alt="Scheduling" />
            </div>
            <div className="scroll-item">
              Integrations <img src={integration} alt="Integrations" />
            </div>

            {/* Duplicate set for infinite scroll */}
            <div className="scroll-item">
              Quick Replies <img src={replies} alt="Quick Replies" />
            </div>
            <div className="scroll-item">
              Team Inbox <img src={inbox} alt="Team Inbox" />
            </div>
            <div className="scroll-item">
              Chat Tags <img src={chat} alt="Chat Tags" />
            </div>
            <div className="scroll-item">
              Analytics <img src={analytics} alt="Analytics" />
            </div>
            <div className="scroll-item">
              Scheduling <img src={scheduling} alt="Scheduling" />
            </div>
            <div className="scroll-item">
              Integrations <img src={integration} alt="Integrations" />
            </div>
          </div>
        </div>
      </div>

      {/* Image with Content Section */}
      <div className="growth-image-section">
        <div className="growth-image-content" data-aos="zoom-in-right">
          <h2>Turn Chats into Conversions</h2>
          <p>
            Leverage the power of conversational commerce to guide customers
            through the buying journey, directly within WhatsApp.
          </p>
        </div>
        <div className="growth-image-wrapper" data-aos="fade-right">
          <img src={featureImage} alt="WhatsApp Marketing Feature" />
        </div>
      </div>

      {/* Card Review Section */}
      <div className="review-section">
        <h2>What Our Customers Say</h2>
        <div className="review-cards">
          <div className="review-card" data-aos="fade-right">
            <img src={customer01} alt="Customer 1" />
            <p>
              "Multipi has completely transformed how we interact with customers
              on WhatsApp. Super intuitive!"
            </p>
            <h4>— Aamir, Marketing Manager</h4>
          </div>
          <div className="review-card" data-aos="zoom-in-up">
            <img src={customer02} alt="Customer 2" />
            <p>
              "The automation and broadcast features helped us boost conversions
              without extra effort."
            </p>
            <h4>— Priya, eCommerce Founder</h4>
          </div>
          <div className="review-card" data-aos="fade-left">
            <img src={customer03} alt="Customer 3" />
            <p>
              "A must-have tool if you're serious about scaling your WhatsApp
              engagement. Excellent support too!"
            </p>
            <h4>— Meena, Product Lead</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
