import { AlertTriangle } from "lucide-react";

export function ProblemVisionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-3 mb-6">
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
          
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            <p>
              University students spend hours rewatching lectures to take notes, extract key concepts, or catch up on missed information. Current tools like Panopto or Zoom transcripts are inaccurate, poorly formatted, and not built for fast revision.
            </p>
            <p>
              Lectures often include technical terms, multiple accents, and last-minute announcements — but students are left to manage all of this manually.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}