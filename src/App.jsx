import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import WhoWeSupportSection from "./components/WhoWeSupportSection.jsx";
import JourneySection from "./components/JourneySection.jsx";
import WhatWeOfferSection from "./components/WhatWeOfferSection.jsx";
import ProgramsSection from "./components/ProgramsSection.jsx";
import BlogSection from "./components/BlogSection.jsx";
import PartnersSection from "./components/PartnersSection.jsx";
import MentorsSection from "./components/MentorsSection.jsx";
import CTASection from "./components/CTASection.jsx";
import Footer from "./components/Footer.jsx";
import { ApplicationModal } from "./components/ApplicationModal.jsx";
import ChatbotButton from "./components/ChatbotButton.jsx";
import ArchivesPage from "./components/ArchivesPage.jsx";

import intellirmLogo from "./assets/intellirms.png";
import KlouderaLogo from "./assets/kloudera.png";
import Ibsea from "./assets/ibsea.png";
import Prasad_Anumula from "./assets/Prasad_Anumula.png";
import Durgesh_Raparthi from "./assets/Durgesh_Raparthi.png";
import Srilekha_Kaluvakunta from "./assets/Srilekha_Kaluvakunta.png";
import Shubham_Mishra from "./assets/Shubham_Mishra.png";
import Srikanth_Parikibandla from "./assets/Srikanth_Parikibandla.png";

function Home({ setIsModalOpen }) {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhoWeSupportSection />
      <JourneySection />
      <WhatWeOfferSection />
      <ProgramsSection onApply={() => setIsModalOpen(true)} />
      <BlogSection />
      <PartnersSection />
      <MentorsSection />
      <CTASection />
    </>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <Header onApplyClick={() => setIsModalOpen(true)} />

      <Routes>
        <Route path="/" element={<Home setIsModalOpen={setIsModalOpen} />} />
        <Route path="/archives" element={<ArchivesPage />} />
      </Routes>

      <Footer />

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <ChatbotButton />
    </Router>
  );
}

export default App;
