import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, Linkedin, Send } from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-white h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-200 text-sm">Email</p>
                  <a 
                    href="mailto:saharaiankita@gmail.com" 
                    className="text-white font-medium hover:text-purple-300 transition-colors"
                  >
                    saharaiankita@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-white h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-200 text-sm">Phone</p>
                  <a 
                    href="tel:+919874382004" 
                    className="text-white font-medium hover:text-purple-300 transition-colors"
                  >
                    +91-9874382004
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Linkedin className="text-white h-6 w-6" />
                </div>
                <div>
                  <p className="text-gray-200 text-sm">LinkedIn</p>
                  <a 
                    href="#" 
                    className="text-white font-medium hover:text-purple-300 transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-bold mb-4">Available For</h4>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-purple-700 rounded-full text-sm">Full-time Opportunities</span>
                <span className="px-4 py-2 bg-purple-700 rounded-full text-sm">Internships</span>
                <span className="px-4 py-2 bg-purple-700 rounded-full text-sm">Freelance Projects</span>
                <span className="px-4 py-2 bg-purple-700 rounded-full text-sm">Research Collaboration</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="block text-sm font-medium text-gray-200 mb-2">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-purple-400 focus:ring-purple-400/50"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="block text-sm font-medium text-gray-200 mb-2">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-purple-400 focus:ring-purple-400/50"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-purple-400 focus:ring-purple-400/50"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-purple-400 focus:ring-purple-400/50"
                    placeholder="Let's discuss an opportunity"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-purple-400 focus:ring-purple-400/50 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium hover:from-purple-700 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
