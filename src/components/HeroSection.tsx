
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Palette, Database, Smartphone, TrendingUp, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2316a34a' fill-opacity='0.03'%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-green-100 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-medium text-sm">Available for new projects</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                <span className="block">I'm</span>
                <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                  WebSzyk
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-gray-700 font-light">
                Full-Stack Developer & <span className="text-green-600 font-medium">Tech Partner</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                I transform ideas into powerful digital experiences. Creating stunning websites, 
                mobile apps, and providing comprehensive technology solutions for modern businesses.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-gray-200 hover:border-green-200 hover:bg-green-50 transition-all duration-300 group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch My Work
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Code className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm font-medium">Clean Code</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="relative lg:pl-12 animate-fade-in">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Central Profile Circle */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full shadow-2xl border-4 border-green-100 flex items-center justify-center overflow-hidden group hover:scale-105 transition-transform duration-500">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-inner">
                    WS
                  </div>
                </div>
                
                {/* Floating Skill Cards */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDelay: '0s', animationDuration: '4s' }}>
                  <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 min-w-[160px] hover:-translate-y-1 transform transition-transform">
                    <Palette className="h-8 w-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-gray-900 text-base">UI/UX Design</h3>
                    <p className="text-sm text-gray-600 mt-1">Beautiful Interfaces</p>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
                  <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 min-w-[160px] hover:-translate-y-1 transform transition-transform">
                    <Database className="h-8 w-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-gray-900 text-base">Backend Dev</h3>
                    <p className="text-sm text-gray-600 mt-1">Robust Systems</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}>
                  <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 min-w-[160px] hover:-translate-y-1 transform transition-transform">
                    <Smartphone className="h-8 w-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-gray-900 text-base">Mobile Apps</h3>
                    <p className="text-sm text-gray-600 mt-1">Cross-Platform</p>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 animate-bounce" style={{ animationDelay: '3s', animationDuration: '4s' }}>
                  <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300 min-w-[160px] hover:-translate-y-1 transform transition-transform">
                    <Code className="h-8 w-8 text-green-600 mb-3" />
                    <h3 className="font-bold text-gray-900 text-base">Frontend</h3>
                    <p className="text-sm text-gray-600 mt-1">React & Modern JS</p>
                  </div>
                </div>

                {/* Business Thinking Card */}
                <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4s' }}>
                  <div className="bg-white rounded-2xl shadow-xl p-5 border border-purple-100 hover:shadow-2xl transition-shadow duration-300 min-w-[140px] hover:-translate-y-1 transform transition-transform">
                    <TrendingUp className="h-7 w-7 text-purple-600 mb-2" />
                    <h3 className="font-bold text-gray-900 text-sm">Business Focus</h3>
                    <p className="text-xs text-gray-600 mt-1">Good Practices</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Background Elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl opacity-50 animate-pulse delay-1000"></div>
              <div className="absolute top-1/3 -right-12 w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-40 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
