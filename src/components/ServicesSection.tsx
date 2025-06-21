
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Globe, Zap, Users, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, TypeScript, and Node.js.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure & Scalable"],
    color: "bg-gray-100 text-gray-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that provide seamless user experiences across all devices.",
    features: ["iOS & Android", "React Native", "Progressive Web Apps", "App Store Deployment"],
    color: "bg-gray-100 text-gray-600"
  },
  {
    icon: Code,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that convert visitors into customers and provide exceptional user experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "bg-gray-100 text-gray-600"
  },
  {
    icon: Zap,
    title: "Technology Consulting",
    description: "Strategic technology guidance to help you make informed decisions and optimize your digital infrastructure.",
    features: ["Technology Stack", "Architecture Planning", "Performance Optimization", "Digital Strategy"],
    color: "bg-gray-100 text-gray-600"
  },
  {
    icon: Users,
    title: "Team Augmentation",
    description: "Scale your development team with experienced full-stack developers and technical expertise.",
    features: ["Remote Collaboration", "Agile Development", "Code Reviews", "Knowledge Transfer"],
    color: "bg-gray-100 text-gray-600"
  },
  {
    icon: CheckCircle,
    title: "Ongoing Support",
    description: "Continuous maintenance, updates, and technical support to keep your applications running smoothly.",
    features: ["24/7 Monitoring", "Bug Fixes", "Feature Updates", "Security Patches"],
    color: "bg-gray-100 text-gray-600"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* React Component Style Title Card */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-0">
              {/* Code Header Bar */}
              <div className="flex items-center justify-between px-6 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm font-mono">ServicesSection.tsx</div>
                <div className="flex items-center space-x-2">
                  <Code className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              {/* Code Content */}
              <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <div className="font-mono text-sm space-y-2 mb-6">
                  <div className="text-purple-400">import <span className="text-blue-400">React</span> from <span className="text-green-400">'react'</span>;</div>
                  <div className="text-purple-400">import <span className="text-blue-400">{{ Services }}</span> from <span className="text-green-400">'./components'</span>;</div>
                  <div className="mt-4 text-blue-400">const <span className="text-yellow-400">ServicesSection</span> = () => {{</div>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#04e6a5] to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-3xl lg:text-4xl font-bold text-white">
                        Comprehensive Technology Services
                      </h2>
                      <div className="text-[#04e6a5] font-mono text-sm">// Full-stack solutions</div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    From concept to deployment, I provide end-to-end technology solutions 
                    that help your business thrive in the digital world.
                  </p>
                </div>
                
                <div className="font-mono text-sm text-blue-400 mt-6">
                  <div>}}</div>
                  <div className="text-purple-400">export default <span className="text-yellow-400">ServicesSection</span>;</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2 hover:border-[#04e6a5] hover:border-2">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:bg-[#04e6a5] group-hover:text-white transition-all duration-300 group-hover:scale-110`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#04e6a5] transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-[#04e6a5] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group-hover:bg-[#04e6a5] group-hover:text-white transition-colors border group-hover:border-[#04e6a5]">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-silver-50 rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how I can help bring your vision to life with modern technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#04e6a5] hover:bg-emerald-600 text-white shadow-lg">
                Schedule a Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-[#04e6a5] text-[#04e6a5] hover:bg-[#04e6a5] hover:text-white transition-colors">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
