import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mic, Webhook, Brain, BookOpen, Calendar, FileText, Rocket } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function HowItWorks() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [waitlistData, setWaitlistData] = useState({ name: "", email: "" });
  const { toast } = useToast();

  const waitlistMutation = useMutation({
    mutationFn: (data: typeof waitlistData) => apiRequest("POST", "/api/waitlist", data),
    onSuccess: () => {
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll notify you as soon as LectureAI launches.",
      });
      setWaitlistData({ name: "", email: "" });
      setIsWaitlistOpen(false);
    },
    onError: (error: any) => {
      toast({
        title: "Error joining waitlist",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistData.email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to join the waitlist.",
        variant: "destructive",
      });
      return;
    }
    waitlistMutation.mutate(waitlistData);
  };

  const handleWaitlistChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWaitlistData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const steps = [
    {
      number: 1,
      title: "Lecture Audio Recorded on Zoom",
      description: "Lecturers host a Zoom session and record the audio (MP3/M4A).",
      icon: <Mic className="h-8 w-8 text-white" />,
      bgColor: "bg-orange-500"
    },
    {
      number: 2,
      title: "Auto-Retrieval via Zoom Webhook",
      description: "LectureAI automatically fetches the audio via Zoom Cloud API — no manual upload needed.",
      icon: <Webhook className="h-8 w-8 text-white" />,
      bgColor: "bg-blue-800"
    },
    {
      number: 3,
      title: "AI-Powered Transcription",
      description: "We use Whisper AI fine tuned to transcribe speech into clear, structured text.",
      icon: <Brain className="h-8 w-8 text-white" />,
      bgColor: "bg-orange-500"
    },
    {
      number: 4,
      title: "Topic Segmentation + Summarization",
      description: "Our AI splits the lecture into topic-based sections and generates summaries, key points, and formulas.",
      icon: <BookOpen className="h-8 w-8 text-white" />,
      bgColor: "bg-blue-800"
    },
    {
      number: 5,
      title: "Action Items + Mandarin Translation",
      description: "LectureAI extracts assignments and announcements and translates key content to Mandarin.",
      icon: <Calendar className="h-8 w-8 text-white" />,
      bgColor: "bg-orange-500"
    },
    {
      number: 6,
      title: "Downloadable Document",
      description: "A DOCX or PDF is generated — ready for revision, bilingual access, and upload to Canvas or other Learning Management Systems.",
      icon: <FileText className="h-8 w-8 text-white" />,
      bgColor: "bg-blue-800"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation onWaitlistClick={() => setIsWaitlistOpen(true)} />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How LectureAI Works
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From lecture to polished notes in under 20 minutes
            </p>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {steps.map((step, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  {/* Step Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-lg font-bold text-gray-600">{step.number}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Step Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-32 h-32 ${step.bgColor} rounded-2xl flex items-center justify-center shadow-lg`}>
                      {step.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join our waitlist to be the first to experience LectureAI's powerful note-taking capabilities.
            </p>
            <Button
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-white text-orange-500 px-8 py-4 text-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Try It Soon
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />

      {/* Waitlist Modal */}
      <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900">
              Join the Waitlist
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Be the first to experience LectureAI when we launch. We'll notify you as soon as it's ready!
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleWaitlistSubmit} className="space-y-4">
            <div>
              <Label htmlFor="waitlist-name" className="text-sm font-medium text-gray-700 mb-2">
                Name (optional)
              </Label>
              <Input
                id="waitlist-name"
                name="name"
                type="text"
                value={waitlistData.name}
                onChange={handleWaitlistChange}
                placeholder="Your name"
                className="w-full"
              />
            </div>
            <div>
              <Label htmlFor="waitlist-email" className="text-sm font-medium text-gray-700 mb-2">
                Email *
              </Label>
              <Input
                id="waitlist-email"
                name="email"
                type="email"
                value={waitlistData.email}
                onChange={handleWaitlistChange}
                placeholder="your@email.com"
                className="w-full"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={waitlistMutation.isPending}
              className="w-full bg-orange-500 text-white hover:bg-orange-600"
            >
              {waitlistMutation.isPending ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}