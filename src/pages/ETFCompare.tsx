import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, Shield, Percent, CheckCircle } from 'lucide-react';

const ETFCompare = () => {
  const [selectedETF, setSelectedETF] = useState('bitcoin');

  const etfData = {
    bitcoin: [
      {
        name: "Purpose Bitcoin ETF",
        ticker: "BTCC",
        mer: "1.00%",
        hedged: "No",
        trackingDiff: "-0.25%",
        tfsaEligible: "Yes",
        rrspEligible: "Yes",
        description: "First Bitcoin ETF in North America"
      },
      {
        name: "CI Galaxy Bitcoin ETF",
        ticker: "BTCX",
        mer: "0.40%",
        hedged: "No",
        trackingDiff: "-0.15%",
        tfsaEligible: "Yes",
        rrspEligible: "Yes",
        description: "Lower fee Bitcoin exposure"
      }
    ],
    ethereum: [
      {
        name: "Purpose Ether ETF",
        ticker: "ETHH",
        mer: "1.25%",
        hedged: "Yes",
        trackingDiff: "-0.30%",
        tfsaEligible: "Yes",
        rrspEligible: "Yes",
        description: "Currency hedged Ethereum ETF"
      },
      {
        name: "CI Galaxy Ethereum ETF",
        ticker: "ETHX",
        mer: "0.40%",
        hedged: "No",
        trackingDiff: "-0.20%",
        tfsaEligible: "Yes",
        rrspEligible: "Yes",
        description: "Low-cost Ethereum exposure"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Bitcoin & Ethereum ETF Comparison Canada | TFSA RRSP Eligible</title>
        <meta name="description" content="Compare Canadian Bitcoin and Ethereum ETFs: MER fees, hedging, tracking difference, TFSA/RRSP eligibility. Find the best crypto ETF for your portfolio." />
        <meta name="keywords" content="bitcoin etf canada, ethereum etf canada, crypto etf tfsa, rrsp bitcoin etf, mer comparison" />
        <link rel="canonical" href="https://maplemint.ca/tools/etf-compare" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Bitcoin & Ethereum ETF Comparator
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Compare Canadian crypto ETFs by MER, hedging, tracking difference, and TFSA/RRSP eligibility. 
                Find the best option for your investment strategy.
              </p>
            </div>

            <Tabs value={selectedETF} onValueChange={setSelectedETF} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="bitcoin" className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Bitcoin ETFs
                </TabsTrigger>
                <TabsTrigger value="ethereum" className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Ethereum ETFs
                </TabsTrigger>
              </TabsList>

              <TabsContent value="bitcoin" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {etfData.bitcoin.map((etf, index) => (
                    <Card key={index} className="cosmic-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">{etf.name}</CardTitle>
                          <Badge variant="secondary">{etf.ticker}</Badge>
                        </div>
                        <CardDescription>{etf.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Percent className="h-4 w-4" />
                              MER
                            </div>
                            <div className="font-semibold">{etf.mer}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Hedged</div>
                            <div className="font-semibold">{etf.hedged}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Tracking Diff</div>
                            <div className="font-semibold">{etf.trackingDiff}</div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4" />
                              TFSA/RRSP
                            </div>
                            <div className="font-semibold text-green-600">{etf.tfsaEligible}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="ethereum" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {etfData.ethereum.map((etf, index) => (
                    <Card key={index} className="cosmic-card">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">{etf.name}</CardTitle>
                          <Badge variant="secondary">{etf.ticker}</Badge>
                        </div>
                        <CardDescription>{etf.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Percent className="h-4 w-4" />
                              MER
                            </div>
                            <div className="font-semibold">{etf.mer}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Hedged</div>
                            <div className="font-semibold">{etf.hedged}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Tracking Diff</div>
                            <div className="font-semibold">{etf.trackingDiff}</div>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4" />
                              TFSA/RRSP
                            </div>
                            <div className="font-semibold text-green-600">{etf.tfsaEligible}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* Additional Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="cosmic-card">
                <CardHeader>
                  <CardTitle>TFSA vs RRSP Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• TFSA: Tax-free growth and withdrawals</li>
                    <li>• RRSP: Tax deduction now, taxed on withdrawal</li>
                    <li>• Consider your current vs retirement tax bracket</li>
                    <li>• TFSA better for younger investors with lower income</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="cosmic-card">
                <CardHeader>
                  <CardTitle>Key Factors to Consider</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• MER: Lower is generally better for long-term holds</li>
                    <li>• Hedging: Protects against CAD/USD fluctuations</li>
                    <li>• Tracking difference: How closely ETF follows underlying asset</li>
                    <li>• Liquidity: Daily trading volume and bid-ask spread</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ETFCompare;