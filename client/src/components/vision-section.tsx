import { CheckCircle } from "lucide-react";

export function VisionSection() {
  const visionPoints = [
    {
      title: "Accessibility First",
      description: "Making education accessible to students with diverse learning needs and language backgrounds."
    },
    {
      title: "Efficiency Focused",
      description: "Reducing the time spent on note-taking so students can focus on understanding and application."
    },
    {
      title: "Quality Assured",
      description: "Trusted by educators and validated by academic institutions for accuracy and reliability."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="University lecture hall filled with students actively taking notes during a lecture" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Vision for Education
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe that learning should be accessible, efficient, and personalized. LectureAI is designed to bridge the gap between traditional lecture formats and modern learning needs.
            </p>
            <div className="space-y-4">
              {visionPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{point.title}</h4>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
