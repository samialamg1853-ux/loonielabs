import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, ExternalLink, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CryptoCoin {
  id: string;
  symbol: string;
  name: string;
  priceCAD: number;
  change24h: number;
  available: boolean;
  marketCap: number;
  volume24h: number;
  description: string;
}

interface CryptoPriceTrackerProps {
  searchTerm: string;
}

const CryptoPriceTracker: React.FC<CryptoPriceTrackerProps> = ({ searchTerm }) => {
  const [coins, setCoins] = useState<CryptoCoin[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Mock data for demonstration - in production, this would fetch from a real API
  const mockCoins: CryptoCoin[] = [
    {
      id: 'bitcoin',
      symbol: 'BTC',
      name: 'Bitcoin',
      priceCAD: 67234.56,
      change24h: 2.45,
      available: true,
      marketCap: 1320000000000,
      volume24h: 28000000000,
      description: 'The first and largest cryptocurrency by market cap'
    },
    {
      id: 'ethereum',
      symbol: 'ETH',
      name: 'Ethereum',
      priceCAD: 3456.78,
      change24h: -1.23,
      available: true,
      marketCap: 415000000000,
      volume24h: 15000000000,
      description: 'Smart contract platform and second-largest cryptocurrency'
    },
    {
      id: 'solana',
      symbol: 'SOL',
      name: 'Solana',
      priceCAD: 234.12,
      change24h: 5.67,
      available: true,
      marketCap: 110000000000,
      volume24h: 3200000000,
      description: 'High-performance blockchain supporting decentralized apps'
    },
    {
      id: 'cardano',
      symbol: 'ADA',
      name: 'Cardano',
      priceCAD: 1.23,
      change24h: -0.89,
      available: true,
      marketCap: 43000000000,
      volume24h: 890000000,
      description: 'Proof-of-stake blockchain platform focused on sustainability'
    },
    {
      id: 'polygon',
      symbol: 'MATIC',
      name: 'Polygon',
      priceCAD: 1.45,
      change24h: 3.21,
      available: true,
      marketCap: 14000000000,
      volume24h: 450000000,
      description: 'Ethereum scaling solution and multi-chain platform'
    },
    {
      id: 'chainlink',
      symbol: 'LINK',
      name: 'Chainlink',
      priceCAD: 23.45,
      change24h: -2.1,
      available: true,
      marketCap: 14500000000,
      volume24h: 890000000,
      description: 'Decentralized oracle network connecting blockchains to real-world data'
    }
  ];

  useEffect(() => {
    // Simulate API loading delay
    const timer = setTimeout(() => {
      setCoins(mockCoins);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const formatMarketCap = (marketCap: number) => {
    if (marketCap >= 1e12) {
      return `$${(marketCap / 1e12).toFixed(2)}T CAD`;
    } else if (marketCap >= 1e9) {
      return `$${(marketCap / 1e9).toFixed(2)}B CAD`;
    } else if (marketCap >= 1e6) {
      return `$${(marketCap / 1e6).toFixed(2)}M CAD`;
    }
    return `$${marketCap.toLocaleString()} CAD`;
  };

  const handleBuyClick = (coinSymbol: string) => {
    toast({
      title: "Redirecting to Wealthsimple",
      description: `Opening ${coinSymbol} purchase page...`,
    });
  };

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-4 bg-muted rounded w-20 mb-2"></div>
              <div className="h-6 bg-muted rounded w-32 mb-4"></div>
              <div className="h-8 bg-muted rounded w-24 mb-2"></div>
              <div className="h-4 bg-muted rounded w-16"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-accent">{coins.length}</div>
            <div className="text-sm text-muted-foreground">Available Coins</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-green-600">
              {coins.filter(c => c.change24h > 0).length}
            </div>
            <div className="text-sm text-muted-foreground">Gaining</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-red-600">
              {coins.filter(c => c.change24h < 0).length}
            </div>
            <div className="text-sm text-muted-foreground">Declining</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-accent">100%</div>
            <div className="text-sm text-muted-foreground">TFSA Ready</div>
          </CardContent>
        </Card>
      </div>

      {/* Coin Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCoins.map((coin) => (
          <Card key={coin.id} className="hover:shadow-lg transition-all duration-300 group">
            <CardContent className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="font-bold text-accent">{coin.symbol.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{coin.name}</h3>
                    <p className="text-sm text-muted-foreground">{coin.symbol}</p>
                  </div>
                </div>
                <Badge variant={coin.available ? "default" : "secondary"}>
                  {coin.available ? "Available" : "Unavailable"}
                </Badge>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="text-2xl font-bold">
                  {formatPrice(coin.priceCAD)}
                </div>
                <div className={`flex items-center gap-1 text-sm ${
                  coin.change24h >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {coin.change24h >= 0 ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  {Math.abs(coin.change24h).toFixed(2)}% (24h)
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Market Cap:</span>
                  <span>{formatMarketCap(coin.marketCap)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Volume (24h):</span>
                  <span>{formatMarketCap(coin.volume24h)}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                {coin.description}
              </p>

              {/* Actions */}
              <div className="flex gap-2">
                <Button 
                  className="flex-1" 
                  onClick={() => handleBuyClick(coin.symbol)}
                  disabled={!coin.available}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Buy on Wealthsimple
                </Button>
                <Button variant="outline" size="icon">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCoins.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No coins found matching your search.</p>
        </div>
      )}
    </div>
  );
};

export default CryptoPriceTracker;