import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Brain, Database, Cog, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    color: "purple",
    skills: [
      { name: "C++", level: 4 },
      { name: "C", level: 4 },
      { name: "Python", level: 5 },
    ]
  },
  {
    title: "Web Development",
    icon: Globe,
    color: "indigo",
    skills: [
      { name: "HTML/CSS", level: 5 },
      { name: "Flask", level: 4 },
    ]
  },
  {
    title: "AI/ML",
    icon: Brain,
    color: "pink",
    skills: [
      { name: "TensorFlow", level: 4 },
      { name: "Pandas", level: 5 },
      { name: "NumPy", level: 5 },
      { name: "Matplotlib", level: 4 },
      { name: "scikit-learn", level: 4 },
    ]
  },
  {
    title: "Databases",
    icon: Database,
    color: "green",
    skills: [
      { name: "MySQL", level: 4 },
      { name: "SQLite", level: 5 },
    ]
  },
  {
    title: "Core CS",
    icon: Settings,
    color: "purple",
    skills: [
      { name: "DSA", level: 5 },
      { name: "OOPS", level: 4 },
      { name: "OS", level: 4 },
    ]
  },
];

const getColorClasses = (color: string) => {
  const colors = {
    purple: "from-purple-500 to-purple-600 bg-purple-500",
    indigo: "from-indigo-500 to-indigo-600 bg-indigo-500",
    pink: "from-pink-500 to-pink-600 bg-pink-500",
    green: "from-green-500 to-green-600 bg-green-500",
  };
  return colors[color as keyof typeof colors] || colors.purple;
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building innovative solutions across the full technology stack.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const colorClasses = getColorClasses(category.color);
            
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="text-white h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <span className="text-gray-700">{skill.name}</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <div
                              key={dot}
                              className={`w-2 h-2 rounded-full mr-1 ${
                                dot <= skill.level 
                                  ? `${getColorClasses(category.color).split(' ')[2]}` 
                                  : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
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
