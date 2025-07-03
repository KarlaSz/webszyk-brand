
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Zap, Users, CheckCircle, Lightbulb, Palette, Shield } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-[#04e6a5] rounded-full animate-pulse"></div>
            <span className="text-[#04e6a5] font-semibold text-lg">Comprehensive Technology Solutions</span>
            <div className="w-3 h-3 bg-[#04e6a5] rounded-full animate-pulse"></div>
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
          <Card className="group relative overflow-hidden backdrop-blur-md border shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-50/80 border-gray-200/50 hover:border-[#04e6a5]/30 hover:bg-green-50/80 hover:backdrop-blur-md">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 via-gray-50/30 to-white/20"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/20 via-transparent to-gray-300/15"></div>
            
            <div className="relative z-10 text-center p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#04e6a5]/10 transition-colors duration-300">
                <Code className="h-8 w-8 text-gray-600 group-hover:text-[#04e6a5] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6">Full-stack solutions from concept to deployment</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-sm text-gray-700">React & TypeScript</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-sm text-gray-700">Backend APIs</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-small text-gray-700">Database Integration</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Mobile Solutions */}
          <Card className="group relative overflow-hidden backdrop-blur-md border shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-50/80 border-gray-200/50 hover:border-[#04e6a5]/30 hover:bg-green-50/80 hover:backdrop-blur-md">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 via-gray-50/30 to-white/20"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/20 via-transparent to-gray-300/15"></div>
            
            <div className="relative z-10 text-center p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#04e6a5]/10 transition-colors duration-300">
                <Smartphone className="h-8 w-8 text-gray-600 group-hover:text-[#04e6a5] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Solutions</h3>
              <p className="text-gray-600 mb-6">Responsive design and mobile optimization</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-sm text-gray-700">Mobile-First Design</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-sm text-gray-700">Cross-Platform</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-sm text-gray-700">Performance Optimized</span>
                </div>
              </div>
            </div>
          </Card>

          {/* UI/UX Design */}
          <Card className="group relative overflow-hidden backdrop-blur-md border shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-50/80 border-gray-200/50 hover:border-[#04e6a5]/30 hover:bg-green-50/80 hover:backdrop-blur-md">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 via-gray-50/30 to-white/20"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/20 via-transparent to-gray-300/15"></div>
            
            <div className="relative z-10 text-center p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#04e6a5]/10 transition-colors duration-300">
                <Palette className="h-8 w-8 text-gray-600 group-hover:text-[#04e6a5] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">UI/UX Design</h3>
              <p className="text-gray-600 mb-6">Beautiful interfaces that users love</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-sm text-gray-700">User Research</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-sm text-gray-700">Wireframing</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-sm text-gray-700">Prototyping</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Performance Optimization */}
          <Card className="group relative overflow-hidden backdrop-blur-md border shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-50/80 border-gray-200/50 hover:border-[#04e6a5]/30 hover:bg-green-50/80 hover:backdrop-blur-md">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 via-gray-50/30 to-white/20"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/20 via-transparent to-gray-300/15"></div>
            
            <div className="relative z-10 text-center p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#04e6a5]/10 transition-colors duration-300">
                <Zap className="h-8 w-8 text-gray-600 group-hover:text-[#04e6a5] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance</h3>
              <p className="text-gray-600 mb-6">Speed optimization and SEO enhancement</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-sm text-gray-700">Speed Optimization</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-sm text-gray-700">SEO Enhancement</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-sm text-gray-700">Core Web Vitals</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Security & Support */}
          <Card className="group relative overflow-hidden backdrop-blur-md border shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-50/80 border-gray-200/50 hover:border-[#04e6a5]/30 hover:bg-green-50/80 hover:backdrop-blur-md">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 via-gray-50/30 to-white/20"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/20 via-transparent to-gray-300/15"></div>
            
            <div className="relative z-10 text-center p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#04e6a5]/10 transition-colors duration-300">
                <Shield className="h-8 w-8 text-gray-600 group-hover:text-[#04e6a5] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security & Support</h3>
              <p className="text-gray-600 mb-6">Ongoing maintenance and security updates</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-sm text-gray-700">Security Updates</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-sm text-gray-700">24/7 Monitoring</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-sm text-gray-700">Regular Backups</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Consulting */}
          <Card className="group relative overflow-hidden backdrop-blur-md border shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gray-50/80 border-gray-200/50 hover:border-[#04e6a5]/30 hover:bg-green-50/80 hover:backdrop-blur-md">
            {/* Background gradients */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 via-gray-50/30 to-white/20"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/20 via-transparent to-gray-300/15"></div>
            
            <div className="relative z-10 text-center p-8">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#04e6a5]/10 transition-colors duration-300">
                <Lightbulb className="h-8 w-8 text-gray-600 group-hover:text-[#04e6a5] transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Consulting</h3>
              <p className="text-gray-600 mb-6">Strategic technology guidance and planning</p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-sm text-gray-700">Tech Strategy</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-sm text-gray-700">Platform Selection</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                  <span className="text-sm text-gray-700">Process Automation</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Python", "PostgreSQL", "AWS", "Figma", "Tailwind CSS", 
              "Bootstrap", "HTML5", "CSS3", "WordPress", "Webflow", "JavaScript",
              "Swagger", "Postman", "GitHub", "SEO", "UX"
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-gray-100 text-gray-700 hover:bg-[#04e6a5]/10 hover:text-[#04e6a5] hover:border-[#04e6a5]/40 transition-all duration-300 cursor-default px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md rounded-full border border-gray-200"
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
