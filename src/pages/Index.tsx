
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ToolsGrid from '@/components/ToolsGrid';
import GuidesSection from '@/components/GuidesSection';
import Methodology from '@/components/Methodology';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Canada Crypto & ETF Tools — CRA Tax, TFSA/RRSP, Fees & Comparisons</title>
        <meta name="description" content="Canadian crypto & ETF hub with evergreen tools and guides: CRA crypto tax basics, TFSA/RRSP considerations, ACB helper, FX fee checker, and Bitcoin/ETH ETF comparisons." />
        <link rel="canonical" href="https://maplemint.ca/" />
        <meta name="keywords" content="canada crypto tax, crypto etf canada, cra crypto taxes, tfsa crypto etf, rrsp bitcoin etf, fx fees canada" />
        <meta property="og:title" content="Canada Crypto & ETF Tools — CRA Tax, TFSA/RRSP, Fees & Comparisons" />
        <meta property="og:description" content="Canadian crypto & ETF hub with evergreen tools and guides: CRA crypto tax basics, TFSA/RRSP considerations, ACB helper, FX fee checker, and Bitcoin/ETH ETF comparisons." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <ToolsGrid />
          <GuidesSection />
          <Methodology />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
