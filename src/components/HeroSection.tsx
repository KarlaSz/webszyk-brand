
import { Button } from "@/components/ui/button";
import { ArrowDown, AlertCircle, Clock, DollarSign, Users, TrendingDown, Zap, ChevronDown } from "lucide-react";

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
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-white/15 backdrop-blur-sm p-2 rounded-lg border border-white/20">
                <Zap className="h-6 w-6 text-[#4CAF50]" />
              </div>
              <span className="text-white font-semibold bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-sm">Full-Stack Technology Partner</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Web</span>
              <span className="text-[#4CAF50]">Szyk</span>
            </h1>
            
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-8 leading-tight">
              Build & Design Amazing Digital Solutions
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-10">
              Transform your ideas into powerful digital experiences. I help companies and entrepreneurs 
              build stunning websites, mobile apps, and provide comprehensive technology support with 
              business-focused solutions.
            </p>
            
            <div className="flex justify-center mb-12">
              <Button 
                size="lg" 
                onClick={scrollToNext}
                className="group bg-[#4CAF50] hover:bg-[#45a049] text-white text-lg px-12 py-8 shadow-xl transition-all duration-500 rounded-full hover:scale-110 transform border-2 border-[#4CAF50]/50"
              >
                <div className="flex flex-col items-center space-y-2">
                  <ChevronDown className="h-8 w-8 group-hover:animate-bounce transition-all duration-300" />
                  <span className="text-sm font-medium">Discover More</span>
                </div>
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-[#4CAF50]" />
                <span className="text-white/90 font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[#4CAF50] rounded-full"></div>
                <span className="text-white/90 font-medium">Clean Code</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[#4CAF50] rounded-full animate-pulse"></div>
                <span className="text-white/90 font-medium">24/7 Support</span>
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
                      www.yourwebsite.com
                    </div>
                  </div>
                  <div className="w-12"></div>
                </div>
                
                {/* Browser Content */}
                <div className="p-8 h-80 flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-white mb-4">Your Website</h3>
                    <div className="w-32 h-4 bg-white/30 rounded mx-auto mb-3"></div>
                    <div className="w-48 h-4 bg-white/30 rounded mx-auto mb-3"></div>
                    <div className="w-40 h-4 bg-white/30 rounded mx-auto mb-6"></div>
                    <div className="w-24 h-8 bg-[#4CAF50]/90 rounded mx-auto shadow-lg"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Problem Bubbles - Orange Gradient */}
              <div className="absolute -top-8 -left-8 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">Slow Loading</h4>
                      <p className="text-white/90 text-xs">Users leave after 3 seconds</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-12 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
                  <div className="flex items-start space-x-2">
                    <Users className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">Poor UX</h4>
                      <p className="text-white/90 text-xs">Confusing navigation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-16 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
                  <div className="flex items-start space-x-2">
                    <TrendingDown className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">Low Conversions</h4>
                      <p className="text-white/90 text-xs">Missing sales opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-16 animate-bounce" style={{ animationDelay: '3s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
                  <div className="flex items-start space-x-2">
                    <DollarSign className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">High Costs</h4>
                      <p className="text-white/90 text-xs">Expensive maintenance</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 left-8 animate-bounce" style={{ animationDelay: '4s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
                  <div className="flex items-start space-x-2">
                    <Clock className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">Outdated Tech</h4>
                      <p className="text-white/90 text-xs">Legacy systems holding you back</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 animate-bounce" style={{ animationDelay: '5s', animationDuration: '3s' }}>
                <div className="bg-gradient-to-br from-orange-400 to-orange-600 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-semibold text-sm">No Mobile</h4>
                      <p className="text-white/90 text-xs">Lost mobile traffic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
