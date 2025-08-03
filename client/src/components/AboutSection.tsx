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
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">My Journey</h3>
          <p className="text-lg text-gray-600 leading-relaxed text-center">
            I'm currently a final-year Electronics and Communication Engineering student at the Institute of Engineering and Management, maintaining a YGPA of 9.03. My expertise spans across full-stack development, AI/ML technologies including TensorFlow, Python, and Flask. I'm passionate about creating innovative solutions that bridge the gap between technology and real-world applications.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Problem Solver</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Team Player</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Quick Learner</span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Innovation Enthusiast</span>
          </div>
        </div>
      </div>
    </section>
  );
}
