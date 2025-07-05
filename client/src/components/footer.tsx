import { Brain } from "lucide-react";
import logoPath from "@assets/image_1751701141612.png";

export function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" }
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Team", href: "#team" }
    ],
    support: [
      { name: "Contact", href: "#contact" },
      { name: "Legal", href: "/legal" }
    ]
  };



  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src={logoPath} 
                alt="Lecture AI Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="text-lg font-bold">Lecture AI</span>
            </div>
            <p className="text-gray-400">
              Lecture AI is a student-led AI venture from NUS, built to turn university lectures into multilingual, revision-ready notes — proudly backed by BLOCK71 Singapore.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Lecture AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
