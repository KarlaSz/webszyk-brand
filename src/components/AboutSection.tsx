
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Users, Code, Heart, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
            <span className="text-green-600 font-semibold text-lg">About Me</span>
            <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Crafting Digital Excellence
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 8 years of experience in full-stack development, I transform ideas into 
            powerful digital solutions that drive real business results.
          </p>
        </div>

        {/* Philosophy Section - Matching Development Process Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section - Plain text like Development Process */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              <span className="text-green-600 font-semibold">My Philosophy</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              A proven approach that delivers results
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                I believe in creating technology that serves people, not the other way around. 
                Every line of code should have purpose, every design decision should enhance user experience, 
                and every project should solve real problems.
              </p>
              
              <p>
                My approach focuses on understanding your business goals first, then crafting solutions 
                that not only meet your immediate needs but also scale with your growth. Quality, 
                maintainability, and user experience are at the core of everything I build.
              </p>
            </div>
          </div>

          {/* Core Values Section - Glassmorphism cards like Process steps */}
          <div className="space-y-6">
            <Card className="bg-white/70 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:bg-white/80">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100/80 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 group-hover:bg-blue-200/80 transition-all duration-300 relative border border-blue-200/40">
                      <Code className="h-7 w-7 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Clean Code</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Writing maintainable, scalable code that stands the test of time and grows with your business.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:bg-white/80">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-100/80 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 group-hover:bg-purple-200/80 transition-all duration-300 relative border border-purple-200/40">
                      <Heart className="h-7 w-7 text-purple-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">User-Centered</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Every decision is made with the end user in mind, ensuring intuitive and delightful experiences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:bg-white/80">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-amber-100/80 backdrop-blur-sm rounded-xl flex items-center justify-center mb-2 group-hover:bg-amber-200/80 transition-all duration-300 relative border border-amber-200/40">
                      <Lightbulb className="h-7 w-7 text-amber-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Staying ahead of the curve with modern technologies while ensuring reliability and performance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
