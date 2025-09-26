import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/ScrollToTop";
import Header from "./component/Header";
import Footer from "./component/Footer";

// Pages
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import DemoPage from "./pages/Demo";
import FreeTrail from "./pages/FreeTrail";
import Login from "./pages/login";
import MultipiCrm from "./pages/MultipiCrm";

// Resources
import HelpCenter from "./Menu/Resources/HelpCenter";
import Blogs from "./Menu/Resources/Blogs";

// Solutions
import Growth from "./Menu/SolutionsMenu/Growth";
import MultipiAssist from "./Menu/SolutionsMenu/MultipiAssist";
import OnlineEducation from "./Menu/SolutionsMenu/OnlineEducation";
import DigitalCommerce from "./Menu/SolutionsMenu/DigitalCommerce";
import BrandingAgencies from "./Menu/SolutionsMenu/BrandingAgencies";
import MedicalService from "./Menu/SolutionsMenu/MedicalService";

// Products
import AiSupport from "./Menu/Product/Ai-support";
import ChatBotAutomation from "./Menu/Product/ChatbotAutomation";
import InstagramFaceBook from "./Menu/Product/InstagramFaceBook";
import BroadCast from "./Menu/Product/BroadCast";
import ClicktoWhatsapp from "./Menu/Product/Clicktowhatsapp";
import Teaminbox from "./Menu/Product/Teaminbox";

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />

      <Routes>
        {/* Default Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/multi" element={<Home />} />

        {/* Pages */}
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/free-trial" element={<FreeTrail />} />
        <Route path="/login" element={<Login />} />

        {/* Resources */}
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/blog" element={<Blogs />} />

        {/* Solutions */}
        <Route path="/multipi-growth" element={<Growth />} />
        <Route path="/multipi-crm" element={<MultipiCrm />} />
        <Route path="/multipi-assist" element={<MultipiAssist />} />
        <Route path="/online-education" element={<OnlineEducation />} />
        <Route path="/digital-commerce" element={<DigitalCommerce />} />
        <Route path="/branding-agencies" element={<BrandingAgencies />} />
        <Route path="/medical-service" element={<MedicalService />} />

        {/* Products */}
        <Route path="/ai-support" element={<AiSupport />} />
        <Route path="/chatbot" element={<ChatBotAutomation />} />
        <Route path="/instagram-facebook" element={<InstagramFaceBook />} />
        <Route path="/broadcast" element={<BroadCast />} />
        <Route path="/click-to-whatsapp" element={<ClicktoWhatsapp />} />
        <Route path="/team-inbox" element={<Teaminbox />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
