
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle, DollarSign, Clock, Users, TrendingDown, Smartphone, CheckCircle, Zap, Target, Shield, Rocket, MessageCircle } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Slow Loading",
    description: "Users leave after 3 seconds",
    color: "text-red-500"
  },
  {
    icon: DollarSign,
    title: "High Costs", 
    description: "Expensive maintenance",
    color: "text-orange-500"
  },
  {
    icon: Clock,
    title: "Outdated Tech",
    description: "Legacy systems",
    color: "text-amber-500"
  },
  {
    icon: Users,
    title: "Poor UX",
    description: "Confusing navigation",
    color: "text-blue-500"
  },
  {
    icon: TrendingDown,
    title: "Low Conversions",
    description: "Missing opportunities",
    color: "text-purple-500"
  },
  {
    icon: Smartphone,
    title: "No Mobile",
    description: "Lost traffic",
    color: "text-pink-500"
  }
];

const solutions = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Under 2 seconds loading"
  },
  {
    icon: Target,
    title: "Cost-Effective",
    description: "Smart development"
  },
  {
    icon: Rocket,
    title: "Modern Tech",
    description: "Future-proof architecture"
  },
  {
    icon: CheckCircle,
    title: "Intuitive UX",
    description: "Clear & engaging design"
  },
  {
    icon: TrendingDown,
    title: "Conversion Focus",
    description: "Results-driven design"
  },
  {
    icon: Shield,
    title: "Mobile-First",
    description: "Perfect on all devices"
  }
];

const ProblemSolutionSection = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></div>
            <span className="text-[#4CAF50] font-semibold">From Problems to Solutions</span>
            <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            I understand your tech challenges
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform common problems into powerful digital solutions
          </p>
        </div>

        {/* Compact 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Problems Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Common Problems</h3>
            <div className="space-y-3">
              {problems.map((problem, index) => (
                <Card key={index} className="border border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <problem.icon className={`h-4 w-4 ${problem.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm">{problem.title}</h4>
                        <p className="text-xs text-gray-600">{problem.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Arrow Column */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-[#4CAF50]/20 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <ArrowRight className="h-6 w-6 text-[#4CAF50]" />
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-center">
                <div className="bg-white px-2 py-1 rounded-lg shadow-md border border-[#4CAF50]/20 text-xs font-medium text-[#4CAF50]">
                  WebSzyk
                </div>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">My Solutions</h3>
            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <Card key={index} className="border border-[#4CAF50]/20 hover:border-[#4CAF50] transition-all duration-300 hover:shadow-md bg-[#4CAF50]/5">
                  <CardContent className="p-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <solution.icon className="h-4 w-4 text-[#4CAF50]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-900 text-sm">{solution.title}</h4>
                        <p className="text-xs text-gray-600">{solution.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative overflow-hidden">
          {/* Background with gradient and pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50] to-[#45a049]"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/80 via-transparent to-[#4CAF50]/60"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 right-4 w-20 h-20 bg-white/15 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          
          <div className="relative rounded-2xl p-8 lg:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Rocket className="h-6 w-6 text-white" />
                <span className="text-white/90 font-medium">Ready to Transform?</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Let's Build Something Amazing Together
              </h3>
              
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Stop struggling with tech problems. Let's discuss your specific challenges and create a tailored solution that drives real results for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-white text-[#4CAF50] hover:bg-white/90 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Start Your Project Today
                </Button>
                
                <div className="flex items-center space-x-4 text-white/90">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-sm">Free Consultation</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse delay-500"></div>
                    <span className="text-sm">Quick Response</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
