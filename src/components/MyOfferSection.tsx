import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Code, Smartphone, Zap, Users, CheckCircle, Wrench, Shield, Cloud, HeadphonesIcon, ArrowRight, MessageCircle } from "lucide-react";

const MyOfferSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Same background as hero section */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/15 via-emerald-400/10 to-[#4CAF50]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/8 via-[#4CAF50]/12 to-slate-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#4CAF50]/20 to-emerald-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-80 h-80 bg-gradient-to-bl from-[#4CAF50]/15 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-tr from-emerald-300/10 to-[#4CAF50]/25 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-[#4CAF50]/20 text-[#4CAF50] border-[#4CAF50]/30 backdrop-blur-sm mb-4">
            My Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What I Can Do For You
          </h2>
          <p className="text-white/90 text-xl max-w-3xl mx-auto leading-relaxed">
            Professional web development and IT services tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {/* Website & Landing Pages - Enhanced Glassmorphism Card */}
          <Card className="relative border border-white/30 backdrop-blur-md bg-black/30 shadow-2xl rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300">
            {/* Popular Badge */}
            <div className="absolute top-6 right-6">
              <Badge className="bg-[#4CAF50] text-white font-semibold">
                Most Popular
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-[#4CAF50]/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-[#4CAF50]" />
              </div>
              <CardTitle className="text-white text-2xl mb-2">Websites & Landing Pages</CardTitle>
              <p className="text-white/80">Modern, responsive web solutions</p>
              <div className="mt-6">
                <div className="text-4xl font-bold text-white mb-2">Starting at $999</div>
                <p className="text-white/70 text-sm">Complete website solution</p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg mb-4">What You Can Achieve:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Increase online presence and reach more customers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Convert visitors into customers with optimized landing pages</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Build trust and credibility with professional design</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Improve SEO rankings and search visibility</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Scale your business with modern web technologies</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-white/20 pt-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm">React</Badge>
                  <Badge variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm">Next.js</Badge>
                  <Badge variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm">TypeScript</Badge>
                  <Badge variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm">Tailwind</Badge>
                </div>
                
                <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white font-semibold py-3 text-lg group">
                  Get Started Today
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* IT Services - Enhanced Glassmorphism Card */}
          <Card className="relative border border-white/30 backdrop-blur-md bg-black/30 shadow-2xl rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-[#4CAF50]/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Wrench className="h-8 w-8 text-[#4CAF50]" />
              </div>
              <CardTitle className="text-white text-2xl mb-2">IT Services & Support</CardTitle>
              <p className="text-white/80">Comprehensive tech solutions</p>
              <div className="mt-6">
                <div className="text-4xl font-bold text-white mb-2">Starting at $149</div>
                <p className="text-white/70 text-sm">Per month support package</p>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-white font-semibold text-lg mb-4">How I Can Help:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Shield className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Secure your systems and protect against threats</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Cloud className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Migrate to cloud solutions for better performance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Optimize existing systems for better efficiency</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <HeadphonesIcon className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Provide ongoing support and maintenance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Code className="h-5 w-5 text-[#4CAF50] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Custom software development and integrations</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-white/20 pt-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm">24/7 Support</Badge>
                  <Badge variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm">Cloud Migration</Badge>
                  <Badge variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm">Security</Badge>
                  <Badge variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm">Consulting</Badge>
                </div>
                
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 text-lg border border-white/30 group backdrop-blur-sm">
                  Learn More
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ready to Transform Section - Now integrated */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 text-center shadow-2xl">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-white font-semibold text-lg">Ready to Transform?</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h3>
            
            <p className="text-white/80 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
              Stop struggling with tech problems. Let's discuss your specific challenges and create a tailored solution that drives real results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white/20 backdrop-blur-md border border-white/30 hover:bg-[#4CAF50] hover:border-[#4CAF50] text-white font-semibold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group text-lg"
              >
                <MessageCircle className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" />
                Start Your Project Today
              </Button>
              
              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full animate-pulse"></div>
                  <span className="font-medium">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#4CAF50] rounded-full animate-pulse delay-500"></div>
                  <span className="font-medium">Quick Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyOfferSection;
