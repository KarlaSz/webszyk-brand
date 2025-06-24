
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, AlertCircle, DollarSign, Clock, Users, TrendingDown, Smartphone, CheckCircle, Zap, Target, Shield, Rocket } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Slow Loading Website",
    description: "Users leave after 3 seconds",
    color: "text-red-500"
  },
  {
    icon: DollarSign,
    title: "High Development Costs", 
    description: "Expensive maintenance & updates",
    color: "text-orange-500"
  },
  {
    icon: Clock,
    title: "Outdated Technology",
    description: "Legacy systems holding you back",
    color: "text-amber-500"
  },
  {
    icon: Users,
    title: "Poor User Experience",
    description: "Confusing navigation & design",
    color: "text-blue-500"
  },
  {
    icon: TrendingDown,
    title: "Low Conversions",
    description: "Missing sales opportunities",
    color: "text-purple-500"
  },
  {
    icon: Smartphone,
    title: "No Mobile Experience",
    description: "Lost mobile traffic",
    color: "text-pink-500"
  }
];

const solutions = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Optimized loading under 2 seconds"
  },
  {
    icon: Target,
    title: "Cost-Effective Solutions",
    description: "Smart development with long-term value"
  },
  {
    icon: Rocket,
    title: "Modern Technology Stack",
    description: "Future-proof, scalable architecture"
  },
  {
    icon: CheckCircle,
    title: "Intuitive User Experience",
    description: "Clear navigation & engaging design"
  },
  {
    icon: TrendingDown,
    title: "Conversion Optimization",
    description: "Strategic design that drives results"
  },
  {
    icon: Shield,
    title: "Mobile-First Design",
    description: "Perfect experience on all devices"
  }
];

const ProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-[#4CAF50] rounded-full animate-pulse"></div>
            <span className="text-[#4CAF50] font-semibold text-lg">From Problems to Solutions</span>
            <div className="w-3 h-3 bg-[#4CAF50] rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            I understand the challenges non-technical business owners and seniors face with technology.
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here's how I help transform common problems into powerful digital solutions.
          </p>
        </div>

        {/* Problems to Solutions Mind Map */}
        <div className="relative">
          {/* Problems Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Common Problems</h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <Card key={index} className="border border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <problem.icon className={`h-6 w-6 ${problem.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{problem.title}</h4>
                          <p className="text-sm text-gray-600">{problem.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Arrow Connector */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-r from-red-100 to-[#4CAF50]/20 rounded-full flex items-center justify-center">
                  <ArrowRight className="h-16 w-16 text-[#4CAF50]" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="bg-white px-4 py-2 rounded-lg shadow-md border border-[#4CAF50]/20 whitespace-nowrap text-sm font-medium text-[#4CAF50]">
                    WebSzyk Transforms
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions Side */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">My Solutions</h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <Card key={index} className="border border-[#4CAF50]/20 hover:border-[#4CAF50] transition-all duration-300 hover:shadow-lg bg-[#4CAF50]/5">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <solution.icon className="h-6 w-6 text-[#4CAF50]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{solution.title}</h4>
                          <p className="text-sm text-gray-600">{solution.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Arrow */}
          <div className="lg:hidden flex justify-center my-8">
            <div className="w-16 h-16 bg-gradient-to-b from-red-100 to-[#4CAF50]/20 rounded-full flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-[#4CAF50] rotate-90" />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#4CAF50]/10 to-[#4CAF50]/5 rounded-2xl p-8 border border-[#4CAF50]/20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your specific challenges and create a tailored solution that drives real results for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
