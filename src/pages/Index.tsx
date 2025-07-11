import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Zap, Users, CheckCircle, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
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
        {/* Hero Section with Integrated Navigation */}
        <HeroSection />

        {/* Main Content */}
        <div>
          <ProblemSolutionSection />
          <ExperienceSection />
          <AboutSection />
          <MyOfferSection />
          <ProjectsSection />
          <ProcessSection />
          <ImageSection />
          <FAQSection />
          <ContactSection />
        </div>

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
