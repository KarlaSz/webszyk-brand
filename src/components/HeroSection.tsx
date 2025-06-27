
import { Button } from "@/components/ui/button";
import { ArrowDown, AlertCircle, Clock, DollarSign, Users, TrendingDown, Zap, ArrowBigDown } from "lucide-react";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about-me');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Enhanced Gradient Background - Same as Contact Section */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/15 via-emerald-400/10 to-[#4CAF50]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/8 via-[#4CAF50]/12 to-slate-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#4CAF50]/20 to-emerald-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-80 h-80 bg-gradient-to-bl from-[#4CAF50]/15 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-tr from-emerald-300/10 to-[#4CAF50]/25 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg border border-white/20">
                <Zap className="h-6 w-6 text-[#4CAF50]" />
              </div>
              <span className="text-white font-semibold bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-sm">Technologiczne wsparcie</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight tracking-tight">
              <span className="text-white block mb-3 lg:mb-4">Twoje</span>
              <span className="text-white block mb-3 lg:mb-4">techniczne</span>
              <span className="text-[#4CAF50] block">wsparcie</span>
              <span className="text-white block mt-3 lg:mt-4">którego</span>
              <span className="text-white block">potrzebujesz</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-12 mt-8">
              Webszyk studio to miejsce w którym pomogę Ci przekształć Twoje pomysły w cyfrowe doświadczenia. Pomagam firmom i przedsiębiorcom tworzyć wspaniałe strony internetowe, aplikacje mobilne i zapewniam kompleksowe wsparcie technologiczne z rozwiązaniami biznesowymi.
            </p>
            
            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-[#4CAF50]" />
                <span className="text-white/90 font-medium">szybka komunikacja</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[#4CAF50] rounded-full"></div>
                <span className="text-white/90 font-medium">dobre praktyki</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[#4CAF50] rounded-full animate-pulse"></div>
                <span className="text-white/90 font-medium">IT wsparcie</span>
              </div>
            </div>
          </div>
          
          {/* Browser Mockup with Floating Problems */}
          <div className="relative lg:pl-8 animate-fade-in">
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Browser Window */}
              <div className="relative bg-white/15 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-white/10 border-b border-white/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white/15 rounded-lg px-4 py-2 text-center text-white/90 text-sm border border-white/30">
                      www.twojastrona.pl
                    </div>
                  </div>
                  <div className="w-12"></div>
                </div>
                
                {/* Browser Content */}
                <div className="p-8 h-80 bg-gradient-to-br from-white/10 to-white/5">
                  <div className="text-center mb-6">
                    <h3 className="text-3xl font-bold text-white mb-3">Twoja strona</h3>
                    <p className="text-white/80 text-sm mb-6">profesjonalna i responsywna strona</p>
                  </div>
                  
                  {/* Navigation Menu */}
                  <div className="flex justify-center space-x-6 mb-8">
                    <div className="w-16 h-2 bg-white/40 rounded"></div>
                    <div className="w-20 h-2 bg-white/40 rounded"></div>
                    <div className="w-18 h-2 bg-white/40 rounded"></div>
                    <div className="w-14 h-2 bg-white/40 rounded"></div>
                  </div>
                  
                  {/* Content Blocks */}
                  <div className="space-y-4 mb-8">
                    <div className="flex space-x-3">
                      <div className="w-20 h-3 bg-white/30 rounded"></div>
                      <div className="w-32 h-3 bg-white/30 rounded"></div>
                      <div className="w-24 h-3 bg-white/30 rounded"></div>
                    </div>
                    <div className="flex space-x-3">
                      <div className="w-28 h-3 bg-white/30 rounded"></div>
                      <div className="w-20 h-3 bg-white/30 rounded"></div>
                      <div className="w-36 h-3 bg-white/30 rounded"></div>
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="flex justify-center">
                    <div className="w-32 h-10 bg-[#4CAF50]/90 rounded-lg shadow-lg flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">Zajrzyj niżej</span>
                    </div>
                  </div>
                  
                  {/* Trust Indicators */}
                  <div className="flex justify-center space-x-4 mt-6">
                    <div className="w-3 h-3 bg-[#4CAF50] rounded-full"></div>
                    <div className="text-white/70 text-xs">wspierana przez webszyk studio</div>
                  </div>
                </div>
              </div>
              
              
              {/* Floating Problem Bubbles - Orange Gradient */}
              <div className="absolute -top-8 -left-8 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">Zły Layout</h4>
                      <p className="text-white/90 text-xs">user wychodzi za szybko z mojej strony</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-12 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
                  <div className="flex items-start space-x-2">
                    <Users className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">Słaby UX</h4>
                      <p className="text-white/90 text-xs">skomplikowana nawigacja i układ strony</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-16 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
                  <div className="flex items-start space-x-2">
                    <TrendingDown className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">Niskie zainteresowanie</h4>
                      <p className="text-white/90 text-xs">gdzie umieścić formularz kontakty na stronie i jak skonfigutować</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-16 animate-bounce" style={{ animationDelay: '3s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
                  <div className="flex items-start space-x-2">
                    <DollarSign className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">Wysokie koszta</h4>
                      <p className="text-white/90 text-xs">Nie wiem jak zarządzać swoją stroną i jak nie przepłacać za narzędzia</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 left-8 animate-bounce" style={{ animationDelay: '4s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
                  <div className="flex items-start space-x-2">
                    <Clock className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">Serwis IT</h4>
                      <p className="text-white/90 text-xs">jak wykonać backup strony</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 animate-bounce" style={{ animationDelay: '5s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">Nieetyczny mobile</h4>
                      <p className="text-white/90 text-xs">strone i aplikacja wyglądają źle na mobile i tabletach</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Centered Animated Arrow Button - Moved Below Everything */}
        <div className="flex justify-center mt-16">
          <button 
            onClick={scrollToNext}
            className="group relative w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/15 transition-all duration-500 hover:scale-110 transform shadow-xl flex items-center justify-center"
          >
            <ArrowBigDown 
              className="h-10 w-10 text-[#4CAF50] transition-all duration-300 group-hover:scale-110" 
              style={{ 
                animation: 'bounce 3s infinite ease-in-out',
                animationDirection: 'alternate'
              }} 
            />
            
            {/* Glassmorphic ring effect */}
            <div className="absolute inset-0 rounded-full border-2 border-[#4CAF50]/30 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full border border-white/30"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
