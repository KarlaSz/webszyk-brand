
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, MessageCircleQuestion } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex web applications can take 8-16 weeks. I'll provide a detailed timeline during our consultation."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! I offer comprehensive post-launch support including bug fixes, updates, security patches, and feature enhancements. Support packages are tailored to your needs."
    },
    {
      question: "What technologies do you work with?",
      answer: "I specialize in modern web technologies including React, Node.js, TypeScript, Python, and cloud platforms like AWS and Google Cloud. I choose the best tech stack for your specific needs."
    },
    {
      question: "Can you help with existing projects?",
      answer: "Absolutely! I can audit, optimize, debug, or add new features to existing applications. I work with various codebases and can quickly understand your current setup."
    },
    {
      question: "How do you handle project communication?",
      answer: "I believe in transparent communication with regular updates, weekly progress calls, and shared project dashboards. You'll always know where your project stands."
    },
    {
      question: "What's your pricing structure?",
      answer: "I offer both fixed-price projects and hourly consulting. Pricing depends on project scope, timeline, and complexity. I provide detailed quotes after understanding your requirements."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MessageCircleQuestion className="h-6 w-6 text-[#4CAF50]" />
            <span className="text-[#4CAF50] font-semibold text-sm uppercase tracking-wide">FAQ</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? Here are answers to the most common questions I receive from clients.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader 
                className="cursor-pointer"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <CardTitle className="flex items-center justify-between text-left">
                  <div className="flex items-center space-x-3">
                    <MessageCircleQuestion className="h-5 w-5 text-[#4CAF50] flex-shrink-0" />
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  </div>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-[#4CAF50]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </CardTitle>
              </CardHeader>
              {openFAQ === index && (
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed ml-8">{faq.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Button variant="solid" className="text-white font-semibold">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
