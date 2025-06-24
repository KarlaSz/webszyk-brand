
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Code, Smartphone, Zap, Users, CheckCircle, Wrench, Shield, Cloud, HeadphonesIcon } from "lucide-react";

const MyOfferSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background - lighter than hero for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-gray-500 to-slate-700"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/8 via-transparent to-emerald-400/6"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/5 via-[#4CAF50]/8 to-slate-600/12"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#4CAF50]/12 to-emerald-400/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-80 h-80 bg-gradient-to-bl from-[#4CAF50]/10 to-green-400/12 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-[#4CAF50]/20 text-[#4CAF50] border-[#4CAF50]/30 backdrop-blur-sm mb-4">
            My Services
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            What I Can Do For You
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Professional web development and IT services tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Column 1: Website & Landing Pages */}
          <Card className="border border-white/20 backdrop-blur-md bg-black/20 shadow-2xl">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-[#4CAF50]/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-[#4CAF50]" />
                </div>
                <div>
                  <CardTitle className="text-white text-xl">Websites & Landing Pages</CardTitle>
                  <p className="text-white/80 text-sm">Modern, responsive web solutions</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-white font-semibold flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-[#4CAF50]" />
                  <span>What You Can Achieve:</span>
                </h4>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Increase online presence and reach more customers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Convert visitors into customers with optimized landing pages</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Build trust and credibility with professional design</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Improve SEO rankings and search visibility</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#4CAF50] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Scale your business with modern web technologies</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="secondary" className="bg-white/10 text-white/80 backdrop-blur-sm">React</Badge>
                <Badge variant="secondary" className="bg-white/10 text-white/80 backdrop-blur-sm">Next.js</Badge>
                <Badge variant="secondary" className="bg-white/10 text-white/80 backdrop-blur-sm">TypeScript</Badge>
                <Badge variant="secondary" className="bg-white/10 text-white/80 backdrop-blur-sm">Tailwind</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Column 2: IT Services */}
          <Card className="border border-white/20 backdrop-blur-md bg-black/20 shadow-2xl">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-[#4CAF50]/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-[#4CAF50]" />
                </div>
                <div>
                  <CardTitle className="text-white text-xl">IT Services & Support</CardTitle>
                  <p className="text-white/80 text-sm">Comprehensive tech solutions</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-white font-semibold flex items-center space-x-2">
                  <Users className="h-5 w-5 text-[#4CAF50]" />
                  <span>How I Can Help:</span>
                </h4>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <span>Secure your systems and protect against threats</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Cloud className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <span>Migrate to cloud solutions for better performance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <span>Optimize existing systems for better efficiency</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <HeadphonesIcon className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <span>Provide ongoing support and maintenance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Code className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <span>Custom software development and integrations</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                <Badge variant="secondary" className="bg-white/10 text-white/80 backdrop-blur-sm">24/7 Support</Badge>
                <Badge variant="secondary" className="bg-white/10 text-white/80 backdrop-blur-sm">Cloud Migration</Badge>
                <Badge variant="secondary" className="bg-white/10 text-white/80 backdrop-blur-sm">Security</Badge>
                <Badge variant="secondary" className="bg-white/10 text-white/80 backdrop-blur-sm">Consulting</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MyOfferSection;
