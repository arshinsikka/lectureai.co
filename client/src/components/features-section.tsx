import { Mic, Brain, Globe, BookOpen, Calendar, FileText } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Mic className="h-6 w-6 text-white" />,
      title: "Audio to Text",
      description: "Advanced speech recognition converts lecture audio into accurate transcripts in real-time.",
      bgColor: "bg-orange-500"
    },
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: "AI Summarization",
      description: "Intelligent algorithms extract key concepts and create structured summaries automatically.",
      bgColor: "bg-blue-800"
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "Bilingual Support",
      description: "Generate notes in multiple languages to support diverse learning needs.",
      bgColor: "bg-orange-500"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-white" />,
      title: "Topic-Wise Segmentation",
      description: "AI automatically breaks down long lectures into logically grouped topics for faster review.",
      bgColor: "bg-blue-800"
    },
    {
      icon: <Calendar className="h-6 w-6 text-white" />,
      title: "Deadline & Task Extraction",
      description: "Uses NLP to detect professor instructions like assignments, due dates, and announcements.",
      bgColor: "bg-orange-500"
    },
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: "Formatted Revision-Ready Notes",
      description: "The final document is auto-structured with summaries, formulas, Mandarin toggle, and downloadable as DOCX or PDF.",
      bgColor: "bg-blue-800"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose LectureAI?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered platform transforms the way students learn by converting complex lectures into digestible, structured content.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
