
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, MessageCircle, Globe, Wrench } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceType: 'website' | 'it-services';
}

const ServiceModal = ({ isOpen, onClose, serviceType }: ServiceModalProps) => {
  const websiteService = {
    title: "Websites & Landing Pages",
    description: "Transform your business with a professional web presence that converts visitors into customers",
    price: "$999+",
    priceDescription: "Complete solution",
    features: [
      { title: "Professional Design", description: "Modern, visually appealing layouts that reflect your brand" },
      { title: "Mobile-First Approach", description: "Optimized for all devices and screen sizes" },
      { title: "SEO Optimization", description: "Built-in SEO best practices to improve search rankings" },
      { title: "Fast Loading Speed", description: "Optimized performance for better user experience" },
      { title: "Content Management", description: "Easy-to-use system for updating your content" },
      { title: "Analytics Integration", description: "Track visitor behavior and site performance" },
      { title: "Security Features", description: "SSL certificates and security best practices" },
      { title: "Ongoing Support", description: "30 days of free support and maintenance" }
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    timeline: "2-4 weeks",
    included: [
      "Custom design consultation",
      "Up to 5 pages",
      "Contact form integration",
      "Google Analytics setup",
      "Basic SEO optimization",
      "Mobile responsive design",
      "1 month free support"
    ]
  };

  const itService = {
    title: "IT Services & Support",
    description: "Comprehensive technology solutions to streamline your business operations and boost productivity",
    price: "$149+",
    priceDescription: "Per month",
    features: [
      { title: "24/7 Technical Support", description: "Round-the-clock assistance for all your IT needs" },
      { title: "System Monitoring", description: "Proactive monitoring to prevent issues before they occur" },
      { title: "Data Backup & Recovery", description: "Secure backup solutions and disaster recovery planning" },
      { title: "Security Management", description: "Comprehensive cybersecurity protection and monitoring" },
      { title: "Cloud Migration", description: "Seamless transition to cloud-based solutions" },
      { title: "Software Updates", description: "Regular updates and maintenance for all systems" },
      { title: "Network Management", description: "Optimization and maintenance of network infrastructure" },
      { title: "User Training", description: "Training sessions for your team on new technologies" }
    ],
    technologies: ["AWS", "Azure", "Microsoft 365", "Security Tools", "Monitoring Systems"],
    response: "Within 2 hours",
    included: [
      "Initial system assessment",
      "Monthly security reports",
      "Software license management",
      "Remote support access",
      "Regular system maintenance",
      "Priority support queue",
      "Quarterly strategy reviews"
    ]
  };

  const currentService = serviceType === 'website' ? websiteService : itService;
  const ServiceIcon = serviceType === 'website' ? Globe : Wrench;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900/95 backdrop-blur-xl border border-white/20 text-white">
        <DialogHeader className="pb-6">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#04e6a5]/80 to-emerald-600/80 rounded-xl flex items-center justify-center">
              <ServiceIcon className="h-6 w-6 text-white" />
            </div>
            <div>
              <DialogTitle className="text-2xl lg:text-3xl font-bold text-white">
                {currentService.title}
              </DialogTitle>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-3xl font-bold text-[#04e6a5]">{currentService.price}</span>
                <span className="text-white/70">{currentService.priceDescription}</span>
                {serviceType === 'website' && (
                  <Badge className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold">
                    Most Popular
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <DialogDescription className="text-white/80 text-lg leading-relaxed">
            {currentService.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Features */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
            <div className="space-y-3">
              {currentService.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-[#04e6a5] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-white">{feature.title}</span>
                    <p className="text-white/70 text-sm mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* What's Included */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">What's Included</h3>
            <div className="space-y-2 mb-6">
              {currentService.included.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-[#04e6a5] flex-shrink-0" />
                  <span className="text-white/90 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <h4 className="font-semibold text-white mb-3">Technologies Used</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {currentService.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm">
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Timeline/Response */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <span className="text-white/80">
                  {serviceType === 'website' ? 'Delivery Timeline' : 'Response Time'}
                </span>
                <span className="font-semibold text-[#04e6a5]">
                  {serviceType === 'website' ? currentService.timeline : currentService.response}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-white/20 pt-6 mt-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="px-8 py-3 text-lg group bg-gradient-to-br from-orange-400 to-orange-600 border-0 hover:from-orange-500 hover:to-orange-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Get Started Now
            </Button>
            
            <div className="flex items-center space-x-4 text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#04e6a5] rounded-full animate-pulse"></div>
                <span className="font-medium text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#04e6a5] rounded-full animate-pulse delay-500"></div>
                <span className="font-medium text-sm">Quick Response</span>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
