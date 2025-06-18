
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Zap, Users, CheckCircle, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
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
            {/* Left menu items - hidden on mobile */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Usługi</a>
              <a href="#about" className="text-gray-600 hover:text-green-600 transition-colors font-medium">O mnie</a>
            </div>
            
            {/* Centered logo */}
            <a href="/" className="flex items-center justify-center">
              <img src="/logo-transparent-web.png" alt="WebSzyk logo" className="h-12 w-auto" />
            </a>
            
            {/* Right menu items */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#projects" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Projekty</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Kontakt</a>
              <Button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 ml-4">
                Zacznij teraz
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <span className="sr-only">Menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <HeroSection />
      <AboutMeSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <a href="/" className="flex items-center space-x-2">
                <img src="/logo-short-transparent-web.png" alt="WebSzyk logo" className="h-16 w-auto" />
              </a>
              <p className="text-gray-600 mb-4">
                Twój zaufany partner technologiczny w zakresie full-stack developmentu, projektowania i transformacji cyfrowej.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="bg-green-100 text-green-800">Full-Stack Development</Badge>
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">Projektowanie stron</Badge>
                <Badge variant="secondary" className="bg-green-100 text-green-800">Wsparcie techniczne</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Usługi</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Tworzenie stron</li>
                <li>Aplikacje mobilne</li>
                <li>UI/UX Design</li>
                <li>Konsultacje technologiczne</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Kontakt</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>webszyk@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+48 726-486-987</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2025 WebSzyk -Karolina Szymaszkiewicz. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
