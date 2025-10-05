import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingUp, Zap, Bot, Sparkles, MessageSquare, FileText, ShoppingCart, Calendar } from "lucide-react";
import hyperspeedBg from "@/assets/hyperspeed-bg.jpg";
import { useState, useEffect } from "react";

const aiAgents = [
  {
    id: 1,
    name: "SalesBot Pro",
    description: "Automate lead generation and customer outreach",
    icon: TrendingUp,
    category: "Sales & Marketing",
    rating: 4.9,
  },
  {
    id: 2,
    name: "ContentCraft AI",
    description: "Generate high-quality content in seconds",
    icon: FileText,
    category: "Content Creation",
    rating: 4.8,
  },
  {
    id: 3,
    name: "ChatAssist 24/7",
    description: "Intelligent customer support around the clock",
    icon: MessageSquare,
    category: "Customer Support",
    rating: 4.9,
  },
  {
    id: 4,
    name: "DataInsight Pro",
    description: "Turn data into actionable business insights",
    icon: Sparkles,
    category: "Analytics",
    rating: 4.7,
  },
  {
    id: 5,
    name: "OrderFlow AI",
    description: "Streamline order processing and fulfillment",
    icon: ShoppingCart,
    category: "E-commerce",
    rating: 4.8,
  },
  {
    id: 6,
    name: "ScheduleSync",
    description: "Smart appointment and meeting management",
    icon: Calendar,
    category: "Productivity",
    rating: 4.6,
  },
];

const Hero = () => {
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentAgentIndex((prev) => (prev + 1) % aiAgents.length);
        setIsVisible(true);
      }, 300);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const currentAgent = aiAgents[currentAgentIndex];
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient-bg">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-secondary/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Marketplace
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Where 
              <span className="text-gradient-primary"> Business</span> 
              <br />
              Become 
              <span className="text-gradient-secondary"> Unstoppable</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Connect businesses with game-changing AI agents. Automate workflows, 
              boost productivity, or earn by hosting your AI solutions in our trusted marketplace.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              <Button 
                className="cta-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                onClick={() => window.location.href = '/waitlist'}
              >
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Explore AI Agents
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
              <Button 
                className="cta-accent text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
                onClick={() => window.location.href = '/waitlist'}
              >
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Host & Earn
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-border">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-primary">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">AI Agents</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-secondary">10K+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Businesses</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-success">$2M+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Earned</div>
              </div>
            </div>
          </div>

          {/* Right - AI Agent Showcase */}
          <div className="animate-slide-in-right hidden lg:block">
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Agent Card */}
              <div 
                className={`relative w-full max-w-md transition-all duration-300 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="bg-card border-2 border-border rounded-3xl p-8 shadow-2xl hover-lift">
                  {/* Agent Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-primary">
                      <currentAgent.icon className="w-12 h-12 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Agent Info */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-3">
                      {currentAgent.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{currentAgent.name}</h3>
                    <p className="text-muted-foreground mb-4">{currentAgent.description}</p>
                    
                    {/* Rating */}
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${
                              i < Math.floor(currentAgent.rating) 
                                ? 'text-primary fill-current' 
                                : 'text-border'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm font-medium">{currentAgent.rating}</span>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 cta-primary"
                      onClick={() => window.location.href = '/waitlist'}
                    >
                      Try Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => window.location.href = '/waitlist'}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>

              {/* Agent Indicators */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {aiAgents.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsVisible(false);
                      setTimeout(() => {
                        setCurrentAgentIndex(index);
                        setIsVisible(true);
                      }, 300);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentAgentIndex 
                        ? 'bg-primary w-8' 
                        : 'bg-border hover:bg-muted-foreground'
                    }`}
                    aria-label={`View ${aiAgents[index].name}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;