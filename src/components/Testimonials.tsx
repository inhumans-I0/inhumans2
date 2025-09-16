import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Shield, Lock, Headphones, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Freelance Marketing Consultant",
    company: "SarahChen Digital",
    avatar: "/placeholder.svg",
    rating: 5,
    quote: "Inhumans transformed my business overnight. The ContentGenius AI helped me scale from 5 to 25 clients in just 3 months. The quality is incredible and my clients love the fast turnaround.",
    results: "5x client growth in 3 months"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "CEO",
    company: "TechFlow Solutions",
    avatar: "/placeholder.svg", 
    rating: 5,
    quote: "Our customer service costs dropped by 60% after implementing CustomerCare Pro. The AI handles 80% of inquiries automatically, and our team can focus on complex issues.",
    results: "60% cost reduction"
  },
  {
    id: 3,
    name: "Dr. Emily Watson",
    role: "AI Researcher & Agent Creator",
    company: "WatsonAI Labs",
    avatar: "/placeholder.svg",
    rating: 5,
    quote: "I've earned over $30K in the first 6 months hosting my financial analysis agent. The platform handles everything - payments, support, marketing. I just focus on improving my AI.",
    results: "$30K+ earnings in 6 months"
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    role: "Operations Manager",
    company: "GrowthCorp MSME",
    avatar: "/placeholder.svg",
    rating: 5,
    quote: "DataVision Analytics gave us enterprise-level insights at a fraction of the cost. We've optimized our supply chain and increased efficiency by 45%. Game-changing investment.",
    results: "45% efficiency increase"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "E-commerce Entrepreneur", 
    company: "StyleHub Online",
    avatar: "/placeholder.svg",
    rating: 5,
    quote: "MarketMaster completely automated our social media and email campaigns. Sales increased 200% while we reduced marketing workload by 70%. Absolutely revolutionary.",
    results: "200% sales increase"
  }
];

const trustBadges = [
  { name: "SOC 2 Certified", icon: Lock },
  { name: "GDPR Compliant", icon: Shield },
  { name: "Enterprise Security", icon: Lock },
  { name: "24/7 Support", icon: Headphones }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Success <span className="text-gradient-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of businesses and creators who've transformed their operations 
            and unlocked new revenue streams with Inhumans.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 p-8 bg-gradient-card rounded-2xl border border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Active AI Agents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">10,000+</div>
            <div className="text-sm text-muted-foreground">Businesses Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">$2M+</div>
            <div className="text-sm text-muted-foreground">Creator Earnings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card mb-16">
          <div className="flex items-center justify-between mb-8">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={prevTestimonial}
              className="h-12 w-12 rounded-full border border-border hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-primary w-8' : 'bg-muted'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>

            <Button 
              variant="ghost" 
              size="icon" 
              onClick={nextTestimonial}
              className="h-12 w-12 rounded-full border border-border hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          <div className="text-center animate-fade-in-up">
            <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
            
            <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-8 max-w-4xl mx-auto">
              "{current.quote}"
            </blockquote>

            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="text-lg font-bold text-primary-foreground">
                    {current.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg">{current.name}</div>
                <div className="text-muted-foreground">{current.role}</div>
                <div className="text-sm text-primary">{current.company}</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-accent font-semibold">{current.results}</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="flex items-center justify-center gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted/70 transition-colors">
                <Icon className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">{badge.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;