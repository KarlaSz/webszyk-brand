
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
      size: "large",
      color: "from-blue-50 to-indigo-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Experience",
      shortDesc: "Responsive across all devices",
      longDesc: "Your users access content from everywhere. I ensure your application works flawlessly on mobile, tablet, and desktop with pixel-perfect responsive design.",
      features: ["Mobile-First Design", "Cross-Platform", "Touch Optimized"],
      size: "small",
      color: "from-green-50 to-emerald-100",
      iconBg: "bg-green-100",
      iconColor: "text-green-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      shortDesc: "Beautiful interfaces users love",
      longDesc: "Design isn't just how it looks—it's how it works. I create intuitive user experiences backed by research and testing to ensure your users achieve their goals effortlessly.",
      features: ["User Research", "Wireframing", "Prototyping", "User Testing"],
      size: "medium",
      color: "from-purple-50 to-violet-100",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: Zap,
      title: "Performance",
      shortDesc: "Lightning-fast loading times",
      longDesc: "Speed matters. Slow websites lose customers. I optimize every aspect of your application to ensure blazing-fast performance and excellent search engine rankings.",
      features: ["Core Web Vitals", "SEO Optimization", "Speed Enhancement"],
      size: "small",
      color: "from-yellow-50 to-amber-100",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600"
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      shortDesc: "Protected and always updated",
      longDesc: "Your digital assets need protection. I implement robust security measures and provide ongoing maintenance to keep your application secure and up-to-date.",
      features: ["Security Audits", "Regular Updates", "24/7 Monitoring", "Backup Solutions"],
      size: "medium",
      color: "from-red-50 to-rose-100",
      iconBg: "bg-red-100",
      iconColor: "text-red-600"
    },
    {
      icon: Lightbulb,
      title: "Strategy & Consulting",
      shortDesc: "Smart technology decisions",
      longDesc: "Technology should serve your business goals. I help you make informed decisions about platforms, architecture, and implementation strategies that align with your vision.",
      features: ["Tech Strategy", "Platform Selection", "Process Automation", "Growth Planning"],
      size: "large",
      color: "from-orange-50 to-orange-100",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  const getCardClasses = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-1 md:row-span-2";
      case "small":
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  const getContentClasses = (size: string) => {
    switch (size) {
      case "large":
        return "p-6 md:p-8";
      case "medium":
        return "p-5 md:p-6";
      case "small":
      default:
        return "p-4 md:p-5";
    }
  };

  const getIconSize = (size: string) => {
    switch (size) {
      case "large":
        return "w-16 h-16 md:w-20 md:h-20";
      case "medium":
        return "w-14 h-14 md:w-16 md:h-16";
      case "small":
      default:
        return "w-12 h-12 md:w-14 md:h-14";
    }
  };

  const getIconInnerSize = (size: string) => {
    switch (size) {
      case "large":
        return "h-8 w-8 md:h-10 md:w-10";
      case "medium":
        return "h-7 w-7 md:h-8 md:w-8";
      case "small":
      default:
        return "h-6 w-6 md:h-7 md:w-7";
    }
  };

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-[#04e6a5] rounded-full animate-pulse"></div>
            <span className="text-[#04e6a5] font-semibold text-sm tracking-wide uppercase">Solutions</span>
            <div className="w-2 h-2 bg-[#04e6a5] rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Solution
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional services designed to transform your digital presence
          </p>
        </div>

        {/* Mobile 2-Column Grid */}
        <div className="grid grid-cols-1 gap-4 mb-16 md:hidden">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border-0 shadow-lg bg-gradient-to-br ${service.color}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="p-5">
                <div className={`${service.iconBg} ${getIconSize('small')} rounded-2xl flex items-center justify-center mb-4 shadow-sm`}>
                  <service.icon className={`${getIconInnerSize('small')} ${service.iconColor}`} />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{service.shortDesc}</p>
                
                {expandedCard === index ? (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-700 leading-relaxed">{service.longDesc}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-3 w-3 text-[#04e6a5] flex-shrink-0" />
                          <span className="text-xs text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 p-0 h-auto">
                      <ChevronDown className="h-4 w-4 rotate-180" />
                    </Button>
                  </div>
                ) : (
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 p-0 h-auto">
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Desktop Masonry Grid */}
        <div className="hidden md:grid grid-cols-3 grid-rows-4 gap-6 mb-16 h-[800px]">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer border-0 shadow-lg ${getCardClasses(service.size)} bg-gradient-to-br ${service.color}`}
              onClick={() => handleCardClick(index)}
            >
              <div className={`h-full flex flex-col ${getContentClasses(service.size)}`}>
                <div className={`${service.iconBg} ${getIconSize(service.size)} rounded-3xl flex items-center justify-center mb-6 shadow-sm`}>
                  <service.icon className={`${getIconInnerSize(service.size)} ${service.iconColor}`} />
                </div>
                
                <h3 className={`font-bold text-gray-900 mb-3 ${service.size === 'large' ? 'text-2xl' : service.size === 'medium' ? 'text-xl' : 'text-lg'}`}>
                  {service.title}
                </h3>
                
                <p className={`text-gray-600 mb-4 ${service.size === 'large' ? 'text-base' : 'text-sm'}`}>
                  {service.shortDesc}
                </p>
                
                {expandedCard === index ? (
                  <div className="space-y-4 flex-grow">
                    <p className={`text-gray-700 leading-relaxed ${service.size === 'large' ? 'text-base' : 'text-sm'}`}>
                      {service.longDesc}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-[#04e6a5] flex-shrink-0" />
                          <span className={`text-gray-700 ${service.size === 'large' ? 'text-sm' : 'text-xs'}`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 mt-auto">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <div className="flex-grow flex items-end">
                    <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))}
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
                className="bg-white/80 text-gray-700 hover:bg-white hover:shadow-md transition-all duration-300 cursor-default px-4 py-2 text-sm font-medium shadow-sm rounded-full border border-gray-200/50 backdrop-blur-sm"
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
