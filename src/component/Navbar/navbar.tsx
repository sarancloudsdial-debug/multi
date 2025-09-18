import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

// Material Icons
import { MdModelTraining, MdOutlineAnalytics } from "react-icons/md";
// Ant Design Icons
import { AiOutlineRobot, AiOutlineMessage, AiOutlineTeam } from "react-icons/ai";
// Remix Icons
import { RiBook2Line, RiCustomerService2Line } from "react-icons/ri";
// Feather Icons
import { FiCpu, FiZap, FiUsers, FiMessageSquare, FiPhoneCall } from "react-icons/fi";
// Ionicons v5
import { IoAnalyticsSharp } from "react-icons/io5";
// BoxIcons
import { BiHelpCircle, BiBookOpen } from "react-icons/bi";

type MegaMenuProps = {
  closeMenu?: () => void; // optional so works in desktop & mobile
};

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showProductMenu, setShowProductMenu] = useState<boolean>(false);
  const [showResourcesMenu, setShowResourcesMenu] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <ul className="nav-list">
        {/* Solutions */}
        <li
          className="nav-item"
          onMouseEnter={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          <span className="nav-link">Solutions</span>
          {showMenu && (
            <div
              className="mega-menu-wrapper"
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => setShowMenu(false)}
            >
              <div className="mega-menu">
                <div className="menu-col">
                  <div className="menu-label">TEAMS</div>

                  <Link to="/Multipigrowth" className="menu-item">
                    <FiCpu className="menu-icon solutions-icon" />
                    <div>
                      <div className="menu-title">Multipi Growth</div>
                      <div className="menu-desc">
                        Drive customer engagement with data-driven campaigns
                      </div>
                    </div>
                  </Link>

                  <Link to="/Multipiassist" className="menu-item">
                    <FiZap className="menu-icon solutions-icon" />
                    <div>
                      <div className="menu-title">Multipi Assist</div>
                      <div className="menu-desc">
                        Deliver instant, AI-powered customer support
                      </div>
                    </div>
                  </Link>

                  <Link to="/MultipiCrm" className="menu-item">
                    <IoAnalyticsSharp className="menu-icon solutions-icon" />
                    <div>
                      <div className="menu-title">Multipi CRM</div>
                      <div className="menu-desc">
                        Automate follow-ups and shorten the sales cycle
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="menu-col">
                  <div className="menu-label">INDUSTRIES</div>

                  <Link to="/OnlineEducation" className="menu-item">
                    <BiBookOpen className="menu-icon solutions-icon" />
                    <span className="menu-title">Online Education</span>
                  </Link>

                  <Link to="/DigitalCommerce" className="menu-item">
                    <FiCpu className="menu-icon solutions-icon" />
                    <span className="menu-title">Digital Commerce</span>
                  </Link>

                  <Link to="/brandingAgencies" className="menu-item">
                    <MdOutlineAnalytics className="menu-icon solutions-icon" />
                    <span className="menu-title">Branding Agencies</span>
                  </Link>

                  <Link to="/MedicalService" className="menu-item">
                    <FiUsers className="menu-icon solutions-icon" />
                    <span className="menu-title">Medical Services</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Product */}
        <li
          className="nav-item"
          onMouseEnter={() => setShowProductMenu(true)}
          onMouseLeave={() => setShowProductMenu(false)}
        >
          <span className="nav-link">Product</span>
          {showProductMenu && (
            <div
              className="mega-menu-wrapper"
              onMouseEnter={() => setShowProductMenu(true)}
              onMouseLeave={() => setShowProductMenu(false)}
            >
              <div className="pmm-megaMenu">
                <div className="pmm-label">FEATURES</div>

                <ul className="pmm-menuList">
                  <Link to="/Chatbot">
                    <li className="pmm-menuItem">
                      <MdModelTraining className="pmm-icon solutions-icon" />
                      <div>
                        <div className="pmm-title">No Code Chatbots</div>
                        <div className="pmm-desc">
                          AI-powered, human like chatbots for every use case
                        </div>
                      </div>
                    </li>
                  </Link>

                  <Link to="/Aisupport">
                    <li className="pmm-menuItem">
                      <RiCustomerService2Line className="pmm-icon solutions-icon" />
                      <div>
                        <div className="pmm-title">AI Support Agent</div>
                        <div className="pmm-desc">
                          Respond to and resolve queries instantly
                        </div>
                      </div>
                    </li>
                  </Link>

                  <Link to="/InstgramFaceBook">
                    <li className="pmm-menuItem">
                      <AiOutlineMessage className="pmm-icon solutions-icon" />
                      <div>
                        <div className="pmm-title">
                          Instagram & Facebook Messenger
                        </div>
                        <div className="pmm-desc">
                          Stay connected with your customers 24*7
                        </div>
                      </div>
                    </li>
                  </Link>
                </ul>

                <ul className="pmm-menuList">
                  <Link to="/ClicktoWhatsapp">
                    <li className="pmm-menuItem">
                      <FiPhoneCall className="pmm-icon solutions-icon" />
                      <div>
                        <div className="pmm-title">Click to WhatsApp ads</div>
                        <div className="pmm-desc">
                          Turn ad clicks into chats and improve ad performance
                        </div>
                      </div>
                    </li>
                  </Link>

                  <Link to="/BroadCast">
                    <li className="pmm-menuItem">
                      <FiUsers className="pmm-icon solutions-icon" />
                      <div>
                        <div className="pmm-title">Broadcasts</div>
                        <div className="pmm-desc">
                          Send personalized campaigns with best delivery rates
                        </div>
                      </div>
                    </li>
                  </Link>

                  <Link to="/Teaminbox">
                    <li className="pmm-menuItem">
                      <AiOutlineTeam className="pmm-icon solutions-icon" />
                      <div>
                        <div className="pmm-title">Team Inbox</div>
                        <div className="pmm-desc">
                          Win customers with all sales & service chats in one place
                        </div>
                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          )}
        </li>

        {/* Resources */}
        <li
          className="nav-item"
          onMouseEnter={() => setShowResourcesMenu(true)}
          onMouseLeave={() => setShowResourcesMenu(false)}
        >
          <span className="nav-link">Resources</span>
          {showResourcesMenu && (
            <div
              className="resources-dropdown"
              onMouseEnter={() => setShowResourcesMenu(true)}
              onMouseLeave={() => setShowResourcesMenu(false)}
            >
              <ul className="resources-list">
                <Link to="/blog" className="resources-link">
                  <li className="resources-menu-item">
                    <BiBookOpen className="resources-menu-icon" />
                    Blogs
                  </li>
                </Link>
                <Link
                  to="/help"
                  className="resources-link resources-menu-item-spacing"
                >
                  <li className="resources-menu-item">
                    <BiHelpCircle className="resources-menu-icon" />
                    Help Center
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </li>

        {/* Pricing */}
        <li className="nav-item">
          <Link
            to="/Pricing"
            className={`nav-link ${scrolled ? "pricing-scrolled" : ""}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            Pricing
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
