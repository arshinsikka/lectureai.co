import { useState } from "react";
import { Mail, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // For now, store in localStorage as a simple solution
      const existingEmails = JSON.parse(localStorage.getItem("newsletter_emails") || "[]");
      
      if (existingEmails.includes(email)) {
        toast({
          title: "Already subscribed",
          description: "You're already on our updates list!",
        });
        setIsSubmitting(false);
        return;
      }
      
      existingEmails.push(email);
      localStorage.setItem("newsletter_emails", JSON.stringify(existingEmails));
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      setEmail("");
      
      toast({
        title: "Success!",
        description: "You've been added to our updates list.",
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-orange-100 p-3 rounded-full">
            <Rocket className="h-8 w-8 text-orange-600" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Stay Updated on Lecture AI's Progress
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          We're building the future of smarter, AI-powered learning. Be the first to know when we launch.
        </p>
        
        {isSuccess ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center mb-3">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-green-800 font-medium">
              Thanks! You'll hear from us soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-orange-600 hover:bg-orange-700"
              >
                {isSubmitting ? "Subscribing..." : "Get Updates"}
              </Button>
            </div>
          </form>
        )}
        
        <p className="text-sm text-gray-500 mt-4">
          No spam, just product updates and early access invites.
        </p>
      </div>
    </section>
  );
}