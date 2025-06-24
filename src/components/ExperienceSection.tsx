
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Zap, Users, CheckCircle, ArrowRight, Lightbulb, Palette, Shield, Star, Clock, DollarSign } from "lucide-react";

const productOffers = [
  {
    icon: Code,
    title: "Custom Web Application",
    subtitle: "Full-Stack Development Solution",
    description: "Transform your business with a custom web application built from scratch",
    price: "Starting at $2,999",
    duration: "2-4 weeks delivery",
    features: ["React & TypeScript", "Backend API", "Database Setup", "Admin Dashboard", "Mobile Responsive"],
    popular: true,
    gradient: "from-blue-600/20 to-purple-600/20",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400"
  },
  {
    icon: Smartphone,
    title: "Landing Page Conversion",
    subtitle: "High-Converting Sales Pages",
    description: "Boost your conversions with professionally designed landing pages",
    price: "Starting at $899",
    duration: "1-2 weeks delivery",
    features: ["Conversion Optimization", "A/B Testing Ready", "Analytics Setup", "Lead Generation", "Performance Focused"],
    popular: false,
    gradient: "from-green-600/20 to-emerald-600/20",
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400"
  },
  {
    icon: Palette,
    title: "UI/UX Design System",
    subtitle: "Complete Design Solutions",
    description: "Create stunning user experiences with comprehensive design systems",
    price: "Starting at $1,499",
    duration: "1-3 weeks delivery",
    features: ["User Research", "Wireframing", "Prototyping", "Design System", "Brand Guidelines"],
    popular: false,
    gradient: "from-pink-600/20 to-rose-600/20",
    iconBg: "bg-pink-500/20",
    iconColor: "text-pink-400"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    subtitle: "Speed & SEO Enhancement",
    description: "Accelerate your website performance and search engine rankings",
    price: "Starting at $699",
    duration: "1 week delivery",
    features: ["Speed Optimization", "SEO Enhancement", "Core Web Vitals", "Performance Monitoring", "Technical Audit"],
    popular: false,
    gradient: "from-yellow-600/20 to-orange-600/20",
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-400"
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    subtitle: "Ongoing Technical Care",
    description: "Keep your website secure, updated, and running smoothly",
    price: "Starting at $299/month",
    duration: "Ongoing support",
    features: ["Security Updates", "Regular Backups", "24/7 Monitoring", "Bug Fixes", "Technical Support"],
    popular: false,
    gradient: "from-indigo-600/20 to-violet-600/20",
    iconBg: "bg-indigo-500/20",
    iconColor: "text-indigo-400"
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting",
    subtitle: "Strategic Technology Guidance",
    description: "Get expert advice on technology strategy and digital transformation",
    price: "Starting at $149/hour",
    duration: "Flexible scheduling",
    features: ["Tech Strategy", "Platform Selection", "Process Automation", "Team Training", "Architecture Review"],
    popular: false,
    gradient: "from-cyan-600/20 to-teal-600/20",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400"
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-[#4CAF50] rounded-full animate-pulse"></div>
            <span className="text-[#4CAF50] font-semibold text-lg">Product Offerings</span>
            <div className="w-3 h-3 bg-[#4CAF50] rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect Solution
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional web development services designed to transform your business goals into digital reality.
          </p>
        </div>

        {/* Vertically Stacked Product Offer Blocks */}
        <div className="space-y-8 mb-20">
          {productOffers.map((offer, index) => (
            <Card key={index} className={`relative overflow-hidden border border-gray-200/60 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-gradient-to-br ${offer.gradient} backdrop-blur-sm`}>
              {/* Popular Badge */}
              {offer.popular && (
                <div className="absolute top-6 right-6 z-10">
                  <Badge className="bg-[#4CAF50] text-white font-semibold px-3 py-1 flex items-center space-x-1">
                    <Star className="h-3 w-3" />
                    <span>Most Popular</span>
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left: Icon and Title */}
                  <div className="lg:col-span-5">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 ${offer.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/30 backdrop-blur-sm shadow-lg`}>
                        <offer.icon className={`h-8 w-8 ${offer.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{offer.title}</h3>
                        <p className="text-sm font-medium text-gray-600 mb-3">{offer.subtitle}</p>
                        <p className="text-gray-700 leading-relaxed">{offer.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center: Features */}
                  <div className="lg:col-span-4">
                    <div className="space-y-3">
                      {offer.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-[#4CAF50] flex-shrink-0" />
                          <span className="text-sm text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right: Pricing and CTA */}
                  <div className="lg:col-span-3 text-center lg:text-right">
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{offer.price}</div>
                      <div className="flex items-center justify-center lg:justify-end space-x-2 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{offer.duration}</span>
                      </div>
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="group w-full lg:w-auto px-8 py-3"
                      variant={offer.popular ? "default" : "outline"}
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
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
