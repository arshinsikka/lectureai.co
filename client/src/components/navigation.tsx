import { useState } from "react";
import { Menu, X, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import logoPath from "@assets/C18BB098-A3BD-4889-815E-9E142058F180_1_201_a_1751699348415.jpeg";

interface NavigationProps {
  onWaitlistClick: () => void;
}

export function Navigation({ onWaitlistClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src={logoPath} alt="LectureAI" className="w-10 h-10" />
          <span className="text-xl font-bold text-gray-900">LectureAI</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {location === "/" ? (
            <>
              <Link
                href="/how-it-works"
                className="text-gray-600 hover:text-orange-500 transition-colors hover:underline"
              >
                How It Works
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-orange-500 transition-colors hover:underline"
              >
                Contact
              </button>
              <Link
                href="/legal"
                className="text-gray-600 hover:text-orange-500 transition-colors hover:underline"
              >
                Legal
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/"
                className="text-gray-600 hover:text-orange-500 transition-colors hover:underline"
              >
                Home
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-600 hover:text-orange-500 transition-colors hover:underline"
              >
                How It Works
              </Link>
              <Link
                href="/#contact"
                className="text-gray-600 hover:text-orange-500 transition-colors hover:underline"
              >
                Contact
              </Link>
              <Link
                href="/legal"
                className="text-gray-600 hover:text-orange-500 transition-colors hover:underline"
              >
                Legal
              </Link>
            </>
          )}
          <Button
            onClick={onWaitlistClick}
            className="bg-orange-500 text-white hover:bg-orange-600"
          >
            Join Waitlist
          </Button>
        </div>
        
        <button
          className="md:hidden text-gray-600 hover:text-orange-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 space-y-4">
            {location === "/" ? (
              <>
                <Link
                  href="/how-it-works"
                  className="block w-full text-left text-gray-600 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Contact
                </button>
                <Link
                  href="/legal"
                  className="block w-full text-left text-gray-600 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Legal
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/"
                  className="block w-full text-left text-gray-600 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/how-it-works"
                  className="block w-full text-left text-gray-600 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="/#contact"
                  className="block w-full text-left text-gray-600 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/legal"
                  className="block w-full text-left text-gray-600 hover:text-orange-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Legal
                </Link>
              </>
            )}
            <Button
              onClick={onWaitlistClick}
              className="w-full bg-orange-500 text-white hover:bg-orange-600"
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
