
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Globe, Database, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Clock, Headphones } from "lucide-react";
import ContactModal from "@/components/ContactModal";

const MyOfferSection = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Complete web applications with modern frameworks like React, Node.js, and databases.",
      features: ["React & Next.js", "Node.js & Express", "Database Design", "API Development"],
      price: "From $2,500",
      popular: true
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that work seamlessly across devices.",
      features: ["React Native", "iOS & Android", "App Store Deployment", "Push Notifications"],
      price: "From $3,500",
      popular: false
    },
    {
      icon: Globe,
      title: "Web Design & UX",
      description: "Beautiful, user-friendly designs that convert visitors into customers.",
      features: ["UI/UX Design", "Responsive Layout", "Brand Integration", "Performance Optimization"],
      price: "From $1,500",
      popular: false
    },
    {
      icon: Headphones,
      title: "IT Support & Consulting",
      description: "Ongoing technical support and strategic consulting for your technology needs.",
      features: ["24/7 Support", "System Maintenance", "Tech Consulting", "Performance Monitoring"],
      price: "From $500/month",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background with gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#04e6a5]/15 via-emerald-400/10 to-[#04e6a5]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/8 via-[#04e6a5]/12 to-slate-600/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Badge variant="secondary" className="bg-[#04e6a5]/20 text-[#04e6a5] border-[#04e6a5]/30 backdrop-blur-sm px-4 py-2">
              Services
            </Badge>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            What I Can Do For You
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, I provide comprehensive technology solutions 
            that help your business grow and succeed in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className={`relative bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300 group ${service.popular ? 'ring-2 ring-[#04e6a5]/50' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#04e6a5] text-white px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-[#04e6a5]/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-[#04e6a5]" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                      <div className="text-[#04e6a5] font-bold text-lg">{service.price}</div>
                    </div>
                  </div>
                  <CardDescription className="text-white/80 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-[#04e6a5] flex-shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <ContactModal
                    trigger={
                      <Button className="w-full bg-white/20 border border-white/30 hover:bg-[#04e6a5] hover:border-[#04e6a5] text-white font-semibold transition-all duration-300 group">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    }
                    title={`Get Started - ${service.title}`}
                  />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">Need IT Support?</h3>
          <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
            Get reliable technical support and consulting services to keep your business running smoothly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ContactModal
              trigger={
                <Button size="lg" className="px-12 py-4 text-lg group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get IT Support
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
              title="Get IT Support"
            />
            <div className="flex items-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-[#04e6a5]" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-[#04e6a5]" />
                <span>Secure & Reliable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOfferSection;
