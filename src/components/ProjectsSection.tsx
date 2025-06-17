import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Smartphone, Globe } from "lucide-react";

const projects = [
  {
    title: "Platforma e-commerce",
    description: "Rozwiązanie e-commerce full-stack zbudowane z użyciem React, Node.js i PostgreSQL. Funkcje obejmują integrację płatności, zarządzanie magazynem i panel administratora.",
    image: "/placeholder.svg",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    category: "Aplikacja webowa",
    icon: Globe,
    status: "Online"
  },
  {
    title: "Aplikacja zdrowotna",
    description: "Wieloplatformowa aplikacja mobilna do zarządzania pacjentami i telemedycyny. Stworzona w React Native i zintegrowana z medycznymi API.",
    image: "/placeholder.svg",
    tech: ["React Native", "Firebase", "REST API", "Redux"],
    category: "Aplikacja mobilna",
    icon: Smartphone,
    status: "W trakcie"
  },
  {
    title: "Dashboard SaaS",
    description: "Dashboard analityczny dla biznesu z wizualizacją danych w czasie rzeczywistym i funkcjami raportowania.",
    image: "/placeholder.svg",
    tech: ["React", "D3.js", "Python", "Django", "AWS"],
    category: "Platforma SaaS",
    icon: Code,
    status: "Online"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
            <span className="text-green-600 font-semibold">Portfolio</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Wybrane projekty
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Przegląd ostatnich projektów pokazujących moje umiejętności w zakresie programowania full-stack, projektowania i rozwiązywania problemów biznesowych.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2 overflow-hidden">
              {/* Obrazek projektu (placeholder lub ikona) */}
              <div className="relative h-48 bg-gradient-to-br from-green-50 to-purple-50 flex items-center justify-center">
                <project.icon className="h-16 w-16 text-green-600 opacity-80" />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className={`${project.status === 'Online' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1 border-green-200 hover:bg-green-50">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Zobacz demo
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:bg-gray-50">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-green-200 hover:bg-green-50">
            Zobacz wszystkie projekty
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
