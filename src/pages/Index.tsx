import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Zap, Users, CheckCircle, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import AboutMeSection from "@/components/AboutMeSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";
import MyOfferSection from "@/components/MyOfferSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import ProcessSection from "@/components/ProcessSection";
import ImageSection from "@/components/ImageSection";
import MobileMenu from "@/components/MobileMenu";
import ContactModal from "@/components/ContactModal";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Lighter Green-Silver Glassmorphism Background - Updated with new green */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800"></div>
      <div className="fixed inset-0 bg-gradient-to-tr from-[#04e6a5]/12 via-silver/8 to-emerald-400/10"></div>
      <div className="fixed inset-0 bg-gradient-to-bl from-gray-300/5 via-[#04e6a5]/8 to-slate-600/15"></div>
      
      {/* Animated Background Elements - Updated with new green */}
      <div className="fixed top-10 left-10 w-72 h-72 bg-gradient-to-br from-[#04e6a5]/15 to-gray-300/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed top-1/2 right-10 w-96 h-96 bg-gradient-to-bl from-emerald-400/12 to-silver/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="fixed bottom-10 left-1/3 w-80 h-80 bg-gradient-to-tr from-[#04e6a5]/10 to-gray-200/12 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-white/15 relative overflow-hidden">
          {/* Same gradient as hero/contact sections - Updated with new green */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#04e6a5]/15 via-emerald-400/10 to-[#04e6a5]/20"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/8 via-[#04e6a5]/12 to-slate-600/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Left - Grouped Navigation Links */}
              <div className="hidden md:flex items-center space-x-1">
                <a href="#about" className="text-white/80 hover:text-[#04e6a5] transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm">O mnie</a>
                <a href="#projects" className="text-white/80 hover:text-[#04e6a5] transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm">Wsparcie</a>
                <a href="#contact" className="text-white/80 hover:text-[#04e6a5] transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm">Kontakt</a>
              </div>
              
              {/* Centered Logo - Updated with new green */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#04e6a5]/80 to-emerald-600/80 rounded-full flex items-center justify-center shadow-lg border-2 border-[#04e6a5]/30 backdrop-blur-sm">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#04e6a5] rounded-full animate-pulse"></div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    <span className="text-[#04e6a5]">Web</span><span className="text-white">Szyk</span>
                  </div>
                  <div className="text-xs text-white/70 font-medium">studio</div>
                </div>
              </div>
              
              {/* Right - CTA Button with ContactModal */}
              <div className="hidden md:flex items-center">
                <ContactModal
                  trigger={
                    <Button className="bg-white/15 backdrop-blur-sm border border-white/20 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white hover:border-orange-500">
                      Potrzebuje wsparcia
                    </Button>
                  }
                  title="Potrzebuję wsparcia"
                />
              </div>
              
              {/* Mobile Menu */}
              <MobileMenu />
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <HeroSection />
        <ProblemSolutionSection />
        <AboutMeSection />
        <ExperienceSection />
        <AboutSection />
        <MyOfferSection />
        <ProjectsSection />
        <ProcessSection />
        <ImageSection />
        <FAQSection />
        <ContactSection />

        {/* Footer */}
        <footer className="backdrop-blur-md border-t border-white/15 relative overflow-hidden">
          {/* Same gradient as hero/contact sections - Updated with new green */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#04e6a5]/15 via-emerald-400/10 to-[#04e6a5]/20"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/8 via-[#04e6a5]/12 to-slate-600/20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="h-8 w-8 text-[#04e6a5]" />
                  <span className="text-xl font-bold">
                    <span className="text-[#04e6a5]">Web</span><span className="text-white">Szyk</span>
                  </span>
                </div>
                <p className="text-white/70 mb-4">
                  Your trusted technology partner for full-stack development, design, and digital transformation.
                </p>
                <div className="flex space-x-4">
                  <Badge variant="secondary" className="bg-[#04e6a5]/20 text-[#04e6a5] border-[#04e6a5]/30 backdrop-blur-sm">Full-Stack Development</Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white/80 backdrop-blur-sm">Web Design</Badge>
                  <Badge variant="secondary" className="bg-[#04e6a5]/20 text-[#04e6a5] border-[#04e6a5]/30 backdrop-blur-sm">Tech Support</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Services</h3>
                <ul className="space-y-2 text-white/70">
                  <li>Web Development</li>
                  <li>Mobile Apps</li>
                  <li>UI/UX Design</li>
                  <li>Tech Consulting</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-4">Contact</h3>
                <ul className="space-y-2 text-white/70">
                  <li className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-[#04e6a5]" />
                    <span>hello@webszyk.com</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-[#04e6a5]" />
                    <span>+1 (555) 123-4567</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
              <p>&copy; 2025 WebSzyk. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
