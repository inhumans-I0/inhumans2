import { Puzzle, Twitter, Linkedin, Github, Mail, Phone, MapPin } from "lucide-react";
import celestialLogo from "@/assets/celestial-frequencies-logo.png";

const Footer = () => {
  return (
    <>
      {/* Backed By Section - Above Footer */}
      <div className="bg-background py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <p className="text-sm sm:text-base text-muted-foreground font-medium">Backed by</p>
            <img 
              src={celestialLogo} 
              alt="Celestial Frequencies" 
              className="h-24 sm:h-32 lg:h-48 object-contain hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
            {/* Brand & Description */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-primary rounded-lg">
                  <Puzzle className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Inhumans</span>
              </div>
              <p className="text-background/80 leading-relaxed mb-6">
                The leading marketplace connecting businesses with powerful AI agents. 
                Transform your operations or monetize your AI expertise.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Marketplace Links */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Marketplace</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Browse AI Agents
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Trending Agents
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Free Trials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Enterprise Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* For Creators */}
            <div>
              <h4 className="font-semibold text-lg mb-6">For Creators</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Host Your Agent
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Creator Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Revenue Calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            {/* Support & Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Support</h4>
              <ul className="space-y-3 mb-6">
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Community Forum
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Integration Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-background/80 hover:text-background transition-colors">
                    Status Page
                  </a>
                </li>
              </ul>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-background/80">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">support@inhumans.com</span>
                </div>
                <div className="flex items-center gap-3 text-background/80">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-background/80">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-background/60 text-sm mb-4 md:mb-0">
                © 2024 Inhumans. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;