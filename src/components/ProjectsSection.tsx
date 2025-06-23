
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Smartphone, Globe } from "lucide-react";

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
    <section className="py-20 relative" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></div>
            <span className="text-[#4CAF50] font-semibold">Portfolio</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Showcase of recent projects that demonstrate my expertise in full-stack development, 
            design, and business problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-black/20 backdrop-blur-md hover:-translate-y-2 overflow-hidden border border-white/20">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-black/10 to-black/20 flex items-center justify-center border-b border-white/10">
                <project.icon className="h-16 w-16 text-[#4CAF50] opacity-80" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className={`${project.status === 'Live' ? 'bg-[#4CAF50]/20 text-[#4CAF50] border-[#4CAF50]/30' : 'bg-orange-500/20 text-orange-300 border-orange-500/30'} backdrop-blur-sm`}>
                    {project.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs border-white/30 text-white/80 bg-black/10 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-white group-hover:text-[#4CAF50] transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-white/70 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-white/10 text-white/80 text-xs backdrop-blur-sm border border-white/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1 border-[#4CAF50]/30 text-[#4CAF50] hover:bg-[#4CAF50]/10 backdrop-blur-sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:bg-white/10 text-white/80 hover:text-white backdrop-blur-sm">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-[#4CAF50]/30 text-[#4CAF50] hover:bg-[#4CAF50]/10 backdrop-blur-sm">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
