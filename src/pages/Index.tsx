
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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left - Grouped Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#about" className="text-gray-600 hover:text-[#04e6a5] transition-colors font-medium px-4 py-2 rounded-lg hover:bg-[#04e6a5]/10">About</a>
              <a href="#projects" className="text-gray-600 hover:text-[#04e6a5] transition-colors font-medium px-4 py-2 rounded-lg hover:bg-[#04e6a5]/10">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-[#04e6a5] transition-colors font-medium px-4 py-2 rounded-lg hover:bg-[#04e6a5]/10">Contact</a>
            </div>
            
            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#04e6a5] to-[#04e6a5] rounded-xl flex items-center justify-center shadow-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#04e6a5] rounded-full animate-pulse"></div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">
                  <span className="text-[#04e6a5]">Web</span><span className="text-gray-600">Szyk</span>
                </div>
                <div className="text-xs text-gray-500 font-medium">Full-Stack Developer</div>
              </div>
            </div>
            
            {/* Right - CTA Button */}
            <div className="hidden md:flex items-center">
              <Button className="bg-[#04e6a5] hover:bg-[#04e6a5]/90 text-white shadow-lg">
                Get Started
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
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
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-8 w-8 text-[#04e6a5]" />
                <span className="text-xl font-bold">
                  <span className="text-[#04e6a5]">Web</span><span className="text-gray-600">Szyk</span>
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Your trusted technology partner for full-stack development, design, and digital transformation.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="bg-[#04e6a5]/10 text-[#04e6a5] border-[#04e6a5]/20">Full-Stack Development</Badge>
                <Badge variant="secondary" className="bg-gray-200 text-gray-600">Web Design</Badge>
                <Badge variant="secondary" className="bg-[#04e6a5]/10 text-[#04e6a5] border-[#04e6a5]/20">Tech Support</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>UI/UX Design</li>
                <li>Tech Consulting</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-600">
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
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2025 WebSzyk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
