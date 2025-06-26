
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
    tech: [],
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
            <Card key={index} className={`group relative overflow-hidden backdrop-blur-md bg-white/30 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${project.isPlaceholder ? 'border-dashed border-[#4CAF50]/50 bg-[#4CAF50]/5' : ''}`}>
              {/* Glassmorphism Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent"></div>
              <div className={`absolute inset-0 bg-gradient-to-tr ${project.isPlaceholder ? 'from-[#4CAF50]/10 via-transparent to-emerald-400/10' : 'from-[#4CAF50]/5 via-transparent to-emerald-400/5'}`}></div>
              
              {/* Project Image/Icon */}
              <div className={`relative h-48 ${project.isPlaceholder ? 'bg-gradient-to-br from-[#4CAF50]/10 to-emerald-100/20' : 'bg-gradient-to-br from-gray-50/60 to-gray-100/60'} backdrop-blur-sm flex items-center justify-center border-b border-white/20`}>
                <project.icon className={`h-16 w-16 ${project.isPlaceholder ? 'text-[#4CAF50]' : 'text-[#4CAF50]'} opacity-80`} />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className={`backdrop-blur-md ${
                    project.status === 'Live' ? 'bg-[#4CAF50]/20 text-[#4CAF50] border-[#4CAF50]/40' : 
                    project.status === 'Available' ? 'bg-[#4CAF50]/20 text-[#4CAF50] border-[#4CAF50]/40' :
                    'bg-orange-200/30 text-orange-700 border-orange-300/40'
                  }`}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className={`pb-4 relative z-10 ${project.isPlaceholder ? 'text-center' : ''}`}>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs border-white/30 text-gray-700 bg-white/20 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className={`text-xl font-bold text-gray-900 group-hover:text-[#4CAF50] transition-colors ${project.isPlaceholder ? 'text-[#4CAF50]' : ''}`}>
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-700 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                {project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <HoverCard key={techIndex}>
                        <HoverCardTrigger asChild>
                          <Badge variant="secondary" className="bg-[#4CAF50]/80 text-white text-sm font-semibold border-none backdrop-blur-sm cursor-pointer hover:bg-[#4CAF50] transition-colors px-3 py-1 shadow-md">
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
                    <Button variant="solid" size="lg" className="flex-1 flex items-center justify-center space-x-2">
                      <span>Let's Work Together</span>
                    </Button>
                  ) : (
                    <>
                      <Button variant="outline" size="lg" className="flex-1 border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-all bg-white flex items-center space-x-2">
                        <ExternalLink className="h-4 w-4" />
                        <span>{project.isReal ? 'Visit Site' : 'Live Demo'}</span>
                      </Button>
                      {!project.isReal && (
                        <Button variant="outline" size="lg" className="border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-900 transition-all bg-white">
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
