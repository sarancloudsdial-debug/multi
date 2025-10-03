import React from "react";
import { BrowserRouter as Router, Routes, Route ,Navigate } from "react-router-dom";
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
    <div>
      <Header />
      <ScrollToTop />
<Routes>
        <Route path="/" element={<Home />} />        
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/freeTrail" element={<FreeTrail />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/help" element={<HelpCenter/>}/>
        <Route path="/blog" element={<Blogs/>}/>
          {/* Solutions */}
        <Route path="/Multipigrowth" element={<Growth/>} /> {/* Growth page */}
        <Route path="/MultipiCrm" element={<MultipiCrm/>} /> {/* Growth page */}
        <Route path="/Multipiassist" element={<MultipiAssist/>} />
        <Route path="/OnlineEducation" element={<OnlineEducation/>}/>
        <Route path="/DigitalCommerce" element={<DigitalCommerce/>}/>
        <Route path="/brandingAgencies" element={<BrandingAgencies/>}/>
        <Route path="/MedicalService" element={<MedicalService/>}/>
 
        {/* Products */}
 
        <Route path="/Aisupport" element={<AiSupport/>}/>
        <Route path="/Chatbot" element={<ChatBotAutomation/>}/>
        <Route path="/InstgramFaceBook" element={<InstagramFaceBook/>}/>
        <Route path="/BroadCast" element={<BroadCast/>}/>
        <Route path="/ClicktoWhatsapp"element={<ClicktoWhatsapp/>}/>
        <Route path="/Teaminbox" element={<Teaminbox/>}/>
 
         <Route path="*" element={<Navigate to="/" replace />} />
       
       
      </Routes>
 

      <Footer />
    </div>
  );
};

export default App;
