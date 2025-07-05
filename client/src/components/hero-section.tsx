import { Button } from "@/components/ui/button";
import { Rocket, Download, Users, GraduationCap } from "lucide-react";

interface HeroSectionProps {
  onWaitlistClick: () => void;
}

export function HeroSection({ onWaitlistClick }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                Transforming Lectures into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-800">
                  Smart, Structured Notes
                </span>
                — Powered by AI
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Lecture AI converts university lectures into bilingual, revision-friendly summaries using AI — designed for students, trusted by educators.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={onWaitlistClick}
                className="bg-orange-500 text-white px-8 py-4 text-lg font-semibold hover:bg-orange-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Join the Waitlist
              </Button>
              <Button
                variant="outline"
                className="border-2 border-blue-800 text-blue-800 px-8 py-4 text-lg font-semibold hover:bg-blue-800 hover:text-white transition-all duration-200"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/files/lectureai-pitch-deck.pdf';
                  link.download = 'LECTURE AI PITCH DECK.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                📥 Download Pitch Deck
              </Button>
            </div>
            

          </div>
          
          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="AI technology interface on laptop screen showcasing smart note-taking capabilities" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            

            

          </div>
        </div>
      </div>
    </section>
  );
}
