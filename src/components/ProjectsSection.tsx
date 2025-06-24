import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ExternalLink, Code, Smartphone, Globe } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include payment integration, inventory management, and admin dashboard.",
    image: "/placeholder.svg",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    category: "Web Application",
    icon: Globe,
    status: "Live"
  },
  {
    title: "Healthcare Mobile App",
    description: "Cross-platform mobile app for patient management and telemedicine. Built with React Native and integrated with medical APIs.",
    image: "/placeholder.svg",
    tech: ["React Native", "Firebase", "REST APIs", "Redux"],
    category: "Mobile App",
    icon: Smartphone,
    status: "In Development"
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard for business intelligence with real-time data visualization and reporting features.",
    image: "/placeholder.svg",
    tech: ["React", "D3.js", "Python", "Django", "AWS"],
    category: "SaaS Platform",
    icon: Code,
    status: "Live"
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
            <Card key={index} className="group relative overflow-hidden backdrop-blur-md bg-white/30 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              {/* Glassmorphism Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/5 via-transparent to-emerald-400/5"></div>
              
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-50/60 to-gray-100/60 backdrop-blur-sm flex items-center justify-center border-b border-white/20">
                <project.icon className="h-16 w-16 text-[#4CAF50] opacity-80" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className={`backdrop-blur-md ${project.status === 'Live' ? 'bg-[#4CAF50]/20 text-[#4CAF50] border-[#4CAF50]/40' : 'bg-orange-200/30 text-orange-700 border-orange-300/40'}`}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs border-white/30 text-gray-700 bg-white/20 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#4CAF50] transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-700 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
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
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1 border-gray-300 text-gray-700 hover:border-[#4CAF50] hover:text-[#4CAF50] hover:bg-[#4CAF50]/10 transition-all duration-200 bg-white">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:border-[#4CAF50] hover:text-[#4CAF50] hover:bg-[#4CAF50]/10 transition-all duration-200 bg-white">
                    View Code
                  </Button>
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
