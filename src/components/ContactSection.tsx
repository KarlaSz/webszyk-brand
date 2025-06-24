
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle, Clock, Shield, Zap } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together.
          </p>
        </div>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Contact Form */}
          <div>
            <Card className="border border-gray-200 shadow-lg">
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
            <Card className="border border-gray-200 shadow-lg h-full">
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
                
                <div className="mt-8 p-6 bg-[#4CAF50]/5 rounded-lg border border-[#4CAF50]/20">
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
            <div className="w-48 h-60 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl border border-gray-200 shadow-lg flex items-center justify-center mx-auto mb-4">
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 bg-[#4CAF50]/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <p className="text-sm font-medium">WebSzyk</p>
                <p className="text-xs">Your Tech Partner</p>
              </div>
            </div>
            <div className="text-gray-600">
              <p className="font-medium">Ready to transform your ideas into reality?</p>
              <p className="text-sm">Let's build something amazing together!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
