import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle, Clock, Shield, Zap, Paperclip, Play, Mail, Phone, Github, Linkedin, X } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      const maxSize = 10 * 1024 * 1024; // 10MB
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/jpg', 'image/png'];
      
      if (file.size > maxSize) {
        toast({
          title: "File too large",
          description: `${file.name} is larger than 10MB`,
          variant: "destructive",
        });
        return false;
      }
      
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Invalid file type",
          description: `${file.name} is not a supported file type`,
          variant: "destructive",
        });
        return false;
      }
      
      return true;
    });
    
    setAttachedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleFileAreaClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
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
        name: '',
        email: '',
        message: ''
      });
      setAttachedFiles([]);
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
      {/* Updated Gradient Background - Contact uses inverted colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#04e6a5] via-emerald-600 to-[#04e6a5]"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0d1b2a]/80 via-[#0d1b2a]/60 to-[#0d1b2a]/90"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-[#04e6a5]/30 via-[#0d1b2a]/70 to-[#04e6a5]/20"></div>
      
      {/* Animated Background Elements - Updated with specified colors */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-[#0d1b2a]/40 to-[#04e6a5]/25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-80 h-80 bg-gradient-to-bl from-[#04e6a5]/30 to-[#0d1b2a]/50 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-tr from-[#0d1b2a]/60 to-[#04e6a5]/35 rounded-full blur-3xl animate-pulse delay-2000"></div>

      {/* Triangle Shape Divider at Top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full z-20">
        <div 
          className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[60px] border-l-transparent border-r-transparent border-b-white/20"
          style={{
            filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))'
          }}
        ></div>
      </div>

      <div className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together.
            </p>
          </div>
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Contact Form with Enhanced Glassmorphism */}
            <div>
              <Card className="border border-white/30 backdrop-blur-md bg-black/30 shadow-2xl">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-white">Get Your Free Quote</CardTitle>
                  <p className="text-white/90 text-lg">
                    Fill out the form and I'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white font-medium text-base">Full Name *</Label>
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-white/40 bg-black/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-[#04e6a5] focus:ring-[#04e6a5] h-12 text-base" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-medium text-base">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-white/40 bg-black/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-[#04e6a5] focus:ring-[#04e6a5] h-12 text-base" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white font-medium text-base">Project Details *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell me about your project, goals, and timeline..."
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-white/40 bg-black/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-[#04e6a5] focus:ring-[#04e6a5] text-base"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-white font-medium text-base">Attach Files</Label>
                      <div 
                        onClick={handleFileAreaClick}
                        className="flex items-center justify-center border-2 border-dashed border-white/40 rounded-lg p-6 bg-black/10 backdrop-blur-sm hover:border-[#04e6a5] transition-colors cursor-pointer"
                      >
                        <div className="text-center">
                          <Paperclip className="h-8 w-8 text-white/70 mx-auto mb-3" />
                          <p className="text-white/70 text-base">Click to attach files or drag & drop</p>
                          <p className="text-white/50 text-sm mt-2">PDF, DOC, Images up to 10MB</p>
                        </div>
                        <input 
                          ref={fileInputRef}
                          type="file" 
                          multiple 
                          className="hidden" 
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                          onChange={handleFileSelect}
                        />
                      </div>
                      
                      {/* File List */}
                      {attachedFiles.length > 0 && (
                        <div className="space-y-2 mt-4">
                          {attachedFiles.map((file, index) => (
                            <div key={index} className="flex items-center justify-between bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg p-3">
                              <div className="flex items-center space-x-2">
                                <Paperclip className="h-4 w-4 text-[#04e6a5]" />
                                <span className="text-white/90 text-sm truncate">{file.name}</span>
                                <span className="text-white/60 text-xs">({(file.size / 1024 / 1024).toFixed(1)}MB)</span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="text-white/60 hover:text-red-400 transition-colors"
                              >
                                <X className="h-4 w-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 text-lg shadow-lg disabled:opacity-50 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white border-none font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]"
                    >
                      {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Right Column - Why Work With Me with Enhanced Glassmorphism */}
            <div>
              <Card className="border border-white/30 backdrop-blur-md bg-black/30 shadow-2xl h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose WebSzyk?</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#04e6a5]/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <Zap className="h-6 w-6 text-[#04e6a5]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2 text-lg">8+ Years Experience</h4>
                        <p className="text-white/90 text-base">Proven track record with 100+ successful projects across various industries.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#04e6a5]/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-[#04e6a5]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2 text-lg">Fast Response</h4>
                        <p className="text-white/90 text-base">Quick communication and rapid development cycles to meet your deadlines.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#04e6a5]/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <Shield className="h-6 w-6 text-[#04e6a5]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2 text-lg">Ongoing Support</h4>
                        <p className="text-white/90 text-base">Comprehensive post-launch support and maintenance included in every project.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#04e6a5]/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-[#04e6a5]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2 text-lg">Quality Guarantee</h4>
                        <p className="text-white/90 text-base">Modern, scalable solutions built with best practices and clean code.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-[#04e6a5]/10 backdrop-blur-sm rounded-lg border border-[#04e6a5]/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 bg-[#04e6a5] rounded-full animate-pulse"></div>
                      <span className="text-[#04e6a5] font-semibold text-base">Available for new projects</span>
                    </div>
                    <p className="text-white/90 text-base mb-4">Response time: 2-4 hours</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-[#04e6a5]" />
                        <span className="text-white/90 text-base">hello@webszyk.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-[#04e6a5]" />
                        <span className="text-white/90 text-base">+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center space-x-4 pt-2">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white/90 hover:text-[#04e6a5] transition-colors">
                          <Github className="h-4 w-4" />
                          <span className="text-base">GitHub</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-white/90 hover:text-[#04e6a5] transition-colors">
                          <Linkedin className="h-4 w-4" />
                          <span className="text-base">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Bottom Row - Meet WebSzyk Video Section */}
          <div className="flex justify-center">
            <div className="text-center max-w-2xl">
              <div className="relative bg-black/30 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden group cursor-pointer border border-white/30 mb-6">
                {/* Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[#04e6a5]/20 to-purple-500/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg border border-white/30">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                    <h4 className="text-white font-semibold text-xl mb-2">Meet WebSzyk</h4>
                    <p className="text-white/80 text-lg">Watch my story & approach</p>
                  </div>
                  
                  {/* Animated elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-[#04e6a5] rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
              <div className="text-white">
                <p className="font-medium text-lg">Ready to transform your ideas into reality?</p>
                <p className="text-base text-white/80">Let's build something amazing together!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
