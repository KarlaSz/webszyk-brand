
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle, DollarSign, Clock, Users, TrendingDown, Smartphone, CheckCircle, Zap, Target, Shield, Rocket, MessageCircle, ArrowDown } from "lucide-react";

const challenges = [
  {
    icon: Clock,
    title: "Strona wolno działa",
    description: "użytkownicy odchodzą po 3 sekundach",
    color: "text-orange-500"
  },
  {
    icon: DollarSign,
    title: "Utrzymanie systemu kosztuje fortunę", 
    description: "Wysokie koszty utrzymania",
    color: "text-orange-600"
  },
  {
    icon: AlertCircle,
    title: "Przestarzała technologia",
    description: "dziurawa jak ser",
    color: "text-orange-500"
  },
  {
    icon: Users,
    title: "Strona trudna w obsłudze",
    description: "użytkownik się gubi",
    color: "text-orange-600"
  },
  {
    icon: TrendingDown,
    title: "Niskie konwersje",
    description: "Tracone okazje biznesowe",
    color: "text-orange-500"
  },
  {
    icon: Smartphone,
    title: "Strona nie działa dobrze na telefonach",
    description: "Utracony ruch mobilny",
    color: "text-orange-600"
  }
];

const solutions = [
  {
    icon: Zap,
    title: "Błyskawiczne ładowanie",
    description: "mniej niż 2 sekundy"
  },
  {
    icon: Shield,
    title: "Rozsądnie i efektywnie",
    description: "bez marnowania czasu i pieniędzy"
  },
  {
    icon: Rocket,
    title: "Nowoczesna technologia",
    description: "gotowa na przyszłość"
  },
  {
    icon: Target,
    title: "Intuicyjny design",
    description: "Przejrzyste, angażujące doświadczenie użytkownika"
  },
  {
    icon: CheckCircle,
    title: "Skupienie na efektach",
    description: "projektuję tak, żeby strona działała na Ciebie"
  },
  {
    icon: MessageCircle,
    title: "Mobile-First",
    description: "Idealnie na wszystkich urządzeniach"
  }
];

const ProblemSolutionSection = () => {
  return (
    <section className="relative py-16 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></div>
            <span className="text-[#4CAF50] font-semibold">Od wyzwania do rozwiązania</span>
            <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></div>
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
              <ArrowDown className="h-5 w-5 text-[#4CAF50] group-hover:translate-y-1 transition-transform animate-bounce" />
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
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#4CAF50] rounded-full opacity-80"></div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Co robię z tym w WebSzyk
            </h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="group relative overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-50/80 hover:backdrop-blur-md hover:border-green-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#4CAF50]/20">
                        <solution.icon className="h-6 w-6 text-[#4CAF50]" />
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
            <div className="w-1 h-16 bg-gradient-to-b from-[#4CAF50] to-transparent rounded-full"></div>
            <ArrowDown className="h-8 w-8 text-[#4CAF50] animate-bounce" />
            <div className="w-1 h-16 bg-gradient-to-t from-[#4CAF50] to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
