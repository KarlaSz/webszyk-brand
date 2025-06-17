import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Clock, Building2 } from "lucide-react";

const skills = [
  "React i TypeScript", "Node.js i Express", "Python i Django", "PostgreSQL i MongoDB",
  "AWS i Docker", "Figma i systemy projektowe", "Tworzenie aplikacji mobilnych", "Tworzenie API",
  "DevOps i CI/CD", "Optymalizacja wydajności", "Najlepsze praktyki bezpieczeństwa", "Metodyka Agile"
];

const stats = [
  { icon: Users, label: "Zadowolonych klientów", value: "50+" },
  { icon: CheckCircle, label: "Zrealizowanych projektów", value: "100+" },
  { icon: Clock, label: "Lat doświadczenia", value: "8+" },
  { icon: Award, label: "Opanowanych technologii", value: "20+" }
];

const companies = [
  { name: "TechCorp", role: "Starszy programista full-stack", period: "2022–2024" },
  { name: "StartupXYZ", role: "Główny programista", period: "2020–2022" },
  { name: "Agencja cyfrowa", role: "Frontend developer", period: "2018–2020" },
  { name: "Freelance", role: "Niezależny konsultant", period: "2016–2018" }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-green-600 font-semibold">O mnie</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Twój zaufany partner technologiczny
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Z ponad 8-letnim doświadczeniem w tworzeniu aplikacji full-stack, pomogłem dziesiątkom 
                firm i przedsiębiorców przekształcić pomysły w udane produkty cyfrowe. Od startupów 
                po dojrzałe firmy – zapewniam wiedzę techniczną potrzebną do tworzenia, skalowania 
                i utrzymania nowoczesnych aplikacji internetowych.
              </p>

              <p>
                Moje podejście łączy doskonałość techniczną ze zrozumieniem biznesu. Nie tylko piszę kod – 
                współpracuję z Tobą, aby zrozumieć Twoje cele, rozwiązać realne problemy i dostarczyć 
                rozwiązania, które przynoszą wyniki. Niezależnie czy potrzebujesz kompletnej aplikacji webowej, 
                mobilnej czy stałego wsparcia – jestem tu, by pomóc Ci osiągnąć sukces.
              </p>

              <p>
                Wierzę w czysty, łatwy do utrzymania kod, nowoczesne praktyki programistyczne i tworzenie 
                doświadczeń, które zachwycają użytkowników. Każdy projekt to okazja, by zbudować coś wyjątkowego – wspólnie.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                  <stat.icon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Sekcja firm */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-white mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Building2 className="h-5 w-5 text-green-600 mr-2" />
                  Doświadczenie zawodowe
                </h3>
                <div className="space-y-3">
                  {companies.map((company, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-green-100 last:border-b-0">
                      <div>
                        <div className="font-medium text-gray-900">{company.name}</div>
                        <div className="text-sm text-gray-600">{company.role}</div>
                      </div>
                      <div className="text-sm text-green-600 font-medium">{company.period}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  Ekspertyza techniczna
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-white text-gray-700 hover:bg-green-100 hover:text-green-800 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Jakość przede wszystkim</h4>
                  <p className="text-gray-600 text-sm">
                    Każda linia kodu tworzona jest z myślą o utrzymaniu, bezpieczeństwie i wydajności.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Współpraca</h4>
                  <p className="text-gray-600 text-sm">
                    Pracuję z Tobą na każdym etapie, zapewniając transparentność i spójność.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
