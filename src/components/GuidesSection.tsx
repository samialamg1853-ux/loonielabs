import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, Calculator, DollarSign, ArrowRightLeft, Folder } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GuidesSection = () => {
  const navigate = useNavigate();

  const guides = [
    {
      title: "Crypto Taxes in Canada: Capital Gains vs Income",
      description: "Understand 50% inclusion vs business income with clear examples.",
      icon: <Calculator className="h-6 w-6" />,
      slug: "/guides/crypto-tax-canada"
    },
    {
      title: "TFSA vs RRSP for Crypto ETFs (Decision Tree)",
      description: "Choose the right account type for BTC/ETH ETFs.",
      icon: <Shield className="h-6 w-6" />,
      slug: "/guides/tfsa-vs-rrsp-crypto-etfs"
    },
    {
      title: "Superficial Loss (30-Day Rule) Explained",
      description: "Visual timeline + common pitfalls.",
      icon: <FileText className="h-6 w-6" />,
      slug: "/guides/superficial-loss-30-day"
    },
    {
      title: "Wealthsimple Crypto Fees: Spreads & FX",
      description: "All fees in one place with plain-English math.",
      icon: <DollarSign className="h-6 w-6" />,
      slug: "/guides/wealthsimple-crypto-fees"
    },
    {
      title: "Norbert's Gambit: Step-by-Step (Save FX Fees)",
      description: "Broker-agnostic walkthrough + warnings.",
      icon: <ArrowRightLeft className="h-6 w-6" />,
      slug: "/guides/norberts-gambit"
    },
    {
      title: "CRA Record-Keeping for Crypto",
      description: "What exports to keep for ACB & audits.",
      icon: <Folder className="h-6 w-6" />,
      slug: "/guides/record-keeping-cra"
    }
  ];

  return (
    <section id="guides" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Evergreen Guides for Canadians</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Plain-English explanations of Canadian crypto tax rules, regulations, and best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <Card 
              key={index} 
              className="cosmic-card hover:scale-105 transition-all duration-300 cursor-pointer group"
              onClick={() => navigate(guide.slug)}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent-foreground group-hover:bg-accent/20 transition-colors">
                    {guide.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold group-hover:text-accent-foreground transition-colors line-clamp-2">
                  {guide.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {guide.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidesSection;