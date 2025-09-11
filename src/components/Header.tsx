
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X, Calculator, TrendingUp, FileText, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Switch } from '@/components/ui/switch';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = useState('tools');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode
  useEffect(() => {
    // Apply the theme to the document when it changes
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    }
  }, [isDarkMode]);
  
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/tools')) {
      setActivePage('tools');
    } else if (path.startsWith('/crypto')) {
      setActivePage('crypto');
    } else if (path.startsWith('/blog')) {
      setActivePage('blog');
    } else {
      setActivePage('');
    }
  }, [location.pathname]);
  
  const handleNavClick = (page: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setActivePage(page);
    
    // Handle navigation to different pages
    if (page === 'tools') {
      navigate('/tools/crypto-tax');
    } else if (page === 'guides') {
      navigate('/#guides');
    } else if (page === 'etfs') {
      navigate('/tools/etf-compare');
    } else if (page === 'taxes') {
      navigate('/tools/crypto-tax');
    } else {
      // For homepage sections, scroll to element or go home
      const element = document.getElementById(page);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
      }
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="sticky top-0 z-50 pt-8 px-4">
      <header className="w-full max-w-7xl mx-auto py-3 px-6 md:px-8 flex items-center justify-between">
        <div className="p-3">
          <Logo />
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-3 rounded-2xl text-muted-foreground hover:text-foreground"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
          <div className="rounded-full px-1 py-1 backdrop-blur-md bg-background/80 border border-border shadow-lg">
            <ToggleGroup type="single" value={activePage} onValueChange={(value) => value && setActivePage(value)}>
              <ToggleGroupItem 
                value="tools"
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'tools' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('tools')}
              >
                <Calculator size={16} className="inline-block mr-1.5" /> Tools
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="guides" 
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'guides' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('guides')}
              >
                <FileText size={16} className="inline-block mr-1.5" /> Guides
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="etfs" 
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'etfs' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('etfs')}
              >
                <TrendingUp size={16} className="inline-block mr-1.5" /> ETFs
              </ToggleGroupItem>
              <ToggleGroupItem 
                value="taxes" 
                className={cn(
                  "px-4 py-2 rounded-full transition-colors relative",
                  activePage === 'taxes' ? 'text-accent-foreground bg-accent' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                )}
                onClick={handleNavClick('taxes')}
              >
                <Calculator size={16} className="inline-block mr-1.5" /> Taxes
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </nav>
        
        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md py-4 px-6 border border-border rounded-2xl shadow-lg z-50">
            <div className="flex flex-col gap-4">
              <a 
                href="#tools" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'tools' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('tools')}
              >
                <Calculator size={16} className="inline-block mr-1.5" /> Tools
              </a>
              <a 
                href="#guides" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'guides' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('guides')}
              >
                <FileText size={16} className="inline-block mr-1.5" /> Guides
              </a>
              <a 
                href="#etfs" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'etfs' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('etfs')}
              >
                <TrendingUp size={16} className="inline-block mr-1.5" /> ETFs
              </a>
              <a 
                href="#taxes" 
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activePage === 'taxes' ? 'bg-accent text-accent-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                onClick={handleNavClick('taxes')}
              >
                <Calculator size={16} className="inline-block mr-1.5" /> Taxes
              </a>
              
              {/* Add theme toggle for mobile */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm text-muted-foreground">Theme</span>
                <div className="flex items-center gap-2">
                  <Moon size={16} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                  <Switch 
                    checked={!isDarkMode} 
                    onCheckedChange={toggleTheme} 
                    className="data-[state=checked]:bg-primary"
                  />
                  <Sun size={16} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="hidden md:flex items-center gap-4">
          {/* Theme toggle for desktop */}
          <div className="flex items-center gap-2 rounded-full px-3 py-2">
            <Moon size={18} className={`${isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
            <Switch 
              checked={!isDarkMode} 
              onCheckedChange={toggleTheme} 
              className="data-[state=checked]:bg-primary"
            />
            <Sun size={18} className={`${!isDarkMode ? 'text-primary' : 'text-muted-foreground'}`} />
          </div>
          <div className="rounded-2xl">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-muted mr-2">Search</Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-muted">Newsletter</Button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
