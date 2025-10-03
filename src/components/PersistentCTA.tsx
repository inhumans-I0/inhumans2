import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Users, Server, ArrowRight } from "lucide-react";

const PersistentCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [userType, setUserType] = useState<'buyer' | 'hoster'>('buyer');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const viewportHeight = window.innerHeight;
      
      // Show CTA after scrolling past hero section
      if (scrollTop > viewportHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 animate-fade-in-up">
      <div className="bg-card border border-border rounded-2xl shadow-2xl p-4 max-w-md mx-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex gap-2">
            <button
              onClick={() => setUserType('buyer')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                userType === 'buyer'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Users className="w-4 h-4 inline mr-1" />
              Buyer
            </button>
            <button
              onClick={() => setUserType('hoster')}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                userType === 'hoster'
                  ? 'bg-secondary text-secondary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Server className="w-4 h-4 inline mr-1" />
              Hoster
            </button>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          {userType === 'buyer' ? (
            <>
              <div className="flex-1">
                <div className="text-sm font-medium">Ready to automate?</div>
                <div className="text-xs text-muted-foreground">Explore AI agents now</div>
              </div>
              <Button 
                className="cta-primary text-sm px-4 py-2"
                onClick={() => window.location.href = '/auth'}
              >
                Explore
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </>
          ) : (
            <>
              <div className="flex-1">
                <div className="text-sm font-medium">Start earning today</div>
                <div className="text-xs text-muted-foreground">Host your AI agent</div>
              </div>
              <Button 
                className="cta-accent text-sm px-4 py-2"
                onClick={() => window.location.href = '/auth'}
              >
                Host Now
                <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersistentCTA;