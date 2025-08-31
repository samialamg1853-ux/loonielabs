import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import CryptoPriceTracker from '@/components/CryptoPriceTracker';
import { TrendingUp, Calculator, PieChart, FileText, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CryptoHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleNewsletterSignup = () => {
    if (email) {
      toast({
        title: "Welcome to MapleMint!",
        description: "You'll receive Canadian crypto insights weekly.",
      });
      setEmail('');
    }
  };

  return (
    <section className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cosmic-grid opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="pt-32 pb-20">
          {/* Hero Content */}
          <div className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
              <Badge variant="secondary" className="text-xs">New</Badge>
              <span className="text-sm text-muted-foreground">🇨🇦 Built for Canadian Crypto Investors</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Canada Crypto & ETF Tools —
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent"> 
                {' '}Tax, Fees, and ETF Comparisons
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
              Track Wealthsimple crypto prices in CAD, calculate your CRA taxes, 
              compare ETFs, and get expert Canadian investing guides — all free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="text-lg px-8">
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Crypto Tax
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <TrendingUp className="mr-2 h-5 w-5" />
                Explore Wealthsimple Coins
              </Button>
            </div>

            {/* Newsletter Signup with Lead Magnet */}
            <div className="max-w-md mx-auto">
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Free RRSP/TFSA Crypto Guide PDF</strong> + weekly insights for 5,000+ Canadian investors
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={handleNewsletterSignup}>
                  Get Free Guide
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Quick Tools Section */}
          <div className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="cosmic-glass p-6 rounded-lg text-center group hover:scale-105 transition-all cursor-pointer">
              <Calculator className="h-12 w-12 text-accent mx-auto mb-4 icon-glow" />
              <h3 className="text-lg font-semibold mb-2">CRA Tax Calculator</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Calculate crypto capital gains tax for CRA reporting
              </p>
              <Button variant="outline" size="sm" className="group-hover:bg-accent group-hover:text-accent-foreground">
                Calculate Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="cosmic-glass p-6 rounded-lg text-center group hover:scale-105 transition-all cursor-pointer">
              <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4 icon-glow" />
              <h3 className="text-lg font-semibold mb-2">Wealthsimple Tracker</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Live CAD prices for all Wealthsimple cryptocurrencies
              </p>
              <Button variant="outline" size="sm" className="group-hover:bg-accent group-hover:text-accent-foreground">
                Track Prices
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="cosmic-glass p-6 rounded-lg text-center group hover:scale-105 transition-all cursor-pointer">
              <PieChart className="h-12 w-12 text-accent mx-auto mb-4 icon-glow" />
              <h3 className="text-lg font-semibold mb-2">ETF Comparison</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Compare crypto ETFs vs direct purchases for TFSA/RRSP
              </p>
              <Button variant="outline" size="sm" className="group-hover:bg-accent group-hover:text-accent-foreground">
                Compare ETFs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Crypto Dashboard Preview */}
          <div className={`transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Live Canadian Crypto Prices</h2>
              <p className="text-muted-foreground">
                All cryptocurrencies available on Wealthsimple with live CAD pricing
              </p>
            </div>

            <div className="cosmic-glass p-8 rounded-xl">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Wealthsimple Crypto Portfolio</h3>
                    <p className="text-sm text-muted-foreground">Updated every minute • CAD pricing</p>
                  </div>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-600 border-green-500/30">
                    Live
                  </Badge>
                </div>
              </div>

              {/* Mini Crypto Tracker */}
              <CryptoPriceTracker searchTerm="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoHeroSection;