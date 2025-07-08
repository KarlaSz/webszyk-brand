
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Code, Smartphone, Globe, Zap, Users, CheckCircle, Lightbulb, Palette, Shield } from "lucide-react";

const ExperienceSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Full-stack solutions from concept to deployment",
      features: ["React & TypeScript", "Backend APIs", "Database Integration"],
      size: "large" // First card is large
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Responsive design and mobile optimization",
      features: ["Mobile-First Design", "Cross-Platform", "Performance Optimized"],
      size: "small"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful interfaces that users love",
      features: ["User Research", "Wireframing", "Prototyping"],
      size: "medium"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Speed optimization and SEO enhancement",
      features: ["Speed Optimization", "SEO Enhancement", "Core Web Vitals"],
      size: "small"
    },
    {
      icon: Shield,
      title: "Security & Support",
      description: "Ongoing maintenance and security updates",
      features: ["Security Updates", "24/7 Monitoring", "Regular Backups"],
      size: "medium"
    },
    {
      icon: Lightbulb,
      title: "Consulting",
      description: "Strategic technology guidance and planning",
      features: ["Tech Strategy", "Platform Selection", "Process Automation"],
      size: "large"
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
        return "p-8 md:p-12";
      case "medium":
        return "p-6 md:p-8";
      case "small":
      default:
        return "p-6";
    }
  };

  const getIconSize = (size: string) => {
    switch (size) {
      case "large":
        return "w-20 h-20 md:w-24 md:h-24";
      case "medium":
        return "w-16 h-16 md:w-20 md:h-20";
      case "small":
      default:
        return "w-14 h-14 md:w-16 md:h-16";
    }
  };

  const getIconInnerSize = (size: string) => {
    switch (size) {
      case "large":
        return "h-10 w-10 md:h-12 md:w-12";
      case "medium":
        return "h-8 w-8 md:h-10 md:w-10";
      case "small":
      default:
        return "h-6 w-6 md:h-8 md:w-8";
    }
  };

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

        {/* Mobile 2-Column Grid */}
        <div className="grid grid-cols-2 gap-4 mb-16 md:hidden">
          {services.map((service, index) => (
            <Card key={index} className="relative p-4 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group hover:border-[#04e6a5]/50 rounded-3xl">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#04e6a5]/10 transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-gray-600 group-hover:text-[#04e6a5] transition-colors duration-300" />
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">{service.title}</h3>
                <p className="text-xs text-gray-600 mb-3 leading-tight">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-1">
                      <CheckCircle className="h-3 w-3 text-gray-600 group-hover:text-[#04e6a5] transition-colors flex-shrink-0" />
                      <span className="text-xs text-gray-700 leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Desktop Masonry Grid */}
        <div className="hidden md:grid grid-cols-3 grid-rows-4 gap-6 mb-16 h-[800px]">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`relative border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group hover:border-[#04e6a5]/50 rounded-3xl ${getCardClasses(service.size)}`}
            >
              <div className={`text-center h-full flex flex-col justify-center ${getContentClasses(service.size)}`}>
                <div className={`${getIconSize(service.size)} bg-gray-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#04e6a5]/10 transition-colors duration-300`}>
                  <service.icon className={`${getIconInnerSize(service.size)} text-gray-600 group-hover:text-[#04e6a5] transition-colors duration-300`} />
                </div>
                <h3 className={`font-bold text-gray-900 mb-4 ${service.size === 'large' ? 'text-2xl' : service.size === 'medium' ? 'text-xl' : 'text-lg'}`}>
                  {service.title}
                </h3>
                <p className={`text-gray-600 mb-6 ${service.size === 'large' ? 'text-lg' : 'text-base'}`}>
                  {service.description}
                </p>
                
                <div className="space-y-3 flex-grow flex flex-col justify-center">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-gray-600 group-hover:text-[#04e6a5] transition-colors" />
                      <span className={`text-gray-700 ${service.size === 'large' ? 'text-base' : 'text-sm'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
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
