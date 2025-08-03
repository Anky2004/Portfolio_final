import { Card, CardContent } from "@/components/ui/card";
import { Brain, BarChart, Briefcase, Code } from "lucide-react";

const certifications = [
  {
    title: "Introduction to Generative AI",
    provider: "Coursera",
    icon: Brain,
    color: "blue",
  },
  {
    title: "ML Foundations: Statistics",
    provider: "LinkedIn Learning",
    icon: BarChart,
    color: "green",
  },
  {
    title: "Deloitte Technology Job Simulation",
    provider: "Forage",
    icon: Briefcase,
    color: "purple",
  },
  {
    title: "Machine Learning with Python",
    provider: "IBM - Coursera",
    icon: Code,
    color: "indigo",
  },
];

const getColorClasses = (color: string) => {
  const colors = {
    blue: {
      bg: "from-blue-50 to-blue-100",
      icon: "bg-blue-600",
      text: "text-blue-600",
    },
    green: {
      bg: "from-green-50 to-green-100",
      icon: "bg-green-600",
      text: "text-green-600",
    },
    purple: {
      bg: "from-purple-50 to-purple-100",
      icon: "bg-purple-600",
      text: "text-purple-600",
    },
    indigo: {
      bg: "from-indigo-50 to-indigo-100",
      icon: "bg-indigo-600",
      text: "text-indigo-600",
    },
  };
  return colors[color as keyof typeof colors] || colors.blue;
};

export default function CertificationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and skill enhancement through industry-recognized certifications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            const colorClasses = getColorClasses(cert.color);
            
            return (
              <Card key={index} className={`bg-gradient-to-br ${colorClasses.bg} shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 ${colorClasses.icon} rounded-lg flex items-center justify-center mr-3`}>
                      <IconComponent className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{cert.title}</h3>
                      <p className={`${colorClasses.text} text-sm`}>{cert.provider}</p>
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
