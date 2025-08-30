import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TrendingUp, DollarSign, MapPin, PieChart } from 'lucide-react';

const ETFComparison = () => {
  const [investmentAmount, setInvestmentAmount] = useState('10000');
  const [timeHorizon, setTimeHorizon] = useState('5');

  const cryptoETFs = [
    {
      name: 'Purpose Bitcoin ETF',
      symbol: 'BTCC',
      managementFee: '1.00%',
      tfsa: true,
      rrsp: true,
      description: 'First Bitcoin ETF in the world'
    },
    {
      name: 'CI Galaxy Bitcoin ETF',
      symbol: 'BTCX',
      managementFee: '0.40%',
      tfsa: true,
      rrsp: true,
      description: 'Low-cost Bitcoin exposure'
    },
    {
      name: 'Purpose Ether ETF',
      symbol: 'ETHH',
      managementFee: '1.25%',
      tfsa: true,
      rrsp: true,
      description: 'Direct Ethereum exposure'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Best Crypto ETFs Canada | TFSA RRSP Bitcoin Ethereum Comparison</title>
        <meta name="description" content="Compare the best crypto ETFs available to Canadians. TFSA/RRSP eligible Bitcoin and Ethereum ETFs vs direct crypto purchases." />
        <link rel="canonical" href="https://maplemint.ca/tools/etf-vs-btc" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <PieChart className="h-8 w-8 text-accent icon-glow" />
                <h1 className="text-4xl font-bold text-balance">
                  Crypto ETF vs Direct Purchase
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Compare crypto ETFs with direct cryptocurrency purchases. 
                Find the best option for your TFSA, RRSP, or taxable account.
              </p>
            </div>

            {/* Comparison Calculator */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Investment Comparison Calculator
                </CardTitle>
                <CardDescription>
                  Calculate the long-term impact of fees and tax treatment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Investment Amount (CAD)</Label>
                    <Input
                      id="amount"
                      type="number"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time Horizon (Years)</Label>
                    <Input
                      id="time"
                      type="number"
                      value={timeHorizon}
                      onChange={(e) => setTimeHorizon(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Direct Bitcoin</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Initial Investment:</span>
                          <span>${investmentAmount} CAD</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Annual Fees:</span>
                          <span>~0.5%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax Treatment:</span>
                          <span>Capital Gains</span>
                        </div>
                        <div className="flex justify-between">
                          <span>TFSA Eligible:</span>
                          <span className="text-red-500">No</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Bitcoin ETF (BTCC)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Initial Investment:</span>
                          <span>${investmentAmount} CAD</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Annual Fees:</span>
                          <span>1.00%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax Treatment:</span>
                          <span>Capital Gains</span>
                        </div>
                        <div className="flex justify-between">
                          <span>TFSA Eligible:</span>
                          <span className="text-green-600">Yes</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Low-Cost ETF (BTCX)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Initial Investment:</span>
                          <span>${investmentAmount} CAD</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Annual Fees:</span>
                          <span>0.40%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax Treatment:</span>
                          <span>Capital Gains</span>
                        </div>
                        <div className="flex justify-between">
                          <span>TFSA Eligible:</span>
                          <span className="text-green-600">Yes</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* ETF Comparison Table */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Canadian Crypto ETFs
                </CardTitle>
                <CardDescription>
                  All crypto ETFs available to Canadian investors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {cryptoETFs.map((etf, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">{etf.name}</h3>
                          <p className="text-sm text-muted-foreground">{etf.description}</p>
                        </div>
                        <Badge variant="secondary">{etf.symbol}</Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Management Fee:</span>
                          <p className="font-medium">{etf.managementFee}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">TFSA:</span>
                          <p className={etf.tfsa ? "text-green-600" : "text-red-500"}>
                            {etf.tfsa ? "Eligible" : "Not Eligible"}
                          </p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">RRSP:</span>
                          <p className={etf.rrsp ? "text-green-600" : "text-red-500"}>
                            {etf.rrsp ? "Eligible" : "Not Eligible"}
                          </p>
                        </div>
                        <div>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Considerations */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    ETF Advantages
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">TFSA/RRSP Eligible</p>
                      <p className="text-sm text-muted-foreground">Tax-free or tax-deferred growth</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Professional Management</p>
                      <p className="text-sm text-muted-foreground">No need to manage private keys</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Regulated Investment</p>
                      <p className="text-sm text-muted-foreground">Canadian regulatory oversight</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Direct Crypto Advantages</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Full Ownership</p>
                      <p className="text-sm text-muted-foreground">Control your private keys</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">Lower Fees</p>
                      <p className="text-sm text-muted-foreground">Potentially lower long-term costs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-2 w-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <p className="font-medium">More Flexibility</p>
                      <p className="text-sm text-muted-foreground">Use for transactions and DeFi</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ETFComparison;