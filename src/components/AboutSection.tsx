
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Zap, Users, CheckCircle, ArrowRight, Star, Award, Clock } from "lucide-react";
import ContactModal from "@/components/ContactModal";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background with gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#04e6a5]/15 via-emerald-400/10 to-[#04e6a5]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/8 via-[#04e6a5]/12 to-slate-600/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Badge variant="secondary" className="bg-[#04e6a5]/20 text-[#04e6a5] border-[#04e6a5]/30 backdrop-blur-sm px-4 py-2">
              About WebSzyk
            </Badge>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Your Technology Partner
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 8+ years of experience helping businesses 
            transform their ideas into powerful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Stats and Achievements */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-[#04e6a5]/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Award className="h-6 w-6 text-[#04e6a5]" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">8+</div>
                <div className="text-white/80">Years Experience</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-[#04e6a5]/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Star className="h-6 w-6 text-[#04e6a5]" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">100+</div>
                <div className="text-white/80">Projects Delivered</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-[#04e6a5]/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Users className="h-6 w-6 text-[#04e6a5]" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-white/80">Happy Clients</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-[#04e6a5]/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[#04e6a5]" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80">Support</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Core Technologies</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#04e6a5]/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Code className="h-8 w-8 text-[#04e6a5]" />
                  </div>
                  <div className="text-white font-medium">Full-Stack</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#04e6a5]/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="h-8 w-8 text-[#04e6a5]" />
                  </div>
                  <div className="text-white font-medium">Mobile</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#04e6a5]/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-8 w-8 text-[#04e6a5]" />
                  </div>
                  <div className="text-white font-medium">Web</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - About Content */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">What Makes Me Different</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#04e6a5]/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="h-4 w-4 text-[#04e6a5]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Lightning Fast Development</h4>
                    <p className="text-white/80">I use modern tools and frameworks to deliver projects faster without compromising quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#04e6a5]/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-[#04e6a5]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Quality First Approach</h4>
                    <p className="text-white/80">Every line of code is tested and optimized for performance, security, and scalability.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#04e6a5]/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="h-4 w-4 text-[#04e6a5]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Partnership Mindset</h4>
                    <p className="text-white/80">I work closely with you to understand your business and provide ongoing support.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <ContactModal
                trigger={
                  <Button size="lg" className="px-12 py-4 text-xl group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    Let's Work Together
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                }
                title="Let's Work Together"
              />
              <p className="text-white/70 mt-4">Ready to transform your business with technology?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
