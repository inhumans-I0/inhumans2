import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Zap } from "lucide-react";
import heroImage from "@/assets/hero-marketplace.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Marketplace
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Find Powerful 
              <span className="text-gradient-primary"> AI Agents</span> or 
              <span className="text-gradient-secondary"> Monetize Yours</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect businesses with game-changing AI agents. Automate workflows, 
              boost productivity, or earn by hosting your AI solutions in our trusted marketplace.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="cta-primary text-lg px-8 py-4">
                <Users className="w-5 h-5 mr-2" />
                Explore AI Agents
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button className="cta-accent text-lg px-8 py-4">
                <TrendingUp className="w-5 h-5 mr-2" />
                Host & Earn
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">AI Agents</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">10K+</div>
                <div className="text-sm text-muted-foreground">Businesses</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-success">$2M+</div>
                <div className="text-sm text-muted-foreground">Earned</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              <img 
                src={heroImage} 
                alt="AI agents connecting businesses in a digital marketplace" 
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;