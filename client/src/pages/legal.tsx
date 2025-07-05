import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function Legal() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation onWaitlistClick={() => {}} />
      
      <main className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy & Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            {/* Privacy Policy Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Privacy Policy</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Information We Collect</h3>
                  <p className="text-gray-700">
                    We collect information you provide directly to us, such as when you create an account, 
                    join our waitlist, or contact us for support. This includes your name, email address, 
                    and any messages you send to us.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">How We Use Your Information</h3>
                  <p className="text-gray-700">
                    We use the information we collect to provide, maintain, and improve our services, 
                    communicate with you about updates and new features, respond to your inquiries, 
                    and comply with legal obligations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Information Sharing</h3>
                  <p className="text-gray-700">
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy or as required by law.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Data Security</h3>
                  <p className="text-gray-700">
                    We implement appropriate security measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction. However, 
                    no method of transmission over the internet is 100% secure.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Your Rights</h3>
                  <p className="text-gray-700">
                    You have the right to access, update, or delete your personal information. 
                    You may also opt out of receiving promotional communications from us at any time.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Terms of Service Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Terms of Service</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Acceptance of Terms</h3>
                  <p className="text-gray-700">
                    By accessing and using Lecture AI, you accept and agree to be bound by the terms 
                    and provisions of this agreement. If you do not agree to these terms, please do not use our service.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Use License</h3>
                  <p className="text-gray-700">
                    Permission is granted to use Lecture AI for personal, educational, and non-commercial 
                    purposes. This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for commercial purposes</li>
                    <li>Attempt to reverse engineer any software</li>
                    <li>Remove any copyright or proprietary notations</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">User Accounts</h3>
                  <p className="text-gray-700">
                    When you create an account with us, you must provide information that is accurate, 
                    complete, and current at all times. You are responsible for safeguarding your account 
                    and all activities that occur under your account.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Prohibited Uses</h3>
                  <p className="text-gray-700">
                    You may not use our service for any unlawful purpose, to violate any international, 
                    federal, provincial, or state regulations or laws, or to transmit any malicious code 
                    or interfere with the security of our service.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
                  <p className="text-gray-700">
                    In no event shall Lecture AI or its suppliers be liable for any damages arising out of 
                    the use or inability to use the service, including but not limited to damages for loss 
                    of data or profit, or due to business interruption.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Modifications</h3>
                  <p className="text-gray-700">
                    We may revise these terms of service at any time without notice. By using this service, 
                    you are agreeing to be bound by the then-current version of these terms.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Contact Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Contact Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  If you have any questions about these terms or our privacy practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> teamlectureai@gmail.com | <strong>Website:</strong> lectureai.co</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}