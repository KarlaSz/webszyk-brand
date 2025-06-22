
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, User, Award, Coffee, Linkedin, Github } from "lucide-react";

const AboutMeSection = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Video Section */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden group cursor-pointer border border-white/20">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[#04e6a5]/20 to-purple-500/20 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg border border-white/30">
                    <Play className="h-8 w-8 text-[#04e6a5] ml-1" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Meet WebSzyk</h3>
                  <p className="text-white/80 text-sm">Watch my story & approach</p>
                </div>
                
                {/* Animated elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-[#04e6a5] rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                <div className="absolute top-1/3 left-8 w-4 h-4 bg-white/30 rounded-full animate-bounce delay-1000"></div>
              </div>
              
              {/* Video info overlay */}
              <div className="p-6 bg-white/5 backdrop-blur-sm border-t border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#04e6a5]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#04e6a5]/30">
                    <User className="h-6 w-6 text-[#04e6a5]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Introduction Video</h4>
                    <p className="text-white/70 text-sm">3 min • Behind the scenes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-[#04e6a5] rounded-full animate-pulse"></div>
              <span className="text-[#04e6a5] font-semibold">About Me</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Hi, I'm the person behind <span className="text-[#04e6a5]">Web</span><span className="text-white">Szyk</span>
            </h2>
            
            <div className="space-y-4 text-white/80 leading-relaxed mb-8">
              <p>
                With over 8 years of experience in full-stack development, I've transformed from 
                a curious developer into a trusted technology partner for businesses worldwide. 
                My journey began with a simple belief: <span className="text-[#04e6a5] font-semibold">technology should solve real business problems</span>.
              </p>
              
              <p>
                I don't just write code – I partner with you to understand your vision, analyze your market, 
                and build solutions that drive real results. Every project is an opportunity to create 
                something that makes a difference, whether it's streamlining operations, reaching new customers, 
                or bringing innovative ideas to life.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, mentoring upcoming developers, 
                or enjoying a good coffee while sketching out the next big idea.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mb-8">
              <Button variant="outline" size="lg" className="border-white/30 hover:bg-white/10 backdrop-blur-sm text-white hover:text-white transition-all flex items-center space-x-2">
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 hover:bg-white/10 backdrop-blur-sm text-white hover:text-white transition-all flex items-center space-x-2">
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-md border border-white/20">
                <CardContent className="p-4 text-center">
                  <Award className="h-6 w-6 text-[#04e6a5] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-xs text-white/70">Happy Clients</div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-md border border-white/20">
                <CardContent className="p-4 text-center">
                  <Coffee className="h-6 w-6 text-[#04e6a5] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">8+</div>
                  <div className="text-xs text-white/70">Years Experience</div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-md border border-white/20">
                <CardContent className="p-4 text-center">
                  <User className="h-6 w-6 text-[#04e6a5] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">100+</div>
                  <div className="text-xs text-white/70">Projects Done</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
