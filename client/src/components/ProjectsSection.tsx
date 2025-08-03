import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, BookOpen, Star, Users, ArrowRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Medical Chatbot",
    description: "Built an AI-powered medical chatbot using Flask, LangChain, and Together.ai, leveraging a custom knowledge base from medical PDFs indexed with Pinecone and HuggingFace embeddings. Integrated personalized medicine reminders with user authentication, real-time popups, and responsive UI.",
    technologies: ["Flask", "LangChain", "Together.ai", "Pinecone", "HuggingFace", "SQLite"],
    icon: Bot,
    color: "purple",
    featured: true,
    githubUrl: "https://github.com/Anky2004/Medical-chatbot",
    liveUrl: "https://medical-chatbot-demo.vercel.app",
  },
  {
    title: "Book Recommender System",
    description: "Developed a sophisticated book recommendation system using collaborative filtering techniques to suggest personalized books based on user ratings and preferences. Implemented advanced algorithms to analyze user behavior patterns and provide accurate recommendations.",
    technologies: ["Flask", "NumPy", "Pandas", "Collaborative Filtering"],
    icon: BookOpen,
    color: "indigo",
    featured: false,
    githubUrl: "https://github.com/Anky2004/BOOK-RECOMMENDER",
    liveUrl: "https://book-recommender-demo.vercel.app",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions that showcase my technical expertise and problem-solving abilities.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const bgColor = project.color === 'purple' 
              ? 'from-purple-50 to-purple-100' 
              : 'from-indigo-50 to-indigo-100';
            const iconColor = project.color === 'purple'
              ? 'from-purple-600 to-purple-500'
              : 'from-indigo-600 to-indigo-500';
            const techColor = project.color === 'purple'
              ? 'bg-purple-200 text-purple-700'
              : 'bg-indigo-200 text-indigo-700';
            const textColor = project.color === 'purple'
              ? 'text-purple-600'
              : 'text-indigo-600';
            
            return (
              <Card key={index} className={`bg-gradient-to-br ${bgColor} shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden`}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${iconColor} rounded-lg flex items-center justify-center mr-4`}>
                      <IconComponent className="text-white h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 ${techColor} rounded-full text-sm font-medium`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      {project.featured ? (
                        <>
                          <Star className="mr-1 h-4 w-4 text-yellow-500 fill-current" />
                          <span>Featured Project</span>
                        </>
                      ) : (
                        <>
                          <Users className="mr-1 h-4 w-4 text-blue-500" />
                          <span>ML Project</span>
                        </>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className={`${textColor} hover:${textColor.replace('text-', 'bg-').replace('-600', '-50')} font-medium`}
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className={`${textColor} hover:${textColor.replace('text-', 'bg-').replace('-600', '-50')} font-medium`}
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
