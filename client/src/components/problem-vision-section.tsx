import { AlertTriangle, Target } from "lucide-react";

export function ProblemVisionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problem Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                The Problem We're Solving
              </h2>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
              "Rewatching Isn't Learning — It's Wasting Time."
            </h3>
            
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                University students spend hours rewatching lectures to take notes, extract key concepts, or catch up on missed information. Current tools like Panopto or Zoom transcripts are inaccurate, poorly formatted, and not built for fast revision.
              </p>
              <p>
                Lectures often include technical terms, multiple accents, and last-minute announcements — but students are left to manage all of this manually.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Vision
              </h2>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 leading-tight">
              "AI-Powered Learning, Built for Real Classrooms"
            </h3>
            
            <div className="text-lg text-gray-600 leading-relaxed">
              <p>
                At LectureAI, we imagine a future where students don't have to rewatch, rewind, or rely on incomplete notes. Instead, they get AI-generated summaries, key concepts, and even deadlines — all translated, structured, and ready for revision within minutes of the lecture ending. We're building not just a tool, but a new academic standard for smarter, stress-free learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}