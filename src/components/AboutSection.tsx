
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

        {/* Philosophy Section - Redesigned to match About Me style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              <span className="text-green-600 font-semibold">My Philosophy</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Creating technology that <span className="text-green-600">serves people</span>
            </h3>
            
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

            {/* Bottom Quote */}
            <div className="p-6 bg-gray-50 rounded-2xl border-l-4 border-green-500">
              <blockquote className="text-lg text-gray-700 italic">
                "Great software isn't just about what it can do – it's about how effortlessly it helps people achieve their goals."
              </blockquote>
              <div className="mt-4">
                <span className="text-green-600 font-semibold">— My Development Mantra</span>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div>
            <div className="grid grid-cols-1 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Clean Code</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Writing maintainable, scalable code that stands the test of time and grows with your business.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">User-Centered</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Every decision is made with the end user in mind, ensuring intuitive and delightful experiences.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Staying ahead of the curve with modern technologies while ensuring reliability and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
