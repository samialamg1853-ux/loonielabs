
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const Pricing = () => {
  const plan = {
    name: "100% Free Access",
    price: "Always Free",
    description: "All tools and educational content - powered by thoughtfully placed ads",
    features: [
      "Unlimited crypto tax calculations",
      "Live Wealthsimple coin tracking",
      "ETF comparison tools", 
      "Canadian investment guides",
      "TFSA/RRSP eligibility info",
      "FX fee calculators",
      "Weekly newsletter with insights",
      "No hidden fees or premium features"
    ],
    disclaimer: "Supported by relevant, non-intrusive advertising"
  };
  
  return (
    <section id="pricing" className="w-full py-20 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-foreground">
            Always Free for Canadian Investors
          </h2>
          <p className="text-muted-foreground text-lg">
            Access all tools and educational content at no cost - supported by relevant advertising
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-xl border border-accent/30 bg-card relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-accent text-accent-foreground text-sm rounded-full font-medium">
              🇨🇦 Built for Canadians
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-3xl font-medium tracking-tighter mb-2 text-foreground">{plan.name}</h3>
              
              <div className="mb-4">
                <div className="text-4xl font-bold tracking-tighter text-accent mb-2">{plan.price}</div>
              </div>
              
              <p className="text-muted-foreground text-lg">{plan.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-3 mb-8">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button size="lg" className="mb-4">
                Start Using Tools Now - Free
              </Button>
              <p className="text-xs text-muted-foreground">
                {plan.disclaimer}
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center text-muted-foreground">
          Have questions? <a href="#" className="text-primary hover:underline">Contact our sales team</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
