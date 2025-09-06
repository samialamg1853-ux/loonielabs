import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import CryptoPriceTracker from '@/components/CryptoPriceTracker';
import { TrendingUp, Calculator, Target, RotateCcw, FileText, ArrowRight, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

const CryptoHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

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
              Tired of confusing crypto taxes? Unsure about Wealthsimple fees? Can't find TFSA/RRSP guidance? 
              The only Canadian crypto hub built for Wealthsimple investors — solve taxes, fees, and compliance in minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="text-lg px-8" onClick={() => navigate('/tools/tax-calculator')}>
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Crypto Tax
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => navigate('/crypto')}>
                <TrendingUp className="mr-2 h-5 w-5" />
                Explore Wealthsimple Coins
              </Button>
            </div>

            {/* Newsletter Signup with Lead Magnet */}
            <div className="max-w-md mx-auto">
              <p className="text-sm text-muted-foreground mb-3">
                <strong>Get the 2025 Canadian Crypto Tax Cheat Sheet (PDF)</strong> — avoid CRA penalties, maximize TFSA benefits + exclusive market insights
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
            <div className="cosmic-glass p-6 rounded-lg text-center group hover:scale-105 transition-all cursor-pointer" onClick={() => navigate('/tools/tax-calculator')}>
              <Calculator className="h-12 w-12 text-accent mx-auto mb-4 icon-glow" />
              <h3 className="text-lg font-semibold mb-2">Avoid CRA Tax Penalties</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Calculate your crypto capital gains before tax season — Canadian investors saved $2M+ in penalties
              </p>
              <Button variant="outline" size="sm" className="group-hover:bg-accent group-hover:text-accent-foreground">
                Calculate Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="cosmic-glass p-6 rounded-lg text-center group hover:scale-105 transition-all cursor-pointer" onClick={() => navigate('/crypto')}>
              <Target className="h-12 w-12 text-accent mx-auto mb-4 icon-glow" />
              <h3 className="text-lg font-semibold mb-2">Spot Crypto Gain Opportunities</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Identify undervalued Wealthsimple coins, arbitrage gaps, and timing signals — data-driven profit discovery
              </p>
              <Button variant="outline" size="sm" className="group-hover:bg-accent group-hover:text-accent-foreground">
                Scan Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="cosmic-glass p-6 rounded-lg text-center group hover:scale-105 transition-all cursor-pointer" onClick={() => navigate('/tools/portfolio-optimizer')}>
              <RotateCcw className="h-12 w-12 text-accent mx-auto mb-4 icon-glow" />
              <h3 className="text-lg font-semibold mb-2">Smart Portfolio Rotations</h3>
              <p className="text-muted-foreground text-sm mb-4">
                AI-powered asset rotation based on trends, news, and financials — optimize your Wealthsimple crypto allocation
              </p>
              <Button variant="outline" size="sm" className="group-hover:bg-accent group-hover:text-accent-foreground">
                Optimize
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Crypto Dashboard Preview */}
          <div className={`transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Your Wealthsimple Crypto Command Center</h2>
              <p className="text-muted-foreground mb-6">
                Live CAD prices, gain opportunities, and portfolio insights — all Wealthsimple cryptocurrencies in one place
              </p>
              
              {/* Interactive Search */}
              <div className="max-w-md mx-auto mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search Bitcoin, Ethereum, Solana..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>

            <div className="cosmic-glass p-8 rounded-xl">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">Live Wealthsimple Crypto Tracker</h3>
                    <p className="text-sm text-muted-foreground">Updated every minute • CAD pricing • Gain opportunities highlighted</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="bg-green-500/20 text-green-600 border-green-500/30">
                      Live
                    </Badge>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-600 border-blue-500/30">
                      Interactive
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Mini Crypto Tracker */}
              <CryptoPriceTracker searchTerm={searchTerm} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoHeroSection;