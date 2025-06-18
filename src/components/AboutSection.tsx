
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Clock, Building2, Target, Zap } from "lucide-react";

const skills = [
  "React & TypeScript", "Node.js & Express", "Python & Django", "PostgreSQL & MongoDB",
  "AWS & Docker", "Figma & Design Systems", "Mobile Development", "API Development",
  "DevOps & CI/CD", "Performance Optimization", "Security Best Practices", "Agile Methodology"
];

const stats = [
  { icon: Users, label: "Happy Clients", value: "50+" },
  { icon: CheckCircle, label: "Projects Completed", value: "100+" },
  { icon: Clock, label: "Years Experience", value: "8+" },
  { icon: Award, label: "Technologies Mastered", value: "20+" }
];

const brands = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
            <span className="text-green-600 font-semibold text-lg">About Me</span>
            <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Trusted Technology Partner
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With over 8 years of experience in full-stack development, I've helped dozens of 
            companies and entrepreneurs transform their ideas into successful digital products.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Philosophy Card */}
          <Card className="lg:col-span-2 border-0 shadow-xl bg-gradient-to-br from-white to-gray-50 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">My Philosophy</h3>
              </div>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  My approach combines technical excellence with business understanding. I don't just 
                  write code – I partner with you to understand your goals and deliver solutions that drive results.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-xl">
                    <Award className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Quality First</h4>
                      <p className="text-sm text-gray-600">Every line of code is written with maintainability, security, and performance in mind.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl">
                    <Users className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Collaborative</h4>
                      <p className="text-sm text-gray-600">I work closely with you throughout the entire process, ensuring transparency and alignment.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Experience */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-purple-50">
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Trusted By</h3>
              </div>
              
              <p className="text-gray-600 mb-6 text-sm">
                Leading companies and innovative startups worldwide
              </p>
              
              <div className="space-y-3">
                {brands.slice(0, 4).map((brand, index) => (
                  <div key={index} className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-gray-400 to-gray-500 rounded"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{brand.name}</span>
                  </div>
                ))}
                <div className="text-center pt-2">
                  <span className="text-sm text-gray-500 font-medium">+15 more companies</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technical Expertise */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 via-white to-green-50">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Technical Expertise</h3>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Proficient in modern technologies and frameworks that power today's digital experiences
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-white text-gray-700 hover:bg-green-100 hover:text-green-800 transition-all duration-300 cursor-default px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
