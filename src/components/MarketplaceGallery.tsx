import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Play, Plus, Zap, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const categories = ["All", "Customer Service", "Content Creation", "Analytics", "Marketing", "Finance"];

const agents = [
  {
    id: 1,
    name: "CustomerCare Pro",
    category: "Customer Service", 
    avatar: "🤖",
    description: "24/7 intelligent customer support with natural language processing",
    rating: 4.9,
    reviews: 234,
    price: "$29/month",
    tags: ["Popular", "Best Seller"],
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "ContentGenius",
    category: "Content Creation",
    avatar: "✍️", 
    description: "AI-powered content creation for blogs, social media, and marketing",
    rating: 4.8,
    reviews: 189,
    price: "$39/month",
    tags: ["Trending"],
    color: "bg-purple-500"
  },
  {
    id: 3,
    name: "DataVision Analytics",
    category: "Analytics",
    avatar: "📊",
    description: "Advanced data analysis and business intelligence reporting",
    rating: 4.7,
    reviews: 156,
    price: "$49/month", 
    tags: ["Enterprise"],
    color: "bg-green-500"
  },
  {
    id: 4,
    name: "MarketMaster",
    category: "Marketing",
    avatar: "🎯",
    description: "Automated marketing campaigns and lead generation",
    rating: 4.9,
    reviews: 203,
    price: "$35/month",
    tags: ["Popular"],
    color: "bg-orange-500"
  },
  {
    id: 5,
    name: "FinanceBot Pro",
    category: "Finance", 
    avatar: "💰",
    description: "Intelligent financial analysis and expense tracking",
    rating: 4.6,
    reviews: 98,
    price: "$45/month",
    tags: ["New"],
    color: "bg-emerald-500"
  },
  {
    id: 6,
    name: "SalesAccelerator", 
    category: "Customer Service",
    avatar: "🚀",
    description: "Boost sales performance with AI-driven insights and automation",
    rating: 4.8,
    reviews: 167,
    price: "$42/month",
    tags: ["Hot"],
    color: "bg-red-500"
  }
];

const MarketplaceGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAgents = agents.filter(agent => {
    const matchesCategory = selectedCategory === "All" || agent.category === selectedCategory;
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getTagColor = (tag: string) => {
    switch(tag) {
      case "Popular": return "bg-primary text-primary-foreground";
      case "Best Seller": return "bg-success text-success-foreground";
      case "Trending": return "bg-secondary text-secondary-foreground";
      case "Enterprise": return "bg-accent text-accent-foreground";
      case "New": return "bg-emerald-500 text-white";
      case "Hot": return "bg-red-500 text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20" id="marketplace">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            AI Agent <span className="text-gradient-primary">Marketplace</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover powerful AI agents that transform how you work. Try demos, 
            integrate seamlessly, and start automating today.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search AI agents..." 
              className="pl-10 h-12"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2 items-center overflow-x-auto">
            <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            <div className="flex gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Agent Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAgents.map((agent) => (
            <div key={agent.id} className="agent-card">
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl ${agent.color} flex items-center justify-center text-2xl`}>
                  {agent.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{agent.name}</h3>
                  <p className="text-sm text-muted-foreground">{agent.category}</p>
                </div>
              </div>

              <p className="text-foreground mb-4 leading-relaxed">{agent.description}</p>

              {/* Tags */}
              <div className="flex gap-2 mb-4">
                {agent.tags.map(tag => (
                  <Badge key={tag} className={`text-xs ${getTagColor(tag)}`}>
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Rating and Price */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(agent.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {agent.rating} ({agent.reviews})
                  </span>
                </div>
                <div className="text-lg font-semibold text-primary">{agent.price}</div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => window.location.href = '/waitlist'}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Try Demo
                </Button>
                <Button 
                  className="cta-primary flex-1 text-sm"
                  onClick={() => window.location.href = '/waitlist'}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add to Workflow
                </Button>
              </div>

              {/* Host Action */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full mt-2 text-secondary hover:text-secondary-foreground"
                onClick={() => window.location.href = '/waitlist'}
              >
                <Zap className="w-4 h-4 mr-2" />
                Host This Agent
              </Button>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button 
            className="cta-primary px-8 py-3"
            onClick={() => window.location.href = '/waitlist'}
          >
            Load More Agents
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceGallery;