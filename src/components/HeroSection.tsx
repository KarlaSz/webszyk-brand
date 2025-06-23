
import { Button } from "@/components/ui/button";
import { ArrowDown, AlertCircle, Clock, DollarSign, Users, TrendingDown, Zap } from "lucide-react";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.querySelector('#about-me');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-lg border border-white/20">
                <Zap className="h-6 w-6 text-[#4CAF50]" />
              </div>
              <span className="text-[#4CAF50] font-semibold bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-[#4CAF50]/20">Full-Stack Technology Partner</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-[#4CAF50]">Web</span>
              <span className="text-white">Szyk</span>
              <span className="text-[#4CAF50] block text-3xl lg:text-5xl font-bold mt-4">
                Build & Design Amazing Digital Solutions
              </span>
            </h2>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
              Transform your ideas into powerful digital experiences. I help companies and entrepreneurs 
              build <span className="text-[#4CAF50] font-semibold">stunning websites</span>, 
              <span className="text-white font-semibold"> mobile apps</span>, and provide 
              comprehensive technology support with <span className="text-[#4CAF50] font-semibold">business-focused solutions</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                onClick={scrollToNext}
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-[#4CAF50] hover:border-[#4CAF50] text-white text-lg px-8 py-6 shadow-xl transition-all duration-300"
              >
                Discover More
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-white/30 hover:bg-white/10 backdrop-blur-sm text-white hover:text-white transition-all shadow-lg"
              >
                View My Work
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
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white/10 rounded-lg px-4 py-2 text-center text-white/80 text-sm border border-white/20">
                      www.yourwebsite.com
                    </div>
                  </div>
                  <div className="w-12"></div>
                </div>
                
                {/* Browser Content */}
                <div className="p-8 h-80 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10">
                  <div className="text-center">
                    <h3 className="text-4xl font-bold text-white mb-4">Your Website</h3>
                    <div className="w-32 h-4 bg-white/20 rounded mx-auto mb-3"></div>
                    <div className="w-48 h-4 bg-white/20 rounded mx-auto mb-3"></div>
                    <div className="w-40 h-4 bg-white/20 rounded mx-auto mb-6"></div>
                    <div className="w-24 h-8 bg-[#4CAF50]/80 rounded mx-auto shadow-lg"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Problem Bubbles */}
              <div className="absolute -top-8 -left-8 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                <div className="bg-red-500/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
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
                <div className="bg-red-500/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
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
                <div className="bg-red-500/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
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
                <div className="bg-red-500/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
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
                <div className="bg-red-500/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
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
                <div className="bg-red-500/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-48">
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
