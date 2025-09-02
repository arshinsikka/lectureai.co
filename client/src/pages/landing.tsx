import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ProblemVisionSection } from "@/components/problem-vision-section";
import { FeaturesSection } from "@/components/features-section";
import { VisionSection } from "@/components/vision-section";
import { TeamSection } from "@/components/team-section";
import { MilestonesRoadmapSection } from "@/components/milestones-roadmap-section";
import { ContactSection } from "@/components/contact-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Rocket, Mail, Play } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Landing() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [waitlistData, setWaitlistData] = useState({ name: "", email: "" });
  const { toast } = useToast();

  const waitlistMutation = useMutation({
    mutationFn: (data: typeof waitlistData) => apiRequest("POST", "/api/waitlist", data),
    onSuccess: () => {
      toast({
        title: "Welcome to the waitlist! 🎉",
        description: "We'll notify you as soon as Lecture AI launches.",
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

  return (
    <div className="min-h-screen bg-white">
      <Navigation onWaitlistClick={() => setIsWaitlistOpen(true)} />
      
      <main className="pt-20">
        <HeroSection onWaitlistClick={() => setIsWaitlistOpen(true)} />
        <ProblemVisionSection />
        <FeaturesSection />
        <VisionSection />
        <TeamSection />
        <MilestonesRoadmapSection />
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of students who are already revolutionizing their note-taking with Lecture AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsWaitlistOpen(true)}
                className="bg-white text-orange-500 px-8 py-4 text-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Join the Waitlist
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  window.open('https://www.dropbox.com/scl/fi/3drnzwbqw1go4hsb5yluq/MVP-video-latest.mp4?rlkey=h1wnumtczbgu1k1s870h8pu8m&st=jg34zkrt&dl=0', '_blank');
                }}
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-orange-500 transition-all duration-200"
              >
                <Play className="mr-2 h-5 w-5" />
                🎬 Watch Demo
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-orange-500 transition-all duration-200"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </div>
          </div>
        </section>
        
        <ContactSection />
        <NewsletterSection />
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
              Be the first to experience Lecture AI when we launch. We'll notify you as soon as it's ready!
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
