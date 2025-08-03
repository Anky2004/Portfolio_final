import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, Award, ExternalLink } from "lucide-react";

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Publications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contributing to the academic community through research and innovation.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                  <FileText className="text-white h-8 w-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Review Paper on Machine Learning Models for Photonic Crystal
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Users className="mr-2 h-4 w-4" />
                      <span className="font-medium">Authors:</span>
                    </div>
                    <span className="text-purple-600 font-medium">Ankita Saha</span>
                    <span className="text-gray-600">Jishan Mitra</span>
                    <span className="text-gray-600">Dr Rajib Ghosh</span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Comprehensive review of machine learning applications in photonic crystal research, analyzing various models and their effectiveness in predicting optical properties and optimizing crystal structures.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-sm font-medium">Machine Learning</span>
                    <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-sm font-medium">Photonic Crystals</span>
                    <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-sm font-medium">Research Paper</span>
                    <span className="px-3 py-1 bg-purple-200 text-purple-700 rounded-full text-sm font-medium">Review</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Award className="mr-2 h-4 w-4 text-yellow-500" />
                      <span>Academic Publication</span>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 font-medium hover:transform hover:translate-x-1 transition-all duration-200"
                    >
                      <a href="https://ieeexplore.ieee.org/document/10959606" target="_blank" rel="noopener noreferrer">
                        Read Paper
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
