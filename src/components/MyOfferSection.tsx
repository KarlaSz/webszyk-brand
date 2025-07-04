import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Code, Smartphone, Zap, Users, CheckCircle, Wrench, Shield, Cloud, HeadphonesIcon, ArrowRight, MessageCircle, Fan } from "lucide-react";

const MyOfferSection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Same background as hero section */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#04e6a5]/15 via-emerald-400/10 to-[#04e6a5]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/8 via-[#04e6a5]/12 to-slate-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#04e6a5]/20 to-emerald-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-80 h-80 bg-gradient-to-bl from-[#04e6a5]/15 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-tr from-emerald-300/10 to-[#04e6a5]/25 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="bg-[#04e6a5]/20 text-[#04e6a5] border-[#04e6a5]/30 backdrop-blur-sm mb-4">
            My Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What I Can Do For You
          </h2>
          <p className="text-white/90 text-xl max-w-3xl mx-auto leading-relaxed">
            Professional web development and IT services tailored to your business needs
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {/* Website & Landing Pages */}
          <Card className="relative border border-white/30 backdrop-blur-md bg-black/30 shadow-2xl rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-400/20 to-gray-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-[#04e6a5]/20 transition-colors duration-300">
                  <Globe className="h-6 w-6 text-gray-300 group-hover:text-[#04e6a5] transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <CardTitle className="text-white text-xl">Websites & Landing Pages</CardTitle>
                    <Badge className="bg-gradient-to-r from-orange-400 to-orange-600 text-white font-semibold text-xs">
                      Most Popular
                    </Badge>
                  </div>
                  <p className="text-white/80 text-sm">Modern, responsive web solutions</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">$999+</div>
                  <p className="text-white/70 text-xs">Complete solution</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#04e6a5] flex-shrink-0" />
                    <span className="text-white/90 text-sm">Increase online presence</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#04e6a5] flex-shrink-0" />
                    <span className="text-white/90 text-sm">Convert visitors to customers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#04e6a5] flex-shrink-0" />
                    <span className="text-white/90 text-sm">Build trust & credibility</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#04e6a5] flex-shrink-0" />
                    <span className="text-white/90 text-sm">Improve SEO rankings</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#04e6a5] flex-shrink-0" />
                    <span className="text-white/90 text-sm">Scale with modern tech</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-[#04e6a5] flex-shrink-0" />
                    <span className="text-white/90 text-sm">Mobile-first design</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm">React</Badge>
                <Badge variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm">Next.js</Badge>
                <Badge variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm">TypeScript</Badge>
                <Badge variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm">Tailwind</Badge>
              </div>
              
              <Button className="w-1/2 py-3 text-lg group bg-white/10 border border-white/30 hover:bg-[#04e6a5] hover:border-[#04e6a5] text-white backdrop-blur-md transition-all duration-300">
                Get Started Today
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* IT Services */}
          <Card className="relative border border-white/30 backdrop-blur-md bg-black/30 shadow-2xl rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-400/20 to-gray-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-[#04e6a5]/20 transition-colors duration-300">
                  <Wrench className="h-6 w-6 text-gray-300 group-hover:text-[#04e6a5] transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-white text-xl mb-1">IT Services & Support</CardTitle>
                  <p className="text-white/80 text-sm">Comprehensive tech solutions</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">$149+</div>
                  <p className="text-white/70 text-xs">Per month</p>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-[#04e6a5] flex-shrink-0" />
                    <span className="text-white/90 text-sm">Secure your systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Cloud className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="text-white/90 text-sm">Cloud migration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-[#04e6a5] flex-shrink-0" />
                    <span className="text-white/90 text-sm">Performance optimization</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <HeadphonesIcon className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="text-white/90 text-sm">24/7 support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Code className="h-4 w-4 text-[#04e6a5] flex-shrink-0" />
                    <span className="text-white/90 text-sm">Custom development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-400 flex-shrink-0" />
                    <span className="text-white/90 text-sm">Team collaboration</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm">24/7 Support</Badge>
                <Badge variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm">Cloud Migration</Badge>
                <Badge variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm">Security</Badge>
                <Badge variant="secondary" className="bg-white/15 text-white/90 backdrop-blur-sm">Consulting</Badge>
              </div>
              
              <Button className="w-1/2 py-3 text-lg group bg-white/10 border border-white/30 hover:bg-[#04e6a5] hover:border-[#04e6a5] text-white backdrop-blur-md transition-all duration-300">
                Learn More
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Ready to Transform Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center shadow-2xl">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-white font-semibold text-lg">Ready to Transform?</span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            
            <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
              Stop struggling with tech problems. Let's discuss your specific challenges and create a tailored solution that drives real results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-3 text-lg group bg-gradient-to-br from-orange-400 to-orange-600 border-0 hover:from-orange-500 hover:to-orange-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl">
                <MessageCircle className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Your Project Today
              </Button>
              
              <div className="flex items-center space-x-4 text-white/80">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#04e6a5] rounded-full animate-pulse"></div>
                  <span className="font-medium text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#04e6a5] rounded-full animate-pulse delay-500"></div>
                  <span className="font-medium text-sm">Quick Response</span>
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
