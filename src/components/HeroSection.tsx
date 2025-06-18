
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Palette, Database, Smartphone, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-purple-50 opacity-50"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-green-100 to-purple-100 p-2 rounded-lg">
                <Code className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-green-600 font-semibold">Full-Stack Technology Partner</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-green-600">Web</span><span className="text-purple-600">Szyk</span>
              <span className="text-green-600 block text-3xl lg:text-5xl font-bold mt-4">
                Build & Design Amazing Digital Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Transform your ideas into powerful digital experiences. I help companies and entrepreneurs 
              build <span className="text-green-600 font-semibold">stunning websites</span>, 
              <span className="text-purple-600 font-semibold"> mobile apps</span>, and provide 
              comprehensive technology support with <span className="text-green-600 font-semibold">business-focused solutions</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-lg px-8 py-6 shadow-lg">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-green-200 hover:bg-green-50 hover:border-purple-300 transition-all">
                View My Work
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-green-600" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="h-4 w-4 text-green-600" />
                <span>Clean Code</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          
          <div className="relative lg:pl-8 animate-fade-in">
            <div className="relative">
              {/* Better Spaced Animated Skills Section */}
              <div className="relative w-[600px] h-[600px] mx-auto">
                {/* Central Profile Element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-2xl flex items-center justify-center animate-pulse">
                  <div className="text-white text-center">
                    <div className="w-20 h-20 bg-white rounded-xl mx-auto mb-2 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">WS</span>
                      </div>
                    </div>
                    <span className="text-sm font-bold">WebSzyk</span>
                  </div>
                </div>
                
                {/* Much Better Spaced Floating Skill Cards */}
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDelay: '0s', animationDuration: '4s' }}>
                  <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300 min-w-[180px]">
                    <Palette className="h-8 w-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-gray-900 text-base mb-1">UI/UX Design</h3>
                    <p className="text-sm text-gray-600">Beautiful Interfaces</p>
                  </div>
                </div>
                
                <div className="absolute top-1/2 right-12 transform -translate-y-1/2 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
                  <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-purple-500 hover:shadow-2xl transition-all duration-300 min-w-[180px]">
                    <Database className="h-8 w-8 text-purple-600 mb-3" />
                    <h3 className="font-bold text-gray-900 text-base mb-1">Backend Dev</h3>
                    <p className="text-sm text-gray-600">Robust Systems</p>
                  </div>
                </div>
                
                <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}>
                  <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300 min-w-[180px]">
                    <Smartphone className="h-8 w-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-gray-900 text-base mb-1">Mobile Apps</h3>
                    <p className="text-sm text-gray-600">Cross-Platform</p>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-12 transform -translate-y-1/2 animate-bounce" style={{ animationDelay: '3s', animationDuration: '4s' }}>
                  <div className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300 min-w-[180px]">
                    <Code className="h-8 w-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-gray-900 text-base mb-1">Frontend</h3>
                    <p className="text-sm text-gray-600">React & Modern JS</p>
                  </div>
                </div>

                {/* Business Focus Card - Top Right with more space */}
                <div className="absolute top-24 right-32 animate-bounce" style={{ animationDelay: '4s', animationDuration: '4s' }}>
                  <div className="bg-white rounded-2xl shadow-xl p-5 border-l-4 border-purple-500 hover:shadow-2xl transition-all duration-300 min-w-[160px]">
                    <TrendingUp className="h-7 w-7 text-purple-600 mb-2" />
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Business Focus</h3>
                    <p className="text-xs text-gray-600">Growth Oriented</p>
                  </div>
                </div>

                {/* Additional Card - Bottom Left with more space */}
                <div className="absolute bottom-24 left-32 animate-bounce" style={{ animationDelay: '5s', animationDuration: '4s' }}>
                  <div className="bg-white rounded-2xl shadow-xl p-5 border-l-4 border-green-500 hover:shadow-2xl transition-all duration-300 min-w-[160px]">
                    <Zap className="h-7 w-7 text-green-600 mb-2" />
                    <h3 className="font-bold text-gray-900 text-sm mb-1">Fast Delivery</h3>
                    <p className="text-xs text-gray-600">Quick Turnaround</p>
                  </div>
                </div>
              </div>
              
              {/* Subtle Background Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl opacity-50 animate-pulse delay-1000"></div>
              <div className="absolute top-1/4 -right-12 w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-40 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
