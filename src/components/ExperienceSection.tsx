
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Globe, Zap, Users, CheckCircle, Lightbulb, Palette, Shield, ChevronDown, X } from "lucide-react";
import { useState } from "react";

const ExperienceSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      shortDesc: "Modern web solutions that perform",
      longDesc: "From concept to deployment, I create high-performance web applications using cutting-edge technologies. Every project is built with scalability, security, and user experience in mind.",
      features: ["React & TypeScript", "Backend APIs", "Database Integration", "Performance Optimization"],
      color: "from-blue-500/10 to-indigo-500/10",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Smartphone,
      title: "Mobile Experience",
      shortDesc: "Responsive across all devices",
      longDesc: "Your users access content from everywhere. I ensure your application works flawlessly on mobile, tablet, and desktop with pixel-perfect responsive design.",
      features: ["Mobile-First Design", "Cross-Platform", "Touch Optimized"],
      color: "from-green-500/10 to-emerald-500/10",
      iconBg: "bg-green-500/10",
      iconColor: "text-green-400",
      borderColor: "border-green-500/20"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      shortDesc: "Beautiful interfaces users love",
      longDesc: "Design isn't just how it looks—it's how it works. I create intuitive user experiences backed by research and testing to ensure your users achieve their goals effortlessly.",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
      color: "from-purple-500/10 to-violet-500/10",
      iconBg: "bg-purple-500/10",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/20"
    },
    {
      icon: Zap,
      title: "Performance",
      shortDesc: "Lightning-fast loading times",
      longDesc: "Speed matters. Slow websites lose customers. I optimize every aspect of your application to ensure blazing-fast performance and excellent search engine rankings.",
      features: ["Core Web Vitals", "SEO Optimization", "Speed Enhancement"],
      color: "from-yellow-500/10 to-amber-500/10",
      iconBg: "bg-yellow-500/10",
      iconColor: "text-yellow-400",
      borderColor: "border-yellow-500/20"
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      shortDesc: "Protected and always updated",
      longDesc: "Your digital assets need protection. I implement robust security measures and provide ongoing maintenance to keep your application secure and up-to-date.",
      features: ["Security Audits", "Regular Updates", "24/7 Monitoring", "Backup Solutions"],
      color: "from-red-500/10 to-rose-500/10",
      iconBg: "bg-red-500/10",
      iconColor: "text-red-400",
      borderColor: "border-red-500/20"
    },
    {
      icon: Lightbulb,
      title: "Strategy & Consulting",
      shortDesc: "Smart technology decisions",
      longDesc: "Technology should serve your business goals. I help you make informed decisions about platforms, architecture, and implementation strategies that align with your vision.",
      features: ["Tech Strategy", "Platform Selection", "Process Automation", "Growth Planning"],
      color: "from-orange-500/10 to-orange-500/10",
      iconBg: "bg-orange-500/10",
      iconColor: "text-orange-400",
      borderColor: "border-orange-500/20"
    }
  ];

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background matching hero section */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#04e6a5]/15 via-emerald-400/10 to-[#04e6a5]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/8 via-[#04e6a5]/12 to-slate-600/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-[#04e6a5] rounded-full animate-pulse"></div>
            <span className="text-[#04e6a5] font-semibold text-sm tracking-wide uppercase">Solutions</span>
            <div className="w-2 h-2 bg-[#04e6a5] rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Choose Your Perfect Solution
          </h2>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Professional services designed to transform your digital presence
          </p>
        </div>

        {/* Services Grid - Modular Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer border-0 backdrop-blur-md bg-white/5 ${service.borderColor} border shadow-lg hover:bg-white/10`}
              onClick={() => handleCardClick(index)}
            >
              <div className="p-6 h-full flex flex-col">
                <div className={`${service.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm backdrop-blur-sm border border-white/10`}>
                  <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-white/70 mb-4 flex-grow">
                  {service.shortDesc}
                </p>
                
                {expandedCard === index ? (
                  <div className="space-y-4">
                    <p className="text-white/80 text-sm leading-relaxed">
                      {service.longDesc}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-[#04e6a5] flex-shrink-0" />
                          <span className="text-white/70 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="text-[#04e6a5] hover:text-[#04e6a5]/80 p-0 h-auto">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <Button variant="ghost" size="sm" className="text-[#04e6a5] hover:text-[#04e6a5]/80 p-0 h-auto mt-auto">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Python", "PostgreSQL", "AWS", "Figma", "Tailwind CSS", 
              "Bootstrap", "HTML5", "CSS3", "WordPress", "Webflow", "JavaScript",
              "Swagger", "Postman", "GitHub", "SEO", "UX"
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-white/10 text-white/80 hover:bg-[#04e6a5]/20 hover:text-[#04e6a5] transition-all duration-300 cursor-default px-4 py-2 text-sm font-medium shadow-sm rounded-full border border-white/20 backdrop-blur-sm"
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
