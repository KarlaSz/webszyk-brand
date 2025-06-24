
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, AlertCircle, DollarSign, Clock, Users, TrendingDown, Smartphone, CheckCircle, Zap, Target, Shield, Rocket, MessageCircle, Plus, Minus } from "lucide-react";

const problems = [
  {
    icon: Minus,
    title: "Slow Loading",
    description: "Users leave after 3 seconds",
    color: "text-red-500"
  },
  {
    icon: Minus,
    title: "High Costs", 
    description: "Expensive maintenance",
    color: "text-red-500"
  },
  {
    icon: Minus,
    title: "Outdated Tech",
    description: "Legacy systems",
    color: "text-red-500"
  },
  {
    icon: Minus,
    title: "Poor UX",
    description: "Confusing navigation",
    color: "text-red-500"
  },
  {
    icon: Minus,
    title: "Low Conversions",
    description: "Missing opportunities",
    color: "text-red-500"
  },
  {
    icon: Minus,
    title: "No Mobile",
    description: "Lost traffic",
    color: "text-red-500"
  }
];

const solutions = [
  {
    icon: Plus,
    title: "Lightning Fast",
    description: "Under 2 seconds loading"
  },
  {
    icon: Plus,
    title: "Cost-Effective",
    description: "Smart development"
  },
  {
    icon: Plus,
    title: "Modern Tech",
    description: "Future-proof architecture"
  },
  {
    icon: Plus,
    title: "Intuitive UX",
    description: "Clear & engaging design"
  },
  {
    icon: Plus,
    title: "Conversion Focus",
    description: "Results-driven design"
  },
  {
    icon: Plus,
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

        {/* Comparison Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Problems Column */}
          <div>
            <h3 className="text-xl font-bold text-red-600 mb-6 text-center flex items-center justify-center space-x-2">
              <Minus className="h-6 w-6 text-red-500" />
              <span>Problems</span>
            </h3>
            <div className="space-y-3">
              {problems.map((problem, index) => (
                <Card key={index} className="border border-red-200 hover:border-red-300 transition-all duration-300 hover:shadow-md bg-red-50/50">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 border border-red-200">
                        <problem.icon className="h-5 w-5 text-red-500" />
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

          {/* VS Column */}
          <div className="flex items-center justify-center">
            <div className="relative flex flex-col items-center space-y-4">
              {/* VS Badge */}
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-[#4CAF50] rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                <span className="text-white font-bold text-lg">VS</span>
              </div>
              
              {/* Animation Placeholder */}
              <div className="w-24 h-16 bg-gradient-to-r from-red-100 via-gray-100 to-green-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                <span className="text-gray-400 text-xs font-medium text-center">Animation<br/>Placeholder</span>
              </div>
              
              {/* WebSzyk Badge */}
              <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-[#4CAF50]/20 text-sm font-bold text-[#4CAF50]">
                WebSzyk
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-xl font-bold text-[#4CAF50] mb-6 text-center flex items-center justify-center space-x-2">
              <Plus className="h-6 w-6 text-[#4CAF50]" />
              <span>Solutions</span>
            </h3>
            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <Card key={index} className="border border-[#4CAF50]/30 hover:border-[#4CAF50] transition-all duration-300 hover:shadow-md bg-[#4CAF50]/5">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#4CAF50]/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-[#4CAF50]/30">
                        <solution.icon className="h-5 w-5 text-[#4CAF50]" />
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
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
