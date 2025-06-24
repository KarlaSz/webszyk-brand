
import { Card, CardContent } from "@/components/ui/card";

const ProcessSection = () => {
  const processSteps = [
    {
      image: "photo-1649972904349-6e44c42644a7",
      step: "01",
      title: "Discovery",
      description: "Understanding your goals, challenges, and requirements through detailed consultation and analysis."
    },
    {
      image: "photo-1488590528505-98d2b5aba04b", 
      step: "02",
      title: "Development",
      description: "Building with modern technologies, following best practices, and keeping you updated throughout the process."
    },
    {
      image: "photo-1486312338219-ce68d2c6f44d",
      step: "03",
      title: "Launch",
      description: "Testing, deployment, and ongoing support to ensure your solution performs flawlessly."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></div>
              <span className="text-[#4CAF50] font-semibold">My Development Process</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              A proven approach that delivers results
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Every successful project follows a structured process. I've refined my approach over 8+ years 
                to ensure your project is delivered on time, within budget, and exceeds expectations.
              </p>
              
              <p>
                From understanding your unique challenges to launching your solution, I'll guide you 
                through each step with transparency and expertise.
              </p>
            </div>
          </div>

          {/* Process Steps Section */}
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:bg-white/80">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    {/* Step Image and Number */}
                    <div className="flex-shrink-0">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden mb-2 group-hover:scale-105 transition-all duration-300 border-2 border-[#4CAF50]/20 group-hover:border-[#4CAF50]/40">
                        <img 
                          src={`https://images.unsplash.com/${step.image}?w=64&h=64&fit=crop`}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#4CAF50] rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/20">
                          <span className="text-white text-xs font-bold">{step.step}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
