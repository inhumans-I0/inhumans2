import { useState } from "react";
import { ChevronDown, ChevronUp, Users, Server } from "lucide-react";

const buyerFAQs = [
  {
    question: "How do I know which AI agent is right for my business?",
    answer: "Every AI agent comes with detailed descriptions, use cases, and interactive demos. You can try before you buy to ensure the agent fits your workflow. Our support team also provides free consultation to help you choose the best solution."
  },
  {
    question: "What's the integration process like?",
    answer: "Most agents offer plug-and-play integration through APIs, webhooks, or pre-built connectors for popular platforms like Slack, Shopify, and HubSpot. Setup typically takes 15-30 minutes with our step-by-step guides."
  },
  {
    question: "Can I cancel or change my subscription anytime?",
    answer: "Yes! All subscriptions are flexible. You can upgrade, downgrade, or cancel anytime. No long-term contracts required. Most agents also offer free trials or money-back guarantees."
  },
  {
    question: "How secure is my business data?",
    answer: "We're SOC 2 certified and GDPR compliant. All data is encrypted in transit and at rest. Agents operate in isolated environments, and we never store sensitive business information unless explicitly required for functionality."
  },
  {
    question: "What kind of support do I get?",
    answer: "You get 24/7 technical support, comprehensive documentation, and access to our community forum. Premium plans include priority support and dedicated account management."
  }
];

const hosterFAQs = [
  {
    question: "How much can I earn hosting AI agents?",
    answer: "Earnings vary based on agent quality, pricing, and market demand. Top creators earn $10K-$50K+ monthly. We provide detailed analytics and optimization tips to maximize your revenue potential."
  },
  {
    question: "What percentage does AgentHub take?",
    answer: "We take a 20% platform fee on all sales, which covers hosting, payment processing, marketing, customer support, and platform maintenance. You keep 80% of every sale."
  },
  {
    question: "Do I need to handle customer support?",
    answer: "No! We handle all customer support, billing issues, and technical questions. You focus on creating great AI agents while we manage the business operations."
  },
  {
    question: "What are the requirements to list my agent?",
    answer: "Your agent must meet our quality standards, include proper documentation, pass security review, and provide demo functionality. We offer free onboarding assistance to help you get approved quickly."
  },
  {
    question: "How do payments work?",
    answer: "Payments are processed automatically and paid out monthly via bank transfer, PayPal, or Stripe. You get detailed earnings reports and tax documents for easy accounting."
  }
];

const FAQ = () => {
  const [activeTab, setActiveTab] = useState<'buyers' | 'hosters'>('buyers');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const currentFAQs = activeTab === 'buyers' ? buyerFAQs : hosterFAQs;

  return (
    <section className="py-20 bg-muted/20" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about using and hosting on AgentHub
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted p-2 rounded-xl inline-flex gap-2">
            <button
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'buyers'
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setActiveTab('buyers')}
            >
              <Users className="w-5 h-5" />
              For Buyers
            </button>
            <button
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'hosters'
                  ? 'bg-secondary text-secondary-foreground shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onClick={() => setActiveTab('hosters')}
            >
              <Server className="w-5 h-5" />
              For Hosters
            </button>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {currentFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden shadow-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                onClick={() => toggleExpanded(index)}
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                {expandedIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              {expandedIndex === index && (
                <div className="px-6 pb-6 animate-fade-in-up">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-16 text-center p-8 bg-gradient-card rounded-2xl border border-border">
          <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help you get started and succeed on AgentHub
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cta-primary">
              Contact Support
            </button>
            <button className="cta-success">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;