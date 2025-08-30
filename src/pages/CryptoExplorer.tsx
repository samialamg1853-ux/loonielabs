import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import CryptoPriceTracker from '@/components/CryptoPriceTracker';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, MapPin } from 'lucide-react';

const CryptoExplorer = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Helmet>
        <title>Wealthsimple Crypto List | Canadian CAD Prices & Availability</title>
        <meta name="description" content="Complete list of cryptocurrencies available on Wealthsimple with live CAD pricing, fees, and availability status. Find the best crypto to buy in Canada." />
        <link rel="canonical" href="https://maplemint.ca/crypto" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 py-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-8 w-8 text-accent icon-glow" />
              <h1 className="text-4xl font-bold text-balance">
                Wealthsimple Crypto Explorer
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Track all cryptocurrencies available on Wealthsimple with live CAD pricing, 
              fees breakdown, and availability status for Canadian investors.
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search cryptocurrencies..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Badge variant="secondary" className="cursor-pointer">All Coins</Badge>
              <Badge variant="outline" className="cursor-pointer">Top 10</Badge>
              <Badge variant="outline" className="cursor-pointer">Recently Added</Badge>
              <Badge variant="outline" className="cursor-pointer">ETF Available</Badge>
            </div>
          </div>

          {/* Crypto Price Tracker */}
          <CryptoPriceTracker searchTerm={searchTerm} />

          {/* Educational Section */}
          <div className="mt-16 bg-card rounded-lg p-8 border border-border">
            <h2 className="text-2xl font-semibold mb-4">Why Use Wealthsimple for Crypto?</h2>
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h3 className="font-medium text-foreground mb-2">Low Fees</h3>
                <p>Competitive spreads and no commission fees on crypto purchases.</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">TFSA/RRSP Eligible</h3>
                <p>Some crypto ETFs are eligible for tax-advantaged accounts.</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Regulated Platform</h3>
                <p>Fully regulated by Canadian financial authorities.</p>
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-2">Easy Integration</h3>
                <p>Seamlessly manage crypto alongside traditional investments.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoExplorer;