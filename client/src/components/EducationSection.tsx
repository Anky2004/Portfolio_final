import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, School, BookOpen } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology",
    field: "Electronics and Communication Engineering",
    institution: "Institute of Engineering and Management",
    period: "2022 - 2026",
    
  },
  {
    degree: "Higher Secondary (XII)",
    field: "AISSCE",
    institution: "South Point High School",
    period: "All India Senior School Certificate Examination",
   
  },
  {
    degree: "Secondary (X)",
    field: "AISSE",
    institution: "South Point High School",
    period: "All India Secondary School Examination",
   
  },
];

const getColorClasses = (color: string) => {
  const colors = {
    purple: {
      gradient: "from-purple-600 to-purple-500",
      text: "text-purple-600",
      achievement: "text-purple-600",
    },
    indigo: {
      gradient: "from-indigo-600 to-indigo-500",
      text: "text-indigo-600",
      achievement: "text-indigo-600",
    },
    green: {
      gradient: "from-green-600 to-green-500",
      text: "text-green-600",
      achievement: "text-green-600",
    },
  };
  return colors[color as keyof typeof colors] || colors.purple;
};

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a strong foundation through academic excellence and continuous learning.
          </p>
        </div>
        <div className="space-y-8">
          {educationData.map((edu, index) => {
            const IconComponent = edu.icon;
            const colorClasses = getColorClasses(edu.color);
            
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="flex items-start">
                      <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses.gradient} rounded-lg flex items-center justify-center mr-6 flex-shrink-0`}>
                        <IconComponent className="text-white h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                        <p className={`text-lg ${colorClasses.text} font-medium mb-2`}>{edu.field}</p>
                        <p className="text-gray-600 mb-2">{edu.institution}</p>
                        <div className="flex items-center text-gray-500">
                          <span className="mr-2">🎓</span>
                          {edu.period}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-right">
                      <div className={`text-3xl font-bold ${colorClasses.achievement} mb-1`}>
                        {edu.achievement}
                      </div>
                      <div className="text-gray-600 font-medium">{edu.achievementLabel}</div>
                      {edu.achievementSubtext && (
                        <div className="text-sm text-gray-500">{edu.achievementSubtext}</div>
                      )}
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
