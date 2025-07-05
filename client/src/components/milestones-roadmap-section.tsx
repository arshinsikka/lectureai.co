import { CheckCircle, Clock, Rocket, Globe } from "lucide-react";

export function MilestonesRoadmapSection() {
  const milestones = [
    {
      status: "completed",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      date: "Feb 2025",
      title: "Problem Validated",
      description: "Surveyed 100+ NUS students. 82% want better lecture transcripts.",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      status: "completed",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      date: "Mar 2025",
      title: "Tech Stack Finalized",
      description: "Zoom + Whisper + GPT summarization + Mandarin pipeline defined.",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      status: "completed",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      date: "Jul 2025",
      title: "Prototype & Website Live",
      description: "Launched public-facing website and began early demo development.",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      status: "in-progress",
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      date: "Aug–Sep 2025",
      title: "Model Integration",
      description: "Building transcription + summarization + translation flow.",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      status: "upcoming",
      icon: <Rocket className="h-6 w-6 text-blue-800" />,
      date: "Oct 2025",
      title: "Beta with NUS Students",
      description: "Plan to onboard 100+ students and professors for structured feedback.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      status: "upcoming",
      icon: <Globe className="h-6 w-6 text-blue-800" />,
      date: "2026",
      title: "NUS Market Expansion",
      description: "Scale across all NUS faculties and departments to serve the entire student body.",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      status: "future",
      icon: <Globe className="h-6 w-6 text-gray-500" />,
      date: "2027",
      title: "ASEAN Expansion",
      description: "Targeting Malaysia, Indonesia, Thailand with pilot outreach.",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Milestones & Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our journey from problem discovery to transforming education across Southeast Asia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className={`${milestone.bgColor} ${milestone.borderColor} border-2 rounded-2xl p-6 transition-transform hover:scale-105`}>
              <div className="flex items-center space-x-3 mb-4">
                {milestone.icon}
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                  {milestone.date}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {milestone.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}