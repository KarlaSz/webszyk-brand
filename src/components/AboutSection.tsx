
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Users, Code, Heart, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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

        {/* Philosophy Section - Redesigned */}
        <div className="max-w-5xl mx-auto">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
            <CardContent className="p-0">
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">My Philosophy</h3>
                    <p className="text-white/90 text-lg">Building with purpose and precision</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
                  I believe in creating technology that serves people, not the other way around. 
                  Every line of code should have purpose, every design decision should enhance user experience, 
                  and every project should solve real problems.
                </p>

                {/* Core Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Code className="h-10 w-10 text-blue-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Clean Code</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Writing maintainable, scalable code that stands the test of time and grows with your business.
                    </p>
                  </div>

                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="h-10 w-10 text-purple-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">User-Centered</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Every decision is made with the end user in mind, ensuring intuitive and delightful experiences.
                    </p>
                  </div>

                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Lightbulb className="h-10 w-10 text-amber-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Staying ahead of the curve with modern technologies while ensuring reliability and performance.
                    </p>
                  </div>
                </div>

                {/* Bottom Quote */}
                <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border-l-4 border-green-500">
                  <blockquote className="text-lg text-gray-700 italic text-center">
                    "Great software isn't just about what it can do – it's about how effortlessly it helps people achieve their goals."
                  </blockquote>
                  <div className="text-center mt-4">
                    <span className="text-green-600 font-semibold">— My Development Mantra</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
