import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Methodology = () => {
  const navigate = useNavigate();
  
  // Get current month and year
  const currentDate = new Date();
  const monthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="cosmic-card">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">Methodology & Sources</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We summarize Canadian rules and ETF data from official CRA pages, Bank of Canada rates, and ETF prospectuses. 
              Our tools are educational estimates—always verify with the CRA and your provider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <p className="text-sm text-muted-foreground">
                <strong>Last updated:</strong> {monthYear}
              </p>
              <Button 
                variant="outline" 
                onClick={() => navigate('/about/methodology')}
                className="flex items-center gap-2"
              >
                View Full Methodology
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Methodology;