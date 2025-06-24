
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Zap, Users, CheckCircle, ArrowRight, Lightbulb, Palette, Shield, Star, Clock, DollarSign } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-[#4CAF50] rounded-full animate-pulse"></div>
            <span className="text-[#4CAF50] font-semibold text-lg">Comprehensive Technology Solutions</span>
            <div className="w-3 h-3 bg-[#4CAF50] rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Solution
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional web development services designed to transform your business goals into digital reality.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Web Development */}
          <Card className="relative p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6">Full-stack solutions from concept to deployment</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">React & TypeScript</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">Backend APIs</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">Database Integration</span>
                </div>
              </div>
              
              <Button variant="outline" size="lg" className="w-full border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-all group">
                Learn More
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Mobile Solutions */}
          <Card className="relative p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Solutions</h3>
              <p className="text-gray-600 mb-6">Responsive design and mobile optimization</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">Mobile-First Design</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">Cross-Platform</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">Performance Optimized</span>
                </div>
              </div>
              
              <Button variant="outline" size="lg" className="w-full border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-all group">
                Learn More
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* UI/UX Design */}
          <Card className="relative p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Palette className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">UI/UX Design</h3>
              <p className="text-gray-600 mb-6">Beautiful interfaces that users love</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">User Research</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">Wireframing</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">Prototyping</span>
                </div>
              </div>
              
              <Button variant="outline" size="lg" className="w-full border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-all group">
                Learn More
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Performance Optimization */}
          <Card className="relative p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance</h3>
              <p className="text-gray-600 mb-6">Speed optimization and SEO enhancement</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">Speed Optimization</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">SEO Enhancement</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">Core Web Vitals</span>
                </div>
              </div>
              
              <Button variant="outline" size="lg" className="w-full border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-all group">
                Learn More
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Security & Support */}
          <Card className="relative p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security & Support</h3>
              <p className="text-gray-600 mb-6">Ongoing maintenance and security updates</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">Security Updates</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">24/7 Monitoring</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">Regular Backups</span>
                </div>
              </div>
              
              <Button variant="outline" size="lg" className="w-full border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-all group">
                Learn More
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>

          {/* Consulting */}
          <Card className="relative p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Consulting</h3>
              <p className="text-gray-600 mb-6">Strategic technology guidance and planning</p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">Tech Strategy</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">Platform Selection</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#4CAF50]" />
                  <span className="text-sm text-gray-700">Process Automation</span>
                </div>
              </div>
              
              <Button variant="outline" size="lg" className="w-full border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-all group">
                Learn More
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Technologies - Compact Badge Design */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", 
              "AWS", "Docker", "Figma", "Tailwind CSS", "Next.js", "Express.js"
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-gray-100 text-gray-700 hover:bg-[#4CAF50]/10 hover:text-[#4CAF50] hover:border-[#4CAF50]/40 transition-all duration-300 cursor-default px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md rounded-full border border-gray-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
