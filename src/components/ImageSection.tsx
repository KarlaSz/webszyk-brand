
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const ImageSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-2 h-2 bg-[#04e6a5] rounded-full animate-pulse"></div>
            <span className="text-[#04e6a5] font-semibold">My Story</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            From challenges to solutions
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every project tells a story. Here's how I transform complex problems into elegant solutions that make a real difference.
          </p>
        </div>

        {/* Main Image Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gray-100">
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
      </div>
    </section>
  );
};

export default ImageSection;
