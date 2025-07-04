import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle, DollarSign, Clock, Users, TrendingDown, Smartphone, CheckCircle, Zap, Target, Shield, Rocket, MessageCircle, ArrowDown } from "lucide-react";

const challenges = [
  {
    icon: Clock,
    title: "Strona działa wolno",
    description: "po kilku sekundach nikt nie czeka",
    color: "text-orange-500"
  },
  {
    icon: DollarSign,
    title: "Utrzymanie systemu pochłania zbyt dużo pieniędzy", 
    description: "Wysokie koszty utrzymania",
    color: "text-orange-600"
  },
  {
    icon: AlertCircle,
    title: "Przestarzała technologia",
    description: "łatwo o błędy i problemy z bezpieczeństwem",
    color: "text-orange-500"
  },
  {
    icon: Users,
    title: "Interfejs nieczytelny",
    description: "trudno się połapać",
    color: "text-orange-600"
  },
  {
    icon: TrendingDown,
    title: "Zbyt mało konwersji",
    description: "potencjał nie jest wykorzystany",
    color: "text-orange-500"
  },
  {
    icon: Smartphone,
    title: "Na telefonie wszystko się rozjeżdża",
    description: "użytkownicy uciekają",
    color: "text-orange-600"
  }
];

const solutions = [
  {
    icon: Zap,
    title: "Strona ładuje się w mniej niż 2 sekundy",
    description: "błyskawiczne działanie"
  },
  {
    icon: Shield,
    title: "Rozsądne koszty",
    description: "dzięki nowoczesnym metodom tworzenia"
  },
  {
    icon: Rocket,
    title: "Technologie, które będą działać przez lata",
    description: "gotowa na przyszłość"
  },
  {
    icon: Target,
    title: "Intuicyjny projekt",
    description: "bez frustracji"
  },
  {
    icon: CheckCircle,
    title: "Skupienie na efektach",
    description: "i zwiększeniu konwersji"
  },
  {
    icon: MessageCircle,
    title: "Działanie perfekcyjnie",
    description: "na każdym urządzeniu"
  }
];

const ProblemSolutionSection = () => {
  return (
    <section className="relative py-16 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-[#04e6a5] rounded-full animate-pulse"></div>
            <span className="text-[#04e6a5] font-semibold">Od wyzwania do rozwiązania</span>
            <div className="w-2 h-2 bg-[#04e6a5] rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Transforming Tech Challenges
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Every challenge is an opportunity for innovation. Here's how I turn common tech problems into powerful digital solutions.
          </p>

          {/* Engaging Arrow */}
          <div className="flex justify-center">
            <div className="group flex items-center space-x-3 bg-gray-50 border border-gray-200 rounded-full px-6 py-3 hover:bg-gray-100 transition-all duration-300 cursor-pointer">
              <span className="text-gray-700 font-semibold">Find Your Solution Below</span>
              <ArrowDown className="h-5 w-5 text-[#04e6a5] group-hover:translate-y-1 transition-transform animate-bounce" />
            </div>
          </div>
        </div>

        {/* VS Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
          {/* Problems Column */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Częste problemy
            </h3>
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className="group relative overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-red-50/80 hover:backdrop-blur-md hover:border-red-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-200">
                        <challenge.icon className="h-6 w-6 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg mb-2">{challenge.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{challenge.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* VS Section */}
          <div className="lg:col-span-2 flex justify-center items-center">
            <div className="relative">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center shadow-lg border border-gray-200">
                <span className="text-gray-700 font-bold text-lg">VS</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#04e6a5] rounded-full opacity-80"></div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Co robi WebSzyk:
            </h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="group relative overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-50/80 hover:backdrop-blur-md hover:border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#04e6a5]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#04e6a5]/20">
                        <solution.icon className="h-6 w-6 text-[#04e6a5]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-lg mb-2">{solution.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Arrow Below */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-1 h-16 bg-gradient-to-b from-[#04e6a5] to-transparent rounded-full"></div>
            <ArrowDown className="h-8 w-8 text-[#04e6a5] animate-bounce" />
            <div className="w-1 h-16 bg-gradient-to-t from-[#04e6a5] to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
