import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, DollarSign, TrendingUp, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ToolsGrid = () => {
  const navigate = useNavigate();

  const tools = [
    {
      title: "Crypto Capital-Gains Estimator (Canada)",
      description: "Estimate capital gains for CRA with 50% inclusion and simple examples.",
      icon: <Calculator className="h-6 w-6" />,
      path: "/tools/crypto-tax"
    },
    {
      title: "FX Fee Checker (CAD⇄USD)",
      description: "Spot vs quoted rate → true % FX cost & dollars lost.",
      icon: <DollarSign className="h-6 w-6" />,
      path: "/tools/fx-fee-checker"
    },
    {
      title: "Bitcoin & Ethereum ETF Comparator",
      description: "MER, hedging, tracking difference, TFSA/RRSP notes.",
      icon: <TrendingUp className="h-6 w-6" />,
      path: "/tools/etf-compare"
    },
    {
      title: "ACB Helper (Adjusted Cost Base)",
      description: "How ACB works in Canada with 5 worked examples.",
      icon: <BookOpen className="h-6 w-6" />,
      path: "/tools/acb-helper"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Free Canadian Crypto & ETF Tools</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate taxes, compare costs, and understand regulations with our evergreen tools.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool, index) => (
            <Card 
              key={index} 
              className="cosmic-card hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => navigate(tool.path)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent-foreground group-hover:bg-accent/20 transition-colors">
                      {tool.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">Free tool</Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-accent-foreground transition-colors">
                  {tool.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {tool.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;