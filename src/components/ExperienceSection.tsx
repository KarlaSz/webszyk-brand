
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Zap, Users, CheckCircle, ArrowRight, Lightbulb, Palette, Shield } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end web applications with modern technologies",
    features: ["React & TypeScript", "Node.js Backend", "Database Design", "API Development"]
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive designs that work perfectly on all devices",
    features: ["Responsive Layout", "Touch Optimization", "Performance Focus", "Cross-Browser"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast loading times and smooth interactions",
    features: ["Speed Optimization", "SEO Enhancement", "Core Web Vitals", "Analytics Setup"]
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Ongoing support and security updates",
    features: ["Security Audits", "Regular Updates", "Backup Systems", "24/7 Monitoring"]
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting",
    description: "Strategic guidance for your digital transformation",
    features: ["Tech Strategy", "Platform Selection", "Process Automation", "Team Training"]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
            <span className="text-[#4CAF50] font-semibold text-sm uppercase tracking-wide">Services</span>
            <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Technology Solutions
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial concept to ongoing support, I provide end-to-end solutions 
            that help your business thrive in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group border border-gray-100 hover:border-gray-200 transition-all duration-300 bg-white hover:shadow-sm">
              <CardContent className="p-6">
                {/* Icon and Title */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gray-100 transition-colors">
                    <service.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
                
                {/* Features list */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-[#4CAF50] rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", 
              "AWS", "Docker", "Figma", "Tailwind CSS", "Next.js", "Express.js"
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors cursor-default px-3 py-1 text-xs font-medium border border-gray-200 rounded-full"
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
