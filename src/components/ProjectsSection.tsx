
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ExternalLink, Code, Smartphone, Globe, Music } from "lucide-react";

const projects = [
  {
    title: "dobrymiodek.pl",
    description: "Professional website showcasing quality honey products and beekeeping services. Features modern design with product catalog and business information.",
    image: "https://dobrymiodek.pl/",
    tech: ["WordPress"],
    category: "Business Website",
    icon: Globe,
    status: "Live",
    isReal: true
  },
  {
    title: "Tibetan Music Portal",
    description: "Interactive web application dedicated to Tibetan music culture. Built with pure HTML, CSS, and JavaScript featuring audio players and cultural information.",
    image: "/placeholder.svg",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "Music Platform",
    icon: Music,
    status: "Demo",
    isReal: false
  },
  {
    title: "Your Project Here",
    description: "This could be your website! I invite you to collaborate and bring your unique project ideas to life. Whether it's a business website, portfolio, or web application - let's create something amazing together.",
    image: "/placeholder.svg",
    tech: [],
    category: "Custom Project",
    icon: Code,
    status: "Available",
    isReal: false,
    isPlaceholder: true
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 relative bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></div>
            <span className="text-[#4CAF50] font-semibold">Portfolio</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcase of recent projects that demonstrate my expertise in full-stack development, 
            design, and business problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`group relative overflow-hidden backdrop-blur-md border shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
              project.isPlaceholder 
                ? 'bg-white/20 border-white/30' 
                : 'bg-gray-50/80 border-gray-200/50'
            }`}>
              {/* Background gradients - different for placeholder vs regular cards */}
              {project.isPlaceholder ? (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-white/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/10 via-transparent to-emerald-400/10"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/10 via-[#4CAF50]/5 to-slate-600/10"></div>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100/40 via-gray-50/30 to-white/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-200/20 via-transparent to-gray-300/15"></div>
                </>
              )}
              
              {/* Project Image/Icon */}
              <div className={`relative h-48 backdrop-blur-sm flex items-center justify-center border-b ${
                project.isPlaceholder 
                  ? 'bg-gradient-to-br from-gray-50/40 to-gray-100/40 border-white/30' 
                  : 'bg-gradient-to-br from-gray-100/60 to-gray-200/40 border-gray-300/30'
              }`}>
                <project.icon className={`h-16 w-16 opacity-80 ${
                  project.isPlaceholder ? 'text-[#4CAF50]' : 'text-gray-500'
                }`} />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className={`backdrop-blur-md ${
                    project.isPlaceholder 
                      ? 'bg-[#4CAF50]/30 text-[#4CAF50] border-[#4CAF50]/50'
                      : project.status === 'Live' 
                        ? 'bg-gray-300/40 text-gray-600 border-gray-400/50' 
                        : 'bg-gray-200/40 text-gray-500 border-gray-300/50'
                  }`}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className={`pb-4 relative z-10 ${project.isPlaceholder ? 'text-center' : ''}`}>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className={`text-xs backdrop-blur-sm ${
                    project.isPlaceholder 
                      ? 'border-white/40 text-gray-700 bg-white/30'
                      : 'border-gray-300/40 text-gray-600 bg-gray-100/30'
                  }`}>
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className={`text-xl font-bold group-hover:transition-colors ${
                  project.isPlaceholder 
                    ? 'text-[#4CAF50] group-hover:text-[#45a049]' 
                    : 'text-gray-700 group-hover:text-gray-900'
                }`}>
                  {project.title}
                </CardTitle>
                <CardDescription className={project.isPlaceholder ? 'text-gray-700' : 'text-gray-600'}>
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <HoverCard key={techIndex}>
                        <HoverCardTrigger asChild>
                          <Badge variant="secondary" className="bg-gray-400/90 text-white text-sm font-semibold border-none backdrop-blur-sm cursor-pointer hover:bg-gray-500 transition-colors px-3 py-1 shadow-lg">
                            {tech}
                          </Badge>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-auto p-2">
                          <p className="text-sm font-medium">{tech}</p>
                        </HoverCardContent>
                      </HoverCard>
                    ))}
                  </div>
                )}
                
                <div className="flex space-x-2">
                  {project.isPlaceholder ? (
                    <Button className="flex-1 flex items-center justify-center space-x-2 bg-[#4CAF50] hover:bg-orange-500 text-white transition-colors duration-300">
                      <span>Let's Work Together</span>
                    </Button>
                  ) : (
                    <>
                      <Button variant="outline" size="lg" className="flex-1 border-gray-400/40 hover:bg-gray-100 hover:border-gray-300 text-gray-600 hover:text-gray-700 transition-all bg-gray-50/30 backdrop-blur-sm flex items-center space-x-2">
                        <ExternalLink className="h-4 w-4" />
                        <span>{project.isReal ? 'Visit Site' : 'Live Demo'}</span>
                      </Button>
                      {!project.isReal && (
                        <Button variant="outline" size="lg" className="border-gray-400/40 hover:bg-gray-100 hover:border-gray-300 text-gray-600 hover:text-gray-700 transition-all bg-gray-50/30 backdrop-blur-sm">
                          <Code className="h-4 w-4" />
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
