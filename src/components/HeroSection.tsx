import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Palette, Database, Smartphone, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Tło gradientowe */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-purple-50 opacity-50"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316a34a' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-green-100 to-purple-100 p-2 rounded-lg">
                <Code className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-green-600 font-semibold">Partner technologiczny Full-Stack</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-green-600">Web</span><span className="text-purple-600">Szyk</span>
              <span className="text-green-600 block text-3xl lg:text-4xl font-medium mt-2">Tworzenie i projektowanie rozwiązań cyfrowych</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Przekształć swoje pomysły w wyjątkowe doświadczenia cyfrowe. Pomagam firmom i przedsiębiorcom tworzyć 
              <span className="text-green-600 font-semibold"> nowoczesne strony internetowe</span>, 
              <span className="text-purple-600 font-semibold"> aplikacje mobilne</span> i zapewniam kompleksowe wsparcie technologiczne z 
              <span className="text-green-600 font-semibold"> naciskiem na cele biznesowe</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-lg px-8 py-6 shadow-lg">
                Rozpocznij projekt
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-green-200 hover:bg-green-50 hover:border-purple-300 transition-all">
                Zobacz realizacje
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-green-600" />
                <span>Szybka realizacja</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="h-4 w-4 text-green-600" />
                <span>Czysty kod</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                <span>Wsparcie 24/7</span>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-8 animate-fade-in">
            <div className="relative">
              {/* Diamentowe karty z mocnymi stronami */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rotate-45 rounded-lg shadow-2xl flex items-center justify-center animate-pulse">
                  <div className="transform -rotate-45 text-white text-center">
                    <div className="w-16 h-16 bg-white rounded-full mx-auto mb-1 flex items-center justify-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">WS</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold">WebSzyk</span>
                  </div>
                </div>

                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                  <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-500 hover:shadow-xl transition-shadow min-w-[140px]">
                    <Palette className="h-6 w-6 text-green-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 text-sm">UI/UX Design</h3>
                    <p className="text-xs text-gray-600">Piękne interfejsy</p>
                  </div>
                </div>

                <div className="absolute top-1/2 right-0 transform translate-x-4 -translate-y-1/2 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
                  <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-500 hover:shadow-xl transition-shadow min-w-[140px]">
                    <Database className="h-6 w-6 text-green-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 text-sm">Backend Dev</h3>
                    <p className="text-xs text-gray-600">Solidne systemy</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
                  <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-500 hover:shadow-xl transition-shadow min-w-[140px]">
                    <Smartphone className="h-6 w-6 text-green-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 text-sm">Aplikacje mobilne</h3>
                    <p className="text-xs text-gray-600">Wieloplatformowe</p>
                  </div>
                </div>

                <div className="absolute top-1/2 left-0 transform -translate-x-4 -translate-y-1/2 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
                  <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-green-500 hover:shadow-xl transition-shadow min-w-[140px]">
                    <Code className="h-6 w-6 text-green-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 text-sm">Frontend</h3>
                    <p className="text-xs text-gray-600">React i nowoczesny JS</p>
                  </div>
                </div>

                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}>
                  <div className="bg-white rounded-xl shadow-lg p-4 border-l-4 border-purple-500 hover:shadow-xl transition-shadow min-w-[120px]">
                    <TrendingUp className="h-5 w-5 text-purple-600 mb-1" />
                    <h3 className="font-semibold text-gray-900 text-xs">Myślenie biznesowe</h3>
                    <p className="text-xs text-gray-600">Dobre praktyki</p>
                  </div>
                </div>
              </div>

              {/* Dodatkowe elementy dekoracyjne */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl opacity-60 animate-pulse delay-1000"></div>
              <div className="absolute top-1/4 -right-8 w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-70 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
