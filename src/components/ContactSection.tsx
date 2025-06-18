
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Drop me a line anytime",
    contact: "hello@techpartner.com",
    action: "Send Email"
  },
  {
    icon: Phone,
    title: "Phone",
    description: "Let's talk about your project",
    contact: "+1 (555) 123-4567",
    action: "Call Now"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Quick questions? Let's chat",
    contact: "Available 9 AM - 6 PM EST",
    action: "Start Chat"
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project? I'd love to hear about your ideas and discuss 
            how we can bring them to life with cutting-edge technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                  <method.icon className="h-8 w-8 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{method.title}</CardTitle>
                <p className="text-gray-600">{method.description}</p>
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold text-gray-900 mb-4">{method.contact}</p>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-green-50 group-hover:border-green-200 group-hover:text-green-600 transition-colors"
                >
                  {method.action}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-xl bg-white">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Send a Message</CardTitle>
              <p className="text-gray-600">
                Tell me about your project and I'll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="John" className="border-gray-200 focus:border-green-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Doe" className="border-gray-200 focus:border-green-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="border-gray-200 focus:border-green-500" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your Company" className="border-gray-200 focus:border-green-500" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="budget">Project Budget</Label>
                <select className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-green-500">
                  <option value="">Select budget range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Project Details *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project, goals, and timeline..."
                  rows={4}
                  className="border-gray-200 focus:border-green-500"
                />
              </div>
              
              <Button className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-green-600 to-green-700 text-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Why Work With Me?</h3>
                <ul className="space-y-3">
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
            
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-green-600" />
                  <h4 className="font-bold text-gray-900">Response Time</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  I typically respond to new inquiries within 2-4 hours during business hours.
                </p>
                <div className="text-sm text-gray-500">
                  <p>Business Hours: Mon-Fri, 9 AM - 6 PM EST</p>
                  <p>Emergency Support: Available 24/7</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
