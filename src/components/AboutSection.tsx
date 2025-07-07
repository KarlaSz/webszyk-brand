
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Target, Award, Users, Code, Heart, Lightbulb } from "lucide-react";

const AboutSection = () => {
  const philosophyCards = [
    {
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=144&h=144&fit=crop&crop=center",
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time and grows with your business."
    },
    {
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=144&h=144&fit=crop&crop=center",
      title: "User-Centered",
      description: "Every decision is made with the end user in mind, ensuring intuitive and delightful experiences."
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=144&h=144&fit=crop&crop=center",
      title: "Innovation",
      description: "Staying ahead of the curve with modern technologies while ensuring reliability and performance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-[#04e6a5] rounded-full animate-pulse"></div>
            <span className="text-[#04e6a5] font-semibold text-lg">My Philosophy</span>
            <div className="w-3 h-3 bg-[#04e6a5] rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Crafting Digital Excellence
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            With over 8 years of experience in full-stack development, I transform ideas into 
            powerful digital solutions that drive real business results.
          </p>
        </div>

        {/* Mobile 2-Column Grid */}
        <div className="grid grid-cols-1 gap-6 mb-16 md:hidden px-2">
          {philosophyCards.map((card, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:bg-white/80">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-xl overflow-hidden border border-gray-200/40 group-hover:border-gray-300/60 transition-all duration-300">
                      <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{card.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop 3 Column Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {philosophyCards.map((card, index) => (
            <Card key={index} className="bg-white/70 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:bg-white/80">
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <div className="w-36 h-36 mx-auto rounded-xl overflow-hidden border border-gray-200/40 group-hover:border-gray-300/60 transition-all duration-300">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Philosophy Content Section */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-[#04e6a5] rounded-full animate-pulse"></div>
            <span className="text-[#04e6a5] font-semibold">A proven approach that delivers results</span>
          </div>
          
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
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
      </div>
    </section>
  );
};

export default AboutSection;
