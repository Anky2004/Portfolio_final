import { Button } from "@/components/ui/button";
import { Code, Mail, ArrowRight, Github, Linkedin } from "lucide-react";
import ankitaImage from "@assets/ankita_1754198149923.jpg";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-indigo-600/5"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-purple-600 font-medium text-lg mb-2">👋 Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Ankita <span className="text-gradient">Saha</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8">
                Full Stack Developer & AI/ML Enthusiast
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-purple text-[#9336ea] font-medium hover:opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg"
                size="lg"
              >
                <Code className="mr-2 h-4 w-4" />
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 font-medium hover:bg-purple-50 transform hover:scale-105 transition-all duration-200"
                size="lg"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </div>
            
            {/* Social Media Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/ankita-saha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border-2 border-purple-200 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-50 hover:border-purple-400 transform hover:scale-110 transition-all duration-200 shadow-md"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ankita-saha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white border-2 border-purple-200 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-50 hover:border-purple-400 transform hover:scale-110 transition-all duration-200 shadow-md"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:saharaiankita@gmail.com"
                className="w-12 h-12 bg-white border-2 border-purple-200 rounded-full flex items-center justify-center text-purple-600 hover:bg-purple-50 hover:border-purple-400 transform hover:scale-110 transition-all duration-200 shadow-md"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src={ankitaImage} 
                alt="Ankita Saha - Professional Photo" 
                className="relative w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
