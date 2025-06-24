
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, AlertCircle, DollarSign, Clock, Users, TrendingDown, Smartphone, CheckCircle, Zap, Target, Shield, Rocket, MessageCircle, Plus, Minus, ArrowDown } from "lucide-react";

const challenges = [
  {
    icon: Clock,
    title: "Slow Performance",
    description: "Users abandon slow sites",
    impact: "3 second rule"
  },
  {
    icon: DollarSign,
    title: "High Maintenance",
    description: "Expensive legacy systems",
    impact: "Budget drain"
  },
  {
    icon: AlertCircle,
    title: "Outdated Technology",
    description: "Security vulnerabilities",
    impact: "Risk exposure"
  },
  {
    icon: Users,
    title: "Poor User Experience",
    description: "Confusing interfaces",
    impact: "Lost customers"
  },
  {
    icon: TrendingDown,
    title: "Low Conversions",
    description: "Missing opportunities",
    impact: "Revenue loss"
  },
  {
    icon: Smartphone,
    title: "Mobile Issues",
    description: "Not responsive",
    impact: "Traffic loss"
  }
];

const solutions = [
  {
    icon: Zap,
    title: "Lightning Performance",
    description: "Optimized for speed",
    benefit: "Under 2 seconds"
  },
  {
    icon: Shield,
    title: "Smart Architecture",
    description: "Cost-effective development",
    benefit: "Reduced costs"
  },
  {
    icon: Rocket,
    title: "Modern Technology",
    description: "Future-proof solutions",
    benefit: "Secure & scalable"
  },
  {
    icon: Target,
    title: "Intuitive Design",
    description: "User-centered approach",
    benefit: "Higher engagement"
  },
  {
    icon: CheckCircle,
    title: "Conversion Focused",
    description: "Results-driven design",
    benefit: "More revenue"
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Perfect on all devices",
    benefit: "Maximum reach"
  }
];

const ProblemSolutionSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Same background gradient as other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/15 via-emerald-400/10 to-[#4CAF50]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/8 via-[#4CAF50]/12 to-slate-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#4CAF50]/20 to-emerald-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-bl from-[#4CAF50]/15 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-[#4CAF50]/20 text-[#4CAF50] border-[#4CAF50]/30 backdrop-blur-sm mb-4">
            Transform Challenges
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            From Technical Challenges to Digital Success
          </h2>
          <p className="text-white/90 text-xl max-w-3xl mx-auto leading-relaxed">
            I turn your biggest tech frustrations into competitive advantages
          </p>
        </div>

        {/* Challenges Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Common Challenges I Solve</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              These are the pain points that keep businesses from reaching their full potential
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="border border-white/30 backdrop-blur-md bg-black/30 shadow-xl rounded-2xl group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/30 transition-colors">
                      <challenge.icon className="h-6 w-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-lg mb-2">{challenge.title}</h4>
                      <p className="text-white/70 mb-3">{challenge.description}</p>
                      <Badge variant="secondary" className="bg-red-500/20 text-red-300 border-red-500/30 text-xs">
                        {challenge.impact}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transformation Arrow */}
        <div className="flex justify-center mb-20">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-8 shadow-2xl">
            <div className="flex flex-col items-center space-y-4">
              <div className="text-white font-bold text-lg">WebSzyk Solutions</div>
              <ArrowDown className="h-8 w-8 text-[#4CAF50] animate-pulse" />
              <div className="text-white/80 text-sm">Transformation</div>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">My Proven Solutions</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Strategic approaches that deliver measurable results for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <Card key={index} className="border border-white/30 backdrop-blur-md bg-black/30 shadow-xl rounded-2xl group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#4CAF50]/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#4CAF50]/30 transition-colors">
                      <solution.icon className="h-6 w-6 text-[#4CAF50]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white text-lg mb-2">{solution.title}</h4>
                      <p className="text-white/70 mb-3">{solution.description}</p>
                      <Badge variant="secondary" className="bg-[#4CAF50]/20 text-[#4CAF50] border-[#4CAF50]/30 text-xs">
                        {solution.benefit}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for Your Transformation?</h3>
            <p className="text-white/80 mb-6">
              Let's discuss how I can solve your specific challenges and drive real results
            </p>
            <Button variant="solid" size="lg" className="px-8 py-3 text-lg group">
              <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Start the Conversation
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
