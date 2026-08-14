import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>

          <p className="text-sm text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none text-foreground/90">
            <p className="text-base leading-relaxed mb-6">
              Ocean Global Training Academy (“OceanGTA,” “we,” “us,” or “our”) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
            <p className="text-base leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, organization, and any message you submit through our inquiry forms. We also collect standard technical data automatically, including your IP address, browser type, device information, and pages visited.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
            <p className="text-base leading-relaxed mb-4">
              We use the information we collect to respond to your inquiries, provide program information, schedule consultations, improve our website and services, communicate updates, and comply with legal obligations.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">3. Sharing Your Information</h2>
            <p className="text-base leading-relaxed mb-4">
              We do not sell your personal information. We may share information with trusted service providers who assist us in operating our website and delivering services, or when required by law or to protect our rights.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">4. Cookies and Tracking</h2>
            <p className="text-base leading-relaxed mb-4">
              We may use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You can manage cookie preferences through your browser settings.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">5. Data Security</h2>
            <p className="text-base leading-relaxed mb-4">
              We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">6. Your Rights</h2>
            <p className="text-base leading-relaxed mb-4">
              Depending on your jurisdiction, you may have the right to access, correct, delete, or restrict the processing of your personal information. To exercise these rights, please contact us using the information below.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">7. Third-Party Links</h2>
            <p className="text-base leading-relaxed mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">8. Changes to This Policy</h2>
            <p className="text-base leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-3">9. Contact Us</h2>
            <p className="text-base leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicy;
