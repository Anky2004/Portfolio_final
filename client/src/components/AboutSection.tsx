import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by curiosity and fueled by innovation, I'm passionate about leveraging technology to solve real-world problems.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As a final-year Electronics and Communication Engineering student at the Institute of Engineering and Management, I've maintained a stellar YGPA of 9.03 while diving deep into the fascinating world of technology.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              My passion lies at the intersection of full-stack development and artificial intelligence. I believe in creating solutions that not only work efficiently but also make a meaningful impact on people's lives. From developing AI-powered medical chatbots to building recommendation systems, I'm constantly exploring new technologies and pushing the boundaries of what's possible.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Problem Solver</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Team Player</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Quick Learner</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Innovation Enthusiast</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">9.03</div>
                <div className="text-gray-600 font-medium">YGPA</div>
                <div className="text-sm text-gray-500">Academic Excellence</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">2+</div>
                <div className="text-gray-600 font-medium">Internships</div>
                <div className="text-sm text-gray-500">Industry Experience</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">5+</div>
                <div className="text-gray-600 font-medium">Projects</div>
                <div className="text-sm text-gray-500">Built & Deployed</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">1</div>
                <div className="text-gray-600 font-medium">Publication</div>
                <div className="text-sm text-gray-500">Research Paper</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
