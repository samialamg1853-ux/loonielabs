
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import CryptoHeroSection from '@/components/CryptoHeroSection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Canadian Crypto & ETF Hub | CAD Prices, Taxes & Wealthsimple Guides</title>
        <meta name="description" content="Track Wealthsimple crypto prices in CAD, calculate CRA taxes, compare ETFs, and get expert Canadian crypto investing guides. Built for Canadian investors." />
        <link rel="canonical" href="https://maplemint.ca/" />
        <meta name="keywords" content="wealthsimple crypto, crypto tax canada, bitcoin price cad, crypto etf canada, cra crypto taxes" />
        <meta property="og:title" content="Canadian Crypto & ETF Hub | MapleMint" />
        <meta property="og:description" content="Track Wealthsimple crypto prices in CAD, calculate CRA taxes, compare ETFs, and get expert Canadian crypto investing guides." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main>
          <CryptoHeroSection />
          <Features />
          <Testimonials />
          <Pricing />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
