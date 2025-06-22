
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 backdrop-blur-md bg-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Ready to start your project? Tell me about your ideas and let's discuss 
            how we can bring them to life.
          </p>
        </div>
        
        {/* Main Contact Form */}
        <Card className="border-0 shadow-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-white text-center">Get Your Free Quote</CardTitle>
            <p className="text-white/70 text-center">
              Fill out the form below and I'll get back to you within 24 hours
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-white/90">First Name *</Label>
                <Input 
                  id="firstName" 
                  placeholder="John" 
                  className="border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-[#64D69F] backdrop-blur-sm" 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-white/90">Last Name *</Label>
                <Input 
                  id="lastName" 
                  placeholder="Doe" 
                  className="border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-[#64D69F] backdrop-blur-sm" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white/90">Email *</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="john@example.com" 
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-[#64D69F] backdrop-blur-sm" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company" className="text-white/90">Company</Label>
              <Input 
                id="company" 
                placeholder="Your Company" 
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-[#64D69F] backdrop-blur-sm" 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="budget" className="text-white/90">Project Budget</Label>
              <select className="w-full px-3 py-2 border border-white/20 bg-white/10 text-white rounded-md focus:outline-none focus:border-[#64D69F] backdrop-blur-sm">
                <option value="" className="bg-gray-800">Select budget range</option>
                <option value="5k-10k" className="bg-gray-800">$5,000 - $10,000</option>
                <option value="10k-25k" className="bg-gray-800">$10,000 - $25,000</option>
                <option value="25k-50k" className="bg-gray-800">$25,000 - $50,000</option>
                <option value="50k+" className="bg-gray-800">$50,000+</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white/90">Project Details *</Label>
              <Textarea 
                id="message" 
                placeholder="Tell me about your project, goals, and timeline..."
                rows={4}
                className="border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-[#64D69F] backdrop-blur-sm"
              />
            </div>
            
            <Button className="w-full bg-[#64D69F] hover:bg-[#64D69F]/90 text-white text-lg py-6 shadow-lg">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
        
        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Why Work With Me */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-[#64D69F] to-[#64D69F]/80 text-white">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6">Why Work With Me?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>8+ years of full-stack development experience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Proven track record with 100+ successful projects</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Clear communication and transparent process</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span>Ongoing support and maintenance included</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          {/* Profile Image */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-64 h-80 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 backdrop-blur-md flex items-center justify-center">
              <div className="text-center text-white/60">
                <div className="w-20 h-20 bg-[#64D69F]/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍💻</span>
                </div>
                <p className="text-sm">Profile Image</p>
                <p className="text-xs">Placeholder</p>
              </div>
            </div>
            <div className="text-center text-white/70">
              <p className="text-sm">Available for new projects</p>
              <p className="text-xs">Response time: 2-4 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
