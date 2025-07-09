
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Zap, Users, CheckCircle, Lightbulb, Palette, Shield, Rocket, Target, Sparkles } from "lucide-react";
import { useState } from "react";

const ExperienceSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      shortDesc: "End-to-end web solutions with modern tech stack",
      longDesc: "Complete web applications built with React, Node.js, and cloud infrastructure. From database design to deployment, I handle every aspect of your project.",
      features: ["React & TypeScript", "Node.js APIs", "Database Design", "Cloud Deployment"],
      size: "large",
      color: "from-blue-50/80 to-sky-100/60",
      borderColor: "border-blue-200/40",
      iconBg: "bg-blue-100/80",
      iconColor: "text-blue-600"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      shortDesc: "Responsive design for every device",
      longDesc: "Mobile-optimized experiences that work flawlessly across all devices and screen sizes.",
      features: ["Responsive Design", "Touch Optimized", "Cross-Platform"],
      size: "medium",
      color: "from-emerald-50/80 to-green-100/60",
      borderColor: "border-emerald-200/40",
      iconBg: "bg-emerald-100/80",
      iconColor: "text-emerald-600"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      shortDesc: "Beautiful interfaces that convert",
      longDesc: "User-centered design that combines aesthetics with functionality to create engaging experiences.",
      features: ["User Research", "Prototyping", "Design Systems"],
      size: "small",
      color: "from-purple-50/80 to-violet-100/60",
      borderColor: "border-purple-200/40",
      iconBg: "bg-purple-100/80",
      iconColor: "text-purple-600"
    },
    {
      icon: Zap,
      title: "Performance",
      shortDesc: "Lightning-fast loading",
      longDesc: "Optimized applications that load instantly and rank high in search engines.",
      features: ["Speed Optimization", "SEO Ready", "Core Web Vitals"],
      size: "small",
      color: "from-yellow-50/80 to-amber-100/60",
      borderColor: "border-yellow-200/40",
      iconBg: "bg-yellow-100/80",
      iconColor: "text-amber-600"
    },
    {
      icon: Shield,
      title: "Security & Maintenance",
      shortDesc: "Protected and always updated",
      longDesc: "Robust security measures and ongoing maintenance to keep your applications safe and current.",
      features: ["Security Audits", "Regular Updates", "24/7 Monitoring"],
      size: "medium",
      color: "from-rose-50/80 to-pink-100/60",
      borderColor: "border-rose-200/40",
      iconBg: "bg-rose-100/80",
      iconColor: "text-rose-600"
    },
    {
      icon: Rocket,
      title: "Strategy & Growth",
      shortDesc: "Scale your digital presence",
      longDesc: "Strategic technology decisions that align with your business goals and drive sustainable growth.",
      features: ["Tech Strategy", "Scalable Architecture", "Growth Analytics"],
      size: "large",
      color: "from-indigo-50/80 to-blue-100/60",
      borderColor: "border-indigo-200/40",
      iconBg: "bg-indigo-100/80",
      iconColor: "text-indigo-600"
    }
  ];

  const getGridClasses = (size: string, index: number) => {
    const patterns = {
      large: "col-span-2 row-span-2",
      medium: "col-span-1 row-span-2",
      small: "col-span-1 row-span-1"
    };
    return patterns[size as keyof typeof patterns] || patterns.small;
  };

  const handleCardClick = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/30 to-blue-50/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="w-5 h-5 text-[#04e6a5] animate-pulse" />
            <span className="text-[#04e6a5] font-semibold text-sm tracking-wide uppercase">Solutions</span>
            <Sparkles className="w-5 h-5 text-[#04e6a5] animate-pulse" />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#04e6a5] to-blue-600">
              Solution
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional services designed to transform your digital presence with modern technology and user-centered design
          </p>
        </div>

        {/* Mobile Stack Layout */}
        <div className="grid grid-cols-1 gap-6 mb-16 md:hidden">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 cursor-pointer border ${service.borderColor} shadow-lg bg-gradient-to-br ${service.color} backdrop-blur-sm`}
              onClick={() => handleCardClick(index)}
            >
              <CardContent className="p-6">
                <div className={`${service.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.shortDesc}</p>
                
                {expandedCard === index && (
                  <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-gray-700 leading-relaxed">{service.longDesc}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-[#04e6a5] flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between mt-4">
                  <Badge variant="secondary" className={`${service.iconBg} ${service.iconColor} border-0`}>
                    Learn More
                  </Badge>
                  <div className={`w-2 h-2 rounded-full ${service.iconBg} ${expandedCard === index ? 'animate-pulse' : ''}`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop Masonry Grid */}
        <div className="hidden md:grid grid-cols-3 auto-rows-[200px] gap-6 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 cursor-pointer border ${service.borderColor} shadow-lg ${getGridClasses(service.size, index)} bg-gradient-to-br ${service.color} backdrop-blur-sm`}
              onClick={() => handleCardClick(index)}
            >
              <CardContent className={`h-full flex flex-col ${service.size === 'large' ? 'p-8' : service.size === 'medium' ? 'p-6' : 'p-5'}`}>
                <div className={`${service.iconBg} ${service.size === 'large' ? 'w-16 h-16' : service.size === 'medium' ? 'w-14 h-14' : 'w-12 h-12'} rounded-3xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`${service.size === 'large' ? 'w-8 h-8' : service.size === 'medium' ? 'w-7 h-7' : 'w-6 h-6'} ${service.iconColor}`} />
                </div>
                
                <h3 className={`font-bold text-gray-900 mb-3 ${service.size === 'large' ? 'text-2xl' : service.size === 'medium' ? 'text-xl' : 'text-lg'}`}>
                  {service.title}
                </h3>
                
                <p className={`text-gray-600 mb-4 leading-relaxed flex-grow ${service.size === 'large' ? 'text-base' : 'text-sm'}`}>
                  {expandedCard === index ? service.longDesc : service.shortDesc}
                </p>
                
                {expandedCard === index && service.size !== 'small' && (
                  <div className="space-y-3 animate-in slide-in-from-top-2 duration-300">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-[#04e6a5] flex-shrink-0" />
                        <span className={`text-gray-700 ${service.size === 'large' ? 'text-sm' : 'text-xs'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center justify-between mt-auto pt-4">
                  <Badge variant="secondary" className={`${service.iconBg} ${service.iconColor} border-0 hover:shadow-md transition-shadow`}>
                    {expandedCard === index ? 'Less' : 'More'}
                  </Badge>
                  <div className={`w-2 h-2 rounded-full ${service.iconBg} ${expandedCard === index ? 'animate-pulse' : ''}`}></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Technology Stack</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS", 
              "Tailwind CSS", "Figma", "Next.js", "GraphQL", "Docker", "Git"
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-white/90 text-gray-700 hover:bg-white hover:shadow-lg transition-all duration-300 cursor-default px-4 py-2 text-sm font-medium shadow-md rounded-full border border-gray-200/50 backdrop-blur-sm hover:scale-105"
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
