import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Globe, Zap, Users, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Tworzenie stron internetowych",
    description: "Indywidualne strony i aplikacje webowe zbudowane przy użyciu nowoczesnych technologii takich jak React, TypeScript i Node.js.",
    features: ["Responsywny design", "Optymalizacja SEO", "Szybkie działanie", "Bezpieczeństwo i skalowalność"],
    color: "bg-green-100 text-green-600"
  },
  {
    icon: Smartphone,
    title: "Tworzenie aplikacji mobilnych",
    description: "Natywne i wieloplatformowe aplikacje mobilne zapewniające płynne doświadczenie użytkownika na wszystkich urządzeniach.",
    features: ["iOS i Android", "React Native", "Progresywne aplikacje webowe", "Publikacja w sklepach"],
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: Code,
    title: "Projektowanie UI/UX",
    description: "Piękne, intuicyjne projekty, które konwertują użytkowników i zapewniają wyjątkowe doświadczenia.",
    features: ["Badania użytkowników", "Makiety", "Prototypy", "Systemy projektowe"],
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: Zap,
    title: "Doradztwo technologiczne",
    description: "Strategiczne doradztwo technologiczne wspierające podejmowanie trafnych decyzji i optymalizację infrastruktury cyfrowej.",
    features: ["Stos technologiczny", "Planowanie architektury", "Optymalizacja wydajności", "Strategia cyfrowa"],
    color: "bg-orange-100 text-orange-600"
  },
  {
    icon: Users,
    title: "Wzmocnienie zespołu",
    description: "Skaluj swój zespół o doświadczonych programistów full-stack i specjalistyczne kompetencje.",
    features: ["Zdalna współpraca", "Rozwój w Agile", "Code review", "Transfer wiedzy"],
    color: "bg-pink-100 text-pink-600"
  },
  {
    icon: CheckCircle,
    title: "Stałe wsparcie",
    description: "Ciągła konserwacja, aktualizacje i pomoc techniczna, aby Twoje aplikacje działały bez zakłóceń.",
    features: ["Monitoring 24/7", "Poprawki błędów", "Nowe funkcje", "Łatki bezpieczeństwa"],
    color: "bg-green-100 text-green-600"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Kompleksowe usługi technologiczne
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Od pomysłu po wdrożenie — oferuję kompleksowe rozwiązania technologiczne, które wspierają rozwój Twojej firmy w świecie cyfrowym.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                  Dowiedz się więcej
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Gotowy na rozpoczęcie projektu?
            </h3>
            <p className="text-gray-600 mb-6">
              Porozmawiajmy o tym, jak mogę pomóc zrealizować Twoją wizję za pomocą nowoczesnych technologii.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Umów konsultację
              </Button>
              <Button variant="outline" size="lg" className="border-green-200 hover:bg-green-50">
                Zobacz portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
