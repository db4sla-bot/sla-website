import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Layout from './components/Layout';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import NotFound from './pages/NotFound';
import Mosquitomesh from './pages/Mosquitomesh';
import InvisibleGrills from './pages/InvisibleGrills';
import ClothHangers from './pages/ClothHangers';
import ArtificialGrass from './pages/ArtificialGrass';
import BirdSpikes from './pages/BirdSpikes';

// Create context for modal state
export const ModalContext = createContext();

const App = () => {
  const [isSiteVisitModalOpen, setIsSiteVisitModalOpen] = useState(false);

  const openSiteVisitModal = () => {
    setIsSiteVisitModalOpen(true);
  };

  const closeSiteVisitModal = () => {
    setIsSiteVisitModalOpen(false);
  };

  // Auto-open modal after 3 seconds (only if not shown recently)
  useEffect(() => {
    const lastShown = localStorage.getItem('siteVisitModalLastShown');
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

    // Show modal if it hasn't been shown in the last 24 hours
    if (!lastShown || (now - parseInt(lastShown)) > oneDay) {
      const timer = setTimeout(() => {
        setIsSiteVisitModalOpen(true);
        localStorage.setItem('siteVisitModalLastShown', now.toString());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <ErrorBoundary>
      <ModalContext.Provider value={{ isSiteVisitModalOpen, openSiteVisitModal, closeSiteVisitModal }}>
        <Router>
          <ScrollToTopOnRouteChange />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/invisible-grills" element={<InvisibleGrills />} />
              <Route path="/services/mosquito-mesh" element={<Mosquitomesh />} />
              <Route path="/services/cloth-hangers" element={<ClothHangers />} />
              <Route path="/services/artificial-grass" element={<ArtificialGrass />} />
              <Route path="/services/bird-spikes" element={<BirdSpikes />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/mosquito-mesh" element={<Mosquitomesh />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
          <ScrollToTop />
        </Router>
      </ModalContext.Provider>
    </ErrorBoundary>
  );
};

export default App;