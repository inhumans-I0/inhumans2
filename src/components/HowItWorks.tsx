import { ArrowRight, Search, TestTube, Zap, BarChart, Upload, DollarSign, TrendingUp } from "lucide-react";

const buyerSteps = [
  {
    icon: Search,
    title: "Browse & Discover",
    description: "Explore our curated marketplace of AI agents across different categories and use cases.",
  },
  {
    icon: TestTube,
    title: "Preview & Test",
    description: "Try interactive demos to see how each AI agent works before making a commitment.",
  },
  {
    icon: Zap,
    title: "Integrate Seamlessly", 
    description: "Connect AI agents to your workflows with simple API integrations and pre-built connectors.",
  },
  {
    icon: BarChart,
    title: "Track Results",
    description: "Monitor performance, ROI, and efficiency gains with detailed analytics dashboards.",
  },
];

const hosterSteps = [
  {
    icon: Upload,
    title: "Upload Your Agent",
    description: "List your AI agent with comprehensive documentation, demos, and use case examples.",
  },
  {
    icon: DollarSign,
    title: "Set Your Price",
    description: "Choose flexible pricing models - subscription, usage-based, or one-time purchases.",
  },
  {
    icon: TrendingUp,
    title: "Track Earnings",
    description: "Monitor sales, user engagement, and revenue through our comprehensive dashboard.",
  },
  {
    icon: BarChart,
    title: "Get Paid",
    description: "Receive automatic payments with transparent reporting and multiple payout options.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/20" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            How <span className="text-gradient-primary">AgentHub</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're adopting AI solutions or monetizing your expertise, 
            our platform makes it simple and rewarding.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* For Buyers */}
          <div className="animate-fade-in-up">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4">
                <Search className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">For Businesses</h3>
              <p className="text-muted-foreground">Find and integrate AI agents in minutes</p>
            </div>

            <div className="space-y-8">
              {buyerSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                    {index < buyerSteps.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-muted-foreground mt-6 hidden sm:block" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gradient-card rounded-2xl border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">Average 40%</div>
                <div className="text-sm text-muted-foreground mb-4">Cost reduction in first 3 months</div>
                <button className="cta-primary w-full">
                  Start Browsing Agents
                </button>
              </div>
            </div>
          </div>

          {/* For Hosters */}
          <div className="animate-slide-in-right">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-secondary rounded-2xl mb-4">
                <Upload className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">For AI Creators</h3>
              <p className="text-muted-foreground">Monetize your AI expertise and scale globally</p>
            </div>

            <div className="space-y-8">
              {hosterSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                    {index < hosterSteps.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-muted-foreground mt-6 hidden sm:block" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gradient-card rounded-2xl border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">Up to $50K+</div>
                <div className="text-sm text-muted-foreground mb-4">Monthly earnings for top agents</div>
                <button className="cta-accent w-full">
                  Start Hosting Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;