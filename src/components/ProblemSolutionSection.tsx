
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

const ProblemSolutionSection = () => {
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
            Sprawdź, czy któryś z nich brzmi znajomo.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-red-50/80 hover:backdrop-blur-md hover:border-red-200">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-100 transition-colors duration-300">
                    <challenge.icon className="h-8 w-8 text-gray-600 group-hover:text-red-500 transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl mb-4">{challenge.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{challenge.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
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
