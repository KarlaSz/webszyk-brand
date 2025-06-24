
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Users, Code, Heart, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const coreValues = [
    {
      image: "photo-1461749280684-dccba630e2f6",
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time and grows with your business.",
      color: "blue"
    },
    {
      image: "photo-1518770660439-4636190af475", 
      title: "User-Centered",
      description: "Every decision is made with the end user in mind, ensuring intuitive and delightful experiences.",
      color: "purple"
    },
    {
      image: "photo-1486312338219-ce68d2c6f44d",
      title: "Innovation",
      description: "Staying ahead of the curve with modern technologies while ensuring reliability and performance.",
      color: "amber"
    }
  ];

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

          {/* Core Values Section - With image placeholders instead of icons */}
          <div className="space-y-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:bg-white/80">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden mb-2 group-hover:scale-105 transition-all duration-300 border-2 border-gray-200/40 group-hover:border-gray-300/60">
                        <img 
                          src={`https://images.unsplash.com/${value.image}?w=64&h=64&fit=crop`}
                          alt={value.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
