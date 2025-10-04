import { useState } from "react";
import { Building2, User, Users2, Server, CheckCircle } from "lucide-react";

type UserRole = "smb" | "freelancer" | "msme" | "hoster";

const roles = [
  {
    id: "smb" as UserRole,
    title: "Small Business",
    icon: Building2,
    description: "Scale operations with AI automation",
    benefits: [
      "Automate customer service and support",
      "Streamline inventory and sales processes", 
      "Reduce operational costs by up to 40%",
      "24/7 AI-powered business operations"
    ]
  },
  {
    id: "freelancer" as UserRole,
    title: "Freelancer",
    icon: User,
    description: "Enhance productivity and win more clients",
    benefits: [
      "Automate repetitive project tasks",
      "Generate high-quality content faster",
      "Manage multiple clients efficiently",
      "Increase project delivery speed by 3x"
    ]
  },
  {
    id: "msme" as UserRole,
    title: "MSME", 
    icon: Users2,
    description: "Enterprise-grade AI for growing businesses",
    benefits: [
      "Deploy AI across multiple departments",
      "Advanced analytics and reporting",
      "Custom AI agent configurations",
      "Priority support and consultation"
    ]
  },
  {
    id: "hoster" as UserRole,
    title: "AI Hoster",
    icon: Server,
    description: "Monetize your AI expertise",
    benefits: [
      "List and sell your AI agents",
      "Earn recurring revenue streams",
      "Access to 10K+ potential customers", 
      "Built-in payment and analytics tools"
    ]
  }
];

const RoleSelector = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>("smb");

  const selectedRoleData = roles.find(role => role.id === selectedRole);

  return (
    <section className="py-20 bg-muted/30" id="roles">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Choose Your <span className="text-gradient-primary">Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you're looking to adopt AI or monetize your AI expertise, 
            we have the perfect solution for your needs.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {roles.map((role) => {
            const Icon = role.icon;
            const isActive = selectedRole === role.id;
            
            return (
              <div
                key={role.id}
                className={`role-card ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedRole(role.id)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-xl mb-4 ${
                    isActive 
                      ? 'bg-primary text-primary-foreground shadow-primary' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{role.title}</h3>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Role Benefits */}
        {selectedRoleData && (
          <div className="bg-card rounded-2xl p-8 shadow-card animate-fade-in-up">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Perfect for <span className="text-gradient-primary">{selectedRoleData.title}</span>
                </h3>
                <p className="text-muted-foreground mb-6">{selectedRoleData.description}</p>
                
                <div className="space-y-3">
                  {selectedRoleData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                {selectedRole === "hoster" ? (
                  <>
                    <button 
                      className="cta-accent w-full text-lg py-4"
                      onClick={() => window.location.href = '/waitlist'}
                    >
                      Start Hosting Agents
                    </button>
                    <button 
                      className="cta-success w-full"
                      onClick={() => window.location.href = '/waitlist'}
                    >
                      Learn About Revenue
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      className="cta-primary w-full text-lg py-4"
                      onClick={() => window.location.href = '/waitlist'}
                    >
                      Browse AI Agents
                    </button>
                    <button 
                      className="cta-success w-full"
                      onClick={() => window.location.href = '/waitlist'}
                    >
                      Start Free Trial
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default RoleSelector;