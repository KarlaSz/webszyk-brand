
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Zap, Users, CheckCircle, ArrowRight, Lightbulb, Palette, Shield } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end web applications with modern technologies",
    features: ["React & TypeScript", "Node.js Backend", "Database Design", "API Development"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Responsive designs that work perfectly on all devices",
    features: ["Responsive Layout", "Touch Optimization", "Performance Focus", "Cross-Browser"],
    color: "from-[#4CAF50] to-emerald-600"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast loading times and smooth interactions",
    features: ["Speed Optimization", "SEO Enhancement", "Core Web Vitals", "Analytics Setup"],
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Ongoing support and security updates",
    features: ["Security Audits", "Regular Updates", "Backup Systems", "24/7 Monitoring"],
    color: "from-red-500 to-red-600"
  },
  {
    icon: Lightbulb,
    title: "Technology Consulting",
    description: "Strategic guidance for your digital transformation",
    features: ["Tech Strategy", "Platform Selection", "Process Automation", "Team Training"],
    color: "from-yellow-500 to-yellow-600"
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden hover:-translate-y-1">
              <CardContent className="p-0">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90 text-sm">{service.description}</p>
                </div>
                
                {/* Features list */}
                <div className="p-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-[#4CAF50] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">My Development Process</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A proven approach that ensures your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
              { step: "02", title: "Design", desc: "Creating wireframes and visual designs" },
              { step: "03", title: "Development", desc: "Building with modern, scalable technologies" },
              { step: "04", title: "Launch", desc: "Testing, deployment, and ongoing support" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#4CAF50] to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {phase.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{phase.title}</h4>
                <p className="text-sm text-gray-600">{phase.desc}</p>
                {index < 3 && (
                  <ArrowRight className="h-5 w-5 text-gray-400 mx-auto mt-4 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
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
                className="bg-white text-gray-700 hover:bg-[#4CAF50] hover:text-white transition-all duration-300 cursor-default px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md border border-gray-200"
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
