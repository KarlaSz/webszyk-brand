import { Card, CardContent } from "@/components/ui/card";
import { Play, User, Award, Coffee } from "lucide-react";

const AboutMeSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Sekcja wideo */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer">
              {/* Placeholder wideo */}
              <div className="aspect-video bg-gradient-to-br from-green-100 to-purple-100 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <Play className="h-8 w-8 text-green-600 ml-1" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Poznaj WebSzyk</h3>
                  <p className="text-white text-sm opacity-90">Obejrzyj moją historię i podejście</p>
                </div>

                {/* Elementy animowane */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                <div className="absolute top-1/3 left-8 w-4 h-4 bg-white bg-opacity-30 rounded-full animate-bounce delay-1000"></div>
              </div>

              {/* Informacje o wideo */}
              <div className="p-6 bg-white">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Film wprowadzający</h4>
                    <p className="text-gray-600 text-sm">3 min • Za kulisami</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sekcja treści */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              <span className="text-green-600 font-semibold">O mnie</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Cześć, jestem osobą stojącą za <span className="text-green-600">Web</span><span className="text-purple-600">Szyk</span>
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Z ponad 8-letnim doświadczeniem w tworzeniu oprogramowania full-stack przeszedłem drogę od 
                ciekawego programisty do zaufanego partnera technologicznego dla firm z całego świata. 
                Moja droga rozpoczęła się od prostego przekonania: 
                <span className="text-green-600 font-semibold"> technologia powinna rozwiązywać realne problemy biznesowe</span>.
              </p>

              <p>
                Nie tylko piszę kod – współpracuję z Tobą, by zrozumieć Twoją wizję, przeanalizować rynek 
                i stworzyć rozwiązania, które przynoszą konkretne efekty. Każdy projekt to szansa na stworzenie 
                czegoś, co ma znaczenie – usprawnienie procesów, dotarcie do nowych klientów lub realizacja innowacyjnych pomysłów.
              </p>

              <p>
                Gdy nie koduję, odkrywam nowe technologie, mentoruję młodszych programistów 
                lub cieszę się dobrą kawą, szkicując kolejne pomysły.
              </p>
            </div>

            {/* Szybkie statystyki */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-4 text-center">
                  <Award className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">50+</div>
                  <div className="text-xs text-gray-600">Zadowolonych klientów</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-4 text-center">
                  <Coffee className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">8+</div>
                  <div className="text-xs text-gray-600">Lat doświadczenia</div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-4 text-center">
                  <User className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-xs text-gray-600">Zrealizowanych projektów</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
