
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Code } from "lucide-react";
import ContactModal from "@/components/ContactModal";

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
        <Button variant="ghost" size="sm" className="text-white/90 hover:bg-white/10 md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80" style={{ backgroundColor: '#121a26', borderColor: 'rgba(255,255,255,0.15)' }}>
        
        {/* Close button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-20 text-white/90 hover:bg-white/10 w-10 h-10"
        >
          <X className="h-8 w-8" />
        </Button>
        
        <div className="relative z-10">
          <SheetHeader className="mb-8 mt-4">
            <SheetTitle className="flex items-center space-x-3 text-white">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#04e6a5] to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
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
              className="w-full text-left text-white/90 hover:text-[#04e6a5] transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white/10 border border-white/20"
            >
              O mnie
            </button>
            <button
              onClick={() => scrollToSection('#projects')}
              className="w-full text-left text-white/90 hover:text-[#04e6a5] transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white/10 border border-white/20"
            >
              Wsparcie
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full text-left text-white/90 hover:text-[#04e6a5] transition-colors font-medium px-4 py-3 rounded-lg hover:bg-white/10 border border-white/20"
            >
              Kontakt
            </button>
            
            <div className="pt-6">
              <ContactModal
                trigger={
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 border-0"
                  >
                    Potrzebuję wsparcia
                  </Button>
                }
                title="Potrzebuję wsparcia"
              />
            </div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
