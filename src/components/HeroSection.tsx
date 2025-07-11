
import { Button } from "@/components/ui/button";
import { ArrowDown, AlertCircle, Clock, DollarSign, Users, TrendingDown, Zap, Code } from "lucide-react";
import ContactModal from "@/components/ContactModal";
import MobileMenu from "@/components/MobileMenu";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about-me');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-8 sm:py-12 lg:py-32 overflow-hidden">
      {/* Enhanced Gradient Background - Updated with new green */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#04e6a5]/15 via-emerald-400/10 to-[#04e6a5]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/8 via-[#04e6a5]/12 to-slate-600/20"></div>
      
      {/* Animated Background Elements - Updated with new green */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#04e6a5]/20 to-emerald-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-80 h-80 bg-gradient-to-bl from-[#04e6a5]/15 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-tr from-emerald-300/10 to-[#04e6a5]/25 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Floating Navigation - Integrated into Hero Section */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          className="backdrop-blur-md border border-white/15 rounded-2xl shadow-2xl relative overflow-hidden mx-auto"
          style={{ backgroundColor: '#121a26' }}
        >
          {/* Same glassmorphic overlay as hero section */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#04e6a5]/5 via-emerald-400/3 to-[#04e6a5]/8"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/3 via-[#04e6a5]/5 to-slate-600/8"></div>
          
          <div className="relative flex justify-between items-center h-16 px-6">
            {/* Left - Grouped Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#about" className="text-white/90 hover:text-[#04e6a5] transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/10">O mnie</a>
              <a href="#projects" className="text-white/90 hover:text-[#04e6a5] transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/10">Wsparcie</a>
              <a href="#contact" className="text-white/90 hover:text-[#04e6a5] transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/10">Kontakt</a>
            </div>
            
            {/* Centered Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-[#04e6a5] to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#04e6a5] rounded-full animate-pulse"></div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">
                  <span className="text-[#04e6a5]">Web</span><span className="text-white">Szyk</span>
                </div>
                <div className="text-xs text-white/70 font-medium">studio</div>
              </div>
            </div>
            
            {/* Right - CTA Button with ContactModal */}
            <div className="hidden md:flex items-center">
              <ContactModal
                trigger={
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 hover:from-orange-600 hover:to-orange-700 border-0">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Add top padding to account for floating nav */}
        <div className="pt-24">
          {/* Centered Main Title as Hook */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-20 animate-fade-in">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
              <span className="text-white block mb-2 lg:mb-3">Twoje najlepsze</span>
              <span className="text-[#04e6a5] bg-gradient-to-r from-[#04e6a5] to-emerald-400 bg-clip-text text-transparent block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">techniczne wsparcie</span>
            </h1>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-8 sm:mb-12 lg:mb-16">
            {/* Left Column - Description and Features */}
            <div className="animate-fade-in order-2 lg:order-1">
              {/* Moved Technologiczne wsparcie badge here */}
              <div className="flex items-center space-x-3 mb-4 sm:mb-6 lg:mb-8">
                <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg border border-white/20">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-[#04e6a5]" />
                </div>
                <span className="text-white font-semibold bg-white/15 backdrop-blur-sm px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-white/20 text-xs sm:text-sm">Technologiczne wsparcie</span>
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-6 sm:mb-8 lg:mb-12">
                Webszyk studio to miejsce w którym pomogę Ci przekształić Twoje pomysły w cyfrowe doświadczenia. Pomagam firmom i przedsiębiorcom tworzyć wspaniałe strony internetowe, aplikacje mobilne i zapewniam kompleksowe wsparcie technologiczne z rozwiązaniami biznesowymi.
              </p>
              
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-8 text-xs sm:text-sm mb-6 lg:mb-8">
                <div className="flex items-center space-x-2">
                  <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-[#04e6a5]" />
                  <span className="text-white/90 font-medium">szybka komunikacja</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#04e6a5] rounded-full"></div>
                  <span className="text-white/90 font-medium">dobre praktyki</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#04e6a5] rounded-full animate-pulse"></div>
                  <span className="text-white/90 font-medium">IT wsparcie</span>
                </div>
              </div>

              {/* Add CTA button with ContactModal - Hidden on mobile */}
              <div className="hidden lg:flex justify-center lg:justify-start">
                <ContactModal
                  trigger={
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 border-0 text-lg">
                      Rozpocznij projekt
                    </Button>
                  }
                  title="Rozpocznij swój projekt"
                />
              </div>
            </div>
            
            {/* Right Column - Browser Mockup with Floating Problems - Added padding and made smaller */}
            <div className="relative animate-fade-in order-1 lg:order-2 px-4 sm:px-8 lg:px-12">
              <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
                {/* Browser Window - Made smaller */}
                <div className="relative bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
                  {/* Browser Header */}
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border-b border-white/20">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 mx-3">
                      <div className="bg-white/20 rounded-lg px-2 py-1.5 text-center text-white/90 text-xs border border-white/30">
                        www.twojastrona.pl
                      </div>
                    </div>
                    <div className="w-6"></div>
                  </div>
                  
                  {/* Browser Content - Smaller and more compact */}
                  <div className="p-3 sm:p-4 lg:p-5 min-h-[160px] sm:min-h-[180px] lg:min-h-[200px] bg-gradient-to-br from-white/10 to-white/5">
                    <div className="text-center mb-3 sm:mb-4">
                      <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">Twoja strona</h3>
                      <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4">profesjonalna i responsywna strona</p>
                    </div>
                    
                    {/* Navigation Menu - Smaller */}
                    <div className="flex justify-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                      <div className="w-8 sm:w-12 lg:w-14 h-1.5 sm:h-2 bg-white/40 rounded"></div>
                      <div className="w-10 sm:w-14 lg:w-16 h-1.5 sm:h-2 bg-white/40 rounded"></div>
                      <div className="w-9 sm:w-13 lg:w-15 h-1.5 sm:h-2 bg-white/40 rounded"></div>
                      <div className="w-7 sm:w-10 lg:w-12 h-1.5 sm:h-2 bg-white/40 rounded"></div>
                    </div>
                    
                    {/* Content Blocks - Smaller */}
                    <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                      <div className="flex space-x-1.5 sm:space-x-2">
                        <div className="w-10 sm:w-14 lg:w-16 h-1.5 sm:h-2 bg-white/30 rounded"></div>
                        <div className="w-16 sm:w-22 lg:w-26 h-1.5 sm:h-2 bg-white/30 rounded"></div>
                        <div className="w-12 sm:w-16 lg:w-18 h-1.5 sm:h-2 bg-white/30 rounded"></div>
                      </div>
                      <div className="flex space-x-1.5 sm:space-x-2">
                        <div className="w-14 sm:w-20 lg:w-22 h-1.5 sm:h-2 bg-white/30 rounded"></div>
                        <div className="w-10 sm:w-14 lg:w-16 h-1.5 sm:h-2 bg-white/30 rounded"></div>
                        <div className="w-18 sm:w-24 lg:w-28 h-1.5 sm:h-2 bg-white/30 rounded"></div>
                      </div>
                      <div className="flex space-x-1.5 sm:space-x-2">
                        <div className="w-16 sm:w-22 lg:w-24 h-1.5 sm:h-2 bg-white/30 rounded"></div>
                        <div className="w-12 sm:w-16 lg:w-18 h-1.5 sm:h-2 bg-white/30 rounded"></div>
                      </div>
                    </div>
                    
                    {/* CTA Button - Smaller */}
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <div className="w-24 sm:w-32 lg:w-36 h-7 sm:h-9 lg:h-10 bg-[#04e6a5]/90 rounded-lg shadow-lg flex items-center justify-center">
                        <span className="text-[#0D1B2A] text-xs sm:text-sm font-semibold">Zajrzyj niżej</span>
                      </div>
                    </div>
                    
                    {/* Trust Indicators - Smaller */}
                    <div className="flex justify-center items-center space-x-1.5 sm:space-x-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#04e6a5] rounded-full"></div>
                      <div className="text-white/70 text-xs">wspierana przez webszyk studio</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Problem Bubbles - Adjusted positioning for smaller browser */}
                <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-4 lg:-left-6 animate-bounce z-10" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-2xl max-w-[120px] sm:max-w-[140px] lg:max-w-44 border border-orange-400/30">
                    <div className="flex items-start space-x-1.5 sm:space-x-2">
                      <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white font-semibold text-xs sm:text-sm">Zły Layout</h4>
                        <p className="text-white/80 text-xs leading-tight">user wychodzi za szybko</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-1 sm:-top-2 lg:-top-3 -right-2 sm:-right-4 lg:-right-6 animate-bounce z-10" style={{ animationDelay: '1s', animationDuration: '3s' }}>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-2xl max-w-[120px] sm:max-w-[140px] lg:max-w-44 border border-orange-400/30">
                    <div className="flex items-start space-x-1.5 sm:space-x-2">
                      <Users className="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white font-semibold text-xs sm:text-sm">Słaby UX</h4>
                        <p className="text-white/80 text-xs leading-tight">skomplikowana nawigacja</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/4 sm:top-1/3 -left-2 sm:-left-4 lg:-left-8 animate-bounce z-10" style={{ animationDelay: '2s', animationDuration: '3s' }}>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-2xl max-w-[120px] sm:max-w-[140px] lg:max-w-44 border border-orange-400/30">
                    <div className="flex items-start space-x-1.5 sm:space-x-2">
                      <TrendingDown className="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white font-semibold text-xs sm:text-sm">Niskie zainteresowanie</h4>
                        <p className="text-white/80 text-xs leading-tight">gdzie formularz kontakty</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/4 sm:top-1/3 -right-2 sm:-right-4 lg:-right-8 animate-bounce z-10" style={{ animationDelay: '3s', animationDuration: '3s' }}>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-2xl max-w-[120px] sm:max-w-[140px] lg:max-w-44 border border-orange-400/30">
                    <div className="flex items-start space-x-1.5 sm:space-x-2">
                      <DollarSign className="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white font-semibold text-xs sm:text-sm">Wysokie koszta</h4>
                        <p className="text-white/80 text-xs leading-tight">jak nie przepłacać</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 left-2 sm:left-4 lg:left-6 animate-bounce z-10" style={{ animationDelay: '4s', animationDuration: '3s' }}>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-2xl max-w-[120px] sm:max-w-[140px] lg:max-w-44 border border-orange-400/30">
                    <div className="flex items-start space-x-1.5 sm:space-x-2">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white font-semibold text-xs sm:text-sm">Serwis IT</h4>
                        <p className="text-white/80 text-xs leading-tight">jak backup strony</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 -right-2 sm:-right-4 lg:-right-6 animate-bounce z-10" style={{ animationDelay: '5s', animationDuration: '3s' }}>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 backdrop-blur-sm rounded-xl p-2 sm:p-3 shadow-2xl max-w-[120px] sm:max-w-[140px] lg:max-w-44 border border-orange-400/30">
                    <div className="flex items-start space-x-1.5 sm:space-x-2">
                      <AlertCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-white font-semibold text-xs sm:text-sm">Nieetyczny mobile</h4>
                        <p className="text-white/80 text-xs leading-tight">źle na mobile</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Centered Animated Arrow Button - Updated with new green and ArrowDown icon */}
          <div className="flex justify-center">
            <button 
              onClick={scrollToNext}
              className="group relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/15 transition-all duration-500 hover:scale-110 transform shadow-xl flex items-center justify-center"
            >
              <ArrowDown 
                className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-[#04e6a5] transition-all duration-300 group-hover:scale-110" 
                style={{ 
                  animation: 'bounce 3s infinite ease-in-out',
                  animationDirection: 'alternate'
                }} 
              />
              
              {/* Glassmorphic ring effect */}
              <div className="absolute inset-0 rounded-full border-2 border-[#04e6a5]/30 animate-pulse"></div>
              <div className="absolute inset-2 rounded-full border border-white/30"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Shape Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg 
          className="relative block w-full h-8 sm:h-12 lg:h-16" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 L600,120 L1200,0 L1200,120 L0,120 Z" 
            fill="white"
            fillRule="evenodd"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
