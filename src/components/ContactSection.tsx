
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle, Clock, Shield, Zap } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Success!",
        description: "Your message has been sent. I'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Enhanced Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/15 via-emerald-400/10 to-[#4CAF50]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/8 via-[#4CAF50]/12 to-slate-600/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#4CAF50]/20 to-emerald-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-80 h-80 bg-gradient-to-bl from-[#4CAF50]/15 to-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-tr from-emerald-300/10 to-[#4CAF50]/25 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together.
            </p>
          </div>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Left Column - Contact Form with Enhanced Glassmorphism */}
            <div>
              <Card className="border border-white/30 backdrop-blur-md bg-black/30 shadow-2xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-white">Get Your Free Quote</CardTitle>
                  <p className="text-white/90 text-sm">
                    Fill out the form and I'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <Label htmlFor="firstName" className="text-white font-medium text-sm">First Name *</Label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="border-white/40 bg-black/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-orange-400 focus:ring-orange-400 h-9" 
                        />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="lastName" className="text-white font-medium text-sm">Last Name *</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="border-white/40 bg-black/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-orange-400 focus:ring-orange-400 h-9" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-white font-medium text-sm">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-white/40 bg-black/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-orange-400 focus:ring-orange-400 h-9" 
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="company" className="text-white font-medium text-sm">Company</Label>
                      <Input 
                        id="company" 
                        placeholder="Your Company" 
                        value={formData.company}
                        onChange={handleInputChange}
                        className="border-white/40 bg-black/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-orange-400 focus:ring-orange-400 h-9" 
                      />
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="budget" className="text-white font-medium text-sm">Project Budget</Label>
                      <select 
                        id="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 h-9 border border-white/40 bg-black/20 backdrop-blur-sm text-white rounded-md focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 text-sm"
                      >
                        <option value="" className="bg-gray-800 text-white">Select budget range</option>
                        <option value="5k-10k" className="bg-gray-800 text-white">$5,000 - $10,000</option>
                        <option value="10k-25k" className="bg-gray-800 text-white">$10,000 - $25,000</option>
                        <option value="25k-50k" className="bg-gray-800 text-white">$25,000 - $50,000</option>
                        <option value="50k+" className="bg-gray-800 text-white">$50,000+</option>
                      </select>
                    </div>
                    
                    <div className="space-y-1">
                      <Label htmlFor="message" className="text-white font-medium text-sm">Project Details *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell me about your project, goals, and timeline..."
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-white/40 bg-black/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-orange-400 focus:ring-orange-400"
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-5 shadow-lg disabled:opacity-50 border-0"
                    >
                      {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column - Why Work With Me with Enhanced Glassmorphism */}
            <div>
              <Card className="border border-white/30 backdrop-blur-md bg-black/30 shadow-2xl h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Why Choose WebSzyk?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-[#4CAF50]/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="h-5 w-5 text-[#4CAF50]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 text-sm">8+ Years Experience</h4>
                        <p className="text-white/90 text-sm">Proven track record with 100+ successful projects across various industries.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-[#4CAF50]/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-[#4CAF50]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 text-sm">Fast Response</h4>
                        <p className="text-white/90 text-sm">Quick communication and rapid development cycles to meet your deadlines.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-[#4CAF50]/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="h-5 w-5 text-[#4CAF50]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 text-sm">Ongoing Support</h4>
                        <p className="text-white/90 text-sm">Comprehensive post-launch support and maintenance included in every project.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-[#4CAF50]/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-[#4CAF50]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 text-sm">Quality Guarantee</h4>
                        <p className="text-white/90 text-sm">Modern, scalable solutions built with best practices and clean code.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-[#4CAF50]/10 backdrop-blur-sm rounded-lg border border-[#4CAF50]/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-[#4CAF50] rounded-full animate-pulse"></div>
                      <span className="text-[#4CAF50] font-semibold text-sm">Available for new projects</span>
                    </div>
                    <p className="text-white/90 text-xs">Response time: 2-4 hours</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Bottom Row - Profile Image - More Compact */}
          <div className="flex justify-center">
            <div className="text-center">
              <div className="w-36 h-44 bg-black/30 backdrop-blur-md rounded-2xl border border-white/40 shadow-2xl flex items-center justify-center mx-auto mb-3">
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-[#4CAF50]/20 backdrop-blur-sm rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-xl">👨‍💻</span>
                  </div>
                  <p className="text-sm font-medium text-white">WebSzyk</p>
                  <p className="text-xs text-white/80">Your Tech Partner</p>
                </div>
              </div>
              <div className="text-white">
                <p className="font-medium text-sm">Ready to transform your ideas into reality?</p>
                <p className="text-xs text-white/80">Let's build something amazing together!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
