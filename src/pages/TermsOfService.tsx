import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>

          <p className="text-sm text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-foreground/90">
            <p className="text-base leading-relaxed mb-6">
              Welcome to the Ocean Global Training Academy (“OceanGTA”) website. These Terms of Service govern your access to and use of our website and services. By using our website or enrolling in our programs, you agree to be bound by these terms.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">1. Use of Our Services</h2>
            <p className="text-base leading-relaxed mb-4">
              You may use our website for lawful purposes only. You agree not to use the site in any way that could damage, disable, overburden, or impair our services, or interfere with any other party's use of the site.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">2. Program Enrollment</h2>
            <p className="text-base leading-relaxed mb-4">
              Enrollment in any OceanGTA program is subject to availability, acceptance of applicable fees, and agreement to any additional terms provided at the time of registration. Program details, schedules, and fees may change without prior notice.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">3. Intellectual Property</h2>
            <p className="text-base leading-relaxed mb-4">
              All content on this website, including text, graphics, logos, images, and course materials, is the property of OceanGTA or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written permission.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">4. User Submissions</h2>
            <p className="text-base leading-relaxed mb-4">
              By submitting inquiries, feedback, or other content through our website, you grant us a non-exclusive, royalty-free license to use, reproduce, and respond to your submission. You represent that you have the right to share any information you provide.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">5. Limitation of Liability</h2>
            <p className="text-base leading-relaxed mb-4">
              To the fullest extent permitted by law, OceanGTA shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your access to or use of our website or services, even if advised of the possibility of such damages.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">6. Disclaimer of Warranties</h2>
            <p className="text-base leading-relaxed mb-4">
              Our website and services are provided on an “as is” and “as available” basis. We make no warranties, express or implied, regarding the accuracy, reliability, or availability of the website or any program outcomes.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">7. Termination</h2>
            <p className="text-base leading-relaxed mb-4">
              We reserve the right to suspend or terminate your access to our website or services at any time, with or without cause, if we believe you have violated these terms or applicable laws.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">8. Governing Law</h2>
            <p className="text-base leading-relaxed mb-4">
              These Terms of Service shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">9. Changes to These Terms</h2>
            <p className="text-base leading-relaxed mb-4">
              We may update these Terms of Service from time to time. Continued use of our website after changes are posted constitutes your acceptance of the revised terms.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">10. Contact Us</h2>
            <p className="text-base leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="flex items-start gap-3 mt-2">
              <Mail size={18} className="text-[hsl(32,90%,50%)] mt-1 shrink-0" />
              <a
                href="mailto:business@oceangta.com"
                className="text-foreground hover:text-[hsl(32,90%,50%)] transition-colors"
              >
                business@oceangta.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
