
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle, Clock, Shield, Zap, Paperclip } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  trigger: React.ReactNode;
  title?: string;
}

const ContactModal = ({ trigger, title = "Get Your Free Quote" }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
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
      
      // Reset form and close modal
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsOpen(false);
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto border border-white/30 backdrop-blur-md bg-gradient-to-br from-slate-700/95 via-gray-600/95 to-slate-800/95">
        {/* Background overlay matching hero section */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#04e6a5]/15 via-emerald-400/10 to-[#04e6a5]/20 rounded-lg"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/8 via-[#04e6a5]/12 to-slate-600/20 rounded-lg"></div>
        
        <div className="relative z-10">
          <DialogHeader className="pb-6">
            <DialogTitle className="text-2xl font-bold text-white">{title}</DialogTitle>
            <p className="text-white/90 text-lg">
              Fill out the form and I'll get back to you within 24 hours
            </p>
          </DialogHeader>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Contact Form */}
            <div className="space-y-6">
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
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-white/40 bg-black/20 backdrop-blur-sm text-white placeholder:text-white/70 focus:border-[#04e6a5] focus:ring-[#04e6a5] text-base"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label className="text-white font-medium text-base">Attach Files</Label>
                  <div className="flex items-center justify-center border-2 border-dashed border-white/40 rounded-lg p-4 bg-black/10 backdrop-blur-sm hover:border-[#04e6a5] transition-colors cursor-pointer">
                    <div className="text-center">
                      <Paperclip className="h-6 w-6 text-white/70 mx-auto mb-2" />
                      <p className="text-white/70 text-sm">Click to attach files</p>
                      <p className="text-white/50 text-xs mt-1">PDF, DOC, Images up to 10MB</p>
                    </div>
                    <input type="file" multiple className="hidden" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-lg shadow-lg disabled:opacity-50 bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white border-none font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]"
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </div>
            
            {/* Right Column - Why Work With Me */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Why Choose WebSzyk?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#04e6a5]/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-[#04e6a5]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">8+ Years Experience</h4>
                    <p className="text-white/90 text-sm">Proven track record with 100+ successful projects.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#04e6a5]/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-[#04e6a5]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Fast Response</h4>
                    <p className="text-white/90 text-sm">Quick communication and rapid development cycles.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#04e6a5]/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-[#04e6a5]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Ongoing Support</h4>
                    <p className="text-white/90 text-sm">Comprehensive post-launch support included.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#04e6a5]/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-[#04e6a5]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Quality Guarantee</h4>
                    <p className="text-white/90 text-sm">Modern, scalable solutions with clean code.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-[#04e6a5]/10 backdrop-blur-sm rounded-lg border border-[#04e6a5]/30">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-[#04e6a5] rounded-full animate-pulse"></div>
                  <span className="text-[#04e6a5] font-semibold text-sm">Available for new projects</span>
                </div>
                <p className="text-white/90 text-sm">Response time: 2-4 hours</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
