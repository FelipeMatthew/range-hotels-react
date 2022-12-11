import React from 'react';

import Header from '../../components/Header';
import MainContent from '../../components/MainContent';
import MainSection from '../../components/MainSection';
import MiddleContent from '../../components/MiddleContent';
import Footer from '../../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Header />
      <MainSection />
      <MiddleContent />
      <MainContent />
      <Footer />
    </>
  );
}
