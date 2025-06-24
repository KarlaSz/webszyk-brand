
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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-[#4CAF50] rounded-full animate-pulse"></div>
            <span className="text-[#4CAF50] font-semibold text-lg">How I Help</span>
            <div className="w-3 h-3 bg-[#4CAF50] rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Technology Solutions
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From initial concept to ongoing support, I provide end-to-end solutions 
            that help your business thrive in the digital world.
          </p>
        </div>

        {/* Services Grid - Clean Modern Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group border border-gray-200 hover:border-[#4CAF50]/30 transition-all duration-300 bg-white hover:shadow-lg hover:-translate-y-1 overflow-hidden">
              <CardContent className="p-8">
                {/* Icon and Title */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#4CAF50]/20 transition-colors">
                    <service.icon className="h-8 w-8 text-[#4CAF50]" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
                
                {/* Features list */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#4CAF50] rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section - Clean Design */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-16 relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#4CAF50]/5 rounded-full blur-3xl"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">My Development Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven approach that ensures your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
              { step: "02", title: "Design", desc: "Creating wireframes and visual designs" },
              { step: "03", title: "Development", desc: "Building with modern, scalable technologies" },
              { step: "04", title: "Launch", desc: "Testing, deployment, and ongoing support" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-[#4CAF50] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg">
                  {phase.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2 text-lg">{phase.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{phase.desc}</p>
                {index < 3 && (
                  <div className="hidden md:flex justify-center mt-6">
                    <ArrowRight className="h-5 w-5 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technologies - Clean Badge Design */}
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
                className="bg-white text-gray-700 hover:bg-[#4CAF50] hover:text-white transition-all duration-300 cursor-default px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md border border-gray-200 rounded-full"
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
