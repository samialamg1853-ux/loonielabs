import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Twitter, 
  Facebook, 
  Linkedin,
  User,
  ExternalLink
} from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    navigate('/blog');
    return null;
  }

  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  const generateJsonLd = () => ({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "description": post.author.bio
    },
    "publisher": {
      "@type": "Organization",
      "name": "MapleMint",
      "logo": {
        "@type": "ImageObject",
        "url": "https://maplemint.ca/logo.png"
      }
    },
    "datePublished": post.publishDate,
    "dateModified": post.lastModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://maplemint.ca/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": post.keywords.join(", ")
  });

  return (
    <>
      <Helmet>
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.seoDescription} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={`https://maplemint.ca/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.seoTitle} />
        <meta property="og:description" content={post.seoDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://maplemint.ca/blog/${post.slug}`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.seoTitle} />
        <meta name="twitter:description" content={post.seoDescription} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(generateJsonLd())}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Back Button */}
            <Button 
              variant="ghost" 
              onClick={() => navigate('/blog')}
              className="mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>

            {/* Article Header */}
            <article>
              <header className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="default">{post.category}</Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                
                <h1 className="text-4xl font-bold mb-4 text-balance">{post.title}</h1>
                <p className="text-xl text-muted-foreground mb-6 text-balance">{post.description}</p>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="font-medium">{post.author.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </div>
              </header>

              {/* Table of Contents */}
              {post.tableOfContents && (
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Table of Contents</h3>
                    <ul className="space-y-2">
                      {post.tableOfContents.map((item, index) => (
                        <li key={index}>
                          <a 
                            href={`#${item.anchor}`}
                            className="text-accent hover:underline"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {/* Article Content */}
              <div 
                className="prose prose-lg max-w-none prose-headings:scroll-mt-20"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Bio */}
              <Card className="mt-12">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                      <User className="h-8 w-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">About {post.author.name}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{post.author.bio}</p>
                      <p className="text-xs text-muted-foreground">
                        Last updated: {post.lastModified} | 
                        Fact-checked by: {post.author.name}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Disclaimer */}
              <Card className="mt-6 border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-950/20">
                <CardContent className="p-4">
                  <p className="text-sm text-orange-800 dark:text-orange-200">
                    <strong>Educational Content Only:</strong> This article is for informational purposes only and should not be considered financial advice. 
                    Always consult with a qualified financial advisor and verify information with official sources like the CRA.
                  </p>
                </CardContent>
              </Card>

            </article>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-semibold mb-6">Related Articles</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                      <CardContent className="p-6">
                        <Badge variant="outline" className="mb-3">{relatedPost.category}</Badge>
                        <h4 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                          <Link to={`/blog/${relatedPost.slug}`}>
                            {relatedPost.title}
                          </Link>
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {relatedPost.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{relatedPost.date}</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter CTA */}
            <Card className="mt-16">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">Get Weekly Canadian Crypto Insights</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join 5,000+ investors getting weekly updates on Wealthsimple crypto, tax strategies, and market analysis.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-2 border rounded-md bg-background"
                  />
                  <Button>Get Free Guide</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Free RRSP/TFSA Crypto Guide included. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;