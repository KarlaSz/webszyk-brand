
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle, MessageCircle } from "lucide-react";
import ContactModal from "@/components/ContactModal";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with multiple gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#04e6a5]/15 via-emerald-400/10 to-[#04e6a5]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/8 via-[#04e6a5]/12 to-slate-600/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-[#04e6a5]/20 to-emerald-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-bl from-emerald-400/15 to-[#04e6a5]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          {/* Status Badge */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 shadow-lg">
              <div className="w-2 h-2 bg-[#04e6a5] rounded-full animate-pulse"></div>
              <span className="text-white font-medium text-sm">Available for new projects</span>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Transform Your Business
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#04e6a5] to-emerald-400">
              With Technology
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Full-stack development, modern design, and tech support that drives real results. 
            Let's build something amazing together.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <ContactModal
              trigger={
                <Button size="lg" className="px-12 py-4 text-lg group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Start Your Project
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
              title="Start Your Project"
            />
            
            <ContactModal
              trigger={
                <Button variant="outline" size="lg" className="px-12 py-4 text-lg group border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold transition-all duration-300">
                  <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                  Book Free Consultation
                </Button>
              }
              title="Book Free Consultation"
            />
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center space-x-8 text-white/80">
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle className="h-5 w-5 text-[#04e6a5]" />
              <span className="font-medium">8+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle className="h-5 w-5 text-[#04e6a5]" />
              <span className="font-medium">100+ Projects Delivered</span>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle className="h-5 w-5 text-[#04e6a5]" />
              <span className="font-medium">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
