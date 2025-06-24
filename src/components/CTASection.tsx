
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background with gradient layers like other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-gray-600 to-slate-800"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#4CAF50]/15 via-emerald-400/10 to-[#4CAF50]/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-gray-300/8 via-[#4CAF50]/12 to-slate-600/20"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glassmorphism card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 text-center shadow-2xl">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-white font-semibold text-lg">Ready to Transform?</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          
          <p className="text-white/80 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
            Stop struggling with tech problems. Let's discuss your specific challenges and create a tailored solution that drives real results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#4CAF50] text-white hover:bg-[#45a049] font-semibold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group text-lg"
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
    </section>
  );
};

export default CTASection;
