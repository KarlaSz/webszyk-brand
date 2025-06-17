import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "E-mail",
    description: "Napisz do mnie w każdej chwili",
    contact: "hello@techpartner.com",
    action: "Wyślij wiadomość"
  },
  {
    icon: Phone,
    title: "Telefon",
    description: "Porozmawiajmy o Twoim projekcie",
    contact: "+1 (555) 123-4567",
    action: "Zadzwoń teraz"
  },
  {
    icon: MessageCircle,
    title: "Czat na żywo",
    description: "Masz pytanie? Porozmawiajmy",
    contact: "Dostępny 9:00 – 18:00 EST",
    action: "Rozpocznij czat"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Stwórzmy coś niesamowitego razem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gotowy na rozpoczęcie projektu? Chętnie poznam Twoje pomysły i porozmawiam, jak możemy je zrealizować z wykorzystaniem nowoczesnych technologii.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <method.icon className="h-8 w-8 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{method.title}</CardTitle>
                <p className="text-gray-600">{method.description}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold text-gray-900 mb-4">{method.contact}</p>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-green-50 group-hover:border-green-200 group-hover:text-green-600 transition-colors"
                >
                  {method.action}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Wyślij wiadomość</CardTitle>
              <p className="text-gray-600">
                Opowiedz mi o swoim projekcie — odpowiem w ciągu 24 godzin.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Imię *</Label>
                  <Input id="firstName" placeholder="Jan" className="border-gray-200 focus:border-green-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nazwisko *</Label>
                  <Input id="lastName" placeholder="Kowalski" className="border-gray-200 focus:border-green-500" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input id="email" type="email" placeholder="jan@example.com" className="border-gray-200 focus:border-green-500" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Firma</Label>
                <Input id="company" placeholder="Nazwa firmy" className="border-gray-200 focus:border-green-500" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budżet projektu</Label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-green-500">
                  <option value="">Wybierz zakres budżetu</option>
                  <option value="5k-10k">$5,000 – $10,000</option>
                  <option value="10k-25k">$10,000 – $25,000</option>
                  <option value="25k-50k">$25,000 – $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Szczegóły projektu *</Label>
                <Textarea
                  id="message"
                  placeholder="Opisz projekt, cele oraz oczekiwany termin realizacji..."
                  rows={4}
                  className="border-gray-200 focus:border-green-500"
                />
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                Wyślij wiadomość
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-600 to-green-700 text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Dlaczego warto ze mną współpracować?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>8+ lat doświadczenia w programowaniu full-stack</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Udokumentowane 100+ zrealizowanych projektów</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Jasna komunikacja i przejrzysty proces</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span>Stałe wsparcie i utrzymanie w pakiecie</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                  <h4 className="font-bold text-gray-900">Czas odpowiedzi</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Na nowe zapytania odpowiadam zazwyczaj w ciągu 2–4 godzin w godzinach pracy.
                </p>
                <div className="text-sm text-gray-500">
                  <p>Godziny pracy: Pon–Pt, 9:00 – 18:00 EST</p>
                  <p>Wsparcie awaryjne: dostępne 24/7</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
