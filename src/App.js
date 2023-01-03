import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Topbar } from "./Components/Topbar";
import { Footer } from "./Components/Footer";
import { BottomNav } from "./Components/BottomNav";
import { Home } from "./Components/Routes/Home";
import { DigitalMarketting } from "./Components/Routes/DigitalMarketting";
import { AppsDevelopment } from "./Components/Routes/AppsDevelopment";
import { VideoAnimation } from "./Components/Routes/VideoAnimation";
import { WrittingTranslation } from "./Components/Routes/WrittingTranslation";
import { DesignCreative } from "./Components/Routes/DesignCreative";
import { FacebookAds } from "./Components/Routes/FacebookAds";
import { HowItWorks } from "./Components/Routes/HowItWorks";

function App() {
  return (
    <>
      <Topbar />
      <BottomNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HIT" element={<HowItWorks />} />
        <Route path="/DigitalMarketting" element={<DigitalMarketting />} />
        <Route path="/AppsDevelopment" element={<AppsDevelopment />} />
        <Route path="/VideoAnimation" element={<VideoAnimation />} />

        <Route path="/WrittingTranslation" element={<WrittingTranslation />} />
        <Route path="/DesignCreative" element={<DesignCreative />} />
        <Route path="/FacebookAds" element={<FacebookAds />} />

        {/* <Route path="/About" element={<About />} />
      <Route path="/ContactNow" element={<ContactNow />} />
      <Route path="/Apply" element={<ApplyNow />} />
      <Route path="/DocFees" element={<DocumentFees />} />
      <Route path="/ReferAFriend" element={<RefferFriend />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/TermsAndCondition" element={<TermsAndCondition />} />
      <Route path="/Agrement" element={<Agrement />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/loan" element={<LoanServices />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
