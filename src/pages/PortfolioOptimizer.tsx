import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RotateCcw, TrendingUp, TrendingDown, AlertTriangle, Target, PieChart, BarChart3 } from 'lucide-react';

const PortfolioOptimizer = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  
  const rotationOpportunities = [
    {
      from: 'Bitcoin (BTC)',
      to: 'Solana (SOL)',
      reason: 'Technical breakout + ecosystem growth',
      confidence: 85,
      potentialGain: '+12-18%',
      risk: 'Medium',
      timeframe: '2-4 weeks'
    },
    {
      from: 'Ethereum (ETH)',
      to: 'Polygon (MATIC)',
      reason: 'Layer 2 adoption surge',
      confidence: 72,
      potentialGain: '+8-15%',
      risk: 'Medium-High',
      timeframe: '1-3 weeks'
    },
    {
      from: 'Cash Position',
      to: 'Chainlink (LINK)',
      reason: 'Oracle demand increasing',
      confidence: 68,
      potentialGain: '+5-12%',
      risk: 'Low-Medium',
      timeframe: '3-6 weeks'
    }
  ];

  const portfolioMetrics = {
    currentAllocation: [
      { asset: 'Bitcoin (BTC)', percentage: 35, value: '$8,750', change: '+2.4%' },
      { asset: 'Ethereum (ETH)', percentage: 25, value: '$6,250', change: '-1.2%' },
      { asset: 'Solana (SOL)', percentage: 15, value: '$3,750', change: '+5.8%' },
      { asset: 'Cardano (ADA)', percentage: 10, value: '$2,500', change: '+0.8%' },
      { asset: 'Cash', percentage: 15, value: '$3,750', change: '0.0%' }
    ],
    totalValue: '$25,000',
    monthlyChange: '+4.2%',
    riskScore: 7.2,
    diversificationScore: 8.1
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 80) return 'bg-green-500/20 text-green-600 border-green-500/30';
    if (confidence >= 70) return 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30';
    return 'bg-red-500/20 text-red-600 border-red-500/30';
  };

  return (
    <>
      <Helmet>
        <title>Portfolio Optimizer & Asset Rotation | Smart Wealthsimple Crypto Strategy</title>
        <meta name="description" content="AI-powered portfolio optimization for Wealthsimple crypto. Get data-driven asset rotation recommendations based on market trends, news sentiment, and financial analysis." />
        <link rel="canonical" href="https://maplemint.ca/tools/portfolio-optimizer" />
        <meta name="keywords" content="wealthsimple portfolio optimizer, crypto asset rotation, portfolio rebalancing canada, crypto portfolio management" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
              <Badge variant="secondary" className="text-xs">AI Powered</Badge>
              <span className="text-sm text-muted-foreground">🇨🇦 Optimized for Canadian Investors</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Smart Portfolio Rotations & 
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                {' '}Asset Optimization
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              AI-powered portfolio optimization for Wealthsimple crypto investors. Get data-driven rotation recommendations 
              based on market trends, news sentiment, and technical analysis.
            </p>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="opportunities" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="opportunities">Rotation Opportunities</TabsTrigger>
              <TabsTrigger value="current">Current Portfolio</TabsTrigger>
              <TabsTrigger value="analytics">Market Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="opportunities" className="space-y-6">
              <div className="grid gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <RotateCcw className="h-5 w-5" />
                      Top Rotation Opportunities
                    </CardTitle>
                    <CardDescription>
                      Based on technical analysis, news sentiment, and market momentum
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {rotationOpportunities.map((opportunity, index) => (
                        <div key={index} className="border rounded-lg p-4 space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="text-sm">
                                <span className="font-medium">{opportunity.from}</span>
                                <span className="mx-2 text-muted-foreground">→</span>
                                <span className="font-medium text-accent">{opportunity.to}</span>
                              </div>
                            </div>
                            <Badge variant="secondary" className={getConfidenceColor(opportunity.confidence)}>
                              {opportunity.confidence}% Confidence
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-muted-foreground">{opportunity.reason}</p>
                          
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Potential:</span>
                              <div className="font-medium text-green-600">{opportunity.potentialGain}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Risk:</span>
                              <div className="font-medium">{opportunity.risk}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Timeframe:</span>
                              <div className="font-medium">{opportunity.timeframe}</div>
                            </div>
                          </div>
                          
                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1">Execute Rotation</Button>
                            <Button size="sm" variant="outline">View Details</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="current" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="h-5 w-5" />
                      Current Allocation
                    </CardTitle>
                    <CardDescription>Your Wealthsimple crypto portfolio breakdown</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {portfolioMetrics.currentAllocation.map((asset, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-sm font-medium">{asset.asset}</span>
                              <span className="text-sm text-muted-foreground">{asset.percentage}%</span>
                            </div>
                            <Progress value={asset.percentage} className="h-2" />
                          </div>
                          <div className="ml-4 text-right">
                            <div className="text-sm font-medium">{asset.value}</div>
                            <div className={`text-xs ${asset.change.startsWith('+') ? 'text-green-600' : asset.change.startsWith('-') ? 'text-red-600' : 'text-muted-foreground'}`}>
                              {asset.change}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5" />
                      Portfolio Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-card rounded-lg border">
                      <span className="text-sm text-muted-foreground">Total Value</span>
                      <span className="text-lg font-bold">{portfolioMetrics.totalValue}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-card rounded-lg border">
                      <span className="text-sm text-muted-foreground">30D Change</span>
                      <span className="text-lg font-bold text-green-600">{portfolioMetrics.monthlyChange}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-card rounded-lg border">
                      <span className="text-sm text-muted-foreground">Risk Score</span>
                      <span className="text-lg font-bold">{portfolioMetrics.riskScore}/10</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-card rounded-lg border">
                      <span className="text-sm text-muted-foreground">Diversification</span>
                      <span className="text-lg font-bold text-green-600">{portfolioMetrics.diversificationScore}/10</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Market Analytics & Signals
                  </CardTitle>
                  <CardDescription>Real-time market data driving our rotation recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8 text-muted-foreground">
                    <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Advanced market analytics dashboard coming soon...</p>
                    <p className="text-sm mt-2">Technical indicators, sentiment analysis, and correlation matrices</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle>Ready to Optimize Your Portfolio?</CardTitle>
                <CardDescription>
                  Join 2,000+ Canadian investors using AI-powered rotation strategies
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1">Start Free Analysis</Button>
                  <Button variant="outline" className="flex-1">View Sample Report</Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  No account required • Analysis updates daily • Canadian tax optimized
                </p>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PortfolioOptimizer;