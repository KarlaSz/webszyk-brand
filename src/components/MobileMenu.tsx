
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Code } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
    handleLinkClick();
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800 border-white/20">
        {/* Background overlay matching hero section */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#04e6a5]/15 via-emerald-400/10 to-[#04e6a5]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/8 via-[#04e6a5]/12 to-slate-600/20"></div>
        
        {/* Close button with bigger X icon */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-20 text-white hover:bg-white/10 w-10 h-10"
        >
          <X className="h-8 w-8" />
        </Button>
        
        <div className="relative z-10">
          <SheetHeader className="mb-8 mt-4">
            <SheetTitle className="flex items-center space-x-3 text-white">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#04e6a5]/80 to-emerald-600/80 rounded-full flex items-center justify-center shadow-lg border-2 border-[#04e6a5]/30 backdrop-blur-sm">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#04e6a5] rounded-full animate-pulse"></div>
              </div>
              <div>
                <div className="text-xl font-bold">
                  <span className="text-[#04e6a5]">Web</span><span className="text-white">Szyk</span>
                </div>
                <div className="text-xs text-white/70 font-medium">studio</div>
              </div>
            </SheetTitle>
          </SheetHeader>

          <nav className="space-y-4">
            <button
              onClick={() => scrollToSection('#about-me')}
              className="w-full text-left text-white/80 hover:text-[#04e6a5] transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white/10 backdrop-blur-sm border border-white/10"
            >
              O mnie
            </button>
            <button
              onClick={() => scrollToSection('#projects')}
              className="w-full text-left text-white/80 hover:text-[#04e6a5] transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white/10 backdrop-blur-sm border border-white/10"
            >
              Wsparcie
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full text-left text-white/80 hover:text-[#04e6a5] transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white/10 backdrop-blur-sm border border-white/10"
            >
              Kontakt
            </button>
            
            <div className="pt-6">
              <Button 
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 border-0"
                onClick={() => scrollToSection('#contact')}
              >
                Potrzebuję wsparcia
              </Button>
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
