
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Zap, Users, CheckCircle, ArrowRight, Mail, Phone, MapPin, Menu } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AboutMeSection from "@/components/AboutMeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Glassmorphism Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-emerald-900/30 to-slate-900"></div>
      <div className="fixed inset-0 bg-gradient-to-tr from-[#64D69F]/10 via-emerald-500/10 to-teal-500/10"></div>
      <div className="fixed inset-0 backdrop-blur-3xl"></div>
      
      {/* Animated Background Elements */}
      <div className="fixed top-10 left-10 w-72 h-72 bg-[#64D69F]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed top-1/2 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="fixed bottom-10 left-1/3 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Left - Grouped Navigation Links */}
              <div className="hidden md:flex items-center space-x-1">
                <a href="#about" className="text-white/80 hover:text-[#64D69F] transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm">About</a>
                <a href="#projects" className="text-white/80 hover:text-[#64D69F] transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm">Projects</a>
                <a href="#contact" className="text-white/80 hover:text-[#64D69F] transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm">Contact</a>
              </div>
              
              {/* Centered Logo */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#64D69F] to-[#64D69F] rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#64D69F] rounded-full animate-pulse"></div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    <span className="text-[#64D69F]">Web</span><span className="text-white">Szyk</span>
                  </div>
                  <div className="text-xs text-white/70 font-medium">Full-Stack Developer</div>
                </div>
              </div>
              
              {/* Right - CTA Button */}
              <div className="hidden md:flex items-center">
                <Button className="bg-[#64D69F] hover:bg-[#64D69F]/90 text-white shadow-lg backdrop-blur-sm">
                  Get Started
                </Button>
              </div>
              
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <HeroSection />
        <AboutMeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />

        {/* Footer */}
        <footer className="backdrop-blur-md bg-white/10 border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="h-8 w-8 text-[#64D69F]" />
                  <span className="text-xl font-bold">
                    <span className="text-[#64D69F]">Web</span><span className="text-white">Szyk</span>
                  </span>
                </div>
                <p className="text-white/70 mb-4">
                  Your trusted technology partner for full-stack development, design, and digital transformation.
                </p>
                <div className="flex space-x-4">
                  <Badge variant="secondary" className="bg-[#64D69F]/20 text-[#64D69F] border-[#64D69F]/30 backdrop-blur-sm">Full-Stack Development</Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white/80 backdrop-blur-sm">Web Design</Badge>
                  <Badge variant="secondary" className="bg-[#64D69F]/20 text-[#64D69F] border-[#64D69F]/30 backdrop-blur-sm">Tech Support</Badge>
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
                    <Mail className="h-4 w-4 text-[#64D69F]" />
                    <span>hello@webszyk.com</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-[#64D69F]" />
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
