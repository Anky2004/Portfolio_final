import { Card, CardContent } from "@/components/ui/card";
import { Building, Laptop } from "lucide-react";

const experiences = [
  {
    company: "State Bank of India",
    position: "Project Intern",
    description: "Anti-money laundering & high risk customer detection",
    details: "Completed a project focusing on financial security and risk assessment using advanced analytics and machine learning techniques to detect suspicious activities and identify high-risk customers.",
    period: "May 2025 - July 2025",
    icon: Building,
    color: "purple",
    upcoming: false,
  },
  {
    company: "Prodigy Infotech",
    position: "Web Development Intern",
    description: "Developed front-end websites like portfolio, weather app, landing page, Multiplayer Tic Tac Toe using HTML, CSS and JavaScript",
    details: "Developed multiple front-end websites including portfolio, weather app, landing page, and multiplayer Tic Tac Toe using HTML, CSS, and JavaScript.",
    period: "June 2024 - July 2024",
    icon: Laptop,
    color: "indigo",
    technologies: ["HTML", "CSS", "JavaScript"],
    upcoming: false,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gaining hands-on experience through internships and real-world projects.
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-purple-400 hidden lg:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative flex flex-col lg:flex-row items-center">
                  {/* Left side */}
                  <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:pr-8' : 'lg:pl-8 order-2 lg:order-1'}`}>
                    {isLeft && (
                      <Card className={`bg-gradient-to-br ${exp.color === 'purple' ? 'from-purple-50 to-purple-100' : 'from-indigo-50 to-indigo-100'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                        <CardContent className="p-8">
                          <div className="flex items-center mb-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${exp.color === 'purple' ? 'from-purple-600 to-purple-500' : 'from-indigo-600 to-indigo-500'} rounded-lg flex items-center justify-center mr-4`}>
                              <IconComponent className="text-white h-6 w-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                              <p className={`${exp.color === 'purple' ? 'text-purple-600' : 'text-indigo-600'} font-medium`}>
                                {exp.position}
                              </p>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">
                            <strong>{exp.description}</strong>
                          </p>
                          <p className="text-gray-600 mb-4">
                            {exp.details}
                          </p>
                          {exp.technologies && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {exp.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className={`px-3 py-1 ${exp.color === 'purple' ? 'bg-purple-200 text-purple-700' : 'bg-indigo-200 text-indigo-700'} rounded-full text-sm`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                          <div className="flex items-center text-gray-500 text-sm">
                            <span className="mr-2">📅</span>
                            {exp.period}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                  
                  {/* Timeline dot */}
                  <div className={`hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${exp.color === 'purple' ? 'bg-purple-600' : 'bg-indigo-600'} rounded-full border-4 border-white shadow-lg`}></div>
                  
                  {/* Right side */}
                  <div className={`w-full lg:w-5/12 ${!isLeft ? 'lg:pl-8' : 'lg:pr-8 order-1 lg:order-2'} ${isLeft ? 'mt-8 lg:mt-0' : ''}`}>
                    {!isLeft && (
                      <Card className={`bg-gradient-to-br ${exp.color === 'purple' ? 'from-purple-50 to-purple-100' : 'from-indigo-50 to-indigo-100'} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                        <CardContent className="p-8">
                          <div className="flex items-center mb-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${exp.color === 'purple' ? 'from-purple-600 to-purple-500' : 'from-indigo-600 to-indigo-500'} rounded-lg flex items-center justify-center mr-4`}>
                              <IconComponent className="text-white h-6 w-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                              <p className={`${exp.color === 'purple' ? 'text-purple-600' : 'text-indigo-600'} font-medium`}>
                                {exp.position}
                              </p>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4">
                            <strong>{exp.description}</strong>
                          </p>
                          <p className="text-gray-600 mb-4">
                            {exp.details}
                          </p>
                          {exp.technologies && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {exp.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className={`px-3 py-1 ${exp.color === 'purple' ? 'bg-purple-200 text-purple-700' : 'bg-indigo-200 text-indigo-700'} rounded-full text-sm`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                          <div className="flex items-center text-gray-500 text-sm">
                            <span className="mr-2">📅</span>
                            {exp.period}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
