import { CheckCircle, Target, Zap, Shield } from "lucide-react";

export function VisionSection() {
  const visionPillars = [
    {
      title: "Accessibility First",
      icon: <Target className="h-5 w-5 text-orange-500" />
    },
    {
      title: "Efficiency Focused", 
      icon: <Zap className="h-5 w-5 text-orange-500" />
    },
    {
      title: "Quality Assured",
      icon: <Shield className="h-5 w-5 text-orange-500" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Vision for Smarter Learning
          </h2>
          
          <div className="space-y-6 mb-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              At LectureAI, we envision a learning experience where students no longer rewatch, rewind, or take fragmented notes. Instead, they receive AI-powered, topic-based summaries with key takeaways, formulas, and deadlines — ready to review, translate, and act on.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We aim to make academic content accessible, efficient, and structured — especially for students with diverse learning styles and language needs.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {visionPillars.map((pillar, index) => (
              <div key={index} className="flex items-center space-x-2 bg-gray-50 rounded-lg px-4 py-3">
                {pillar.icon}
                <span className="font-semibold text-gray-900">{pillar.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
