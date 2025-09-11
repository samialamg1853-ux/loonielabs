import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 cosmic-gradient" />
      <div className="absolute inset-0 cosmic-grid opacity-30" />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          Canada Crypto & ETF Tools — Tax, Fees, and ETF Comparisons
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">
          Evergreen tools & plain-English guides for Canadian investors. CRA-aligned crypto tax basics, TFSA/RRSP considerations, and Bitcoin/ETH ETF comparisons.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
          <Button 
            size="lg" 
            onClick={() => navigate('/tools/crypto-tax')}
            className="px-8 py-3 text-lg"
          >
            Calculate Crypto Tax
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => navigate('/tools/etf-compare')}
            className="px-8 py-3 text-lg"
          >
            Compare Bitcoin/ETH ETFs
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Unofficial. Educational only. Verify with CRA/your provider.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;