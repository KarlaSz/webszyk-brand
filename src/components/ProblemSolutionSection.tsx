
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle, DollarSign, Clock, Users, TrendingDown, Smartphone, CheckCircle, Zap, Target, Shield, Rocket, MessageCircle, ArrowDown } from "lucide-react";

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
    color: "text-orange-600"
  },
  {
    icon: AlertCircle,
    title: "Outdated Technology",
    description: "Security vulnerabilities",
    color: "text-orange-500"
  },
  {
    icon: Users,
    title: "Poor User Experience",
    description: "Confusing interfaces",
    color: "text-orange-600"
  },
  {
    icon: TrendingDown,
    title: "Low Conversions",
    description: "Missing opportunities",
    color: "text-orange-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Issues",
    description: "Lost mobile traffic",
    color: "text-orange-600"
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
    <section className="relative py-16 overflow-hidden">
      {/* Hero-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/12 via-emerald-400/8 to-[#4CAF50]/15"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/5 via-[#4CAF50]/8 to-slate-600/12"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#4CAF50]/15 to-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-80 h-80 bg-gradient-to-bl from-[#4CAF50]/10 to-green-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></div>
            <span className="text-[#4CAF50] font-semibold">From Challenge to Innovation</span>
            <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Transforming Tech Challenges
          </h2>
          
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
            Every challenge is an opportunity for innovation. Here's how I turn common tech problems into powerful digital solutions.
          </p>

          {/* Engaging Arrow */}
          <div className="flex justify-center">
            <div className="group flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 hover:bg-white/15 transition-all duration-300 cursor-pointer">
              <span className="text-white font-semibold">Find Your Solution Below</span>
              <ArrowDown className="h-5 w-5 text-[#4CAF50] group-hover:translate-y-1 transition-transform animate-bounce" />
            </div>
          </div>
        </div>

        {/* VS Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-center">
          {/* Problems Column */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Common Problems
            </h3>
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <Card key={index} className="group relative overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/5 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-gray-300/5 via-transparent to-white/8"></div>
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-white/30 backdrop-blur-sm shadow-md">
                        <challenge.icon className="h-6 w-6 text-white/80" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-lg mb-2">{challenge.title}</h4>
                        <p className="text-white/70 text-sm leading-relaxed">{challenge.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* VS Section - Lighter Hero Style */}
          <div className="lg:col-span-2 flex justify-center items-center">
            <div className="relative">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border border-white/20 relative overflow-hidden">
                {/* Lighter gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-[#4CAF50]/10 to-white/20"></div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/8 via-emerald-400/5 to-[#4CAF50]/12"></div>
                
                <span className="text-white font-bold text-lg relative z-10">VS</span>
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/30 rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#4CAF50] rounded-full opacity-80"></div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              WebSzyk Solutions
            </h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="group relative overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/10 via-white/5 to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-300/5 via-transparent to-[#4CAF50]/8"></div>
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#4CAF50]/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#4CAF50]/30 backdrop-blur-sm shadow-md">
                        <solution.icon className="h-6 w-6 text-[#4CAF50]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-lg mb-2">{solution.title}</h4>
                        <p className="text-white/70 text-sm leading-relaxed">{solution.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Animated Arrow Below */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-1 h-16 bg-gradient-to-b from-[#4CAF50] to-transparent rounded-full"></div>
            <ArrowDown className="h-8 w-8 text-[#4CAF50] animate-bounce" />
            <div className="w-1 h-16 bg-gradient-to-t from-[#4CAF50] to-transparent rounded-full"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button variant="solid" size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
