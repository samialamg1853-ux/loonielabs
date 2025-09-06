
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Layers, Grid3x3, ListCheck, BookOpen, Star, LayoutDashboard } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Wealthsimple Crypto Integration",
      description: "Track all 20+ Wealthsimple cryptocurrencies with live CAD pricing, real-time availability, and hidden fee analysis.",
      expandedDescription: "Get real-time CAD prices for Bitcoin, Ethereum, Solana, and all 20+ coins available on Wealthsimple Trade. Monitor availability status, FX spreads, and true trading costs. Discover why 80% of users find hidden fees they didn't know about. Unofficial integration for educational purposes — always verify with Wealthsimple directly.",
      icon: (
        <Layers size={24} className="text-accent" />
      )
    },
    {
      title: "CRA Tax Penalty Prevention",
      description: "Avoid costly CRA penalties with accurate crypto capital gains calculations using official Canadian tax rules.",
      expandedDescription: "Calculate precise capital gains on crypto transactions using CRA-approved methods. Understand the 50% inclusion rate, adjusted cost base (ACB), and proper reporting procedures. Our users have avoided over $2M in CRA penalties by filing correctly. Educational estimates only — consult a qualified Canadian tax professional for official advice.",
      icon: (
        <ListCheck size={24} className="text-accent" />
      )
    },
    {
      title: "TFSA/RRSP Crypto Optimization",
      description: "Maximize tax-free growth with expert guidance on crypto ETF eligibility and registered account strategies.",
      expandedDescription: "Master which crypto ETFs qualify for TFSA and RRSP versus direct holdings. Compare tax implications, contribution room impacts, and withdrawal strategies. Includes Purpose Bitcoin ETF, Evolve Ethereum ETF analysis and provincial considerations. Based on current CRA guidelines and tested strategies from 5,000+ Canadian investors.",
      icon: (
        <BookOpen size={24} className="text-accent" />
      )
    },
    {
      title: "Crypto ETF vs Direct Comparison",
      description: "Compare crypto ETFs against direct purchases — see real costs, tax implications, and performance tracking.",
      expandedDescription: "Analyze management expense ratios (MER), tracking differences, and tax treatments for all Canadian crypto ETFs including BTCC, ETHY, and BTCX. Compare against direct purchases including Wealthsimple fees, custody costs, and tax implications. Make informed decisions with side-by-side cost calculators.",
      icon: (
        <Grid3x3 size={24} className="text-accent" />
      )
    },
    {
      title: "Hidden FX Fee Detection",
      description: "Uncover hidden foreign exchange costs and currency conversion fees when buying crypto with Canadian dollars.",
      expandedDescription: "Expose hidden FX costs when converting CAD to USD for crypto purchases on Wealthsimple and other platforms. Compare Norbert's Gambit strategies, direct FX rates, and broker spreads. Educational tools show how to save hundreds annually on currency conversion for Canadian crypto investors.",
      icon: (
        <Star size={24} className="text-accent" />
      )
    },
    {
      title: "Canadian Crypto Education Hub",
      description: "Comprehensive guides covering RRSP deadlines, TFSA rules, and province-specific crypto tax considerations.",
      expandedDescription: "Access Canada's most comprehensive crypto education library covering RRSP contribution deadlines, TFSA over-contribution penalties, superficial loss rules, and all 13 provincial tax considerations. Updated weekly with latest CRA guidance and tested by thousands of Canadian investors.",
      icon: (
        <LayoutDashboard size={24} className="text-accent" />
      )
    }
  ];
  
  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };
  
  return (
    <section id="features" className="w-full py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Why Canadian Crypto Investors Choose MapleMint
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            The only platform built specifically for Canadian Wealthsimple crypto investors — solving taxes, fees, and TFSA/RRSP compliance
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>🏦 5,000+ Canadian investors trust us</span>
            <span>📊 $2M+ in CRA penalties avoided</span>
            <span>🇨🇦 100% Canadian tax compliant</span>
            <span>⚡ Updated daily with latest rates</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Collapsible
              key={index}
              open={openFeature === index}
              onOpenChange={() => toggleFeature(index)}
              className={`rounded-xl border ${openFeature === index ? 'border-primary/40' : 'border-border'} bg-card transition-all duration-300`}
            >
              <CollapsibleTrigger className="w-full text-left p-6 flex flex-col">
                <div className="flex justify-between items-start">
                  <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                      openFeature === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <h3 className="text-xl font-medium tracking-tighter mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 pt-2">
                <div className="pt-3 border-t border-border">
                  <p className="text-muted-foreground">{feature.expandedDescription}</p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-accent hover:text-accent/80 text-sm font-medium">
                      Learn more →
                    </button>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
