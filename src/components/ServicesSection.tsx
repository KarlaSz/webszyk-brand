
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Globe, Zap, Users, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, TypeScript, and Node.js.",
    features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure & Scalable"],
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that provide seamless user experiences across all devices.",
    features: ["iOS & Android", "React Native", "Progressive Web Apps", "App Store Deployment"],
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Code,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that convert visitors into customers and provide exceptional user experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Zap,
    title: "Technology Consulting",
    description: "Strategic technology guidance to help you make informed decisions and optimize your digital infrastructure.",
    features: ["Technology Stack", "Architecture Planning", "Performance Optimization", "Digital Strategy"],
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Users,
    title: "Team Augmentation",
    description: "Scale your development team with experienced full-stack developers and technical expertise.",
    features: ["Remote Collaboration", "Agile Development", "Code Reviews", "Knowledge Transfer"],
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: CheckCircle,
    title: "Ongoing Support",
    description: "Continuous maintenance, updates, and technical support to keep your applications running smoothly.",
    features: ["24/7 Monitoring", "Bug Fixes", "Feature Updates", "Security Patches"],
    color: "bg-green-100 text-green-600"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Technology Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to deployment, I provide end-to-end technology solutions 
            that help your business thrive in the digital world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
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
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how I can help bring your vision to life with modern technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Schedule a Consultation
              </Button>
              <Button variant="outline" size="lg" className="border-green-200 hover:bg-green-50">
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
