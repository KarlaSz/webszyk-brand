
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Play, ArrowRight } from "lucide-react";

const ImageSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></div>
            <span className="text-[#4CAF50] font-semibold">My Story</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            From challenges to solutions
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every project tells a story. Here's how I transform complex problems into elegant solutions that make a real difference.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-100 mb-12">
          <div className="aspect-[16/9] relative">
            {/* Placeholder for main image */}
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80"
              alt="Developer working on code"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Clean Code, Real Results</h3>
                <p className="text-white/90 mb-4">Building applications that solve real-world problems with elegant, maintainable code.</p>
                <Button variant="outline" className="bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 text-white">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Story
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of smaller images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="group overflow-hidden border border-gray-200 hover:border-[#4CAF50]/30 transition-all duration-300 hover:shadow-lg">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                alt="Programming workspace"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Problem Solving</h4>
              <p className="text-gray-600 text-sm">Breaking down complex challenges into manageable solutions.</p>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden border border-gray-200 hover:border-[#4CAF50]/30 transition-all duration-300 hover:shadow-lg">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Collaborative development"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h4>
              <p className="text-gray-600 text-sm">Working closely with clients to understand their vision.</p>
            </CardContent>
          </Card>

          <Card className="group overflow-hidden border border-gray-200 hover:border-[#4CAF50]/30 transition-all duration-300 hover:shadow-lg">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
                alt="Code development"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600 text-sm">Using cutting-edge technologies to deliver exceptional results.</p>
            </CardContent>
          </Card>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#4CAF50] mb-2">100+</div>
            <div className="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#4CAF50] mb-2">8+</div>
            <div className="text-gray-600 font-medium">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#4CAF50] mb-2">50+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#4CAF50] mb-2">99%</div>
            <div className="text-gray-600 font-medium">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
