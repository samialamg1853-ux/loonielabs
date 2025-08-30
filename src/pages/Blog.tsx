import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, User, ArrowRight, Search, MapPin } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Complete Wealthsimple Crypto List 2025",
      description: "Everything you need to know about cryptocurrencies available on Wealthsimple, including fees, CAD pricing, and how to buy.",
      category: "Wealthsimple",
      date: "January 15, 2025",
      readTime: "8 min read",
      featured: true,
      slug: "wealthsimple-crypto-list-2025"
    },
    {
      title: "Crypto Taxes Canada: CRA Rules Simplified",
      description: "Complete guide to cryptocurrency taxation in Canada. Learn about capital gains, business income, and CRA reporting requirements.",
      category: "Taxes",
      date: "January 10, 2025",
      readTime: "12 min read",
      featured: true,
      slug: "crypto-taxes-canada-cra-rules"
    },
    {
      title: "Best Crypto ETFs for Canadians in 2025",
      description: "Compare Bitcoin and Ethereum ETFs available in Canada. TFSA/RRSP eligibility, fees, and performance analysis.",
      category: "ETFs",
      date: "January 8, 2025",
      readTime: "10 min read",
      featured: true,
      slug: "best-crypto-etfs-canada-2025"
    },
    {
      title: "Wealthsimple Crypto Fees Explained",
      description: "Breakdown of all fees when buying crypto on Wealthsimple. Compare with other Canadian exchanges.",
      category: "Wealthsimple",
      date: "January 5, 2025",
      readTime: "6 min read",
      featured: false,
      slug: "wealthsimple-crypto-fees-explained"
    },
    {
      title: "TFSA vs RRSP for Crypto ETFs",
      description: "Which account type is better for crypto ETF investments? Tax implications and strategy guide.",
      category: "Taxes",
      date: "January 3, 2025",
      readTime: "9 min read",
      featured: false,
      slug: "tfsa-vs-rrsp-crypto-etfs"
    },
    {
      title: "How to Buy Bitcoin on Wealthsimple",
      description: "Step-by-step guide to purchasing Bitcoin through Wealthsimple. Account setup to your first purchase.",
      category: "Tutorial",
      date: "December 28, 2024",
      readTime: "7 min read",
      featured: false,
      slug: "how-to-buy-bitcoin-wealthsimple"
    }
  ];

  const categories = ["All", "Wealthsimple", "Taxes", "ETFs", "Tutorial"];

  return (
    <>
      <Helmet>
        <title>Canadian Crypto Blog | Wealthsimple, Taxes & ETF Guides</title>
        <meta name="description" content="Expert guides on cryptocurrency investing in Canada. Wealthsimple tutorials, tax planning, ETF analysis, and Canadian crypto regulations." />
        <link rel="canonical" href="https://maplemint.ca/blog" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="h-8 w-8 text-accent icon-glow" />
                <h1 className="text-4xl font-bold text-balance">
                  Canadian Crypto Guides
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Expert insights on cryptocurrency investing in Canada. Wealthsimple guides, 
                tax planning, ETF analysis, and regulatory updates.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={category === "All" ? "default" : "outline"}
                      className="cursor-pointer"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Posts */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Featured Articles</h2>
              <div className="grid lg:grid-cols-3 gap-6">
                {blogPosts.filter(post => post.featured).map((post, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="group-hover:text-accent transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </div>
                        <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* All Posts */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">All Articles</h2>
              <div className="space-y-6">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="hover:shadow-md transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">{post.category}</Badge>
                            <span className="text-xs text-muted-foreground">{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-muted-foreground mb-3 line-clamp-2">
                            {post.description}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                          </div>
                        </div>
                        <Button variant="outline" className="shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                          Read Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <Card className="mt-16">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Stay Updated</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Get weekly insights on Canadian crypto investing, Wealthsimple updates, 
                  tax planning tips, and market analysis delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input placeholder="Enter your email" className="flex-1" />
                  <Button>Subscribe Free</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Join 5,000+ Canadian crypto investors. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;