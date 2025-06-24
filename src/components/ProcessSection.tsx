
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    { step: "01", title: "Discovery", desc: "Understanding your goals and requirements" },
    { step: "02", title: "Development", desc: "Building with modern, scalable technologies" },
    { step: "03", title: "Launch", desc: "Testing, deployment, and ongoing support" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
            <span className="text-[#4CAF50] font-semibold text-sm uppercase tracking-wide">Process</span>
            <div className="w-2 h-2 bg-[#4CAF50] rounded-full"></div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Development Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A streamlined approach that ensures your project is delivered on time and exceeds expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((phase, index) => (
            <div key={index} className="text-center relative">
              <div className="w-16 h-16 bg-[#4CAF50] rounded-xl flex items-center justify-center mx-auto mb-4 text-white font-bold shadow-sm">
                {phase.step}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{phase.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{phase.desc}</p>
              {index < 2 && (
                <div className="hidden md:block absolute top-8 -right-4 transform translate-x-full">
                  <ArrowRight className="h-5 w-5 text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
