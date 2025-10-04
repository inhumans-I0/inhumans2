import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Puzzle, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-lg">
              <Puzzle className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-gradient-primary">Inhumans</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#marketplace" className="text-foreground hover:text-primary transition-colors">
              Marketplace
            </a>
            <a href="#hosters" className="text-foreground hover:text-primary transition-colors">
              For Hosters
            </a>
            <a href="#support" className="text-foreground hover:text-primary transition-colors">
              Support
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button 
              className="cta-primary"
              onClick={() => window.location.href = '/waitlist'}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Join Waitlist
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              <a 
                href="#marketplace" 
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </a>
              <a 
                href="#hosters" 
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                For Hosters
              </a>
              <a 
                href="#support" 
                className="text-foreground hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Support
              </a>
              <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-border">
                <Button 
                  className="cta-primary justify-start"
                  onClick={() => window.location.href = '/waitlist'}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Join Waitlist
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;