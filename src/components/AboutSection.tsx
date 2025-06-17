
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

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

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              <span className="text-green-600 font-semibold">About Me</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Technology Partner
            </h2>
            
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                With over 8 years of experience in full-stack development, I've helped dozens of 
                companies and entrepreneurs transform their ideas into successful digital products. 
                From startups to established businesses, I provide the technical expertise needed 
                to build, scale, and maintain modern web applications.
              </p>
              
              <p>
                My approach combines technical excellence with business understanding. I don't just 
                write code – I partner with you to understand your goals, solve real problems, and 
                deliver solutions that drive results. Whether you need a complete web application, 
                a mobile app, or ongoing technical support, I'm here to help you succeed.
              </p>
              
              <p>
                I believe in clean, maintainable code, modern development practices, and creating 
                user experiences that delight. Every project is an opportunity to build something 
                amazing together.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                  <stat.icon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                  Technical Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="bg-white text-gray-700 hover:bg-green-100 hover:text-green-800 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Quality First</h4>
                  <p className="text-gray-600 text-sm">
                    Every line of code is written with maintainability, security, and performance in mind.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Collaborative</h4>
                  <p className="text-gray-600 text-sm">
                    I work closely with you throughout the entire process, ensuring transparency and alignment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
