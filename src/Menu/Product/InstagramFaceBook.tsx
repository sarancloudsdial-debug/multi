import React from "react";
import { motion } from "framer-motion";
import hero from "../../assets/whatApi.png";
import {
  FaFacebookMessenger,
  FaInstagram,
  FaBolt,
  FaUsers,
  FaSmile,
  FaChartLine,
  FaRobot,
} from "react-icons/fa";

// SocialIntegration.jsx
// - Removed external CSS import to avoid build error.
// - Injects CSS via a <style> tag so the component is self-contained.
// - Uses the uploaded image located at /mnt/data/... as the left-side illustration.
// - Adds Hero (image-left / text-right like Wati), Features grid, How-it-works timeline, and CTA.

export default function SocialIntegration() {
  const css = `
    :root{
      --bg:#f8fbff;
      --accent:#2256b7;
      --muted:#6b7280;
      --card:#ffffff;
      --glass: rgba(255,255,255,0.6);
    }
    .social-page{
      font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
      background: linear-gradient(180deg, var(--bg), #ffffff 60%);
      color: #0f172a;
      overflow-x: hidden;
    }

    /* HERO (image left, text right) */
    .hero{
      max-width: 1180px;
      margin: 118px auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 36px;
      align-items: center;
      padding: 36px 20px;
    }

    .hero-image{
      display:flex;
      align-items:center;
      justify-content:center;
      position:relative;
      padding: 24px;
    }

    .hero-image .illustration{
      width: 100%;
      max-width: 640px;
      border-radius: 20px;
      box-shadow: 0 18px 40px rgba(34,86,183,0.12);
      background: linear-gradient(180deg, rgba(255,255,255,0.88), rgba(250,250,255,0.6));
      padding: 28px;
      border: 6px solid transparent;
      position: relative;
      transition: transform 0.45s ease, box-shadow 0.45s ease;
    }

    /* subtle multi-color frame */
    .hero-image .illustration::after{
      content: '';
      position:absolute;
      inset: -12px -12px -12px -12px;
      border-radius: 24px;
      z-index:-1;
      background: linear-gradient(135deg, rgba(37,118,183,0.08), rgba(158,99,249,0.06));
      filter: blur(6px);
      opacity:0.95;
    }

    .hero-image img{ display:block; width:100%; height:auto; border-radius:10px; }

    .hero-image:hover .illustration{ transform: translateY(-6px) rotate(-0.5deg); box-shadow: 0 26px 60px rgba(37,118,183,0.12);} 

    .hero-copy h2{
      font-size: 1.9rem;
      line-height: 1.15;
      margin: 0 0 12px 0;
      color: var(--accent);
      font-weight: 800;
    }
    .hero-copy p.lead{
      color: var(--muted);
      margin: 0 0 18px 0;
      font-size: 1.05rem;
    }

    .benefits-list{ list-style: none; padding:0; margin: 18px 0 22px 0; display:grid; gap:10px; }
    .benefits-list li{ display:flex; gap:12px; align-items:flex-start; }
    .dot{ width:10px; height:10px; border-radius:50%; background: linear-gradient(90deg,#07aad9,#9e63f9); margin-top:6px; flex:0 0 auto; }
    .benefit-text{ color: #0f172a; font-weight:600; }
    .benefit-sub{ color: var(--muted); font-size:0.95rem; }

    .hero-buttons{ display:flex; gap:12px; margin-top:12px; }
    .btn{ border: none; cursor:pointer; padding: 10px 18px; border-radius: 12px; font-weight:700; }
    .btn.primary{ background: linear-gradient(90deg,#2256b7,#3ea1ff); color: white; box-shadow: 0 12px 30px rgba(34,86,183,0.12);} 
    .btn.ghost{ background: transparent; color: var(--accent); border: 2px solid rgba(34,86,183,0.08); }

    /* Features grid */
    .features{ max-width:1180px; margin: 18px auto 44px auto; padding: 0 20px 40px 20px; }
    .features-grid{ display:grid;  gap:18px; }

    .feature-card{
      background: var(--card);
      padding:18px; border-radius:14px; text-align:center; box-shadow: 0 8px 24px rgba(14,165,233,0.06);
      transition: transform 0.28s ease, box-shadow 0.28s ease;
    }
    .feature-card:hover{ transform: translateY(-6px); box-shadow: 0 20px 50px rgba(14,165,233,0.08); }
    .icon-wrapper{ font-size:28px; margin-bottom:10px; }
    .feature-card h4{ margin:6px 0 6px 0; font-weight:700; color:#0f172a; }
    .feature-card p{ margin:0; color:var(--muted); font-size:0.95rem; }

    /* How it works timeline */
    .how-it-works{ max-width:1180px; margin: 10px auto 40px; padding: 28px 20px; }
    .steps{ display:grid; gap:12px; }
    .step{ display:flex; gap:14px; align-items:flex-start; background: linear-gradient(90deg, rgba(255,255,255,0.6), rgba(250,250,255,0.8)); padding:14px; border-radius:12px; box-shadow: 0 6px 18px rgba(2,6,23,0.04); }
    .step .num{ width:36px; height:36px; border-radius:10px; background: linear-gradient(90deg,#07aad9,#9e63f9); color:white; display:flex; align-items:center; justify-content:center; font-weight:800; }
    .step .meta{ font-weight:700; color:#0f172a; }
    .step .desc{ color:var(--muted); font-size:0.95rem; }

    /.cta {
              width:1080px;
              padding: 80px 10%;
              text-align: center;
              background: linear-gradient(120deg, var(--brand), #334155);
              color: #fff;
              border-radius: 18px;
              box-shadow: 0 30px 70px rgba(34,86,183,0.18);
              margin: 0 auto 80px auto;
            }


            .cta h3{
            

                    color:white;
                    
            }
              .pulse {
  animation: pulse 2s infinite;
}
    /* animations */
    @keyframes floatY { 0%{ transform: translateY(0);} 50%{ transform: translateY(-10px);} 100%{ transform: translateY(0);} }
    .float{ animation: floatY 4s ease-in-out infinite; }

    @media (max-width: 900px){
      .hero{ grid-template-columns: 1fr; padding: 20px; }
      .hero-image{ order:-1; }
      .hero-copy h2{ font-size:1.45rem; }
    }
  `;

  const features = [
    {
      icon: <FaFacebookMessenger style={{ color: '#07aad9' }} />,
      title: 'Unified Inbox',
      desc: 'See messages from Instagram, Messenger and WhatsApp in one single dashboard.'
    },
    {
      icon: <FaInstagram style={{ color: '#d92f8f' }} />,
      title: 'Instagram Automation',
      desc: 'Auto-respond, capture leads, and qualify users directly inside DMs.'
    },
    {
      icon: <FaBolt style={{ color: '#f6c84c' }} />,
      title: 'Quick Setup',
      desc: 'Connect accounts and go live with prebuilt templates in minutes.'
    },
    {
      icon: <FaUsers style={{ color: '#10b981' }} />,
      title: 'Team Collaboration',
      desc: 'Assign chats, add notes, and resolve issues faster with teammates.'
    },
    {
      icon: <FaChartLine style={{ color: '#6366f1' }} />,
      title: 'Analytics',
      desc: 'Track response times, conversation volume and conversion metrics.'
    },
    {
      icon: <FaRobot style={{ color: '#ef4444' }} />,
      title: 'AI Assist',
      desc: 'Use AI to suggest replies and automations to reduce manual effort.'
    },
  ];

  // mini how-it-works steps
  const steps = [
    { title: 'Connect Accounts', desc: 'Add your Instagram and Facebook pages with one click.' },
    { title: 'Build Flows', desc: 'Create welcome messages, FAQs, and lead-capture flows.' },
    { title: 'Auto-assign', desc: 'Route conversations to the right team or agent automatically.' },
    { title: 'Analyze & Improve', desc: 'Use built-in analytics to optimize engagement and conversions.' }
  ];

  return (
    <div className="social-page">
      <style>{css}</style>

      {/* HERO */}
      <section className="hero">
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="illustration float" style={{ width: '100%' }}>
            {/* Illustration from uploaded file */}
            <img src={hero} alt="inbox-illustration" />
          </div>
        </motion.div>

        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Organize your Instagram & Facebook Messenger DMs & stay connected with your customers 24×7</h2>
          <p className="lead">One dashboard to manage Multi-channel conversations. Consolidate your customer interactions in one unified view — manage Instagram and Facebook Messenger messages effortlessly from a single place.</p>

          <ul className="benefits-list">
            <li>
              <div className="dot" />
              <div>
                <div className="benefit-text">Stay organized with conversation filters</div>
                <div className="benefit-sub">Assign chats to specific teams or members. Say goodbye to ignored inquiries.</div>
              </div>
            </li>

            <li>
              <div className="dot" />
              <div>
                <div className="benefit-text">Automate responses & capture leads</div>
                <div className="benefit-sub">Use quick replies, buttons and forms to capture phone numbers and emails in DMs.</div>
              </div>
            </li>
          </ul>

          <div className="hero-buttons">
            <motion.button className="btn primary" whileHover={{ scale: 1.03 }}>Start Free Trial</motion.button>
            <motion.button className="btn ghost" whileHover={{ scale: 1.03 }}>See Demo</motion.button>
          </div>
        </motion.div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <motion.h3 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: 18, fontSize: '1.6rem' }}>Powerful features to supercharge messaging</motion.h3>
        <div className="features-grid">
          {features.map((f, idx) => (
            <motion.div key={idx} className="feature-card" whileHover={{ scale: 1.03 }} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} viewport={{ once: true }}>
              <div className="icon-wrapper">{f.icon}</div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <motion.h3 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ fontSize: '1.4rem', marginBottom: 12 }}>How it works</motion.h3>
        <div className="steps">
          {steps.map((s, i) => (
            <motion.div key={i} className="step" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.12 }} viewport={{ once: true }}>
              <div className="num">{i + 1}</div>
              <div>
                <div className="meta">{s.title}</div>
                <div className="desc">{s.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <motion.h3 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>Ready to manage all your social messages in one place?</motion.h3>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.12 }}>Start a free trial and see how much time your team can save by automating routine replies and centralizing inboxes.</motion.p>
        <motion.div style={{ marginTop: 14 }}>
          <motion.button className="btn primary pulse" whileHover={{ scale: 1.05 }}>Start Free Trial</motion.button>
        </motion.div>
      </section>
      
    </div>
  );
}
