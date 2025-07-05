
import { Button } from "@/components/ui/button";
import { ArrowDown, AlertCircle, Clock, DollarSign, Users, TrendingDown, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about-me');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Gradient Background - Updated with new green */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#04e6a5]/15 via-emerald-400/10 to-[#04e6a5]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/8 via-[#04e6a5]/12 to-slate-600/20"></div>
      
      {/* Animated Background Elements - Updated with new green */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#04e6a5]/20 to-emerald-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-80 h-80 bg-gradient-to-bl from-[#04e6a5]/15 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-tr from-emerald-300/10 to-[#04e6a5]/25 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Main Title as Hook */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight max-w-4xl mx-auto">
            <span className="text-white block mb-2 lg:mb-3">Twoje najlepsze</span>
            <span className="text-[#04e6a5] bg-gradient-to-r from-[#04e6a5] to-emerald-400 bg-clip-text text-transparent block text-5xl lg:text-6xl xl:text-7xl">techniczne wsparcie</span>
          </h1>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          {/* Left Column - Description and Features */}
          <div className="animate-fade-in order-2 lg:order-1">
            {/* Moved Technologiczne wsparcie badge here */}
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg border border-white/20">
                <Zap className="h-6 w-6 text-[#04e6a5]" />
              </div>
              <span className="text-white font-semibold bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-sm">Technologiczne wsparcie</span>
            </div>
            
            <p className="text-xl text-white/90 leading-relaxed mb-12">
              Webszyk studio to miejsce w którym pomogę Ci przekształć Twoje pomysły w cyfrowe doświadczenia. Pomagam firmom i przedsiębiorcom tworzyć wspaniałe strony internetowe, aplikacje mobilne i zapewniam kompleksowe wsparcie technologiczne z rozwiązaniami biznesowymi.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 lg:gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-[#04e6a5]" />
                <span className="text-white/90 font-medium">szybka komunikacja</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[#04e6a5] rounded-full"></div>
                <span className="text-white/90 font-medium">dobre praktyki</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[#04e6a5] rounded-full animate-pulse"></div>
                <span className="text-white/90 font-medium">IT wsparcie</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Browser Mockup with Floating Problems */}
          <div className="relative animate-fade-in order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-2xl mx-auto">
              {/* Browser Window - Responsive sizing */}
              <div className="relative bg-white/15 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center justify-between px-3 lg:px-6 py-2 lg:py-4 bg-white/10 border-b border-white/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 mx-2 lg:mx-4">
                    <div className="bg-white/15 rounded-lg px-2 lg:px-4 py-1 lg:py-2 text-center text-white/90 text-xs lg:text-sm border border-white/30">
                      www.twojastrona.pl
                    </div>
                  </div>
                  <div className="w-6 lg:w-12"></div>
                </div>
                
                {/* Browser Content - Responsive sizing */}
                <div className="p-4 lg:p-8 h-48 lg:h-80 bg-gradient-to-br from-white/10 to-white/5">
                  <div className="text-center mb-4 lg:mb-6">
                    <h3 className="text-xl lg:text-3xl font-bold text-white mb-2 lg:mb-3">Twoja strona</h3>
                    <p className="text-white/80 text-xs lg:text-sm mb-4 lg:mb-6">profesjonalna i responsywna strona</p>
                  </div>
                  
                  {/* Navigation Menu */}
                  <div className="flex justify-center space-x-2 lg:space-x-6 mb-4 lg:mb-8">
                    <div className="w-8 lg:w-16 h-1 lg:h-2 bg-white/40 rounded"></div>
                    <div className="w-10 lg:w-20 h-1 lg:h-2 bg-white/40 rounded"></div>
                    <div className="w-9 lg:w-18 h-1 lg:h-2 bg-white/40 rounded"></div>
                    <div className="w-7 lg:w-14 h-1 lg:h-2 bg-white/40 rounded"></div>
                  </div>
                  
                  {/* Content Blocks */}
                  <div className="space-y-2 lg:space-y-4 mb-4 lg:mb-8">
                    <div className="flex space-x-2 lg:space-x-3">
                      <div className="w-10 lg:w-20 h-2 lg:h-3 bg-white/30 rounded"></div>
                      <div className="w-16 lg:w-32 h-2 lg:h-3 bg-white/30 rounded"></div>
                      <div className="w-12 lg:w-24 h-2 lg:h-3 bg-white/30 rounded"></div>
                    </div>
                    <div className="flex space-x-2 lg:space-x-3">
                      <div className="w-14 lg:w-28 h-2 lg:h-3 bg-white/30 rounded"></div>
                      <div className="w-10 lg:w-20 h-2 lg:h-3 bg-white/30 rounded"></div>
                      <div className="w-18 lg:w-36 h-2 lg:h-3 bg-white/30 rounded"></div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="flex justify-center">
                    <div className="w-24 lg:w-32 h-8 lg:h-10 bg-[#04e6a5]/90 rounded-lg shadow-lg flex items-center justify-center">
                      <span className="text-[#0D1B2A] text-xs lg:text-sm font-semibold">Zajrzyj niżej</span>
                    </div>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="flex justify-center space-x-2 lg:space-x-4 mt-4 lg:mt-6">
                    <div className="w-2 lg:w-3 h-2 lg:h-3 bg-[#04e6a5] rounded-full"></div>
                    <div className="text-white/70 text-xs">wspierana przez webszyk studio</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Problem Bubbles - Mobile responsive positioning and sizing */}
              <div className="absolute -top-4 lg:-top-8 -left-4 lg:-left-8 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-2 lg:p-4 shadow-xl max-w-32 lg:max-w-48">
                  <div className="flex items-start space-x-1 lg:space-x-2">
                    <AlertCircle className="h-3 w-3 lg:h-5 lg:w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-xs lg:text-sm">Zły Layout</h4>
                      <p className="text-white/90 text-xs hidden lg:block">user wychodzi za szybko z mojej strony</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-2 lg:-top-4 -right-6 lg:-right-12 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-2 lg:p-4 shadow-xl max-w-32 lg:max-w-48">
                  <div className="flex items-start space-x-1 lg:space-x-2">
                    <Users className="h-3 w-3 lg:h-5 lg:w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-xs lg:text-sm">Słaby UX</h4>
                      <p className="text-white/90 text-xs hidden lg:block">skomplikowana nawigacja i układ strony</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/3 lg:top-1/2 -left-8 lg:-left-16 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-2 lg:p-4 shadow-xl max-w-32 lg:max-w-48">
                  <div className="flex items-start space-x-1 lg:space-x-2">
                    <TrendingDown className="h-3 w-3 lg:h-5 lg:w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-xs lg:text-sm">Niskie zainteresowanie</h4>
                      <p className="text-white/90 text-xs hidden lg:block">gdzie umieścić formularz kontakty na stronie i jak skonfigutować</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/3 lg:top-1/2 -right-8 lg:-right-16 animate-bounce" style={{ animationDelay: '3s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-2 lg:p-4 shadow-xl max-w-32 lg:max-w-48">
                  <div className="flex items-start space-x-1 lg:space-x-2">
                    <DollarSign className="h-3 w-3 lg:h-5 lg:w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-xs lg:text-sm">Wysokie koszta</h4>
                      <p className="text-white/90 text-xs hidden lg:block">Nie wiem jak zarządzać swoją stroną i jak nie przepłacać za narzędzia</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 lg:-bottom-8 left-4 lg:left-8 animate-bounce" style={{ animationDelay: '4s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-2 lg:p-4 shadow-xl max-w-32 lg:max-w-48">
                  <div className="flex items-start space-x-1 lg:space-x-2">
                    <Clock className="h-3 w-3 lg:h-5 lg:w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-xs lg:text-sm">Serwis IT</h4>
                      <p className="text-white/90 text-xs hidden lg:block">jak wykonać backup strony</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 lg:-bottom-8 -right-4 lg:-right-8 animate-bounce" style={{ animationDelay: '5s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-2 lg:p-4 shadow-xl max-w-32 lg:max-w-48">
                  <div className="flex items-start space-x-1 lg:space-x-2">
                    <AlertCircle className="h-3 w-3 lg:h-5 lg:w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-xs lg:text-sm">Nieetyczny mobile</h4>
                      <p className="text-white/90 text-xs hidden lg:block">strona i aplikacja wyglądają źle na mobile i tabletach</p>
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
            className="group relative w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/15 transition-all duration-500 hover:scale-110 transform shadow-xl flex items-center justify-center"
          >
            <ArrowDown 
              className="h-10 w-10 text-[#04e6a5] transition-all duration-300 group-hover:scale-110" 
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

      {/* Sharp Arrow Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg 
          className="relative block w-full h-16" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 60" 
          preserveAspectRatio="none"
        >
          <polygon 
            points="0,0 600,60 1200,0 1200,60 0,60" 
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
