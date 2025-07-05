import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation onWaitlistClick={() => {}} />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using LectureAI, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
              <p className="text-gray-700 mb-4">
                Permission is granted to temporarily use LectureAI for personal, non-commercial 
                transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Accounts</h2>
              <p className="text-gray-700 mb-4">
                When you create an account with us, you must provide information that is accurate, 
                complete, and current at all times. You are responsible for safeguarding your account.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prohibited Uses</h2>
              <p className="text-gray-700 mb-4">
                You may not use our service for any unlawful purpose or to solicit others to perform 
                unlawful acts. You may not violate any international, federal, provincial, or state 
                regulations or laws.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                In no event shall LectureAI or its suppliers be liable for any damages arising out of 
                the use or inability to use the materials on LectureAI's website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms of Service, please contact us at legal@lectureai.com
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}