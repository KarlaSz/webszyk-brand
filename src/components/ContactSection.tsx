
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle, Clock, Shield, Zap } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Enhanced Gradient Background with Waves */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/15 via-emerald-400/10 to-[#4CAF50]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/8 via-[#4CAF50]/12 to-slate-600/20"></div>
      
      {/* Wave Pattern */}
      <div className="absolute inset-0">
        <svg className="absolute bottom-0 left-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-[#4CAF50]/20"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-[#4CAF50]/30"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-[#4CAF50]/40"></path>
        </svg>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#4CAF50]/20 to-emerald-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-80 h-80 bg-gradient-to-bl from-[#4CAF50]/15 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-tr from-emerald-300/10 to-[#4CAF50]/25 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together.
            </p>
          </div>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Contact Form */}
            <div>
              <Card className="border border-white/20 shadow-2xl backdrop-blur-md bg-white/95">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Get Your Free Quote</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form and I'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        className="border-gray-300 focus:border-[#4CAF50] focus:ring-[#4CAF50]" 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-700 font-medium">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        className="border-gray-300 focus:border-[#4CAF50] focus:ring-[#4CAF50]" 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="border-gray-300 focus:border-[#4CAF50] focus:ring-[#4CAF50]" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-700 font-medium">Company</Label>
                    <Input 
                      id="company" 
                      placeholder="Your Company" 
                      className="border-gray-300 focus:border-[#4CAF50] focus:ring-[#4CAF50]" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-gray-700 font-medium">Project Budget</Label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#4CAF50] focus:ring-1 focus:ring-[#4CAF50]">
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-medium">Project Details *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell me about your project, goals, and timeline..."
                      rows={4}
                      className="border-gray-300 focus:border-[#4CAF50] focus:ring-[#4CAF50]"
                    />
                  </div>
                  
                  <Button className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white text-lg py-6 shadow-lg">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column - Why Work With Me */}
            <div>
              <Card className="border border-white/20 shadow-2xl backdrop-blur-md bg-white/95 h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose WebSzyk?</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="h-6 w-6 text-[#4CAF50]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">8+ Years Experience</h4>
                        <p className="text-gray-600">Proven track record with 100+ successful projects across various industries.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-[#4CAF50]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Fast Response</h4>
                        <p className="text-gray-600">Quick communication and rapid development cycles to meet your deadlines.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="h-6 w-6 text-[#4CAF50]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Ongoing Support</h4>
                        <p className="text-gray-600">Comprehensive post-launch support and maintenance included in every project.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-[#4CAF50]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Quality Guarantee</h4>
                        <p className="text-gray-600">Modern, scalable solutions built with best practices and clean code.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-[#4CAF50]/5 rounded-lg border border-[#4CAF50]/20 backdrop-blur-sm">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-[#4CAF50] rounded-full animate-pulse"></div>
                      <span className="text-[#4CAF50] font-semibold">Available for new projects</span>
                    </div>
                    <p className="text-gray-600 text-sm">Response time: 2-4 hours</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Bottom Row - Profile Image */}
          <div className="flex justify-center">
            <div className="text-center">
              <div className="w-48 h-60 bg-gradient-to-br from-white/95 to-white/90 rounded-2xl border border-white/30 shadow-2xl backdrop-blur-md flex items-center justify-center mx-auto mb-4">
                <div className="text-center text-gray-600">
                  <div className="w-16 h-16 bg-[#4CAF50]/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <p className="text-sm font-medium text-gray-800">WebSzyk</p>
                  <p className="text-xs text-gray-600">Your Tech Partner</p>
                </div>
              </div>
              <div className="text-white/90">
                <p className="font-medium">Ready to transform your ideas into reality?</p>
                <p className="text-sm text-white/70">Let's build something amazing together!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
