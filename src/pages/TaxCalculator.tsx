import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, FileText, MapPin, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const TaxCalculator = () => {
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
    const estimatedTax = taxableGain * 0.25; // Approximate tax rate

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
        <title>Crypto Tax Calculator Canada | CRA Capital Gains Estimator</title>
        <meta name="description" content="Calculate your crypto capital gains tax in Canada. Free CRA-compliant calculator for Bitcoin, Ethereum, and all cryptocurrency tax reporting." />
        <link rel="canonical" href="https://maplemint.ca/tools/tax-calculator" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Calculator className="h-8 w-8 text-accent icon-glow" />
                <h1 className="text-4xl font-bold text-balance">
                  Crypto Tax Calculator
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Calculate your cryptocurrency capital gains tax for CRA reporting. 
                Get accurate estimates for Bitcoin, Ethereum, and all crypto assets.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Calculate Your Crypto Gains
                  </CardTitle>
                  <CardDescription>
                    Enter your transaction details to calculate capital gains tax
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="purchase">Purchase Price (CAD)</Label>
                    <Input
                      id="purchase"
                      type="number"
                      placeholder="10000.00"
                      value={purchasePrice}
                      onChange={(e) => setPurchasePrice(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sale">Sale Price (CAD)</Label>
                    <Input
                      id="sale"
                      type="number"
                      placeholder="15000.00"
                      value={salePrice}
                      onChange={(e) => setSalePrice(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="period">Holding Period (Days)</Label>
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
                    <div className="space-y-4 mt-6">
                      <div className="p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold mb-2">Tax Calculation Results</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Capital {results.isGain ? 'Gain' : 'Loss'}:</span>
                            <span className={results.isGain ? 'text-green-600' : 'text-red-600'}>
                              ${Math.abs(results.capitalGain).toFixed(2)} CAD
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Taxable Amount (50%):</span>
                            <span>${Math.abs(results.taxableGain).toFixed(2)} CAD</span>
                          </div>
                          <div className="flex justify-between font-semibold">
                            <span>Estimated Tax:</span>
                            <span>${Math.abs(results.estimatedTax).toFixed(2)} CAD</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Information Panel */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      CRA Tax Rules
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Badge variant="secondary" className="mb-2">Capital Gains</Badge>
                      <p className="text-sm text-muted-foreground">
                        50% of crypto gains are taxable. Report on Schedule 3 of your tax return.
                      </p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">Business Income</Badge>
                      <p className="text-sm text-muted-foreground">
                        Day trading or mining may be considered business income (100% taxable).
                      </p>
                    </div>
                    <div>
                      <Badge variant="secondary" className="mb-2">Record Keeping</Badge>
                      <p className="text-sm text-muted-foreground">
                        Keep detailed records of all transactions, including dates and CAD values.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    This calculator provides estimates only. Consult a tax professional 
                    for complex situations or large amounts.
                  </AlertDescription>
                </Alert>

                <Card>
                  <CardHeader>
                    <CardTitle>Tax Deadline Reminders</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Tax filing deadline: April 30, 2025</li>
                      <li>• Self-employed deadline: June 15, 2025</li>
                      <li>• Payment deadline: April 30, 2025</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaxCalculator;