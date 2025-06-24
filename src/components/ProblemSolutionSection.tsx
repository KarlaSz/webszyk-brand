
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle, DollarSign, Clock, Users, TrendingDown, Smartphone, CheckCircle, Zap, Target, Shield, Rocket, MessageCircle } from "lucide-react";

const challenges = [
  {
    icon: Clock,
    title: "Slow Performance",
    description: "Users abandon after 3 seconds",
    color: "text-orange-500"
  },
  {
    icon: DollarSign,
    title: "High Maintenance Costs", 
    description: "Expensive legacy systems",
    color: "text-red-500"
  },
  {
    icon: AlertCircle,
    title: "Outdated Technology",
    description: "Security vulnerabilities",
    color: "text-amber-500"
  },
  {
    icon: Users,
    title: "Poor User Experience",
    description: "Confusing interfaces",
    color: "text-purple-500"
  },
  {
    icon: TrendingDown,
    title: "Low Conversions",
    description: "Missing opportunities",
    color: "text-red-600"
  },
  {
    icon: Smartphone,
    title: "Mobile Issues",
    description: "Lost mobile traffic",
    color: "text-blue-500"
  }
];

const solutions = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-2 second loading times"
  },
  {
    icon: Shield,
    title: "Cost-Effective",
    description: "Smart, efficient development"
  },
  {
    icon: Rocket,
    title: "Modern Architecture",
    description: "Future-proof technology stack"
  },
  {
    icon: Target,
    title: "Intuitive Design",
    description: "Clear, engaging user experience"
  },
  {
    icon: CheckCircle,
    title: "Conversion Focused",
    description: "Results-driven optimization"
  },
  {
    icon: MessageCircle,
    title: "Mobile-First",
    description: "Perfect across all devices"
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
            <span className="text-[#4CAF50] font-semibold">From Challenge to Innovation</span>
            <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Transforming Tech Challenges
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every challenge is an opportunity for innovation. Here's how I turn common tech problems into powerful digital solutions.
          </p>
        </div>

        {/* Challenges Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Common Challenges I Help Solve
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="group relative overflow-hidden backdrop-blur-md bg-white/70 border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-50/30 via-transparent to-gray-100/20"></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/80 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/40 backdrop-blur-sm shadow-md">
                      <challenge.icon className={`h-6 w-6 ${challenge.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{challenge.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{challenge.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transformation Arrow */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-[#4CAF50] to-emerald-600 rounded-full flex items-center justify-center shadow-xl border-4 border-white backdrop-blur-md">
              <ArrowRight className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg border border-[#4CAF50]/20 text-sm font-bold text-[#4CAF50] backdrop-blur-md">
              WebSzyk Solutions
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            My Innovative Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="group relative overflow-hidden backdrop-blur-md bg-gradient-to-br from-[#4CAF50]/5 via-white/80 to-emerald-50/50 border border-[#4CAF50]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/10 via-white/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/40 via-transparent to-[#4CAF50]/5"></div>
                
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#4CAF50]/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#4CAF50]/30 backdrop-blur-sm shadow-md">
                      <solution.icon className="h-6 w-6 text-[#4CAF50]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{solution.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Button variant="solid" size="lg" className="group">
            Let's Transform Your Challenges
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
