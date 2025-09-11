import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator, AlertTriangle, Calendar, FileText } from 'lucide-react';

const CryptoTax = () => {
  const [purchasePrice, setPurchasePrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [holdingPeriod, setHoldingPeriod] = useState('');
  const [results, setResults] = useState<any>(null);

  const calculateTax = () => {
    const purchase = parseFloat(purchasePrice);
    const sale = parseFloat(salePrice);
    const period = parseInt(holdingPeriod);

    if (!purchase || !sale || !period) return;

    const capitalGain = sale - purchase;
    const taxableGain = capitalGain * 0.5; // 50% inclusion rate
    const estimatedTax = taxableGain * 0.25; // Approximate 25% rate

    setResults({
      capitalGain,
      taxableGain,
      estimatedTax,
      isGain: capitalGain > 0
    });
  };

  return (
    <>
      <Helmet>
        <title>Crypto Capital Gains Tax Calculator Canada | CRA Tax Estimator</title>
        <meta name="description" content="Calculate your crypto capital gains tax in Canada. Estimate CRA taxes with 50% inclusion rate and simple examples. Free educational tool." />
        <meta name="keywords" content="crypto tax calculator canada, capital gains tax crypto, cra crypto tax, bitcoin tax canada" />
        <link rel="canonical" href="https://maplemint.ca/tools/crypto-tax" />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          <div className="max-w-6xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Crypto Capital-Gains Estimator (Canada)
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Estimate your crypto capital gains for CRA reporting with the 50% inclusion rate. 
                Educational purposes only — verify calculations with the CRA or a tax professional.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calculator */}
              <Card className="cosmic-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Tax Calculator
                  </CardTitle>
                  <CardDescription>
                    Enter your transaction details to estimate capital gains tax
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="purchase">Purchase Price (CAD)</Label>
                    <Input
                      id="purchase"
                      type="number"
                      placeholder="10000"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="sale">Sale Price (CAD)</Label>
                    <Input
                      id="sale"
                      type="number"
                      placeholder="15000"
                      value={salePrice}
                      onChange={(e) => setSalePrice(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="period">Holding Period (days)</Label>
                    <Input
                      id="period"
                      type="number"
                      placeholder="365"
                      value={holdingPeriod}
                      onChange={(e) => setHoldingPeriod(e.target.value)}
                    />
                  </div>
                  
                  <Button onClick={calculateTax} className="w-full">
                    Calculate Tax
                  </Button>
                  
                  {results && (
                    <Card className="mt-6">
                      <CardContent className="pt-6">
                        <h3 className="font-semibold mb-4">Results</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Capital {results.isGain ? 'Gain' : 'Loss'}:</span>
                            <span className={results.isGain ? 'text-green-600' : 'text-red-600'}>
                              ${Math.abs(results.capitalGain).toFixed(2)}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Taxable Amount (50%):</span>
                            <span>${Math.abs(results.taxableGain).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between font-semibold">
                            <span>Estimated Tax:</span>
                            <span>${Math.abs(results.estimatedTax).toFixed(2)}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>

              {/* Information Cards */}
              <div className="space-y-6">
                <Card className="cosmic-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      CRA Tax Rules
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Capital gains are taxed at 50% inclusion rate</li>
                      <li>• Business income is taxed at full marginal rate</li>
                      <li>• Keep detailed records of all transactions</li>
                      <li>• Report gains/losses in the tax year of disposition</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="cosmic-card border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-600">
                      <AlertTriangle className="h-5 w-5" />
                      Disclaimer
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      This is an educational estimate only. Tax rates vary by province and income level. 
                      Consult a tax professional or the CRA for official guidance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="cosmic-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Important Dates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Tax filing deadline: April 30, 2024</li>
                      <li>• RRSP contribution deadline: March 1, 2024</li>
                      <li>• TFSA contribution limit: $6,500 (2024)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CryptoTax;