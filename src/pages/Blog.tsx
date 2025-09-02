import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, User, ArrowRight, Search, MapPin } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ["All", "Wealthsimple", "Taxes", "ETFs", "Tutorial"];

  // Filter and search functionality
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const allPosts = filteredPosts;

  const generateBlogJsonLd = () => ({
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Canadian Crypto Blog",
    "description": "Expert guides on cryptocurrency investing in Canada. Wealthsimple tutorials, tax planning, ETF analysis, and Canadian crypto regulations.",
    "url": "https://maplemint.ca/blog",
    "publisher": {
      "@type": "Organization",
      "name": "MapleMint",
      "logo": {
        "@type": "ImageObject",
        "url": "https://maplemint.ca/logo.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "url": `https://maplemint.ca/blog/${post.slug}`,
      "datePublished": post.publishDate,
      "dateModified": post.lastModified,
      "author": {
        "@type": "Person",
        "name": post.author.name
      },
      "keywords": post.keywords.join(", ")
    }))
  });

  const generateBreadcrumbJsonLd = () => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://maplemint.ca"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://maplemint.ca/blog"
      }
    ]
  });

  return (
    <>
      <Helmet>
        <title>Canadian Crypto Blog | Wealthsimple, Taxes & ETF Guides</title>
        <meta name="description" content="Expert guides on cryptocurrency investing in Canada. Wealthsimple tutorials, tax planning, ETF analysis, and Canadian crypto regulations." />
        <meta name="keywords" content="canadian crypto blog, wealthsimple crypto, bitcoin taxes canada, crypto etfs, cryptocurrency guides" />
        <link rel="canonical" href="https://maplemint.ca/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Canadian Crypto Blog | Expert Guides & Analysis" />
        <meta property="og:description" content="Expert guides on cryptocurrency investing in Canada. Wealthsimple tutorials, tax planning, ETF analysis, and Canadian crypto regulations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maplemint.ca/blog" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Canadian Crypto Blog | Expert Guides & Analysis" />
        <meta name="twitter:description" content="Expert guides on cryptocurrency investing in Canada. Wealthsimple tutorials, tax planning, ETF analysis." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateBlogJsonLd())}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbJsonLd())}
        </script>
      </Helmet>
      <Header />

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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant={category === activeCategory ? "default" : "outline"}
                      className="cursor-pointer hover:bg-accent transition-colors"
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Featured Articles</h2>
                <div className="grid lg:grid-cols-3 gap-6">
                  {featuredPosts.map((post, index) => (
                    <Link key={index} to={`/blog/${post.slug}`}>
                      <Card className="hover:shadow-lg transition-all duration-300 group cursor-pointer h-full">
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
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">
                All Articles 
                {searchQuery && (
                  <span className="text-base font-normal text-muted-foreground ml-2">
                    ({filteredPosts.length} results for "{searchQuery}")
                  </span>
                )}
                {activeCategory !== 'All' && !searchQuery && (
                  <span className="text-base font-normal text-muted-foreground ml-2">
                    ({filteredPosts.length} in {activeCategory})
                  </span>
                )}
              </h2>
              
              {filteredPosts.length === 0 ? (
                <Card className="text-center p-12">
                  <CardContent>
                    <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('All');
                      }}
                    >
                      Clear Filters
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {allPosts.map((post, index) => (
                    <Link key={index} to={`/blog/${post.slug}`}>
                      <Card className="hover:shadow-md transition-all duration-300 group cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex flex-col md:flex-row md:items-center gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="text-xs">{post.category}</Badge>
                                <span className="text-xs text-muted-foreground">{post.readTime}</span>
                                {post.featured && (
                                  <Badge variant="default" className="text-xs">Featured</Badge>
                                )}
                              </div>
                              <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                                {post.title}
                              </h3>
                              <p className="text-muted-foreground mb-3 line-clamp-2">
                                {post.description}
                              </p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" />
                                  {post.date}
                                </div>
                                <div className="flex items-center gap-2">
                                  <User className="h-4 w-4" />
                                  {post.author.name}
                                </div>
                              </div>
                            </div>
                            <Button variant="outline" className="shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                              Read Article
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              )}
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
      <Footer />
    </>
  );
};

export default Blog;