
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowRight, AlertCircle, DollarSign, Clock, Users, TrendingDown, Smartphone, Play, User, Linkedin, Github, ChevronDown } from "lucide-react";
import { useState } from "react";

const challenges = [
  {
    icon: Clock,
    title: "Strona działa wolno",
    description: "po kilku sekundach nikt nie czeka"
  },
  {
    icon: DollarSign,
    title: "Wysokie koszty utrzymania", 
    description: "System pochłania zbyt dużo pieniędzy"
  },
  {
    icon: AlertCircle,
    title: "Przestarzała technologia",
    description: "łatwo o błędy i problemy z bezpieczeństwem"
  },
  {
    icon: Users,
    title: "Interfejs nieczytelny",
    description: "trudno się połapać"
  },
  {
    icon: TrendingDown,
    title: "Zbyt mało konwersji",
    description: "potencjał nie jest wykorzystany"
  },
  {
    icon: Smartphone,
    title: "Na telefonie się rozjeżdża",
    description: "użytkownicy uciekają"
  }
];

const ProblemSolutionSection = () => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  return (
    <section className="relative py-20 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-[#04e6a5] rounded-full animate-pulse"></div>
            <span className="text-[#04e6a5] font-semibold text-lg">Najczęstsze wyzwania technologiczne</span>
            <div className="w-3 h-3 bg-[#04e6a5] rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Częste problemy
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Każdy z tych problemów może znacząco wpłynąć na sukces Twojego biznesu.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left Column - Problems */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Sprawdź, czy któryś brzmi znajomo:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {challenges.map((challenge, index) => (
                <Card key={index} className="group relative overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-red-50/50 hover:border-red-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors duration-300">
                        <challenge.icon className="h-5 w-5 text-gray-600 group-hover:text-red-500 transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-2">{challenge.title}</h4>
                        <p className="text-gray-600 text-xs leading-relaxed">{challenge.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - About Me with Video */}
          <div>
            <div className="relative">
              <div className="relative bg-gray-100 rounded-2xl shadow-xl overflow-hidden group cursor-pointer border border-gray-200">
                {/* Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[#04e6a5]/20 to-purple-500/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform shadow-lg border border-gray-200">
                      <Play className="h-6 w-6 text-[#04e6a5] ml-1" />
                    </div>
                    <h3 className="text-gray-900 font-semibold text-lg mb-2">Meet WebSzyk</h3>
                    <p className="text-gray-600 text-sm">Watch my story & approach</p>
                  </div>
                  
                  {/* Animated elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-[#04e6a5] rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute top-1/3 left-8 w-4 h-4 bg-gray-300 rounded-full animate-bounce delay-1000"></div>
                </div>
                
                {/* Video info overlay */}
                <div className="p-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-[#04e6a5]/10 rounded-full flex items-center justify-center border border-[#04e6a5]/20">
                      <User className="h-5 w-5 text-[#04e6a5]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">Introduction Video</h4>
                      <p className="text-gray-600 text-xs">3 min • Behind the scenes</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* About Me Expandable Section */}
              <div className="mt-6">
                <Collapsible open={isAboutExpanded} onOpenChange={setIsAboutExpanded}>
                  <CollapsibleTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900 hover:border-[#04e6a5] hover:text-[#04e6a5] transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Read more about me</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isAboutExpanded ? 'rotate-180' : ''}`} />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-6">
                    <div className="space-y-4 text-gray-600 leading-relaxed">
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

                      {/* Social Links */}
                      <div className="flex items-center space-x-4 pt-4">
                        <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900 hover:border-[#04e6a5] hover:text-[#04e6a5] transition-all flex items-center space-x-2">
                          <Linkedin className="h-4 w-4" />
                          <span>LinkedIn</span>
                        </Button>
                        <Button variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900 hover:border-[#04e6a5] hover:text-[#04e6a5] transition-all flex items-center space-x-2">
                          <Github className="h-4 w-4" />
                          <span>GitHub</span>
                        </Button>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#04e6a5]/10 to-emerald-400/10 rounded-3xl p-8 border border-[#04e6a5]/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rozpoznajesz któryś z tych problemów?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Nie musisz z nimi żyć. Każdy z tych problemów ma rozwiązanie, 
              a ja pomogę Ci je wdrożyć.
            </p>
            <Button className="bg-[#04e6a5] hover:bg-[#04e6a5]/90 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Porozmawiajmy o rozwiązaniach
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
