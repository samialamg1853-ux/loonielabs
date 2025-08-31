
import React, { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Layers, Grid3x3, ListCheck, BookOpen, Star, LayoutDashboard } from "lucide-react";

const Features = () => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Wealthsimple Integration",
      description: "Track all cryptocurrencies available on Wealthsimple with live CAD pricing and availability status.",
      expandedDescription: "Get real-time CAD prices for Bitcoin, Ethereum, Solana and all other coins available on Wealthsimple. See availability status, trading pairs, and fee structures. Unofficial integration for educational purposes - verify all data with Wealthsimple directly.",
      icon: (
        <Layers size={24} className="text-accent" />
      )
    },
    {
      title: "CRA Tax Compliance",
      description: "Educational tools to help understand crypto capital gains reporting requirements for the Canada Revenue Agency.",
      expandedDescription: "Calculate estimated capital gains on your crypto transactions using Canadian tax rules. Understand the 50% inclusion rate, adjusted cost base (ACB), and proper CRA reporting procedures. Educational estimates only - consult a tax professional for official advice.",
      icon: (
        <ListCheck size={24} className="text-accent" />
      )
    },
    {
      title: "TFSA/RRSP Guidance",
      description: "Clear guidance on crypto ETF eligibility and tax implications for registered Canadian accounts.",
      expandedDescription: "Understand which crypto ETFs are eligible for TFSA and RRSP accounts versus direct cryptocurrency holdings. Compare tax implications, contribution room impacts, and withdrawal rules for different account types. Educational content based on current CRA guidelines.",
      icon: (
        <BookOpen size={24} className="text-accent" />
      )
    },
    {
      title: "ETF vs Direct Comparison",
      description: "Compare the costs and benefits of crypto ETFs versus direct cryptocurrency purchases in Canada.",
      expandedDescription: "Analyze management expense ratios (MER), tracking differences, tax treatments, and accessibility for Canadian crypto ETFs. Compare against direct purchases including exchange fees, custody costs, and tax implications. Help make informed decisions for your investment strategy.",
      icon: (
        <Grid3x3 size={24} className="text-accent" />
      )
    },
    {
      title: "FX Fee Awareness",
      description: "Calculate the true cost of foreign exchange fees when buying crypto with Canadian dollars.",
      expandedDescription: "Understand hidden FX costs when converting CAD to USD for crypto purchases. Compare Norbert's Gambit strategies, direct FX rates, and broker spreads. Educational tools to help minimize currency conversion costs for Canadian investors.",
      icon: (
        <Star size={24} className="text-accent" />
      )
    },
    {
      title: "Canadian Educational Content",
      description: "Guides and articles written specifically for Canadian crypto investors and tax situations.",
      expandedDescription: "Access comprehensive guides covering RRSP deadlines, TFSA over-contribution penalties, superficial loss rules, and provincial tax considerations. All content is researched and written with Canadian regulations and investment accounts in mind.",
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
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Why Canadian Crypto Investors Choose MapleMint
          </h2>
          <p className="text-muted-foreground text-lg">
            Educational tools and resources designed specifically for Canadian cryptocurrency investors and Wealthsimple users
          </p>
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
